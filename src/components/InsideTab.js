const { Component, Fragment } = wp.element

class InsideTab extends Component {
    render() {
        const { children, onTabChange } = this.props
        onTabChange && onTabChange()
        return (
            <Fragment> {Array.isArray(children) ? children.map(item => item) : children} </Fragment>
        )
    }
}
export default InsideTab