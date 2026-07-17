document.addEventListener("DOMContentLoaded", () => {
  const path = window.location.pathname
  const page = path.substring(path.lastIndexOf("/") + 1).replace(".html", "")

  let category = "all"
  let containerId = "shopProducts"

  const products = [
    /* your product data here */
  ] // Declare the products variable here

  if (page === "men") {
    category = "men"
    containerId = "menProducts"
  } else if (page === "women") {
    category = "women"
    containerId = "womenProducts"
  } else if (page === "accessories") {
    category = "accessories"
    containerId = "accessoriesProducts"
  }

  const filteredProducts = category === "all" ? products : products.filter((p) => p.category === category)
  const container = document.getElementById(containerId)

  if (container) {
    container.innerHTML = filteredProducts
      .map(
        (product) => `
            <div class="col-lg-4 col-md-6">
                <div class="product-card">
                    ${product.discount ? `<div class="product-badge badge-red">${product.discount}% OFF</div>` : ""}
                    <div class="product-image">
                        <img src="${product.image}" alt="${product.name}">
                        <div class="product-overlay">
                            <button class="btn btn-quick-view" onclick="viewProduct(${product.id})">View Details <i class="fas fa-chevron-right ms-2"></i></button>
                        </div>
                    </div>
                    <div class="product-info">
                        <h3 class="product-title">${product.name}</h3>
                        <div class="product-price">
                            ${product.oldPrice ? `<span class="price-old">Rs. ${product.oldPrice.toLocaleString()}</span>` : ""}
                            <span class="price-new">Rs. ${product.price.toLocaleString()}</span>
                        </div>
                        <button class="btn btn-view-details" onclick="viewProduct(${product.id})">
                            View Details <i class="fas fa-chevron-right ms-2"></i>
                        </button>
                    </div>
                </div>
            </div>
        `,
      )
      .join("")
  }
})
