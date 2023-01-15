import classnames from 'classnames'
import {
    PremiumUpperQuote,
    PremiumLowerQuote
} from '@pbg/components';
import { filterJsCss, gradientBackground } from '@pbg/helpers';
const { InnerBlocks, useBlockProps } = wp.blockEditor;

const save = props => {

    const { className } = props;

    const {
        blockId,
        hideDesktop,
        hideTablet,
        hideMobile,
        quoteStyles,
        background,
        boxShadow
    } = props.attributes;

    return (
        <div
            {...useBlockProps.save({
                className: classnames(
                    className,
                    `premium-testimonial ${blockId} premium-testimonial__wrap`,
                    {
                        " premium-desktop-hidden": hideDesktop,
                        " premium-tablet-hidden": hideTablet,
                        " premium-mobile-hidden": hideMobile,
                    }
                ),
            })}
            style={filterJsCss({
                boxShadow: `${boxShadow?.horizontal}px ${boxShadow?.vertical}px ${boxShadow?.blur}px ${boxShadow?.color} ${boxShadow?.position}`,
                ...gradientBackground(background),
            })}
        >
            <div className={`premium-testimonial__container`}>
                <span className={`premium-testimonial__upper`}>
                    <PremiumUpperQuote
                        size={quoteStyles[0].quotSize}
                        color={quoteStyles[0].quotColor}
                        opacity={quoteStyles[0].quotOpacity}
                    />
                </span>
                <div
                    className={`premium-testimonial__content`}
                >
                    <InnerBlocks.Content />
                </div>
                <span className={`premium-testimonial__lower`}>
                    <PremiumLowerQuote
                        size={quoteStyles[0].quotSize}
                        color={quoteStyles[0].quotColor}
                        opacity={quoteStyles[0].quotOpacity}
                    />
                </span>
            </div>
        </div>
    );
};

export default save;