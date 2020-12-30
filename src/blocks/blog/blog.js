const { decodeEntities } = wp.htmlEntities;
const { dateI18n, format, __experimentalGetSettings } = wp.date;
import Meta from "./meta";
import Iamge from "./Image";
const { __ } = wp.i18n;
let $blogElement;

class Blog extends React.Component {
  constructor() {
    super(...arguments);
  }
  componentDidMount() {}
  componentDidUpdate() {
    $blogElement = document.querySelector(".premium-blog-wrap");
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
      columnGap,
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
      filterPostion,
      linkNewTab,
      layoutValue,
      postFilter,
      sizeType,
      size,
      sizeMobile,
      sizeTablet,
      imageSize

    } = attributes;
    if ("Even" === layoutValue) {
      // let equalHeight = $blogElement.data("equal");
      //  forceEqualHeight();
    }
    function forceEqualHeight() {
      $blogElement = document.querySelector(".premium-blog-wrap");
      let heights = [];

      $blogElement
        .querySelector(".premium-blog-content-wrapper")
        .forEach(function (index, post) {
          let height = post.outerHeight;
          console.log(document.outerHeight);
          heights.push(height);
        });

      let maxHeight = Math.max.apply(null, heights);
      console.log(heights);
      $blogElement.querySelector(
        ".premium-blog-content-wrapper"
      ).style.cssText = `height:${maxHeight}px`;
    }

    // Removing posts from display should be instant.
    const displayPosts =
      latestPosts.length > numOfPosts
        ? latestPosts.slice(0, numOfPosts)
        : latestPosts;
    const lastDisplay = displayPosts.slice(offsetNum);
    const gridClasses = gridCheck ? "premium-blog-even" : "premium-blog-list";
    console.log(latestPosts);
    return (
      <div className={`premium-blog`}>
        <div
          className={`premium-blog-wrap ${gridClasses}`}
          data-layout={layoutValue}
          style={{ position: "relative" }}
        >
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
                                : decodeEntities(post.title.rendered.trim()) ||
                                  __("(Untitled)")}
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
          <style
            dangerouslySetInnerHTML={{
              __html: [
                `.premium-blog-post-outer-container{`,
                `width: ${numOfColumns ? 100 / numOfColumns : 50}%;`,

                "}",
              ].join("\n"),
            }}
          />
        </div>
      </div>
    );
  }
}
export default Blog;
