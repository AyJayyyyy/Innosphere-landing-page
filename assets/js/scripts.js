document.addEventListener("DOMContentLoaded", function () {
  const logo = document.getElementById("logo"); // Navbar logo
  const overlay = document.getElementById("overlay");
  const menuItems = document.querySelectorAll(".overlay-content a"); // All menu links
  const overlayLogo = document.getElementById("overlay-logo"); // Logo inside overlay

  // Toggle overlay when clicking the navbar logo (only for mobile)
  logo.addEventListener("click", function () {
      overlay.classList.toggle("active");
  });

  // Close overlay when clicking the overlay logo
  overlayLogo.addEventListener("click", function () {
      overlay.classList.remove("active");
  });

  // Smooth scroll to section & close overlay when clicking a menu item
  menuItems.forEach(item => {
      item.addEventListener("click", function (event) {
          event.preventDefault(); // Prevent default anchor behavior
          const targetId = this.getAttribute("href"); // Get target section ID
          const targetElement = document.querySelector(targetId);

          if (targetElement) {
              // Smooth scroll to target section
              targetElement.scrollIntoView({ behavior: "smooth" });

              // Wait for scrolling to complete, then close overlay
              setTimeout(() => {
                  overlay.classList.remove("active");
              }, 500); // Adjust delay if needed
          }
      });
  });
});
