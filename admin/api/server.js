"use strict";

const http = require("http");
const fs = require("fs");
const path = require("path");
const { URL } = require("url");

const HOST = "127.0.0.1";
const PORT = 8787;
const STORE_PATH = path.join(__dirname, "data", "store.json");

let state = readStore();
let persistTimer = null;

function readStore() {
  return JSON.parse(fs.readFileSync(STORE_PATH, "utf8"));
}

function writeStoreSoon() {
  clearTimeout(persistTimer);
  persistTimer = setTimeout(() => {
    fs.writeFileSync(STORE_PATH, JSON.stringify(state, null, 2));
  }, 100);
}

function touch() {
  state.lastUpdatedAt = new Date().toISOString();
  writeStoreSoon();
}

function normalizeDomain(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .replace(/^https?:\/\//, "")
    .replace(/\/.*$/, "");
}

function selectedServer() {
  return state.servers.find((server) => server.id === state.selectedServerId) || state.servers[0];
}

function buildContext() {
  const server = selectedServer();
  const activeDomain = normalizeDomain(state.activeDomain) || server.domain;
  const exportSourceUrl = String(state.exportSourceUrl || "").trim();
  const exportDomain = normalizeDomain(exportSourceUrl);
  return {
    selectedServerId: server.id,
    activeDomain,
    exportSourceUrl,
    backupDriveUrl: state.backupDriveUrl || "",
    backupEnabled: Boolean(state.backupEnabled),
    lastUpdatedAt: state.lastUpdatedAt,
    currentIndex: Math.max(0, state.servers.findIndex((item) => item.id === server.id)),
    totalServers: state.servers.length,
    server,
    goDaddyDomainUrl: `https://dcc.godaddy.com/control/dns?domainName=${activeDomain}`,
    urls: {
      wordpressAdminUrl: activeDomain ? `https://${activeDomain}/wp-admin` : server.wordpressAdminUrl,
      wordpressPluginsUrl: activeDomain ? `https://${activeDomain}/wp-admin/plugins.php` : server.wordpressPluginsUrl,
      wordpressImportUrl: activeDomain ? `https://${activeDomain}/wp-admin/admin.php?page=ai1wm_import` : server.wordpressImportUrl,
      exportAdminUrl: exportDomain ? `https://${exportDomain}/wp-admin` : "",
      exportPluginsUrl: exportDomain ? `https://${exportDomain}/wp-admin/plugins.php` : "",
      exportWpressUrl: exportDomain ? `https://${exportDomain}/wp-admin/admin.php?page=ai1wm_export` : "",
      pluginDownloadUrl: "https://servmask.com/products/wordpress-migration-plugin",
      pluginAddonUrl: "https://servmask.com/products/unlimited-extension"
    }
  };
}

function buildDashboard() {
  const context = buildContext();
  const total = state.servers.length;
  const hasDomain = context.activeDomain ? 1 : 0;
  const hasExport = context.exportSourceUrl ? 1 : 0;
  const hasBackup = context.backupEnabled && context.backupDriveUrl ? 1 : 0;

  return {
    hero: {
      label: "EN TIEMPO REAL",
      value: total + hasDomain + hasExport + hasBackup
    },
    cards: [
      {
        badge: "Fase 1",
        value: total,
        week: total * 2,
        year: total * 24,
        title: "CONFIGURACION INICIAL DE HOSTING",
        url: "panel1_configuracion_inicial.html"
      },
      {
        badge: "Fase 2",
        value: hasDomain,
        week: hasDomain * 3,
        year: hasDomain * 22,
        title: "CONEXION DEL DOMINIO AL HOSTING",
        url: "panel2_conexion_hosting.html"
      },
      {
        badge: "Fase 3",
        value: total,
        week: total * 3,
        year: total * 20,
        title: "CONFIGURACION DEL HOSTING POR DOMINIO",
        url: "panel3_configuracion_dominio.html"
      },
      {
        badge: "Fase 4",
        value: hasExport + hasBackup,
        week: (hasExport + hasBackup) * 2 + 1,
        year: (hasExport + hasBackup) * 18 + 7,
        title: "CONFIGURACION WORDPRESS E IMPORTACION",
        url: "panel4_configuracion_wordpress.html"
      }
    ]
  };
}

function sendJson(res, statusCode, payload) {
  res.writeHead(statusCode, {
    "Content-Type": "application/json; charset=utf-8",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type"
  });
  res.end(JSON.stringify(payload));
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    let raw = "";
    req.on("data", (chunk) => {
      raw += chunk;
    });
    req.on("end", () => {
      try {
        resolve(raw ? JSON.parse(raw) : {});
      } catch (error) {
        reject(new Error("JSON invalido"));
      }
    });
    req.on("error", reject);
  });
}

