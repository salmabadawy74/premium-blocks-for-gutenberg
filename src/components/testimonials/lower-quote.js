const {
    Component
} = wp.element ;

export default class PremiumUpperQuote extends Component {
    
    shouldComponentUpdate( nextProps ) {
		return (
			this.props.size !== nextProps.size || this.props.color !== nextProps.color
		);
	}
    
    render() {
        const {
            size,
            color
        } = this.props;
        
        return (
            <svg style={{width: size+'em'}} aria-hidden="true" data-prefix="fas" data-icon="quote-right" class="svg-inline--fa fa-quote-right fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill={`${color}`} d="M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z"></path></svg>
        );
    }
   
}