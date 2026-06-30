import { applyArcGISRuntimeConfig } from "../shared/arcgis-runtime-config.js";

const state = {
  prototypePreset: "project",
  width: "1320",
  strategy: "option-1",
  language: "en",
  locationStyle: "list",
  referenceItemFilters: [],
  channelFilters: [],
  stateFilters: [],
  dateCreatedFilter: null,
  dateModifiedFilter: null,
  pageStart: 1,
  composeChannel: "",
  channelPickerOpen: false,
  composeFocusTarget: null,
  editPostIndex: null,
  replyPostIndex: null,
  editReplyPostIndex: null,
  editReplyIndex: null,
  replyThreadDrawerPostIndex: null,
  replyDialogOpen: false,
  replyFocusPostIndex: null,
  replyRestorePostIndex: null,
  pendingResultsScrollTop: null,
  pendingLocationAnimation: null,
  referenceDialogOpen: false,
  referenceDialogPostIndex: null,
  visibleReplyCounts: {},
  expandedLocationPosts: [],
  previewPanelOpen: true,
  composeExpanded: false,
  resultsView: "list",
  appliedFilters: [],
  toggles: {
    searchBar: true,
    mainLayouts: true,
    filters: true,
    subscribe: true,
    download: true,
    recent: false,
    saved: false,
    help: false,
    embed: false
  },
  activeLayout: "default",
  activeUtility: null,
  activeExtra: null
};

const TRANSLATIONS = {
  en: {
    prototypePreset: "Prototype",
    userPreset: "User",
    emptyPreset: "Empty",
    projectPreset: "Project",
    r3ProjectPreset: "R3 project",
    channel: "Regional riverfront resilience coordination updates for cross-agency shade equity pilots, capital sequencing reviews, seasonal maintenance handoffs, public feedback triage, and long-range waterfront access planning",
    auto: "Auto",
    overflowStrategy: "Overflow strategy",
    language: "Language",
    locationStyle: "Location style",
    chips: "Chips",
    miniMap: "Mini map",
    editDisplay: "Edit display",
    close: "Close",
    searchBar: "Search bar",
    mainLayouts: "Main layouts",
    filters: "Filters",
    subscribe: "Subscribe",
    download: "Download",
    recent: "Recent searches",
    saved: "Saved searches",
    help: "Help",
    embed: "Embed",
    search: "Search",
    defaultLayout: "Standard",
    mapLayout: "Map",
    aiMode: "AI mode",
    searchPlaceholder: "Search...",
    recentSearches: "Recent searches",
    suggestedResults: "Suggested results",
    suggestedLocations: "Suggested locations",
    mostPopular: "Most popular",
    filtersApplied: "Filters applied",
    openFilters: "Open filters",
    clearAll: "Clear all",
    startPost: "Start a new post in this discussion...",
    addPost: "Add post",
    newPost: "New post",
    newPostDescription: "Share a question, issue, or idea about canopy coverage on the Anacostia Riverfront.",
    channel: "Channel",
    publicChannels: "Public channels",
    privateChannels: "Private channels",
    channelPicker: "Channel picker",
    viewAllChannels: "View all channels",
    title: "Title",
    comment: "Post body",
    titlePlaceholder: "Add a title (optional)",
    commentPlaceholder: "Add your comment (required field)",
    addLocation: "Add location",
    cancel: "Cancel",
    createPost: "Create post",
    general: "General",
    riverfrontCanopy: "Riverfront canopy",
    dataQuality: "Data quality",
    stewardship: "Stewardship",
    posts: "Posts",
    postsDescription: "{start} - {end} of {count}",
    sortBy: "Sort by",
    latestActivity: "Latest activity",
    newest: "Newest",
    mostReplies: "Most replies",
    mostReactions: "Most reactions",
    list: "List",
    grid: "Grid",
    table: "Table",
    compact: "Compact",
    author: "Author",
    channelHeader: "Channel",
    timestamp: "Timestamp",
    postTitle: "Post title",
    postBody: "Post body",
    reactions: "Reactions",
    replies: "Replies",
    actions: "Actions",
    edit: "Edit",
    editPost: "Edit post",
    updatePost: "Save changes",
    delete: "Delete",
    hide: "Hide",
    show: "Show",
    state: "State",
    approved: "Approved",
    hidden: "Hidden",
    blocked: "Blocked",
    reply: "Reply",
    replyBody: "Reply body",
    replyPlaceholder: "Add your reply (required field)",
    createReply: "Create reply",
    loadMore: "Load more",
    threadView: "Thread view",
    viewAllReplies: "View more replies",
    allReplies: "All replies",
    originalPost: "Original post",
    referenceItem: "Original content",
    referenceSource: "Discussion from",
    referenceDialogTitle: "Pretent you navigate to source",
    openReference: "Open referenced content",
    collapseReplies: "Show fewer replies",
    viewAllLocations: "View all locations",
    collapseLocations: "Show fewer locations",
    repliesWord: "replies",
    replyWord: "reply",
    repliesLabel: "Replies",
    locationsLabel: "Locations",
    options: "Options",
    layout: "Layout",
    panel: "Panel",
    additionalOptions: "Additional options",
    more: "More",
    copyLink: "Copy link",
    emptyResultsHeading: "Be the first to post"
  },
  de: {
    prototypePreset: "Prototyp",
    userPreset: "Benutzer",
    emptyPreset: "Leer",
    projectPreset: "Projekt",
    r3ProjectPreset: "R3-Projekt",
    width: "Breite",
    auto: "Automatisch",
    overflowStrategy: "Uberlaufstrategie",
    language: "Sprache",
    locationStyle: "Standortstil",
    chips: "Chips",
    miniMap: "Mini-Karte",
    editDisplay: "Anzeige bearbeiten",
    close: "Schliessen",
    searchBar: "Suchleiste",
    mainLayouts: "Hauptlayouts",
    filters: "Filter",
    subscribe: "Abonnieren",
    download: "Herunterladen",
    recent: "Letzte Suchanfragen",
    saved: "Gespeicherte Suchanfragen",
    help: "Hilfe",
    embed: "Einbetten",
    search: "Suche",
    defaultLayout: "Standard",
    mapLayout: "Karte",
    aiMode: "KI-Modus",
    searchPlaceholder: "Suchen...",
    recentSearches: "Letzte Suchanfragen",
    suggestedResults: "Vorgeschlagene Ergebnisse",
    suggestedLocations: "Vorgeschlagene Orte",
    mostPopular: "Am beliebtesten",
    filtersApplied: "Angewendete Filter",
    openFilters: "Filter offnen",
    clearAll: "Alle loschen",
    startPost: "Neuen Beitrag in dieser Diskussion beginnen...",
    addPost: "Beitrag hinzufugen",
    newPost: "Neuer Beitrag",
    newPostDescription: "Teilen Sie eine Frage, ein Problem oder eine Idee zur Baumkronenabdeckung am Anacostia Riverfront.",
    channel: "Kanal",
    publicChannels: "Offentliche Kanale",
    privateChannels: "Private Kanale",
    channelPicker: "Kanalauswahl",
    viewAllChannels: "Alle Kanale anzeigen",
    title: "Titel",
    comment: "Beitragsinhalt",
    titlePlaceholder: "Titel hinzufugen (optional)",
    commentPlaceholder: "Kommentar hinzufugen (Pflichtfeld)",
    addLocation: "Ort hinzufugen",
    cancel: "Abbrechen",
    createPost: "Beitrag erstellen",
    general: "Allgemein",
    riverfrontCanopy: "Uferbaumkronen",
    dataQuality: "Datenqualitat",
    stewardship: "Pflege",
    posts: "Beitrage",
    postsDescription: "{start} - {end} of {count}",
    sortBy: "Sortieren nach",
    latestActivity: "Letzte Aktivitat",
    newest: "Neueste",
    mostReplies: "Meiste Antworten",
    mostReactions: "Meiste Reaktionen",
    list: "Liste",
    grid: "Raster",
    table: "Tabelle",
    compact: "Kompakt",
    author: "Autor",
    channelHeader: "Kanal",
    timestamp: "Zeitstempel",
    postTitle: "Beitragstitel",
    postBody: "Beitragsinhalt",
    reactions: "Reaktionen",
    replies: "Antworten",
    actions: "Aktionen",
    state: "Status",
    approved: "Genehmigt",
    hidden: "Ausgeblendet",
    blocked: "Blockiert",
    reply: "Antworten",
    replyBody: "Antwortinhalt",
    replyPlaceholder: "Antwort hinzufugen (Pflichtfeld)",
    createReply: "Antwort erstellen",
    loadMore: "Mehr laden",
    threadView: "Thread view",
    viewAllReplies: "Weitere Antworten anzeigen",
    allReplies: "Alle Antworten",
    originalPost: "Ursprunglicher Beitrag",
    referenceItem: "Ursprungsinhalt",
    referenceSource: "Aus",
    referenceDialogTitle: "Referenzierter Inhalt",
    openReference: "Referenzierten Inhalt offnen",
    collapseReplies: "Weniger Antworten anzeigen",
    viewAllLocations: "Alle Orte anzeigen",
    collapseLocations: "Weniger Orte anzeigen",
    repliesWord: "Antworten",
    replyWord: "Antwort",
    repliesLabel: "Antworten",
    locationsLabel: "Orte",
    options: "Optionen",
    layout: "Layout",
    panel: "Bereich",
    additionalOptions: "Weitere Optionen",
    more: "Mehr",
    copyLink: "Link kopieren",
    emptyResultsHeading: "Noch keine Beitrage",
    emptyResultsMessage: "Diese leere Prototyp-Ansicht hat noch keine Beitrage. Wechseln Sie zu Projekt, um die gefullte Variante zu sehen."
  },
  es: {
    prototypePreset: "Prototipo",
    userPreset: "Usuario",
    emptyPreset: "Vacio",
    projectPreset: "Proyecto",
    r3ProjectPreset: "Proyecto R3",
    width: "Ancho",
    auto: "Automatico",
    overflowStrategy: "Estrategia de desbordamiento",
    language: "Idioma",
    locationStyle: "Estilo de ubicacion",
    chips: "Fichas",
    miniMap: "Mini mapa",
    editDisplay: "Editar vista",
    close: "Cerrar",
    searchBar: "Barra de busqueda",
    mainLayouts: "Disenos principales",
    filters: "Filtros",
    subscribe: "Suscribirse",
    download: "Descargar",
    recent: "Busquedas recientes",
    saved: "Busquedas guardadas",
    help: "Ayuda",
    embed: "Insertar",
    search: "Buscar",
    defaultLayout: "Predeterminado",
    mapLayout: "Mapa",
    aiMode: "Modo IA",
    searchPlaceholder: "Buscar...",
    recentSearches: "Busquedas recientes",
    suggestedResults: "Resultados sugeridos",
    suggestedLocations: "Ubicaciones sugeridas",
    mostPopular: "Mas popular",
    filtersApplied: "Filtros aplicados",
    openFilters: "Abrir filtros",
    clearAll: "Borrar todo",
    startPost: "Inicia una nueva publicacion en esta conversacion...",
    addPost: "Agregar publicacion",
    newPost: "Nueva publicacion",
    newPostDescription: "Comparte una pregunta, un problema o una idea sobre la cobertura de arbolado en Anacostia Riverfront.",
    channel: "Canal",
    publicChannels: "Canales publicos",
    privateChannels: "Canales privados",
    channelPicker: "Selector de canales",
    viewAllChannels: "Ver todos los canales",
    title: "Titulo",
    comment: "Cuerpo de la publicacion",
    titlePlaceholder: "Agregar un titulo (opcional)",
    commentPlaceholder: "Agrega tu comentario (campo obligatorio)",
    addLocation: "Agregar ubicacion",
    cancel: "Cancelar",
    createPost: "Crear publicacion",
    general: "General",
    riverfrontCanopy: "Arbolado ribereno",
    dataQuality: "Calidad de datos",
    stewardship: "Mantenimiento",
    posts: "Publicaciones",
    postsDescription: "{start} - {end} of {count}",
    sortBy: "Ordenar por",
    latestActivity: "Actividad reciente",
    newest: "Mas recientes",
    mostReplies: "Mas respuestas",
    mostReactions: "Mas reacciones",
    list: "Lista",
    grid: "Cuadricula",
    table: "Tabla",
    compact: "Compacto",
    author: "Autor",
    channelHeader: "Canal",
    timestamp: "Marca de tiempo",
    postTitle: "Titulo de la publicacion",
    postBody: "Cuerpo de la publicacion",
    reactions: "Reacciones",
    replies: "Respuestas",
    actions: "Acciones",
    state: "Estado",
    approved: "Aprobado",
    hidden: "Oculto",
    blocked: "Bloqueado",
    reply: "Responder",
    replyBody: "Cuerpo de la respuesta",
    replyPlaceholder: "Agrega tu respuesta (campo obligatorio)",
    createReply: "Crear respuesta",
    loadMore: "Cargar mas",
    threadView: "Thread view",
    viewAllReplies: "Ver mas respuestas",
    allReplies: "Todas las respuestas",
    originalPost: "Publicacion original",
    referenceItem: "Contenido original",
    referenceSource: "De",
    referenceDialogTitle: "Contenido referenciado",
    openReference: "Abrir contenido referenciado",
    collapseReplies: "Mostrar menos respuestas",
    viewAllLocations: "Ver todas las ubicaciones",
    collapseLocations: "Mostrar menos ubicaciones",
    repliesWord: "respuestas",
    replyWord: "respuesta",
    repliesLabel: "Respuestas",
    locationsLabel: "Ubicaciones",
    options: "Opciones",
    layout: "Diseno",
    panel: "Panel",
    additionalOptions: "Opciones adicionales",
    more: "Mas",
    copyLink: "Copiar enlace",
    emptyResultsHeading: "Todavia no hay publicaciones",
    emptyResultsMessage: "Esta version vacia del prototipo todavia no tiene publicaciones. Cambia a Proyecto para ver el estado con contenido."
  },
  fr: {
    prototypePreset: "Prototype",
    userPreset: "Utilisateur",
    emptyPreset: "Vide",
    projectPreset: "Projet",
    r3ProjectPreset: "Projet R3",
    width: "Largeur",
    auto: "Automatique",
    overflowStrategy: "Strategie de debordement",
    language: "Langue",
    locationStyle: "Style d'emplacement",
    chips: "Pastilles",
    miniMap: "Mini carte",
    editDisplay: "Modifier l'affichage",
    close: "Fermer",
    searchBar: "Barre de recherche",
    mainLayouts: "Mises en page principales",
    filters: "Filtres",
    subscribe: "S'abonner",
    download: "Telecharger",
    recent: "Recherches recentes",
    saved: "Recherches enregistrees",
    help: "Aide",
    embed: "Integrer",
    search: "Recherche",
    defaultLayout: "Par defaut",
    mapLayout: "Carte",
    aiMode: "Mode IA",
    searchPlaceholder: "Rechercher...",
    recentSearches: "Recherches recentes",
    suggestedResults: "Resultats suggeres",
    suggestedLocations: "Lieux suggeres",
    mostPopular: "Le plus populaire",
    filtersApplied: "Filtres appliques",
    openFilters: "Ouvrir les filtres",
    clearAll: "Tout effacer",
    startPost: "Commencez une nouvelle publication dans cette discussion...",
    addPost: "Ajouter une publication",
    newPost: "Nouvelle publication",
    newPostDescription: "Partagez une question, un probleme ou une idee sur la couverture du couvert vegetal a Anacostia Riverfront.",
    channel: "Canal",
    publicChannels: "Canaux publics",
    privateChannels: "Canaux prives",
    channelPicker: "Selecteur de canaux",
    viewAllChannels: "Voir tous les canaux",
    title: "Titre",
    comment: "Corps de la publication",
    titlePlaceholder: "Ajouter un titre (optionnel)",
    commentPlaceholder: "Ajoutez votre commentaire (champ obligatoire)",
    addLocation: "Ajouter un lieu",
    cancel: "Annuler",
    createPost: "Creer la publication",
    general: "General",
    riverfrontCanopy: "Couvert riverain",
    dataQuality: "Qualite des donnees",
    stewardship: "Gestion",
    posts: "Publications",
    postsDescription: "{start} - {end} of {count}",
    sortBy: "Trier par",
    latestActivity: "Activite recente",
    newest: "Les plus recentes",
    mostReplies: "Le plus de reponses",
    mostReactions: "Le plus de reactions",
    list: "Liste",
    grid: "Grille",
    table: "Tableau",
    compact: "Compact",
    author: "Auteur",
    channelHeader: "Canal",
    timestamp: "Horodatage",
    postTitle: "Titre de la publication",
    postBody: "Contenu de la publication",
    reactions: "Reactions",
    replies: "Reponses",
    actions: "Actions",
    state: "Etat",
    approved: "Approuve",
    hidden: "Masque",
    blocked: "Bloque",
    reply: "Repondre",
    replyBody: "Corps de la reponse",
    replyPlaceholder: "Ajoutez votre reponse (champ obligatoire)",
    createReply: "Creer la reponse",
    loadMore: "Charger plus",
    threadView: "Thread view",
    viewAllReplies: "Voir plus de reponses",
    allReplies: "Toutes les reponses",
    originalPost: "Publication d'origine",
    referenceItem: "Contenu d'origine",
    referenceSource: "De",
    referenceDialogTitle: "Contenu d'origine",
    openReference: "Ouvrir le contenu reference",
    collapseReplies: "Afficher moins de reponses",
    viewAllLocations: "Voir tous les lieux",
    collapseLocations: "Afficher moins de lieux",
    repliesWord: "reponses",
    replyWord: "reponse",
    repliesLabel: "Reponses",
    locationsLabel: "Lieux",
    options: "Options",
    layout: "Disposition",
    panel: "Panneau",
    additionalOptions: "Options supplementaires",
    more: "Plus",
    copyLink: "Copier le lien",
    emptyResultsHeading: "Aucune publication pour le moment",
    emptyResultsMessage: "Cette version vide du prototype n'a pas encore de publications. Passez a Projet pour voir l'etat rempli."
  }
};

const SUPPORTED_RESULTS_VIEWS = new Set(["list", "grid"]);

function normalizeResultsView(view) {
  return SUPPORTED_RESULTS_VIEWS.has(view) ? view : "list";
}

