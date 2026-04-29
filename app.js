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
renderCollection();
renderGrades();
