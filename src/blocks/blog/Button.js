const { __ } = wp.i18n;

class Button extends React.Component {
  render() {
    const { post, attributes } = this.props;
    if (attributes.displayPostExcerpt === "Post Full Content") {
      return null;
    }
    if (attributes.displayPostContent && attributes.excerptType === "Link") {
      let readMoreText = attributes.readMoreText
        ? attributes.readMoreText
        : __("Read More");
      return (
        <div className={`premium-blog-excerpt-link-wrap`}>
          <a
            className={`premium-blog-excerpt-link elementor-button`}
            href={post.link}
            target={`_blank`}
            rel="noopener noreferrer"
          >
            {readMoreText}
          </a>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Button;
