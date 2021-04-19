import attributes from "./attributes";

const { InnerBlocks } = wp.editor;

const className = "premium-container";



const containerAttrs_1_0_1 = {
    stretchSection: {
        type: "boolean",
        default: false,
    },
    innerWidthType: {
        type: "string",
        default: "boxed",
    },
    horAlign: {
        type: "string",
        default: "center",
    },
    height: {
        type: "string",
        default: "min",
    },
    innerWidth: {
        type: "number",
    },
    minHeight: {
        type: "number",
    },
    vPos: {
        type: "string",
        default: "top",
    },
    color: {
        type: "string",
    },
    imageID: {
        type: "string",
    },
    imageURL: {
        type: "string",
    },
    backgroundRepeat: {
        type: "string",
        default: "no-repeat",
    },
    backgroundPosition: {
        type: "string",
        default: "top center",
    },
    backgroundSize: {
        type: "string",
        default: "auto",
    },
    fixed: {
        type: "boolean",
        default: false,
    },
    borderType: {
        type: "string",
        default: "none",
    },
    borderWidth: {
        type: "number",
        default: "1",
    },
    borderRadius: {
        type: "number",
    },
    borderColor: {
        type: "string",
    },
    marginTop: {
        type: "number",
    },
    marginBottom: {
        type: "number",
    },
    marginLeft: {
        type: "number",
    },
    marginRight: {
        type: "number",
    },
    paddingTop: {
        type: "number",
    },
    paddingRight: {
        type: "number",
    },
    paddingBottom: {
        type: "number",
    },
    paddingLeft: {
        type: "number",
    },
    shadowColor: {
        type: "string",
    },
    shadowBlur: {
        type: "number",
        default: "0",
    },
    shadowHorizontal: {
        type: "number",
        default: "0",
    },
    shadowVertical: {
        type: "number",
        default: "0",
    },
    shadowPosition: {
        type: "string",
        default: "",
    },
};

const newAttributes_1_6_1 = {
    paddingUnit: {
        type: "string",
    },
};

const deprecated_attributes_1_6_1 = Object.assign(
    containerAttrs_1_0_1,
    newAttributes_1_6_1
);

const newAttributes_1_6_2 = {
    marginUnit: {
        type: "string",
    },
};

const deprecated_attributes_1_6_2 = Object.assign(newAttributes_1_6_2, deprecated_attributes_1_6_1)


