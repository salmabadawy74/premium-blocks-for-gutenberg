const { __ } = wp.i18n;

const { Fragment } = wp.element;

const {
    SelectControl,
    ToggleControl,
    Tooltip,
    Dashicon,
} = wp.components;

const { MediaUpload } = wp.blockEditor;
import AdvancedPopColorControl from './Color Control/ColorComponent'


export default function PremiumBackground(props) {
    const {
        type,
        colorValue,
        imageID,
        imageURL,
        backgroundPosition,
        backgroundRepeat,
        backgroundSize,
        fixed,
        onChangeColor = () => { },
        onSelectMedia = () => { },
        onRemoveImage = () => { },
        onChangeBackPos = () => { },
        onchangeBackRepeat = () => { },
        onChangeBackSize = () => { },
        onChangeFixed = () => { },
    } = props;

    const POSITION = [
        {
            value: "top left",
            label: __("Top Left"),
        },
        {
            value: "top center",
            label: __("Top Center")
        },
        {
            value: "top right",
            label: __("Top Right")
        },
        {
            value: "center left",
            label: __("Center Left")
        },
        {
            value: "center center",
            label: __("Center Center")
        },
        {
            value: "center right",
            label: __("Center Right")
        },
        {
            value: "bottom left",
            label: __("Bottom Left")
        },
        {
            value: "bottom center",
            label: __("Bottom Center")
        },
        {
            value: "bottom right",
            label: __("Bottom Right")
        },
    ];

    const REPEAT = [
        {
            value: "no-repeat",
            label: __("No Repeat"),
        },
        {
            value: "repeat",
            label: __("Repeat"),
        },
        {
            value: "repeat-x",
            label: __("Repeat Horizontally"),
        },
        {
            value: "repeat-y",
            label: __("Repeat Vertically"),
        },
    ];

    const SIZE = [
        {
            value: "auto",
            label: __("Auto"),
        },
        {
            value: "cover",
            label: __("Cover"),
        },
        {
            value: "contain",
            label: __("Contain"),
        },
    ];

    return type === "color" ? (
        <Fragment>
            <AdvancedPopColorControl
                label={__("Background Color", '')}
                colorValue={colorValue}
                colorDefault={''}
                onColorChange={onChangeColor}
            />
        </Fragment>
    ) : (
        <Fragment>
            <MediaUpload
                allowedTypes={["image"]}
                onSelect={onSelectMedia}
                type="image"
                value={imageID}
                render={({ open }) => (
                    <Fragment>
                        {imageURL && (
                            <span className="premium-image-media">
                                <img
                                    src={imageURL}
                                    className="premium-image-upload"
                                />
                                <div className="premium-image-actions">
                                    <Tooltip text={__("Edit")}>
                                        <button
                                            className="premium-image-button"
                                            aria-label={__("Edit")}
                                            onClick={open}
                                            role="button"
                                        >
                                            <span class="dashicons dashicons-edit"></span>
                                        </button>
                                    </Tooltip>
                                    <Tooltip text={__("Remove")}>
                                        <button
                                            className="premium-image-button"
                                            aria-label={__("Remove")}
                                            onClick={onRemoveImage}
                                            role="button"
                                        >
                                            <span class="dashicons dashicons-trash"></span>
                                        </button>
                                    </Tooltip>
                                </div>
                            </span>
                        )}
                        {!imageURL && (
                            <div
                                onClick={open}
                                className={"premium-placeholder-image"}
                            >
                                <Dashicon icon="insert" />
                                <span className='premium-placeholder-image-insert'><div class="premium-placeholder" role="button" tabindex="0"><svg viewBox="0 0 512 376" xmlns="http://www.w3.org/2000/svg"><path d="M0 0v376h512V0H0zm480 344H32V32h448v312z"></path><circle cx="409.1" cy="102.9" r="40.9"></circle><path d="M480 344H32l86.3-164.2 21.7 11.3 49-77.3 100 113.1 8.9-9.3 17.1 22.3 26-46.4 52.9 71.2 15.1-15.9z"></path></svg></div></span>
                            </div>
                        )}
                    </Fragment>
                )}
            />
            {imageURL && (
                <Fragment>
                    <SelectControl
                        label={__("Position")}
                        options={POSITION}
                        value={backgroundPosition}
                        onChange={onChangeBackPos}
                    />
                    <SelectControl
                        label={__("Repeat")}
                        options={REPEAT}
                        value={backgroundRepeat}
                        onChange={onchangeBackRepeat}
                    />
                    <SelectControl
                        label={__("Size")}
                        options={SIZE}
                        value={backgroundSize}
                        onChange={onChangeBackSize}
                    />
                    <ToggleControl
                        label={__("Fixed Background")}
                        checked={fixed}
                        onChange={onChangeFixed}
                    />
                </Fragment>
            )}
        </Fragment>
    );
}
