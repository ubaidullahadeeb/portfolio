// ============================================
// FIXO AC SERVICES - CUSTOM JAVASCRIPT
// ============================================

document.addEventListener("DOMContentLoaded", () => {
  // Smooth scroll for anchor links
  const links = document.querySelectorAll('a[href^="#"]')
  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      const href = this.getAttribute("href")
      if (href !== "#") {
        e.preventDefault()
        const target = document.querySelector(href)
        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
            block: "start",
          })
        }
      }
    })
  })

  // Add scroll animation trigger
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible")
        }
      })
    },
    {
      threshold: 0.1,
    },
  )

  document.querySelectorAll(".fade-in-up, .fade-in-left, .fade-in-right").forEach((el) => {
    observer.observe(el)
  })

  // Navbar active state on scroll
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link")
  const sections = document.querySelectorAll("section[id]")

  window.addEventListener("scroll", () => {
    let current = ""
    sections.forEach((section) => {
      const sectionTop = section.offsetTop
      const sectionHeight = section.clientHeight
      if (pageYOffset >= sectionTop - 200) {
        current = section.getAttribute("id")
      }
    })

    navLinks.forEach((link) => {
      link.classList.remove("active")
      if (link.getAttribute("href").slice(1) === current) {
        link.classList.add("active")
      }
    })
  })

  // Button click handlers (UI only)
  const buttons = document.querySelectorAll("button")
  buttons.forEach((button) => {
    button.addEventListener("click", function (e) {
      if (this.classList.contains("btn-primary") || this.classList.contains("btn-light")) {
        // Add ripple effect
        const ripple = document.createElement("span")
        const rect = this.getBoundingClientRect()
        const size = Math.max(rect.width, rect.height)
        const x = e.clientX - rect.left - size / 2
        const y = e.clientY - rect.top - size / 2

        ripple.style.width = ripple.style.height = size + "px"
        ripple.style.left = x + "px"
        ripple.style.top = y + "px"
        ripple.classList.add("ripple")

        this.appendChild(ripple)

        setTimeout(() => ripple.remove(), 600)
      }
    })
  })

  // Navbar collapse on mobile when link clicked
  const navbarCollapse = document.querySelector(".navbar-collapse")
  const bootstrap = window.bootstrap // Declare the bootstrap variable
  if (navbarCollapse) {
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
          toggle: false,
        })
        if (navbarCollapse.classList.contains("show")) {
          bsCollapse.hide()
        }
      })
    })
  }

  // Filter functionality for Services page
  const filterButtons = document.querySelectorAll(".filter-btn")
  const serviceItems = document.querySelectorAll(".service-item")

  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const filterValue = this.getAttribute("data-filter")

      // Update active button
      filterButtons.forEach((btn) => btn.classList.remove("active"))
      this.classList.add("active")

      // Filter service items
      serviceItems.forEach((item) => {
        const itemCategory = item.getAttribute("data-category")

        if (filterValue === "all") {
          item.classList.remove("hidden")
          item.classList.remove("fade-out")
          setTimeout(() => {
            item.style.display = ""
          }, 50)
        } else if (itemCategory === filterValue) {
          item.classList.remove("hidden")
          item.classList.remove("fade-out")
          setTimeout(() => {
            item.style.display = ""
          }, 50)
        } else {
          item.classList.add("fade-out")
          setTimeout(() => {
            item.classList.add("hidden")
            item.style.display = "none"
          }, 300)
        }
      })
    })
  })

  // Placeholder for future interactions
  console.log("FIXO AC Services - Website Loaded Successfully")

  // Contact form specific validation
  const contactForm = document.querySelector("#contactForm")
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      const name = document.querySelector("#name").value.trim()
      const email = document.querySelector("#email").value.trim()
      const message = document.querySelector("#message").value.trim()

      if (name === "") {
        alert("Please enter your name.")
        e.preventDefault()
      } else if (email === "") {
        alert("Please enter your email.")
        e.preventDefault()
      } else if (message === "") {
        alert("Please enter your message.")
        e.preventDefault()
      }
    })
  }
})

// Add ripple effect CSS
const style = document.createElement("style")
style.textContent = `
    button {
        position: relative;
        overflow: hidden;
    }

    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }

    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }

    .visible {
        animation: fadeInUp 0.6s ease-out !important;
        opacity: 1 !important;
    }

    .fade-out {
        opacity: 0;
        transition: opacity 0.3s ease-out;
    }

    .hidden {
        display: none;
    }
`
document.head.appendChild(style)





