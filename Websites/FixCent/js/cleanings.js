const services = [
  {
    id: 1,
    title: "Safe Cleaning",
    subtitle: "cushions, fabric/ leather",
    originalPrice: "",
    price: "Rs.500",
    rating: "4.5",
    image: "images/cleaning-s/Sofa Cleaning 1.png",
    includes: [
      "Dismounting the indoor & outdoor one place.",
      "Mount indoor & outdoor unit to second place.",
      "No repair",
    ],
    excludes: ["Logistics of AC", "Any typo of material", "Ladder"],
  },
  {
    id: 2,
    title: "Carpet Cleaning",
    subtitle: "Double Mattress",
    originalPrice: "Rs.2500",
    price: "Rs.2000",
    rating: "4.8",
    image: "images/cleaning-s/Carpet Cleaning 1.png",
    includes: ["Complete AC inspection", "Filter cleaning", "Performance check"],
    excludes: ["Gas refilling", "Spare parts", "Major repairs"],
  },
  {
    id: 3,
    title: "Water Tank Cleaning",
    subtitle: "Overhead/underground plastic tank",
    originalPrice: "Rs.2800",
    price: "Rs.2000",
    rating: "4.6",
    image: "images/cleaning-s/Water Tank Cleaning 1.png",
    includes: ["Standard installation", "Up to 10 feet piping", "Gas charging", "Basic testing"],
    excludes: ["Extra piping cost", "Electrical work", "Stand/bracket"],
  },
  {
    id: 4,
    title: "Full House Deep Cleaning",
    subtitle: "Visit & inspection charges",
    originalPrice: "",
    price: "Rs.500",
    rating: "4.5",
    image: "images/cleaning-s/Full House Deep Cleaning 1.png",
    includes: ["Fault diagnosis", "Basic inspection", "Repair consultation"],
    excludes: ["Actual repair cost", "Spare parts", "Gas refilling"],
  },
  {
    id: 5,
    title: "Room Deep Cleaning",
    subtitle: "Per AC (1 to 2.5 tons)",
    originalPrice: "",
    price: "Rs.2500",
    rating: "4.2",
    image: "images/cleaning-s/Full House Deep Cleaning 1.png",
    includes: ["Safe dismounting", "Indoor & outdoor unit", "Gas recovery"],
    excludes: ["Transportation", "Reinstallation", "Storage"],
  },
  {
    id: 6,
    title: "Kitchen Deep Cleaning",
    subtitle: "Countertops, ",
    originalPrice: "",
    price: "Rs.25",
    rating: "4.2",
    image: "images/cleaning-s/Kitchen Deep Cleaning 1.png",
    includes: ["Safe dismounting", "Indoor & outdoor unit", "Gas recovery"],
    excludes: ["Transportation", "Reinstallation", "Storage"],
  },
  {
    id: 7,
    title: "Rug Cleaning",
    subtitle: "Per stf",
    originalPrice: "",
    price: "Rs.25",
    rating: "4.5",
    image: "images/cleaning-s/Rug Cleaning 1.png",
    includes: ["Fault diagnosis", "Basic inspection", "Repair consultation"],
    excludes: ["Actual repair cost", "Spare parts", "Gas refilling"],
  },
  {
    id: 9,
    title: "Commercial Deep Cleaning",
    subtitle: "Visit and Inspection charges",
    originalPrice: "",
    price: "Rs.25",
    rating: "4.7",
    image: "images/cleaning-s/rs=w_600,cg_true,m 1.png",
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