const deprecatedContent = [
    // {
    //     attributes: attributes,

    //     save: (props) => {
    //         const {
    //             stretchSection,
    //             horAlign,
    //             innerWidthType,
    //             innerWidth,
    //             height,
    //             vPos,
    //             minHeight,
    //             minHeightUnit,
    //             color,
    //             imageURL,
    //             fixed,
    //             backgroundRepeat,
    //             backgroundPosition,
    //             backgroundSize,
    //             borderType,
    //             borderWidth,
    //             borderColor,
    //             borderRadius,
    //             marginTop,
    //             marginBottom,
    //             marginLeft,
    //             marginRight,
    //             marginUnit,
    //             paddingTop,
    //             paddingRight,
    //             paddingBottom,
    //             paddingLeft,
    //             paddingUnit,
    //             shadowBlur,
    //             shadowColor,
    //             shadowHorizontal,
    //             shadowVertical,
    //             shadowPosition,
    //         } = props.attributes;

    //         return (
    //             <div
    //                 className={`${className} premium-container__stretch_${stretchSection} premium-container__${innerWidthType}`}
    //                 style={{
    //                     textAlign: horAlign,
    //                     minHeight: "fit" === height ? "100vh" : minHeight + minHeightUnit,
    //                     backgroundColor: color,
    //                     border: borderType,
    //                     borderWidth: borderWidth + "px",
    //                     borderRadius: borderRadius + "px",
    //                     borderColor: borderColor,
    //                     backgroundImage: `url('${imageURL}')`,
    //                     backgroundRepeat: backgroundRepeat,
    //                     backgroundPosition: backgroundPosition,
    //                     backgroundSize: backgroundSize,
    //                     backgroundAttachment: fixed ? "fixed" : "unset",
    //                     marginTop: marginTop + marginUnit,
    //                     marginBottom: marginBottom + marginUnit,
    //                     marginLeft: marginLeft + marginUnit,
    //                     marginRight: marginRight + marginUnit,
    //                     paddingTop: paddingTop + paddingUnit,
    //                     paddingBottom: paddingBottom + paddingUnit,
    //                     paddingLeft: paddingLeft + paddingUnit,
    //                     paddingRight: paddingRight + paddingUnit,
    //                     boxShadow: `${shadowHorizontal}px ${shadowVertical}px ${shadowBlur}px ${shadowColor} ${shadowPosition}`,
    //                 }}
    //             >
    //                 <div
    //                     className={`premium-container__content_wrap premium-container__${vPos}`}
    //                     style={{
    //                         maxWidth:
    //                             "boxed" == innerWidthType && stretchSection
    //                                 ? innerWidth
    //                                     ? innerWidth + "px"
    //                                     : "1140px"
    //                                 : "100%",
    //                     }}
    //                 >
    //                     <div className={`premium-container__content_inner`}>
    //                         <InnerBlocks.Content />
    //                     </div>
    //                 </div>
    //             </div>
    //         );
    //     },
    // },
    {
        attributes: attributes,

        save: (props) => {
            const {
                stretchSection,
                horAlign,
                innerWidthType,
                innerWidth,
                height,
                vPos,
                minHeight,
                color,
                imageURL,
                fixed,
                backgroundRepeat,
                backgroundPosition,
                backgroundSize,
                borderType,
                borderWidth,
                borderColor,
                borderRadius,
                marginTop,
                marginBottom,
                marginLeft,
                marginRight,
                marginUnit,
                paddingTop,
                paddingRight,
                paddingBottom,
                paddingLeft,
                paddingUnit,
                shadowBlur,
                shadowColor,
                shadowHorizontal,
                shadowVertical,
                shadowPosition,
            } = props.attributes;
            return (
                <div
                    className={`${className} ${className}__stretch_${stretchSection} ${className}__${innerWidthType}`}
                    style={{
                        textAlign: horAlign,
                        minHeight: "fit" === height ? "100vh" : minHeight,
                        backgroundColor: color,
                        border: borderType,
                        borderWidth: borderWidth + "px",
                        borderRadius: borderRadius + "px",
                        borderColor: borderColor,
                        backgroundImage: `url('${imageURL}')`,
                        backgroundRepeat: backgroundRepeat,
                        backgroundPosition: backgroundPosition,
                        backgroundSize: backgroundSize,
                        backgroundAttachment: fixed ? "fixed" : "unset",
                        marginTop: marginTop + marginUnit,
                        marginBottom: marginBottom + marginUnit,
                        marginLeft: marginLeft + marginUnit,
                        marginRight: marginRight + marginUnit,
                        paddingTop: paddingTop + paddingUnit,
                        paddingBottom: paddingBottom + paddingUnit,
                        paddingLeft: paddingLeft + paddingUnit,
                        paddingRight: paddingRight + paddingUnit,
                        boxShadow: `${shadowHorizontal}px ${shadowVertical}px ${shadowBlur}px ${shadowColor} ${shadowPosition}`,
                    }}
                >
                    <div
                        className={`${className}__content_wrap ${className}__${vPos}`}
                        style={{
                            maxWidth:
                                "boxed" == innerWidthType && stretchSection
                                    ? innerWidth
                                        ? innerWidth + "px"
                                        : "1140px"
                                    : "100%",
                        }}
                    >
                        <div className={`${className}__content_inner`}>
                            <InnerBlocks.Content />
                        </div>
                    </div>
                </div>
            );
        },
    },
    {
        attributes: deprecated_attributes_1_6_1,
        migrate: (attributes) => {
            let newAttributes = {
                marginUnit: "",
            };
            return Object.assign(attributes, newAttributes);
        },
        save: (props) => {
            const {
                stretchSection,
                horAlign,
                innerWidthType,
                innerWidth,
                height,
                vPos,
                minHeight,
                color,
                imageURL,
                fixed,
                backgroundRepeat,
                backgroundPosition,
                backgroundSize,
                borderType,
                borderWidth,
                borderColor,
                borderRadius,
                marginTop,
                marginBottom,
                marginLeft,
                marginRight,
                paddingTop,
                paddingRight,
                paddingBottom,
                paddingLeft,
                paddingUnit,
                shadowBlur,
                shadowColor,
                shadowHorizontal,
                shadowVertical,
                shadowPosition,
            } = props.attributes;
            return (
                <div
                    className={`${className} ${className}__stretch_${stretchSection} ${className}__${innerWidthType}`}
                    style={{
                        textAlign: horAlign,
                        minHeight: "fit" === height ? "100vh" : minHeight,
                        backgroundColor: color,
                        border: borderType,
                        borderWidth: borderWidth + "px",
                        borderRadius: borderRadius + "px",
                        borderColor: borderColor,
                        backgroundImage: `url('${imageURL}')`,
                        backgroundRepeat: backgroundRepeat,
                        backgroundPosition: backgroundPosition,
                        backgroundSize: backgroundSize,
                        backgroundAttachment: fixed ? "fixed" : "unset",
                        marginTop: marginTop + "px",
                        marginBottom: marginBottom + "px",
                        marginLeft: marginLeft + "px",
                        marginRight: marginRight + "px",
                        paddingTop: paddingTop + paddingUnit,
                        paddingBottom: paddingBottom + paddingUnit,
                        paddingLeft: paddingLeft + paddingUnit,
                        paddingRight: paddingRight + paddingUnit,
                        boxShadow: `${shadowHorizontal}px ${shadowVertical}px ${shadowBlur}px ${shadowColor} ${shadowPosition}`,
                    }}
                >
                    <div
                        className={`${className}__content_wrap ${className}__${vPos}`}
                        style={{
                            maxWidth:
                                "boxed" == innerWidthType && stretchSection
                                    ? innerWidth
                                        ? innerWidth + "px"
                                        : "1140px"
                                    : "100%",
                        }}
                    >
                        <div className={`${className}__content_inner`}>
                            <InnerBlocks.Content />
                        </div>
                    </div>
                </div>
            );
        },
    },
    {
        attributes: containerAttrs_1_0_1,
        migrate: (attributes) => {
            let newAttributes = {
                paddingUnit: "",
            };
            return Object.assign(attributes, newAttributes);
        },
        save: (props) => {
            const {
                stretchSection,
                horAlign,
                innerWidthType,
                innerWidth,
                height,
                vPos,
                minHeight,
                color,
                imageURL,
                fixed,
                backgroundRepeat,
                backgroundPosition,
                backgroundSize,
                borderType,
                borderWidth,
                borderColor,
                borderRadius,
                marginTop,
                marginBottom,
                marginLeft,
                marginRight,
                paddingTop,
                paddingRight,
                paddingBottom,
                paddingLeft,
                shadowBlur,
                shadowColor,
                shadowHorizontal,
                shadowVertical,
                shadowPosition,
            } = props.attributes;
            return (
                <div
                    className={`${className} ${className}__stretch_${stretchSection} ${className}__${innerWidthType}`}
                    style={{
                        textAlign: horAlign,
                        minHeight: "fit" === height ? "100vh" : minHeight,
                        backgroundColor: color,
                        border: borderType,
                        borderWidth: borderWidth + "px",
                        borderRadius: borderRadius + "px",
                        borderColor: borderColor,
                        backgroundImage: `url('${imageURL}')`,
                        backgroundRepeat: backgroundRepeat,
                        backgroundPosition: backgroundPosition,
                        backgroundSize: backgroundSize,
                        backgroundAttachment: fixed ? "fixed" : "unset",
                        marginTop: marginTop + "px",
                        marginBottom: marginBottom + "px",
                        paddingTop: paddingTop + "px",
                        marginLeft: marginLeft + "px",
                        marginRight: marginRight + "px",
                        paddingBottom: paddingBottom + "px",
                        paddingLeft: paddingLeft + "px",
                        paddingRight: paddingRight + "px",
                        boxShadow: `${shadowHorizontal}px ${shadowVertical}px ${shadowBlur}px ${shadowColor} ${shadowPosition}`,
                    }}
                >
                    <div
                        className={`${className}__content_wrap ${className}__${vPos}`}
                        style={{
                            maxWidth:
                                "boxed" == innerWidthType && stretchSection
                                    ? innerWidth
                                        ? innerWidth + "px"
                                        : "1140px"
                                    : "100%",
                        }}
                    >
                        <div className={`${className}__content_inner`}>
                            <InnerBlocks.Content />
                        </div>
                    </div>
                </div>
            );
        },
    },
    {
        attributes: containerAttrs_1_0_1,
        save: (props) => {
            const {
                horAlign,
                innerWidth,
                height,
                vPos,
                minHeight,
                color,
                imageURL,
                fixed,
                backgroundRepeat,
                backgroundPosition,
                backgroundSize,
                borderType,
                borderWidth,
                borderColor,
                borderRadius,
                marginTop,
                marginBottom,
                marginLeft,
                marginRight,
                paddingTop,
                paddingRight,
                paddingBottom,
                paddingLeft,
                shadowBlur,
                shadowColor,
                shadowHorizontal,
                shadowVertical,
                shadowPosition,
            } = props.attributes;
            return (
                <div
                    className={className}
                    style={{
                        textAlign: horAlign,
                        height: "fit" === height ? "100vh" : minHeight,
                        backgroundColor: color,
                        border: borderType,
                        borderWidth: borderWidth + "px",
                        borderRadius: borderRadius + "px",
                        borderColor: borderColor,
                        backgroundImage: `url('${imageURL}')`,
                        backgroundRepeat: backgroundRepeat,
                        backgroundPosition: backgroundPosition,
                        backgroundSize: backgroundSize,
                        backgroundAttachment: fixed ? "fixed" : "unset",
                        marginTop: marginTop + "px",
                        marginBottom: marginBottom + "px",
                        paddingTop: paddingTop + "px",
                        marginLeft: marginLeft + "px",
                        marginRight: marginRight + "px",
                        paddingBottom: paddingBottom + "px",
                        paddingLeft: paddingLeft + "px",
                        paddingRight: paddingRight + "px",
                        boxShadow: `${shadowHorizontal}px ${shadowVertical}px ${shadowBlur}px ${shadowColor} ${shadowPosition}`,
                    }}
                >
                    <div
                        className={`${className}__content_wrap ${className}__${vPos}`}
                        style={{ width: innerWidth ? innerWidth + "%" : "100%" }}
                    >
                        <div className={`${className}__content_inner`}>
                            <InnerBlocks.Content />
                        </div>
                    </div>
                </div>
            );
        },
    },
];

export default deprecatedContent;