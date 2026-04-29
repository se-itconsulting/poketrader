const marketRows = {
  pokemon: [
    {
      name: "Charizard ex",
      meta: "Obsidian Flames · Pokémon TCG API",
      price: "€ 74,80",
      change: "+8,4%",
      image: "https://images.pokemontcg.io/sv3/125_hires.png",
    },
    {
      name: "Pikachu Illustration Rare",
      meta: "Scarlet & Violet Promo · Bild aus Kartendaten",
      price: "€ 31,20",
      change: "+3,1%",
      image: "https://images.pokemontcg.io/svp/88_hires.png",
    },
    {
      name: "Umbreon ex",
      meta: "Terastal Festival · Japanischer Markt",
      price: "€ 118,00",
      change: "+11,9%",
      image: "https://images.pokemontcg.io/sv8pt5/60_hires.png",
    },
  ],
  ebay: [
    {
      name: "PSA 10 Charizard VMAX",
      meta: "eBay Sold Comps · Graded",
      price: "€ 286,00",
      change: "+5,7%",
      image: "https://images.pokemontcg.io/swsh3/20_hires.png",
    },
    {
      name: "Lugia V Alt Art",
      meta: "Aktive Listings · Near Mint",
      price: "€ 182,40",
      change: "-2,3%",
      image: "https://images.pokemontcg.io/swsh12/186_hires.png",
    },
    {
      name: "151 Booster Bundle",
      meta: "Buy It Now · Sealed",
      price: "€ 52,90",
      change: "+1,2%",
      image: "https://images.unsplash.com/photo-1601987077677-5346c0c57d3f?auto=format&fit=crop&w=420&q=80",
    },
  ],
  cardmarket: [
    {
      name: "N's Zekrom",
      meta: "Cardmarket Trend · Near Mint",
      price: "€ 3,38",
      change: "+4,0%",
      image: "https://images.pokemontcg.io/bw1/114_hires.png",
    },
    {
      name: "Ascended Heroes ETB",
      meta: "Cardmarket · Sealed Produkt",
      price: "€ 51,50",
      change: "+6,2%",
      image: "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?auto=format&fit=crop&w=420&q=80",
    },
    {
      name: "Gengar ex",
      meta: "Trendpreis · Raw",
      price: "€ 42,45",
      change: "-1,8%",
      image: "https://images.pokemontcg.io/fireredleafgreen/108_hires.png",
    },
  ],
  sealed: [
    {
      name: "MEGA Dream ex Booster Box",
      meta: "Japan sealed · Preismonitor",
      price: "€ 44,99",
      change: "+9,5%",
      image: "https://images.unsplash.com/photo-1606503153255-59d8b8b82176?auto=format&fit=crop&w=420&q=80",
    },
    {
      name: "Elite Trainer Box",
      meta: "EU Market · Sealed",
      price: "€ 51,50",
      change: "+6,2%",
      image: "https://images.unsplash.com/photo-1618336753974-aae8e04506aa?auto=format&fit=crop&w=420&q=80",
    },
    {
      name: "Booster Bundle Case",
      meta: "Inventory · Case Price",
      price: "€ 418,00",
      change: "+2,7%",
      image: "https://images.unsplash.com/photo-1606167668584-78701c57f13d?auto=format&fit=crop&w=420&q=80",
    },
  ],
};

