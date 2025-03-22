document.getElementById("menuToggle").addEventListener("click", function(event) {
  document.getElementById("mobileMenu").classList.add("active");
});

// Close overlay when clicking outside the menu content
document.getElementById("mobileMenu").addEventListener("click", function(event) {
  if (event.target === this) {
      this.classList.remove("active");
  }
});
