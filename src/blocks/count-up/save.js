import classnames from 'classnames'
import {
    gradientBackground,
    filterJsCss,
} from '@pbg/helpers';
const { useBlockProps, InnerBlocks } = wp.blockEditor;

const save = props => {
    const { className } = props;
    const {
        blockId,
        flexDir,
        hideDesktop,
        hideTablet,
        hideMobile,
        boxShadow,
        border,
        background,
        variation,
        showVariation
    } = props.attributes;

    return (
        <div
            {...useBlockProps.save({
                className: classnames(
                    className,
                    `premium-countup__wrap ${blockId} premium-countup__${flexDir}`,
                    {
                        " premium-desktop-hidden": hideDesktop,
                        " premium-tablet-hidden": hideTablet,
                        " premium-mobile-hidden": hideMobile,
                    }
                ),
            })}
            style={filterJsCss({
                flexDirection: flexDir,
                boxShadow: `${boxShadow?.horizontal}px ${boxShadow?.vertical}px ${boxShadow?.blur}px ${boxShadow?.color} ${boxShadow?.position}`,
                borderStyle: border?.borderType,
                borderColor: border?.borderColor,
                ...gradientBackground(background)
            })}
        >
            {variation != {} && !showVariation &&
                <InnerBlocks.Content />
            }
        </div>
    );
};

export default save;