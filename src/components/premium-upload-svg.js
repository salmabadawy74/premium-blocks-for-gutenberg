const { __ } = wp.i18n;
const { useEffect, Fragment, useState } = wp.element;
const { Tooltip, Dashicon } = wp.components;


export default function PremiumUploadSVG(props) {
    const {
        svgUrl,
        onRemoveSVG = () => { },
        uploadSvg = () => { }
    } = props;

    const [state, setstate] = useState(null);

    useEffect(() => {
        if (svgUrl) {
            const data = addSVGAttributes(svgUrl);
            setstate(data);
        }
    }, [svgUrl]);

    const createElementFromHTMLString = htmlString => {
        const parentElement = document.getElementById('premium-icon-svg');
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
                                onClick={onRemoveSVG}
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
                    <div class="premium-placeholder" role="button" tabindex="0"><svg viewBox="0 0 512 376" xmlns="http://www.w3.org/2000/svg"><path d="M0 0v376h512V0H0zm480 344H32V32h448v312z"></path><circle cx="409.1" cy="102.9" r="40.9"></circle><path d="M480 344H32l86.3-164.2 21.7 11.3 49-77.3 100 113.1 8.9-9.3 17.1 22.3 26-46.4 52.9 71.2 15.1-15.9z"></path></svg></div>
                </button>
            )}
        </Fragment>
    );
}