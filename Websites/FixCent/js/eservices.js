const services = [
  {
    id: 1,
    title: "Ceiling Fan Installation",
    subtitle: "Per Fan",
    originalPrice: "",
    price: "Rs.750",
    rating: "4.5",
    image: "images/electrition-s/celling fan installation 1.png",
    includes: [
      "Dismounting the indoor & outdoor one place.",
      "Mount indoor & outdoor unit to second place.",
      "No repair",
    ],
    excludes: ["Logistics of AC", "Any typo of material", "Ladder"],
  },
  {
    id: 2,
    title: "SMD Lights Installation",
    subtitle: "Per Fan",
    originalPrice: "Rs.1200",
    price: "Rs.1000",
    rating: "4.13",
    image: "images/electrition-s/SMD lights installation 1.png",
    includes: ["Complete AC inspection", "Filter cleaning", "Performance check"],
    excludes: ["Gas refilling", "Spare parts", "Major repairs"],
  },
  {
    id: 3,
    title: "LED TV or LCD",
    subtitle: "Per LED/LCD",
    originalPrice: "",
    price: "Rs.1200",
    rating: "4.6",
    image: "images/servicesi/Rectangle 114.png",
    includes: ["Standard installation", "Up to 10 feet piping", "Gas charging", "Basic testing"],
    excludes: ["Extra piping cost", "Electrical work", "Stand/bracket"],
  },
  {
    id: 4,
    title: "Switchboard Button ",
    subtitle: "- Vary After Inspection",
    originalPrice: "",
    price: "Rs.500",
    rating: "4.8",
    image: "images/electrition-s/Switchboard Button Replacement 1.png",
    includes: ["Fault diagnosis", "Basic inspection", "Repair consultation"],
    excludes: ["Actual repair cost", "Spare parts", "Gas refilling"],
  },
  {
    id: 5,
    title: "Pressure Motor",
    subtitle: "Visit & inspection charges",
    originalPrice: "Rs.1200",
    price: "Rs.1000",
    rating: "4.2",
    image: "images/electrition-s/Pressure Motor Installation 1.png",
    includes: ["Safe dismounting", "Indoor & outdoor unit", "Gas recovery"],
    excludes: ["Transportation", "Reinstallation", "Storage"],
  },
  {
    id: 6,
    title: "Breaker Replacement",
    subtitle: "Starting From single phase",
    originalPrice: "",
    price: "Rs.650",
    rating: "4.7",
    image: "images/electrition-s/Breaker Replacement 1.png",
    includes: ["Safe dismounting", "Indoor & outdoor unit", "Gas recovery"],
    excludes: ["Transportation", "Reinstallation", "Storage"],
  },
  {
    id: 7,
    title: "Distribution Box Installation",
    subtitle: "Starting From single phase",
    originalPrice: "",
    price: "Rs.2000",
    rating: "4.8",
    image: "images/electrition-s/Distribution Box Installation 1.png",
    includes: [
      "Dismounting the indoor & outdoor one place.",
      "Mount indoor & outdoor unit to second place.",
      "No repair",
    ],
    excludes: ["Logistics of AC", "Any typo of material", "Ladder"],
  },
  {
    id: 8,
    title: "Water Tank Automatic Switch Installation",
    subtitle: "Vary After Infection",
    originalPrice: "",
    price: "Rs.800",
    rating: "4.5",
    image: "images/electrition-s/Water Tank Automatic Switch Installation 1.png",
    includes: ["Complete AC inspection", "Filter cleaning", "Performance check"],
    excludes: ["Gas refilling", "Spare parts", "Major repairs"],
  },
  {
    id: 9,
    title: "Washing machine-R",
    subtitle: "Manual Visit & Inspection",
    originalPrice: "",
    price: "Rs.500",
    rating: "4.6",
    image: "images/electrition-s/Washing machine repairing 1.png",
    includes: ["Standard installation", "Up to 10 feet piping", "Gas charging", "Basic testing"],
    excludes: ["Extra piping cost", "Electrical work", "Stand/bracket"],
  },
  {
    id: 10,
    title: "Fan Dimmer Installation",
    subtitle: "Vary After Infection",
    originalPrice: "",
    price: "Rs.600",
    rating: "4.5",
    image: "images/electrition-s/Fan Dimmer Installation 1.png",
    includes: ["Fault diagnosis", "Basic inspection", "Repair consultation"],
    excludes: ["Actual repair cost", "Spare parts", "Gas refilling"],
  },
  {
    id: 11,
    title: "UPS Repairing",
    subtitle: "Visit and Inspection charges",
    originalPrice: "",
    price: "Rs.500",
    rating: "4.5",
    image: "images/electrition-s/UPS Repairing 1.png",
    includes: ["Safe dismounting", "Indoor & outdoor unit", "Gas recovery"],
    excludes: ["Transportation", "Reinstallation", "Storage"],
  },
  {
    id: 12,
    title: "UPS installation (Without Wiring)",
    subtitle: "Visit and Inspection charges",
    originalPrice: "",
    price: "Rs.1300",
    rating: "4.2",
    image: "images/electrition-s/UPS installation (Without Wiring) 1.png",
    includes: ["Safe dismounting", "Indoor & outdoor unit", "Gas recovery"],
    excludes: ["Transportation", "Reinstallation", "Storage"],
  },
  {
    id: 13,
    title: "Exhaust Fan Installation",
    subtitle: "Per Fan",
    originalPrice: "",
    price: "Rs.500",
    rating: "4.5",
    image: "images/electrition-s/Exhaust Fan Installation 1.png",
    includes: [
      "Dismounting the indoor & outdoor one place.",
      "Mount indoor & outdoor unit to second place.",
      "No repair",
    ],
    excludes: ["Logistics of AC", "Any typo of material", "Ladder"],
  },
  {
    id: 14,
    title: "New House Wiring",
    subtitle: "Visit and Inspection charges",
    originalPrice: "",
    price: "Rs.500",
    rating: "4.5",
    image: "images/electrition-s/New House Wiring 3.png",
    includes: ["Complete AC inspection", "Filter cleaning", "Performance check"],
    excludes: ["Gas refilling", "Spare parts", "Major repairs"],
  },
  {
    id: 15,
    title: "Water Pump Repairing",
    subtitle: "Visit and Inspection charges",
    originalPrice: "",
    price: "Rs.500",
    rating: "4.6",
    image: "images/electrition-s/Water Pump Repairing 1.png",
    includes: ["Standard installation", "Up to 10 feet piping", "Gas charging", "Basic testing"],
    excludes: ["Extra piping cost", "Electrical work", "Stand/bracket"],
  },
  {
    id: 16,
    title: "Electrical Wiring",
    subtitle: "Visit and Inspection charges",
    originalPrice: "",
    price: "Rs.500",
    rating: "4.8",
    image: "images/electrition-s/New House Wiring 3.png",
    includes: ["Fault diagnosis", "Basic inspection", "Repair consultation"],
    excludes: ["Actual repair cost", "Spare parts", "Gas refilling"],
  },
  {
    id: 17,
    title: "House Electric Work",
    subtitle: "Visit & inspection charges",
    originalPrice: "",
    price: "Rs.500",
    rating: "4.8",
    image: "images/electrition-s/New House Wiring 3.png",
    includes: ["Safe dismounting", "Indoor & outdoor unit", "Gas recovery"],
    excludes: ["Transportation", "Reinstallation", "Storage"],
  },
  {
    id: 18,
    title: "Door Pillar Lights",
    subtitle: "Visit & inspection charges",
    originalPrice: "",
    price: "Rs.600",
    rating: "4.7",
    image: "images/electrition-s/Door Pillar Lights 1.png",
    includes: ["Safe dismounting", "Indoor & outdoor unit", "Gas recovery"],
    excludes: ["Transportation", "Reinstallation", "Storage"],
  },
  {
    id: 19,
    title: "Fancy Light Installation (Without Wiring)",
    subtitle: "Per Light (Discount on more then 2)",
    originalPrice: "",
    price: "Rs.800",
    rating: "4.8",
    image: "images/electrition-s/Fancy Light Installation (Without Wiring) 1.png",
    includes: [
      "Dismounting the indoor & outdoor one place.",
      "Mount indoor & outdoor unit to second place.",
      "No repair",
    ],
    excludes: ["Logistics of AC", "Any typo of material", "Ladder"],
  },
  {
    id: 20,
    title: "UPS Wiring",
    subtitle: "Visit and Inspection charges",
    originalPrice: "",
    price: "Rs.500",
    rating: "4.5",
    image: "images/electrition-s/UPS Wiring 1.png",
    includes: ["Complete AC inspection", "Filter cleaning", "Performance check"],
    excludes: ["Gas refilling", "Spare parts", "Major repairs"],
  },
  {
    id: 21,
    title: "Kitchen Hood Repairing",
    subtitle: "Visit and Inspection charges",
    originalPrice: "",
    price: "Rs.500",
    rating: "4.6",
    image: "images/electrition-s/Kitchen Hood Repairing 1.png",
    includes: ["Standard installation", "Up to 10 feet piping", "Gas charging", "Basic testing"],
    excludes: ["Extra piping cost", "Electrical work", "Stand/bracket"],
  },
  {
    id: 22,
    title: "Automatic Washing Machine Repairing",
    subtitle: "Visit and Inspection charges",
    originalPrice: "",
    price: "Rs.800",
    rating: "4.5",
    image: "images/electrition-s/Washing machine repairing 1.png ",
    includes: ["Fault diagnosis", "Basic inspection", "Repair consultation"],
    excludes: ["Actual repair cost", "Spare parts", "Gas refilling"],
  },
  {
    id: 23,
    title: "Kitchen Hood Installation",
    subtitle: "Visit and Inspection charges",
    originalPrice: "",
    price: "Rs.500",
    rating: "4.5",
    image: "images/electrition-s/Kitchen Hood Installation 1.png",
    includes: ["Safe dismounting", "Indoor & outdoor unit", "Gas recovery"],
    excludes: ["Transportation", "Reinstallation", "Storage"],
  },
  {
    id: 24,
    title: "Switchboard Socket Replacement",
    subtitle: "Socket",
    originalPrice: "",
    price: "Rs.500",
    rating: "4.5",
    image: "images/electrition-s/Switchboard Socket Replacement 1.png",
    includes: ["Safe dismounting", "Indoor & outdoor unit", "Gas recovery"],
    excludes: ["Transportation", "Reinstallation", "Storage"],
  },
  {
    id: 25,
    title: "Power Plug Installation",
    subtitle: "Per Plug (Without Wiring)",
    originalPrice: "",
    price: "Rs.800",
    rating: "4.8",
    image: "images/electrition-s/Power Plug Installation 1.png",
    includes: [
      "Dismounting the indoor & outdoor one place.",
      "Mount indoor & outdoor unit to second place.",
      "No repair",
    ],
    excludes: ["Logistics of AC", "Any typo of material", "Ladder"],
  },
  {
    id: 26,
    title: "Light Plug (With Wiring)",
    subtitle: "Vary After Inspection",
    originalPrice: "",
    price: "Rs.700",
    rating: "4.5",
    image: "images/electrition-s/Light Plug (With Wiring) 1.png",
    includes: ["Complete AC inspection", "Filter cleaning", "Performance check"],
    excludes: ["Gas refilling", "Spare parts", "Major repairs"],
  },
  {
    id: 27,
    title: "Ceiling Fan Repairing",
    subtitle: "Visit & Inspection charges",
    originalPrice: "",
    price: "Rs.500",
    rating: "4.6",
    image: "images/electrition-s/Ceiling Fan Repairing 1.png",
    includes: ["Standard installation", "Up to 10 feet piping", "Gas charging", "Basic testing"],
    excludes: ["Extra piping cost", "Electrical work", "Stand/bracket"],
  },
  {
    id: 28,
    title: "Tube light Installation",
    subtitle: "Per Tublite",
    originalPrice: "",
    price: "Rs.600",
    rating: "4.5",
    image: "images/electrition-s/Tube light Installation 1.png",
    includes: ["Fault diagnosis", "Basic inspection", "Repair consultation"],
    excludes: ["Actual repair cost", "Spare parts", "Gas refilling"],
  },
  {
    id: 29,
    title: "Sub-Meter Installation",
    subtitle: "- Starting From",
    originalPrice: "",
    price: "Rs.1000",
    rating: "4.8",
    image: "images/electrition-s/Sub-Meter Installation 1.png",
    includes: ["Safe dismounting", "Indoor & outdoor unit", "Gas recovery"],
    excludes: ["Transportation", "Reinstallation", "Storage"],
  },
]

