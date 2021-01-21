import Masonry from "react-masonry-component";
const { decodeEntities } = wp.htmlEntities;
const { dateI18n, format, __experimentalGetSettings } = wp.date;
import ReactPaginate from "react-paginate";

import Meta from "./meta";
import Iamge from "./Image";
import { Fragment } from "react";
import Excerpt from "./Excerpt";
import Button from "./Button";
import Tags from "./Tags";

class MasonryClass extends React.Component {
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
      setAttributes,
    } = this.props;
    const { __ } = wp.i18n;
    const {
      block_id,
      numOfPosts,
      offsetNum,
      displayPostContent,
      gridCheck,
      pagination,
      paginationMarkup,
    } = attributes;
    let lastDisplay;
    const gridClasses = gridCheck ? "premium-blog-even" : "premium-blog-list";
    // Removing posts from display should be instant.
    const displayPosts =
      latestPosts.length > numOfPosts
        ? latestPosts.slice(0, numOfPosts)
        : latestPosts;
    lastDisplay = displayPosts.slice(offsetNum);

    return (
      <Fragment>
        <div
          className={`premium-blog-${block_id}`}
          id={`premium-blog-${block_id}`}
        >
          <Masonry>
            {lastDisplay.map((post, i) => (
              <div
                className={` premium-blog-post-outer-container ${gridClasses}`}
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
                      <Tags
                        post={post}
                        attributes={attributes}
                        TagList={TagList}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Masonry>
          {pagination && (
            <div
              dangerouslySetInnerHTML={{ __html: paginationMarkup }}
              className="pbg-post-pagination-wrap"
            ></div>
          )}
        </div>
      </Fragment>
    );
  }
}
export default MasonryClass;
