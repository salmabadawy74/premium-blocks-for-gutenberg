export default class PbgIcon extends wp.element.Component {
  shouldComponentUpdate(nextProps) {
    return this.props.icon !== nextProps.icon;
  }

  render() {
    const { icon } = this.props;

    console.log(icon);
    return <i className={`pbg-${icon}-block`} aria-hidden="true" />;
  }
}
