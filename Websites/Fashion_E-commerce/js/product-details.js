let currentProduct = null
let selectedSize = "M"

// Get products from script.js
const products = [
  {
    id: 1,
    name: "Premium Hoodie",
    price: 5000,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop",
    description:
      "High-quality premium hoodie made with soft cotton blend. Perfect for casual wear and outdoor activities. Features include front pocket, adjustable hood, and ribbed cuffs.",
    category: "men",
    discount: 30,
  },
  {
    id: 2,
    name: "Stylish Dress",
    price: 6400,
    oldPrice: 8000,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=400&fit=crop",
    description:
      "Elegant dress perfect for any occasion. Made with premium fabric that drapes beautifully. Features include flattering silhouette, comfortable fit, and timeless design.",
    category: "women",
    discount: 20,
  },
  {
    id: 3,
    name: "Leather Handbag",
    price: 8000,
    oldPrice: 10000,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=400&fit=crop",
    description:
      "Luxurious leather handbag with spacious compartments. Timeless design that complements any outfit. Features include multiple pockets, adjustable strap, and premium hardware.",
    category: "accessories",
    discount: 20,
  },
]

// Load Product Details
document.addEventListener("DOMContentLoaded", () => {
  const productId = Number.parseInt(localStorage.getItem("selectedProduct")) || 1
  currentProduct = products.find((p) => p.id === productId)

  if (currentProduct) {
    displayProductDetails()
  }

  document.querySelectorAll(".size-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
      document.querySelectorAll(".size-btn").forEach((b) => b.classList.remove("active"))
      this.classList.add("active")
      selectedSize = this.textContent
    })
  })

  // Update cart count
  updateCartCount()
})

function displayProductDetails() {
  document.getElementById("mainProductImage").src = currentProduct.image
  document.getElementById("productName").textContent = currentProduct.name
  document.getElementById("productPrice").textContent = `Rs. ${currentProduct.price.toLocaleString()}`
  document.getElementById("productDescription").textContent = currentProduct.description

  if (currentProduct.oldPrice) {
    document.getElementById("productOldPrice").textContent = `Rs. ${currentProduct.oldPrice.toLocaleString()}`
    document.getElementById("productOldPrice").style.display = "inline"
    document.getElementById("productDiscount").textContent = `${currentProduct.discount}% OFF`
    document.getElementById("productDiscount").style.display = "inline"
  } else {
    document.getElementById("productOldPrice").style.display = "none"
    document.getElementById("productDiscount").style.display = "none"
  }
}

function increaseQuantity() {
  const qtyInput = document.getElementById("quantity")
  qtyInput.value = Number.parseInt(qtyInput.value) + 1
}

function decreaseQuantity() {
  const qtyInput = document.getElementById("quantity")
  if (Number.parseInt(qtyInput.value) > 1) {
    qtyInput.value = Number.parseInt(qtyInput.value) - 1
  }
}

function addToCartFromDetails() {
  const quantity = Number.parseInt(document.getElementById("quantity").value)
  const cart = JSON.parse(localStorage.getItem("cart")) || []

  const existingItem = cart.find((item) => item.id === currentProduct.id && item.size === selectedSize)

  if (existingItem) {
    existingItem.quantity += quantity
  } else {
    cart.push({
      id: currentProduct.id,
      name: currentProduct.name,
      price: currentProduct.price,
      image: currentProduct.image,
      quantity: quantity,
      size: selectedSize,
    })
  }

  localStorage.setItem("cart", JSON.stringify(cart))
  updateCartCount()
  showNotification("Product added to cart!")

  // Redirect to cart page after a short delay
  setTimeout(() => {
    window.location.href = "cart.html"
  }, 1000)
}

function buyNow() {
  const quantity = Number.parseInt(document.getElementById("quantity").value)
  const cart = JSON.parse(localStorage.getItem("cart")) || []

  const existingItem = cart.find((item) => item.id === currentProduct.id && item.size === selectedSize)

  if (existingItem) {
    existingItem.quantity += quantity
  } else {
    cart.push({
      id: currentProduct.id,
      name: currentProduct.name,
      price: currentProduct.price,
      image: currentProduct.image,
      quantity: quantity,
      size: selectedSize,
    })
  }

  localStorage.setItem("cart", JSON.stringify(cart))
  window.location.href = "checkout.html"
}

// Helper functions from script.js
function updateCartCount() {
  const cartCount = document.getElementById("cartCount")
  if (cartCount) {
    const cart = JSON.parse(localStorage.getItem("cart")) || []
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)
    cartCount.textContent = totalItems
  }
}

function showNotification(message) {
  const notification = document.createElement("div")
  notification.className = "notification"
  notification.textContent = message
  notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background-color: #28a745;
        color: white;
        padding: 15px 25px;
        border-radius: 8px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.3);
        z-index: 10000;
        animation: slideIn 0.3s ease-out;
    `

  document.body.appendChild(notification)

  setTimeout(() => {
    notification.style.animation = "slideOut 0.3s ease-out"
    setTimeout(() => notification.remove(), 300)
  }, 3000)
}
