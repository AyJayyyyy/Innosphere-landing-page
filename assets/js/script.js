// Autor: Innosphere
    // to open  and close the sidebar
    window.addEventListener('DOMContentLoaded', () => {
        const logoContainers = document.querySelectorAll('#logo-container, #logo-container-1');
        const navmobile = document.querySelector('#nav-mobile');

        logoContainers.forEach(logocontainer => {
            logocontainer.addEventListener('click', () => {
                navmobile.classList.toggle('show');
            });
        });

        // Close navmobile when touching any element outside of it
        document.addEventListener('click', (event) => {
            if (!navmobile.contains(event.target) && !event.target.closest('#logo-container') && !event.target.closest('#logo-container-1')) {
                navmobile.classList.remove('show');
            }
        });
    });
    
    // close the sideabr when resizing the screen
    window.addEventListener('resize', () => {
        const navmobile = document.querySelector('#nav-mobile');
        if (window.innerWidth > 992) {
            if  (navmobile.className.includes('show')) {
                navmobile.classList.remove('show');
            }
        }
    });
    
     // show the btnlight when the screen size is medium size
    function toggleButtonVisibility() {
        const btnlight = document.querySelector('#btn-light');
    
        if (!btnlight) return; // Prevent errors if element is missing
    
        if (window.innerWidth > 992) {
            btnlight.style.display = "none"; // Hide button
        } else {
            btnlight.style.display = "block"; // Show button
        }
    }
    
    // Run on page load
    toggleButtonVisibility();
    
    // Run on resize
    window.addEventListener('resize', toggleButtonVisibility);

    


    // remove br tags
    let originalBrTags = [];

function toggleBrTags() {
    if (window.innerWidth < 992) {
        document.querySelectorAll('br').forEach(br => {
            originalBrTags.push({ element: br, parent: br.parentNode, nextSibling: br.nextSibling });
            br.remove();
        });
    } else {
        originalBrTags.forEach(item => {
            if (item.parent) {
                item.parent.insertBefore(document.createElement('br'), item.nextSibling);
            }
        });
        originalBrTags = [];
    }
}

// Run on page load
toggleBrTags();

// Run on window resize
window.addEventListener('resize', toggleBrTags);

    
    
document.addEventListener("DOMContentLoaded", function () {
    const scrollContainer = document.querySelector(".services-cards-container");
    
    

    scrollContainer.addEventListener("mousedown", (e) => {
        isDown = true;
        scrollContainer.classList.add("active");
        startX = e.pageX - scrollContainer.offsetLeft;
        scrollLeft = scrollContainer.scrollLeft;
    });

    scrollContainer.addEventListener("mouseleave", () => {
        isDown = false;
        scrollContainer.classList.remove("active");
    });

    scrollContainer.addEventListener("mouseup", () => {
        isDown = false;
        scrollContainer.classList.remove("active");
    });

    scrollContainer.addEventListener("mousemove", (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - scrollContainer.offsetLeft;
        const walk = (x - startX) * 2; // Scroll speed
        scrollContainer.scrollLeft = scrollLeft - walk;
    });

    // Touch gesture support for mobile
    let touchStartX;
    let touchScrollLeft;

    scrollContainer.addEventListener("touchstart", (e) => {
        touchStartX = e.touches[0].pageX - scrollContainer.offsetLeft;
        touchScrollLeft = scrollContainer.scrollLeft;
    });

    scrollContainer.addEventListener("touchmove", (e) => {
        e.preventDefault();
        const touchX = e.touches[0].pageX - scrollContainer.offsetLeft;
        const walk = (touchX - touchStartX) * 2; // Adjust scroll speed
        scrollContainer.scrollLeft = touchScrollLeft - walk;
    });
});