const catalogSets = [
  {
    id: "sv3pt5",
    language: "english",
    name: "Scarlet & Violet 151",
    code: "SV3.5",
    released: "2023",
    totalCards: 207,
    focus: "English master set, nostalgia demand, strong sealed liquidity",
    cards: [
      {
        name: "Charizard ex",
        number: "199/165",
        rarity: "Special Illustration Rare",
        raw: "€ 118",
        psa10: "€ 520",
        image: "https://images.pokemontcg.io/sv3pt5/199_hires.png",
      },
      {
        name: "Blastoise ex",
        number: "200/165",
        rarity: "Special Illustration Rare",
        raw: "€ 52",
        psa10: "€ 238",
        image: "https://images.pokemontcg.io/sv3pt5/200_hires.png",
      },
      {
        name: "Venusaur ex",
        number: "198/165",
        rarity: "Special Illustration Rare",
        raw: "€ 43",
        psa10: "€ 214",
        image: "https://images.pokemontcg.io/sv3pt5/198_hires.png",
      },
      {
        name: "Pikachu",
        number: "173/165",
        rarity: "Illustration Rare",
        raw: "€ 29",
        psa10: "€ 156",
        image: "https://images.pokemontcg.io/sv3pt5/173_hires.png",
      },
    ],
    products: [
      {
        name: "151 Ultra-Premium Collection",
        type: "Sealed box",
        market: "€ 146",
        image: "https://images.unsplash.com/photo-1601987077677-5346c0c57d3f?auto=format&fit=crop&w=500&q=80",
      },
      {
        name: "151 Booster Bundle",
        type: "Sealed booster bundle",
        market: "€ 53",
        image: "https://images.unsplash.com/photo-1618336753974-aae8e04506aa?auto=format&fit=crop&w=500&q=80",
      },
      {
        name: "151 Elite Trainer Box",
        type: "ETB",
        market: "€ 64",
        image: "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?auto=format&fit=crop&w=500&q=80",
      },
    ],
  },
  {
    id: "swsh7",
    language: "english",
    name: "Evolving Skies",
    code: "SWSH7",
    released: "2021",
    totalCards: 237,
    focus: "English chase set with heavy Eeveelution demand",
    cards: [
      {
        name: "Umbreon VMAX",
        number: "215/203",
        rarity: "Alternate Art Secret",
        raw: "€ 812",
        psa10: "€ 2.250",
        image: "https://images.pokemontcg.io/swsh7/215_hires.png",
      },
      {
        name: "Rayquaza VMAX",
        number: "218/203",
        rarity: "Alternate Art Secret",
        raw: "€ 392",
        psa10: "€ 1.080",
        image: "https://images.pokemontcg.io/swsh7/218_hires.png",
      },
      {
        name: "Sylveon VMAX",
        number: "212/203",
        rarity: "Alternate Art Secret",
        raw: "€ 164",
        psa10: "€ 468",
        image: "https://images.pokemontcg.io/swsh7/212_hires.png",
      },
      {
        name: "Leafeon VMAX",
        number: "205/203",
        rarity: "Alternate Art Secret",
        raw: "€ 198",
        psa10: "€ 610",
        image: "https://images.pokemontcg.io/swsh7/205_hires.png",
      },
    ],
    products: [
      {
        name: "Evolving Skies Booster Box",
        type: "36 pack booster box",
        market: "€ 820",
        image: "https://images.unsplash.com/photo-1606503153255-59d8b8b82176?auto=format&fit=crop&w=500&q=80",
      },
      {
        name: "Elite Trainer Box Set",
        type: "ETB pair",
        market: "€ 245",
        image: "https://images.unsplash.com/photo-1606167668584-78701c57f13d?auto=format&fit=crop&w=500&q=80",
      },
    ],
  },
  {
    id: "swsh12",
    language: "english",
    name: "Silver Tempest",
    code: "SWSH12",
    released: "2022",
    totalCards: 245,
    focus: "English Lugia chase, solid liquidity for sealed boxes",
    cards: [
      {
        name: "Lugia V",
        number: "186/195",
        rarity: "Alternate Full Art",
        raw: "€ 182",
        psa10: "€ 326",
        image: "https://images.pokemontcg.io/swsh12/186_hires.png",
      },
      {
        name: "Regidrago V",
        number: "184/195",
        rarity: "Alternate Full Art",
        raw: "€ 24",
        psa10: "€ 118",
        image: "https://images.pokemontcg.io/swsh12/184_hires.png",
      },
      {
        name: "Unown V",
        number: "177/195",
        rarity: "Alternate Full Art",
        raw: "€ 28",
        psa10: "€ 122",
        image: "https://images.pokemontcg.io/swsh12/177_hires.png",
      },
    ],
    products: [
      {
        name: "Silver Tempest Booster Box",
        type: "36 pack booster box",
        market: "€ 178",
        image: "https://images.unsplash.com/photo-1618336753974-aae8e04506aa?auto=format&fit=crop&w=500&q=80",
      },
      {
        name: "Build & Battle Stadium",
        type: "Sealed product",
        market: "€ 58",
        image: "https://images.unsplash.com/photo-1601987077677-5346c0c57d3f?auto=format&fit=crop&w=500&q=80",
      },
    ],
  },
  {
    id: "sv2a",
    language: "japanese",
    name: "Pokemon Card 151",
    code: "SV2a",
    released: "2023",
    totalCards: 210,
    focus: "Japanese 151 master balls, high collector demand",
    cards: [
      {
        name: "Charizard ex",
        number: "201/165",
        rarity: "SAR",
        raw: "€ 96",
        psa10: "€ 430",
        image: "https://images.pokemontcg.io/sv3pt5/199_hires.png",
      },
      {
        name: "Pikachu",
        number: "025/165",
        rarity: "Master Ball Reverse",
        raw: "€ 145",
        psa10: "€ 540",
        image: "https://images.pokemontcg.io/sv3pt5/25_hires.png",
      },
      {
        name: "Erika's Invitation",
        number: "206/165",
        rarity: "SAR",
        raw: "€ 88",
        psa10: "€ 360",
        image: "https://images.pokemontcg.io/sv3pt5/203_hires.png",
      },
    ],
    products: [
      {
        name: "Pokemon Card 151 Booster Box",
        type: "Japanese sealed box",
        market: "€ 128",
        image: "https://images.unsplash.com/photo-1606503153255-59d8b8b82176?auto=format&fit=crop&w=500&q=80",
      },
      {
        name: "151 File Set",
        type: "Japanese sealed accessory product",
        market: "€ 42",
        image: "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?auto=format&fit=crop&w=500&q=80",
      },
    ],
  },
  {
    id: "sv8a",
    language: "japanese",
    name: "Terastal Festival ex",
    code: "SV8a",
    released: "2024",
    totalCards: 237,
    focus: "Japanese high-class pack with Eeveelution chase cards",
    cards: [
      {
        name: "Umbreon ex",
        number: "217/187",
        rarity: "SAR",
        raw: "€ 118",
        psa10: "€ 520",
        image: "https://images.pokemontcg.io/sv8pt5/60_hires.png",
      },
      {
        name: "Sylveon ex",
        number: "212/187",
        rarity: "SAR",
        raw: "€ 84",
        psa10: "€ 318",
        image: "https://images.pokemontcg.io/sv8pt5/156_hires.png",
      },
      {
        name: "Leafeon ex",
        number: "200/187",
        rarity: "SAR",
        raw: "€ 72",
        psa10: "€ 280",
        image: "https://images.pokemontcg.io/sv8pt5/144_hires.png",
      },
    ],
    products: [
      {
        name: "Terastal Festival ex Booster Box",
        type: "Japanese high-class sealed box",
        market: "€ 89",
        image: "https://images.unsplash.com/photo-1606167668584-78701c57f13d?auto=format&fit=crop&w=500&q=80",
      },
      {
        name: "Sealed Case",
        type: "20 box case",
        market: "€ 1.720",
        image: "https://images.unsplash.com/photo-1601987077677-5346c0c57d3f?auto=format&fit=crop&w=500&q=80",
      },
    ],
  },
];

