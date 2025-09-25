/*============  Preloader============*/
window.addEventListener('load', function () {
        document.querySelector('.preloader').style.display = 'none';
    });
/*============ Navbar============*/
  document.addEventListener('DOMContentLoaded', function () {
    const toggler = document.querySelector('.navbar-toggler');
    const collapse = document.getElementById('navbarCollapse');

    toggler.addEventListener('click', function () {
      this.classList.toggle('open');
    });

    // Optional: Close the X when clicking on a nav link
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        if (window.getComputedStyle(toggler).display !== "none") {
          toggler.classList.remove('open');
          collapse.classList.remove('show');
        }
      });
    });
  });
/*============ owl caraousel============*/
var owl = $('.owl-project');
            owl.owlCarousel({
                items:3, 
            // items change number for slider display on desktop
            
                loop:true,
                margin:10,
                autoplay:true,
                autoplayTimeout:3000,
                autoplayHoverPause:true,
                  responsive: {
                    0: {
                    items: 1
                    },
                    600: {
                    items: 2
                    },
                    1000: {
                    items: 3
                    }
                }
            });

            var owl = $('.owl-testimonial');
            owl.owlCarousel({
                items:2, 
            // items change number for slider display on desktop
            
                loop:true,
                margin:10,
                autoplay:true,
                autoplayTimeout:3000,
                autoplayHoverPause:true,
                  responsive: {
                    0: {
                    items: 1
                    },
                    600: {
                    items: 2
                    },
                    1000: {
                    items: 2
                    }
                }
            });


document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert("Thank you for your message! I'll get back to you soon.");
  this.reset();
});
/*============ contact button============*/

// Default to dark mode
    const toggle = document.getElementById("toggle-theme");
    const body = document.body;
    const themeLabel = document.getElementById("theme-label");

    // Load saved theme
    if (localStorage.getItem("theme") === "dark") {
      body.classList.add("dark-mode");
      toggle.checked = true;
      themeLabel.textContent = "Dark Mode";
    }

    toggle.addEventListener("change", () => {
      if (toggle.checked) {
        body.classList.add("dark-mode");
        localStorage.setItem("theme", "dark");
        themeLabel.textContent = "Dark Mode";
      } else {
        body.classList.remove("dark-mode");
        localStorage.setItem("theme", "light");
        themeLabel.textContent = "Light Mode";
      }
    });