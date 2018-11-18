const imgURL = PremiumBlocksSettings.defaultAuthImg;

const { Component } = wp.element;

export default class DefaultImage extends Component {
  render() {
    return <img src={imgURL} />;
  }
}
