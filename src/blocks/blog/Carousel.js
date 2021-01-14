const { decodeEntities } = wp.htmlEntities;
const { dateI18n, format, __experimentalGetSettings } = wp.date;
import Slider from "react-slick";

import Meta from "./meta";

import Excerpt from "./Excerpt";
import Button from "./Button";
import Image from "./Image";
const { __ } = wp.i18n;
let prevArrow, nextArrow;
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}
class Carousel extends React.Component {
  constructor() {
    super(...arguments);
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
      column,
      columnMobile,
      columnTablet,
      navigationArrow,
      arrowPosition,
    } = attributes;
    if (navigationArrow) {
      (prevArrow =
        '<a type="button" data-role="none" class="carousel-arrow carousel-prev" aria-label="Next" role="button" style=""><i class="fas fa-angle-left" aria-hidden="true"></i></a>'),
        (nextArrow =
          '<a type="button" data-role="none" class="carousel-arrow carousel-next" aria-label="Next" role="button" style=""><i class="fas fa-angle-right" aria-hidden="true"></i></a>');
    } else {
      prevArrow = nextArrow = "";
    }

    const settings = {
      dots: navigationDots,
      centerMode: centerMode,
      infinite: true,
      autoplay: Autoplay,
      speed: autoplaySpeed,
      speed: autoplaySpeed,
      slidesToShow: column,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      slidesToScroll: slideToScroll,
      responsive: [
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: columnTablet,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: columnMobile,
            slidesToScroll: 1,
          },
        },
      ],
    };

    const lastDisplay = latestPosts.slice(offsetNum);
    console.log(column, columnTablet, columnMobile);
    return (
      <div className={`premium-blog-${blockID}`} id={`premium-blog-${blockID}`}>
        <div>
          <Slider {...settings}>
            {lastDisplay.map((post, i) => (
              <div className={`premium-blog-post-outer-container`} key={i}>
                <div
                  className={`premium-blog-post-container premium-blog-skin-modern`}
                >
                  <Image post={post} attributes={attributes} />
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
                      <Excerpt attributes={attributes} post={post} />
                      <Button attributes={attributes} post={post} />
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