let activeLanguage = "english";
let activeSetId = "sv3pt5";
let activeCatalogView = "cards";
let activeSearchType = "all";

const collection = [
  ["Charizard ex", "Obsidian Flames · Raw NM", "€ 74", "https://images.pokemontcg.io/sv3/125_hires.png"],
  ["Umbreon VMAX", "Evolving Skies · PSA 9", "€ 812", "https://images.pokemontcg.io/swsh7/215_hires.png"],
  ["Pikachu", "Pokemon 151 · Raw Mint", "€ 29", "https://images.pokemontcg.io/sv3pt5/25_hires.png"],
  ["Lugia V", "Silver Tempest · PSA 10", "€ 326", "https://images.pokemontcg.io/swsh12/186_hires.png"],
];

const grades = [
  ["Raw", "€ 180"],
  ["PSA 7", "€ 214"],
  ["PSA 7.5", "€ 238"],
  ["PSA 8", "€ 276"],
  ["PSA 8.5", "€ 319"],
  ["PSA 9", "€ 412"],
  ["PSA 9.5", "€ 548"],
  ["PSA 10", "€ 790"],
];

const ticker = document.querySelector("#priceTicker");
const cardList = document.querySelector("#cardList");
const gradeMatrix = document.querySelector("#gradeMatrix");
const scanInput = document.querySelector("#cardPhoto");
const scanPreview = document.querySelector("#scanPreview");
const captureZone = document.querySelector(".capture-zone");
const captureHint = document.querySelector("#captureHint");
const recognitionTitle = document.querySelector("#recognitionTitle");
const recognitionText = document.querySelector("#recognitionText");
const chatForm = document.querySelector("#chatForm");
const chatMessage = document.querySelector("#chatMessage");
const chatLog = document.querySelector("#chatLog");
const setList = document.querySelector("#setList");
const setHero = document.querySelector("#setHero");
const catalogResults = document.querySelector("#catalogResults");
const setSearch = document.querySelector("#setSearch");
const globalSearch = document.querySelector("#globalSearch");
const searchResults = document.querySelector("#searchResults");

