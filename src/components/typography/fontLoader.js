if (googlefonts === undefined) {
    var googlefonts = []
}
const { Component } = wp.element
import WebFont from "webfontloader"
const statuses = {
    inactive: "inactive",
    active: "active",
    loading: "loading",
}

const noop = () => { }

class WebfontLoader extends Component {

    constructor(props) {
        super(props)

        this.state = {
            status: undefined,
        }

        this.handleLoading = () => {
            this.setState({ status: statuses.loading })
        }

        this.addFont = (font) => {
            if (!googlefonts.includes(font)) {
                googlefonts.push(font)
            }
        }

        this.handleActive = () => {
            this.setState({ status: statuses.active })
        }

        this.handleInactive = () => {
            this.setState({ status: statuses.inactive })
        }

        this.loadFonts = () => {
            if (!googlefonts.includes(this.props.config.google.families[0])) {
                WebFont.load({
                    ...this.props.config,
                    loading: this.handleLoading,
                    active: this.handleActive,
                    inactive: this.handleInactive,
                })
                this.addFont(this.props.config.google.families[0])
            }
        }
    }

    componentDidMount() {
        this.loadFonts()
    }

    componentDidUpdate(prevProps, prevState) {
        const { onStatus, config } = this.props

        if (prevState.status !== this.state.status) {
            onStatus(this.state.status)
        }
        if (prevProps.config !== config) {
            this.loadFonts()
        }
    }

    render() {
        const { children } = this.props
        return children || null
    }
}



WebfontLoader.defaultProps = {
    onStatus: noop,
}

export default WebfontLoader