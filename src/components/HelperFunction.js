export const gradientBackground = (value) => {
    const { backgroundType, backgroundColor, backgroundRepeat, backgroundPosition, fixed, backgroundSize, gradientColorTwo, gradientPosition, gradientType, gradientLocationOne, gradientLocationTwo, gradientAngle, backgroundImageURL } = value
    let btnGrad, btnGrad2, btnbg;
    if (undefined !== backgroundType && 'gradient' === backgroundType) {
        btnGrad = ('transparent' === backgroundColor || undefined === backgroundColor ? 'rgba(255,255,255,0)' : backgroundColor);
        btnGrad2 = (undefined !== gradientColorTwo && undefined !== gradientColorTwo && '' !== gradientColorTwo ? gradientColorTwo : '#777');
        if ('radial' === gradientType) {
            btnbg = `radial-gradient(at ${gradientPosition}, ${btnGrad} ${gradientLocationOne}%, ${btnGrad2} ${gradientLocationTwo}%)`;
        } else if ('radial' !== gradientType) {
            btnbg = `linear-gradient(${gradientAngle}deg, ${btnGrad} ${gradientLocationOne}%, ${btnGrad2} ${gradientLocationTwo}%)`;
        }
    } else {
        btnbg = backgroundImageURL ? `url('${backgroundImageURL}')` : ''
    }
    return {
        backgroundColor: backgroundColor,
        backgroundImage: btnbg,
        backgroundRepeat: backgroundRepeat,
        backgroundPosition: backgroundPosition,
        backgroundSize: backgroundSize,
        backgroundAttachment: fixed ? "fixed" : "unset",
    };

}
export const borderCss = (value, device) => {
    return {
        borderStyle: value.borderType,
        borderTopWidth: value['borderWidth'][device]['top'] && value['borderWidth'][device]['top'] + "px",
        borderRightWidth: value['borderWidth'][device]['right'] && value['borderWidth'][device]['right'] + "px",
        borderBottomWidth: value['borderWidth'][device]['bottom'] && value['borderWidth'][device]['bottom'] + "px",
        borderLeftWidth: value['borderWidth'][device]['left'] && value['borderWidth'][device]['left'] + "px",
        borderBottomLeftRadius: value['borderRadius'][device]['left'] && value['borderRadius'][device]['left'] + "px",
        borderTopLeftRadius: value['borderRadius'][device]['top'] && value['borderRadius'][device]['top'] + "px",
        borderTopRightRadius: value['borderRadius'][device]['right'] && value['borderRadius'][device]['right'] + "px",
        borderBottomRightRadius: value['borderRadius'][device]['bottom'] && value['borderRadius'][device]['bottom'] + "px",
        borderColor: value.borderColor,
    }

}
export const padddingCss = (value, device) => {
    return {
        paddingTop: value[device]['top'] && value[device]['top'] + value.unit,
        paddingRight: value[device]['right'] && value[device]['right'] + value.unit,
        paddingBottom: value[device]['bottom'] && value[device]['bottom'] + value.unit,
        paddingLeft: value[device]['left'] && value[device]['left'] + value.unit,
    }
}
export const marginCss = (value, device) => {
    return {
        marginTop: value[device]['top'] && value[device]['top'] + value.unit,
        marginRight: value[device]['right'] && value[device]['right'] + value.unit,
        marginBottom: value[device]['bottom'] && value[device]['bottom'] + value.unit,
        marginLeft: value[device]['left'] && value[device]['left'] + value.unit,
    }
}
export const typographyCss = (value, device) => {
    return {
        fontSize: `${value.fontSize[device] || ''}${value.fontSize.unit}`,
        fontFamily: value.fontFamily,
        letterSpacing: value.letterSpacing + "px",
        textTransform: value.textTransform ? "uppercase" : "none",
        fontStyle: value.fontStyle,
        fontWeight: value.fontWeight,
        lineHeight: value.lineHeight + "px",
    }
}

export const generateBlockId = (clientId) => {
    return clientId.split('-')[4];
}

export const generateCss = (styles) => {
    let styleCss = '';
    for (const selector in styles) {
        const selectorStyles = styles[selector];
        const filteredStyles = Object.keys(selectorStyles).map(property => {
            const value = selectorStyles[property];
            const valueWithoutUnits = value ? value.toString().replaceAll(/px|em|rem|!important|%/g, '').replaceAll(/\s/g, '') : '';
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

export const filterJsCss = (styles) => {
    const asArray = Object.entries(styles);

    const filtered = asArray.filter(([property, value]) => {
        const valueWithoutUnits = value ? value.toString().replaceAll(/px|em|rem|!important|%/g, '').replaceAll(/\s/g, '') : '';

        return value && !value.toString().includes('undefined') && valueWithoutUnits;
    });
    const filteredStyles = Object.fromEntries(filtered);

    return filteredStyles;
}