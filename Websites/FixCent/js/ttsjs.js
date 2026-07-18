const ttsServices = [
  {
    id: 1,
    title: "Carpenter Work",
    subtitle: "Visit & Inspection Charges",
    price: "Rs. 500",
    rating: "4.5",
    image: "images/topImag-S/Carpenter Work 1.png",
  },
  {
    id: 2,
    title: "Ceiling Fan Repairing",
    subtitle: "Visit & Inspection Charges",
    price: "Rs. 500",
    rating: "4.4",
    image: "images/topImag-S/Ceiling Fan Repairing 2.png",
  },
  {
    id: 3,
    title: "Gas Geyser Repairing",
    subtitle: "Visit & Inspection Charges",
    price: "Rs. 800",
    rating: "4.6",
    image: "images/topImag-S/Gas Geyser Service 4.png",
  },
  {
    id: 4,
    title: "Grey Structure Paint",
    subtitle: "Visit & Inspection Charges",
    price: "Rs. 500",
    rating: "4.3",
    image: "images/topImag-S/Gray structure Paint 1.png",
  },
  {
    id: 5,
    title: "CCTV Installation",
    subtitle: "Visit & Inspection Charges",
    price: "Rs. 1000",
    rating: "4.6",
    image: "images/topImag-S/CCTV Installation 1.png",
  },
  {
    id: 6,
    title: "Roof Waterproofing",
    subtitle: "Visit & Inspection Charges",
    price: "Rs. 1000",
    rating: "4.5",
    image: "images/topImag-S/Roof Waterproofing 1.png",
  },
]

const ttsQuantities = {}

function renderTtsServices() {
  const grid = document.getElementById("ttsServiceGrid")
  grid.innerHTML = ""

  ttsServices.forEach(service => {
    if (!ttsQuantities[service.id]) ttsQuantities[service.id] = 0

    const col = document.createElement("div")
    col.className = "col-12 col-md-6 col-lg-4"

    const controls =
      ttsQuantities[service.id] > 0
        ? `
        <button class="tts-qty-btn" data-id="${service.id}" data-action="dec">−</button>
        <span class="tts-qty-number">${ttsQuantities[service.id]}</span>
        <button class="tts-qty-btn" data-id="${service.id}" data-action="inc">+</button>
      `
        : `<button class="tts-add-btn" data-id="${service.id}" data-action="add">Add +</button>`

    col.innerHTML = `
      <div class="tts-service-card">
        <img src="${service.image}" class="tts-service-image">
        <div class="tts-service-info">
          <h3 class="tts-service-title">${service.title}</h3>
          <p class="tts-service-subtitle">${service.subtitle}</p>
          <div class="tts-price-row">
            <span class="tts-current-price">${service.price}</span>
          </div>
          <span class="tts-rating-badge">${service.rating}</span>
        </div>
        <div class="tts-quantity-control">
          ${controls}
        </div>
      </div>
    `
    grid.appendChild(col)
  })

  attachTtsEvents()
}

function attachTtsEvents() {
  document.querySelectorAll(".tts-add-btn, .tts-qty-btn").forEach(btn => {
    btn.onclick = e => {
      e.stopPropagation()
      const id = Number(btn.dataset.id)
      const action = btn.dataset.action

      if (action === "add") ttsQuantities[id] = 1
      if (action === "inc") ttsQuantities[id]++
      if (action === "dec") ttsQuantities[id]--

      if (ttsQuantities[id] < 0) ttsQuantities[id] = 0
      renderTtsServices()
    }
  })
}

document.addEventListener("DOMContentLoaded", renderTtsServices)
