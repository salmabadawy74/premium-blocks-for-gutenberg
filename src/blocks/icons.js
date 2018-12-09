export default class PbgIcon extends wp.element.Component {
  shouldComponentUpdate(nextProps) {
    return this.props.icon !== nextProps.icon;
  }

  render() {
    const { icon } = this.props;

    return <i className={`pbg-${icon}-block`} aria-hidden="true" />;
  }
}
