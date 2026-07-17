// Cart Management
const cart = JSON.parse(localStorage.getItem("cart")) || []

// Sample Products Database
const products = [
  {
    id: 1,
    name: "Premium Hoodie",
    price: 5000,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop",
    description: "High-quality premium hoodie made with soft cotton blend. Perfect for casual wear.",
    category: "men",
    discount: 30,
  },
  {
    id: 2,
    name: "Stylish Dress",
    price: 6400,
    oldPrice: 8000,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=400&fit=crop",
    description: "Elegant dress perfect for any occasion. Made with premium fabric.",
    category: "women",
    discount: 20,
  },
  {
    id: 3,
    name: "Leather Handbag",
    price: 8000,
    oldPrice: 10000,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=400&fit=crop",
    description: "Luxurious leather handbag with spacious compartments. Timeless design.",
    category: "accessories",
    discount: 20,
  },
  {
    id: 4,
    name: "Classic T-Shirt",
    price: 1500,
    oldPrice: 2000,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
    description: "Comfortable cotton t-shirt available in multiple colors.",
    category: "men",
    discount: 25,
  },
  {
    id: 5,
    name: "Denim Jacket",
    price: 7500,
    oldPrice: 10000,
    image: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=400&h=400&fit=crop",
    description: "Classic denim jacket that never goes out of style.",
    category: "women",
    discount: 25,
  },
  {
    id: 6,
    name: "Sports Sneakers",
    price: 4800,
    oldPrice: 6000,
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop",
    description: "Comfortable sports sneakers for everyday wear.",
    category: "accessories",
    discount: 20,
  },
]

// Update Cart Count
function updateCartCount() {
  const cartCount = document.getElementById("cartCount")
  if (cartCount) {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)
    cartCount.textContent = totalItems
  }
}

// Add to Cart
function addToCart(productId, quantity = 1) {
  const product = products.find((p) => p.id === productId)
  if (!product) return

  const existingItem = cart.find((item) => item.id === productId)

  if (existingItem) {
    existingItem.quantity += quantity
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: quantity,
    })
  }

  localStorage.setItem("cart", JSON.stringify(cart))
  updateCartCount()
  showNotification("Product added to cart!")
}

// View Product
function viewProduct(productId) {
  localStorage.setItem("selectedProduct", productId)
  window.location.href = "product-details.html"
}

// Show Notification
function showNotification(message) {
  const notification = document.createElement("div")
  notification.className = "notification"
  notification.textContent = message
  notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background-color: var(--success);
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

// Newsletter Form
document.addEventListener("DOMContentLoaded", () => {
  updateCartCount()

  const newsletterForms = document.querySelectorAll(".newsletter-form")
  newsletterForms.forEach((form) => {
    form.addEventListener("submit", function (e) {
      e.preventDefault()
      const email = this.querySelector('input[type="email"]').value
      showNotification("Thank you for subscribing!")
      this.reset()
    })
  })
})

// Add animation styles
const style = document.createElement("style")
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`
document.head.appendChild(style)
