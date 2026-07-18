document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll(".blog-filter-btn");
  const blogPosts = document.querySelectorAll(".blog-post");

  filterButtons.forEach(button => {
    button.addEventListener("click", () => {

      // Active button style
      filterButtons.forEach(btn => {
        btn.classList.remove("btn-primary", "active");
        btn.classList.add("btn-outline-primary");
      });

      button.classList.remove("btn-outline-primary");
      button.classList.add("btn-primary", "active");

      const filter = button.getAttribute("data-filter");

      blogPosts.forEach(post => {
        const category = post.getAttribute("data-category");

        if (filter === "all" || category === filter) {
          post.style.display = "block";
        } else {
          post.style.display = "none";
        }
      });
    });
  });
});
