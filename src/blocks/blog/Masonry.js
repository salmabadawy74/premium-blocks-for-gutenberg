import Masonry from "react-masonry-component";
const { decodeEntities } = wp.htmlEntities;
const { dateI18n, format, __experimentalGetSettings } = wp.date;
import ReactPaginate from "react-paginate";

import Meta from "./meta";
import Iamge from "./Image";

import { Fragment } from "react";
import Excerpt from "./Excerpt";
import Button from "./Button";

class MasonryClass extends React.Component {
  constructor() {
    super(...arguments);
  }

  render() {
    console.log(latestPosts);
    const {
      attributes,
      className,
      latestPosts,
      block_id,
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
      currentPage,
      pageCount,
    } = attributes;
    let lastDisplay;
    // Removing posts from display should be instant.
    const displayPosts =
      latestPosts.length > numOfPosts
        ? latestPosts.slice(0, numOfPosts)
        : latestPosts;
    lastDisplay = displayPosts.slice(offsetNum);
    const gridClasses = gridCheck ? "premium-blog-even" : "premium-blog-list";
    function handlePageClick(selectedPage) {
      setAttributes({ currentPage: selectedPage.selected });
    }

    if (pagination) {
      const PER_PAGE = numOfPosts;
      const offset = currentPage * PER_PAGE;
      lastDisplay = latestPosts.slice(offset, offset + PER_PAGE);
      console.log(lastDisplay, displayPosts, latestPosts);
      console.log(offset);
      const pageCounts = Math.ceil(latestPosts.length / PER_PAGE);
      setAttributes({ pageCount: pageCounts });
    }
    console.log(lastDisplay);
    return (
      <Fragment>
        <div
          className={`premium-blog-${blockID}`}
          id={`premium-blog-${blockID}`}
        >
          <Masonry>
            {lastDisplay.map((post, i) => (
              <div
                className={`premium-blog-post-outer-container${i} premium-blog-post-outer-container`}
                key={i}
              >
                <div
                  className={`premium-blog-post-container premium-blog-skin-classic`}
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
                      {displayPostContent && (
                        <Excerpt post={post} attributes={attributes} />
                      )}
                      <Button post={post} attributes={attributes} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Masonry>
          <style
            dangerouslySetInnerHTML={{
              __html: [
                `.premium-blog-post-container  {`,
                ` background-color: #f5f5f5;`,
                " }",
                `.premium-blog-post-outer-container{`,
                `width: ${numOfColumns ? 100 / numOfColumns : 50}%;`,

                ` margin-bottom: ${rowGap + rowGapUnit};`,
                `  padding-right: calc( ${columnGap}px/2 );`,
                `   padding-left: calc( ${columnGap}px/2 );`,

                "}",
                `.premium-blog-content-wrapper {`,
                `text-align:${filterPosition}`,

                "}",
                `.premium-blog-thumbnail-overlay{`,

                `background:${overlayColor}`,
                "}",
                `.premium-blog-post-outer-container:hover img{`,
                `filter: brightness( ${bright}% ) contrast( ${contrast}% ) saturate( ${saturation}% ) blur( ${blur}px ) hue-rotate( ${hue}deg )`,
                "}",
                `.premium-blog-entry-title a{`,
                `font-size:${firstContentfontSize}${firstContentfontSizeType};`,
                `font-weight:${firstContentWeight};`,
                `font-style:${firstContentStyle};`,
                `text-transform:${firstContentUpper ? "uppercase" : null} ;`,
                `letter-spacing:${firstContentLetter}px ;`,
                `color:${typoColor};`,
                "}",
                `.premium-blog-entry-title a:hover{`,
                `color:${hoverColor};`,
                "}",
                `.premium-blog-meta-data{`,
                `font-size:${secondContentfontSize}${secondContentfontSizeType};`,
                `font-weight:${secondContentWeight};`,
                `font-style:${secondContentStyle};`,
                `text-transform:${secondContentUpper ? "uppercase" : null} ;`,
                `letter-spacing:${secondContentLetter}px ;`,
                `color:${metaColor};`,
                "}",
                `.premium-blog-meta-data:hover{`,
                `color:${linkColor}`,
                "}",
                `.premium-blog-meta-separtor{`,
                `color:${sepaColor};`,
                "}",
                `.premium-blog-content-wrapper-inner p{`,
                `font-size:${postContentfontSize}${postContentfontSizeType};`,
                `font-weight:${postContentWeight};`,
                `font-style:${postContentStyle};`,
                `text-transform:${postContentUpper ? "uppercase" : null} ;`,
                `letter-spacing:${postContentLetter}px ;`,
                `color:${textColor};`,
                "}",
              ].join("\n"),
            }}
          />
        </div>
        {pagination && (
          <div className="Premium-blog-footer">
            <ReactPaginate
              previousLabel={"← Previous"}
              nextLabel={"Next →"}
              pageCount={pageCount}
              onPageChange={handlePageClick}
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
export default MasonryClass;
