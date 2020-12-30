const { decodeEntities } = wp.htmlEntities;
const { __ } = wp.i18n;

class Image extends React.Component {
  render() {
    const { post, attributes } = this.props;

    let target = attributes.newTab ? "_blank" : "_self";

    if (
      attributes.featuredImage &&
      undefined !== post.uagb_featured_image_src
    ) {
      var src = post.uagb_featured_image_src["medium"];

      return (
        <div className="premium-blog-thumb-effect-wrapper">
          <div
            className={`premium-blog-thumbnail-container premium-blog-${attributes.πhoverEffect}-effect`}
          >
            <img
              src={src[0]}
              alt={
                decodeEntities(post.title.rendered.trim()) || __("(Untitled)")
              }
            />
          </div>
          <div className="premium-blog-thumbnail-overlay">
            <a href={post.link} target={target} rel="noopener noreferrer" />
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Image;
