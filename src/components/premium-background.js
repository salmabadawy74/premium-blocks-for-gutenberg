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
            label: __("Top Left", 'premium-blocks-for-gutenberg'),
        },
        {
            value: "top center",
            label: __("Top Center", 'premium-blocks-for-gutenberg')
        },
        {
            value: "top right",
            label: __("Top Right", 'premium-blocks-for-gutenberg')
        },
        {
            value: "center left",
            label: __("Center Left", 'premium-blocks-for-gutenberg')
        },
        {
            value: "center center",
            label: __("Center Center", 'premium-blocks-for-gutenberg')
        },
        {
            value: "center right",
            label: __("Center Right", 'premium-blocks-for-gutenberg')
        },
        {
            value: "bottom left",
            label: __("Bottom Left", 'premium-blocks-for-gutenberg')
        },
        {
            value: "bottom center",
            label: __("Bottom Center", 'premium-blocks-for-gutenberg')
        },
        {
            value: "bottom right",
            label: __("Bottom Right", 'premium-blocks-for-gutenberg')
        },
    ];

    const REPEAT = [
        {
            value: "no-repeat",
            label: __("No Repeat", 'premium-blocks-for-gutenberg'),
        },
        {
            value: "repeat",
            label: __("Repeat", 'premium-blocks-for-gutenberg'),
        },
        {
            value: "repeat-x",
            label: __("Repeat Horizontally", 'premium-blocks-for-gutenberg'),
        },
        {
            value: "repeat-y",
            label: __("Repeat Vertically", 'premium-blocks-for-gutenberg'),
        },
    ];

    const SIZE = [
        {
            value: "auto",
            label: __("Auto", 'premium-blocks-for-gutenberg'),
        },
        {
            value: "cover",
            label: __("Cover", 'premium-blocks-for-gutenberg'),
        },
        {
            value: "contain",
            label: __("Contain", 'premium-blocks-for-gutenberg'),
        },
    ];

    return type === "color" ? (
        <Fragment>
            <AdvancedPopColorControl
                label={__("Background Color", 'premium-blocks-for-gutenberg')}
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
                                    <Tooltip text={__("Edit", 'premium-blocks-for-gutenberg')}>
                                        <button
                                            className="premium-image-button"
                                            aria-label={__("Edit", 'premium-blocks-for-gutenberg')}
                                            onClick={open}
                                            role="button"
                                        >
                                            <span
                                                aria-label={__("Edit", 'premium-blocks-for-gutenberg')}
                                                className="fa fa-pencil"
                                            />
                                        </button>
                                    </Tooltip>
                                    <Tooltip text={__("Remove", 'premium-blocks-for-gutenberg')}>
                                        <button
                                            className="premium-image-button"
                                            aria-label={__("Remove", 'premium-blocks-for-gutenberg')}
                                            onClick={onRemoveImage}
                                            role="button"
                                        >
                                            <span
                                                aria-label={__("Close", 'premium-blocks-for-gutenberg')}
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
                                <span>{__("Insert Background ", 'premium-blocks-for-gutenberg')}</span>
                            </div>
                        )}
                    </Fragment>
                )}
            />
            {imageURL && (
                <Fragment>
                    <SelectControl
                        label={__("Position", 'premium-blocks-for-gutenberg')}
                        options={POSITION}
                        value={backgroundPosition}
                        onChange={onChangeBackPos}
                    />
                    <SelectControl
                        label={__("Repeat", 'premium-blocks-for-gutenberg')}
                        options={REPEAT}
                        value={backgroundRepeat}
                        onChange={onchangeBackRepeat}
                    />
                    <SelectControl
                        label={__("Size", 'premium-blocks-for-gutenberg')}
                        options={SIZE}
                        value={backgroundSize}
                        onChange={onChangeBackSize}
                    />
                    <ToggleControl
                        label={__("Fixed Background", 'premium-blocks-for-gutenberg')}
                        checked={fixed}
                        onChange={onChangeFixed}
                    />
                </Fragment>
            )}
        </Fragment>
    );
}
