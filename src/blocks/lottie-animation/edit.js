import classnames from "classnames";

import Lottie from 'react-lottie';
import PremiumSizeUnits from "../../components/premium-size-units";

const { __ } = wp.i18n;

const { Component, Fragment } = wp.element;


const {
    InspectorControls,
    MediaUpload,
    ColorPalette,
    MediaPlaceholder
} = wp.blockEditor

const {
    PanelBody,
    RangeControl,
    Button,
    TextControl,
    ToggleControl,
    TabPanel,
    Dashicon,
    SelectControl,
    IconButton,
} = wp.components

class edit extends Component {

    constructor() {
        super( ...arguments );
        this.state = {
            direction: 1,
            loop: true
        }
    }

    componentDidMount () {
        const { setAttributes, clientId } = this.props;

        setAttributes( { block_id: clientId } );
        setAttributes( { classMigrate: true } );

        const $style = document.createElement( "style" )
        $style.setAttribute( "id", "lottie-style-" + clientId.substr( 0, 6 ) )
        document.head.appendChild( $style );

        this.onSelectLottieJSON = this.onSelectLottieJSON.bind( this );
    }

    componentDidUpdate ( prevProps, prevState ) {
        var element = document.getElementById( "lottie-style-" + this.props.clientId.substr( 0, 6 ) )

        if ( null !== element && undefined !== element ) {
            //element.innerHTML = styling( this.props )
        }
    }


    onSelectLottieJSON ( media ) {

        const { setAttributes } = this.props

        if ( !media || !media.url ) {
            setAttributes( { jsonLottie: null } )
            return
        }

        setAttributes( { jsonLottie: media } )
        setAttributes( { lottieURl: media.url } )

    }

    render () {
        const { attributes, setAttributes, className } = this.props;

        const {
            block_id,
            lottieURl,
            lottieJson,
            loop,
            reverse,
            speed,
            trigger,
            size,
            sizeUnit,
            rotate,
            align,
            link,
            url,
            backColor
        } = attributes


        let validJsonPath = 'invalid';
        if ( lottieURl && lottieURl.endsWith( '.json' ) ) {
            validJsonPath = 'valid'
        }

        if ( validJsonPath === 'invalid' ) {
            return (
                <div className="premium-lottie-animation-wrap">
                    <MediaPlaceholder
                        labels={{
                            title: __( 'Lottie Animation' ),
                            instructions: __( 'Allows you to add fancy animation i.e lottie to your website' )
                        }}
                        allowedTypes={[ 'application/json' ]}
                        accept={[ 'application/json' ]}
                        value={lottieJson}
                        onSelectURL={( value ) => setAttributes( { lottieURl: value } )}
                        onSelect={this.onSelectLottieJSON}
                    />
                </div>
            )
        }
        const mainClasses = classnames( className, 'premium-lottie-container' )
        return [
            <InspectorControls>
                <PanelBody
                    title={__( "General Settings" )}
                    className="premium-panel-body"
                    initialOpen={true}
                >
                    <ToggleControl
                        label={__( `loop` )}
                        checked={loop}
                        onChange={() => setAttributes( { loop: !loop } )}
                    />
                    <ToggleControl
                        label={__( `Reverse` )}
                        checked={reverse}
                        onChange={() => setAttributes( { reverse: !reverse } )}
                    />
                    <Fragment>
                        <p>{__( 'Animation Speed' )} </p>
                        <RangeControl
                            value={speed}
                            onChange={newValue => setAttributes( { speed: newValue } )}
                            min={1}
                            max={2.5}
                            step={0.1}
                        />
                    </Fragment>
                    <SelectControl
                        label={__( 'Trigger' )}
                        options={[
                            { value: 'none', label: __( "None" ) },
                            { value: "hover", label: __( "On Hover" ) },
                            { value: "click", label: __( "On Click" ) },
                            { value: "scroll", label: __( "Scroll" ) },
                        ]}
                        value={trigger}
                        onChange={newValue => setAttributes( { trigger: newValue } )}
                    />
                    <PremiumSizeUnits
                        activeUnit={sizeUnit}
                        units={[ "px", "em" ]}
                        onChangeSizeUnit={( value ) => setAttributes( { sizeUnit: value } )}
                    />
                    <RangeControl
                        label={__( "Size" )}
                        value={size}
                        onChange={( newValue ) => setAttributes( { size: newValue } )}
                        min={1}
                        max={800}
                        step={1}
                    />
                    <RangeControl
                        label={__( "Rotate (Degree)" )}
                        value={rotate}
                        min={-180}
                        max={180}
                        onChange={( newValue ) => setAttributes( { rotate: newValue } )}
                        step={1}
                    />
                    <h2> {__( "Alignment" )}</h2>
                    <IconButton
                        key={"left"}
                        icon="editor-alignleft"
                        label="Left"
                        onClick={() => setAttributes( { align: "left" } )}
                        aria-pressed={"left" === align}
                        isPrimary={"left" === align}
                    />
                    <IconButton
                        key={"center"}
                        icon="editor-aligncenter"
                        label="Right"
                        onClick={() =>
                            setAttributes( { align: "center" } )
                        }
                        aria-pressed={"center" === align}
                        isPrimary={"center" === align}
                    />
                    <IconButton
                        key={"right"}
                        icon="editor-alignright"
                        label="Right"
                        onClick={() => setAttributes( { align: "right" } )}
                        aria-pressed={"right" === align}
                        isPrimary={"right" === align}
                    />
                    <hr />
                    <ToggleControl
                        label={__( "Link" )}
                        checked={link}
                        onChange={() => setAttributes( { link: !link } )}
                    />
                    {link && <TextControl
                        label={__( "URL" )}
                        value={url}
                        onChange={( newURL ) => setAttributes( { url: newURL } )}
                    />}
                </PanelBody>

                <PanelBody
                title={__( "Style" )}
                className="premium-panel-body"
                initialOpen={false}
                >
                    <Fragment>
                        <p>Background Color </p>
                        <ColorPalette
                            value={backColor}
                            onChange={(newValue)=>setAttributes({backColor:newValue})}
                        />
                </Fragment>

                </PanelBody>
            </InspectorControls>,
            <div id={`premium-lottie-${ block_id }`} className={`premium-lottie-${ block_id } ${ mainClasses }`}>
                <Lottie
                    options={{
                        loop: loop,
                        path: lottieURl,
                        rendererSettings: {
                            preserveAspectRatio: 'xMidYMid',
                            className: "uagb-lottie-inner-wrap"
                        }
                    }}
                />
            </div>
        ]
    }
}
export default edit;