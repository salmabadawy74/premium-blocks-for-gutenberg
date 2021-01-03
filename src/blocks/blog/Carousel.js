const { decodeEntities } = wp.htmlEntities;
const { dateI18n, format, __experimentalGetSettings } = wp.date;
import Slider from "react-slick";

import Meta from "./meta";
import Iamge from "./Image";
import { Fragment } from "react";
const { __ } = wp.i18n;

class Carousel extends React.Component {
  constructor() {
    super(...arguments);
  }
  componentDidMount() {}
  componentDidUpdate() {
    //  $blogElement = document.querySelector(".premium-blog-wrap");
  }
  render() {
    const {
      attributes,
      className,
      latestPosts,
      block_id,
      categoriesList,
    } = this.props;

    const {
      blockID,
      DisplayTitle,
      DisplayDate,
      DisplayComment,
      DisplayExcert,
      DisplayAuthor,
      DisplayImage,
      DisplayTaxonomy,
      DisplayPostLink,
      newTab,
      borderWidth,
      ctaText,
      borderRadius,
      borderColor,
      vPadding,
      hPadding,
      categories,
      rowGap,
      imageSize,

      bgColor,
      contentPadding,
      contentPaddingMobile,
      gridCheck,
      equalHeight,

      numOfPosts,
      numOfColumns,
      offsetNum,
      currentPost,
      orderBy,
      order,
      featuredImage,
      hoverEffect,
      height,
      HeightU,

      rowGapUnit,
      columnGap,
      postPosition,
      displayPostContent,
      displayPostExcerpt,
      excerptType,
      fullWidth,
      readMoreText,
      displayPostAuthor,
      displayPostDate,
      displayPostCategories,
      displayPostComment,
      displayPostTags,
      filterTabs,
      getTabsFrom,
      tabLabel,
      filterPosition,

      linkNewTab,
      layoutValue,
      postFilter,
      sizeType,
      size,
      sizeMobile,
      sizeTablet,
      Carousel,
      Autoplay,
      slideToScroll,
      autoplaySpeed,
      centerMode,
      slideSpacing,
      navigationDots,
      navigationArrow,
      arrowPosition,
      pagination,
      pageLimit,
      paginationPosition,
    } = attributes;
    const settings = {
      dots: navigationDots,
      centerMode: centerMode,
      infinite: true,
      autoplay: Autoplay,
      speed: autoplaySpeed,
      speed: autoplaySpeed,
      slidesToShow: 1,
      slidesToScroll: slideToScroll,
      prevArrow :
      
      '<a type="button" data-role="none" class="carousel-arrow carousel-prev" aria-label="Next" role="button" style=""><i class="fas fa-angle-left" aria-hidden="true"></i></a>',
      nextArrow :
      '<a type="button" data-role="none" class="carousel-arrow carousel-next" aria-label="Next" role="button" style=""><i class="fas fa-angle-right" aria-hidden="true"></i></a>'
    };
    // Removing posts from display should be instant.
    const displayPosts =
      latestPosts.length > numOfPosts
        ? latestPosts.slice(0, numOfPosts)
        : latestPosts;
    const lastDisplay = displayPosts.slice(offsetNum);

    return (
      <div>
        <div data-layout={layoutValue}>
          <Slider {...settings}>
            {lastDisplay.map((post, i) => (
              <div className={`premium-blog-post-outer-container`} key={i}>
                <div
                  className={`premium-blog-post-container premium-blog-skin-modern`}
                >
                  <Iamge post={post} attributes={attributes} />
                  <div className={`premium-blog-content-wrapper empty-thumb`}>
                    <div className={`premium-blog-content-wrapper-inner`}>
                      <div className={`premium-blog-inner-container`}>
                        <div className="premium-blog-entry-container">
                          <div className="premium-blog-entry-title">
                            <h2>
                              <a href={post.link}>
                                {undefined == post.title
                                  ? post.value
                                  : decodeEntities(
                                      post.title.rendered.trim()
                                    ) || __("(Untitled)")}
                              </a>
                            </h2>
                          </div>

                          <div className="premium-blog-entry-meta">
                            <Meta
                              post={post}
                              categoriesList={categoriesList}
                              attributes={attributes}
                            />
                          </div>
                        </div>
                      </div>
                      <p>
                        {undefined == post.uagb_excerpt
                          ? post.label
                          : decodeEntities(post.uagb_excerpt.trim()) ||
                            __("(Untitled)")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    );
  }
}
export default Carousel;
