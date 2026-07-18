// Service data
const servicesData = [
  {
    id: 1,
    title: "AC General Services",
    description: "Per AC (1 to 2.5 tons)",
    oldPrice: "Rs.1200",
    newPrice: "Rs.1000",
    rating: "4.5",
    image: "/images/frame-20397.png",
    includes: ["Dismounting of indoor unit", "Dismounting of outdoor unit", "AC pipe dismounting"],
    excludes: ["Any type of repair", "Any type of material", "Ladder"],
  },
  {
    id: 2,
    title: "AC Installation",
    description: "With 10 rft pipe (1 to 2.5 tons)",
    oldPrice: "Rs.3500",
    newPrice: "Rs.3000",
    rating: "4.6",
    image: "/images/frame-20397.png",
    includes: [
      "Installation of indoor unit",
      "Installation of outdoor unit",
      "AC pipe installation",
      "10 rft copper pipe included",
    ],
    excludes: ["Any type of repair", "Additional pipe beyond 10 rft", "Ladder"],
  },
  {
    id: 3,
    title: "AC Repairing",
    description: "Visit & inspection charges",
    oldPrice: "",
    newPrice: "Rs.800",
    rating: "4.8",
    image: "/images/frame-20397.png",
    includes: ["Professional AC inspection", "Fault diagnosis", "Repair quotation"],
    excludes: ["Repair charges", "Replacement parts", "Ladder"],
  },
  {
    id: 4,
    title: "AC Mounting & Dismounting",
    description: "Per AC (1 to 2.5 tons)",
    oldPrice: "",
    newPrice: "Rs.3500",
    rating: "4.5",
    image: "/images/frame-20397.png",
    includes: ["Complete mounting service", "Dismounting service", "Safe handling of unit"],
    excludes: ["Any type of repair", "New installation materials", "Ladder"],
  },
  {
    id: 5,
    title: "AC Dismounting",
    description: "Per AC (1 to 2.5 tons)",
    oldPrice: "Rs.1200",
    newPrice: "Rs.1000",
    rating: "4.2",
    image: "/images/frame-20397.png",
    includes: ["Safe removal of indoor unit", "Safe removal of outdoor unit", "Pipe disconnection"],
    excludes: ["Transportation", "Storage", "Ladder"],
  },
]

// Counter state for each service
const counters = {}

// Initialize counters
servicesData.forEach((service) => {
  counters[service.id] = 0
})

// Render service cards
function renderServiceCards() {
  const container = document.getElementById("serviceCardsRow")
  container.innerHTML = ""

  servicesData.forEach((service) => {
    const col = document.createElement("div")
    col.className = "col-md-6 col-lg-4"

    col.innerHTML = `
            <div class="service-card" data-service-id="${service.id}">
                <img src="${service.image}" alt="${service.title}" class="service-card-image">
                <h3 class="service-card-title">${service.title}</h3>
                <p class="service-card-description">${service.description}</p>
                <div class="service-card-pricing">
                    ${service.oldPrice ? `<span class="old-price">${service.oldPrice}</span>` : ""}
                    <span class="new-price">${service.newPrice}</span>
                </div>
                <span class="rating-badge"><i class="fas fa-star"></i> ${service.rating}</span>
                <div class="card-footer-section">
                    <div class="counter-controls">
                        <button class="btn-minus" id="minus-${service.id}" style="display:none;" onclick="decrementCounter(${service.id}, event)">
                            <i class="fas fa-minus"></i>
                        </button>
                        <span class="counter-display" id="counter-${service.id}">0</span>
                    </div>
                    <button class="btn-add" onclick="incrementCounter(${service.id}, event)">
                        Add <i class="fas fa-plus"></i>
                    </button>
                </div>
            </div>
        `

    container.appendChild(col)
  })

  // Add click event to cards (but not to buttons)
  document.querySelectorAll(".service-card").forEach((card) => {
    card.addEventListener("click", function (e) {
      // Don't open detail view if clicking on buttons
      if (!e.target.closest(".btn-add") && !e.target.closest(".btn-minus")) {
        const serviceId = Number.parseInt(this.dataset.serviceId)
        openDetailedView(serviceId)
      }
    })
  })
}

// Increment counter
function incrementCounter(serviceId, event) {
  event.stopPropagation()
  counters[serviceId]++
  updateCounterDisplay(serviceId)
}

// Decrement counter
function decrementCounter(serviceId, event) {
  event.stopPropagation()
  if (counters[serviceId] > 0) {
    counters[serviceId]--
    updateCounterDisplay(serviceId)
  }
}

// Update counter display
function updateCounterDisplay(serviceId) {
  const counterDisplay = document.getElementById(`counter-${serviceId}`)
  const minusBtn = document.getElementById(`minus-${serviceId}`)

  if (counterDisplay) {
    counterDisplay.textContent = counters[serviceId]
  }

  if (minusBtn) {
    minusBtn.style.display = counters[serviceId] > 0 ? "flex" : "none"
  }
}

// Open detailed view
function openDetailedView(serviceId) {
  const service = servicesData.find((s) => s.id === serviceId)
  if (!service) return

  const detailedView = document.getElementById("detailedServiceView")
  const detailImage = document.getElementById("detailImage")
  const detailTitle = document.getElementById("detailTitle")
  const detailDescription = document.getElementById("detailDescription")
  const detailOldPrice = document.getElementById("detailOldPrice")
  const detailPrice = document.getElementById("detailPrice")
  const detailRating = document.getElementById("detailRating")
  const detailCount = document.getElementById("detailCount")
  const detailMinusBtn = document.getElementById("detailMinusBtn")
  const includesList = document.getElementById("includesList")
  const excludesList = document.getElementById("excludesList")

  // Set content
  detailImage.src = service.image
  detailTitle.textContent = service.title
  detailDescription.textContent = service.description
  detailOldPrice.textContent = service.oldPrice
  detailOldPrice.style.display = service.oldPrice ? "inline" : "none"
  detailPrice.textContent = service.newPrice
  detailRating.innerHTML = `<i class="fas fa-star"></i> ${service.rating}`
  detailCount.textContent = counters[serviceId]
  detailMinusBtn.style.display = counters[serviceId] > 0 ? "flex" : "none"

  // Set includes
  includesList.innerHTML = ""
  service.includes.forEach((item) => {
    const li = document.createElement("li")
    li.textContent = item
    includesList.appendChild(li)
  })

  // Set excludes
  excludesList.innerHTML = ""
  service.excludes.forEach((item) => {
    const li = document.createElement("li")
    li.textContent = item
    excludesList.appendChild(li)
  })

  // Show detailed view
  detailedView.classList.add("active")
  document.body.style.overflow = "hidden"

  // Set up detail view counter buttons
  const detailAddBtn = document.getElementById("detailAddBtn")
  detailAddBtn.onclick = () => {
    counters[serviceId]++
    detailCount.textContent = counters[serviceId]
    detailMinusBtn.style.display = "flex"
    updateCounterDisplay(serviceId)
  }

  detailMinusBtn.onclick = () => {
    if (counters[serviceId] > 0) {
      counters[serviceId]--
      detailCount.textContent = counters[serviceId]
      detailMinusBtn.style.display = counters[serviceId] > 0 ? "flex" : "none"
      updateCounterDisplay(serviceId)
    }
  }
}

// Close detailed view
function closeDetailedView() {
  const detailedView = document.getElementById("detailedServiceView")
  detailedView.classList.remove("active")
  document.body.style.overflow = "auto"
}

// Initialize on page load
document.addEventListener("DOMContentLoaded", () => {
  renderServiceCards()
})
