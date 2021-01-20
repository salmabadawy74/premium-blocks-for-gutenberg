const { decodeEntities } = wp.htmlEntities;
const { dateI18n, format, __experimentalGetSettings } = wp.date;
import Slider from "react-slick";

import Meta from "./meta";

import Excerpt from "./Excerpt";
import Button from "./Button";
import Image from "./Image";
import Tags from "./Tags";
const { __ } = wp.i18n;
let prevArrow, nextArrow;
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: props.navigationArrow ? "block" : "none" }}
      onClick={onClick}
    />
  );
}
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: props.navigationArrow ? "block" : "none" }}
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

      TagList,
      categoriesList,
    } = this.props;

    const {
      block_id,

      Autoplay,
      slideToScroll,
      autoplaySpeed,
      centerMode,
      slideSpacing,
      navigationDots,
      columns,
      mcolumns,
      tcolumns,
      offsetNum,
      navigationArrow,
      arrowPosition,
    } = attributes;
    const settings = {
      adaptiveHeight: true,
      dots: navigationDots,
      centerMode: centerMode,
      centerPadding: slideSpacing,
      infinite: true,
      autoplay: Autoplay,
      speed: autoplaySpeed,
      speed: autoplaySpeed,
      slidesToShow: columns,
      responsive: [
        {
          breakpoint: 976,
          settings: {
            slidesToShow: tcolumns,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: mcolumns,
          },
        },
      ],
    };
    const lastDisplay = latestPosts.slice(offsetNum);
    return (
      <div className={`premium-blog`} id={`premium-blog-${block_id}`}>
        <Slider {...settings}>
          {lastDisplay.map((post, i) => (
            <div className={`premium-blog-post-outer-container`} key={i}>
              <div className={`premium-blog-post-container`}>
                <Image post={post} attributes={attributes} />
                <div className={`premium-blog-content-wrapper empty-thumb`}>
                  <div className={`premium-blog-content-wrapper empty-thumb `}>
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
                      <Tags
                        attributes={attributes}
                        post={post}
                        TagList={TagList}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
export default Carousel;
