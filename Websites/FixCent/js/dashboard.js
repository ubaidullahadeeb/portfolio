// Dashboard functionality
const ordersData = [
  { date_time: '2023-10-01', order_id: '12345', status: 'Pending', customer_name: 'John Doe', payment_amount: '$100', phone: '123-456-7890', service: 'Web Design', address: '123 Main St' },
  { date_time: '2023-09-30', order_id: '12346', status: 'Completed', customer_name: 'Jane Smith', payment_amount: '$200', phone: '098-765-4321', service: 'App Development', address: '456 Elm St' },
  // Add more order data as needed
];

document.addEventListener('DOMContentLoaded', function () {
  // Populate recent orders table
  const recentOrdersBody = document.getElementById('recent-orders-body');

  if (recentOrdersBody) {
    ordersData.slice(0, 7).forEach((order) => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${order.date_time}</td>
        <td style="color: #4682b4; font-weight: 500;">${order.order_id}</td>
        <td>
          <span class="status-${order.status.toLowerCase()}">${order.status}</span>
        </td>
        <td>${order.customer_name}</td>
        <td>${order.payment_amount}</td>
        <td>${order.phone}</td>
        <td>${order.service}</td>
        <td>${order.address}</td>
      `;
      recentOrdersBody.appendChild(row);
    });
  }

  // Add click handlers for navigation
  document.querySelectorAll('.nav-item').forEach((item) => {
    item.addEventListener('click', function (e) {
      // Only prevent default if it's a hash link
      if (this.getAttribute('href').startsWith('#')) {
        e.preventDefault();
      }
      // Update active state
      document.querySelectorAll('.nav-item').forEach((nav) => {
        nav.classList.remove('active');
      });
      this.classList.add('active');
    });
  });
});
