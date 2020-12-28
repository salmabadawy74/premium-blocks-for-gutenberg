// var PremiumBlogHandler = function ($scope, $) {
//   var $blogElement = $scope.find(".premium-blog-wrap"),
//     $blogPost = $blogElement.find(".premium-blog-post-outer-container"),
//     grid = $blogElement.data("grid"),
//     layout = $blogElement.data("layout"),
//     activeCategory = $scope.find(".category.active").data("filter"),
//     filterTabs = $scope.find(".premium-blog-filter").length,
//     pageNumber = 1;

//   var $metaSeparators = $blogPost.first().find(".premium-blog-meta-separator");

//   if (1 === $metaSeparators.length) {
//     //If two meta only are enabled. One of them is author meta.
//     if (!$blogPost.find(".fa-user").length) {
//       $blogPost.find(".premium-blog-meta-separator").remove();
//     }
//   } else {
//     if (!$blogPost.find(".fa-user").length) {
//       $blogPost.each(function (index, post) {
//         $(post).find(".premium-blog-meta-separator").first().remove();
//       });
//     }
//   }

//   if (filterTabs) {
//     $scope.find(".premium-blog-filters-container li a").click(function (e) {
//       e.preventDefault();

//       $scope
//         .find(".premium-blog-filters-container li .active")
//         .removeClass("active");

//       $(this).addClass("active");

//       // var selector = $(this).attr("data-filter");

//       //Get clicked tab slug
//       activeCategory = $(this).attr("data-filter");

//       //Make sure to reset pagination before sending our AJAX request
//       pageNumber = 1;

//       getPostsByAjax(true);

//       // console.log(selector);
//       // $blogElement.isotope({
//       //     filter: selector,
//       //     layoutMode: "even" === layout ? "fitRows" : "masonry"
//       // });
//       // return false;
//     });
//   }

//   if (!filterTabs || "*" === activeCategory) {
//     if ("masonry" === layout && !carousel) {
//       $blogElement.imagesLoaded(function () {
//         $blogElement.isotope({
//           itemSelector: ".premium-blog-post-outer-container",
//           percentPosition: true,
//           filter: activeCategory,
//           animationOptions: {
//             duration: 750,
//             easing: "linear",
//             queue: false,
//           },
//         });
//       });
//     }
//   } else {
//     //If `All` categories not exist, then we need to get posts through AJAX
//     getPostsByAjax(false);
//   }

//   //Force posts inner boxes to take the same height
//   if ("even" === layout) {
//     var equalHeight = $blogElement.data("equal");

//     if (equalHeight) {
//       forceEqualHeight();
//     }
//   }

//   function forceEqualHeight() {
//     var heights = new Array();

//     $blogElement
//       .find(".premium-blog-content-wrapper")
//       .each(function (index, post) {
//         var height = $(post).outerHeight();

//         heights.push(height);
//       });

//     var maxHeight = Math.max.apply(null, heights);

//     $blogElement
//       .find(".premium-blog-content-wrapper")
//       .css("height", maxHeight + "px");
//   }

//   function getPostsByAjax(shouldScroll) {
//     //If filter tabs is not enabled, then always set category to all.
//     if ("undefined" === typeof activeCategory) {
//       activeCategory = "*";
//     }

//     $.ajax({
//       url: PremiumSettings.ajaxurl,
//       dataType: "json",
//       type: "POST",
//       data: {
//         action: "pa_get_posts",
//         page_id: $blogElement.data("page"),
//         widget_id: $scope.data("id"),
//         page_number: pageNumber,
//         category: activeCategory,
//         nonce: PremiumSettings.nonce,
//       },
//       beforeSend: function () {
//         $blogElement.append(
//           '<div class="premium-loading-feed"><div class="premium-loader"></div></div>'
//         );

//         if (shouldScroll) {
//           $("html, body").animate(
//             {
//               scrollTop: $blogElement.offset().top - 50,
//             },
//             "slow"
//           );
//         }
//       },
//       success: function (res) {
//         if (!res.data) return;

//         $blogElement.find(".premium-loading-feed").remove();

//         var posts = res.data.posts,
//           paging = res.data.paging;

//         //Render the new markup into the widget
//         $blogElement.html(posts);

//         $scope.find(".premium-blog-footer").html(paging);

//         if ("even" === layout) {
//           var equalHeight = $blogElement.data("equal");
//           if (equalHeight) {
//             forceEqualHeight();
//           }
//         } else {
//           $blogElement.imagesLoaded(function () {
//             $blogElement.isotope("reloadItems");
//             $blogElement.isotope({
//               itemSelector: ".premium-blog-post-outer-container",
//               animate: false,
//             });
//           });
//         }
//       },
//       error: function (err) {
//         console.log(err);
//       },
//     });
//   }
// };
