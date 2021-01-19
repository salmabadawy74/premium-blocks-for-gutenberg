class Excerpt extends React.Component {
  render() {
    const { post, attributes } = this.props;
    if (post.uagb_excerpt == undefined) {
      return null;
    }
    const words = post.uagb_excerpt.split(" ");
    let excerpt = post.uagb_excerpt;
    let exLength = attributes.excerptLength ? attributes.excerptLength : 25;
    if (exLength >= words.length) {
      excerpt = post.uagb_excerpt;
    } else {
      const truncated = words.slice(0, exLength);
      excerpt = truncated.join(" ");
      excerpt += " ...";
    }
    if (
      attributes.displayPostContent &&
      attributes.displayPostExcerpt === "Post Excerpt"
    ) {
      return <p dangerouslySetInnerHTML={{ __html: excerpt }} />;
    } else if (
      attributes.displayPostExcerpt &&
      attributes.displayPostExcerpt === "Post Full Content"
    ) {
      return (
        <p dangerouslySetInnerHTML={{ __html: post.content.raw.trim() }} />
      );
    } else {
      return null;
    }
  }
}
export default Excerpt;
