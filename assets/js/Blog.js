jQuery(document).ready(function ($) {
  setTimeout(() => {
    
    var $blogElement = $(".premium-blog-wrap"),
      $blogPost = $blogElement.find(".premium-blog-post-outer-container"),
      carousel = $blogElement.data("carousel"),
      grid = $blogElement.data("grid"),
      layout = $blogElement.data("layout"),
      pagination = $blogElement.data("pagination"),
      pageNumber = 1;
    console.log($blogElement);
    var $metaSeparators = $blogPost
      .first()
      .find(".premium-blog-meta-separator");

    if (1 === $metaSeparators.length) {
      //If two meta only are enabled. One of them is author meta.
      if (!$blogPost.find(".fa-user").length) {
        $blogPost.find(".premium-blog-meta-separator").remove();
      }
    } else {
      if (!$blogPost.find(".fa-user").length) {
        $blogPost.each(function (index, post) {
          $(post).find(".premium-blog-meta-separator").first().remove();
        });
      }
    }

    if (carousel) {
    
      var autoPlay = $blogElement.data("play"),
        speed = $blogElement.data("speed"),
        fade = $blogElement.data("fade"),
        center = $blogElement.data("center"),
        spacing = $blogElement.data("slides-spacing"),
        arrows = $blogElement.data("arrows"),
        dots = $blogElement.data("dots"),
        cols = $blogElement.data("col"),
        colsTablet = $blogElement.data("col-tablet"),
        colsMobile = $blogElement.data("col-mobile"),
        slidesToScroll = $blogElement.data("scroll-slides"),
        prevArrow = null,
        nextArrow = null;

      if (!grid) cols = colsTablet = colsMobile = 1;

      if (arrows) {
        (prevArrow =
          '<a type="button" data-role="none" class="carousel-arrow carousel-prev" aria-label="Next" role="button" style=""><i class="fas fa-angle-left" aria-hidden="true"></i></a>'),
          (nextArrow =
            '<a type="button" data-role="none" class="carousel-arrow carousel-next" aria-label="Next" role="button" style=""><i class="fas fa-angle-right" aria-hidden="true"></i></a>');
      } else {
        prevArrow = prevArrow = "";
      }

      $($blogElement).slick({
        infinite: true,
        slidesToShow: cols,
        slidesToScroll: slidesToScroll || cols,
        responsive: [
          {
            breakpoint: 1025,
            settings: {
              slidesToShow: colsTablet,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: colsMobile,
              slidesToScroll: 1,
            },
          },
        ],
        autoplay: autoPlay,
        autoplaySpeed: speed,
        nextArrow: nextArrow,
        prevArrow: prevArrow,
        fade: fade,
        centerMode: center,
        centerPadding: spacing + "px",
        draggable: true,
        dots: dots,
        customPaging: function () {
          return '<i class="fas fa-circle"></i>';
        },
      });
    }

    //Force posts inner boxes to take the same height
    if ("even" === layout) {
      var equalHeight = $blogElement.data("equal");

      if (equalHeight) {
        forceEqualHeight();
      }
    }

    function forceEqualHeight() {
      var heights = new Array();

      $blogElement
        .find(".premium-blog-content-wrapper")
        .each(function (index, post) {
          var height = $(post).outerHeight();

          heights.push(height);
        });

      var maxHeight = Math.max.apply(null, heights);

      $blogElement
        .find(".premium-blog-content-wrapper")
        .css("height", maxHeight + "px");
    }

    //Handle Pagination
    if (pagination) {
      $scope.on(
        "click",
        ".premium-blog-pagination-container .page-numbers",
        function (e) {
          e.preventDefault();

          //If pagination item is clicked twice
          if ($(this).hasClass("current")) return;

          var currentPage = parseInt(
            $scope
              .find(".premium-blog-pagination-container .page-numbers.current")
              .html()
          );

          if ($(this).hasClass("next")) {
            pageNumber = currentPage + 1;
          } else if ($(this).hasClass("prev")) {
            pageNumber = currentPage - 1;
          } else {
            pageNumber = $(this).html();
          }

          getPostsByAjax(true);
        }
      );
    }

    function getPostsByAjax(shouldScroll) {
      //If filter tabs is not enabled, then always set category to all.
      if ("undefined" === typeof activeCategory) {
        activeCategory = "*";
      }

      $.ajax({
        url: PremiumSettings.ajaxurl,
        dataType: "json",
        type: "POST",
        data: {
          action: "pa_get_posts",
          page_id: $blogElement.data("page"),
          widget_id: $scope.data("id"),
          page_number: pageNumber,
          category: activeCategory,
          nonce: PremiumSettings.nonce,
        },
        beforeSend: function () {
          $blogElement.append(
            '<div class="premium-loading-feed"><div class="premium-loader"></div></div>'
          );

          if (shouldScroll) {
            $("html, body").animate(
              {
                scrollTop: $blogElement.offset().top - 50,
              },
              "slow"
            );
          }
        },
        success: function (res) {
          if (!res.data) return;

          $blogElement.find(".premium-loading-feed").remove();

          var posts = res.data.posts,
            paging = res.data.paging;

          //Render the new markup into the widget
          $blogElement.html(posts);

          $scope.find(".premium-blog-footer").html(paging);

          if ("even" === layout) {
            var equalHeight = $blogElement.data("equal");
            if (equalHeight) {
              forceEqualHeight();
            }
          } else {
            $blogElement.imagesLoaded(function () {
              $blogElement.isotope("reloadItems");
              $blogElement.isotope({
                itemSelector: ".premium-blog-post-outer-container",
                animate: false,
              });
            });
          }
        },
        error: function (err) {
          console.log(err);
        },
      });
    }
  }, 3000);
});
