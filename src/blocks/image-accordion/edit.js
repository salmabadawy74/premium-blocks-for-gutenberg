import PremiumBorder from "../../components/premium-border";
import PremiumBoxShadow from "../../components/premium-box-shadow";
import PremiumFilters from "../../components/premium-filters";
import PremiumSizeUnits from "../../components/premium-size-units";
import PremiumTypo from "../../components/premium-typo";
import PremiumMarginR from "../../components/premium-margin-responsive";
import PremiumRange from "../../components/premium-range-responsive";
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const {
  PanelBody,
  RangeControl,
  SelectControl,
  Spinner,
  ToggleControl,
  TabPanel,
  Dashicon,
  TextControl,
    IconButton,
  Button
} = wp.components;
const {   InspectorControls,

    ColorPalette,
  
    MediaUpload } = wp.editor;
const { withSelect, select } = wp.data;
class edit extends Component
{
    constructor ()
    {
        super( ...arguments );
    }
    componentDidMount ()
    {
        this.props.setAttributes( { block_id: this.props.clientId } );
        this.props.setAttributes( { classMigrate: true } );
        const $style = document.createElement( "style" );
        $style.setAttribute( "id", "premium-post-style-" + this.props.clientId );
        document.head.appendChild( $style );
    }
    render ()
    {
        const {
            setAttributes,
      
            isSelected,
            clientId: blockID,
        } = this.props;
        const { locations,block_id } = this.props.attributes;
        const positionOptions = [
            { label: 'Center Center', value: 'center center' },
            { label: 'Center Left', value: 'center left' },
            { label: 'Center Right', value: 'center right' },
            { label: 'Top Center', value: 'top center' },
            { label: 'Top Left', value: 'top left' },
            { label: 'Top Right', value: 'top right' },
            { label: 'Bottom Center', value: 'bottom center' },
            { label: 'Bottom Left', value: 'bottom left' },
            { label: 'Bottom Right', value: 'bottom right' },
        ];
        const sizeOptions = [
            { label: 'Auto', value: 'auto' },
            { label: 'Contain', value: 'contain' },
            { label: 'Cover', value: 'cover' },
            { label: 'Custom', value: 'custom' },
        ];
        const repeatOptions = [
            { label: 'Repeat', value: 'repeat' },
            { label: 'No-repeat', value: 'no-repeat' },
            { label: 'Repeat-x', value: 'repeat-x' },
            { label: 'Repeat-y', value: 'repeat-y' },
        ];
        const onFileSelect = (img) => {
            setAttributes({
              imageURL: img.url,
              imageAlt: img.alt
            });
          };
      
            const handleAddLocation = () => {
                const locations = [ locations ];
                locations.push( {
                    address: '',
                } );
                setAttributes( { locations } );
            };
    
            const handleRemoveLocation = ( index ) => {
                const locations = [ locations ];
                locations.splice( index, 1 );
                setAttributes( { locations } );
            };   
            const handleLocationChange = ( address, index ) => {
                const locations = [ locations ];
                locations[ index ].address = address;
                setAttributes( { locations } );
            };          
            let locationFields,
			locationDisplay;
		if ( this.props.attributes.locations.length ) {
			locationFields = locations.map( ( location, index ) => {
				return <Fragment key={ index }>
                <MediaUpload
                onSelect={onFileSelect}
                value={locations.imageID}
                render={({ open }) => (
                <IconButton
                  className="premium-media-uplpad-btn"
                  label={__("Change Image")}
                  icon="edit"
                  onClick={open}
                >
                  {__("Change Image")}
                </IconButton>
              )}
            />
					<IconButton
						className="grf__remove-location-address"
						icon="no-alt"
						label="Delete location"
						onClick={ () => handleRemoveLocation( index ) }
					/>
				</Fragment>;
			} );

			locationDisplay = locations.map( ( location, index ) => {
				return <img
                id={`premium-image-${block_id}`}
                className={`premium-image-accordion`}
                alt={locations.imageAlt}
                src={locations.imageURL}
              />;
			} );
		}

        return [
            <InspectorControls key="1">
                <PanelBody title={ __( 'images' ) }>
                    { locationFields }
                    <Button
                        isDefault
                        onClick={handleAddLocation }
                    >
                        { __( 'Add Location' ) }
                    </Button>
                </PanelBody>
            </InspectorControls>,
            <div key="2" >
              {locationDisplay}
            </div>
        ];
    }
}
export default edit;