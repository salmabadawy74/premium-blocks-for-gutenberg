if (googlefonts === undefined) {
    var googlefonts = [];
}
const { Component } = wp.element;
import WebFont from "webfontloader";
const statuses = {
    inactive: "inactive",
    active: "active",
    loading: "loading",
};

const noop = () => {};

class WebfontLoader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: undefined,
            mounted: false,
        };

        this.handleLoading = () => {
            this.setState({ status: statuses.loading });
        };

        this.addFont = (font) => {
            if (!googlefonts.includes(font)) {
                googlefonts.push(font);
            }
        };

        this.handleActive = () => {
            this.setState({ status: statuses.active });
        };

        this.handleInactive = () => {
            this.setState({ status: statuses.inactive });
        };

        this.loadFonts = () => {
            if (this.state.mounted) {
                if (
                    !googlefonts.includes(this.props.config.google.families[0])
                ) {
                    WebFont.load({
                        ...this.props.config,
                        loading: this.handleLoading,
                        active: this.handleActive,
                        inactive: this.handleInactive,
                        context: frames["editor-canvas"],
                    });
                    this.addFont(this.props.config.google.families[0]);
                }
            }
        };
    }

    componentDidMount() {
        this.setState({ mounted: true });
        this.loadFonts();
    }

    componentDidUpdate(prevProps, prevState) {
        const { onStatus, config } = this.props;

        if (prevState.status !== this.state.status) {
            onStatus(this.state.status);
        }
        if (prevProps.config !== config) {
            this.loadFonts();
        }
    }
    componentWillUnmount() {
        this.setState({ mounted: false });
    }

    render() {
        const { children } = this.props;
        return children || null;
    }
}

WebfontLoader.defaultProps = {
    onStatus: noop,
};

export default WebfontLoader;
