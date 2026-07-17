document.addEventListener("DOMContentLoaded", () => {
  const lastOrder = JSON.parse(localStorage.getItem("lastOrder"))

  if (!lastOrder) {
    window.location.href = "index.html"
    return
  }

  const orderItemsContainer = document.getElementById("orderItems")
  orderItemsContainer.innerHTML = lastOrder.items
    .map(
      (item) => `
        <div style="display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid #e5e7eb;">
            <span>${item.name} x ${item.quantity}</span>
            <span>Rs. ${(item.price * item.quantity).toLocaleString()}</span>
        </div>
    `,
    )
    .join("")

  document.getElementById("orderTotal").textContent = `Rs. ${lastOrder.total.toLocaleString()}`
})
