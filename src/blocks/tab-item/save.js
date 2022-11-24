import { useBlockProps } from "@wordpress/block-editor";
import classnames from "classnames";
import { filterJsCss, generateCss, gradientBackground } from '@pbg/helpers';
import { InnerBlocks } from '@wordpress/block-editor';
export default function save({ attributes }) {
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
        hoverColor
    } = attributes;

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

    return <div {...blockProps}>
        <style>{loadStyles()}</style>
        <div
			className={ `premium-tabs__body-container premium-inner-tab-${ blockId }` }
			aria-labelledby={ `premium-tabs__tab${ blockId }` }
		>
			<InnerBlocks.Content />
		</div>
    </div>;
}