const quantities = {}

let currentDetailId = null

function renderServices() {
  const grid = document.getElementById("serviceGrid")
  grid.innerHTML = ""

  services.forEach((service) => {
    if (!quantities[service.id]) {
      quantities[service.id] = 0
    }

    const col = document.createElement("div")
    col.className = "col-12 col-md-6 col-lg-4"

    const showControls = quantities[service.id] > 0
    const controlsHTML = showControls
      ? `
        <button class="qty-btn" data-action="decrease" data-id="${service.id}">−</button>
        <span class="qty-number">${quantities[service.id]}</span>
        <button class="qty-btn" data-action="increase" data-id="${service.id}">+</button>
      `
      : `<button class="add-btn" data-action="add" data-id="${service.id}">Add <span class="plus-icon">+</span></button>`

    col.innerHTML = `
      <div class="service-card" data-id="${service.id}">
        <img src="${service.image}" alt="${service.title}" class="service-image">
        <div class="service-info">
          <h3 class="service-title">${service.title}</h3>
          <p class="service-subtitle">${service.subtitle}</p>
          <div class="price-row">
            ${service.originalPrice ? `<span class="original-price">${service.originalPrice}</span>` : ""}
            <span class="current-price">${service.price}</span>
          </div>
          <span class="rating-badge">${service.rating}</span>
        </div>
        <div class="quantity-control" data-control="${service.id}">
          ${controlsHTML}
        </div>
      </div>
    `

    grid.appendChild(col)
  })

  attachEventListeners()
}

