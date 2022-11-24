import { useBlockProps, InnerBlocks, RichText } from "@wordpress/block-editor";
import classnames from "classnames";
import { filterJsCss, generateCss, gradientBackground } from '@pbg/helpers';

export default function save(props) {
    const {
        blockId,
        hideDesktop,
        hideTablet,
        hideMobile,
        color,
        boxShadow,
        typography,
        border,
        background,
        hoverColor,
        tabHeaders,
        tabActive
    } = props.attributes;

    const blockProps = useBlockProps.save({
        className: classnames(blockId, {
            ['premium-desktop-hidden']: hideDesktop,
            ['premium-tablet-hidden']: hideTablet,
            ['premium-mobile-hidden']: hideMobile,
        }),
        style: filterJsCss({
            color: color,
            boxShadow: `${boxShadow?.horizontal}px ${boxShadow?.vertical}px ${boxShadow?.blur}px ${boxShadow?.color} ${boxShadow?.position}`,
            borderStyle: border?.borderType,
            borderColor: border?.borderColor,
            fontFamily: typography?.fontFamily,
            fontStyle: typography?.fontStyle,
            fontWeight: typography?.fontWeight,
            textDecoration: typography?.textDecoration,
            textTransform: typography?.textTransform,
            ...gradientBackground(background)
        })
    })

    const loadStyles = () => {
        const styles = {};
        styles[`.${blockId}:hover`] = {
            "color": `${hoverColor}!important`
        }

        return generateCss(styles);
    };

    return  <div {...blockProps}>
        <style>{loadStyles()}</style>
            <ul className={ `premium-tabs__panel` } role="tablist">
                { tabHeaders.map( ( header, index ) => (
                    <li
                        key={ index }
                        className={ `premium-tab ${
                            tabActive === index
                                ? 'premium-tabs__active'
                                : ''
                        }` }
                        role='none' 
                    >
                        <a
                            className={ `premium-tabs-list` }
                            data-tab={ index }
                            role='tab'
                        >
                            <RichText.Content
                                value={ header }
                            />
                        </a>
                    </li>
                ) ) }
            </ul>
            <div className="premium-tabs__body-wrap">
                <InnerBlocks.Content />
            </div>
        </div>
}



