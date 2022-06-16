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
                                            <span
                                                aria-label={__("Edit")}
                                                className="fa fa-pencil"
                                            />
                                        </button>
                                    </Tooltip>
                                    <Tooltip text={__("Remove")}>
                                        <button
                                            className="premium-image-button"
                                            aria-label={__("Remove")}
                                            onClick={onRemoveImage}
                                            role="button"
                                        >
                                            <span
                                                aria-label={__("Close")}
                                                className="fa fa-trash-o"
                                            />
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
                                <span>{__("Insert Background ")}</span>
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
