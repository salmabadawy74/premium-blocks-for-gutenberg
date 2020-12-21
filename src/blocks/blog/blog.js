const { decodeEntities } = wp.htmlEntities;
const { dateI18n, format, __experimentalGetSettings } = wp.date;

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
    const dateFormat = __experimentalGetSettings().formats.date;

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
                              <a>
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
                            style={{ display: "flex", gap: "5px" }}
                          >
                            <div
                              className={`premium-blog-post-author premium-blog-meta-data`}
                            >
                              {undefined == post.author_info
                                ? post.value
                                : [
                                    <i className="fa fa-user fa-fw"></i>,
                                    <a href={post.uagb_author_info.author_link}>
                                      {post.uagb_author_info.display_name}
                                    </a>,
                                  ]}
                            </div>
                            <span className={`premium-blog-meta-separtor`}>
                              .
                            </span>
                            <div
                              className={`premium-blog-post-time premium-blog-meta-data`}
                            >
                              {undefined == post.author_info
                                ? post.value
                                : [
                                    <time
                                      dateTime={format("c", post.date_gmt)}
                                      className="uagb-post__date"
                                    >
                                      <span className="dashicons-calendar dashicons"></span>
                                      {dateI18n(dateFormat, post.date_gmt)}
                                    </time>,
                                  ]}
                            </div>
                            <span className={`premium-blog-meta-separtor`}>
                              .
                            </span>
                            <div
                              className={`premium-blog-post-comments premium-blog-meta-data`}
                            >
                              {undefined == post.author_info
                                ? post.value
                                : [
                                    <i className="fa fa-comments-o fa-fw"></i>,
                                    `  ${
                                      post.uagb_comment_info === 0
                                        ? "NO Comments"
                                        : post.uagb_comment_info
                                    }`,
                                  ]}
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
              </div>
            </article>
          ))}
        </div>
      </div>
    );
  }
}
export default Blog;
