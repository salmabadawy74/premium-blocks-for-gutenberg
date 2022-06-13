import classnames from 'classnames'
const { __ } = wp.i18n;
const { InnerBlocks } = wp.blockEditor;

const save = props => {
    const { className } = props;

    const {
        blockId,
        titleStyles,
        arrowStyles,
        descStyles,
        titleBorder,
        descBorder,
        titleTypography,
        descTypography,
        textShadow,
        titleTextShadow,
        hideDesktop,
        hideTablet,
        hideMobile,
    } = props.attributes;

    const loadStyles = () => {
        const styles = {};

        styles[`.${blockId} .premium-accordion__title_wrap`] = {
            'backgroundColor': titleStyles[0].titleBack,
            'border-style': titleBorder && titleBorder.borderType,
            'border-color': titleBorder && titleBorder.borderColor,
        };

        styles[`.${blockId} .premium-accordion__icon_wrap svg.premium-accordion__icon`] = {
            fill: arrowStyles[0].arrowColor,
            'background-color': arrowStyles[0].arrowBack,
            padding: arrowStyles[0].arrowPadding + "px",
            'border-radius': arrowStyles[0].arrowRadius + "px",
            width: `${arrowStyles[0].arrowSize}px`,
            height: `${arrowStyles[0].arrowSize}px`
        };

        styles[`.${blockId} .premium-accordion__title_wrap .premium-accordion__title_text`] = {
            color: titleStyles[0].titleColor,
            'font-style': titleTypography.fontStyle,
            'font-family': titleTypography.fontFamily,
            'font-weight': titleTypography.fontWeight,
            'letter-spacing': titleTypography.letterSpacing,
            'text-decoration': titleTypography.textDecoration,
            'text-transform': titleTypography.textTransform,
            'line-height': `${titleTypography.lineHeight}px`,
            'text-shadow': `${titleTextShadow.horizontal}px ${titleTextShadow.vertical}px ${titleTextShadow.blur}px ${titleTextShadow.color}`
        };

        styles[`.${blockId} .premium-accordion__desc_wrap`] = {
            'background-color': descStyles[0].descBack,
            'border-style': descBorder && descBorder.borderType,
            'border-color': descBorder && descBorder.borderColor,
            'text-shadow': `${textShadow.horizontal}px ${textShadow.vertical}px ${textShadow.blur}px ${textShadow.color}`
        };

        styles[`.${blockId} .premium-accordion__desc_wrap .premium-accordion__desc`] = {
            color: descStyles[0].descColor,
            'font-style': descTypography.fontStyle,
            'font-family': descTypography.fontFamily,
            'font-weight': descTypography.fontWeight,
            'letter-spacing': descTypography.letterSpacing,
            'text-decoration': descTypography.textDecoration,
            'text-transform': descTypography.textTransform,
            'line-height': `${descTypography.lineHeight}px`,
            'text-shadow': `${textShadow.horizontal}px ${textShadow.vertical}px ${textShadow.blur}px ${textShadow.color}`
        };
        let styleCss = '';

        for (const selector in styles) {
            const selectorStyles = styles[selector];
            const filteredStyles = Object.keys(selectorStyles).map(property => {
                const value = selectorStyles[property];
                const valueWithoutUnits = value.toString().replaceAll('px', '').replaceAll(/\s/g, '');
                if (value && !value.toString().includes('undefined') && valueWithoutUnits) {
                    return `${property}: ${value};`;
                }
            }).filter(style => !!style).join('\n');
            styleCss += `${selector}{
                ${filteredStyles}
            }\n`;
        }

        return styleCss;
    }

    const mainClasses = classnames(className, 'premium-accordion', blockId);

    return (
        <div className={`${mainClasses} ${hideDesktop} ${hideTablet} ${hideMobile}`}>
            <style
                dangerouslySetInnerHTML={{
                    __html: loadStyles()
                }}
            />
            <InnerBlocks.Content />
        </div>
    );
};
export default save;
