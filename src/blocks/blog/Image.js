const { decodeEntities } = wp.htmlEntities;
const { __ } = wp.i18n;

class Image extends React.Component {
  render() {
    const { post, attributes } = this.props;
    let target = attributes.newTab ? "_blank" : "_self";
    if (
      attributes.featuredImage &&
      undefined !== post.uagb_featured_image_src &&
      attributes.imageSize &&
      post.uagb_featured_image_src[attributes.imageSize]
    ) {
      var src = post.uagb_featured_image_src[attributes.imageSize];
      return (
        <div className="premium-blog-thumb-effect-wrapper">
          <div
            className={`premium-blog-thumbnail-container premium-blog-${attributes.hoverEffect}-effect`}
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
          <style
            dangerouslySetInnerHTML={{
              __html: [
                `.premium-blog-thumb-effect-wrapper img{`,
                `
               height:${attributes.height}${attributes.HeightU} !important; 
               `,
                "}",
              ].join("\n"),
            }}
          />
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Image;
