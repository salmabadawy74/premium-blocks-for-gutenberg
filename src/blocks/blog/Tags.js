const { __ } = wp.i18n;
class Tags extends React.Component {
  render() {
    const { post, attributes, tagList } = this.props;
    let tagObject = [];
    if (tagList) {
      tagList.map((tag, thisIndex) => {
        if (tag.id == post.tags[thisIndex]) {
          tagObject.push(tag);
        }
      });
    }
    if (tagObject.length > 0 && attributes.displayPostTags) {
      return (
        <div className={`premium-blog-post-tags-container`}>
          <i className={`fa fa-tags fa-fw`}></i>
          {tagObject.map((tag) => (
            <span>{tag.name + " ,  " }</span>
          ))}
        </div>
      );
    } else {
      return null;
    }
  }
}
export default Tags;
