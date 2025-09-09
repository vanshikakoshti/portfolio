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
                items:1, 
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
                    items: 1
                    }
                }
            });


document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert("Thank you for your message! I'll get back to you soon.");
  this.reset();
});
