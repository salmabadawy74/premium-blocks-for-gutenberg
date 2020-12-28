const { decodeEntities } = wp.htmlEntities;
const { dateI18n, format, __experimentalGetSettings } = wp.date;
import Meta from "./meta";
const { __ } = wp.i18n;
let $blogElement;

class Blog extends React.Component {
  constructor() {
    super(...arguments);
  }
  componentDidMount() {}
  componentDidUpdate() {
    // $blogElement = document.querySelector(".premium-blog-wrap");
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
      postFilter,
      gridCheck,
      categoryFilter,
      offsetNum,
      sourceValue,

      numOfColumns,
      numOfPosts,
      displayStickyPosts,
      currentPost,
      featuredImage,
      hoverEffect,
      height,
      HeightU,
      postPosition,
      fullWidth,
      layoutValue,

      displayPostContent,
      displayPostExcerpt,
      displayPostDate,
      displayPostComment,
      displayPostCategories,
      displayPostTags,
      excerptType,
      readMoreText,
      displayPostAuthor,
      filterTabs,
      getTabsFrom,
      tabLabel,
      linkNewTab,
      filterPosition,
      displayPostImage,
      displayPostTaxonomy,
      imgSize,
      imgPosition,
      displayPostLink,
      newTab,
      ctaText,
      borderWidth,
      borderStyle,
      borderColor,
      borderHColor,
      borderRadius,
      btnVPadding,
      btnHPadding,
      align,
      columns,
      tcolumns,
      mcolumns,
      order,
      orderBy,
      categories,
      postsToShow,
      rowGap,
      columnGap,
      rowGapUnit,
    } = attributes;
    if ("Even" === layoutValue) {
      // let equalHeight = $blogElement.data("equal");
      //   forceEqualHeight();
    }
    function forceEqualHeight() {
      let heights = [];

      $blogElement
        .querySelector(".premium-blog-content-wrapper")
        .forEach(function (index, post) {
          let height = $(post).outerHeight;

          heights.push(height);
        });

      let maxHeight = Math.max.apply(null, heights);

      $blogElement.querySelector(
        ".premium-blog-content-wrapper"
      ).style.cssText = `height:${maxHeight}px`;
    }

    // Removing posts from display should be instant.
    const displayPosts =
      latestPosts.length > postsToShow
        ? latestPosts.slice(0, postsToShow)
        : latestPosts;
    const gridClasses = gridCheck ? "premium-blog-even" : "premium-blog-list";
    return (
      <div className={`premium-blog`}>
        <div
          className={`premium-blog-wrap ${gridClasses}`}
          data-layout={layoutValue}
          style={{ position: "relative" }}
        >
          {latestPosts.map((post, i) => (
            <div
              className={`premium-blog-post-outer-container`}
              key={i}
              // style={{ position: "absolute", left: "0", top: "0" }}
            >
              <div
                className={`premium-blog-post-container premium-blog-skin-modern`}
              >
                <div className={`premium-blog-content-wrapper empty-thumb`}>
                  <div className={`premium-blog-content-wrapper-inner`}>
                    <div
                      className={`premium-blog-inner-container`}
                      // style={{ flexDirection: "column" }}
                    >
                      <div className="premium-blog-entry-container">
                        <div className="premium-blog-entry-title">
                          <h2>
                            <a href={post.link}>
                              {undefined == post.title
                                ? post.value
                                : decodeEntities(post.title.rendered.trim()) ||
                                  __("(Untitled)")}
                            </a>
                          </h2>
                        </div>

                        <div
                          className="premium-blog-entry-meta"
                          //  style={{ display: "flex", flexWrap: "nowrap" }}
                        >
                          <Meta post={post} categoriesList={categoriesList} />
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
        </div>
      </div>
    );
  }
}
export default Blog;
