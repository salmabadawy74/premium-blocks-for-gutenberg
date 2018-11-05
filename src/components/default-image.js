const defaultImageURL = '../assets/img/author.jpg';

const {
    Component
} = wp.element ;

export default class DefaultImage extends Component {
    
    render() {
        console.log(defaultImageURL);
        let blockClass = this.props.attributes;
        
        return (
            <img src={defaultImageURL}/>
        );
    }
   
}