const { dispatch } = wp.data;
const { __ } = wp.i18n;
const {
    PanelBody,
    ToggleControl,
} = wp.components;
const { Fragment,Component } = wp.element;

export default class PremiumResponsiveTabs extends Component{
     
    constructor( props ) {
        super( props );
        this.state = {
            Desktop: this.props.Desktop || false,
            Tablet: this.props.Tablet || false,
            Mobile: this.props.Mobile || false
            
        };


    }



    render () {
        const { Desktop, Tablet, Mobile } = this.state;
            return (
            
                <PanelBody
                title={__("Responsive")}
                className="premium-panel-body"
                initialOpen={false}
                >
                     <ToggleControl
                        label={__( 'Hide in Desktop' )}
                        checked={Desktop}
                        onChange={this.props.onChangeDevice('Desktop')}
                    /> 

                    <ToggleControl
                    label={__( 'Hide in Tablet' )}
                    checked={Tablet}
                        onChange={this.props.onChangeDevice( 'tablet' )}
                    />

                    <ToggleControl
                    label={__( 'Hide in Mobile' )}
                    checked={Mobile}
                     onChange={this.props.onChangeDevice( 'Mobile' )}
                    />
                    
                    </PanelBody>
                
            )
        }
    }