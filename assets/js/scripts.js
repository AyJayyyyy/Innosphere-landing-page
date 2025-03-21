  function adjustNavbarForMobile() {
    const navbar = document.querySelector('.navbar');
    const navMenu = document.querySelector('.nav-menu');
    const logoImg = document.querySelector('.logo img');
    const contactBtn = document.querySelector('.contact-btn a');

    if (window.innerWidth <= 768) {
      // Hide the nav menu on mobile
      navMenu.style.display = 'none';
      
      // Adjust logo size for mobile
      logoImg.style.height = '50px';

      // Adjust contact button size for mobile
      contactBtn.style.padding = '10px 20px';
      contactBtn.style.fontSize = '16px';

      // Reduce the space between logo and contact button
      navbar.style.padding = '0 15px';
      navbar.style.height = '70px';
      navbar.style.flexDirection = 'row';
      navbar.style.justifyContent = 'space-between';
      navbar.style.gap = '10px';
    } else {
      // Restore the navbar to the default state on larger screens
      navMenu.style.display = 'grid';
      logoImg.style.height = '60px';
      contactBtn.style.padding = '12px 24px';
      contactBtn.style.fontSize = '18px';

      navbar.style.padding = '0 30px';
      navbar.style.height = '85px';
      navbar.style.flexDirection = 'row';
      navbar.style.justifyContent = 'space-between';
      navbar.style.gap = '25px';
    }
  }

  // Run the function on page load and on resize
  window.addEventListener('load', adjustNavbarForMobile);
  window.addEventListener('resize', adjustNavbarForMobile);
