const { decodeEntities } = wp.htmlEntities;
const { dateI18n, format, __experimentalGetSettings } = wp.date;
import ReactPaginate from "react-paginate";
import Meta from "./meta";
import Image from "./Image";
import { Fragment } from "react";
import Button from "./Button";
import Excerpt from "./Excerpt";
let $blogElement, $blogPost, layout;
class Blog extends React.Component {
  constructor() {
    super(...arguments);
  }
  componentDidMount() {}

  render() {
    const {
      attributes,
      className,
      latestPosts,
      categoriesList,
      setAttributes,
    } = this.props;
    const { __ } = wp.i18n;
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
      overlayColor,
      paginationPosition,
      blur,
      bright,
      contrast,
      saturation,
      hue,
      firstContentLetter,
      firstContentStyle,
      firstContentUpper,
      firstContentWeight,
      firstContentfontSize,
      typoColor,
      hoverColor,
      firstContentfontSizeType,
      firstContentfontSizeMobile,
      firstContentfontSizeTablet,
      secondContentLetter,
      secondContentStyle,
      secondContentUpper,
      secondContentWeight,
      secondContentfontSize,
      secondContentfontSizeType,
      secondContentfontSizeMobile,
      secondContentfontSizeTablet,
      metaColor,
      linkColor,
      sepaColor,
      postContentLetter,
      postContentStyle,
      postContentUpper,
      postContentWeight,
      postContentfontSize,
      postContentfontSizeType,
      postContentfontSizeMobile,
      postContentfontSizeTablet,
      textColor,
      pageCount,
      backgroundPostContent,
      containerShadowColor,
      containerShadowBlur,
      containerShadowHorizontal,
      containerShadowVertical,
      containerShadowPosition,
      cols,
      colsMobile,
      currentPage,
      colsTablet,
    } = attributes;
    let lastDisplay, pageCounts;
    //currentPage = 0;

    const gridClasses = gridCheck ? "premium-blog-even" : "premium-blog-list";
    // function handlePageClick(selectedPage) {
    //   currentPage = selectedPage.selected;
    // }
    if (pagination) {
      const PER_PAGE = numOfPosts;
      const offset = currentPage * PER_PAGE;
      lastDisplay = latestPosts.slice(offset, offset + PER_PAGE);
      pageCounts = Math.ceil(latestPosts.length / PER_PAGE);
      console.log(lastDisplay, offset, pageCounts, latestPosts, currentPage);
    } else {
      const displayPosts =
        latestPosts.length > numOfPosts
          ? latestPosts.slice(0, numOfPosts)
          : latestPosts;
      lastDisplay = displayPosts.slice(offsetNum);
    }
    console.log(lastDisplay);
    const equalHeight = layoutValue === "Even" ? "equal-Height" : null;
    return (
      <Fragment>
        <div
          className={`premium-blog-${blockID}`}
          id={`premium-blog-${blockID}`}
        >
          <div
            className={`premium-blog-wrap`}
            data-layout={layoutValue}
            style={{ position: "relative" }}
          >
            {lastDisplay.map((post, i) => (
              <div
                className={`premium-blog-post-outer-container  ${gridClasses}`}
                key={i}
              >
                <div className={`premium-blog-post-container`}>
                  <Image post={post} attributes={attributes} />
                  <div
                    className={ `premium-blog-content-wrapper empty-thumb ${ equalHeight }` }
                    style={{height:`${100}%`}}
                  >
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
                      <Excerpt post={post} attributes={attributes} />

                      <Button post={post} attributes={attributes} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {pagination && (
          <div className="Premium-blog-footer">
            <ReactPaginate
              previousLabel={"← Previous"}
              nextLabel={"Next →"}
              pageCount={pageCounts}
              onPageChange={(selected) => console.log(selected.selected)}
              containerClassName={"pagination"}
              previousLinkClassName={"pagination__link"}
              nextLinkClassName={"pagination__link"}
              disabledClassName={"pagination__link--disabled"}
              activeClassName={"pagination__link--active"}
            />
          </div>
        )}
      </Fragment>
    );
  }
}
export default Blog;
