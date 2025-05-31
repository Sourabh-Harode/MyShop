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
