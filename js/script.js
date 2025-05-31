// Toggle navbar on mobile
document.getElementById('hamburger').addEventListener('click', () => {
  document.getElementById('nav-links').classList.toggle('show');
});

// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();





// Search on home page only
document.addEventListener("DOMContentLoaded", function () {
  const homeSearchInput = document.getElementById("homeSearchInput");

  if (homeSearchInput) {
    homeSearchInput.addEventListener("input", function () {
      const query = this.value.toLowerCase();
      const products = document.querySelectorAll("#homeProductGrid .product-card");

      products.forEach((product) => {
        const text =
          product.querySelector("h3").textContent.toLowerCase() +
          product.querySelector("p").textContent.toLowerCase();

        if (text.includes(query)) {
          product.style.display = "block";
        } else {
          product.style.display = "none";
        }
      });
    });
  }
});


document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const productCards = document.querySelectorAll(".product-card");

  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const category = btn.getAttribute("data-category");

      // Highlight active button
      filterButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      // Filter products
      productCards.forEach((card) => {
        const cardCategory = card.getAttribute("data-category");
        if (category === "all" || cardCategory === category) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
});