function getSearchIndex() {
  const setResults = catalogSets.map((set) => ({
    type: "set",
    title: set.name,
    subtitle: `${set.code} · ${set.language === "english" ? "English" : "Japanese"} · ${set.totalCards} Karten`,
    price: set.released,
    source: "Set Database",
    image: set.cards[0]?.image || set.products[0]?.image,
    keywords: `${set.name} ${set.code} ${set.language} ${set.focus}`,
    set,
  }));

  const cardResults = catalogSets.flatMap((set) =>
    set.cards.map((card) => ({
      type: "card",
      title: card.name,
      subtitle: `${set.name} · ${card.number} · ${card.rarity}`,
      price: card.raw,
      source: set.language === "english" ? "English cards" : "Japanese cards",
      image: card.image,
      keywords: `${card.name} ${card.number} ${card.rarity} ${set.name} ${set.code} ${set.language}`,
      card,
      set,
    })),
  );

  const productResults = catalogSets.flatMap((set) =>
    set.products.map((product) => ({
      type: "product",
      title: product.name,
      subtitle: `${set.name} · ${product.type}`,
      price: product.market,
      source: "Sealed products",
      image: product.image,
      keywords: `${product.name} ${product.type} ${set.name} ${set.code} ${set.language}`,
      product,
      set,
    })),
  );

  return [...cardResults, ...productResults, ...setResults];
}

function renderSearchResults() {
  const query = globalSearch.value.trim().toLowerCase();
  const results = getSearchIndex()
    .filter((item) => activeSearchType === "all" || item.type === activeSearchType)
    .filter((item) => !query || item.keywords.toLowerCase().includes(query))
    .slice(0, 12);

  if (!results.length) {
    searchResults.innerHTML = `<div class="empty-state">Keine Treffer gefunden.</div>`;
    return;
  }

  searchResults.innerHTML = results
    .map(
      (item) => `
        <button class="search-result" data-result-type="${item.type}" data-result-title="${item.title}">
          <img src="${item.image}" alt="${item.title}" loading="lazy" />
          <span class="result-copy">
            <small>${item.source}</small>
            <strong>${item.title}</strong>
            <em>${item.subtitle}</em>
          </span>
          <span class="result-price">${item.price}</span>
        </button>
      `,
    )
    .join("");
}

function getVisibleSets() {
  const query = setSearch.value.trim().toLowerCase();
  return catalogSets.filter((set) => {
    const matchesLanguage = set.language === activeLanguage;
    const matchesQuery = !query || `${set.name} ${set.code}`.toLowerCase().includes(query);
    return matchesLanguage && matchesQuery;
  });
}

function getActiveSet() {
  return catalogSets.find((set) => set.id === activeSetId) || getVisibleSets()[0] || catalogSets[0];
}

function renderSetList() {
  const visibleSets = getVisibleSets();
  if (!visibleSets.some((set) => set.id === activeSetId) && visibleSets[0]) {
    activeSetId = visibleSets[0].id;
  }

  setList.innerHTML = visibleSets
    .map(
      (set) => `
        <button class="set-option ${set.id === activeSetId ? "active" : ""}" data-set-id="${set.id}">
          <span>
            <strong>${set.name}</strong>
            <small>${set.code} · ${set.totalCards} cards · ${set.released}</small>
          </span>
          <span>${set.language === "english" ? "EN" : "JP"}</span>
        </button>
      `,
    )
    .join("");

  if (!visibleSets.length) {
    setList.innerHTML = `<div class="empty-state">Kein Set gefunden.</div>`;
  }
}

