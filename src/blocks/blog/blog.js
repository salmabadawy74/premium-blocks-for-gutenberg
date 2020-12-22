const { decodeEntities } = wp.htmlEntities;
const { dateI18n, format, __experimentalGetSettings } = wp.date;
import Meta from "./meta";
const { __ } = wp.i18n;
class Blog extends React.Component {
  render() {
    const {
      attributes,
      className,
      latestPosts,
      block_id,
      categoriesList,
    } = this.props;

    const {
      columns,
      tcolumns,
      mcolumns,
      imgPosition,
      postsToShow,
      paginationEventType,
      buttonText,
      paginationType,
    } = attributes;

    // Removing posts from display should be instant.
    const displayPosts =
      latestPosts.length > postsToShow
        ? latestPosts.slice(0, postsToShow)
        : latestPosts;

    return (
      <div className={`premium-blog`}>
        <div className={`premium-blog-wrap premium-blog-even`}>
          {latestPosts.map((post, i) => (
            <article
              key={i}
              style={{
                width: "50%",

                marginBottom: "5px",
                paddingRight: "calc( 5px/2 )",
                paddingLeft: "calc( 5px/2 )",
              }}
            >
              <div className={`premium-blog-post-outer-container`}>
                <div
                  className={`premium-blog-post-container premium-blog-skin-modern`}
                >
                  <div className={`premium-blog-content-wrapper empty-thumb`}>
                    <div className={`premium-blog-content-wrapper-inner`}>
                      <div
                        className={`premium-blog-inner-container`}
                        style={{ flexDirection: "column" }}
                      >
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

                          <div
                            className="premium-blog-entry-meta"
                            style={{ display: "flex", flexWrap: "nowrap" }}
                          >
                            <Meta post={post} categoriesList={categoriesList} />
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
              </div>
            </article>
          ))}
        </div>
      </div>
    );
  }
}
export default Blog;
