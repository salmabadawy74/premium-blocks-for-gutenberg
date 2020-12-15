componentDidMount() {
  const { attributes, setAttributes, clientId } = this.props;
  const { setAttributes, clientId } = this.props;
  setAttributes({ id: clientId });

  console.log(clientId);
}

componentDidUpdate() {
  setImmediate(() => {

    scrollElement = document.getElementById(`${this.props.clientId}`);

    scrollOverlay = scrollElement.querySelector(
      ".premium-image-scroll-overlay"
    scrollElement = document.getElementById(
      `premium-scroll-${this.props.clientId}`
    );
    scrollVertical = scrollElement.querySelector(
      ".premium-image-scroll-vertical"
    );
    imageScroll = scrollElement.querySelector(".image-scroll");

    imageScroll = scrollElement.querySelector(".premium-image-scroll");
  }, 10);
}