const tsServices = [
  {
    id: 1,
    title: "Carpenter Work",
    subtitle: "Visit & Inspection Charges",
    originalPrice: "",
    price: "Rs. 500",
    rating: "4.3",
    image: " images/trandImag-S/Carpenter Work 2.png",
    includes: ["Inspection", "Consultation"],
    excludes: ["Material cost"],
  },
  {
    id: 2,
    title: "Interior Design",
    subtitle: "Visit & Inspection Charges",
    originalPrice: "",
    price: "Rs. 1000",
    rating: "4.5",
    image: "images/trandImag-S/Interior Design & Space Planning 1.png",
    includes: ["Inspection"],
    excludes: ["Parts"],
  },
  {
    id: 3,
    title: "Roof Waterproofing",
    subtitle: "Visit & Inspection Charges",
    originalPrice: "",
    price: "Rs. 500",
    rating: "4.8",
    image: "images/trandImag-S/Roof Waterproofing 2.png",
    includes: ["Inspection"],
    excludes: ["Spare parts"],
  },
  {
    id: 4,
    title: "Ceiling Fan Repairing",
    subtitle: "Visit & Inspection Charges",
    originalPrice: "",
    price: "Rs. 500",
    rating: "4.5",
    image: "images/trandImag-S/Ceiling Fan Repairing 3.png",
    includes: ["Inspection"],
    excludes: ["Paint material"],
  },
  {
    id: 5,
    title: "CCTV Installation",
    subtitle: "Visit & Inspection Charges",
    originalPrice: "",
    price: "Rs. 800",
    rating: "4.6",
    image: "images/trandImag-S/Gas Pipe Wiring 1.png",
    includes: ["Inspection"],
    excludes: ["Camera cost"],
  },
  {
    id: 6,
    title: "Gas Pipe Wiring",
    subtitle: "Visit & Inspection Charges",
    originalPrice: "",
    price: "Rs. 500",
    rating: "4.5",
    image: "images/trandImag-S/Gas Geyser Service 5.png",
    includes: ["Inspection"],
    excludes: ["Material"],
  },
]

const tsQuantities = {}

function renderTsServices() {
  const grid = document.getElementById("tsServiceGrid")
  grid.innerHTML = ""

  tsServices.forEach((service) => {
    if (!tsQuantities[service.id]) tsQuantities[service.id] = 0

    const col = document.createElement("div")
    col.className = "col-12 col-md-6 col-lg-4"

    const controls =
      tsQuantities[service.id] > 0
        ? `
        <button class="ts-qty-btn" data-id="${service.id}" data-action="dec">−</button>
        <span class="ts-qty-number">${tsQuantities[service.id]}</span>
        <button class="ts-qty-btn" data-id="${service.id}" data-action="inc">+</button>
      `
        : `<button class="ts-add-btn" data-id="${service.id}" data-action="add">Add +</button>`

    col.innerHTML = `
      <div class="ts-service-card" data-id="${service.id}">
        <img src="${service.image}" class="ts-service-image">
        <div class="ts-service-info">
          <h3 class="ts-service-title">${service.title}</h3>
          <p class="ts-service-subtitle">${service.subtitle}</p>
          <div class="ts-price-row">
            <span class="ts-current-price">${service.price}</span>
          </div>
          <span class="ts-rating-badge">${service.rating}</span>
        </div>
        <div class="ts-quantity-control">
          ${controls}
        </div>
      </div>
    `
    grid.appendChild(col)
  })

  attachTsEvents()
}

function attachTsEvents() {
  document.querySelectorAll(".ts-add-btn, .ts-qty-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation()
      const id = Number(btn.dataset.id)
      const action = btn.dataset.action

      if (action === "add") tsQuantities[id] = 1
      if (action === "inc") tsQuantities[id]++
      if (action === "dec") tsQuantities[id]--

      if (tsQuantities[id] < 0) tsQuantities[id] = 0
      renderTsServices()
    })
  })
}

renderTsServices()








const services = [ /* tumhara original services array */ ]
const quantities = {}
let currentDetailId = null

function renderServices() {
  const grid = document.getElementById("serviceGrid")
  grid.innerHTML = ""

  services.forEach(service => {
    if (!quantities[service.id]) quantities[service.id] = 0

    const col = document.createElement("div")
    col.className = "col-12 col-md-6 col-lg-4"

    col.innerHTML = `
      <div class="ts-service-card" data-id="${service.id}">
        <img src="${service.image}" class="ts-service-image">
        <div class="ts-service-info">
          <h3 class="ts-service-title">${service.title}</h3>
          <p class="ts-service-subtitle">${service.subtitle}</p>
          <div class="ts-price-row">
            ${service.originalPrice ? `<span class="ts-original-price">${service.originalPrice}</span>` : ""}
            <span class="ts-current-price">${service.price}</span>
          </div>
          <span class="ts-rating-badge">${service.rating}</span>
        </div>
      </div>
    `
    col.querySelector(".ts-service-card").onclick = () => openDetail(service.id)
    grid.appendChild(col)
  })
}

function openDetail(id) {
  const s = services.find(x => x.id === id)
  if (!s) return
  currentDetailId = id

  detailImage.src = s.image
  detailTitle.textContent = s.title
  detailSubtitle.textContent = s.subtitle
  detailPrice.textContent = s.price
  detailRating.textContent = s.rating

  includesList.innerHTML = s.includes.map(i => `<div>${i}</div>`).join("")
  excludesList.innerHTML = s.excludes.map(i => `<div>${i}</div>`).join("")

  detailView.classList.add("active")
}

function closeDetail() {
  detailView.classList.remove("active")
}

renderServices()


