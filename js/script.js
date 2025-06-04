document.addEventListener("DOMContentLoaded", function () {
  // Toggle navbar on mobile
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      navLinks.classList.toggle("show"); // Both class toggles retained as per original code
    });

    const navItems = navLinks.querySelectorAll("a");
    navItems.forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
      });
    });
  }

  // Set current year in footer
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Home page search functionality
  const homeSearchInput = document.getElementById("homeSearchInput");
  if (homeSearchInput) {
    homeSearchInput.addEventListener("input", function () {
      const query = this.value.toLowerCase();
      const products = document.querySelectorAll("#homeProductGrid .product-card");

      products.forEach((product) => {
        const text =
          product.querySelector("h3").textContent.toLowerCase() +
          product.querySelector("p").textContent.toLowerCase();

        product.style.display = text.includes(query) ? "block" : "none";
      });
    });
  }

  // Product category filter buttons
  const filterButtons = document.querySelectorAll(".filter-btn");
  const productCards = document.querySelectorAll(".product-card");

  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const category = btn.getAttribute("data-category");

      // Highlight active button
      filterButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      // Filter products by category
      productCards.forEach((card) => {
        const cardCategory = card.getAttribute("data-category");
        card.style.display = (category === "all" || cardCategory === category) ? "block" : "none";
      });
    });
  });
});







// dark mode toggle functionality
document.addEventListener('DOMContentLoaded', () => {
  const toggleSwitch = document.getElementById('dark-mode-toggle');
  if (!toggleSwitch) return; // prevent crash if element not found

  // Apply saved preference
  if (localStorage.getItem('dark-mode') === 'enabled') {
    document.body.classList.add('dark-mode');
    toggleSwitch.checked = true;
  }

  toggleSwitch.addEventListener('change', () => {
    if (toggleSwitch.checked) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('dark-mode', 'enabled');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('dark-mode', 'disabled');
    }
  });
});

