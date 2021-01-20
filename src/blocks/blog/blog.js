import ReactPaginate from "react-paginate";
import Meta from "./meta";
import Image from "./Image";
import { Fragment } from "react";
import Button from "./Button";
import Excerpt from "./Excerpt";
import Tags from "./Tags";

const { decodeEntities } = wp.htmlEntities;
const { dateI18n, format, __experimentalGetSettings } = wp.date;

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
      tagList,
      setAttributes,
    } = this.props;

    const { __ } = wp.i18n;

    const {
      block_id,
      gridCheck,
      numOfPosts,
      offsetNum,
      layoutValue,
      pagination,
      paginationMarkup,
    } = attributes;
    let lastDisplay;
    const gridClasses = gridCheck ? "premium-blog-even" : "premium-blog-list";
    const displayPosts =
      latestPosts.length > numOfPosts
        ? latestPosts.slice(0, numOfPosts)
        : latestPosts;

    lastDisplay = displayPosts.slice(offsetNum);

    const equalHeight = layoutValue === "Even" ? "equal-Height" : null;

    return (
      <Fragment>
        <div
          className={`premium-blog-${block_id}`}
          id={`premium-blog-${block_id}`}
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
                    className={`premium-blog-content-wrapper empty-thumb ${equalHeight}`}
                    style={{ height: `${100}%` }}
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
                      <Tags
                        tagList={tagList}
                        attributes={attributes}
                        post={post}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {pagination && (
          <div
            dangerouslySetInnerHTML={{ __html: paginationMarkup }}
            className="uagb-post-pagination-wrap"
          ></div>
        )}
      </Fragment>
    );
  }
}
export default Blog;
