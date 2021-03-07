const { __ } = wp.i18n;

const { Fragment } = wp.element;

const { Tooltip, Dashicon } = wp.components;

const { MediaUpload } = wp.blockEditor;

export default function PremiumMediaUpload(props) {
    const {
        type,
        imageID,
        imageURL,
        onSelectMedia = () => { },
        onRemoveImage = () => { },
    } = props;
    return (
        <MediaUpload
            allowedTypes={[`${type}`]}
            onSelect={onSelectMedia}
            type={type}
            value={imageID}
            render={({ open }) => (
                <Fragment>
                    {imageURL && (
                        <span className="premium-image-media">

                            {type === "image" ? <img src={imageURL} className="premium-image-upload" /> : <iframe src={imageURL} className="premium-image-upload" />}
                            <div className="premium-image-actions">
                                <Tooltip text={__("Edit")}>
                                    <button
                                        className="premium-image-button"
                                        aria-label={__("Edit")}
                                        onClick={open}
                                        role="button"
                                    >
                                        <span aria-label={__("Edit")} className="fa fa-pencil" />
                                    </button>
                                </Tooltip>
                                <Tooltip text={__("Remove")}>
                                    <button
                                        className="premium-image-button"
                                        aria-label={__("Remove")}
                                        onClick={onRemoveImage}
                                        role="button"
                                    >
                                        <span aria-label={__("Close")} className="fa fa-trash-o" />
                                    </button>
                                </Tooltip>
                            </div>
                        </span>
                    )}
                    {!imageURL && (
                        <div onClick={open} className={"premium-placeholder-image"}>
                            <Dashicon icon="insert" />
                            <span>{__("Insert")}</span>
                        </div>
                    )}
                </Fragment>
            )}
        />
    );
}
