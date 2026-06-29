import { HUB_PROTOTYPE_RUNTIME_CONFIG as committedConfig } from "../prototype-runtime-config.js";

let resolvedConfigPromise;

export async function getPrototypeRuntimeConfig() {
  if (!resolvedConfigPromise) {
    resolvedConfigPromise = (async () => {
      let localConfig = {};
      try {
        const mod = await import("../prototype-runtime-config.local.js");
        localConfig = mod.HUB_PROTOTYPE_RUNTIME_CONFIG || mod.default || {};
      } catch {
        localConfig = {};
      }

      const globalConfig =
        typeof window !== "undefined" ? window.__HUB_PROTOTYPE_RUNTIME_CONFIG || {} : {};

      const merged = {
        ...committedConfig,
        ...localConfig,
        ...globalConfig,
      };

      if (typeof window !== "undefined") {
        window.__HUB_PROTOTYPE_RUNTIME_CONFIG = merged;
      }

      return merged;
    })();
  }

  return resolvedConfigPromise;
}

export async function applyArcGISRuntimeConfig() {
  const cfg = await getPrototypeRuntimeConfig();

  const [esriConfigModule] = await $arcgis.import(["@arcgis/core/config.js"]);
  const esriConfig = esriConfigModule?.default ?? esriConfigModule;

  if (cfg.arcgisPortalUrl) {
    esriConfig.portalUrl = cfg.arcgisPortalUrl;
  }

  if (cfg.arcgisApiKey) {
    esriConfig.apiKey = cfg.arcgisApiKey;
  }

  if (cfg.disableIdentityPrompt === true) {
    esriConfig.request = esriConfig.request || {};
    esriConfig.request.useIdentity = false;
  }

  return cfg;
}

