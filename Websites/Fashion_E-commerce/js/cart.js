let cart = JSON.parse(localStorage.getItem("cart")) || []
const updateCartCount = () => {
  document.getElementById("cartCount").textContent = cart.length
}
const showNotification = (message) => {
  alert(message)
}

function displayCart() {
  const cartItemsContainer = document.getElementById("cartItems")

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-cart"></i>
                <h3>Your cart is empty</h3>
                <p>Add some products to get started!</p>
                <a href="shop.html" class="btn btn-shop-now">Start Shopping</a>
            </div>
        `
    updateSummary()
    return
  }

  cartItemsContainer.innerHTML = cart
    .map(
      (item) => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-details">
                <h3 class="cart-item-name">${item.name}</h3>
                <p class="cart-item-price">Rs. ${item.price.toLocaleString()}</p>
            </div>
            <div class="cart-item-quantity">
                <button class="cart-qty-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                <span>${item.quantity}</span>
                <button class="cart-qty-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
            </div>
            <button class="cart-item-remove" onclick="removeFromCart(${item.id})">
                <i class="fas fa-trash"></i>
            </button>
        </div>
    `,
    )
    .join("")

  updateSummary()
}

function updateQuantity(productId, change) {
  const item = cart.find((item) => item.id === productId)
  if (item) {
    item.quantity += change
    if (item.quantity <= 0) {
      removeFromCart(productId)
    } else {
      localStorage.setItem("cart", JSON.stringify(cart))
      displayCart()
      updateCartCount()
    }
  }
}

function removeFromCart(productId) {
  cart = cart.filter((item) => item.id !== productId)
  localStorage.setItem("cart", JSON.stringify(cart))
  displayCart()
  updateCartCount()
  showNotification("Item removed from cart")
}

function updateSummary() {
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = subtotal > 5000 ? 0 : 250
  const total = subtotal + shipping

  document.getElementById("subtotal").textContent = `Rs. ${subtotal.toLocaleString()}`
  document.getElementById("shipping").textContent = shipping === 0 ? "FREE" : `Rs. ${shipping}`
  document.getElementById("total").textContent = `Rs. ${total.toLocaleString()}`
}

document.addEventListener("DOMContentLoaded", displayCart)
