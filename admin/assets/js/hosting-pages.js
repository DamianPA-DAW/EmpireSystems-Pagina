(function () {
  "use strict";

  const api = window.HostingApiClient;
  if (!api) {
    return;
  }

  const page = document.body.dataset.page;

  function setText(selector, value) {
    const node = document.querySelector(selector);
    if (node) {
      node.textContent = value ?? "-";
    }
  }

  function setValue(selector, value) {
    const node = document.querySelector(selector);
    if (node) {
      node.value = value ?? "";
    }
  }

  function showMessage(text, kind) {
    let toast = document.querySelector("[data-hosting-toast]");
    if (!toast) {
      toast = document.createElement("div");
      toast.setAttribute("data-hosting-toast", "true");
      toast.style.position = "fixed";
      toast.style.right = "20px";
      toast.style.bottom = "20px";
      toast.style.padding = "12px 14px";
      toast.style.borderRadius = "10px";
      toast.style.color = "#fff";
      toast.style.zIndex = "9999";
      toast.style.opacity = "0";
      toast.style.transition = "opacity .2s ease";
      document.body.appendChild(toast);
    }

    toast.style.background = kind === "error" ? "#b42318" : "#157347";
    toast.textContent = text;
    toast.style.opacity = "1";
    clearTimeout(showMessage.timer);
    showMessage.timer = setTimeout(() => {
      toast.style.opacity = "0";
    }, 2200);
  }

  function hydrate(context) {
    setText("[data-server-label]", context.server.label);
    setText("[data-server-position]", `${context.currentIndex + 1} / ${context.totalServers}`);
    setText("[data-field='domain']", context.server.domain);
    setText("[data-field='ip']", context.server.ip);
    setText("[data-field='accessEmail']", context.server.accessEmail);
    setText("[data-field='accessPassword']", context.server.accessPassword);
    setText("[data-field='apiUrl']", context.server.apiUrl);
    setText("[data-field='currentUser']", context.server.currentUser);
    setText("[data-field='dns1']", context.server.dns1);
    setText("[data-field='dns2']", context.server.dns2);
    setText("[data-field='panelUrl']", context.server.panelUrl);
    setText("[data-field='apiKey']", context.server.apiKey);
    setText("[data-field='multiPhpManagerUrl']", context.server.multiPhpManagerUrl);
    setText("[data-field='multiPhpIniEditorUrl']", context.server.multiPhpIniEditorUrl);
    setText("[data-field='softaculousWordpressUrl']", context.server.softaculousWordpressUrl);
    setText("[data-field='cps']", context.server.cps);
    setText("[data-active-domain]", context.activeDomain);
    setText("[data-dns1]", context.server.dns1);
    setText("[data-dns2]", context.server.dns2);
    setValue("[data-domain-input]", context.activeDomain);
    setValue("[data-export-source-input]", context.exportSourceUrl);
    setValue("[data-backup-drive-input]", context.backupDriveUrl);

    const backupEnabled = document.querySelector("[data-backup-enabled]");
    if (backupEnabled) {
      backupEnabled.checked = Boolean(context.backupEnabled);
    }

    document.querySelectorAll("[data-copy-field]").forEach((button) => {
      const key = button.dataset.copyField;
      button.dataset.copyValue = context.server[key] || "";
    });

    const openPanelButton = document.querySelector("[data-open-panel-url]");
    if (openPanelButton) {
      openPanelButton.dataset.href = context.server.panelUrl;
    }

    const goDaddyButton = document.querySelector("[data-open-godaddy]");
    if (goDaddyButton) {
      goDaddyButton.dataset.href = context.goDaddyDomainUrl;
    }
  }

  function bindCopyButtons() {
    document.querySelectorAll("[data-copy-field]").forEach((button) => {
      if (button.dataset.bound === "true") {
        return;
      }
      button.dataset.bound = "true";
      button.addEventListener("click", async () => {
        const value = button.dataset.copyValue || "";
        if (!value) {
          showMessage("No hay valor para copiar", "error");
          return;
        }
        await navigator.clipboard.writeText(value);
        showMessage("Valor copiado", "success");
      });
    });
  }

  function bindOpenButtons() {
    document.querySelectorAll("[data-open-panel-url], [data-open-godaddy]").forEach((button) => {
      if (button.dataset.bound === "true") {
        return;
      }
      button.dataset.bound = "true";
      button.addEventListener("click", () => {
        const href = button.dataset.href;
        if (href) {
          window.open(href, "_blank", "noopener,noreferrer");
        }
      });
    });
  }

  async function openAction(action) {
    const payload = await api.openAction(action);
    if (payload && payload.url) {
      window.open(payload.url, "_blank", "noopener,noreferrer");
      showMessage(`Abierto: ${payload.label}`, "success");
    }
  }

  async function renderSharedServerPages() {
    const context = await api.getContext();
    hydrate(context);
    bindCopyButtons();
    bindOpenButtons();

    const prev = document.querySelector("[data-server-prev]");
    const next = document.querySelector("[data-server-next]");

    if (prev && !prev.dataset.bound) {
      prev.dataset.bound = "true";
      prev.addEventListener("click", async () => {
        const nextContext = await api.selectServer("prev");
        hydrate(nextContext);
        showMessage("Servidor anterior cargado", "success");
      });
    }

    if (next && !next.dataset.bound) {
      next.dataset.bound = "true";
      next.addEventListener("click", async () => {
        const nextContext = await api.selectServer("next");
        hydrate(nextContext);
        showMessage("Servidor siguiente cargado", "success");
      });
    }
  }

  async function renderPanel2() {
    const context = await api.getContext();
    hydrate(context);
    bindOpenButtons();

    const apply = document.querySelector("[data-apply-domain]");
    if (apply && !apply.dataset.bound) {
      apply.dataset.bound = "true";
      apply.addEventListener("click", async () => {
        const domain = document.querySelector("[data-domain-input]")?.value || "";
        const nextContext = await api.setDomain(domain);
        hydrate(nextContext);
        showMessage(`Dominio activo: ${nextContext.activeDomain}`, "success");
      });
    }
  }

  async function renderPanel3() {
    const context = await api.getContext();
    hydrate(context);

    const bindings = [
      ["[data-open-multiphp-manager]", "multiphp_manager"],
      ["[data-open-multiphp-ini]", "multiphp_ini"],
      ["[data-open-softaculous]", "softaculous"]
    ];

    bindings.forEach(([selector, action]) => {
      const button = document.querySelector(selector);
      if (button && !button.dataset.bound) {
        button.dataset.bound = "true";
        button.addEventListener("click", async () => {
          await openAction(action);
        });
      }
    });
  }

  async function renderPanel4() {
    const context = await api.getContext();
    hydrate(context);

    document.querySelectorAll("[data-open-action]").forEach((button) => {
      if (button.dataset.bound === "true") {
        return;
      }
      button.dataset.bound = "true";
      button.addEventListener("click", async () => {
        await openAction(button.dataset.openAction);
      });
    });

    const applyExport = document.querySelector("[data-apply-export-source]");
    if (applyExport && !applyExport.dataset.bound) {
      applyExport.dataset.bound = "true";
      applyExport.addEventListener("click", async () => {
        const value = document.querySelector("[data-export-source-input]")?.value || "";
        const nextContext = await api.setExportSource(value);
        hydrate(nextContext);
        showMessage("Sitio origen guardado", "success");
      });
    }

    const saveBackup = document.querySelector("[data-save-backup]");
    if (saveBackup && !saveBackup.dataset.bound) {
      saveBackup.dataset.bound = "true";
      saveBackup.addEventListener("click", async () => {
        const driveUrl = document.querySelector("[data-backup-drive-input]")?.value || "";
        const enabled = Boolean(document.querySelector("[data-backup-enabled]")?.checked);
        const nextContext = await api.saveBackup(driveUrl, enabled);
        hydrate(nextContext);
        showMessage("Backup guardado", "success");
      });
    }
  }

  async function renderDashboard() {
    const payload = await api.getDashboard();
    setText("[data-dashboard-hero]", payload.hero.value);

    document.querySelectorAll("[data-dashboard-card]").forEach((card, index) => {
      const data = payload.cards[index];
      if (!data) {
        return;
      }

      const setInside = (selector, value) => {
        const node = card.querySelector(selector);
        if (node) {
          node.textContent = value;
        }
      };

      setInside(`[data-card-badge='${index}']`, data.badge);
      setInside(`[data-card-value='${index}']`, data.value);
      setInside(`[data-card-week='${index}']`, data.week);
      setInside(`[data-card-year='${index}']`, data.year);
      setInside(`[data-card-title='${index}']`, data.title);

      const openButton = card.querySelector("[data-dashboard-open]");
      if (openButton) {
        openButton.dataset.href = data.url;
      }
    });

    document.querySelectorAll("[data-dashboard-open]").forEach((button) => {
      if (button.dataset.bound === "true") {
        return;
      }
      button.dataset.bound = "true";
      button.addEventListener("click", () => {
        if (button.dataset.href) {
          window.location.href = button.dataset.href;
        }
      });
    });
  }

  async function bootstrap() {
    try {
      await api.getHealth();
      if (page === "servidores" || page === "panel1") {
        await renderSharedServerPages();
        return;
      }
      if (page === "panel2") {
        await renderPanel2();
        return;
      }
      if (page === "panel3") {
        await renderPanel3();
        return;
      }
      if (page === "panel4") {
        await renderPanel4();
        return;
      }
      if (page === "dashboard") {
        await renderDashboard();
      }
    } catch (error) {
      showMessage(error.message || "No se pudo conectar con la API", "error");
    }
  }

  bootstrap();
})();
