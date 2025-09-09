$(window).on("load", function () {
    (setTimeout(function () {
        $(".preloader").addClass("loaded");
    }, 1e3),
    $(".portfolio-items").length) &&
        ($(".portfolio-items").isotope(),
        $(".portfolio-filter ul li").on("click", function () {
            $(".portfolio-filter ul li").removeClass("sel-item"), $(this).addClass("sel-item");
            var t = $(this).attr("data-filter");
            $(".portfolio-items").isotope({ filter: t, animationOptions: { duration: 750, easing: "linear", queue: !1 } });
        }));
}),
    $(function () {
        "use strict";
        var t = $(window);
        function o() {
            $("#home").css({ height: $(window).height() + "px" });
        }
        o(),
            t.resize(o),
            $.scrollIt({ upKey: 38, downKey: 40, easing: "swing", scrollTime: 600, activeClass: "active", onPageChange: null, topOffset: -15 }),
            t.on("scroll", function () {
                var o = t.scrollTop(),
                    a = $(".navbar");
                o > 300 ? a.addClass("fixed-top") : a.removeClass("fixed-top");
            }),
            (function () {
                if ($("section.stats").length > 0) {
                    var t = 0;
                    $(window).on("scroll", function () {
                        var o = $("section.stats").offset().top - window.innerHeight;
                        0 == t &&
                            $(window).scrollTop() > o &&
                            ($("section.stats .single-stat .counter").each(function () {
                                var t = $(this),
                                    o = t.attr("data-count");
                                $({ countNum: t.text() }).animate(
                                    { countNum: o },
                                    {
                                        duration: 2e3,
                                        easing: "swing",
                                        step: function () {
                                            t.text(Math.floor(this.countNum));
                                        },
                                        complete: function () {
                                            t.text(this.countNum);
                                        },
                                    }
                                );
                            }),
                            (t = 1));
                    });
                }
            })(),
            $(".nav-item .nav-link").on("click", function () {
                $(".navbar-collapse").removeClass("show");
            }),
            t.stellar({ horizontalScrolling: !1 })
    });

