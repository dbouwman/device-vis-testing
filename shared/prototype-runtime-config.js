export const HUB_PROTOTYPE_RUNTIME_CONFIG = {
  // Set by deploy workflow for hosted previews. Keep empty in source.
  arcgisApiKey: "",
  // Can be overridden per environment when needed.
  arcgisPortalUrl: "https://www.arcgis.com",
  // Safe default that does not require ArcGIS credentials.
  arcgisBasemap: "osm",
  // Avoid interactive sign-in prompts in prototypes.
  disableIdentityPrompt: true,
};

if (typeof window !== "undefined") {
  window.__HUB_PROTOTYPE_RUNTIME_CONFIG = {
    ...HUB_PROTOTYPE_RUNTIME_CONFIG,
    ...(window.__HUB_PROTOTYPE_RUNTIME_CONFIG || {}),
  };
}
