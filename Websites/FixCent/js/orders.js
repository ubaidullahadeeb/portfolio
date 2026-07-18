// Orders page functionality
const ordersData = [
  { order_id: 1, customer_name: 'John Doe', address: '123 Main St', phone: '555-1234', date_time: '2023-10-01', payment_method: 'Credit Card', service: 'Installation' },
  { order_id: 2, customer_name: 'Jane Smith', address: '456 Elm St', phone: '555-5678', date_time: '2023-10-02', payment_method: 'PayPal', service: 'Repair' }
]; // Example orders data, replace with actual data source

document.addEventListener('DOMContentLoaded', function () {
  const ordersBody = document.getElementById('orders-body');

  if (ordersBody) {
    // Populate all orders
    ordersData.forEach((order) => {
      const row = document.createElement('tr');
      row.className = 'order-row';
      row.setAttribute('data-order-id', order.order_id);

      const statusSelect = document.createElement('select');
      statusSelect.className = 'order-status-select';
      statusSelect.innerHTML = `
        <option value="Pending" ${order.status === 'Pending' ? 'selected' : ''}>Pending</option>
        <option value="Complete" ${order.status === 'Complete' ? 'selected' : ''}>Complete</option>
        <option value="Cancel" ${order.status === 'Cancel' ? 'selected' : ''}>Cancel</option>
      `;

      const statusCell = document.createElement('td');
      statusCell.setAttribute('data-field', 'status');
      statusCell.appendChild(statusSelect);

      const actionsCell = document.createElement('td');
      actionsCell.innerHTML = `
        <div class="action-buttons">
          <button class="btn-view-order" onclick="viewOrder('${order.order_id}')">View</button>
          <button class="btn-delete-order" onclick="deleteOrder('${order.order_id}')">Delete</button>
        </div>
      `;

      row.innerHTML = `
        <td data-field="order_id">${order.order_id}</td>
        <td data-field="customer_name">${order.customer_name}</td>
        <td data-field="address">${order.address}</td>
        <td data-field="phone">${order.phone}</td>
        <td data-field="date_time">${order.date_time}</td>
      `;

      row.appendChild(statusCell);

      row.innerHTML += `
        <td data-field="payment_method">${order.payment_method}</td>
        <td data-field="service">${order.service}</td>
      `;

      row.appendChild(actionsCell);
      ordersBody.appendChild(row);
    });
  }

  // Add click handlers for navigation
  document.querySelectorAll('.nav-item').forEach((item) => {
    item.addEventListener('click', function (e) {
      if (this.getAttribute('href').startsWith('#')) {
        e.preventDefault();
      }
      document.querySelectorAll('.nav-item').forEach((nav) => {
        nav.classList.remove('active');
      });
      this.classList.add('active');
    });
  });
});

// Action handler functions
function viewOrder(orderId) {
  console.log('[v0] View order:', orderId);
  // This will be connected to backend API later
  alert(`View order ${orderId}`);
}

function deleteOrder(orderId) {
  console.log('[v0] Delete order:', orderId);
  // This will be connected to backend API later
  if (confirm(`Are you sure you want to delete order ${orderId}?`)) {
    const row = document.querySelector(`tr[data-order-id="${orderId}"]`);
    if (row) {
      row.remove();
    }
  }
}
