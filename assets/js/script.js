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
// JS for theme toggle
const toggle = document.getElementById('toggle-theme');
const toggleLg = document.getElementById('toggle-theme-lg');

[toggle, toggleLg].forEach((toggler) => {
    if (toggler) {
        toggler.addEventListener('change', () => {
            document.body.classList.toggle('dark-mode');
        });
    }
});
