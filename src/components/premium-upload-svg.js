const { __ } = wp.i18n;
const { useEffect, Fragment, useState } = wp.element;
const { Tooltip, Dashicon } = wp.components;


export default function PremiumUploadSVG(props) {
    const {
        type,
        imageID,
        svgUrl,
        title,
        onRemoveImage,
        uploadSvg = () => { }
    } = props;

    const [state, setstate] = useState(null);

    useEffect(() => {
        if (svgUrl) {
            const data = addSVGAttributes(svgUrl);
            setstate(data);
            console.log('data: ', data);
        }
    }, [svgUrl]);

    const createElementFromHTMLString = htmlString => {
        const parentElement = document.getElementById('premium-icon-svg');
        console.log(parentElement)
        var new_str = htmlString.replace(/''/g, '');
        parentElement.innerHTML = new_str
        return parentElement
    }

    const addSVGAttributes = (svgHTML, attributesToAdd = {}, attributesToRemove = []) => {
        const svgNode = createElementFromHTMLString(svgHTML)
        if (!svgNode) {
            return ''
        }
        Object.keys(attributesToAdd).forEach(key => {
            svgNode.setAttribute(key, attributesToAdd[key])
        })

        attributesToRemove.forEach(key => {
            svgNode.removeAttribute(key)
        })
        return svgNode.outerHTML
    }

    return (
        <Fragment>
            {svgUrl && (
                <div className="premium-image-media">
                    <div id="premium-icon-svg" dangerouslySetInnerHTML={{ __html: svgUrl }}></div>
                    {/* <img src={svgUrl} className="premium-image-upload" /> */}
                    <div className="premium-image-actions">
                        <Tooltip text={__("Edit")}>
                            <button
                                className="premium-image-button"
                                aria-label={__("Edit")}
                                onClick={uploadSvg}
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
                </div>
            )}
            {!svgUrl && (
                <button
                    onClick={uploadSvg}
                    isSmall
                    isPrimary
                    className="premium-placeholder-image"
                >
                    {__('Upload SVG')}
                </button>
            )}
        </Fragment>
    );
}
