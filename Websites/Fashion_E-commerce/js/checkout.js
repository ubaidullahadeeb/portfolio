let cart = JSON.parse(localStorage.getItem("cart")) || []

function displayCheckoutSummary() {
  const orderItemsContainer = document.getElementById("orderItems")

  if (cart.length === 0) {
    window.location.href = "cart.html"
    return
  }

  orderItemsContainer.innerHTML = cart
    .map(
      (item) => `
        <div class="order-item">
            <img src="${item.image}" alt="${item.name}" class="order-item-image">
            <div class="order-item-details">
                <div class="order-item-name">${item.name}</div>
                <div class="order-item-qty">Qty: ${item.quantity}</div>
            </div>
            <div class="order-item-price">Rs. ${(item.price * item.quantity).toLocaleString()}</div>
        </div>
    `,
    )
    .join("")

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = subtotal > 5000 ? 0 : 250
  const total = subtotal + shipping

  document.getElementById("checkoutSubtotal").textContent = `Rs. ${subtotal.toLocaleString()}`
  document.getElementById("checkoutShipping").textContent = shipping === 0 ? "FREE" : `Rs. ${shipping}`
  document.getElementById("checkoutTotal").textContent = `Rs. ${total.toLocaleString()}`
}

function placeOrder() {
  const form = document.getElementById("checkoutForm")

  if (!form.checkValidity()) {
    form.reportValidity()
    return
  }

  // Store order details
  const orderDetails = {
    items: cart,
    total: cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
    orderDate: new Date().toISOString(),
  }

  localStorage.setItem("lastOrder", JSON.stringify(orderDetails))

  // Clear cart
  cart = []
  localStorage.setItem("cart", JSON.stringify(cart))

  // Redirect to success page
  window.location.href = "order-success.html"
}

document.addEventListener("DOMContentLoaded", displayCheckoutSummary)
