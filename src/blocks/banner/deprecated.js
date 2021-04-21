import attributes from "./attributes";

const { __ } = wp.i18n;

const className = "premium-banner";

const { RichText } = wp.editor;


const deprecatedContent = [
    {
        attributes: attributes,
        migrate: (attributes) => {
            let newAttributes = {
                borderBottom: "",
                borderTop: "",
                borderRight: "",
                borderLeft: "",
                borderBanner: "",
                classMigrate: false,
                titleSizeUnit: 'px',
                titleSizeMobile: '',
                titleSizeTablet: '',
                descSizeUnit: 'px',
                descSizeMobile: '',
                descSizeTablet: '',
                block_id: '',
                hideDesktop: false,
                hideTablet: false,
                hideMobile: false
            };
            return Object.assign(attributes, newAttributes);
        },
        save: (props) => {
            const {
                id,
                imageURL,
                title,
                titleTag,
                desc,
                contentAlign,
                effect,
                hoverEffect,
                height,
                minHeight,
                verAlign,
                hovered,
                responsive,
                background,
                opacity,
                borderType,
                borderWidth,
                borderRadius,
                borderColor,
                titleColor,
                titleBack,
                titleSize,
                titleWeight,
                titleLine,
                shadowBlur,
                shadowColor,
                shadowHorizontal,
                shadowVertical,
                descColor,
                descSize,
                descLine,
                descWeight,
                descShadowBlur,
                descShadowColor,
                descShadowHorizontal,
                descShadowVertical,
                urlCheck,
                url,
                target,
                sepColor,
                blur,
                bright,
                contrast,
                saturation,
                hue,
                containerShadowBlur,
                containerShadowColor,
                containerShadowHorizontal,
                containerShadowVertical,
                containerShadowPosition,
                paddingB,
                paddingT,
                paddingR,
                paddingL,
                paddingU,
            } = props.attributes;

            return (
                <div
                    id={`premium-banner-${id}`}
                    className={`${className} premium-banner__responsive_${responsive}`}
                    style={{
                        paddingTop: paddingT + paddingU,
                        paddingRight: paddingR + paddingU,
                        paddingBottom: paddingB + paddingU,
                        paddingLeft: paddingL + paddingU,
                    }}
                >
                    <style
                        dangerouslySetInnerHTML={{
                            __html: [
                                `#premium-banner-${id} .premium-banner__effect3 .premium-banner__title_wrap::after{`,
                                `background: ${sepColor}`,
                                "}",
                                `#premium-banner-${id} .premium-banner__inner {`,
                                `background: ${background}`,
                                "}",
                                `#premium-banner-${id} .premium-banner__img.premium-banner__active {`,
                                `opacity: ${background ? 1 - opacity / 100 : 1} `,
                                "}",
                            ].join("\n"),
                        }}
                    />
                    <div
                        className={`premium-banner__inner premium-banner__min premium-banner__${effect} premium-banner__${hoverEffect} hover_${hovered}`}
                        style={{
                            boxShadow: `${containerShadowHorizontal}px ${containerShadowVertical}px ${containerShadowBlur}px ${containerShadowColor} ${containerShadowPosition}`,
                            border: borderType,
                            borderWidth: borderWidth + "px",
                            borderRadius: borderRadius + "px",
                            borderColor: borderColor,
                        }}
                    >
                        <div
                            className={`premium-banner__img_wrap premium-banner__${height}`}
                            style={{
                                minHeight: minHeight,
                                alignItems: verAlign,
                            }}
                        >
                            <img
                                className={`premium-banner__img`}
                                alt="Banner Image"
                                src={imageURL}
                                style={{
                                    filter: `brightness( ${bright}% ) contrast( ${contrast}% ) saturate( ${saturation}% ) blur( ${blur}px ) hue-rotate( ${hue}deg )`,
                                }}
                            />
                        </div>

                        <div
                            className={`premium-banner__content`}
                            style={{
                                background: "effect2" === effect ? titleBack : "transparent",
                            }}
                        >
                            <div
                                className={`premium-banner__title_wrap`}
                                style={{
                                    textAlign: contentAlign,
                                }}
                            >
                                <RichText.Content
                                    tagName={titleTag.toLowerCase()}
                                    className={`premium-banner__title`}
                                    value={title}
                                    style={{
                                        color: titleColor,
                                        fontSize: titleSize + "px",
                                        fontWeight: titleWeight,
                                        lineHeight: titleLine + "px",
                                        textShadow: `${shadowHorizontal}px ${shadowVertical}px ${shadowBlur}px ${shadowColor}`,
                                    }}
                                />
                            </div>
                            <div
                                className={`premium-banner__desc_wrap`}
                                style={{
                                    textAlign: contentAlign,
                                }}
                            >
                                <RichText.Content
                                    tagName="p"
                                    className={`premium-banner__desc`}
                                    value={desc}
                                    style={{
                                        color: descColor,
                                        fontSize: descSize + "px",
                                        fontWeight: descWeight,
                                        lineHeight: descLine + "px",
                                        textShadow: `${descShadowHorizontal}px ${descShadowVertical}px ${descShadowBlur}px ${descShadowColor}`,
                                    }}
                                />
                            </div>
                        </div>
                        {urlCheck && "" !== url && (
                            <a
                                className={`premium-banner__link`}
                                href={url}
                                target={target && "_blank"}
                            />
                        )}
                    </div>
                </div>
            );
        },
    },
    {
        attributes: attributes,
        migrate: (attributes) => {
            let newAttributes = {
                paddingT: "",
                paddingR: "",
                paddingB: "",
                paddingL: "",
                paddingU: "",
            };
            return Object.assign(attributes, newAttributes);
        },
        save: (props) => {
            const {
                id,
                imageURL,
                title,
                titleTag,
                desc,
                contentAlign,
                effect,
                hoverEffect,
                height,
                minHeight,
                verAlign,
                hovered,
                responsive,
                background,
                opacity,
                borderType,
                borderWidth,
                borderRadius,
                borderColor,
                titleColor,
                titleBack,
                titleSize,
                titleWeight,
                titleLine,
                shadowBlur,
                shadowColor,
                shadowHorizontal,
                shadowVertical,
                descColor,
                descSize,
                descLine,
                descWeight,
                descShadowBlur,
                descShadowColor,
                descShadowHorizontal,
                descShadowVertical,
                urlCheck,
                url,
                target,
                sepColor,
                blur,
                bright,
                contrast,
                saturation,
                hue,
                containerShadowBlur,
                containerShadowColor,
                containerShadowHorizontal,
                containerShadowVertical,
                containerShadowPosition,
            } = props.attributes;
            return (
                <div
                    id={`premium-banner-${id}`}
                    className={`${className} ${className}__responsive_${responsive}`}
                    style={{
                        boxShadow: `${containerShadowHorizontal}px ${containerShadowVertical}px ${containerShadowBlur}px ${containerShadowColor} ${containerShadowPosition}`,
                    }}
                >
                    <style
                        dangerouslySetInnerHTML={{
                            __html: [
                                `#premium-banner-${id} .premium-banner__effect3 .premium-banner__title_wrap::after{`,
                                `background: ${sepColor}`,
                                "}",
                                `#premium-banner-${id} .premium-banner__inner {`,
                                `background: ${background}`,
                                "}",
                                `#premium-banner-${id} .premium-banner__img.premium-banner__active {`,
                                `opacity: ${background ? 1 - opacity / 100 : 1} `,
                                "}",
                            ].join("\n"),
                        }}
                    />
                    <div
                        className={`${className}__inner ${className}__min ${className}__${effect} ${className}__${hoverEffect} hover_${hovered}`}
                        style={{
                            border: borderType,
                            borderWidth: borderWidth + "px",
                            borderRadius: borderRadius + "px",
                            borderColor: borderColor,
                        }}
                    >
                        <div
                            className={`${className}__img_wrap ${className}__${height}`}
                            style={{
                                minHeight: minHeight,
                                alignItems: verAlign,
                            }}
                        >
                            <img
                                className={`${className}__img`}
                                alt="Banner Image"
                                src={imageURL}
                                style={{
                                    filter: `brightness( ${bright}% ) contrast( ${contrast}% ) saturate( ${saturation}% ) blur( ${blur}px ) hue-rotate( ${hue}deg )`,
                                }}
                            />
                        </div>

                        <div
                            className={`${className}__content`}
                            style={{
                                background: "effect2" === effect ? titleBack : "transparent",
                            }}
                        >
                            <div
                                className={`${className}__title_wrap`}
                                style={{
                                    textAlign: contentAlign,
                                }}
                            >
                                <RichText.Content
                                    tagName={titleTag.toLowerCase()}
                                    className={`${className}__title`}
                                    value={title}
                                    style={{
                                        color: titleColor,
                                        fontSize: titleSize + "px",
                                        fontWeight: titleWeight,
                                        lineHeight: titleLine + "px",
                                        textShadow: `${shadowHorizontal}px ${shadowVertical}px ${shadowBlur}px ${shadowColor}`,
                                    }}
                                />
                            </div>
                            <div
                                className={`${className}__desc_wrap`}
                                style={{
                                    textAlign: contentAlign,
                                }}
                            >
                                <RichText.Content
                                    tagName="p"
                                    className={`${className}__desc`}
                                    value={desc}
                                    style={{
                                        color: descColor,
                                        fontSize: descSize + "px",
                                        fontWeight: descWeight,
                                        lineHeight: descLine + "px",
                                        textShadow: `${descShadowHorizontal}px ${descShadowVertical}px ${descShadowBlur}px ${descShadowColor}`,
                                    }}
                                />
                            </div>
                        </div>
                        {urlCheck && "" !== url && (
                            <a
                                className={`${className}__link`}
                                href={url}
                                target={target && "_blank"}
                            />
                        )}
                    </div>
                </div>
            );
        },
    },
    {
        attributes: attributes,
        migrate: (attributes) => {
            let newAttributes = {
                containerShadowColor: "",
                containerShadowBlur: "0",
                containerShadowHorizontal: "0",
                containerShadowVertical: "0",
                containerShadowPosition: "",
            };
            return Object.assign(attributes, newAttributes);
        },
        save: (props) => {
            const {
                id,
                imageURL,
                title,
                titleTag,
                desc,
                contentAlign,
                effect,
                hoverEffect,
                height,
                minHeight,
                verAlign,
                hovered,
                responsive,
                background,
                opacity,
                borderType,
                borderWidth,
                borderRadius,
                borderColor,
                titleColor,
                titleBack,
                titleSize,
                titleWeight,
                titleLine,
                shadowBlur,
                shadowColor,
                shadowHorizontal,
                shadowVertical,
                descColor,
                descSize,
                descLine,
                descWeight,
                descShadowBlur,
                descShadowColor,
                descShadowHorizontal,
                descShadowVertical,
                urlCheck,
                url,
                target,
                sepColor,
                blur,
                bright,
                contrast,
                saturation,
                hue,
            } = props.attributes;
            return (
                <div
                    id={`premium-banner-${id}`}
                    className={`${className} ${className}__responsive_${responsive}`}
                >
                    <style
                        dangerouslySetInnerHTML={{
                            __html: [
                                `#premium-banner-${id} .premium-banner__effect3 .premium-banner__title_wrap::after{`,
                                `background: ${sepColor}`,
                                "}",
                                `#premium-banner-${id} .premium-banner__inner {`,
                                `background: ${background}`,
                                "}",
                                `#premium-banner-${id} .premium-banner__img.premium-banner__active {`,
                                `opacity: ${background ? 1 - opacity / 100 : 1} `,
                                "}",
                            ].join("\n"),
                        }}
                    />
                    <div
                        className={`${className}__inner ${className}__min ${className}__${effect} ${className}__${hoverEffect} hover_${hovered}`}
                        style={{
                            border: borderType,
                            borderWidth: borderWidth + "px",
                            borderRadius: borderRadius + "px",
                            borderColor: borderColor,
                        }}
                    >
                        <div
                            className={`${className}__img_wrap ${className}__${height}`}
                            style={{
                                minHeight: minHeight,
                                alignItems: verAlign,
                            }}
                        >
                            <img
                                className={`${className}__img`}
                                alt="Banner Image"
                                src={imageURL}
                                style={{
                                    filter: `brightness( ${bright}% ) contrast( ${contrast}% ) saturate( ${saturation}% ) blur( ${blur}px ) hue-rotate( ${hue}deg )`,
                                }}
                            />
                        </div>

                        <div
                            className={`${className}__content`}
                            style={{
                                background: "effect2" === effect ? titleBack : "transparent",
                            }}
                        >
                            <div
                                className={`${className}__title_wrap`}
                                style={{
                                    textAlign: contentAlign,
                                }}
                            >
                                <RichText.Content
                                    tagName={titleTag.toLowerCase()}
                                    className={`${className}__title`}
                                    value={title}
                                    style={{
                                        color: titleColor,
                                        fontSize: titleSize + "px",
                                        fontWeight: titleWeight,
                                        lineHeight: titleLine + "px",
                                        textShadow: `${shadowHorizontal}px ${shadowVertical}px ${shadowBlur}px ${shadowColor}`,
                                    }}
                                />
                            </div>
                            <div
                                className={`${className}__desc_wrap`}
                                style={{
                                    textAlign: contentAlign,
                                }}
                            >
                                <RichText.Content
                                    tagName="p"
                                    className={`${className}__desc`}
                                    value={desc}
                                    style={{
                                        color: descColor,
                                        fontSize: descSize + "px",
                                        fontWeight: descWeight,
                                        lineHeight: descLine + "px",
                                        textShadow: `${descShadowHorizontal}px ${descShadowVertical}px ${descShadowBlur}px ${descShadowColor}`,
                                    }}
                                />
                            </div>
                        </div>
                        {urlCheck && "" !== url && (
                            <a
                                className={`${className}__link`}
                                href={url}
                                target={target && "_blank"}
                            />
                        )}
                    </div>
                </div>
            );
        },
    },
    {
        attributes: attributes,
        migrate: (attributes) => {
            let newAttributes = {
                descShadowBlur: "0",
                descShadowColor: "",
                descShadowHorizontal: "0",
                descShadowVertical: "0",
            };
            return Object.assign(attributes, newAttributes);
        },
        save: (props) => {
            const {
                id,
                imageURL,
                title,
                titleTag,
                desc,
                contentAlign,
                effect,
                hoverEffect,
                height,
                minHeight,
                verAlign,
                hovered,
                responsive,
                background,
                opacity,
                borderType,
                borderWidth,
                borderRadius,
                borderColor,
                titleColor,
                titleBack,
                titleSize,
                titleWeight,
                titleLine,
                shadowBlur,
                shadowColor,
                shadowHorizontal,
                shadowVertical,
                descColor,
                descSize,
                descWeight,
                descLine,
                urlCheck,
                url,
                target,
                sepColor,
                blur,
                bright,
                contrast,
                saturation,
                hue,
            } = props.attributes;
            return (
                <div
                    id={`premium-banner-${id}`}
                    className={`${className} ${className}__responsive_${responsive}`}
                >
                    <style
                        dangerouslySetInnerHTML={{
                            __html: [
                                `#premium-banner-${id} .premium-banner__effect3 .premium-banner__title_wrap::after{`,
                                `background: ${sepColor}`,
                                "}",
                                `#premium-banner-${id} .premium-banner__inner {`,
                                `background: ${background}`,
                                "}",
                                `#premium-banner-${id} .premium-banner__img.premium-banner__active {`,
                                `opacity: ${background ? 1 - opacity / 100 : 1} `,
                                "}",
                            ].join("\n"),
                        }}
                    />
                    <div
                        className={`${className}__inner ${className}__min ${className}__${effect} ${className}__${hoverEffect} hover_${hovered}`}
                        style={{
                            border: borderType,
                            borderWidth: borderWidth + "px",
                            borderRadius: borderRadius + "px",
                            borderColor: borderColor,
                        }}
                    >
                        <div
                            className={`${className}__img_wrap ${className}__${height}`}
                            style={{
                                minHeight: minHeight,
                                alignItems: verAlign,
                            }}
                        >
                            <img
                                className={`${className}__img`}
                                alt="Banner Image"
                                src={imageURL}
                                style={{
                                    filter: `brightness( ${bright}% ) contrast( ${contrast}% ) saturate( ${saturation}% ) blur( ${blur}px ) hue-rotate( ${hue}deg )`,
                                }}
                            />
                        </div>

                        <div
                            className={`${className}__content`}
                            style={{
                                background: "effect2" === effect ? titleBack : "transparent",
                            }}
                        >
                            <div
                                className={`${className}__title_wrap`}
                                style={{
                                    textAlign: contentAlign,
                                }}
                            >
                                <RichText.Content
                                    tagName={titleTag.toLowerCase()}
                                    className={`${className}__title`}
                                    value={title}
                                    style={{
                                        color: titleColor,
                                        fontSize: titleSize + "px",
                                        fontWeight: titleWeight,
                                        lineHeight: titleLine + "px",
                                        textShadow: `${shadowHorizontal}px ${shadowVertical}px ${shadowBlur}px ${shadowColor}`,
                                    }}
                                />
                            </div>
                            <div
                                className={`${className}__desc_wrap`}
                                style={{
                                    textAlign: contentAlign,
                                }}
                            >
                                <RichText.Content
                                    tagName="p"
                                    className={`${className}__desc`}
                                    value={desc}
                                    style={{
                                        color: descColor,
                                        fontSize: descSize + "px",
                                        fontWeight: descWeight,
                                        lineHeight: descLine + "px",
                                    }}
                                />
                            </div>
                        </div>
                        {urlCheck && "" !== url && (
                            <a
                                className={`${className}__link`}
                                href={url}
                                target={target && "_blank"}
                            />
                        )}
                    </div>
                </div>
            );
        },
    },
    {
        attributes: attributes,
        migrate: (attributes) => {
            let newAttributes = {
                blur: "0",
                bright: "100",
                contrast: "100",
                saturation: "100",
                hue: "0",
            };
            return Object.assign(attributes, newAttributes);
        },
        save: (props) => {
            const {
                id,
                imageURL,
                title,
                titleTag,
                desc,
                contentAlign,
                effect,
                hoverEffect,
                height,
                minHeight,
                verAlign,
                hovered,
                responsive,
                background,
                opacity,
                borderType,
                borderWidth,
                borderRadius,
                borderColor,
                titleColor,
                titleBack,
                titleSize,
                titleWeight,
                titleLine,
                shadowBlur,
                shadowColor,
                shadowHorizontal,
                shadowVertical,
                descColor,
                descSize,
                descWeight,
                descLine,
                urlCheck,
                url,
                target,
                sepColor,
            } = props.attributes;
            return (
                <div
                    id={`premium-banner-${id}`}
                    className={`${className} ${className}__responsive_${responsive}`}
                >
                    <style
                        dangerouslySetInnerHTML={{
                            __html: [
                                `#premium-banner-${id} .premium-banner__effect3 .premium-banner__title_wrap::after{`,
                                `background: ${sepColor}`,
                                "}",
                                `#premium-banner-${id} .premium-banner__inner {`,
                                `background: ${background}`,
                                "}",
                                `#premium-banner-${id} .premium-banner__img.premium-banner__active {`,
                                `opacity: ${background ? 1 - opacity / 100 : 1} `,
                                "}",
                            ].join("\n"),
                        }}
                    />
                    <div
                        className={`${className}__inner ${className}__min ${className}__${effect} ${className}__${hoverEffect} hover_${hovered}`}
                        style={{
                            border: borderType,
                            borderWidth: borderWidth + "px",
                            borderRadius: borderRadius + "px",
                            borderColor: borderColor,
                        }}
                    >
                        <div
                            className={`${className}__img_wrap ${className}__${height}`}
                            style={{
                                minHeight: minHeight,
                                alignItems: verAlign,
                            }}
                        >
                            <img
                                className={`${className}__img`}
                                alt="Banner Image"
                                src={imageURL}
                            />
                        </div>

                        <div
                            className={`${className}__content`}
                            style={{
                                background: "effect2" === effect ? titleBack : "transparent",
                            }}
                        >
                            <div
                                className={`${className}__title_wrap`}
                                style={{
                                    textAlign: contentAlign,
                                }}
                            >
                                <RichText.Content
                                    tagName={titleTag.toLowerCase()}
                                    className={`${className}__title`}
                                    value={title}
                                    style={{
                                        color: titleColor,
                                        fontSize: titleSize + "px",
                                        fontWeight: titleWeight,
                                        lineHeight: titleLine + "px",
                                        textShadow: `${shadowHorizontal}px ${shadowVertical}px ${shadowBlur}px ${shadowColor}`,
                                    }}
                                />
                            </div>
                            <div
                                className={`${className}__desc_wrap`}
                                style={{
                                    textAlign: contentAlign,
                                }}
                            >
                                <RichText.Content
                                    tagName="p"
                                    className={`${className}__desc`}
                                    value={desc}
                                    style={{
                                        color: descColor,
                                        fontSize: descSize + "px",
                                        fontWeight: descWeight,
                                        lineHeight: descLine + "px",
                                    }}
                                />
                            </div>
                        </div>
                        {urlCheck && "" !== url && (
                            <a
                                className={`${className}__link`}
                                href={url}
                                target={target && "_blank"}
                            />
                        )}
                    </div>
                </div>
            );
        },
    },
    {
        attributes: attributes,
        migrate: (attributes) => {
            let newAttributes = {
                shadowBlur: "0",
                shadowColor: "",
                shadowHorizontal: "0",
                shadowVertical: "0",
            };
            return Object.assign(attributes, newAttributes);
        },
        save: (props) => {
            const {
                id,
                imageURL,
                title,
                titleTag,
                desc,
                contentAlign,
                effect,
                hoverEffect,
                height,
                minHeight,
                verAlign,
                hovered,
                responsive,
                background,
                opacity,
                borderType,
                borderWidth,
                borderRadius,
                borderColor,
                titleColor,
                titleBack,
                titleSize,
                titleWeight,
                titleLine,
                descColor,
                descSize,
                descWeight,
                descLine,
                urlCheck,
                url,
                target,
                sepColor,
            } = props.attributes;
            return (
                <div
                    id={`premium-banner-${id}`}
                    className={`${className} ${className}__responsive_${responsive}`}
                >
                    <style
                        dangerouslySetInnerHTML={{
                            __html: [
                                `#premium-banner-${id} .premium-banner__effect3 .premium-banner__title_wrap::after{`,
                                `background: ${sepColor}`,
                                "}",
                                `#premium-banner-${id} .premium-banner__inner {`,
                                `background: ${background}`,
                                "}",
                                `#premium-banner-${id} .premium-banner__img.premium-banner__active {`,
                                `opacity: ${background ? 1 - opacity / 100 : 1} `,
                                "}",
                            ].join("\n"),
                        }}
                    />
                    <div
                        className={`${className}__inner ${className}__min ${className}__${effect} ${className}__${hoverEffect} hover_${hovered}`}
                        style={{
                            border: borderType,
                            borderWidth: borderWidth + "px",
                            borderRadius: borderRadius + "px",
                            borderColor: borderColor,
                        }}
                    >
                        <div
                            className={`${className}__img_wrap ${className}__${height}`}
                            style={{
                                minHeight: minHeight,
                                alignItems: verAlign,
                            }}
                        >
                            <img
                                className={`${className}__img`}
                                alt="Banner Image"
                                src={imageURL}
                            />
                        </div>

                        <div
                            className={`${className}__content`}
                            style={{
                                background: "effect2" === effect ? titleBack : "transparent",
                            }}
                        >
                            <div
                                className={`${className}__title_wrap`}
                                style={{
                                    textAlign: contentAlign,
                                }}
                            >
                                <RichText.Content
                                    tagName={titleTag.toLowerCase()}
                                    className={`${className}__title`}
                                    value={title}
                                    style={{
                                        color: titleColor,
                                        fontSize: titleSize + "px",
                                        fontWeight: titleWeight,
                                        lineHeight: titleLine + "px",
                                    }}
                                />
                            </div>
                            <div
                                className={`${className}__desc_wrap`}
                                style={{
                                    textAlign: contentAlign,
                                }}
                            >
                                <RichText.Content
                                    tagName="p"
                                    className={`${className}__desc`}
                                    value={desc}
                                    style={{
                                        color: descColor,
                                        fontSize: descSize + "px",
                                        fontWeight: descWeight,
                                        lineHeight: descLine + "px",
                                    }}
                                />
                            </div>
                        </div>
                        {urlCheck && "" !== url && (
                            <a
                                className={`${className}__link`}
                                href={url}
                                target={target && "_blank"}
                            />
                        )}
                    </div>
                </div>
            );
        },
    },
];

export default deprecatedContent;