function selectServer(direction) {
  const index = Math.max(0, state.servers.findIndex((server) => server.id === state.selectedServerId));
  const nextIndex = direction === "prev"
    ? (index - 1 + state.servers.length) % state.servers.length
    : (index + 1) % state.servers.length;

  const server = state.servers[nextIndex];
  state.selectedServerId = server.id;
  state.activeDomain = server.domain;
  touch();
  return buildContext();
}

const server = http.createServer(async (req, res) => {
  if (req.method === "OPTIONS") {
    res.writeHead(204, {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type"
    });
    res.end();
    return;
  }

  try {
    const url = new URL(req.url, `http://${req.headers.host}`);

    if (req.method === "GET" && url.pathname === "/api/health") {
      sendJson(res, 200, { ok: true, host: HOST, port: PORT });
      return;
    }

    if (req.method === "GET" && url.pathname === "/api/hosting/context") {
      sendJson(res, 200, buildContext());
      return;
    }

    if (req.method === "POST" && url.pathname === "/api/hosting/select") {
      const body = await readBody(req);
      sendJson(res, 200, selectServer(body.direction === "prev" ? "prev" : "next"));
      return;
    }

    if (req.method === "POST" && url.pathname === "/api/hosting/domain") {
      const body = await readBody(req);
      const domain = normalizeDomain(body.domain);
      if (!domain) {
        sendJson(res, 400, { error: "El dominio es obligatorio" });
        return;
      }
      state.activeDomain = domain;
      touch();
      sendJson(res, 200, buildContext());
      return;
    }

    if (req.method === "POST" && url.pathname === "/api/wordpress/export-source") {
      const body = await readBody(req);
      const value = String(body.url || "").trim();
      if (!value) {
        sendJson(res, 400, { error: "La URL del sitio origen es obligatoria" });
        return;
      }
      state.exportSourceUrl = value;
      touch();
      sendJson(res, 200, buildContext());
      return;
    }

    if (req.method === "POST" && url.pathname === "/api/wordpress/backup") {
      const body = await readBody(req);
      state.backupDriveUrl = String(body.driveUrl || "").trim();
      state.backupEnabled = Boolean(body.enabled);
      touch();
      sendJson(res, 200, buildContext());
      return;
    }

    if (req.method === "POST" && url.pathname === "/api/actions/open") {
      const body = await readBody(req);
      const context = buildContext();
      const actionMap = {
        multiphp_manager: { url: context.server.multiPhpManagerUrl, label: "MultiPHP Manager" },
        multiphp_ini: { url: context.server.multiPhpIniEditorUrl, label: "MultiPHP INI Editor" },
        softaculous: { url: context.server.softaculousWordpressUrl, label: "Softaculous WordPress" },
        wordpress_plugins_download: { url: context.urls.pluginDownloadUrl, label: "Plugin base" },
        wordpress_plugins_download_addon: { url: context.urls.pluginAddonUrl, label: "Extension unlimited" },
        wordpress_admin: { url: context.urls.wordpressAdminUrl, label: "WP Admin" },
        wordpress_plugins: { url: context.urls.wordpressPluginsUrl, label: "Zona de plugins" },
        export_admin: { url: context.urls.exportAdminUrl, label: "WP Admin origen" },
        export_plugins: { url: context.urls.exportPluginsUrl, label: "Plugins origen" },
        export_wpress: { url: context.urls.exportWpressUrl, label: "Exportar .wpress" },
        import_wpress: { url: context.urls.wordpressImportUrl, label: "Importar .wpress" }
      };

      const action = actionMap[body.action];
      if (!action || !action.url) {
        sendJson(res, 400, { error: "Accion no disponible todavia" });
        return;
      }

      sendJson(res, 200, action);
      return;
    }

    if (req.method === "GET" && url.pathname === "/api/dashboard") {
      sendJson(res, 200, buildDashboard());
      return;
    }

    sendJson(res, 404, { error: "Ruta no encontrada" });
  } catch (error) {
    sendJson(res, 500, { error: error.message || "Error interno" });
  }
});

server.listen(PORT, HOST, () => {
  console.log(`API lista en http://${HOST}:${PORT}`);
});
