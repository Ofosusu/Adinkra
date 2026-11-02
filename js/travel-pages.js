async function loadAdinkraData(file) {
  const response = await fetch(`../data/${file}`);
  if (!response.ok) {
    throw new Error(`Could not load ${file}`);
  }
  return response.json();
}

function makeCard(title, description, extra = "") {
  return `
    <article class="info-card">
      <h3>${title}</h3>
      <p>${description}</p>
      ${extra}
    </article>
  `;
}

async function showDestinations() {
  const container = document.querySelector("#regions-container");
  if (!container) return;

  const regions = await loadAdinkraData("regions.json");

  container.innerHTML = regions.map(region => `
    <section class="region-section" id="${region.name.toLowerCase().replaceAll(" ", "-")}">
      <div class="region-heading">
        <p class="eyebrow">Regional capital: ${region.capital}</p>
        <h2>${region.name} Region</h2>
        <p>${region.description}</p>
      </div>
      <div class="card-grid">
        ${region.destinations.map(place => makeCard(
          place.name,
          `${place.place} · ${place.category}`,
          `<p class="status">${place.status}</p>`
        )).join("")}
      </div>
    </section>
  `).join("");
}

async function showFestivals() {
  const container = document.querySelector("#festivals-container");
  if (!container) return;

  const festivals = await loadAdinkraData("festivals.json");
  container.innerHTML = festivals.map(festival => makeCard(
    festival.name,
    festival.description,
    `<p><strong>Region:</strong> ${festival.region}</p>
     <p><strong>Community:</strong> ${festival.people}</p>
     <p><strong>When:</strong> ${festival.period}</p>`
  )).join("");
}

async function showTransport() {
  const container = document.querySelector("#transport-container");
  if (!container) return;

  const transport = await loadAdinkraData("transport.json");
  container.innerHTML = transport.map(item => makeCard(
    item.name,
    item.description,
    `<p><strong>Travel tip:</strong> ${item.tip}</p>`
  )).join("");
}

async function showWeather() {
  const container = document.querySelector("#weather-container");
  if (!container) return;

  const weather = await loadAdinkraData("weather.json");
  container.innerHTML = weather.map(item => makeCard(
    item.month,
    item.expect,
    `<p class="status">${item.season}</p>`
  )).join("");
}

async function showLanguages() {
  const container = document.querySelector("#languages-container");
  if (!container) return;

  const languages = await loadAdinkraData("languages.json");
  container.innerHTML = languages.map(item => makeCard(
    item.name,
    item.note
  )).join("");
}

async function showStays() {
  const container = document.querySelector("#stays-container");
  if (!container) return;

  const stays = await loadAdinkraData("stays.json");

  if (stays.length === 0) {
    container.innerHTML = `
      <div class="notice">
        <h2>Accommodation directory coming next</h2>
        <p>
          We are preparing a directory of hotels, guesthouses and lodges
          across Ghana. Listings will be added after checking their names,
          locations, photographs, contact details and booking links.
        </p>
        <p>
          We will not publish made-up hotel listings or unverified booking
          links. Check each property directly before making a reservation.
        </p>
      </div>
    `;
    return;
  }

  container.innerHTML = stays.map(stay => `
    <article class="stay-card">
      <img src="${stay.image}" alt="${stay.name}" loading="lazy">
      <div>
        <h2>${stay.name}</h2>
        <p>${stay.location}</p>
        <p>${stay.description}</p>
        <a href="${stay.booking_url}" target="_blank" rel="noopener">
          Check booking information
        </a>
      </div>
    </article>
  `).join("");
}

document.addEventListener("DOMContentLoaded", async () => {
  const year = document.querySelector("#year");
  if (year) year.textContent = new Date().getFullYear();

  try {
    await Promise.all([
      showDestinations(),
      showFestivals(),
      showTransport(),
      showWeather(),
      showLanguages(),
      showStays()
    ]);
  } catch (error) {
    console.error("Adinkra content error:", error);
  }
});
