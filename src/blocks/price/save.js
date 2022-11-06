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
        slashedTypography,
        slashedColor,
        slashedBgColor,
        currencyTypography,
        currencyColor,
        currencyBgColor,
        priceTypography,
        priceColor,
        priceBgColor,
        dividerTypography,
        dividerColor,
        dividerBgColor,
        durationTypography,
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
                backgroundColor: slashedBgColor,
                fontStyle: slashedTypography?.fontStyle,
                fontFamily: slashedTypography?.fontFamily,
                fontWeight: slashedTypography?.fontWeight,
                textDecoration: slashedTypography?.textDecoration,
                textTransform: slashedTypography?.textTransform,
            })}
        />
        <RichText.Content
            tagName="span"
            value={currencyText}
            className='premium-pricing-currency'
            style={filterJsCss({
                color: currencyColor,
                backgroundColor: currencyBgColor,
                fontStyle: currencyTypography?.fontStyle,
                fontFamily: currencyTypography?.fontFamily,
                fontWeight: currencyTypography?.fontWeight,
                textDecoration: currencyTypography?.textDecoration,
                textTransform: currencyTypography?.textTransform,
            })}
        />
        <RichText.Content
            tagName="span"
            value={priceText}
            className='premium-pricing-val'
            style={filterJsCss({
                color: priceColor,
                backgroundColor: priceBgColor,
                fontStyle: priceTypography?.fontStyle,
                fontFamily: priceTypography?.fontFamily,
                fontWeight: priceTypography?.fontWeight,
                textDecoration: priceTypography?.textDecoration,
                textTransform: priceTypography?.textTransform,
            })}
        />
        <RichText.Content
            tagName="span"
            value={dividerText}
            className='premium-pricing-divider'
            style={filterJsCss({
                color: dividerColor,
                backgroundColor: dividerBgColor,
                fontStyle: dividerTypography?.fontStyle,
                fontFamily: dividerTypography?.fontFamily,
                fontWeight: dividerTypography?.fontWeight,
                textDecoration: dividerTypography?.textDecoration,
                textTransform: dividerTypography?.textTransform,
            })}
        />
        <RichText.Content
            tagName="span"
            value={durationText}
            className='premium-pricing-dur'
            style={filterJsCss({
                color: durationColor,
                backgroundColor: durationBgColor,
                fontStyle: durationTypography?.fontStyle,
                fontFamily: durationTypography?.fontFamily,
                fontWeight: durationTypography?.fontWeight,
                textDecoration: durationTypography?.textDecoration,
                textTransform: durationTypography?.textTransform,
            })}
        />
    </div>;
}