function renderSetHero() {
  const set = getActiveSet();
  setHero.innerHTML = `
    <div>
      <p class="eyebrow">${set.language === "english" ? "English priority" : "Japanese catalog"}</p>
      <h3>${set.name}</h3>
      <p>${set.focus}</p>
    </div>
    <div class="set-stats">
      <span>${set.code}</span>
      <strong>${set.totalCards}</strong>
      <small>Karten</small>
    </div>
  `;
}

function renderCatalogResults() {
  const set = getActiveSet();
  const items = set[activeCatalogView];
  const isCards = activeCatalogView === "cards";

  catalogResults.className = isCards ? "catalog-results card-catalog" : "catalog-results product-catalog";
  catalogResults.innerHTML = items
    .map((item) => {
      if (isCards) {
        return `
          <button class="catalog-card" data-card-name="${item.name}">
            <img src="${item.image}" alt="${item.name}" loading="lazy" />
            <span class="card-number">${item.number}</span>
            <strong>${item.name}</strong>
            <small>${item.rarity}</small>
            <div class="value-row">
              <span>Raw ${item.raw}</span>
              <span>PSA 10 ${item.psa10}</span>
            </div>
          </button>
        `;
      }

      return `
        <button class="product-card" data-product-name="${item.name}">
          <img src="${item.image}" alt="${item.name}" loading="lazy" />
          <span>
            <strong>${item.name}</strong>
            <small>${item.type}</small>
          </span>
          <em>${item.market}</em>
        </button>
      `;
    })
    .join("");
}

function renderCatalog() {
  renderSetList();
  renderSetHero();
  renderCatalogResults();
}

function renderTicker(source = "pokemon") {
  ticker.innerHTML = marketRows[source]
    .map(({ name, meta, price, change, image }) => {
      const trendClass = change.startsWith("-") ? "price-down" : "price-up";
      return `
        <div class="ticker-row">
          <img class="market-image" src="${image}" alt="${name}" loading="lazy" />
          <div class="market-copy">
            <div class="ticker-top">
              <strong>${name}</strong>
              <strong>${price}</strong>
            </div>
            <div class="ticker-top ticker-meta">
              <span>${meta}</span>
              <span class="${trendClass}">${change}</span>
            </div>
          </div>
        </div>
      `;
    })
    .join("");
}

function renderCollection() {
  cardList.innerHTML = collection
    .map(
      ([name, meta, value, image]) => `
        <div class="collection-card">
          <img class="card-thumb" src="${image}" alt="${name}" loading="lazy" />
          <div>
            <strong>${name}</strong>
            <div class="card-meta">${meta}</div>
          </div>
          <div class="card-value">${value}</div>
        </div>
      `,
    )
    .join("");
}

function renderGrades() {
  gradeMatrix.innerHTML = grades
    .map(
      ([grade, value]) => `
        <div class="grade-row">
          <span>${grade}</span>
          <strong>${value}</strong>
        </div>
      `,
    )
    .join("");
}

document.querySelectorAll(".source").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".source").forEach((source) => source.classList.remove("active"));
    button.classList.add("active");
    renderTicker(button.dataset.source);
  });
});

document.querySelectorAll(".segment").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".segment").forEach((segment) => segment.classList.remove("active"));
    button.classList.add("active");
    activeLanguage = button.dataset.language;
    renderCatalog();
  });
});

document.querySelectorAll(".detail-tab").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".detail-tab").forEach((tab) => tab.classList.remove("active"));
    button.classList.add("active");
    activeCatalogView = button.dataset.view;
    renderCatalogResults();
  });
});

document.querySelectorAll(".search-filter").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".search-filter").forEach((filter) => filter.classList.remove("active"));
    button.classList.add("active");
    activeSearchType = button.dataset.searchType;
    renderSearchResults();
  });
});

globalSearch.addEventListener("input", renderSearchResults);