function t(key, variables = {}) {
  const table = TRANSLATIONS[state.language] || TRANSLATIONS.en;
  const template = table[key] || TRANSLATIONS.en[key] || key;
  return template.replace(/\{(\w+)\}/g, (_, name) => String(variables[name] ?? `{${name}}`));
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function getReplyWord(count) {
  return count === 1 ? t("replyWord") : t("repliesWord");
}

function getLayoutLabel(key) {
  if (key === "ai") return t("aiMode");
  return key === "map" ? t("mapLayout") : t("defaultLayout");
}

function getActionLabel(action) {
  if (action.key === "subscribe") return t("subscribe");
  if (action.key === "download") return t("download");
  if (action.key === "recent") return t("recent");
  if (action.key === "saved") return t("saved");
  if (action.key === "help") return t("help");
  if (action.key === "embed") return t("embed");
  return action.label;
}

function getPostsDescription(count) {
  if (count <= 0) {
    return t("postsDescription", { start: 0, end: 0, count: 0 });
  }

  const maxStart = Math.floor((count - 1) / PAGE_SIZE) * PAGE_SIZE + 1;
  const start = Math.min(state.pageStart, maxStart);
  const end = Math.min(start + PAGE_SIZE - 1, count);

  return t("postsDescription", { start, end, count });
}

const PAGE_SIZE = 10;
let actionTooltipIdCounter = 0;

function getPaginatedPosts(posts) {
  if (posts.length === 0) {
    return { startItem: 0, endItem: 0, visiblePosts: [] };
  }

  const maxStart = Math.floor((posts.length - 1) / PAGE_SIZE) * PAGE_SIZE + 1;
  const startItem = Math.min(state.pageStart, maxStart);
  const startIndex = startItem - 1;
  const endIndex = startIndex + PAGE_SIZE;

  return {
    startItem,
    endItem: Math.min(startItem + PAGE_SIZE - 1, posts.length),
    visiblePosts: posts.slice(startIndex, endIndex)
  };
}

const COMPOSER_CHANNEL_LIMIT = 10;
const VIEW_ALL_CHANNELS_VALUE = "__view_all_channels__";
const R3_PROJECT_COMPOSER_CHANNEL = "Safe Routes to School Community";
const DATE_FILTER_OPTIONS = [
  { value: "date-range", label: "Date range" }
  // { value: "7d", label: "Last 7 days", maxDays: 7 },
  // { value: "30d", label: "Last 30 days", maxDays: 30 },
  // { value: "6m", label: "Last 6 months", maxDays: 183 },
  // { value: "12m", label: "Last 12 months", maxDays: 365 }
];
const PUBLIC_CHANNELS = new Set([
  "Capital planning",
  "Community feedback",
  "Data quality",
  "Design review",
  "General",
  R3_PROJECT_COMPOSER_CHANNEL,
  "Riverfront canopy"
]);
const EMPTY_DISCUSSION_POSTS = [];
const R3_PROJECT_DISCUSSION_POSTS = [];

function getActivePosts() {
  if (state.prototypePreset === "empty") {
    return EMPTY_DISCUSSION_POSTS;
  }

  if (state.prototypePreset === "user") {
    return USER_DISCUSSION_POSTS;
  }

  if (isR3ProjectPrototype()) {
    return R3_PROJECT_DISCUSSION_POSTS;
  }

  return DISCUSSION_POSTS;
}

function isUserPrototype() {
  return state.prototypePreset === "user";
}

function isR3ProjectPrototype() {
  return state.prototypePreset === "r3-project";
}

function isUnseededEmptyPrototype() {
  return (state.prototypePreset === "empty" || isR3ProjectPrototype()) && getActivePosts().length === 0;
}

function enableFullAuxiliaryActionSet() {
  state.toggles.mainLayouts = true;
  state.toggles.filters = true;
  state.toggles.subscribe = true;
  state.toggles.download = true;
  state.toggles.recent = true;
  state.toggles.saved = true;
  state.toggles.help = true;
  state.toggles.embed = true;
}

function getSortedChannels() {
  return [...new Set(
    getActivePosts()
      .map((post) => post.channel)
      .filter((channel) => typeof channel === "string" && channel.trim().length > 0)
  )].sort((left, right) => left.localeCompare(right));
}

function getComposerChannels() {
  if (isR3ProjectPrototype()) {
    return [R3_PROJECT_COMPOSER_CHANNEL];
  }

  const activeChannels = getSortedChannels();
  if (activeChannels.length > 0) {
    return activeChannels;
  }

  return [...new Set(
    DISCUSSION_POSTS
      .map((post) => post.channel)
      .filter((channel) => typeof channel === "string" && channel.trim().length > 0)
  )].sort((left, right) => left.localeCompare(right));
}

function getPostReference(post) {
  if (post?.reference && typeof post.reference === "object") {
    return post.reference;
  }

  return null;
}

function getReferenceItemCounts() {
  return getActivePosts().reduce((counts, post) => {
    const reference = getPostReference(post);
    if (reference?.id) {
      counts.set(reference.id, (counts.get(reference.id) || 0) + 1);
    }

    return counts;
  }, new Map());
}

function getReferenceItemOptions() {
  const references = [];
  const seen = new Set();

  getActivePosts().forEach((post) => {
    const reference = getPostReference(post);
    if (!reference?.id || seen.has(reference.id)) {
      return;
    }

    seen.add(reference.id);
    references.push(reference);
  });

  return references.sort((left, right) => left.label.localeCompare(right.label));
}

function getPostStateValues(post) {
  if (post?.status === "hidden") {
    return ["hidden"];
  }

  if (post?.status === "blocked") {
    return ["blocked"];
  }

  return ["approved"];
}

function isPostHidden(post) {
  return post?.status === "hidden";
}

function postMatchesStateFilters(post) {
  if (state.stateFilters.length === 0) {
    return true;
  }

  const postStates = getPostStateValues(post);

  return state.stateFilters.some((filter) => postStates.includes(filter));
}

function getStateFacetPosts() {
  return getActivePosts().map((post, postIndex) => ({ post, postIndex })).filter(({ post }) => postMatchesReferenceFilters(post));
}

function postMatchesReferenceFilters(post) {
  if (state.referenceItemFilters.length === 0) {
    return true;
  }

  const referenceId = getPostReference(post)?.id;
  return Boolean(referenceId) && state.referenceItemFilters.includes(referenceId);
}

function postMatchesChannelFilters(post) {
  return state.channelFilters.length === 0 || state.channelFilters.includes(post.channel);
}

function getPostAgeInDays(post) {
  const age = post.age || "";

  if (age === "Just now") {
    return 0;
  }

  let match = age.match(/^(\d+)m ago$/i) || age.match(/^(\d+) min ago$/i);
  if (match) {
    return Number(match[1]) / (24 * 60);
  }

  match = age.match(/^(\d+)h ago$/i) || age.match(/^(\d+) hr ago$/i);
  if (match) {
    return Number(match[1]) / 24;
  }

  match = age.match(/^(\d+)d ago$/i) || age.match(/^(\d+) day(?:s)? ago$/i);
  if (match) {
    return Number(match[1]);
  }

  match = age.match(/^(\d+)w ago$/i) || age.match(/^(\d+) week(?:s)? ago$/i);
  if (match) {
    return Number(match[1]) * 7;
  }

  match = age.match(/^(\d+)mo ago$/i) || age.match(/^(\d+) month(?:s)? ago$/i);
  if (match) {
    return Number(match[1]) * 30;
  }

  match = age.match(/^(\d+)y ago$/i) || age.match(/^(\d+) year(?:s)? ago$/i);
  if (match) {
    return Number(match[1]) * 365;
  }

  return Number.POSITIVE_INFINITY;
}

function postMatchesDateFilter(post, filterValue) {
  if (!filterValue) {
    return true;
  }

  const option = DATE_FILTER_OPTIONS.find((entry) => entry.value === filterValue);
  if (!option || option.maxDays == null) {
    return true;
  }

  return getPostAgeInDays(post) <= option.maxDays;
}

function getDateFacetPosts() {
  return getStateFacetPosts().filter(({ post }) => {
    return postMatchesStateFilters(post) && postMatchesChannelFilters(post);
  });
}

function getChannelLabel(channel) {
  if (channel === "General") {
    return t("general");
  }

  if (channel === "Riverfront canopy") {
    return t("riverfrontCanopy");
  }

  return channel;
}

function getAppliedFilters() {
  if (isUnseededEmptyPrototype()) {
    return [];
  }

  const filters = [];

  state.referenceItemFilters.forEach((referenceId) => {
    const reference = getReferenceItemOptions().find((option) => option.id === referenceId);
    if (reference) {
      filters.push({ id: `reference:${reference.id}`, label: `${t("referenceItem")}: ${reference.label}` });
    }
  });

  state.channelFilters.forEach((channel) => {
    filters.push({ id: `channel:${encodeURIComponent(channel)}`, label: `${t("channel")}: ${getChannelLabel(channel)}` });
  });

  state.stateFilters.forEach((stateValue) => {
    filters.push({ id: `state:${stateValue}`, label: `${t("state")}: ${t(stateValue)}` });
  });

  if (state.dateCreatedFilter) {
    const option = DATE_FILTER_OPTIONS.find((entry) => entry.value === state.dateCreatedFilter);
    if (option) {
      filters.push({ id: `date-created:${option.value}`, label: `Date created: ${option.label}` });
    }
  }

  if (state.dateModifiedFilter) {
    const option = DATE_FILTER_OPTIONS.find((entry) => entry.value === state.dateModifiedFilter);
    if (option) {
      filters.push({ id: `date-modified:${option.value}`, label: `Date modified: ${option.label}` });
    }
  }

  return filters;
}

function clearFacetFilters() {
  state.referenceItemFilters = [];
  state.channelFilters = [];
  state.stateFilters = [];
  state.dateCreatedFilter = null;
  state.dateModifiedFilter = null;
}

function removeAppliedFilter(filterId) {
  const [filterType, rawValue] = filterId.split(":");

  if (filterType === "reference") {
    state.referenceItemFilters = state.referenceItemFilters.filter((value) => value !== rawValue);
    return;
  }

  if (filterType === "channel") {
    const channel = decodeURIComponent(rawValue || "");
    state.channelFilters = state.channelFilters.filter((value) => value !== channel);
    return;
  }

  if (filterType === "state") {
    state.stateFilters = state.stateFilters.filter((value) => value !== rawValue);
    return;
  }

  if (filterType === "date-created") {
    state.dateCreatedFilter = null;
    return;
  }

  if (filterType === "date-modified") {
    state.dateModifiedFilter = null;
  }
}

function getActivityAgeMinutes(ageLabel = "") {
  const normalizedAge = String(ageLabel).trim().toLowerCase();
  if (!normalizedAge || normalizedAge === "just now") {
    return 0;
  }

  const ageMatch = normalizedAge.match(/^(\d+)\s*(min|m|h|d)/);
  if (!ageMatch) {
    return Number.MAX_SAFE_INTEGER;
  }

  const amount = Number(ageMatch[1]);
  const unit = ageMatch[2];
  if (unit === "min" || unit === "m") {
    return amount;
  }
  if (unit === "h") {
    return amount * 60;
  }
  if (unit === "d") {
    return amount * 60 * 24;
  }

  return Number.MAX_SAFE_INTEGER;
}

function getFilteredPosts() {
  return getDateFacetPosts()
    .filter(({ post }) => {
      return postMatchesDateFilter(post, state.dateCreatedFilter) && postMatchesDateFilter(post, state.dateModifiedFilter);
    })
    .sort((left, right) => getActivityAgeMinutes(left.post.age) - getActivityAgeMinutes(right.post.age));
}

function getComposerChannelValue() {
  const channels = getComposerChannels();
  if (channels.length === 0) {
    return "";
  }

  return channels.includes(state.composeChannel) ? state.composeChannel : channels[0];
}

function splitComposerChannels(channels) {
  return channels.reduce((groups, channel) => {
    if (PUBLIC_CHANNELS.has(channel)) {
      groups.public.push(channel);
      return groups;
    }

    groups.private.push(channel);
    return groups;
  }, { public: [], private: [] });
}

function getChannelVisibilityIcon(channel) {
  return PUBLIC_CHANNELS.has(channel) ? "globe" : "lock";
}

function ageRecentPosts() {
  getActivePosts().forEach((post) => {
    if (post.age === "Just now") {
      post.age = "1 min ago";
    }
  });
}

function createComposerPost(postComposer) {
  const titleField = postComposer.querySelector('[data-compose-field="title"]');
  const commentField = postComposer.querySelector('[data-compose-field="comment"]');
  const channelField = postComposer.querySelector('[data-compose-channel-select="true"]');
  const body = commentField?.value?.trim() || "";

  if (!body) {
    if (typeof commentField?.setFocus === "function") {
      commentField.setFocus();
      return false;
    }

    commentField?.focus();
    return false;
  }

  const channel = channelField?.value || getComposerChannelValue();
  ageRecentPosts();
  getActivePosts().unshift({
    author: "Juliana Mascasas",
    initials: "JM",
    channel,
    source: channel,
    age: "Just now",
    title: titleField?.value?.trim() || "",
    body,
    replies: 0,
    reactionPreviewCount: 0,
    reactionOverflowCount: 0,
    reactions: []
  });

  state.composeChannel = channel;
  state.pageStart = 1;
  state.composeExpanded = false;
  state.channelPickerOpen = false;
  state.composeFocusTarget = null;
  return true;
}

function isComposerSubmitEnabled(postComposer) {
  const commentField = postComposer?.querySelector('[data-compose-field="comment"]');
  return Boolean(commentField?.value?.trim());
}

function updateComposerSubmitState(postComposer) {
  const submitButton = postComposer?.querySelector('[data-compose-action="submit"]');
  if (!submitButton) {
    return;
  }

  submitButton.toggleAttribute("disabled", !isComposerSubmitEnabled(postComposer));
}

function renderPostOverflowMenu(post, postIndex, triggerClass = "post-card-footer-action") {
  const includeViewThread = triggerClass === "results-table-action";
  const hideAction = isPostHidden(post)
    ? { key: "show", label: t("show"), icon: "view-visible" }
    : { key: "hide", label: t("hide"), icon: "view-hide" };

  return `
    <calcite-dropdown class="post-overflow-menu" placement="bottom-end" width="m">
      <calcite-action slot="trigger" class="${triggerClass}" icon="ellipsis" text="${t("more")}"></calcite-action>
      <calcite-dropdown-group selection-mode="none">
        ${includeViewThread ? `<calcite-dropdown-item data-post-menu-action="view-thread" data-post-index="${postIndex}" icon-start="speech-bubbles">${t("threadView")}</calcite-dropdown-item>` : ""}
        <calcite-dropdown-item data-post-menu-action="edit" data-post-index="${postIndex}" icon-start="pencil">${t("edit")}</calcite-dropdown-item>
        <calcite-dropdown-item data-post-menu-action="delete" data-post-index="${postIndex}" icon-start="trash">${t("delete")}</calcite-dropdown-item>
        <calcite-dropdown-item data-post-menu-action="${hideAction.key}" data-post-index="${postIndex}" icon-start="${hideAction.icon}">${hideAction.label}</calcite-dropdown-item>
        <calcite-dropdown-item data-post-menu-action="copy-link" data-post-index="${postIndex}" icon-start="link">${t("copyLink")}</calcite-dropdown-item>
      </calcite-dropdown-group>
    </calcite-dropdown>
  `;
}

function renderTableStateChips(post) {
  const chipMarkup = [];

  if (post?.status === "hidden") {
    chipMarkup.push(`<calcite-chip class="post-status-chip" scale="s" icon="view-hide">${t("hidden")}</calcite-chip>`);
  }

  if (post?.status === "blocked") {
    chipMarkup.push(`<calcite-chip class="post-status-chip" scale="s">${t("blocked")}</calcite-chip>`);
  }

  if (chipMarkup.length === 0) {
    return "";
  }

  return `<div class="cell-stack">${chipMarkup.join("")}</div>`;
}

function renderPostEditor(postIndex, { isDialog = false } = {}) {
  const post = getActivePosts()[postIndex];
  if (!post) {
    return "";
  }

  return `
    <div class="post-composer-expanded post-editor ${isDialog ? "is-dialog" : "is-inline"}" data-post-editor="true" data-edit-post-index="${postIndex}">
      <div class="post-composer-header">
        <div>
          <h3>${t("editPost")}</h3>
          <p>${t("newPostDescription")}</p>
        </div>
        <calcite-action data-post-edit-action="cancel" data-edit-post-index="${postIndex}" icon="x" text="${t("close")}"></calcite-action>
      </div>
      <div class="post-composer-grid">
        <div>
          <calcite-input data-post-edit-field="title" data-edit-post-index="${postIndex}" aria-label="${t("title")}" placeholder="${t("titlePlaceholder")}" max-length="50" value="${escapeHtml(post.title || "")}"></calcite-input>
        </div>
        <div>
          <calcite-text-area data-post-edit-field="body" data-edit-post-index="${postIndex}" aria-label="${t("comment")}" placeholder="${t("commentPlaceholder")}" max-length="500" value="${escapeHtml(post.body || "")}"></calcite-text-area>
        </div>
      </div>
      <div class="post-composer-footer">
        <calcite-button appearance="outline" icon-start="pin-plus" kind="neutral">${t("addLocation")}</calcite-button>
        <div class="post-composer-actions">
          <calcite-button data-post-edit-action="cancel" data-edit-post-index="${postIndex}" appearance="outline" kind="neutral">${t("cancel")}</calcite-button>
          <calcite-button data-post-edit-action="submit" data-edit-post-index="${postIndex}" disabled>${t("updatePost")}</calcite-button>
        </div>
      </div>
    </div>
  `;
}

function getPostLocationSignature(post) {
  const rawLocation = post?.location;
  if (Array.isArray(rawLocation)) {
    return JSON.stringify(rawLocation);
  }

  if (rawLocation && typeof rawLocation === "object") {
    return JSON.stringify(rawLocation);
  }

  return String(rawLocation ?? "");
}

function isPostEditorDirty(postIndex, postEditor) {
  const post = getActivePosts()[postIndex];
  if (!post || !postEditor) {
    return false;
  }

  const titleField = postEditor.querySelector(`[data-post-edit-field="title"][data-edit-post-index="${postIndex}"]`);
  const bodyField = postEditor.querySelector(`[data-post-edit-field="body"][data-edit-post-index="${postIndex}"]`);
  const nextTitle = titleField?.value?.trim() || "";
  const nextBody = bodyField?.value?.trim() || "";
  const nextLocationSignature = postEditor.dataset.editLocationSignature || getPostLocationSignature(post);

  return nextTitle !== (post.title || "")
    || nextBody !== (post.body || "")
    || nextLocationSignature !== getPostLocationSignature(post);
}

function updatePostEditorSubmitState(postEditor) {
  if (!postEditor?.dataset?.editPostIndex) {
    return;
  }

  const postIndex = Number(postEditor.dataset.editPostIndex);
  const submitButton = postEditor.querySelector(`[data-post-edit-action="submit"][data-edit-post-index="${postIndex}"]`);
  if (!submitButton) {
    return;
  }

  submitButton.toggleAttribute("disabled", !isPostEditorDirty(postIndex, postEditor));
}

function resetPostTransientState() {
  state.editPostIndex = null;
  state.replyPostIndex = null;
  state.editReplyPostIndex = null;
  state.editReplyIndex = null;
  state.replyThreadDrawerPostIndex = null;
  state.replyDialogOpen = false;
  state.replyFocusPostIndex = null;
  state.replyRestorePostIndex = null;
  state.visibleReplyCounts = {};
  state.expandedLocationPosts = [];
}

function deletePost(postIndex) {
  const posts = getActivePosts();
  if (!posts[postIndex]) {
    return false;
  }

  posts.splice(postIndex, 1);
  resetPostTransientState();
  return true;
}

function togglePostHidden(postIndex) {
  const post = getActivePosts()[postIndex];
  if (!post) {
    return false;
  }

  post.status = isPostHidden(post) ? "" : "hidden";
  return true;
}

function getReplyEntries(postIndex) {
  const post = getActivePosts()[postIndex];
  if (!post) {
    return null;
  }

  return ensureReplyEntries(post);
}

function isReplyHidden(reply) {
  return reply?.status === "hidden";
}

function deleteReply(postIndex, replyIndex) {
  const replyEntries = getReplyEntries(postIndex);
  if (!replyEntries?.[replyIndex]) {
    return false;
  }

  replyEntries.splice(replyIndex, 1);
  const post = getActivePosts()[postIndex];
  if (post) {
    post.replies = replyEntries.length;
  }
  return true;
}

function toggleReplyHidden(postIndex, replyIndex) {
  const replyEntries = getReplyEntries(postIndex);
  const reply = replyEntries?.[replyIndex];
  if (!reply) {
    return false;
  }

  reply.status = isReplyHidden(reply) ? "" : "hidden";
  return true;
}

function saveEditedReply(postIndex, replyIndex, replyEditor) {
  const replyEntries = getReplyEntries(postIndex);
  const reply = replyEntries?.[replyIndex];
  const bodyField = replyEditor?.querySelector(`[data-reply-field="body"][data-reply-post-index="${postIndex}"]`);
  const body = bodyField?.value?.trim() || "";

  if (!reply || !body) {
    if (!body) {
      if (typeof bodyField?.setFocus === "function") {
        bodyField.setFocus();
      } else {
        bodyField?.focus();
      }
    }
    return false;
  }

  reply.body = body;
  state.editReplyPostIndex = null;
  state.editReplyIndex = null;
  return true;
}

function renderReplyOverflowMenu(postIndex, replyIndex, reply) {
  const hideAction = isReplyHidden(reply)
    ? { key: "show", label: t("show"), icon: "view-visible" }
    : { key: "hide", label: t("hide"), icon: "view-hide" };

  return `
    <calcite-dropdown class="post-overflow-menu" placement="bottom-end" width="m">
      <calcite-action slot="trigger" class="post-reply-more-action" icon="ellipsis" text="${t("more")}"></calcite-action>
      <calcite-dropdown-group selection-mode="none">
        <calcite-dropdown-item data-reply-menu-action="edit" data-reply-post-index="${postIndex}" data-reply-index="${replyIndex}" icon-start="pencil">${t("edit")}</calcite-dropdown-item>
        <calcite-dropdown-item data-reply-menu-action="delete" data-reply-post-index="${postIndex}" data-reply-index="${replyIndex}" icon-start="trash">${t("delete")}</calcite-dropdown-item>
        <calcite-dropdown-item data-reply-menu-action="${hideAction.key}" data-reply-post-index="${postIndex}" data-reply-index="${replyIndex}" icon-start="${hideAction.icon}">${hideAction.label}</calcite-dropdown-item>
        <calcite-dropdown-item data-reply-menu-action="copy-link" data-reply-post-index="${postIndex}" data-reply-index="${replyIndex}" icon-start="link">${t("copyLink")}</calcite-dropdown-item>
      </calcite-dropdown-group>
    </calcite-dropdown>
  `;
}

function saveEditedPost(postIndex, postEditor) {
  const post = getActivePosts()[postIndex];
  if (!post) {
    return false;
  }

  if (!isPostEditorDirty(postIndex, postEditor)) {
    return false;
  }

  const titleField = postEditor.querySelector(`[data-post-edit-field="title"][data-edit-post-index="${postIndex}"]`);
  const bodyField = postEditor.querySelector(`[data-post-edit-field="body"][data-edit-post-index="${postIndex}"]`);
  const body = bodyField?.value?.trim() || "";

  if (!body) {
    if (typeof bodyField?.setFocus === "function") {
      bodyField.setFocus();
      return false;
    }

    bodyField?.focus();
    return false;
  }

  post.title = titleField?.value?.trim() || "";
  post.body = body;
  state.editPostIndex = null;
  return true;
}

function formatReactionCount(count) {
  return count >= 99 ? "99+" : String(count);
}

function formatReactionOverflowLabel(count, { compact = false } = {}) {
  if (count <= 0) {
    return "";
  }

  const clampedCount = count >= 99 ? 99 : count;
  return `+${clampedCount}`;
}

function getVisibleLocations(post) {
  const rawLocations = Array.isArray(post.location)
    ? post.location
    : post.location
      ? [post.location]
      : [];

  const visibleLocations = rawLocations.slice(0, 10).map((location) => {
    if (typeof location === "string") {
      const icon = post.locationIcon || "pin";
      return {
        label: location,
        icon,
        kind: getLocationKind(icon)
      };
    }

    const icon = location.icon || post.locationIcon || "pin";
    return {
      label: location.label,
      icon,
      kind: getLocationKind(icon)
    };
  });

  return {
    visibleLocations,
    hiddenLocationCount: 0
  };
}

function getVisibleReactions(post, { activeResultsView = "list", breakpoint = "lg", forceNarrow = false } = {}) {
  const reactions = Array.isArray(post?.reactions) ? post.reactions : [];
  const effectiveWidth = getEffectiveWidth();
  const resolvedBreakpoint = breakpoint || getBreakpoint(effectiveWidth);
  const isNarrowReactionRow = forceNarrow || effectiveWidth <= 480;
  const shouldCompactReactions = activeResultsView === "grid" || resolvedBreakpoint === "xs" || resolvedBreakpoint === "sm";
  const visibleReactionLimit = isNarrowReactionRow
    ? Math.min(reactions.length, 1)
    : (shouldCompactReactions
      ? Math.min(post.reactionPreviewCount ?? 2, 2)
      : (post.reactionPreviewCount ?? reactions.length));
  const overflowCount = isNarrowReactionRow
    ? (Number(post.reactionOverflowCount) || 0) + reactions.slice(visibleReactionLimit).reduce((sum, reaction) => sum + (Number(reaction?.count) || 0), 0)
    : (Number(post.reactionOverflowCount) || 0) + Math.max(0, reactions.length - visibleReactionLimit);

  return {
    visibleReactions: reactions.slice(0, visibleReactionLimit),
    hiddenReactionCount: overflowCount,
    hiddenReactionLabel: formatReactionOverflowLabel(overflowCount, { compact: isNarrowReactionRow }),
    hiddenReactionAriaLabel: isNarrowReactionRow
      ? `${formatReactionCount(overflowCount)} or more hidden reactions`
      : `${formatReactionCount(overflowCount)} more reactions`
  };
}

const REPLY_PREVIEW_LIMIT = 10;
const LIST_REPLY_PREVIEW_LIMIT = 4;
const LOCATION_PREVIEW_LIMIT = 4;
const FAKE_GEOCODE_STREETS = [
  "Riverwalk Ave SE",
  "Half St SW",
  "Tingey St SE",
  "Water St SW",
  "M St SE",
  "New Jersey Ave SE"
];
const REPLY_AUTHORS = [
  { author: "Frank Hawk", initials: "FH" },
  { author: "Taylor Nguyen", initials: "TN" },
  { author: "Casey Rivera", initials: "CR" },
  { author: "Jamie Flores", initials: "JF" },
  { author: "Cameron Wells", initials: "CW" },
  { author: "Harper Scott", initials: "HS" }
];
const REPLY_BODIES = [
  "Agreed. We should make the next step clearer for people scanning the thread quickly.",
  "I saw the same issue during review and think the location context would help a lot.",
  "This feels consistent with the feedback we heard in the last walkthrough.",
  "A short follow-up here would make the recommendation easier to act on.",
  "We should preserve this point when the summary is updated.",
  "This is worth validating again once the next data refresh is available."
];

function buildSeedReplyReactions(index) {
  const reactionSets = [
    [],
    [{ emoji: "👍", count: 3 }],
    [{ emoji: "🙂", count: 2 }, { emoji: "👍", count: 1 }],
    [],
    [{ emoji: "🤔", count: 4 }],
    [{ emoji: "👍", count: 2 }, { emoji: "🤔", count: 1 }]
  ];

  return reactionSets[index % reactionSets.length];
}

function getLocationKind(icon = "pin") {
  if (icon === "freehand-area") {
    return "area";
  }

  if (icon === "freehand") {
    return "line";
  }

  return "point";
}

function getReverseGeocodedLabel(postIndex, locationIndex) {
  const street = FAKE_GEOCODE_STREETS[(postIndex + locationIndex) % FAKE_GEOCODE_STREETS.length];
  const buildingNumber = 120 + ((postIndex * 17 + locationIndex * 9) % 780);
  return `${buildingNumber} ${street}`;
}

function renderReplyReactions(reply, { forceNarrow = false } = {}) {
  const { visibleReactions, hiddenReactionCount, hiddenReactionLabel, hiddenReactionAriaLabel } = getVisibleReactions(reply, { forceNarrow });

  return `
    <div class="post-reactions post-reply-reactions">
      ${visibleReactions.map((reaction, reactionIndex) => `<button class="post-reaction-button" type="button" data-reply-reaction-index="${reactionIndex}" aria-label="Reaction ${reaction.emoji} ${formatReactionCount(reaction.count)}"><span class="post-reaction-emoji">${reaction.emoji}</span><span class="post-reaction-count">${formatReactionCount(reaction.count)}</span></button>`).join("")}
      ${hiddenReactionCount > 0 ? `<button class="post-reaction-button is-reaction-overflow" type="button" aria-label="${hiddenReactionAriaLabel}">${hiddenReactionLabel}</button>` : ""}
      <button class="post-reaction-button is-add-reaction" type="button" aria-label="Add reaction"><calcite-icon icon="add-reaction" scale="s"></calcite-icon></button>
    </div>
  `;
}

function buildSeedReplies(post) {
  return Array.from({ length: post.replies }, (_, index) => {
    const authorIndex = (index - Math.floor(index / 3)) % REPLY_AUTHORS.length;
    const replyMeta = REPLY_AUTHORS[authorIndex];
    const minutesAgo = post.replies - index;
    const reply = {
      author: replyMeta.author,
      initials: replyMeta.initials,
      age: `${minutesAgo} min ago`,
      body: REPLY_BODIES[index % REPLY_BODIES.length],
      reactions: buildSeedReplyReactions(index),
      status: ""
    };

    if (post.author === "Elena Gomez" && reply.author === "Taylor Nguyen" && minutesAgo === 1) {
      reply.reactions = [
        { emoji: "👍", count: 99 },
        { emoji: "🙂", count: 99 },
        { emoji: "🎉", count: 99 }
      ];
      reply.reactionOverflowCount = 99;
    }

    if (post.author === "Casey Rivera" && reply.author === "Casey Rivera" && minutesAgo === 1) {
      reply.status = "hidden";
    }

    return reply;
  }).reverse();
}

function ensureReplyEntries(post) {
  if (!Array.isArray(post.replyEntries)) {
    post.replyEntries = buildSeedReplies(post);
  }

  return post.replyEntries;
}

function getVisibleReplyEntries(post, postIndex, { previewLimit = REPLY_PREVIEW_LIMIT, allowExpandedCount = true } = {}) {
  const replyEntries = ensureReplyEntries(post);
  const visibleCount = allowExpandedCount ? (state.visibleReplyCounts[postIndex] ?? previewLimit) : previewLimit;
  const normalizedVisibleCount = allowExpandedCount ? Math.max(previewLimit, visibleCount) : previewLimit;
  return {
    replyEntries,
    visibleReplies: replyEntries.slice(0, normalizedVisibleCount),
    hasOverflow: replyEntries.length > previewLimit,
    hasMoreReplies: replyEntries.length > normalizedVisibleCount
  };
}

function renderReplyThread(post, postIndex, { previewLimit = REPLY_PREVIEW_LIMIT, overflowAction = "toggle-thread", overflowLabel = t("loadMore"), allowExpandedCount = true, forceNarrowReactions = false } = {}) {
  const { visibleReplies, hasOverflow, hasMoreReplies } = getVisibleReplyEntries(post, postIndex, { previewLimit, allowExpandedCount });
  if (visibleReplies.length === 0) {
    return "";
  }

  return `
    <div class="post-reply-thread">
      ${visibleReplies.map((reply, replyIndex) => {
        const isEditingReply = state.editReplyPostIndex === postIndex && state.editReplyIndex === replyIndex;
        return `
        <div class="post-reply-item">
          ${isEditingReply ? renderReplyEditor(postIndex, { replyIndex, initialBody: reply.body, submitAction: "save-edit", submitLabel: t("updatePost") }) : `<div class="post-reply-content">
            <div class="post-reply-meta">
              <span class="post-reply-identity">
                <calcite-avatar class="post-reply-avatar" full-name="${reply.author}" initials="${reply.initials}" scale="s"></calcite-avatar>
                <span class="post-reply-author">${reply.author}</span>
              </span>
              ${isReplyHidden(reply) ? `<calcite-chip class="post-status-chip" scale="s" icon="view-hide">${t("hidden")}</calcite-chip>` : ""}
              <span class="post-reply-dot">|</span>
              <span class="post-reply-age">${reply.age}</span>
            </div>
            <p class="post-reply-body">${reply.body}</p>
            <div class="post-reply-footer">
              ${renderReplyReactions(reply, { forceNarrow: forceNarrowReactions })}
              ${renderReplyOverflowMenu(postIndex, replyIndex, reply)}
            </div>
          </div>`}
        </div>
      `;
      }).join("")}
      ${hasOverflow && hasMoreReplies ? `<button class="post-reply-toggle" type="button" data-reply-action="${overflowAction}" data-reply-post-index="${postIndex}">${overflowLabel}</button>` : ""}
    </div>
  `;
}

function renderReplyThreadDrawer(postIndex) {
  const post = getActivePosts()[postIndex];
  if (!post) {
    return "";
  }

  const isLocationListStyle = state.locationStyle === "list" || state.locationStyle === "mini-map";
  const effectiveWidth = getEffectiveWidth();
  const breakpoint = getBreakpoint(effectiveWidth);
  const { visibleReactions, hiddenReactionCount, hiddenReactionLabel, hiddenReactionAriaLabel } = getVisibleReactions(post, { activeResultsView: "list", breakpoint, forceNarrow: true });
  const { visibleLocations: locationEntries, hiddenLocationCount } = getVisibleLocations(post);
  const { visibleLocations, hasOverflow: hasLocationOverflow, isExpanded: isLocationExpanded } = getVisibleLocationEntries(locationEntries, postIndex);
  const visibilityIcon = getChannelVisibilityIcon(post.channel);
  const listFooterMeta = [
    isPostHidden(post) ? `<calcite-chip class="post-status-chip" scale="s" icon="view-hide">${t("hidden")}</calcite-chip>` : "",
    post.replies > 0 ? `<span class="post-card-footer-meta">${t("repliesLabel")}: ${post.replies}</span>` : ""
  ].filter(Boolean);
  const isReplyInlineOpen = state.replyPostIndex === postIndex && !state.replyDialogOpen;

  return `
    <calcite-card class="result-card is-list">
      <div class="result-card-content">
        <div class="post-card-header">
          <div class="post-card-head-main">
            <calcite-avatar class="post-avatar" full-name="${post.author}" initials="${post.initials}" scale="l"></calcite-avatar>
            <div class="post-card-meta">
              <div class="post-card-author-row">
                <h4 class="post-card-author">${post.author}</h4>
              </div>
              <div class="post-card-source-row">
                <span class="post-card-source">${post.channel}</span>
                <span class="post-card-dot">|</span>
                <span class="post-card-age">${post.age}</span>
                <span class="post-card-dot">|</span>
                <calcite-icon class="post-card-lock" icon="${visibilityIcon}" scale="s"></calcite-icon>
              </div>
            </div>
          </div>
        </div>
        <div class="post-card-content-block">
          ${post.title ? `<h4 class="result-card-title">${post.title}</h4>` : ""}
          <p class="post-card-body">${post.body}</p>
        </div>
        ${renderReferenceCard(post, postIndex)}
        ${visibleLocations.length > 0 ? (isLocationListStyle
          ? `<div class="post-card-location-list-wrap" data-location-post-index="${postIndex}"><calcite-list class="post-card-location-list ${state.locationStyle === "mini-map" ? "is-mini-map" : ""}" label="${t("locationsLabel")}">${visibleLocations.map((location, locationIndex) => `<calcite-list-item label="${getLocationDisplayLabel(location, postIndex, locationIndex)}">${state.locationStyle === "mini-map" ? `<div class="post-location-minimap is-${location.kind}" slot="content-start" aria-hidden="true"></div>` : `<calcite-icon slot="content-start" icon="${location.icon}" scale="s"></calcite-icon>`}</calcite-list-item>`).join("")}</calcite-list>${hasLocationOverflow ? `<button class="post-reply-toggle" type="button" data-location-action="toggle-list" data-location-post-index="${postIndex}">${isLocationExpanded ? t("collapseLocations") : t("viewAllLocations")}</button>` : ""}</div>`
          : `<div class="post-card-locations">${visibleLocations.map((location) => `<calcite-chip class="post-location-chip" icon="${location.icon}" scale="m">${location.label}</calcite-chip>`).join("")}${hiddenLocationCount > 0 ? `<calcite-chip class="post-location-chip" scale="m">+${hiddenLocationCount}</calcite-chip>` : ""}</div>`
        ) : ""}
        <div class="post-card-reaction-row">
          <div class="post-reactions">
            ${visibleReactions.map((reaction, reactionIndex) => `<button class="post-reaction-button" type="button" data-post-index="${postIndex}" data-reaction-index="${reactionIndex}" aria-label="Reaction ${reaction.emoji} ${formatReactionCount(reaction.count)}"><span class="post-reaction-emoji">${reaction.emoji}</span><span class="post-reaction-count">${formatReactionCount(reaction.count)}</span></button>`).join("")}
            ${hiddenReactionCount > 0 ? `<button class="post-reaction-button is-reaction-overflow" type="button" aria-label="${hiddenReactionAriaLabel}">${hiddenReactionLabel}</button>` : ""}
            <button class="post-reaction-button is-add-reaction" type="button" aria-label="Add reaction"><calcite-icon icon="add-reaction" scale="s"></calcite-icon></button>
          </div>
        </div>
        <div class="post-card-footer">
          <div class="post-card-footer-start">
            ${listFooterMeta.join("")}
          </div>
          <div class="post-card-footer-actions">
            <calcite-action class="post-card-footer-action is-primary" data-reply-action="open-inline" data-reply-post-index="${postIndex}" icon="speech-bubble" text="${t("reply")}" text-enabled></calcite-action>
            ${renderPostOverflowMenu(post, postIndex)}
          </div>
        </div>
        ${isReplyInlineOpen ? renderReplyEditor(postIndex) : ""}
        ${renderReplyThread(post, postIndex, { previewLimit: Number.MAX_SAFE_INTEGER, allowExpandedCount: false, forceNarrowReactions: true })}
      </div>
    </calcite-card>
  `;
}

function createReplyThreadPanel(postIndex) {
  const panel = document.createElement("calcite-panel");
  panel.className = "results-filters-panel reply-thread-panel";
  panel.setAttribute("heading", t("threadView"));
  panel.setAttribute("id", "panel-reply-thread");
  panel.setAttribute("closable", "");
  panel.innerHTML = `<div class="reply-thread-panel-scroll">${renderReplyThreadDrawer(postIndex)}</div>`;
  return panel;
}

function getVisibleLocationEntries(locationEntries, postIndex) {
  const isExpanded = state.expandedLocationPosts.includes(postIndex);
  return {
    visibleLocations: isExpanded ? locationEntries : locationEntries.slice(0, LOCATION_PREVIEW_LIMIT),
    hasOverflow: locationEntries.length > LOCATION_PREVIEW_LIMIT,
    isExpanded
  };
}

function getLocationDisplayLabel(location, postIndex, locationIndex) {
  if (state.locationStyle === "mini-map" && location.kind === "point") {
    return getReverseGeocodedLabel(postIndex, locationIndex);
  }

  return location.label;
}

function createReply(postIndex, replyEditor) {
  const bodyField = replyEditor.querySelector(`[data-reply-field="body"][data-reply-post-index="${postIndex}"]`);
  const body = bodyField?.value?.trim() || "";

  if (!body) {
    if (typeof bodyField?.setFocus === "function") {
      bodyField.setFocus();
      return false;
    }

    bodyField?.focus();
    return false;
  }

  const post = getActivePosts()[postIndex];
  const replyEntries = ensureReplyEntries(post);
  replyEntries.unshift({
    author: "Juliana Mascasas",
    initials: "JM",
    age: "Just now",
    body,
    reactions: [],
    status: ""
  });
  post.replies = replyEntries.length;
  state.replyPostIndex = null;
  state.editReplyPostIndex = null;
  state.editReplyIndex = null;
  state.replyDialogOpen = false;
  state.replyFocusPostIndex = null;
  state.visibleReplyCounts[postIndex] = Math.max(state.visibleReplyCounts[postIndex] ?? REPLY_PREVIEW_LIMIT, REPLY_PREVIEW_LIMIT);
  return true;
}

function isReplySubmitEnabled(postIndex, replyEditor) {
  const bodyField = replyEditor?.querySelector(`[data-reply-field="body"][data-reply-post-index="${postIndex}"]`);
  return Boolean(bodyField?.value?.trim());
}

function updateReplySubmitState(replyEditor) {
  const postIndex = Number(replyEditor?.dataset?.replyPostIndex);
  const submitButton = replyEditor?.querySelector(`[data-reply-action="submit"][data-reply-post-index="${postIndex}"]`);
  if (!submitButton || Number.isNaN(postIndex)) {
    return;
  }

  submitButton.toggleAttribute("disabled", !isReplySubmitEnabled(postIndex, replyEditor));
}

function renderLocationComposerBlock() {
  return `
    <calcite-block class="location-composer-block" heading="${t("addLocation")}" collapsible>
      <div class="location-composer-block-content">hub-location-picker config editor field</div>
    </calcite-block>
  `;
}

function renderReplyEditor(postIndex, { isDialog = false, replyIndex = null, initialBody = "", submitAction = "submit", submitLabel = t("createReply") } = {}) {
  return `
    <div class="post-reply-editor ${isDialog ? "is-dialog" : "is-inline"}" data-reply-editor="true" data-reply-post-index="${postIndex}" ${replyIndex !== null ? `data-reply-edit-index="${replyIndex}"` : ""}>
      <div>
        <calcite-text-area data-reply-field="body" data-reply-post-index="${postIndex}" aria-label="${t("replyBody")}" placeholder="${t("replyPlaceholder")}" max-length="500" value="${escapeHtml(initialBody)}"></calcite-text-area>
      </div>
      ${renderLocationComposerBlock()}
      <div class="post-reply-editor-footer">
        <div class="post-reply-editor-actions">
          <calcite-button data-reply-action="cancel" data-reply-post-index="${postIndex}" ${replyIndex !== null ? `data-reply-index="${replyIndex}"` : ""} appearance="outline" kind="neutral">${t("cancel")}</calcite-button>
          <calcite-button data-reply-action="${submitAction}" data-reply-post-index="${postIndex}" ${replyIndex !== null ? `data-reply-index="${replyIndex}"` : ""} disabled>${submitLabel}</calcite-button>
        </div>
      </div>
    </div>
  `;
}

function getReferenceIcon(reference) {
  const type = String(reference?.type || "").toLowerCase();

  if (type.includes("web map")) {
    return "map";
  }

  if (type.includes("project")) {
    return "projects";
  }

  if (type.includes("discussion")) {
    return "speech-bubbles";
  }

  return reference?.icon || "file";
}

function renderReferenceCard(post, postIndex) {
  const reference = getPostReference(post);
  if (!reference) {
    return "";
  }

  return `
    <button class="post-reference-card" type="button" data-reference-action="open-dialog" data-post-index="${postIndex}" aria-label="${t("openReference")}">
      <span class="post-reference-card-kicker">${t("referenceSource")}</span>
      <span class="post-reference-card-row">
        <span class="post-reference-card-icon" aria-hidden="true"><calcite-icon icon="${getReferenceIcon(reference)}" scale="s"></calcite-icon></span>
        <span class="post-reference-card-copy">
          <span class="post-reference-card-title">${reference.label}</span>
          <span class="post-reference-card-meta">${reference.type}</span>
        </span>
      </span>
    </button>
  `;
}

function renderReferenceDialog() {
  if (!state.referenceDialogOpen || state.referenceDialogPostIndex === null) {
    return "";
  }

  const post = getActivePosts()[state.referenceDialogPostIndex];
  const reference = getPostReference(post);
  if (!reference) {
    return "";
  }

  return `
    <calcite-dialog heading="${t("referenceDialogTitle")}" open closable scale="l" modal data-reference-dialog="true">
      <div class="reference-dialog-body">
        <p class="reference-dialog-kicker">${reference.type}</p>
        <h3 class="reference-dialog-title">${reference.fullName || reference.label}</h3>
        <p class="reference-dialog-copy">Placeholder for opening the original content item.</p>
      </div>
      <calcite-button slot="secondary" appearance="outline" kind="neutral" data-reference-action="close-dialog">${t("close")}</calcite-button>
    </calcite-dialog>
  `;
}

const LAYOUT_ACTIONS = [
  { key: "default", label: "Standard", icon: "browser" },
  { key: "map", label: "Map", icon: "browser-map" }
];

const EXTRA_ACTIONS = [
  { key: "subscribe", label: "Subscribe", icon: "bell", toggle: "subscribe" },
  { key: "download", label: "Download", icon: "download", toggle: "download" },
  { key: "recent", label: "Recent searches", icon: "recent", toggle: "recent" },
  { key: "saved", label: "Saved searches", icon: "bookmark", toggle: "saved" }
];

const END_ACTIONS = [
  { key: "help", label: "Help", icon: "question", toggle: "help" },
  { key: "embed", label: "Embed", icon: "code", toggle: "embed" }
];

const DISCUSSION_POSTS = [
  {
    author: "Alex Tran",
    initials: "AT",
    channel: "General",
    source: "District mobility and shade study",
    age: "5h ago",
    title: "Prioritize coverage at bus stops on M Street SE?",
    body: "The stops between 4th and New Jersey have almost no shade after noon. If we are scoring equity impacts, this corridor should probably move ahead of the decorative planters called out in the draft map.",
    location: [
      { label: "Point location", icon: "pin" },
      { label: "Line location", icon: "freehand" },
      { label: "Area location", icon: "freehand-area" },
      { label: "Point location", icon: "pin" }
    ],
    //status: "Open",
    // visibility: "Private",
    replies: 0,
    reactions: [
      { emoji: "👍", count: 8 },
      { emoji: "🎉", count: 2 }
    ]
  },
  {
    author: "Jordan Lee",
    initials: "JL",
    channel: "Riverfront canopy",
    source: "Public-facing dashboard QA",
    age: "4h ago",
    title: "Tree canopy % at Yards Park looks inflated",
    body: "The dashboard rolls lawn shadow and pavilion shadow into the same bucket as canopy in the public-facing summary. We should separate tree cover from built shade before sharing this with the BID. Right now the Yards Park value reads like a tree metric, but much of the cooling on the map is coming from structures and temporary shade rather than canopy. If we do not split those sources, residents and partners will assume the planting goals are being met when park is still missing cover in stretches.",
    location: "Point location",
    status: "Open",
    // visibility: "Private",
    replies: 2,
    reactionPreviewCount: 3,
    reactionOverflowCount: 99,
    reactions: [
      { emoji: "👎", count: 99 },
      { emoji: "👍", count: 99 },
      { emoji: "🤔", count: 99 },
    ]
  },
  {
    author: "Priya Nair",
    initials: "PN",
    channel: "Stewardship",
    source: "Volunteer stewardship planning",
    age: "2h ago",
    title: "",
    body: "Several neighbors want to organize a fall planting day. Any recommendations for starting?",
    locationIcon: "freehand-area",
    location: "Area location",
    //status: "Hidden",
    // visibility: "Private",
    replies: 4,
    reactions: [
      { emoji: "👍", count: 7 }
    ]
  },
  {
    author: "Sam Ortega",
    initials: "SO",
    channel: "Data quality",
    source: "Construction change log",
    age: "1h ago",
    title: "",
    body: "The lidar snapshot is older than the curb realignment work, so reviewers keep assuming the data is wrong. Adding before-and-after field photos here would make the change requests much easier to validate.",
    // location: "South Capitol St SE",
    //status: "Open",
    // visibility: "Private",
    replies: 1,
    reactions: [
      { emoji: "🤔", count: 2 },
      { emoji: "👍", count: 3 }
    ]
  },
  {
    author: "Sam Smith",
    initials: "EG",
    channel: "General",
    source: "Riverfront heat resilience discussion",
    age: "34m ago",
    title: "Detroit Splash Pad Ideas?",
    body: "The current summary is useful, but residents keep asking where the hottest gaps are between the park edge and the apartment frontages. A block-level callout would make this discussion much more actionable.",
    // location: "Anacostia Riverfront corridor",
    //status: "Open",
    // visibility: "Private",
    replies: 29,
    reactions: [
      { emoji: "👍", count: 5 },
      { emoji: "🎉", count: 3 }
    ]
  },
  {
    author: "Riley Chen",
    initials: "RC",
    channel: "General",
    source: "Neighborhood feedback summary",
    age: "28m ago",
    title: "Should we call out shaded walking routes?",
    body: "Residents keep asking for a simpler way to compare cooler walking paths between the park edge and nearby housing blocks. A dedicated route view may answer that without requiring people to interpret the full canopy layer.",
    status: "hidden",
    replies: 3,
    reactionPreviewCount: 4,
    reactionOverflowCount: 99,
    reactions: [
      { emoji: "👍", count: 99 },
      { emoji: "🙂", count: 99 },
      { emoji: "🎉", count: 99 }
    ],
    replyEntries: [
      {
        author: "Casey Rivera",
        initials: "CR",
        age: "1 min ago",
        body: "This feels consistent with the feedback we heard in the last walkthrough.",
        reactions: [
          { emoji: "👍", count: 99 },
          { emoji: "🙂", count: 99 },
          { emoji: "🎉", count: 99 }
        ],
        reactionOverflowCount: 99,
        status: ""
      },
      {
        author: "Taylor Nguyen",
        initials: "TN",
        age: "2 min ago",
        body: "I saw the same issue during review and think the location context would help a lot.",
        reactions: [{ emoji: "👍", count: 3 }],
        status: ""
      },
      {
        author: "Jordan Park",
        initials: "JP",
        age: "3 min ago",
        body: "Agreed. We should make the next step clearer for people scanning the thread quickly.",
        reactions: [],
        status: ""
      }
    ]
  },
  {
    author: "Devon Brooks",
    initials: "DB",
    channel: "Riverfront canopy",
    source: "Field verification notes",
    age: "52m ago",
    title: "11th Street bridge needs a fresh site visit",
    body: "The latest imagery still shows mature cover along the trail, but several sections were thinned after utility work. The current public map is likely overstating shade until we recheck the corridor.",
    location: "Point location",
    replies: 2,
    reactions: [{ emoji: "👍", count: 6 }]
  },
  {
    author: "Morgan Patel",
    initials: "MP",
    channel: "Data quality",
    source: "QA backlog review",
    age: "1h ago",
    title: "Legend still blurs tree cover and built shade",
    body: "The category names are clearer than last sprint, but users still read built shade as tree canopy when they skim the summary. We should tighten the wording before broader testing.",
    replies: 4,
    reactions: [{ emoji: "🤔", count: 9 }]
  },
  {
    author: "Avery Kim",
    initials: "AK",
    channel: "Stewardship",
    source: "Volunteer coordination board",
    age: "1h ago",
    title: "",
    body: "Several groups are ready to help this season, but they keep asking for the same prep steps before they can sign up volunteers, confirm supplies, and understand what support the city is already planning to provide. A pinned checklist in the discussion would reduce repeated onboarding questions and give neighborhood captains a simpler handoff when they recruit new people into the work.",
    replies: 1,
    reactions: [{ emoji: "👍", count: 5 }, { emoji: "🙂", count: 3 }]
  },
  {
    author: "Jordan Park",
    initials: "JP",
    channel: "General",
    source: "Dog Beach Cleanup",
    age: "1h ago",
    title: "Dog Beach Cleanup",
    body: "Attendees were less interested in canopy percentage on its own and more interested in where they feel heat exposure daily. That suggests a heat-gap framing may be more legible than acreage totals.",
    replies: 14,
    reactions: [{ emoji: "🤔", count: 8 }, { emoji: "👍", count: 3 }]
  },
  {
    author: "Taylor Nguyen",
    initials: "TN",
    channel: "Riverfront canopy",
    source: "Program delivery notes",
    age: "2h ago",
    title: "Separate young plantings from mature canopy",
    body: "The current score can make recently planted stretches look healthier than they feel on the ground, especially when a corridor has a lot of visible new planting but very little shade benefit yet. A separate indicator for establishment progress would help set expectations, explain why some segments still feel exposed, and reduce the tension between long-term investment stories and current-day pedestrian comfort.",
    replies: 2,
    reactions: [{ emoji: "🙂", count: 6 }]
  },
  {
    author: "Casey Rivera",
    initials: "CR",
    channel: "Data quality",
    source: "Imagery audit",
    age: "2h ago",
    title: "",
    body: "There is a visible seam between source tiles that makes one block appear cooler than adjacent parcels, and it is exactly the kind of artifact that draws attention when someone zooms into a place they know well. We should mark it as known data debt before stakeholders rely on it, and ideally pair that note with a follow-up plan so reviewers know whether the issue is temporary processing noise or a source dataset problem.",
    replies: 3,
    reactions: [{ emoji: "🤔", count: 4 }, { emoji: "🙂", count: 2 }]
  },
  {
    author: "Jamie Flores",
    initials: "JF",
    channel: "Stewardship",
    source: "Friends group planning",
    age: "3h ago",
    title: "Best locations for volunteer watering this month?",
    body: "We have limited crew time and want to prioritize trees that were planted this spring. A lightweight shortlist here would help us route volunteers where they are most useful.",
    replies: 5,
    reactions: [{ emoji: "👍", count: 7 }]
  },
  {
    author: "Cameron Wells",
    initials: "CW",
    channel: "General",
    source: "Resident sentiment notes",
    age: "3h ago",
    title: "",
    body: "Several residents pointed to shaded sidewalks that still receive low corridor scores. We likely need a short explanation that street comfort and canopy coverage are related but not identical, because people are reading the score as a direct statement about what the walk feels like at noon. Without that framing, the conversation quickly turns into whether the data is wrong instead of why the metric behaves differently from direct lived experience.",
    replies: 4,
    reactions: [{ emoji: "👍", count: 6 }, { emoji: "🤔", count: 2 }]
  },
  {
    author: "Harper Scott",
    initials: "HS",
    channel: "Riverfront canopy",
    source: "Site walk transcript",
    age: "4h ago",
    title: "",
    body: "The canopy footprint may technically overlap the boardwalk in some segments, but the user experience is still exposed because the shade moves off the walking line by midday and leaves the hottest portion of the path unprotected. That is an important distinction if we want the gallery to support practical decisions, because users are not asking whether a polygon exists nearby, they are asking whether the route they actually take feels cooler and safer.",
    replies: 2,
    reactions: [{ emoji: "🤔", count: 5 }]
  },
  {
    author: "Quinn Adams",
    initials: "QA",
    channel: "Data quality",
    source: "Review spreadsheet",
    age: "4h ago",
    title: "",
    body: "A visible capture date would prevent some of the confusion we keep seeing when recent construction or removals are missing from the map but present in local knowledge.",
    replies: 1,
    reactions: [{ emoji: "👍", count: 4 }]
  },
  {
    author: "Skyler Reed",
    initials: "SR",
    channel: "Maintenance",
    source: "Maintenance escalation queue",
    age: "5h ago",
    title: "Dead saplings by the rec center need tracking",
    body: "The map still shows these as successful plantings, but several failed after the summer heat wave. We should track replacements separately so stewardship partners are not surprised.",
    replies: 3,
    reactions: [{ emoji: "🙂", count: 3 }, { emoji: "🤔", count: 3 }]
  },
  {
    author: "Parker Diaz",
    initials: "PD",
    channel: "Community feedback",
    source: "Communications review",
    age: "6h ago",
    title: "",
    body: "The current experience drops people into detailed posts quickly. A small framing message about what kinds of comments belong here could improve participation quality, especially for people who are joining after seeing the map but have not yet understood whether this space is for bug reports, local knowledge, prioritization feedback, or all three. Right now that ambiguity makes first-time readers more cautious than we probably want.",
    replies: 2,
    reactions: [{ emoji: "🙂", count: 5 }]
  },
  {
    author: "Emerson Bell",
    initials: "EB",
    channel: "Capital planning",
    source: "Capital planning notes",
    age: "6h ago",
    title: "Distinguish funded zones from aspirational ones",
    body: "Right now every candidate area reads with the same confidence level. That makes it hard to tell what is scheduled work versus longer-term opportunity mapping.",
    replies: 2,
    reactions: [{ emoji: "👍", count: 5 }]
  },
  {
    author: "Dakota Price",
    initials: "DP",
    channel: "Analytics",
    source: "Source fusion review",
    age: "7h ago",
    title: "",
    body: "The layer alignment is close enough for general storytelling, but users drilling into block-by-block comparisons are noticing drift and assuming the analysis is wrong.",
    replies: 2,
    reactions: [{ emoji: "🤔", count: 4 }]
  },
  {
    author: "Remy Turner",
    initials: "RT",
    channel: "Volunteer ops",
    source: "Crew operations board",
    age: "8h ago",
    title: "Can we identify watering partners by corridor?",
    body: "Our operational question is no longer where young trees exist, but who is responsible for keeping them alive in each corridor. A shared note thread by area could help.",
    replies: 12,
    reactions: [{ emoji: "👍", count: 7 }]
  },
  {
    author: "Blake Morgan",
    initials: "BM",
    channel: "Research",
    source: "Public testing synthesis",
    age: "9h ago",
    title: "",
    body: "When titles describe the actual concern instead of the source dataset, readers enter the thread faster and react sooner. We should bias examples in that direction, but it is also useful to preserve a few untitled posts in the seed data because that reflects how people often behave when they are prompted to comment quickly from a mobile view. The gallery should feel resilient to both styles.",
    replies: 3,
    reactions: [{ emoji: "👍", count: 4 }, { emoji: "🙂", count: 2 }]
  },
  {
    author: "Rowan Foster",
    initials: "RF",
    channel: "Design review",
    source: "Landscape architecture review",
    age: "10h ago",
    title: "Plaza trees miss the busiest walking path",
    body: "This is another case where geometry says one thing and lived experience says another. The route that gets the most foot traffic is still exposed despite nearby canopy polygons.",
    replies: 4,
    reactions: [{ emoji: "🤔", count: 6 }]
  },
  {
    author: "Logan Cruz",
    initials: "LC",
    channel: "Data quality",
    source: "Analyst office hours",
    age: "11h ago",
    title: "",
    body: "The distinction matters when people compare the map against their own experience at a specific hour. A small note could reduce debates that are really about time-of-day differences.",
    replies: 1,
    reactions: [{ emoji: "🤔", count: 5 }]
  },
  {
    author: "Kendall Ross",
    initials: "KR",
    channel: "Stewardship",
    source: "Partner coordination notes",
    age: "12h ago",
    title: "Planting-day follow-up tasks need a clearer owner",
    body: "The event itself is easy to organize, but follow-up work on staking, watering, and failure checks keeps slipping between teams. A discussion thread could centralize that handoff.",
    replies: 2,
    reactions: [{ emoji: "🙂", count: 4 }]
  },
  {
    author: "Finley Harper",
    initials: "FH",
    channel: "General",
    source: "Beta feedback digest",
    age: "13h ago",
    title: "",
    body: "Even people who start in the map asked for a concise text recap of the strongest discussion themes. A short summary above posts might reduce scanning fatigue.",
    replies: 5,
    reactions: [{ emoji: "👍", count: 6 }]
  },
  {
    author: "Sage Bennett",
    initials: "SB",
    channel: "Riverfront canopy",
    source: "Project checkpoint notes",
    age: "14h ago",
    title: "Canopy goals near schools need easier isolation",
    body: "School-adjacent segments come up repeatedly, but they are buried in the broader corridor narrative. A dedicated discussion slice might better support school-focused review.",
    replies: 3,
    reactions: [{ emoji: "🙂", count: 5 }]
  }
];

const USER_DISCUSSION_POSTS = [
  {
    author: "Juliana Mascasas",
    initials: "JM",
    channel: "General",
    age: "18m ago",
    title: "School dismissal routes still miss two hot blocks",
    body: "The project discussion has strong feedback about crossings near Miner Elementary, but the two blocks between the school and the rec center still feel disconnected in the narrative. I want to thread those comments back to the project so route prioritization is easier to follow.",
    location: [
      { label: "Line location", icon: "freehand" },
      { label: "Point location", icon: "pin" }
    ],
    replies: 4,
    reactions: [{ emoji: "👍", count: 9 }, { emoji: "🙂", count: 2 }],
    reference: {
      id: "safe-routes-to-school",
      label: "Safe Routes to School",
      fullName: "Safe Routes to School Capital Delivery Project",
      type: "Project",
      channel: "General",
      icon: "graph-time-series"
    }
  },
  {
    author: "Juliana Mascasas",
    initials: "JM",
    channel: "Capital planning",
    age: "42m ago",
    title: "Need a simpler summary of funded versus proposed segments",
    body: "I keep restating which sidewalks are already in delivery and which ones are still candidate work. A compact reference back to the project item would help reviewers stay grounded when they land on this post from the gallery.",
    replies: 2,
    reactions: [{ emoji: "👍", count: 5 }],
    reference: {
      id: "safe-routes-to-school",
      label: "Safe Routes to School",
      fullName: "Safe Routes to School Capital Delivery Project",
      type: "Project",
      channel: "Capital planning",
      icon: "graph-time-series"
    }
  },
  {
    author: "Juliana Mascasas",
    initials: "JM",
    channel: "Community feedback",
    age: "1h ago",
    title: "Forum feedback is clustering around curb safety, not signage",
    body: "The DC DOT forum thread is full of parents describing pickup conflicts at the curb. Pulling those posts together here makes it easier to compare the operational issues against the project conversations.",
    replies: 7,
    reactions: [{ emoji: "👍", count: 11 }, { emoji: "🤔", count: 3 }],
    reference: {
      id: "dc-dot-forum",
      label: "DC DOT forum",
      fullName: "DC DOT Forum for Neighborhood Street Safety Discussions",
      type: "Discussion board",
      channel: "Community feedback",
      icon: "speech-bubbles"
    }
  },
  {
    author: "Juliana Mascasas",
    initials: "JM",
    channel: "Design review",
    age: "2h ago",
    title: "Crosswalk mockups need the same language as the forum thread",
    body: "People reacted faster when the forum used plain language about near misses. I want the design review notes to point back to that discussion so we do not lose the resident framing in technical markup.",
    replies: 3,
    reactions: [{ emoji: "🤔", count: 4 }, { emoji: "👍", count: 6 }],
    reference: {
      id: "dc-dot-forum",
      label: "DC DOT forum",
      fullName: "DC DOT Forum for Neighborhood Street Safety Discussions",
      type: "Discussion board",
      channel: "Design review",
      icon: "speech-bubbles"
    }
  },
  {
    author: "Juliana Mascasas",
    initials: "JM",
    channel: "Data quality",
    age: "3h ago",
    title: "Riverwalk route geometry still breaks at the bridge ramp",
    body: "The web map is the source item here, and the discussion only makes sense if people can open that route context. I want the gallery card to make that relationship obvious because the route gap looks like a post-only complaint right now.",
    location: [
      { label: "Line location", icon: "freehand" },
      { label: "Area location", icon: "freehand-area" }
    ],
    replies: 5,
    reactions: [{ emoji: "🤔", count: 8 }, { emoji: "👍", count: 3 }],
    reference: {
      id: "riverwalk-routes",
      label: "Riverwalk routes",
      fullName: "Riverwalk Routes Public Access Web Map",
      type: "Web map",
      channel: "Data quality",
      icon: "map"
    }
  },
  {
    author: "Juliana Mascasas",
    initials: "JM",
    channel: "General",
    age: "5h ago",
    title: "Route comments need a pedestrian comfort lens",
    body: "A lot of the web map replies are really about what the walk feels like, not only whether the route is connected. Capturing that as a post attached to the map item makes the gallery feel more like work Juliana has done across Hub instead of one repeated discussion.",
    replies: 1,
    reactions: [{ emoji: "🙂", count: 4 }],
    reference: {
      id: "riverwalk-routes",
      label: "Riverwalk routes",
      fullName: "Riverwalk Routes Public Access Web Map",
      type: "Web map",
      channel: "General",
      icon: "map"
    }
  }
];

const widthControl = document.getElementById("width-control");
const prototypePresetControl = document.getElementById("prototype-preset-control");
const strategyControl = document.getElementById("strategy-control");
const languageControl = document.getElementById("language-control");
const locationStyleControl = document.getElementById("location-style-control");
const previewPanel = document.querySelector(".preview-panel");
const previewFrame = document.getElementById("preview-frame");
const previewShell = document.getElementById("preview-shell");
const appShell = document.querySelector(".app-shell");
const replyThreadDrawer = document.getElementById("reply-thread-drawer");
const closeReplyThreadButton = document.getElementById("close-reply-thread-button");
const prototypePresetLabel = document.getElementById("prototype-preset-label");
const widthLabel = document.getElementById("width-label");
const strategyLabel = document.getElementById("strategy-label");
const languageLabel = document.getElementById("language-label");
const locationStyleLabel = document.getElementById("location-style-label");
const replyThreadDrawerTitle = document.getElementById("reply-thread-drawer-title");
const replyThreadDrawerContent = document.getElementById("reply-thread-drawer-content");

let arcgisRuntimeConfigPromise;
let runtimeMapElement = null;

async function initializeRuntimeMap(mapEl) {
  if (!mapEl || runtimeMapElement === mapEl) {
    return;
  }

  try {
    await customElements.whenDefined("arcgis-map");
    await arcgisRuntimeConfigPromise;
    await mapEl.viewOnReady();
    await new Promise((resolve) => requestAnimationFrame(resolve));
    mapEl.view?.resize?.();
    runtimeMapElement = mapEl;
  } catch (error) {
    console.error("Failed to initialize runtime map", error);
  }
}

function configureArcGISMaps() {
  if (!arcgisRuntimeConfigPromise) {
    arcgisRuntimeConfigPromise = applyArcGISRuntimeConfig()
      .then((config) => {
        const basemap = config.arcgisBasemap;
        if (basemap) {
          document.querySelectorAll("arcgis-map").forEach((mapEl) => {
            if (!mapEl.hasAttribute("basemap")) {
              mapEl.basemap = basemap;
            }
          });
        }

        return config;
      })
      .catch((error) => {
        console.error("Failed to apply ArcGIS runtime config", error);
        return null;
      });
  }

  return arcgisRuntimeConfigPromise;
}

function renderStaticText() {
  document.documentElement.lang = state.language;
  if (prototypePresetLabel) {
    prototypePresetLabel.textContent = t("prototypePreset");
  }
  if (widthLabel) {
    widthLabel.textContent = t("width");
  }
  if (strategyLabel) {
    strategyLabel.textContent = t("overflowStrategy");
  }
  if (languageLabel) {
    languageLabel.textContent = t("language");
  }
  if (locationStyleLabel) {
    locationStyleLabel.textContent = t("locationStyle");
  }
  replyThreadDrawerTitle.textContent = t("allReplies");
  closeReplyThreadButton.setAttribute("text", t("close"));
  closeReplyThreadButton.label = t("close");

  const emptyPresetOption = prototypePresetControl?.querySelector('calcite-option[value="empty"]');
  if (emptyPresetOption) {
    emptyPresetOption.textContent = t("emptyPreset");
  }

  const userPresetOption = prototypePresetControl?.querySelector('calcite-option[value="user"]');
  if (userPresetOption) {
    userPresetOption.textContent = t("userPreset");
  }

  const projectPresetOption = prototypePresetControl?.querySelector('calcite-option[value="project"]');
  if (projectPresetOption) {
    projectPresetOption.textContent = t("projectPreset");
  }

  const r3ProjectPresetOption = prototypePresetControl?.querySelector('calcite-option[value="r3-project"]');
  if (r3ProjectPresetOption) {
    r3ProjectPresetOption.textContent = t("r3ProjectPreset");
  }

  const autoOption = widthControl?.querySelector('calcite-option[value="auto"]');
  if (autoOption) {
    autoOption.textContent = t("auto");
  }

  const chipsOption = locationStyleControl?.querySelector('calcite-option[value="chips"]');
  if (chipsOption) {
    chipsOption.textContent = t("chips");
  }

  const listOption = locationStyleControl?.querySelector('calcite-option[value="list"]');
  if (listOption) {
    listOption.textContent = t("list");
  }

  const miniMapOption = locationStyleControl?.querySelector('calcite-option[value="mini-map"]');
  if (miniMapOption) {
    miniMapOption.textContent = t("miniMap");
  }

}

function setFrameWidth() {
  if (state.width === "auto") {
    previewPanel?.classList.add("is-auto-width");
    previewFrame.dataset.widthMode = "auto";
    previewFrame.style.width = "";
    return;
  }

  previewPanel?.classList.remove("is-auto-width");
  previewFrame.dataset.widthMode = "fixed";
  previewFrame.style.width = `min(100%, ${state.width}px)`;
}

function getEffectiveWidth() {
  const measuredWidth = previewFrame.clientWidth || previewShell.clientWidth || window.innerWidth;
  if (measuredWidth > 0) {
    return Math.max(360, Math.round(measuredWidth));
  }

  if (state.width !== "auto") {
    return Number(state.width);
  }

  return Math.max(360, Math.round(window.innerWidth));
}

function getBreakpoint(width) {
  if (width <= 360) {
    return "xs";
  }
  if (width <= 600) {
    return "sm";
  }
  if (width <= 1080) {
    return "med";
  }
  return "lg";
}

function hasAnyEndActions() {
  return getVisibleEndActions().length > 0;
}

function hasAnyExtraActions() {
  return getVisibleExtraActions().length > 0;
}

function getVisibleExtraActions() {
  if (isR3ProjectPrototype()) {
    return [];
  }

  return EXTRA_ACTIONS.filter((action) => state.toggles[action.toggle] && (!isUserPrototype() || action.key !== "subscribe"));
}

function getVisibleEndActions() {
  if (isR3ProjectPrototype()) {
    return [];
  }

  return END_ACTIONS.filter((action) => state.toggles[action.toggle] && (!isUserPrototype() || action.key !== "embed"));
}

function hasAnyUtilityActions() {
  if (isR3ProjectPrototype()) {
    return false;
  }

  return state.toggles.filters;
}

function hasAnyPanelActions() {
  return state.toggles.mainLayouts || hasAnyUtilityActions() || hasAnyExtraActions() || hasAnyEndActions();
}

function shouldCollapseMapComposer() {
  if (state.activeLayout !== "map") {
    return false;
  }

  const breakpoint = getBreakpoint(getEffectiveWidth());
  return breakpoint === "xs" || breakpoint === "sm";
}

function syncActiveState() {
  if (!state.toggles.mainLayouts) {
    state.activeLayout = "default";
  }

  if (state.activeLayout !== "map" && state.activeUtility === "results") {
    state.activeUtility = null;
  }

  if (!state.toggles.filters && state.activeUtility === "filters") {
    state.activeUtility = null;
  }

  if (isR3ProjectPrototype() && state.activeUtility === "filters") {
    state.activeUtility = state.activeLayout === "map" ? "results" : null;
  }

  if (state.activeExtra && !state.toggles[state.activeExtra]) {
    state.activeExtra = null;
  }

  if (isR3ProjectPrototype()) {
    state.activeExtra = null;
  }

  if (!hasAnyUtilityActions() && !state.activeUtility) {
    state.activeUtility = null;
  }
}

function getLayoutTextMode(width, breakpoint) {
  if (state.strategy === "option-1") {
    return { shell: true, panel: true, addButtonText: true, useDropdown: false, collapseSecondary: false, resultsCompact: false };
  }

  if (breakpoint === "xs") {
    return { shell: false, panel: false, addButtonText: false, useDropdown: true, collapseSecondary: false, resultsCompact: true };
  }

  if (breakpoint === "sm") {
    return { shell: false, panel: false, addButtonText: false, useDropdown: false, collapseSecondary: true, resultsCompact: false };
  }

  if (width < 1280) {
    return { shell: true, panel: false, addButtonText: false, useDropdown: false, collapseSecondary: true, resultsCompact: false };
  }

  if (width < 1440) {
    return { shell: true, panel: false, addButtonText: false, useDropdown: false, collapseSecondary: false, resultsCompact: false };
  }

  return { shell: true, panel: true, addButtonText: true, useDropdown: false, collapseSecondary: false, resultsCompact: false };
}

function createAction({ label, icon, textEnabled = false, active = false, indicator = false, dataset = {}, slot = "", tag = "calcite-action" }) {
  const action = document.createElement(tag);
  action.setAttribute("icon", icon);
  action.setAttribute("text", label);
  action.setAttribute("aria-label", label);
  action.dataset.actionKey = dataset.actionKey || "";
  action.dataset.actionType = dataset.actionType || "";

  if (slot) {
    action.setAttribute("slot", slot);
  }
  if (active) {
    action.active = true;
  }
  if (textEnabled) {
    action.setAttribute("text-enabled", "");
    action.classList.add("action-has-text");
  }
  if (indicator) {
    action.indicator = true;
  }

  if (textEnabled) {
    return action;
  }

  actionTooltipIdCounter += 1;
  action.id = `post-gallery-action-${actionTooltipIdCounter}`;

  const tooltip = document.createElement("calcite-tooltip");
  tooltip.setAttribute("reference-element", action.id);
  tooltip.textContent = label;

  const fragment = document.createDocumentFragment();
  fragment.append(action, tooltip);
  return fragment;
}

function createButton({ label, withText }) {
  const button = document.createElement("calcite-button");
  button.setAttribute("icon-start", "plus");
  button.label = label;
  if (withText) {
    button.textContent = label;
  }
  return button;
}

function createAutocomplete() {
  const autocomplete = document.createElement("calcite-autocomplete");
  autocomplete.setAttribute("slot", "header-content");
  autocomplete.setAttribute("placeholder", t("searchPlaceholder"));
  autocomplete.setAttribute("scale", "m");
  autocomplete.className = "panel-search";
  autocomplete.innerHTML = `
    <calcite-autocomplete-item-group heading="${t("recentSearches")}">
      <calcite-autocomplete-item icon-start="recent" heading="stormwater permits"></calcite-autocomplete-item>
      <calcite-autocomplete-item icon-start="recent" heading="watershed strategy"></calcite-autocomplete-item>
    </calcite-autocomplete-item-group>
    <calcite-autocomplete-item-group heading="${t("suggestedResults")}">
      <calcite-autocomplete-item icon-start="map" heading="Regional Floodplain Viewer" description="Web Map"></calcite-autocomplete-item>
      <calcite-autocomplete-item icon-start="dashboard" heading="Storm Response Dashboard" description="Dashboard"></calcite-autocomplete-item>
    </calcite-autocomplete-item-group>
    <calcite-autocomplete-item-group heading="${t("suggestedLocations")}">
      <calcite-autocomplete-item icon-start="pin" heading="Portland, OR" description="United States"></calcite-autocomplete-item>
      <calcite-autocomplete-item icon-start="pin" heading="King County, WA" description="United States"></calcite-autocomplete-item>
    </calcite-autocomplete-item-group>
    <div class="autocomplete-actions">
      <calcite-button icon-start="graph-time-series" appearance="outline">${t("mostPopular")}</calcite-button>
    </div>
  `;
  return autocomplete;
}

function createFiltersBlock(expanded) {
  const appliedFilters = getAppliedFilters();
  if (appliedFilters.length === 0) {
    return null;
  }

  const block = document.createElement("calcite-block");
  block.heading = t("filtersApplied");
  block.collapsible = true;
  block.dataset.blockType = "filters";
  if (expanded) {
    block.expanded = true;
  }
  block.innerHTML = `
    <calcite-chip slot="content-end" appearance="outline">${String(appliedFilters.length).padStart(2, "0")}</calcite-chip>
    <calcite-action slot="actions-start" text-enabled text="${t("openFilters")}"></calcite-action>
    <calcite-action slot="actions-end" text-enabled text="${t("clearAll")}" data-filter-action="clear-all"></calcite-action>
    <calcite-chip-group>
      ${appliedFilters.map((filter) => `<calcite-chip closable data-filter-id="${filter.id}">${filter.label}</calcite-chip>`).join("")}
    </calcite-chip-group>
  `;
  return block;
}

function createPostComposer({ compactCollapsed = false, isMapLayout = false, breakpoint = "lg" } = {}) {
  const composer = document.createElement("div");
  composer.className = "post-composer";
  const isSmallUi = breakpoint === "xs" || breakpoint === "sm";
  const useCompactCollapsed = compactCollapsed || isMapLayout || isSmallUi;

  if (!state.composeExpanded) {
    composer.classList.add("is-collapsed");
    composer.innerHTML = useCompactCollapsed
      ? `
        <div class="post-composer-collapsed">
          <calcite-button data-compose-action="open-body" icon-start="speech-bubble-plus">${t("addPost")}</calcite-button>
        </div>
      `
      : `
        <div class="post-composer-collapsed">
          <calcite-avatar full-name="Juliana Mascasas" initials="JM" scale="m"></calcite-avatar>
          <calcite-input
            class="post-composer-trigger"
            data-compose-action="open-body"
            data-compose-trigger="input"
            icon-start="pencil"
            placeholder="${t("startPost")}"
            read-only>
          </calcite-input>
          <calcite-button data-compose-action="open-close" icon-start="speech-bubble-plus">${t("addPost")}</calcite-button>
        </div>
      `;

    const openComposer = (focusTarget) => {
      if (state.composeExpanded) {
        return;
      }

      state.composeExpanded = true;
      state.composeFocusTarget = focusTarget;
      if (state.activeLayout === "map" && syncMapRuntimePanelState()) {
        restoreComposeFocusTarget();
        return;
      }
      render();
    };

    const collapsedComposer = composer.querySelector(".post-composer-collapsed");
    const composeInput = composer.querySelector(".post-composer-trigger");
    const composeButton = composer.querySelector("calcite-button");
    if (!useCompactCollapsed) {
      collapsedComposer?.addEventListener("click", (event) => {
        if (event.composedPath().includes(composeButton)) {
          return;
        }

        openComposer("body");
      });
    }
    composeInput?.addEventListener("click", () => openComposer("body"));
    composeInput?.addEventListener("focus", () => openComposer("body"));
    composeButton?.addEventListener("click", (event) => {
      event.stopPropagation();
      openComposer(useCompactCollapsed ? "body" : "close");
    });
    return composer;
  }

  composer.classList.add("is-expanded");
  const channels = getComposerChannels();
  const selectedChannel = getComposerChannelValue();
  const visibleChannels = channels.slice(0, COMPOSER_CHANNEL_LIMIT);
  const shouldShowViewAllChannels = channels.length > COMPOSER_CHANNEL_LIMIT;
  const groupedChannels = splitComposerChannels(visibleChannels);
  composer.innerHTML = `
    <div class="post-composer-expanded">
      <div class="post-composer-header">
        <div>
          <h3>${t("newPost")}</h3>
          <p>${t("newPostDescription")}</p>
        </div>
        <calcite-action data-compose-action="close" data-compose-close-button="true" icon="x" text="${t("close")}"></calcite-action>
      </div>
      <div class="post-composer-grid">
        <calcite-label>
          ${t("channel")}
          <calcite-select data-compose-channel-select="true">
            ${groupedChannels.public.length ? `
              <calcite-option-group label="${t("publicChannels")}">
                ${groupedChannels.public.map((channel) => `<calcite-option value="${channel}" ${channel === selectedChannel ? "selected" : ""}>${channel}</calcite-option>`).join("")}
              </calcite-option-group>
            ` : ""}
            ${groupedChannels.private.length ? `
              <calcite-option-group label="${t("privateChannels")}">
                ${groupedChannels.private.map((channel) => `<calcite-option value="${channel}" ${channel === selectedChannel ? "selected" : ""}>${channel}</calcite-option>`).join("")}
              </calcite-option-group>
            ` : ""}
            ${shouldShowViewAllChannels ? `<calcite-option value="${VIEW_ALL_CHANNELS_VALUE}">${t("viewAllChannels")}</calcite-option>` : ""}
          </calcite-select>
        </calcite-label>
        <div>
          <calcite-input data-compose-field="title" aria-label="${t("title")}" placeholder="${t("titlePlaceholder")}" max-length="50"></calcite-input>
        </div>
        <div>
          <calcite-text-area data-compose-field="comment" aria-label="${t("comment")}" placeholder="${t("commentPlaceholder")}" max-length="500"></calcite-text-area>
        </div>
        ${renderLocationComposerBlock()}
      </div>
      <div class="post-composer-footer">
        <div class="post-composer-actions">
          <calcite-button data-compose-action="close" appearance="outline" kind="neutral">${t("cancel")}</calcite-button>
          <calcite-button data-compose-action="submit" disabled>${t("createPost")}</calcite-button>
        </div>
      </div>
    </div>
    ${shouldShowViewAllChannels ? `
      <calcite-dialog heading="${t("channelPicker")}" ${state.channelPickerOpen ? "open" : ""} data-channel-picker-dialog="true">
        <calcite-button slot="secondary" appearance="outline" kind="neutral" data-compose-action="close-channel-picker">${t("cancel")}</calcite-button>
      </calcite-dialog>
    ` : ""}
  `;

  return composer;
}

function createResultsBlock(resultsCompact, { isMapLayout = false, hideViewDropdown = false, breakpoint = "lg", effectiveWidth = 1440 } = {}) {
  state.resultsView = normalizeResultsView(state.resultsView);
  const activeResultsView = hideViewDropdown ? "list" : state.resultsView;
  const showSortControl = state.prototypePreset !== "r3-project";
  const filteredPosts = getFilteredPosts();
  const { startItem, visiblePosts } = getPaginatedPosts(filteredPosts);
  const sidebarWidth = state.activeLayout !== "map" && state.activeUtility === "filters" && breakpoint !== "xs" && breakpoint !== "sm" ? 280 + 16 : 0;
  const replyThreadWidth = state.replyThreadDrawerPostIndex !== null && breakpoint !== "xs" && breakpoint !== "sm" ? 320 + 16 : 0;
  const estimatedResultsWidth = Math.max(0, effectiveWidth - sidebarWidth - replyThreadWidth);
  const useStackedResultsHeader = !isMapLayout && estimatedResultsWidth <= 360;
  const block = document.createElement("calcite-block");
  block.className = "posts-results-block";
  block.heading = t("posts");
  block.description = getPostsDescription(filteredPosts.length);
  block.expanded = true;

  function formatReactionCount(count) {
    return count > 99 ? "99+" : String(count);
  }

  function clampPostTitle(title) {
    return title.length > 50 ? `${title.slice(0, 47)}...` : title;
  }

  function clampPostBody(body) {
    return body.length > 500 ? `${body.slice(0, 497)}...` : body;
  }

  function setResultsHeaderSlot(element) {
    if (!element) {
      return element;
    }

    if (useStackedResultsHeader) {
      element.removeAttribute("slot");
      return element;
    }

    element.setAttribute("slot", "actions-end");
    return element;
  }

  function buildStackedResultsHeader(sortControl, viewControl = null) {
    if (!useStackedResultsHeader) {
      return null;
    }

    if (!sortControl && !viewControl) {
      return null;
    }

    const header = document.createElement("div");
    header.className = "results-header-stack";

    const controls = document.createElement("div");
    controls.className = "results-header-stack-controls";
    if (sortControl) {
      controls.append(sortControl);
    }
    if (viewControl) {
      controls.append(viewControl);
    }

    header.append(controls);
    return header;
  }

  const sortDropdown = document.createElement("calcite-button");
  setResultsHeaderSlot(sortDropdown);
  sortDropdown.className = "results-toolbar-button";
  sortDropdown.setAttribute("appearance", "outline");
  sortDropdown.setAttribute("kind", "neutral");
  sortDropdown.setAttribute("icon-start", "sort-descending-arrow");
  sortDropdown.setAttribute("icon-end", "chevron-down");
  sortDropdown.setAttribute("disabled", "");
  sortDropdown.textContent = resultsCompact ? "" : t("latestActivity");

  const viewDropdown = document.createElement("calcite-dropdown");
  setResultsHeaderSlot(viewDropdown);
  viewDropdown.className = "results-layout-switcher";
  viewDropdown.setAttribute("width", "m");
  viewDropdown.setAttribute("placement", "bottom-end");
  const viewTriggerLabels = {
    list: { icon: "list", label: t("list") },
    grid: { icon: "grid", label: t("grid") }
  };
  const currentView = viewTriggerLabels[state.resultsView] || viewTriggerLabels.list;
  viewDropdown.innerHTML = `
    <calcite-button class="results-toolbar-button" slot="trigger" appearance="outline" kind="neutral" icon-start="${currentView.icon}" icon-end="chevron-down">${resultsCompact ? "" : currentView.label}</calcite-button>
    <calcite-dropdown-group selection-mode="single">
      <calcite-dropdown-item icon-start="list" data-results-view="list" ${state.resultsView === "list" ? "selected" : ""}>${t("list")}</calcite-dropdown-item>
      <calcite-dropdown-item icon-start="grid" data-results-view="grid" ${state.resultsView === "grid" ? "selected" : ""}>${t("grid")}</calcite-dropdown-item>
    </calcite-dropdown-group>
  `;

  const results = document.createElement("div");
  results.className = "results-block";

  if (filteredPosts.length === 0 && isUnseededEmptyPrototype()) {
    const disabledSortButton = document.createElement("calcite-button");
    setResultsHeaderSlot(disabledSortButton);
    disabledSortButton.className = "results-toolbar-button";
    disabledSortButton.setAttribute("appearance", "outline");
    disabledSortButton.setAttribute("kind", "neutral");
    disabledSortButton.setAttribute("icon-start", "sort-descending-arrow");
    disabledSortButton.setAttribute("icon-end", "chevron-down");
    disabledSortButton.setAttribute("disabled", "");
    disabledSortButton.textContent = t("latestActivity");

    results.innerHTML = `
      <div class="results-empty-state" role="status" aria-live="polite">
        <calcite-icon class="results-empty-state-icon" icon="speech-bubbles" scale="l"></calcite-icon>
        <h3 class="results-empty-state-heading">${t("emptyResultsHeading")}</h3>
        <calcite-button appearance="outline" kind="neutral" icon-start="speech-bubble-plus" data-compose-action="open-body">${t("addPost")}</calcite-button>
      </div>
    `;

    if (hideViewDropdown) {
      const stackedHeader = buildStackedResultsHeader(showSortControl ? disabledSortButton : null);
      if (stackedHeader) {
        block.append(stackedHeader, results);
        return block;
      }
      if (showSortControl) {
        block.append(disabledSortButton);
      }
      block.append(results);
      return block;
    }

    const stackedHeader = buildStackedResultsHeader(showSortControl ? disabledSortButton : null, viewDropdown);
    if (stackedHeader) {
      block.append(stackedHeader, results);
      return block;
    }

    if (showSortControl) {
      block.append(disabledSortButton);
    }
    block.append(viewDropdown, results);
    return block;
  }

  if (activeResultsView === "table") {
    const reactionTotal = (post) => post.reactions.reduce((sum, reaction) => sum + reaction.count, 0);
    const tableWrap = document.createElement("div");
    tableWrap.className = "results-table-wrap";
    tableWrap.innerHTML = `
      <calcite-table caption="${t("posts")}" bordered striped>
        <calcite-table-row slot="table-header">
          <calcite-table-header heading="${t("author")}"></calcite-table-header>
          <calcite-table-header heading="${t("channelHeader")}"></calcite-table-header>
          <calcite-table-header heading="${t("timestamp")}"></calcite-table-header>
          <calcite-table-header heading="${t("postTitle")}"></calcite-table-header>
          <calcite-table-header heading="${t("postBody")}"></calcite-table-header>
          <calcite-table-header heading="${t("state")}"></calcite-table-header>
          <calcite-table-header heading="${t("reactions")}" alignment="center"></calcite-table-header>
          <calcite-table-header heading="${t("replies")}" alignment="center"></calcite-table-header>
          <calcite-table-header heading="${t("actions")}"></calcite-table-header>
        </calcite-table-row>
        ${visiblePosts.map(({ post, postIndex }) => `
          <calcite-table-row>
            <calcite-table-cell>${post.author}</calcite-table-cell>
            <calcite-table-cell>${post.channel}</calcite-table-cell>
            <calcite-table-cell>${post.age}</calcite-table-cell>
            <calcite-table-cell><div class="cell-stack"><span class="cell-title">${post.title}</span></div></calcite-table-cell>
            <calcite-table-cell><div class="cell-stack"><span class="cell-snippet">${clampPostBody(post.body)}</span></div></calcite-table-cell>
            <calcite-table-cell>${renderTableStateChips(post)}</calcite-table-cell>
            <calcite-table-cell alignment="center">${formatReactionCount(reactionTotal(post))}</calcite-table-cell>
            <calcite-table-cell alignment="center">${post.replies}</calcite-table-cell>
            <calcite-table-cell>
              ${renderPostOverflowMenu(post, postIndex, "results-table-action")}
            </calcite-table-cell>
          </calcite-table-row>
        `).join("")}
      </calcite-table>
    `;
    results.append(tableWrap);
    results.innerHTML += `<calcite-pagination page-size="${PAGE_SIZE}" start-item="${startItem}" total-items="${filteredPosts.length}"></calcite-pagination>`;
    if (state.editPostIndex !== null) {
      results.innerHTML += `
        <calcite-dialog heading="${t("editPost")}" open closable data-post-edit-dialog="true">
          ${renderPostEditor(state.editPostIndex, { isDialog: true })}
        </calcite-dialog>
      `;
    }
    if (hideViewDropdown) {
      const stackedHeader = buildStackedResultsHeader(showSortControl ? sortDropdown : null);
      if (stackedHeader) {
        block.append(stackedHeader, results);
        return block;
      }
      if (showSortControl) {
        block.append(sortDropdown);
      }
      block.append(results);
      return block;
    }

    const stackedHeader = buildStackedResultsHeader(showSortControl ? sortDropdown : null, viewDropdown);
    if (stackedHeader) {
      block.append(stackedHeader, results);
      return block;
    }

    if (showSortControl) {
      block.append(sortDropdown);
    }
    block.append(viewDropdown, results);
    return block;
  }

  if (activeResultsView === "compact") {
    const compactList = document.createElement("calcite-list");
    compactList.className = "results-compact-list";
    compactList.setAttribute("selection-mode", "none");
    compactList.setAttribute("interaction-mode", "interactive");
    compactList.innerHTML = visiblePosts.map(({ post, postIndex }) => {
      const compactHeading = [post.author, post.channel].filter(Boolean).join(" | ");
      const compactDescription = post.title?.trim() || clampPostBody(post.body);
      const hiddenChip = isPostHidden(post)
        ? `<calcite-chip slot="content-end" class="post-status-chip compact-post-status-chip" scale="s" icon="view-hide">${t("hidden")}</calcite-chip>`
        : "";

      return `
        <calcite-list-item
          class="compact-post-item"
          data-post-list-action="open-thread"
          data-post-index="${postIndex}"
          value="${postIndex}"
          label="${escapeHtml(compactHeading)}"
        >
          <calcite-avatar slot="content-start" class="compact-post-avatar" full-name="${post.author}" initials="${post.initials}" scale="m"></calcite-avatar>
          <div slot="content" class="compact-post-copy">
            <div class="compact-post-heading">${escapeHtml(compactHeading)}</div>
            <div class="compact-post-description">${escapeHtml(compactDescription)}</div>
          </div>
          ${hiddenChip}
          ${renderPostOverflowMenu(post, postIndex, "compact-post-overflow-action").replace('<calcite-dropdown class="post-overflow-menu"', '<calcite-dropdown slot="actions-end" class="post-overflow-menu compact-post-overflow-menu"')}
        </calcite-list-item>
      `;
    }).join("");
    results.append(compactList);
    if (state.editPostIndex !== null) {
      results.innerHTML += `
        <calcite-dialog heading="${t("editPost")}" open closable data-post-edit-dialog="true">
          ${renderPostEditor(state.editPostIndex, { isDialog: true })}
        </calcite-dialog>
      `;
    }
    results.innerHTML += renderReferenceDialog();
    results.innerHTML += `<calcite-pagination page-size="${PAGE_SIZE}" start-item="${startItem}" total-items="${filteredPosts.length}"></calcite-pagination>`;

    if (hideViewDropdown) {
      const stackedHeader = buildStackedResultsHeader(showSortControl ? sortDropdown : null);
      if (stackedHeader) {
        block.append(stackedHeader, results);
        return block;
      }
      if (showSortControl) {
        block.append(sortDropdown);
      }
      block.append(results);
      return block;
    }

    const stackedHeader = buildStackedResultsHeader(showSortControl ? sortDropdown : null, viewDropdown);
    if (stackedHeader) {
      block.append(stackedHeader, results);
      return block;
    }

    if (showSortControl) {
      block.append(sortDropdown);
    }
    block.append(viewDropdown, results);
    return block;
  }

  const cardGroup = document.createElement("div");
  cardGroup.className = `results-card-group is-${activeResultsView}`;
  visiblePosts.forEach(({ post, postIndex }) => {
    const item = document.createElement("calcite-card");
    item.className = `result-card is-${activeResultsView}`;
    const isEditingInline = activeResultsView === "list" && state.editPostIndex === postIndex;
    if (isEditingInline) {
      item.innerHTML = `<div class="result-card-content">${renderPostEditor(postIndex)}</div>`;
      cardGroup.append(item);
      return;
    }
    const isGridView = activeResultsView === "grid";
    const isLocationListStyle = state.locationStyle === "list" || state.locationStyle === "mini-map";
    const { visibleReactions, hiddenReactionCount, hiddenReactionLabel, hiddenReactionAriaLabel } = getVisibleReactions(post, {
      activeResultsView,
      breakpoint,
      forceNarrow: isMapLayout || effectiveWidth <= 480
    });
    const { visibleLocations: locationEntries, hiddenLocationCount } = getVisibleLocations(post);
    const { visibleLocations, hasOverflow: hasLocationOverflow, isExpanded: isLocationExpanded } = getVisibleLocationEntries(locationEntries, postIndex);
    const visibilityIcon = getChannelVisibilityIcon(post.channel);
    const gridFooterItems = [
      isPostHidden(post) ? '<calcite-chip class="post-status-chip post-status-chip-grid" scale="s" icon="view-hide"></calcite-chip>' : "",
      post.replies > 0 ? `<span class="post-card-footer-meta">${t("repliesLabel")}: ${post.replies}</span>` : "",
      locationEntries.length > 0 ? `<span class="post-card-footer-meta">${t("locationsLabel")}: ${locationEntries.length}</span>` : ""
    ].filter(Boolean);
    const listFooterMeta = [
      isPostHidden(post) ? `<calcite-chip class="post-status-chip" scale="s" icon="view-hide">${t("hidden")}</calcite-chip>` : "",
      post.replies > 0 ? `<span class="post-card-footer-meta">${t("repliesLabel")}: ${post.replies}</span>` : ""
    ].filter(Boolean);
    const avatarMarkup = activeResultsView === "grid"
      ? `<calcite-avatar class="post-avatar post-avatar-grid" full-name="${post.author}" initials="${post.initials}" scale="m"></calcite-avatar>`
      : `<calcite-avatar class="post-avatar" full-name="${post.author}" initials="${post.initials}" scale="l"></calcite-avatar>`;
    const footerStartMarkup = isGridView
      ? gridFooterItems.map((item, index) => `${index > 0 ? '<span class="post-card-footer-separator">|</span>' : ""}${item}`).join("")
      : listFooterMeta.join("");
    const isReplyInlineOpen = activeResultsView === "list" && state.replyPostIndex === postIndex && !state.replyDialogOpen;
    const replyThreadMarkup = activeResultsView === "list"
      ? renderReplyThread(post, postIndex, {
          previewLimit: LIST_REPLY_PREVIEW_LIMIT,
          overflowAction: "toggle-thread",
          overflowLabel: t("viewAllReplies"),
          allowExpandedCount: true
        })
      : "";
    const footerActionsMarkup = isGridView
      ? `${`<button class="post-card-footer-link" type="button" data-reply-action="open-thread-editor" data-reply-post-index="${postIndex}">${t("reply")}</button>`}${renderPostOverflowMenu(post, postIndex)}`
      : `
        <calcite-action class="post-card-footer-action is-primary" data-reply-action="open-inline" data-reply-post-index="${postIndex}" icon="speech-bubble" text="${t("reply")}" text-enabled></calcite-action>
        ${renderPostOverflowMenu(post, postIndex)}
      `;
    item.innerHTML = `
      <div class="result-card-content" ${isGridView ? `data-post-card-action="open-thread" data-post-index="${postIndex}"` : ""}>
        <div class="post-card-header">
          <div class="post-card-head-main">
            ${avatarMarkup}
            <div class="post-card-meta">
              <div class="post-card-author-row">
                <h4 class="post-card-author">${post.author}</h4>
              </div>
              <div class="post-card-source-row">
                ${isGridView ? "" : `<span class="post-card-source">${post.channel}</span>
                <span class="post-card-dot">|</span>`}
                <span class="post-card-age">${post.age}</span>
                <span class="post-card-dot">|</span>
                <calcite-icon class="post-card-lock" icon="${visibilityIcon}" scale="s"></calcite-icon>
              </div>
            </div>
          </div>
        </div>
        <div class="post-card-content-block">
          ${post.title ? `<h4 class="result-card-title">${isGridView ? clampPostTitle(post.title) : post.title}</h4>` : ""}
          <p class="post-card-body">${clampPostBody(post.body)}</p>
          ${activeResultsView === "grid" ? `<button class="post-card-read-more is-hidden" type="button">Read more</button>` : ""}
        </div>
        ${renderReferenceCard(post, postIndex)}
        ${visibleLocations.length > 0 && !isGridView ? (isLocationListStyle
          ? `<div class="post-card-location-list-wrap" data-location-post-index="${postIndex}"><calcite-list class="post-card-location-list ${state.locationStyle === "mini-map" ? "is-mini-map" : ""}" label="${t("locationsLabel")}">${visibleLocations.map((location, locationIndex) => `<calcite-list-item label="${getLocationDisplayLabel(location, postIndex, locationIndex)}">${state.locationStyle === "mini-map" ? `<div class="post-location-minimap is-${location.kind}" slot="content-start" aria-hidden="true"></div>` : `<calcite-icon slot="content-start" icon="${location.icon}" scale="s"></calcite-icon>`}</calcite-list-item>`).join("")}</calcite-list>${hasLocationOverflow ? `<button class="post-reply-toggle" type="button" data-location-action="toggle-list" data-location-post-index="${postIndex}">${isLocationExpanded ? t("collapseLocations") : t("viewAllLocations")}</button>` : ""}</div>`
          : `<div class="post-card-locations">${visibleLocations.map((location) => `<calcite-chip class="post-location-chip" icon="${location.icon}" scale="m">${location.label}</calcite-chip>`).join("")}${hiddenLocationCount > 0 ? `<calcite-chip class="post-location-chip" scale="m">+${hiddenLocationCount}</calcite-chip>` : ""}</div>`
        ) : ""}
        <div class="post-card-reaction-row">
          <div class="post-reactions">
            ${visibleReactions.map((reaction, reactionIndex) => `<button class="post-reaction-button" type="button" data-post-index="${postIndex}" data-reaction-index="${reactionIndex}" aria-label="Reaction ${reaction.emoji} ${formatReactionCount(reaction.count)}"><span class="post-reaction-emoji">${reaction.emoji}</span><span class="post-reaction-count">${formatReactionCount(reaction.count)}</span></button>`).join("")}
            ${hiddenReactionCount > 0 ? `<button class="post-reaction-button is-reaction-overflow" type="button" aria-label="${hiddenReactionAriaLabel}">${hiddenReactionLabel}</button>` : ""}
            <button class="post-reaction-button is-add-reaction" type="button" aria-label="Add reaction"><calcite-icon icon="add-reaction" scale="s"></calcite-icon></button>
          </div>
        </div>
        <div class="post-card-footer">
          <div class="post-card-footer-start">
            ${footerStartMarkup}
          </div>
          <div class="post-card-footer-actions">
            ${footerActionsMarkup}
          </div>
        </div>
        ${isReplyInlineOpen ? renderReplyEditor(postIndex) : ""}
        ${replyThreadMarkup}
      </div>
    `;
    cardGroup.append(item);
  });
  results.append(cardGroup);
  if (activeResultsView === "grid") {
    requestAnimationFrame(() => {
      cardGroup.querySelectorAll(".result-card.is-grid").forEach((card) => {
        const body = card.querySelector(".post-card-body");
        const readMore = card.querySelector(".post-card-read-more");
        if (!body || !readMore) return;
        const isOverflowing = body.scrollHeight > body.clientHeight + 1;
        readMore.classList.toggle("is-hidden", !isOverflowing);
      });
    });
  }
  if (activeResultsView !== "list" && state.editPostIndex !== null) {
    results.innerHTML += `
      <calcite-dialog heading="${t("editPost")}" open closable data-post-edit-dialog="true">
        ${renderPostEditor(state.editPostIndex, { isDialog: true })}
      </calcite-dialog>
    `;
  }
  if (activeResultsView === "grid" && state.replyDialogOpen && state.replyPostIndex !== null) {
    results.innerHTML += `
      <calcite-dialog heading="${t("reply")}" open data-reply-dialog="true">
        ${renderReplyEditor(state.replyPostIndex, { isDialog: true })}
      </calcite-dialog>
    `;
  }
  results.innerHTML += renderReferenceDialog();
  results.innerHTML += `<calcite-pagination page-size="${PAGE_SIZE}" start-item="${startItem}" total-items="${filteredPosts.length}"></calcite-pagination>`;

  if (hideViewDropdown) {
    const stackedHeader = buildStackedResultsHeader(showSortControl ? sortDropdown : null);
    if (stackedHeader) {
      block.append(stackedHeader, results);
      return block;
    }
    if (showSortControl) {
      block.append(sortDropdown);
    }
    block.append(results);
    return block;
  }

  const stackedHeader = buildStackedResultsHeader(showSortControl ? sortDropdown : null, viewDropdown);
  if (stackedHeader) {
    block.append(stackedHeader, results);
    return block;
  }

  if (showSortControl) {
    block.append(sortDropdown);
  }
  block.append(viewDropdown, results);
  return block;
}

function createResultsFiltersPanel() {
  const createdFacetPosts = getDateFacetPosts().filter(({ post }) => postMatchesDateFilter(post, state.dateModifiedFilter));
  const modifiedFacetPosts = getDateFacetPosts().filter(({ post }) => postMatchesDateFilter(post, state.dateCreatedFilter));
  const stateCounts = getStateFacetPosts().reduce((counts, { post }) => {
    getPostStateValues(post).forEach((stateValue) => {
      counts[stateValue] += 1;
    });
    return counts;
  }, { approved: 0, hidden: 0, blocked: 0 });
  const referenceItemCounts = getReferenceItemCounts();
  const referenceFacetItems = getReferenceItemOptions().map((reference) => `
          <calcite-list-item data-reference-item-value="${reference.id}" label="${reference.label}" ${state.referenceItemFilters.includes(reference.id) ? "selected" : ""}>
            <span slot="content-end">${referenceItemCounts.get(reference.id) || 0}</span>
          </calcite-list-item>
        `).join("");
  const channelCounts = getActivePosts().reduce((counts, post) => {
    counts.set(post.channel, (counts.get(post.channel) || 0) + 1);
    return counts;
  }, new Map());
  const channelFacetItems = getSortedChannels().map((channel) => `
          <calcite-list-item data-channel-value="${channel}" label="${getChannelLabel(channel)}" ${state.channelFilters.includes(channel) ? "selected" : ""}>
            <span slot="content-end">${channelCounts.get(channel) || 0}</span>
          </calcite-list-item>
        `).join("");
  const createDateFacetItems = (kind, selectedValue, posts) => DATE_FILTER_OPTIONS.map((option) => `
          <calcite-list-item data-date-filter-kind="${kind}" data-date-filter-value="${option.value}" label="${option.label}" ${selectedValue === option.value ? "selected" : ""}>
            <span slot="content-end">${posts.filter(({ post }) => postMatchesDateFilter(post, option.value)).length}</span>
          </calcite-list-item>
        `).join("");
  const panel = document.createElement("calcite-panel");
  panel.className = "results-filters-panel";
  panel.setAttribute("heading", "Filters");
  panel.setAttribute("id", "panel-filters");
  panel.setAttribute("closable", "");
  panel.setAttribute("indicator", "");
  panel.innerHTML = `
    <div class="results-filters-panel-scroll">
    <calcite-block-group>
      <calcite-block expanded heading="${t("referenceItem")}">
        <calcite-list selection-mode="multiple">
          ${referenceFacetItems}
        </calcite-list>
      </calcite-block>
    </calcite-block-group>
    <calcite-block-group>
      <calcite-block collapsible expanded heading="${t("channel")}">
        <calcite-list filter-enabled selection-mode="multiple">
          ${channelFacetItems}
        </calcite-list>
      </calcite-block>
      <calcite-block collapsible expanded heading="${t("state")}">
        <calcite-list filter-enabled selection-mode="multiple">
          <calcite-list-item data-state-value="approved" label="${t("approved")}" ${state.stateFilters.includes("approved") ? "selected" : ""}><span slot="content-end">${stateCounts.approved}</span></calcite-list-item>
          <calcite-list-item data-state-value="hidden" label="${t("hidden")}" ${state.stateFilters.includes("hidden") ? "selected" : ""}><span slot="content-end">${stateCounts.hidden}</span></calcite-list-item>
          <calcite-list-item data-state-value="blocked" label="${t("blocked")}" ${state.stateFilters.includes("blocked") ? "selected" : ""}><span slot="content-end">${stateCounts.blocked}</span></calcite-list-item>
        </calcite-list>
      </calcite-block>
      <calcite-block expanded collapsible heading="Date modified">
        <calcite-list selection-mode="single">
          ${createDateFacetItems("modified", state.dateModifiedFilter, modifiedFacetPosts)}
        </calcite-list>
      </calcite-block>
      <calcite-block expanded collapsible heading="Date created">
        <calcite-list selection-mode="single">
          ${createDateFacetItems("created", state.dateCreatedFilter, createdFacetPosts)}
        </calcite-list>
      </calcite-block>
    </calcite-block-group>
    </div>
  `;
  return panel;
}

function createOverflowDropdown({ includePrimary = true } = {}) {
  const dropdown = document.createElement("calcite-dropdown");
  dropdown.className = "overflow-dropdown";
  dropdown.setAttribute("slot", "actions-end");
  dropdown.setAttribute("width", "m");
  dropdown.setAttribute("close-on-select-disabled", "");
  dropdown.innerHTML = `
    <calcite-action slot="trigger" icon="ellipsis" text="${t("options")}" indicator></calcite-action>
    ${includePrimary ? `
    <calcite-dropdown-group selection-mode="single-persist" group-title="${t("layout")}">
      ${LAYOUT_ACTIONS.map((action) => `<calcite-dropdown-item data-action-type=\"layout\" data-action-key=\"${action.key}\" ${state.activeLayout === action.key ? "selected" : ""} icon-start=\"${action.icon}\">${getLayoutLabel(action.key)}</calcite-dropdown-item>`).join("")}
    </calcite-dropdown-group>` : ""}
    <calcite-dropdown-group selection-mode="none" group-title="${t("additionalOptions")}">
      ${getVisibleExtraActions().map((action) => `<calcite-dropdown-item data-action-type=\"extra\" data-action-key=\"${action.key}\" icon-start=\"${action.icon}\">${getActionLabel(action)}</calcite-dropdown-item>`).join("")}
    </calcite-dropdown-group>
    <calcite-dropdown-group selection-mode="none" group-title="${t("more")}">
      ${getVisibleEndActions().map((action) => `<calcite-dropdown-item data-action-type=\"end\" data-action-key=\"${action.key}\" icon-start=\"${action.icon}\">${getActionLabel(action)}</calcite-dropdown-item>`).join("")}
    </calcite-dropdown-group>
  `;
  return dropdown;
}

function createSearchToggleAction({ actionType = "panel-control", actionKey = "toggle-preview", active = state.previewPanelOpen } = {}) {
  return createAction({
    label: t("search"),
    icon: "search",
    active,
    dataset: { actionKey, actionType }
  });
}
function buildPanelActionBar(textMode, { vertical = false, includeSearchToggle = false, floating = false, groupSearchWithUtility = false, forceIconsOnly = false } = {}) {
  if (!hasAnyPanelActions() && !includeSearchToggle) {
    return null;
  }

  const showActionText = forceIconsOnly ? false : textMode.panel;

  const actionBar = document.createElement("calcite-action-bar");
  if (!vertical) {
    actionBar.setAttribute("slot", "action-bar");
  }
  actionBar.setAttribute("layout", vertical ? "vertical" : "horizontal");
  actionBar.setAttribute("expand-disabled", "");
  actionBar.setAttribute("selection-appearance", "highlight");
  actionBar.classList.add("panel-action-bar");
  actionBar.classList.toggle("is-floating", floating);
  actionBar.classList.toggle("compact-actions", !showActionText);

  if (includeSearchToggle && !groupSearchWithUtility) {
    const searchGroup = document.createElement("calcite-action-group");
    searchGroup.append(createSearchToggleAction());
    actionBar.append(searchGroup);
  }

  // const addGroup = document.createElement("calcite-action-group");
  // addGroup.append(createButton({ label: "Add content", withText: textMode.addButtonText }));
  // actionBar.append(addGroup);

  if (textMode.useDropdown) {
    actionBar.append(createOverflowDropdown());
    return actionBar;
  }

  if (state.toggles.mainLayouts) {
    const layoutGroup = document.createElement("calcite-action-group");
    layoutGroup.setAttribute("selection-mode", "single-persist");
    LAYOUT_ACTIONS.forEach((action) => {
      layoutGroup.append(createAction({
        label: getLayoutLabel(action.key),
        icon: action.icon,
        textEnabled: showActionText,
        active: state.activeLayout === action.key,
        dataset: { actionKey: action.key, actionType: "layout" }
      }));
    });
    actionBar.append(layoutGroup);
  }

  if (includeSearchToggle && groupSearchWithUtility) {
    const utilityGroup = document.createElement("calcite-action-group");
    utilityGroup.setAttribute("selection-mode", "single-persist");
    utilityGroup.append(createSearchToggleAction({
      actionType: "utility",
      actionKey: "results",
      active: state.previewPanelOpen && (state.activeLayout === "map" ? state.activeUtility === "results" : state.activeUtility !== "filters")
    }));
    actionBar.append(utilityGroup);
  }

  if (hasAnyExtraActions()) {
    if (textMode.collapseSecondary) {
      actionBar.append(createOverflowDropdown({ includePrimary: false }));
    } else {
      const extraGroup = document.createElement("calcite-action-group");
      extraGroup.setAttribute("selection-mode", "single");
      getVisibleExtraActions().forEach((action) => {
        extraGroup.append(createAction({
          label: getActionLabel(action),
          icon: action.icon,
          textEnabled: showActionText,
          active: state.activeExtra === action.key,
          dataset: { actionKey: action.key, actionType: "extra" }
        }));
      });
      actionBar.append(extraGroup);
    }
  }

  if (!textMode.collapseSecondary) {
    getVisibleEndActions().forEach((action) => {
      actionBar.append(createAction({
        label: getActionLabel(action),
        icon: action.icon,
        slot: "actions-end",
        dataset: { actionKey: action.key, actionType: "end" }
      }));
    });
  } else if (!hasAnyExtraActions() && hasAnyEndActions()) {
    actionBar.append(createOverflowDropdown({ includePrimary: false }));
  }

  return actionBar;
}

function buildResultsPanelBody(bodyShell, textMode, { breakpoint = "lg", effectiveWidth = 1440, isMapLayout = false, compactMapComposer = false, hideViewDropdown = false } = {}) {
  const shouldHideViewDropdown = hideViewDropdown || (!isMapLayout && breakpoint === "xs");
  const panelInner = document.createElement("div");
  panelInner.className = "panel-inner";

  if (isMapLayout) {
    bodyShell.setAttribute("heading", t("search"));
    bodyShell.setAttribute("closable", "");
  } else {
    bodyShell.removeAttribute("heading");
    bodyShell.toggleAttribute("closable", false);
  }

  if (state.toggles.searchBar) {
    bodyShell.append(createAutocomplete());
  }

  const filtersBlock = createFiltersBlock(breakpoint !== "sm" && breakpoint !== "xs");
  if (filtersBlock) {
    panelInner.append(filtersBlock);
  }

  if (!isUserPrototype()) {
    panelInner.append(createPostComposer({
      compactCollapsed: compactMapComposer,
      isMapLayout,
      breakpoint
    }));
  }

  panelInner.append(createResultsBlock(textMode.resultsCompact, {
    isMapLayout,
    hideViewDropdown: shouldHideViewDropdown,
    breakpoint,
    effectiveWidth
  }));

  bodyShell.append(panelInner);
}

function createMapResultsPanel(textMode, breakpoint, effectiveWidth) {
  const resultsPanel = document.createElement("calcite-panel");
  resultsPanel.className = "body-shell map-body-shell";
  resultsPanel.setAttribute("id", "panel-results");
  resultsPanel.classList.toggle("compact-actions", !textMode.panel);
  resultsPanel.toggleAttribute("closable", false);

  buildResultsPanelBody(resultsPanel, textMode, {
    breakpoint,
    effectiveWidth,
    isMapLayout: true,
    compactMapComposer: false
  });

  return resultsPanel;
}

function renderMapRuntimePanels(runtimePanel, textMode, breakpoint, effectiveWidth) {
  const nextResultsPanel = createMapResultsPanel(textMode, breakpoint, effectiveWidth);
  const nextFiltersPanel = createResultsFiltersPanel();
  const currentResultsPanel = runtimePanel.querySelector("#panel-results");
  const currentFiltersPanel = runtimePanel.querySelector("#panel-filters");

  if (currentResultsPanel) {
    currentResultsPanel.replaceWith(nextResultsPanel);
  } else {
    runtimePanel.append(nextResultsPanel);
  }

  if (currentFiltersPanel) {
    currentFiltersPanel.replaceWith(nextFiltersPanel);
  } else {
    runtimePanel.append(nextFiltersPanel);
  }

  return {
    resultsPanel: nextResultsPanel,
    filtersPanel: nextFiltersPanel
  };
}

function buildMapLayout(breakpoint, textMode, effectiveWidth) {
  const template = document.getElementById("map-template");
  const fragment = template.content.cloneNode(true);
  const exampleShell = fragment.querySelector(".map-example-shell");
  const mapBackdrop = fragment.querySelector(".map-backdrop");
  const runtimeShell = fragment.querySelector(".map-runtime-shell");
  const runtimePanel = fragment.querySelector(".map-runtime-panel");
  const bodyShell = fragment.querySelector(".map-body-shell");
  const isSmallLayout = breakpoint === "xs" || breakpoint === "sm";

  exampleShell.classList.add("is-map-layout");
  mapBackdrop.removeAttribute("aria-hidden");
  runtimeShell.classList.toggle("is-small-layout", isSmallLayout);
  runtimeShell.toggleAttribute("content-behind", true);
  runtimePanel.setAttribute("display-mode", isSmallLayout ? "overlay" : "float-content");
  runtimePanel.classList.toggle("is-rail-only", !state.previewPanelOpen);

  const resultsPanel = createMapResultsPanel(textMode, breakpoint, effectiveWidth);
  bodyShell.replaceWith(resultsPanel);

  const filtersPanel = createResultsFiltersPanel();
  const showFiltersPanel = state.activeUtility === "filters";
  resultsPanel.hidden = showFiltersPanel;
  filtersPanel.hidden = !showFiltersPanel;
  runtimePanel.append(filtersPanel);

  const actionBar = buildPanelActionBar(textMode, {
    vertical: true,
    includeSearchToggle: true,
    floating: false,
    groupSearchWithUtility: true,
    forceIconsOnly: true
  });

  if (actionBar) {
    actionBar.setAttribute("slot", "action-bar");
    runtimePanel.prepend(actionBar);
  }

  return fragment;
}

function syncMapRuntimePanelState({ effectiveWidth, breakpoint, textMode } = {}) {
  const runtimeShell = previewShell.querySelector(".map-runtime-shell");
  const runtimePanel = previewShell.querySelector(".map-runtime-panel");
  if (!runtimeShell || !runtimePanel) {
    return false;
  }

  const resolvedWidth = effectiveWidth ?? getEffectiveWidth();
  const resolvedBreakpoint = breakpoint ?? getBreakpoint(resolvedWidth);
  const resolvedTextMode = textMode ?? getLayoutTextMode(resolvedWidth, resolvedBreakpoint);
  const isSmallLayout = resolvedBreakpoint === "xs" || resolvedBreakpoint === "sm";
  runtimeShell.classList.toggle("is-small-layout", isSmallLayout);
  runtimeShell.toggleAttribute("content-behind", true);
  runtimePanel.setAttribute("display-mode", isSmallLayout ? "overlay" : "float-content");

  const nextActionBar = buildPanelActionBar(resolvedTextMode, {
    vertical: true,
    includeSearchToggle: true,
    floating: false,
    groupSearchWithUtility: true,
    forceIconsOnly: true
  });
  const currentActionBar = runtimePanel.querySelector(':scope > calcite-action-bar.panel-action-bar[slot="action-bar"]');
  if (nextActionBar) {
    nextActionBar.setAttribute("slot", "action-bar");
    if (currentActionBar) {
      currentActionBar.replaceWith(nextActionBar);
    } else {
      runtimePanel.prepend(nextActionBar);
    }
  } else {
    currentActionBar?.remove();
  }

  const { resultsPanel, filtersPanel } = renderMapRuntimePanels(runtimePanel, resolvedTextMode, resolvedBreakpoint, resolvedWidth);
  const showFiltersPanel = state.activeUtility === "filters";
  const showResultsPanel = state.previewPanelOpen && state.activeUtility === "results";
  const showFiltersContent = state.previewPanelOpen && showFiltersPanel;

  runtimePanel.classList.toggle("is-rail-only", !state.previewPanelOpen);

  if (resultsPanel) {
    resultsPanel.hidden = !showResultsPanel;
  }

  if (filtersPanel) {
    filtersPanel.hidden = !showFiltersContent;
  }

  runtimePanel.querySelectorAll('calcite-action[data-action-type="utility"]').forEach((action) => {
    const isResultsAction = action.dataset.actionKey === "results";
    const isFiltersAction = action.dataset.actionKey === "filters";
    action.active = state.previewPanelOpen && ((isResultsAction && state.activeUtility === "results") || (isFiltersAction && showFiltersPanel));
  });

  runtimePanel.querySelectorAll('calcite-action[data-action-type="layout"]').forEach((action) => {
    action.active = action.dataset.actionKey === state.activeLayout;
  });

  runtimePanel.querySelectorAll('calcite-action[data-action-type="layout-placeholder"]').forEach((action) => {
    action.active = false;
  });

  return true;
}

function queueResultsScrollRestore() {
  const resultsBlock = previewShell.querySelector(".results-block");
  state.pendingResultsScrollTop = resultsBlock ? resultsBlock.scrollTop : null;
}

function queueLocationListAnimation(postIndex) {
  const locationListWrap = previewShell.querySelector(`[data-location-post-index="${postIndex}"]`);
  state.pendingLocationAnimation = locationListWrap
    ? {
        postIndex,
        startHeight: locationListWrap.getBoundingClientRect().height
      }
    : null;
}

function restoreComposeFocusTarget() {
  if (!state.composeExpanded || !state.composeFocusTarget) {
    return;
  }

  const focusTarget = state.composeFocusTarget;
  state.composeFocusTarget = null;
  requestAnimationFrame(() => {
    const targetSelector = focusTarget === "close"
      ? '[data-compose-close-button="true"]'
      : '[data-compose-field="comment"]';
    const target = previewShell.querySelector(targetSelector);
    if (typeof target?.setFocus === "function") {
      target.setFocus();
      return;
    }

    target?.focus();
  });
}

function render() {
  syncActiveState();
  if (state.activeLayout === "map") {
    setReplyThreadDrawerOpen(null);
  }
  state.composeChannel = getComposerChannelValue();
  setFrameWidth();
  if (prototypePresetControl) {
    prototypePresetControl.value = state.prototypePreset;
  }
  if (widthControl) {
    widthControl.value = state.width;
  }
  if (strategyControl) {
    strategyControl.value = state.strategy;
  }
  if (languageControl) {
    languageControl.value = state.language;
  }
  if (locationStyleControl) {
    locationStyleControl.value = state.locationStyle;
  }
  renderStaticText();

  const effectiveWidth = getEffectiveWidth();
  const breakpoint = getBreakpoint(effectiveWidth);
  const textMode = getLayoutTextMode(effectiveWidth, breakpoint);
  previewFrame.dataset.narrowReactions = effectiveWidth <= 480 ? "true" : "false";

  const isMapLayout = state.activeLayout === "map";
  if (isMapLayout) {
    if (previewShell.querySelector(".map-runtime-shell")) {
      syncMapRuntimePanelState({ effectiveWidth, breakpoint, textMode });
      restoreComposeFocusTarget();
    } else {
      previewShell.replaceChildren();
      previewShell.append(buildMapLayout(breakpoint, textMode, effectiveWidth));
      requestAnimationFrame(() => {
        initializeRuntimeMap(previewShell.querySelector(".map-runtime-canvas"));
      });
    }
    previewFrame.dataset.breakpoint = breakpoint;
    return;
  }

  previewShell.replaceChildren();

  runtimeMapElement = null;

  const template = document.getElementById("search-template");
  const fragment = template.content.cloneNode(true);
  const exampleShell = fragment.querySelector(".example-shell");
  const shellLayout = fragment.querySelector(".shell-layout");
  const shellSidebarStart = fragment.querySelector(".shell-sidebar-start");
  const shellSidebarMain = fragment.querySelector(".shell-sidebar-main");
  const shellSidebarEnd = fragment.querySelector(".shell-sidebar-end");
  const bodyShell = fragment.querySelector(".body-shell");
  const contentStage = fragment.querySelector(".content-stage");
  const isSmallLayout = breakpoint === "xs" || breakpoint === "sm";
  const useLimitedRoomActionBar = isSmallLayout;
  if (!isSmallLayout) {
    state.previewPanelOpen = true;
  }
  bodyShell.classList.toggle("compact-actions", !textMode.panel);
  bodyShell.toggleAttribute("closable", false);

  const showReplyThreadPanel = state.replyThreadDrawerPostIndex !== null;
  const showFiltersSidebar = state.activeUtility === "filters";
  const useSinglePanelFilters = showFiltersSidebar && isSmallLayout;
  shellLayout.classList.toggle("has-panel-start", useLimitedRoomActionBar);
  shellLayout.classList.toggle("has-sidebar", showFiltersSidebar && !useSinglePanelFilters);
  shellLayout.classList.toggle("has-end-sidebar", showReplyThreadPanel);
  shellSidebarStart.replaceChildren();
  shellSidebarMain.replaceChildren();
  shellSidebarEnd.replaceChildren();
  if (showFiltersSidebar && !useSinglePanelFilters) {
    shellSidebarMain.append(createResultsFiltersPanel());
  }
  if (showReplyThreadPanel) {
    shellSidebarEnd.append(createReplyThreadPanel(state.replyThreadDrawerPostIndex));
  }

  const panelActionBar = buildPanelActionBar(textMode, {
    vertical: useLimitedRoomActionBar,
    includeSearchToggle: useLimitedRoomActionBar,
    floating: false,
    forceIconsOnly: isSmallLayout
  });

  buildResultsPanelBody(bodyShell, textMode, {
    breakpoint,
    effectiveWidth,
    isMapLayout: false,
    compactMapComposer: false
  });

  const activePanel = useSinglePanelFilters ? createResultsFiltersPanel() : bodyShell;

  if (panelActionBar) {
    if (useLimitedRoomActionBar) {
      shellSidebarStart.append(panelActionBar);
    } else if (activePanel === bodyShell) {
      bodyShell.append(panelActionBar);
    }
  }

  if (state.previewPanelOpen) {
    if (activePanel !== bodyShell) {
      bodyShell.replaceWith(activePanel);
    }
  } else {
    shellLayout.hidden = true;
  }

  previewShell.append(fragment);

  if (state.pendingLocationAnimation) {
    const pendingLocationAnimation = state.pendingLocationAnimation;
    state.pendingLocationAnimation = null;
    requestAnimationFrame(() => {
      const locationListWrap = previewShell.querySelector(`[data-location-post-index="${pendingLocationAnimation.postIndex}"]`);
      if (!locationListWrap) {
        return;
      }

      const endHeight = locationListWrap.getBoundingClientRect().height;
      if (Math.abs(endHeight - pendingLocationAnimation.startHeight) < 1) {
        return;
      }

      locationListWrap.style.overflow = "hidden";
      locationListWrap.style.height = `${pendingLocationAnimation.startHeight}px`;
      locationListWrap.style.opacity = "0.96";
      void locationListWrap.offsetHeight;
      locationListWrap.style.transition = "height 180ms ease, opacity 180ms ease";
      locationListWrap.style.height = `${endHeight}px`;
      locationListWrap.style.opacity = "1";

      locationListWrap.addEventListener("transitionend", () => {
        locationListWrap.style.removeProperty("height");
        locationListWrap.style.removeProperty("opacity");
        locationListWrap.style.removeProperty("overflow");
        locationListWrap.style.removeProperty("transition");
      }, { once: true });
    });
  }

  if (state.pendingResultsScrollTop !== null) {
    const pendingResultsScrollTop = state.pendingResultsScrollTop;
    state.pendingResultsScrollTop = null;
    requestAnimationFrame(() => {
      const resultsBlock = previewShell.querySelector(".results-block");
      if (resultsBlock) {
        resultsBlock.scrollTop = pendingResultsScrollTop;
      }
    });
  }

  restoreComposeFocusTarget();

  if (state.replyFocusPostIndex !== null) {
    const replyFocusPostIndex = state.replyFocusPostIndex;
    state.replyFocusPostIndex = null;
    requestAnimationFrame(() => {
      const replyField = previewShell.querySelector(`[data-reply-field="body"][data-reply-post-index="${replyFocusPostIndex}"]`);
      if (typeof replyField?.setFocus === "function") {
        replyField.setFocus();
        return;
      }

      replyField?.focus();
    });
  }

  if (state.replyRestorePostIndex !== null) {
    const replyRestorePostIndex = state.replyRestorePostIndex;
    state.replyRestorePostIndex = null;
    requestAnimationFrame(() => {
      const replyAnchor = previewShell.querySelector(`[data-reply-action="toggle-thread"][data-reply-post-index="${replyRestorePostIndex}"]`)
        || previewShell.querySelector(`.result-card [data-reply-post-index="${replyRestorePostIndex}"]`);
      const replyCard = replyAnchor?.closest("calcite-card") || replyAnchor?.closest(".result-card");
      replyCard?.scrollIntoView({ block: "nearest" });
    });
  }

  previewFrame.dataset.breakpoint = breakpoint;

}

function updateStateFromControls() {
  const nextPrototypePreset = prototypePresetControl?.value || "project";
  const prototypePresetChanged = state.prototypePreset !== nextPrototypePreset;
  const filtersWereEnabled = state.toggles.filters;
  state.prototypePreset = nextPrototypePreset;
  state.width = widthControl?.value || state.width;
  state.strategy = strategyControl?.value || state.strategy;
  state.language = languageControl?.value || state.language;
  state.locationStyle = locationStyleControl?.value || state.locationStyle;
  if (prototypePresetChanged) {
    state.pageStart = 1;
    state.editPostIndex = null;
    state.replyDialogOpen = false;
    state.replyPostIndex = null;
    state.referenceDialogOpen = false;
    state.referenceDialogPostIndex = null;
    state.replyThreadDrawerPostIndex = null;
    state.replyFocusPostIndex = null;
    state.replyRestorePostIndex = null;
    if (state.prototypePreset === "empty") {
      clearFacetFilters();
      state.activeUtility = null;
    }
  }
  if (prototypePresetChanged && state.prototypePreset !== "r3-project") {
    enableFullAuxiliaryActionSet();
  }
  if (filtersWereEnabled && !state.toggles.filters) {
    clearFacetFilters();
  }
  if (shouldCollapseMapComposer()) {
    state.composeExpanded = false;
    state.composeFocusTarget = null;
  }
  render();
}

function setReplyThreadDrawerOpen(postIndex) {
  state.replyThreadDrawerPostIndex = Number.isInteger(postIndex) ? postIndex : null;
}

function handleActionSelection(actionType, actionKey) {
  if (!actionType || !actionKey) {
    return;
  }

  if (actionType === "layout-placeholder") {
    if (state.activeLayout === "map" && syncMapRuntimePanelState()) {
      return;
    }

    render();
    return;
  }

  if (actionType === "layout") {
    state.activeLayout = actionKey;
    if (actionKey === "map") {
      state.strategy = "option-1";
      state.previewPanelOpen = true;
      state.activeUtility = "results";
    }
    if (shouldCollapseMapComposer()) {
      state.composeExpanded = false;
      state.composeFocusTarget = null;
    }
  }

  if (actionType === "utility") {
    if (actionKey === "results") {
      state.activeUtility = state.activeLayout === "map" ? "results" : null;
      state.previewPanelOpen = true;
    } else {
      state.activeUtility = state.activeUtility === actionKey ? null : actionKey;
      state.previewPanelOpen = true;
    }
    state.activeExtra = null;

    if (state.activeLayout === "map" && syncMapRuntimePanelState()) {
      return;
    }
  }

  if (actionType === "extra") {
    state.activeExtra = state.activeExtra === actionKey ? null : actionKey;
    state.activeUtility = null;
  }

  render();
}

prototypePresetControl?.addEventListener("calciteSelectChange", updateStateFromControls);
widthControl?.addEventListener("calciteSelectChange", updateStateFromControls);
strategyControl?.addEventListener("calciteSelectChange", updateStateFromControls);
languageControl?.addEventListener("calciteSelectChange", updateStateFromControls);
locationStyleControl?.addEventListener("calciteSelectChange", updateStateFromControls);

closeReplyThreadButton.addEventListener("click", () => {
  setReplyThreadDrawerOpen(null);
  render();
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    if (state.replyThreadDrawerPostIndex !== null) {
      setReplyThreadDrawerOpen(null);
      render();
      return;
    }
  }
});

previewShell.addEventListener("click", (event) => {
  const composeInputTrigger = event.composedPath().find((node) => node?.dataset?.composeTrigger === "input");
  const reactionButton = event.composedPath().find((node) => node?.dataset?.postIndex && node?.dataset?.reactionIndex);
  if (reactionButton?.dataset?.postIndex && reactionButton?.dataset?.reactionIndex) {
    const postIndex = Number(reactionButton.dataset.postIndex);
    const reactionIndex = Number(reactionButton.dataset.reactionIndex);
    const post = getActivePosts()[postIndex];
    const reaction = post?.reactions?.[reactionIndex];

    if (reaction) {
      reaction.count += 1;
      render();
    }
    return;
  }

  const replyAction = event.composedPath().find((node) => node?.dataset?.replyAction);
  if (replyAction?.dataset?.replyAction === "open-inline") {
    queueResultsScrollRestore();
    state.replyPostIndex = Number(replyAction.dataset.replyPostIndex);
    state.replyDialogOpen = false;
    state.replyFocusPostIndex = state.replyPostIndex;
    render();
    return;
  }

  if (replyAction?.dataset?.replyAction === "open-dialog") {
    state.replyPostIndex = Number(replyAction.dataset.replyPostIndex);
    state.replyDialogOpen = true;
    state.replyFocusPostIndex = state.replyPostIndex;
    render();
    return;
  }

  if (replyAction?.dataset?.replyAction === "open-thread-editor") {
    state.replyPostIndex = Number(replyAction.dataset.replyPostIndex);
    state.replyDialogOpen = false;
    state.replyFocusPostIndex = state.replyPostIndex;
    setReplyThreadDrawerOpen(state.replyPostIndex);
    render();
    return;
  }

  const referenceAction = event.composedPath().find((node) => node?.dataset?.referenceAction);
  if (referenceAction?.dataset?.referenceAction === "open-dialog") {
    state.referenceDialogPostIndex = Number(referenceAction.dataset.postIndex);
    state.referenceDialogOpen = true;
    render();
    return;
  }

  if (referenceAction?.dataset?.referenceAction === "close-dialog") {
    state.referenceDialogOpen = false;
    state.referenceDialogPostIndex = null;
    render();
    return;
  }

  const postCardAction = event.composedPath().find((node) => node?.dataset?.postCardAction === "open-thread");
  const postListAction = event.composedPath().find((node) => node?.dataset?.postListAction === "open-thread");
  if (postListAction?.dataset?.postIndex) {
    const clickedInteractiveElement = event.composedPath().find((node) => {
      if (node === postListAction) {
        return false;
      }

      const tagName = node?.tagName;
      return tagName === "BUTTON"
        || tagName === "CALCITE-ACTION"
        || tagName === "CALCITE-DROPDOWN"
        || tagName === "CALCITE-DROPDOWN-ITEM"
        || tagName === "CALCITE-DROPDOWN-GROUP"
        || tagName === "CALCITE-BUTTON"
        || tagName === "CALCITE-CHIP"
        || tagName === "CALCITE-TEXT-AREA"
        || tagName === "CALCITE-INPUT";
    });

    if (!clickedInteractiveElement) {
      queueResultsScrollRestore();
      setReplyThreadDrawerOpen(Number(postListAction.dataset.postIndex));
      state.replyPostIndex = null;
      state.replyDialogOpen = false;
      state.replyFocusPostIndex = null;
      render();
      return;
    }
  }

  if (postCardAction?.dataset?.postIndex) {
    const clickedInteractiveElement = event.composedPath().find((node) => {
      const tagName = node?.tagName;
      return tagName === "BUTTON"
        || tagName === "CALCITE-ACTION"
        || tagName === "CALCITE-DROPDOWN"
        || tagName === "CALCITE-DROPDOWN-ITEM"
        || tagName === "CALCITE-DROPDOWN-GROUP"
        || tagName === "CALCITE-BUTTON"
        || tagName === "CALCITE-CHIP"
        || tagName === "CALCITE-TEXT-AREA"
        || tagName === "CALCITE-INPUT"
        || tagName === "CALCITE-LIST"
        || tagName === "CALCITE-LIST-ITEM";
    });

    if (!clickedInteractiveElement) {
      queueResultsScrollRestore();
      setReplyThreadDrawerOpen(Number(postCardAction.dataset.postIndex));
      state.replyPostIndex = null;
      state.replyDialogOpen = false;
      state.replyFocusPostIndex = null;
      render();
      return;
    }
  }

  if (replyAction?.dataset?.replyAction === "cancel") {
    state.editReplyPostIndex = null;
    state.editReplyIndex = null;
    state.replyPostIndex = null;
    state.replyDialogOpen = false;
    state.replyFocusPostIndex = null;
    render();
    return;
  }

  if (replyAction?.dataset?.replyAction === "toggle-thread") {
    const postIndex = Number(replyAction.dataset.replyPostIndex);
    queueResultsScrollRestore();
    state.visibleReplyCounts[postIndex] = (state.visibleReplyCounts[postIndex] ?? LIST_REPLY_PREVIEW_LIMIT) + REPLY_PREVIEW_LIMIT;
    state.replyRestorePostIndex = null;
    render();
    return;
  }

  if (replyAction?.dataset?.replyAction === "open-thread-drawer") {
    const postIndex = Number(replyAction.dataset.replyPostIndex);
    queueResultsScrollRestore();
    setReplyThreadDrawerOpen(postIndex);
    render();
    return;
  }

  const replyMenuAction = event.composedPath().find((node) => node?.dataset?.replyMenuAction && node?.dataset?.replyPostIndex && node?.dataset?.replyIndex);
  if (replyMenuAction?.dataset?.replyMenuAction) {
    const postIndex = Number(replyMenuAction.dataset.replyPostIndex);
    const replyIndex = Number(replyMenuAction.dataset.replyIndex);

    if (replyMenuAction.dataset.replyMenuAction === "edit") {
      state.replyPostIndex = null;
      state.replyDialogOpen = false;
      state.editReplyPostIndex = postIndex;
      state.editReplyIndex = replyIndex;
      render();
      return;
    }

    if (replyMenuAction.dataset.replyMenuAction === "delete") {
      if (deleteReply(postIndex, replyIndex)) {
        render();
      }
      return;
    }

    if (replyMenuAction.dataset.replyMenuAction === "hide" || replyMenuAction.dataset.replyMenuAction === "show") {
      if (toggleReplyHidden(postIndex, replyIndex)) {
        render();
      }
      return;
    }
  }

  if (replyAction?.dataset?.replyAction === "save-edit") {
    const postIndex = Number(replyAction.dataset.replyPostIndex);
    const replyIndex = Number(replyAction.dataset.replyIndex);
    const replyEditor = event.composedPath().find((node) => node?.dataset?.replyEditor === "true");
    if (replyEditor && saveEditedReply(postIndex, replyIndex, replyEditor)) {
      render();
    }
    return;
  }

  const postMenuAction = event.composedPath().find((node) => node?.dataset?.postMenuAction && node?.dataset?.postIndex);
  if (postMenuAction?.dataset?.postMenuAction && postMenuAction?.dataset?.postIndex) {
    const postIndex = Number(postMenuAction.dataset.postIndex);

    if (postMenuAction.dataset.postMenuAction === "view-thread") {
      queueResultsScrollRestore();
      setReplyThreadDrawerOpen(postIndex);
      state.replyPostIndex = null;
      state.replyDialogOpen = false;
      state.replyFocusPostIndex = null;
      render();
      return;
    }

    if (postMenuAction.dataset.postMenuAction === "delete") {
      if (deletePost(postIndex)) {
        render();
      }
      return;
    }

    if (postMenuAction.dataset.postMenuAction === "edit") {
      state.editPostIndex = postIndex;
      state.replyPostIndex = null;
      state.replyDialogOpen = false;
      render();
      return;
    }

    if (postMenuAction.dataset.postMenuAction === "hide" || postMenuAction.dataset.postMenuAction === "show") {
      if (togglePostHidden(postIndex)) {
        render();
      }
      return;
    }
  }

  const postEditAction = event.composedPath().find((node) => node?.dataset?.postEditAction && node?.dataset?.editPostIndex);
  if (postEditAction?.dataset?.postEditAction && postEditAction?.dataset?.editPostIndex) {
    const postIndex = Number(postEditAction.dataset.editPostIndex);
    if (postEditAction.dataset.postEditAction === "cancel") {
      state.editPostIndex = null;
      render();
      return;
    }

    if (postEditAction.dataset.postEditAction === "submit") {
      const postEditor = event.composedPath().find((node) => node?.dataset?.postEditor === "true");
      if (postEditor && saveEditedPost(postIndex, postEditor)) {
        render();
      }
      return;
    }
  }

  const locationAction = event.composedPath().find((node) => node?.dataset?.locationAction);
  if (locationAction?.dataset?.locationAction === "toggle-list") {
    const postIndex = Number(locationAction.dataset.locationPostIndex);
    queueResultsScrollRestore();
    queueLocationListAnimation(postIndex);
    state.expandedLocationPosts = state.expandedLocationPosts.includes(postIndex)
      ? state.expandedLocationPosts.filter((index) => index !== postIndex)
      : [...state.expandedLocationPosts, postIndex];
    render();
    return;
  }

  if (replyAction?.dataset?.replyAction === "submit") {
    const postIndex = Number(replyAction.dataset.replyPostIndex);
    const replyEditor = event.composedPath().find((node) => node?.dataset?.replyEditor === "true");
    if (replyEditor && createReply(postIndex, replyEditor)) {
      render();
    }
    return;
  }

  if (composeInputTrigger && !state.composeExpanded) {
    state.composeExpanded = true;
    state.composeFocusTarget = "body";
    if (state.activeLayout === "map" && syncMapRuntimePanelState()) {
      restoreComposeFocusTarget();
      return;
    }
    render();
    return;
  }

  const composeAction = event.composedPath().find((node) => node?.dataset?.composeAction);
  if (composeAction?.dataset?.composeAction === "open-body") {
    if (!state.composeExpanded) {
      state.composeExpanded = true;
      state.composeFocusTarget = "body";
      if (state.activeLayout === "map" && syncMapRuntimePanelState()) {
        restoreComposeFocusTarget();
        return;
      }
      render();
    }
    return;
  }

  if (composeAction?.dataset?.composeAction === "open-close") {
    if (!state.composeExpanded) {
      state.composeExpanded = true;
      state.composeFocusTarget = "close";
      if (state.activeLayout === "map" && syncMapRuntimePanelState()) {
        restoreComposeFocusTarget();
        return;
      }
      render();
    }
    return;
  }

  if (composeAction?.dataset?.composeAction === "close") {
    state.composeExpanded = false;
    state.channelPickerOpen = false;
    render();
    return;
  }

  if (composeAction?.dataset?.composeAction === "submit") {
    const postComposer = event.composedPath().find((node) => node?.classList?.contains("post-composer"));
    if (postComposer && createComposerPost(postComposer)) {
      render();
    }
    return;
  }

  if (composeAction?.dataset?.composeAction === "close-channel-picker") {
    state.channelPickerOpen = false;
    render();
    return;
  }

  const panelControl = event.composedPath().find((node) => node?.dataset?.actionType === "panel-control");
  if (panelControl?.dataset?.actionKey === "toggle-preview") {
    state.previewPanelOpen = !state.previewPanelOpen;
    render();
    return;
  }

  const closeFilterAction = event.composedPath().find((node) => node?.tagName === "CALCITE-ACTION" && node?.classList?.contains("close"));
  if (closeFilterAction) {
    const filterChip = event.composedPath().find((node) => node?.tagName === "CALCITE-CHIP" && node?.dataset?.filterId);
    if (filterChip?.dataset?.filterId) {
      removeAppliedFilter(filterChip.dataset.filterId);
      render();
      return;
    }
  }

  const clearFiltersAction = event.composedPath().find((node) => node?.dataset?.filterAction === "clear-all");
  if (clearFiltersAction) {
    clearFacetFilters();
    render();
    return;
  }

  const resultsViewItem = event.composedPath().find((node) => node?.dataset?.resultsView);
  if (resultsViewItem?.dataset?.resultsView) {
    state.resultsView = normalizeResultsView(resultsViewItem.dataset.resultsView);
    render();
    return;
  }

  const referenceItem = event.composedPath().find((node) => node?.dataset?.referenceItemValue);
  if (referenceItem?.dataset?.referenceItemValue) {
    const referenceValue = referenceItem.dataset.referenceItemValue;
    state.referenceItemFilters = state.referenceItemFilters.includes(referenceValue)
      ? state.referenceItemFilters.filter((value) => value !== referenceValue)
      : [...state.referenceItemFilters, referenceValue];
    state.pageStart = 1;
    render();
    return;
  }

  const channelItem = event.composedPath().find((node) => node?.dataset?.channelValue);
  if (channelItem?.dataset?.channelValue) {
    const channelValue = channelItem.dataset.channelValue;
    state.channelFilters = state.channelFilters.includes(channelValue)
      ? state.channelFilters.filter((value) => value !== channelValue)
      : [...state.channelFilters, channelValue];
    state.pageStart = 1;
    render();
    return;
  }

  const stateItem = event.composedPath().find((node) => node?.dataset?.stateValue);
  if (stateItem?.dataset?.stateValue) {
    const stateValue = stateItem.dataset.stateValue;
    state.stateFilters = state.stateFilters.includes(stateValue)
      ? state.stateFilters.filter((value) => value !== stateValue)
      : [...state.stateFilters, stateValue];
    state.pageStart = 1;
    render();
    return;
  }

  const dateFilterItem = event.composedPath().find((node) => node?.dataset?.dateFilterKind && node?.dataset?.dateFilterValue);
  if (dateFilterItem?.dataset?.dateFilterKind && dateFilterItem?.dataset?.dateFilterValue) {
    const filterKey = dateFilterItem.dataset.dateFilterKind === "created" ? "dateCreatedFilter" : "dateModifiedFilter";
    const selectedValue = dateFilterItem.dataset.dateFilterValue;
    state[filterKey] = state[filterKey] === selectedValue ? null : selectedValue;
    state.pageStart = 1;
    render();
    return;
  }

  const action = event.composedPath().find((node) => node?.dataset?.actionKey);
  if (action) {
    handleActionSelection(action.dataset.actionType, action.dataset.actionKey);
    return;
  }

  const dropdownItem = event.composedPath().find((node) => node?.tagName === "CALCITE-DROPDOWN-ITEM" && node.dataset?.actionKey);
  if (dropdownItem) {
    handleActionSelection(dropdownItem.dataset.actionType, dropdownItem.dataset.actionKey);
  }
});

previewShell.addEventListener("calciteSelectChange", (event) => {
  const composeChannelSelect = event.target?.dataset?.composeChannelSelect === "true"
    ? event.target
    : event.composedPath().find((node) => node?.dataset?.composeChannelSelect === "true");

  if (!composeChannelSelect) {
    return;
  }

  if (composeChannelSelect.value === VIEW_ALL_CHANNELS_VALUE) {
    state.channelPickerOpen = true;
    composeChannelSelect.value = getComposerChannelValue();
    render();
    return;
  }

  state.composeChannel = composeChannelSelect.value || getComposerChannelValue();
});

previewShell.addEventListener("calcitePaginationChange", (event) => {
  const pagination = event.target;
  if (pagination?.tagName !== "CALCITE-PAGINATION") {
    return;
  }

  state.pageStart = pagination.startItem || 1;
  render();
});

previewShell.addEventListener("calcitePanelClose", (event) => {
  const resultsPanel = event.target.closest?.("#panel-results") || event.target;
  if (resultsPanel?.id === "panel-results") {
    state.activeUtility = null;
    state.previewPanelOpen = false;
    if (state.activeLayout === "map" && syncMapRuntimePanelState()) {
      return;
    }
    render();
    return;
  }

  const filtersPanel = event.target.closest?.("#panel-filters") || event.target;
  if (filtersPanel?.id === "panel-filters") {
    handleActionSelection("utility", "filters");
    return;
  }

  const replyPanel = event.target.closest?.("#panel-reply-thread") || event.target;
  if (replyPanel?.id === "panel-reply-thread") {
    setReplyThreadDrawerOpen(null);
    render();
  }
});

previewShell.addEventListener("calciteDialogClose", (event) => {
  const referenceDialog = event.target?.closest?.('[data-reference-dialog="true"]') || event.target;
  if (referenceDialog?.dataset?.referenceDialog === "true") {
    state.referenceDialogOpen = false;
    state.referenceDialogPostIndex = null;
    render();
    return;
  }

  const dialog = event.target?.closest?.('[data-post-edit-dialog="true"]') || event.target;
  if (dialog?.dataset?.postEditDialog === "true") {
    state.editPostIndex = null;
    render();
  }
});

function syncPostEditorFromEvent(event) {
  const postEditField = event.target?.dataset?.postEditField
    ? event.target
    : event.composedPath().find((node) => node?.dataset?.postEditField);

  if (postEditField) {
    const postEditor = event.target?.closest?.('[data-post-editor="true"]')
      || event.composedPath().find((node) => node?.dataset?.postEditor === "true");
    updatePostEditorSubmitState(postEditor);
  }

  const composeField = event.target?.dataset?.composeField
    ? event.target
    : event.composedPath().find((node) => node?.dataset?.composeField);
  if (composeField) {
    const postComposer = event.target?.closest?.('.post-composer')
      || event.composedPath().find((node) => node?.classList?.contains('post-composer'));
    updateComposerSubmitState(postComposer);
  }

  const replyField = event.target?.dataset?.replyField
    ? event.target
    : event.composedPath().find((node) => node?.dataset?.replyField);
  if (replyField) {
    const replyEditor = event.target?.closest?.('[data-reply-editor="true"]')
      || event.composedPath().find((node) => node?.dataset?.replyEditor === "true");
    updateReplySubmitState(replyEditor);
  }
}

previewShell.addEventListener("input", syncPostEditorFromEvent);
previewShell.addEventListener("change", syncPostEditorFromEvent);
previewShell.addEventListener("calciteInputInput", syncPostEditorFromEvent);
previewShell.addEventListener("calciteInputTextAreaInput", syncPostEditorFromEvent);

previewShell.addEventListener("focusin", (event) => {
  const composeTrigger = event.composedPath().find((node) => node?.dataset?.composeTrigger === "input");
  if (composeTrigger && !state.composeExpanded) {
    state.composeExpanded = true;
    state.composeFocusTarget = "body";
    if (state.activeLayout === "map" && syncMapRuntimePanelState()) {
      restoreComposeFocusTarget();
      return;
    }
    render();
  }
});

window.addEventListener("resize", () => {
  if (state.width === "auto") {
    render();
  }
});

configureArcGISMaps().finally(() => {
  render();
});