function attachEventListeners() {
  document.querySelectorAll(".service-card").forEach((card) => {
    card.addEventListener("click", (e) => {
      if (!e.target.closest(".quantity-control")) {
        const id = Number.parseInt(card.dataset.id)
        openDetail(id)
      }
    })
  })

  document.querySelectorAll(".add-btn, .qty-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation()
      const action = btn.dataset.action
      const id = Number.parseInt(btn.dataset.id)

      if (action === "add") {
        quantities[id] = 1
      } else if (action === "increase") {
        quantities[id]++
      } else if (action === "decrease") {
        quantities[id]--
        if (quantities[id] < 0) quantities[id] = 0
      }

      renderServices()
    })
  })
}

function openDetail(id) {
  const service = services.find((s) => s.id === id)
  if (!service) return

  currentDetailId = id

  document.getElementById("detailImage").src = service.image
  document.getElementById("detailTitle").textContent = service.title
  document.getElementById("detailSubtitle").textContent = service.subtitle
  document.getElementById("detailOriginalPrice").textContent = service.originalPrice
  document.getElementById("detailOriginalPrice").style.display = service.originalPrice ? "inline" : "none"
  document.getElementById("detailPrice").textContent = service.price
  document.getElementById("detailRating").textContent = service.rating

  const includesList = document.getElementById("includesList")
  includesList.innerHTML = service.includes.map((item) => `<div class="include-item">${item}</div>`).join("")

  const excludesList = document.getElementById("excludesList")
  excludesList.innerHTML = service.excludes.map((item) => `<div class="exclude-item">${item}</div>`).join("")

  updateDetailQuantityDisplay()

  document.getElementById("detailView").classList.add("active")
}

