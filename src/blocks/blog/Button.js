const { __ } = wp.i18n;

class Button extends React.Component {
  render() {
    const { post, attributes } = this.props;
    if (attributes.displayPostExcerpt === "Post Full Content") {
      return null;
    }
    if (attributes.excerptType === "Link") {
      let readMoreText = attributes.readMoreText
        ? attributes.readMoreText
        : __("Read More");
      return (
        (
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
        ),
        (
          <style
            dangerouslySetInnerHTML={{
              __html: [
                `.premium-blog-excerpt-link-wrap .premium-blog-excerpt-link{`,
                `font-size:${attributes.buttonfontSize}${attributes.buttonfontSizeType};`,
                `font-weight:${attributes.buttonWeight};`,
                `font-style:${attributes.buttonStyle};`,
                `text-transform:${
                  attributes.buttonUpper ? "uppercase" : null
                } ;`,
                `letter-spacing:${attributes.buttonLetter}px ;`,

                "}",
              ].join("\n"),
            }}
          />
        )
      );
    } else {
      return null;
    }
  }
}

export default Button;
