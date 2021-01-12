const { __ } = wp.i18n;
class Tags extends React.Component {
  render() {
    const { post, attributes, taxonomyList, categoriesList } = this.props;
    let tags = taxonomyList["post_tag"];
    console.log(tags, taxonomyList);
    let categoryObject = [];
    if (categoriesList) {
      categoriesList.map((item, thisIndex) => {
        if (post.categories && item.id == post.categories[thisIndex]) {
          categoryObject.push(item);
          //alert(item);
        }
      });
    }
    if (taxonomyList && attributes.displayPostTags) {
      return (
        <div className={`premium-blog-post-tags-container`}>
          <i className={`fa fa-tags fa-fw`}></i>
          {categoryObject.length === 0
            ? "Uncategorized"
            : categoryObject.map((category) => (
                <span>{category.name + " "}</span>
              ))}
        </div>
      );
    } else {
      return null;
    }
  }
}
export default Tags;
