jQuery(document).ready(function ($) {
    var heights = new Array(),
        $blogWrapper = $(".premium-blog-post-outer-container");
    $blogWrapper.each(function (index, post) {
        var height = $(post).outerHeight();
        heights.push(height);
    });

    var maxHeight = Math.max.apply(null, heights);
    $blogWrapper.css("height", maxHeight + "px");
});
