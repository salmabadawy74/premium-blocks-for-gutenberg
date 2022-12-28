import classnames from 'classnames'
import { filterJsCss, gradientBackground, generateCss } from '@pbg/helpers';

const { InnerBlocks, useBlockProps } = wp.blockEditor;

const save = props => {

    const { className } = props;

    const {
        blockId,
        hideDesktop,
        hideTablet,
        hideMobile,
        containerBorder,
        containerBackground,
        containerShadow,
        containerHoverShadow,
        variation,
        showVariation
    } = props.attributes;

    const loadStyles = () => {
        const styles = {};
        styles[`.${blockId}:hover`] = {
            'box-shadow': `${containerHoverShadow.horizontal}px ${containerHoverShadow.vertical}px ${containerHoverShadow.blur}px ${containerHoverShadow.color} ${containerHoverShadow.position} !important`,
        };
        return generateCss(styles);

    }

    return (
        <div
            {...useBlockProps.save({
                className: classnames(
                    className,
                    blockId,
                    'premium-icon-box',
                    {
                        " premium-desktop-hidden": hideDesktop,
                        " premium-tablet-hidden": hideTablet,
                        " premium-mobile-hidden": hideMobile,
                    }
                ),
            })}
            style={filterJsCss({
                borderStyle: containerBorder.borderType,
                borderColor: containerBorder.borderColor,
                boxShadow: `${containerShadow.horizontal}px ${containerShadow.vertical}px ${containerShadow.blur}px ${containerShadow.color} ${containerShadow.position}`,
                ...gradientBackground(containerBackground),
            })}
        >
            {variation != {} && !showVariation &&
                <InnerBlocks.Content />
            }
            <style>{loadStyles()}</style>
        </div>
    );
};

export default save;