searchResults.addEventListener("click", (event) => {
  const button = event.target.closest("[data-result-type]");
  if (!button) return;

  const title = button.dataset.resultTitle;
  const result = getSearchIndex().find((item) => item.type === button.dataset.resultType && item.title === title);
  if (!result) return;

  if (result.type === "card") {
    collection.unshift([result.card.name, `${result.set.name} · ${result.card.number}`, result.card.raw, result.card.image]);
    renderCollection();
  }

  if (result.type === "product") {
    marketRows.sealed.unshift({
      name: result.product.name,
      meta: `${result.set.name} · ${result.product.type}`,
      price: result.product.market,
      change: "+0,0%",
      image: result.product.image,
    });
    document.querySelectorAll(".source").forEach((source) => source.classList.remove("active"));
    document.querySelector('[data-source="sealed"]').classList.add("active");
    renderTicker("sealed");
  }

  if (result.type === "set") {
    activeLanguage = result.set.language;
    activeSetId = result.set.id;
    document.querySelectorAll(".segment").forEach((segment) => {
      segment.classList.toggle("active", segment.dataset.language === activeLanguage);
    });
    renderCatalog();
  }
});

setSearch.addEventListener("input", renderCatalog);

setList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-set-id]");
  if (!button) return;

  activeSetId = button.dataset.setId;
  renderCatalog();
});

catalogResults.addEventListener("click", (event) => {
  const cardButton = event.target.closest("[data-card-name]");
  const productButton = event.target.closest("[data-product-name]");
  const set = getActiveSet();

  if (cardButton) {
    const card = set.cards.find((item) => item.name === cardButton.dataset.cardName);
    if (!card) return;

    collection.unshift([card.name, `${set.name} · ${card.number}`, card.raw, card.image]);
    renderCollection();
  }

  if (productButton) {
    const product = set.products.find((item) => item.name === productButton.dataset.productName);
    if (!product) return;

    marketRows.sealed.unshift({
      name: product.name,
      meta: `${set.name} · ${product.type}`,
      price: product.market,
      change: "+0,0%",
      image: product.image,
    });
    document.querySelectorAll(".source").forEach((source) => source.classList.remove("active"));
    document.querySelector('[data-source="sealed"]').classList.add("active");
    renderTicker("sealed");
  }
});

scanInput.addEventListener("change", () => {
  const file = scanInput.files?.[0];
  if (!file) return;

  scanPreview.src = URL.createObjectURL(file);
  captureZone.classList.add("has-image");
  captureHint.textContent = "Foto ersetzen";
  recognitionTitle.textContent = "Scan empfangen";
  recognitionText.textContent = "Nächster Schritt: Bild an Vision-Erkennung senden und gegen Set-/Kartendaten matchen.";
});

document.querySelector("#clearScan").addEventListener("click", () => {
  scanInput.value = "";
  scanPreview.removeAttribute("src");
  captureZone.classList.remove("has-image");
  captureHint.textContent = "Foto aufnehmen";
  recognitionTitle.textContent = "Bereit für Kartenerkennung";
  recognitionText.textContent = "OCR, Set-Code und Nummer werden später über Vision/TCG-Daten abgeglichen.";
});

document.querySelector("#addCard").addEventListener("click", () => {
  collection.unshift(["Mew ex", "Gerade gescannt · Raw", "€ 18", "https://images.pokemontcg.io/sv3pt5/151_hires.png"]);
  renderCollection();
});

chatForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const text = chatMessage.value.trim();
  if (!text) return;

  chatLog.insertAdjacentHTML("beforeend", `<div class="user-message">${text}</div>`);
  chatMessage.value = "";

  const reply = `
    <div class="answer-card">
      <img src="https://images.pokemontcg.io/swsh12/186_hires.png" alt="Lugia V Alt Art" />
      <div>
        <strong>Lugia V Alt Art</strong>
        <p>Aktueller Beispielwert: Raw NM € 182,40 · PSA 10 ca. € 326. Ich würde eBay-Sold-Comps, Cardmarket-Trend und deine Kaufbasis nebeneinander legen.</p>
      </div>
    </div>
  `;
  window.setTimeout(() => {
    chatLog.insertAdjacentHTML("beforeend", `<div class="bot-message">${reply}</div>`);
    chatLog.scrollTop = chatLog.scrollHeight;
  }, 260);
});

renderTicker();
renderCatalog();
renderSearchResults();
renderCollection();
renderGrades();
