const { __ } = wp.i18n;
class Tags extends React.Component {
  render() {
    const { post, attributes, tagList } = this.props;
    let tagName = [];
    if (tagList) {
      tagList.map((tag, thisIndex) => {
        if (tag.id == post.tags[thisIndex]) {
          tagName.push(tag.name);
        }
      });
    }
    if (tagName.length > 0 && attributes.displayPostTags) {
      return (
        <div className={`premium-blog-post-tags-container`}>
          <i className={`fa fa-tags fa-fw`}></i>
        {tagName.join(',')}
        </div>
      );
    } else {
      return null;
    }
  }
}
export default Tags;
