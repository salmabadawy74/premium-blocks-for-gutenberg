import { useBlockProps, RichText } from "@wordpress/block-editor";
import classnames from "classnames";
import { filterJsCss } from '@pbg/helpers';

export default function save({ attributes }) {
    const {
        blockId,
        hideDesktop,
        hideTablet,
        hideMobile,
        slashedPriceText,
        currencyText,
        priceText,
        dividerText,
        durationText,
        slashedColor,
        slashedBgColor,
        currencyColor,
        currencyBgColor,
        priceColor,
        priceBgColor,
        dividerColor,
        dividerBgColor,
        durationColor,
        durationBgColor,
    } = attributes;

    const blockProps = useBlockProps.save({
        className: classnames('premium-price', blockId, {
            ['premium-desktop-hidden']: hideDesktop,
            ['premium-tablet-hidden']: hideTablet,
            ['premium-mobile-hidden']: hideMobile,
        })
    })

    return <div {...blockProps}>
        <RichText.Content
            tagName="strike"
            value={slashedPriceText}
            className='premium-pricing-slash'
            style={filterJsCss({
                color: slashedColor,
                backgroundColor: slashedBgColor
            })}
        />
        <RichText.Content
            tagName="span"
            value={currencyText}
            className='premium-pricing-currency'
            style={filterJsCss({
                color: currencyColor,
                backgroundColor: currencyBgColor
            })}
        />
        <RichText.Content
            tagName="span"
            value={priceText}
            className='premium-pricing-val'
            style={filterJsCss({
                color: priceColor,
                backgroundColor: priceBgColor
            })}
        />
        <RichText.Content
            tagName="span"
            value={dividerText}
            className='premium-pricing-divider'
            style={filterJsCss({
                color: dividerColor,
                backgroundColor: dividerBgColor
            })}
        />
        <RichText.Content
            tagName="span"
            value={durationText}
            className='premium-pricing-dur'
            style={filterJsCss({
                color: durationColor,
                backgroundColor: durationBgColor
            })}
        />
    </div>;
}