function closeDetail() {
  document.getElementById("detailView").classList.remove("active")
  currentDetailId = null
}

function updateDetailQuantityDisplay() {
  if (!currentDetailId) return

  const qty = quantities[currentDetailId] || 0
  const addBtn = document.getElementById("detailAddBtn")
  const qtyControl = document.getElementById("detailQuantityControl")
  const qtyNumber = document.getElementById("detailQuantity")

  if (qty > 0) {
    addBtn.style.display = "none"
    qtyControl.style.display = "flex"
    qtyNumber.textContent = qty
  } else {
    addBtn.style.display = "flex"
    qtyControl.style.display = "none"
  }
}

document.getElementById("detailAddBtn").addEventListener("click", (e) => {
  e.stopPropagation()
  if (currentDetailId) {
    quantities[currentDetailId] = 1
    updateDetailQuantityDisplay()
    renderServices() // Update main grid as well
  }
})

document.getElementById("detailIncrease").addEventListener("click", (e) => {
  e.stopPropagation()
  if (currentDetailId) {
    quantities[currentDetailId]++
    updateDetailQuantityDisplay()
    renderServices()
  }
})

document.getElementById("detailDecrease").addEventListener("click", (e) => {
  e.stopPropagation()
  if (currentDetailId) {
    quantities[currentDetailId]--
    if (quantities[currentDetailId] < 0) quantities[currentDetailId] = 0
    updateDetailQuantityDisplay()
    renderServices()
  }
})

// Close detail on backdrop click
document.getElementById("detailView").addEventListener("click", (e) => {
  if (e.target.id === "detailView") {
    closeDetail()
  }
})

// Initialize
renderServices()
