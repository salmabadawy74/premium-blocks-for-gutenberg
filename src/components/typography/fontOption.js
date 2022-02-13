const {
    useState,
    useEffect,
} = wp.element
import classnames from 'classnames'
import PremiumRangeControl from '../premium-range-control';
const { __ } = wp.i18n;




const FontOptions = (props) => {
    const { components,
        fontSize,
        fontSizeTablet,
        fontSizeMobile,
        onChangeSize,
        onChangeSizeTablet,
        onChangeSizeMobile,
        showUnit,
        onChangeSizeUnit,
        fontSizeType,
        line,
        onChangeLine,
        onChangeLineUnit,
        titleLineUnit,
        spacing,
        onChangeSpacing,
        onChangeLetterUnit,
        titleLetterUnit,
        style,
        onChangeStyle,
        textTransform,
        onChangeTextTransform,
        textDecoration,
        onChangeTextDecoration,


    } = props
    return (
        <ul className="premiumtypography-options" style={{ width: `100%` }}>
            {components.includes("size") && (
                <li className="customize-control-premiumslider">
                    <PremiumRangeControl
                        defaultValue={0}
                        label={__("Font Size")}

                        value={{
                            'desktop': fontSize,
                            'tablet': fontSizeTablet,
                            'mobile': fontSizeMobile,
                        }}

                        onChange={onChangeSize}
                        onChangeTablet={onChangeSizeTablet}
                        onChangeMobile={onChangeSizeMobile}
                        showUnit={showUnit}
                        responsive={true}
                        onChangeUnit={onChangeSizeUnit}
                        unit={fontSizeType}
                    />
                </li>
            )}
            {components.includes("line") && (
                <li className="customize-control-premiumslider">
                    <PremiumRangeControl
                        label={__("Line Height")}
                        value={line}
                        onChange={onChangeLine}
                        defaultValue={''}
                        showUnit={showUnit}
                        responsive={true}
                        onChangeUnit={onChangeLineUnit}
                        unit={titleLineUnit}
                    />
                </li>
            )}
            {components.includes("spacing") && (
                <li className="customize-control-premiumslider">
                    <PremiumRangeControl
                        label={__("Letter Spacing")}
                        value={spacing}
                        onChange={onChangeSpacing}
                        defaultValue={''}
                        showUnit={showUnit}
                        responsive={true}
                        onChangeUnit={onChangeLetterUnit}
                        unit={titleLetterUnit}
                    />
                </li>
            )}
            {components.includes("style") && (
                <li className="customize-control-premiumslider">
                    <SelectControl
                        label={__("Style")}
                        options={STYLE}
                        value={style}
                        onChange={onChangeStyle}

                    />
                </li>
            )}
            <li className="premiumtypography-variant">
                {components.includes("upper") && (
                    <ul className="premiumtext-transform">
                        {['capitalize', 'uppercase'].map((variant) => (
                            <li
                                key={variant}
                                onClick={() => onChangeTextTransform(variant)}
                                className={`${textTransform == variant ? 'active' : ''}`}
                                data-variant={variant}>
                                <i className="premiumtooltip-top">
                                    {variant}
                                </i>
                            </li>
                        ))}
                    </ul>
                )}
                <ul className="premiumtext-decoration">
                    {['line-through', 'underline'].map((variant) => (
                        <li
                            key={variant}
                            onClick={() => onChangeTextDecoration(variant)}
                            className={`${textDecoration == variant ? 'active' : ''}`}
                            data-variant={variant}>
                            <i className="premiumtooltip-top">
                                {variant}
                            </i>
                        </li>
                    ))}
                </ul>
            </li>
        </ul>
    )
}

export default FontOptions