const imgURL = PremiumBlocksSettings.defaultAuthImg;

const {
    Component
} = wp.element ;

export default class DefaultImage extends Component {
    
    render() {
        const {
            className
        } = this.props;
        
        return (
            
            <img src={imgURL}/>

        );
    }
   
}