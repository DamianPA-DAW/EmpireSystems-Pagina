(function (window) {
  "use strict";

  const API_BASE = "http://127.0.0.1:8787/api";

  async function request(path, options) {
    const response = await fetch(`${API_BASE}${path}`, {
      headers: { "Content-Type": "application/json" },
      ...options
    });

    const payload = await response.json();
    if (!response.ok) {
      throw new Error(payload.error || "Error de API");
    }
    return payload;
  }

  window.HostingApiClient = {
    getHealth() {
      return request("/health");
    },
    getContext() {
      return request("/hosting/context");
    },
    selectServer(direction) {
      return request("/hosting/select", {
        method: "POST",
        body: JSON.stringify({ direction })
      });
    },
    setDomain(domain) {
      return request("/hosting/domain", {
        method: "POST",
        body: JSON.stringify({ domain })
      });
    },
    setExportSource(url) {
      return request("/wordpress/export-source", {
        method: "POST",
        body: JSON.stringify({ url })
      });
    },
    saveBackup(driveUrl, enabled) {
      return request("/wordpress/backup", {
        method: "POST",
        body: JSON.stringify({ driveUrl, enabled })
      });
    },
    openAction(action) {
      return request("/actions/open", {
        method: "POST",
        body: JSON.stringify({ action })
      });
    },
    getDashboard() {
      return request("/dashboard");
    }
  };
})(window);
