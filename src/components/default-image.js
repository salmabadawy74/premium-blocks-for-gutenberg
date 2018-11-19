const placeHolder = PremiumBlocksSettings.defaultAuthImg;

const { Component } = wp.element;

export default class DefaultImage extends Component {
  render() {
    return <img src={placeHolder} />;
  }
}
