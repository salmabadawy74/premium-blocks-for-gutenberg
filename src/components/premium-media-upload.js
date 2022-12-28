import DefaultImage from "./default-image";

const { __ } = wp.i18n;
const { Fragment } = wp.element;
const { Tooltip, Dashicon } = wp.components;
const { MediaUpload } = wp.blockEditor;

export default function PremiumMediaUpload(props) {
    const {
        type,
        imageID,
        imageURL,
        title,
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
                        <div className="premium-image-media">
                            {type === "image" ? <img src={imageURL} className="premium-image-upload" /> : <iframe src={imageURL} className="premium-image-upload" />}
                            <div className="premium-image-actions">
                                <Tooltip text={__("Edit")}>
                                    <button
                                        className="premium-image-button"
                                        aria-label={__("Edit")}
                                        onClick={open}
                                        role="button"
                                    >
                                        <span class="dashicons dashicons-edit"></span>                                    </button>
                                </Tooltip>
                                <Tooltip text={__("Remove")}>
                                    <button
                                        className="premium-image-button"
                                        aria-label={__("Remove")}
                                        onClick={onRemoveImage}
                                        role="button"
                                    >
                                        <span class="dashicons dashicons-trash"></span>                                    </button>
                                </Tooltip>
                            </div>
                        </div>
                    )}
                    {!imageURL && (
                        <div onClick={open} className={"premium-placeholder-image"}>
                            <div className={`premium-blocks-control-media__tools`}>
                                <div className={`premium-blocks-control-media__tool`}> <div class="premium-placeholder" role="button" tabindex="0"><svg viewBox="0 0 512 376" xmlns="http://www.w3.org/2000/svg"><path d="M0 0v376h512V0H0zm480 344H32V32h448v312z"></path><circle cx="409.1" cy="102.9" r="40.9"></circle><path d="M480 344H32l86.3-164.2 21.7 11.3 49-77.3 100 113.1 8.9-9.3 17.1 22.3 26-46.4 52.9 71.2 15.1-15.9z"></path></svg></div></div>
                            </div>
                        </div>
                    )}
                </Fragment>
            )}
        />
    );
}
