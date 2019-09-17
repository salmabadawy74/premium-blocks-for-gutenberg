const { RichText} = wp.editor;

const deprecatedcontent = [
    {
        attributes: {
            position:{
                type: "string",
                default :"absolute"
            },
            width:{
                type: "string",
                default :"100%"
            },
            height:{
                type: "string",
                default :"100%"
            },
            backfaceVisibility:{
                type: "string",
                default :"hidden"
            },
            frontTitle:{
                type: "string",
                default: "Front title box"
            },
            frontTitleTag:{
                type: "string",
                default: "H3"
            },
            frontTitleColor:{
                type: "string",
                default: "#e3d192"
            },
            frontDescription:{
                type: "string",
                default: "Front description"
            },
            frontDescriptionColor:{
                type: "string",
                default: "#ddd"
            },
            frontBackgroundColor:{
                type: "string",
                default: "#7c5707"
            },
            backTitle:{
                type: "string",
                default: "Back title box"
            },
            backTitleTag:{
                type: "string",
                default: "H3"
            },
            backTitleColor:{
                type: "string",
                default: "#fff"
            },
            backDescription:{
                type: "string",
                default: "Back description"
            },
            backDescriptionColor:{
                type: "string",
                default: "#ddd"
            },
            backBackgroundColor:{
                type: "string",
                default: "#ae8686"
            },
            backTransform:{
                type:"string",
                default:"rotateY(180deg)"
            },
            imgWidth:{
                type:"string",
                default: "300px"
            },
            imgHeight:{
                type:"string",
                default: "300px"
            },
            frontIconType:{
                type: "string",
                default: "dash"
            },
            frontIconSelected:{
                type: "string",
                default: "dashicons dashicons-admin-site"
            },
            frontIconCheck:{
                type:"Boolean",
                default: false
            },
            frontIconSize: {
                type: "number"
            },
            frontIconColor: {
                type: "string",
                default: "#fff"
            },
            frontIconBackground: {
                type: "string",
                default:"transparent"
            },
            frontIconAlign: {
                type: "string",
                default: "center"
            },
            frontIconPaddingTop: {
                type: "number",
                default: "0"
            },
            frontIconPaddingRight: {
                type: "number",
                default: "0"
            },
            frontIconPaddingBottom: {
                type: "number",
                default: "0"
            },
            frontIconPaddingLeft: {
                type: "number",
                default: "0"
            },
            frontIconMarginTop: {
                type: "number",
                default: "0"
            },
            frontIconMarginRight: {
                type: "number",
                default: "0"
            },
            frontIconMarginBottom: {
                type: "number",
                default: "0"
            },
            frontIconMarginLeft: {
                type: "number",
                default: "0"
            },
            frontTitleCheck:{
                type:"Boolean",
                default: true
            },
            frontTitleSize:{
                type:"number",
            },  
            frontTitlelineHeight:{
                type:"number",       
            },
            frontTitleShadowColor: {
                type: "string"
            },
            frontTitleShadowBlur: {
                type: "number",
                default:"0"
            },
            frontTitleShadowHorizontal: {
                type: "number",
                default:"0"
            },
            frontTitleShadowVertical: {
                type: "number",
                default:"0"
            },
            frontTitlePaddingTop: {
                type: "number"
            },
            frontTitlePaddingRight: {
                type: "number"
            },
            frontTitlePaddingBottom: {
                type: "number"
            },
            frontTitlePaddingLeft: {
                type: "number"
            },
            frontTitleMarginTop: {
                type: "number"
            },
            frontTitleMarginRight: {
                type: "number"
            },
            frontTitleMarginBottom: {
                type: "number"
            },
            frontTitleMarginLeft: {
                type: "number"
            },
            frontDescCheck:{
                type:"Boolean",
                default: true
            },
            frontDescSize:{
                type:"number",
            },  
            frontDesclineHeight:{
                type:"number",       
            },
            frontDescShadowColor: {
                type: "string"
            },
            frontDescShadowBlur: {
                type: "number",
                default:"0"
            },
            frontDescShadowHorizontal: {
                type: "number",
                default:"0"
            },
            frontDescShadowVertical: {
                type: "number",
                default:"0"
            },
            frontDescPaddingTop: {
                type: "number"
              },
            frontDescPaddingRight: {
                type: "number"
              },
            frontDescPaddingBottom: {
                type: "number"
              },
            frontDescPaddingLeft: {
                type: "number"
              },
            frontDescMarginTop: {
                type: "number"
              },
            frontDescMarginRight: {
                type: "number"
              },
            frontDescMarginBottom: {
                type: "number"
              },
            frontDescMarginLeft: {
                type: "number"
              },
            pxUnit: {
                type: "string",
                default: "px"
            },
            paddingUnit:{
                type:"string",
                default:"px"
            },
            marginUnit:{
                type:"string",
                default:"px"
            },
            backIconType:{
                type: "string",
                default: "dash"
            },
            backIconSelected:{
                type: "string",
                default: "dashicons dashicons-admin-site"
            },
            backIconCheck:{
                type:"Boolean",
                default: true
            },
            backIconSize: {
                type: "number"
            },
            backIconColor: {
                type: "string",
                default: "#fff"
            },
            backIconBackground: {
                type: "string",
                default:"transparent"
            },
            backIconAlign: {
                type: "string",
                default: "center"
            },
            backIconPaddingTop: {
                type: "number",
                default: "0"
            },
            backIconPaddingRight: {
                type: "number",
                default: "0"
            },
            backIconPaddingBottom: {
                type: "number",
                default: "0"
            },
            backIconPaddingLeft: {
                type: "number",
                default: "0"
            },
            backIconMarginTop: {
                type: "number",
                default: "0"
            },
            backIconMarginRight: {
                type: "number",
                default: "0"
            },
            backIconMarginBottom: {
                type: "number",
                default: "0"
            },
            backIconMarginLeft: {
                type: "number",
                default: "0"
            },
            backTitleCheck:{
                type:"Boolean",
                default: false
            },
            backTitleSize:{
                type:"number",
            },
            backTitleLineHeight:{
                type:"number",       
            },
            backTitleShadowColor: {
                type: "string"
            },
            backTitleShadowBlur: {
                type: "number",
                default:"0"
            },
            backTitleShadowHorizontal: {
                type: "number",
                default:"0"
            },
            backTitleShadowVertical: {
                type: "number",
                default:"0"
            },
            backTitlePaddingTop: {
                type: "number"
              },
            backTitlePaddingRight: {
                type: "number"
              },
            backTitlePaddingBottom: {
                type: "number"
              },
            backTitlePaddingLeft: {
                type: "number"
              },
            backTitleMarginTop: {
                type: "number"
              },
            backTitleMarginRight: {
                type: "number"
              },
            backTitleMarginBottom: {
                type: "number"
              },
            backTitleMarginLeft: {
                type: "number"
              },  
            backDescCheck:{
                type:"Boolean",
                default: true
            },
            backDescSize:{
                type:"number",
            },  
            backDesclineHeight:{
                type:"number",       
            },
            backDescShadowColor: {
                type: "string"
            },
            backDescShadowBlur: {
                type: "number",
                default:"0"
            },
            backDescShadowHorizontal: {
                type: "number",
                default:"0"
            },
            backDescShadowVertical: {
                type: "number",
                default:"0"
            },
            backDescPaddingTop: {
                type: "number"
              },
            backDescPaddingRight: {
                type: "number"
              },
            backDescPaddingBottom: {
                type: "number"
              },
            backDescPaddingLeft: {
                type: "number"
              },
            backDescMarginTop: {
                type: "number"
              },
            backDescMarginRight: {
                type: "number"
              },
            backDescMarginBottom: {
                type: "number"
              },
            backDescMarginLeft: {
                type: "number"
              }
        },

        migrate( { width} ) {
            return {
                widthhh : width
            };
        },

        save:props => {

            const {
                position,
                width,
                height,
                backfaceVisibility,
                frontTitle,
                frontTitleTag,
                frontTitleColor,
                frontDescription,
                frontDescriptionColor,
                frontBackgroundColor,
                backTitle,
                backTitleTag,
                backTitleColor,
                backDescription,
                backDescriptionColor,
                backBackgroundColor,
                backTransform,
                imgWidth,
                imgHeight,
                frontIconType,
                frontIconSelected,
                frontIconCheck,
                frontIconSize,
                frontIconColor,
                frontIconBackground,
                frontIconAlign,
                frontIconPaddingTop,
                frontIconPaddingRight,
                frontIconPaddingBottom,
                frontIconPaddingLeft,
                frontIconMarginTop,
                frontIconMarginRight,
                frontIconMarginBottom,
                frontIconMarginLeft,
                frontTitleCheck,
                frontTitleSize,
                frontTitlelineHeight,
                frontTitleShadowColor,
                frontTitleShadowBlur,
                frontTitleShadowHorizontal,
                frontTitleShadowVertical, 
                frontTitlePaddingTop,
                frontTitlePaddingRight,
                frontTitlePaddingBottom,
                frontTitlePaddingLeft,
                frontTitleMarginTop,
                frontTitleMarginRight,
                frontTitleMarginBottom,
                frontTitleMarginLeft,
                frontDescCheck,
                frontDescSize,
                frontDesclineHeight,
                frontDescShadowColor,
                frontDescShadowBlur,
                frontDescShadowHorizontal,
                frontDescShadowVertical,
                frontDescPaddingTop,
                frontDescPaddingRight,
                frontDescPaddingBottom,
                frontDescPaddingLeft,
                frontDescMarginTop,
                frontDescMarginRight,
                frontDescMarginBottom,
                frontDescMarginLeft,
                pxUnit,
                paddingUnit,
                marginUnit,
                backIconType,
                backIconSelected,
                backIconCheck,
                backIconSize,
                backIconColor,
                backIconBackground,
                backIconAlign,
                backIconPaddingTop,
                backIconPaddingRight,
                backIconPaddingBottom,
                backIconPaddingLeft,
                backIconMarginTop,
                backIconMarginRight,
                backIconMarginBottom,
                backIconMarginLeft,
                backTitleCheck,
                backTitleSize,
                backTitleLineHeight,
                backTitleShadowColor,
                backTitleShadowBlur,
                backTitleShadowHorizontal,
                backTitleShadowVertical, 
                backTitlePaddingTop,
                backTitlePaddingRight,
                backTitlePaddingBottom,
                backTitlePaddingLeft,
                backTitleMarginTop,
                backTitleMarginRight,
                backTitleMarginBottom,
                backTitleMarginLeft,
                backDescCheck,
                backDescSize,
                backDesclineHeight,
                backDescShadowColor,
                backDescShadowBlur,
                backDescShadowHorizontal,
                backDescShadowVertical,
                backDescPaddingTop,
                backDescPaddingRight,
                backDescPaddingBottom,
                backDescPaddingLeft,
                backDescMarginTop,
                backDescMarginRight,
                backDescMarginBottom,
                backDescMarginLeft,
        
            } = props.attributes;
        
            return (
                <div className="premium-flip-container flip-card ">
                    <div className="premium-flip-main-box flip-card-inner">
        
                        <div className="premium-flip-front premium-flip-frontlr flip-card-front" style={{backgroundColor: frontBackgroundColor || "#7c5707"}}>
                            <div className="premium-flip-front-overlay">
                                <div className="premium-flip-front-content-container">
                                    <div className="premium-flip-front-content">
                                        <div className="premium-flip-text-wrapper PafadeInRevLeft">
        
                                            {frontIconCheck && (
                                                <div 
                                                    className={`premium-flipbox__froIcon`}
                                                    style={{
                                                        width: width ,
                                                        height: height,
                                                        marginTop: (frontIconMarginTop || "0") + (marginUnit + "px"),
                                                        marginRight: (frontIconMarginRight || "0") + (marginUnit + "px"),
                                                        marginBottom: (frontIconMarginBottom ||"0") + (marginUnit + "px"),
                                                        marginLeft: (frontIconMarginLeft ||"0") + (marginUnit + "px"),
                                                    }}
                                                >
        
                                                    {frontIconType === "fa" && 1 != FontAwesomeEnabled && (
                                                        <p className={`premium-icon__alert`}>
                                                            {__("Please Enable Font Awesome Icons from Plugin settings")}
                                                        </p>
                                                    )}
                                                    {(frontIconType === "dash" || 1 == FontAwesomeEnabled) && (
                                                        <i
                                                            className={`premium-icon ${frontIconSelected}`}
                                                            style={{
                                                                width:width,
                                                                height:height,
                                                                color: frontIconColor || "#fff",
                                                                backgroundColor: frontIconBackground || "transparent",
                                                                fontSize: (frontIconSize || 50) + "px",
                                                                paddingTop: (frontIconPaddingTop || "0") + (paddingUnit || "px"),
                                                                paddingRight: (frontIconPaddingRight || "0") + (paddingUnit || "px"),
                                                                paddingBottom: (frontIconPaddingBottom || "0" )+ (paddingUnit || "px"),
                                                                paddingLeft: (frontIconPaddingLeft || "0")+ (paddingUnit || "px"),
                                                            }}
                                                        />
                                                    )}
        
                                                </div>
                                            )}
        
                                            {frontTitleCheck && (
                                                <RichText.Content
                                                    tagName="h3"
                                                    className={`premium-flip-front-title`}
                                                    value={frontTitle}
                                                    style={{
                                                        color: frontTitleColor || "#e3d192",
                                                        fontSize: frontTitleSize + "px",
                                                        lineHeight: frontTitlelineHeight + "px",
                                                        textShadow: `${frontTitleShadowHorizontal}px ${frontTitleShadowVertical}px ${frontTitleShadowBlur }px ${frontTitleShadowColor}`,
                                                        paddingTop: frontTitlePaddingTop + "px",
                                                        paddingBottom: frontTitlePaddingBottom + "px",
                                                        paddingLeft: frontTitlePaddingLeft + "px",
                                                        paddingRight: frontTitlePaddingRight + "px",
                                                        marginTop: frontTitleMarginTop + "px",
                                                        marginBottom: frontTitleMarginBottom + "px",
                                                        marginLeft: frontTitleMarginLeft + "px",
                                                        marginRight: frontTitleMarginRight + "px",
                                                    }}
                                                    keepPlaceholderOnFocus                    
                                                /> 
                                            )}
                                            {frontDescCheck && (
                                                <RichText.Content
                                                    tagName="p"
                                                    className={`premium-flip-front-description`}
                                                    value={frontDescription}
                                                    style={{
                                                        color : frontDescriptionColor || "#ddd",
                                                        fontSize: frontDescSize + "px",
                                                        lineHeight: frontDesclineHeight + "px",
                                                        textShadow: `${frontDescShadowHorizontal}px ${frontDescShadowVertical}px ${frontDescShadowBlur }px ${frontDescShadowColor}`,
                                                        paddingTop: frontDescPaddingTop + "px",
                                                        paddingBottom: frontDescPaddingBottom + "px",
                                                        paddingLeft: frontDescPaddingLeft + "px",
                                                        paddingRight: frontDescPaddingRight + "px",
                                                        marginTop: frontDescMarginTop + "px",
                                                        marginBottom: frontDescMarginBottom + "px",
                                                        marginLeft: frontDescMarginLeft + "px",
                                                        marginRight: frontDescMarginRight + "px",
                                                    }}
                                                    keepPlaceholderOnFocus                    
                                                /> 
                                            )}
        
                                        </div>
                                    </div>    
                                </div>  
                            </div>
                        </div>
        
                        <div className="premium-flip-back premium-flip-backlr flip-card-back" style={{backgroundColor: backBackgroundColor || "#ae8686" }}>
                            <div className="premium-flip-back-overlay">   
                                <div className="premium-flip-back-content-container">    
                                    <div className="premium-flip-back-content">   
                                        <div className="premium-flip-back-text-wrapper PafadeInRevRight">      
        
                                        {backIconCheck && (
                                                    <div 
                                                        className={`premium-flipbox__backIcon`}
                                                        style={{
                                                            width: width,
                                                            height: height,
                                                            marginTop: (backIconMarginTop || "0") + "px",
                                                            marginRight: (backIconMarginRight || "0") + "px",
                                                            marginBottom: (backIconMarginBottom || "0")+ "px",
                                                            marginLeft: (backIconMarginLeft || "0") + "px",                                                     
                                                        }}
                                                    >
        
                                                        {backIconType === "fa" && 1 != FontAwesomeEnabled && (
                                                            <p className={`premium-icon__alert`}>
                                                                {__("Please Enable Font Awesome Icons from Plugin settings")}
                                                            </p>
                                                        )}
                                                        {( backIconType === "dash" || 1 == FontAwesomeEnabled) && (
                                                            <i
                                                                className={`premium-icon ${backIconSelected}`}
                                                                style={{
                                                                    width:width,
                                                                    height:height,
                                                                    color: backIconColor || "#fff",
                                                                    backgroundColor: backIconBackground || "transparent",
                                                                    fontSize: (backIconSize || 50) + "px",
                                                                    paddingTop: (backIconPaddingTop || "0") + "px",
                                                                    paddingRight: (backIconPaddingRight || "0") + "px",
                                                                    paddingBottom: (backIconPaddingBottom || "0") + "px",
                                                                    paddingLeft: (backIconPaddingLeft || "0") + "px",
                                                                }}
                                                            />
                                                        )}
                                                    </div>
                                                )}       
        
                                                {backTitleCheck && (
                                                    <RichText.Content
                                                        tagName="h3"
                                                        className={`premium-flip-back-title`}
                                                        value={backTitle}
                                                        style={{
                                                            color: backTitleColor || "#fff",
                                                            fontSize: backTitleSize + "px",
                                                            lineHeight: backTitleLineHeight + "px",
                                                            textShadow: `${backTitleShadowHorizontal}px ${backTitleShadowVertical}px ${backTitleShadowBlur }px ${backTitleShadowColor}`,
                                                            paddingTop: backTitlePaddingTop + "px",
                                                            paddingBottom: backTitlePaddingBottom + "px",
                                                            paddingLeft: backTitlePaddingLeft + "px",
                                                            paddingRight: backTitlePaddingRight + "px",
                                                            marginTop: backTitleMarginTop + "px",
                                                            marginBottom: backTitleMarginBottom + "px",
                                                            marginLeft: backTitleMarginLeft + "px",
                                                            marginRight: backTitleMarginRight + "px",
                                                        }}
                                                        keepPlaceholderOnFocus                    
                                                    /> 
                                                )}
                                                {backDescCheck && (
                                                    <RichText.Content
                                                        tagName="p"
                                                        className={`premium-flip-back-description`}
                                                        value={backDescription}
                                                        style={{
                                                            color : backDescriptionColor || "#ddd",
                                                            fontSize: backDescSize + "px",
                                                            lineHeight: backDesclineHeight + "px",
                                                            textShadow: `${backDescShadowHorizontal}px ${backDescShadowVertical}px ${backDescShadowBlur }px ${backDescShadowColor}`,
                                                            paddingTop: backDescPaddingTop + "px",
                                                            paddingBottom: backDescPaddingBottom + "px",
                                                            paddingLeft: backDescPaddingLeft + "px",
                                                            paddingRight: backDescPaddingRight + "px",
                                                            marginTop: backDescMarginTop + "px",
                                                            marginBottom: backDescMarginBottom + "px",
                                                            marginLeft: backDescMarginLeft + "px",
                                                            marginRight: backDescMarginRight + "px",
                                                        }}
                                                        keepPlaceholderOnFocus                    
                                                    /> 
                                                )}
        
                                        </div>                        
                                    </div>            
                                </div>
                            </div>                                         
                        </div> 
        
                    </div>
                </div>
            );
        },
    }, 
    {
        attributes: {
            position:{
                type: "string",
                default :"absolute"
            },
            widthhh:{
                type: "string",
                default :"100%"
            },
            height:{
                type: "string",
                default :"100%"
            },
            backfaceVisibility:{
                type: "string",
                default :"hidden"
            },
            frontTitle:{
                type: "string",
                default: "Front title box"
            },
            frontTitleTag:{
                type: "string",
                default: "H3"
            },
            frontTitleColor:{
                type: "string",
                default: "#e3d192"
            },
            frontDescription:{
                type: "string",
                default: "Front description"
            },
            frontDescriptionColor:{
                type: "string",
                default: "#ddd"
            },
            frontBackgroundColor:{
                type: "string",
                default: "#7c5707"
            },
            backTitle:{
                type: "string",
                default: "Back title box"
            },
            backTitleTag:{
                type: "string",
                default: "H3"
            },
            backTitleColor:{
                type: "string",
                default: "#fff"
            },
            backDescription:{
                type: "string",
                default: "Back description"
            },
            backDescriptionColor:{
                type: "string",
                default: "#ddd"
            },
            backBackgroundColor:{
                type: "string",
                default: "#ae8686"
            },
            backTransform:{
                type:"string",
                default:"rotateY(180deg)"
            },
            imgWidth:{
                type:"string",
                default: "300px"
            },
            imgHeight:{
                type:"string",
                default: "300px"
            },
            frontIconType:{
                type: "string",
                default: "dash"
            },
            frontIconSelected:{
                type: "string",
                default: "dashicons dashicons-admin-site"
            },
            frontIconCheck:{
                type:"Boolean",
                default: false
            },
            frontIconSize: {
                type: "number"
            },
            frontIconColor: {
                type: "string",
                default: "#fff"
            },
            frontIconBackground: {
                type: "string",
                default:"transparent"
            },
            frontIconAlign: {
                type: "string",
                default: "center"
            },
            frontIconPaddingTop: {
                type: "number",
                default: "0"
            },
            frontIconPaddingRight: {
                type: "number",
                default: "0"
            },
            frontIconPaddingBottom: {
                type: "number",
                default: "0"
            },
            frontIconPaddingLeft: {
                type: "number",
                default: "0"
            },
            frontIconMarginTop: {
                type: "number",
                default: "0"
            },
            frontIconMarginRight: {
                type: "number",
                default: "0"
            },
            frontIconMarginBottom: {
                type: "number",
                default: "0"
            },
            frontIconMarginLeft: {
                type: "number",
                default: "0"
            },
            frontTitleCheck:{
                type:"Boolean",
                default: true
            },
            frontTitleSize:{
                type:"number",
            },  
            frontTitlelineHeight:{
                type:"number",       
            },
            frontTitleShadowColor: {
                type: "string"
            },
            frontTitleShadowBlur: {
                type: "number",
                default:"0"
            },
            frontTitleShadowHorizontal: {
                type: "number",
                default:"0"
            },
            frontTitleShadowVertical: {
                type: "number",
                default:"0"
            },
            frontTitlePaddingTop: {
                type: "number"
            },
            frontTitlePaddingRight: {
                type: "number"
            },
            frontTitlePaddingBottom: {
                type: "number"
            },
            frontTitlePaddingLeft: {
                type: "number"
            },
            frontTitleMarginTop: {
                type: "number"
            },
            frontTitleMarginRight: {
                type: "number"
            },
            frontTitleMarginBottom: {
                type: "number"
            },
            frontTitleMarginLeft: {
                type: "number"
            },
            frontDescCheck:{
                type:"Boolean",
                default: true
            },
            frontDescSize:{
                type:"number",
            },  
            frontDesclineHeight:{
                type:"number",       
            },
            frontDescShadowColor: {
                type: "string"
            },
            frontDescShadowBlur: {
                type: "number",
                default:"0"
            },
            frontDescShadowHorizontal: {
                type: "number",
                default:"0"
            },
            frontDescShadowVertical: {
                type: "number",
                default:"0"
            },
            frontDescPaddingTop: {
                type: "number"
              },
            frontDescPaddingRight: {
                type: "number"
              },
            frontDescPaddingBottom: {
                type: "number"
              },
            frontDescPaddingLeft: {
                type: "number"
              },
            frontDescMarginTop: {
                type: "number"
              },
            frontDescMarginRight: {
                type: "number"
              },
            frontDescMarginBottom: {
                type: "number"
              },
            frontDescMarginLeft: {
                type: "number"
              },
            pxUnit: {
                type: "string",
                default: "px"
            },
            paddingUnit:{
                type:"string",
                default:"px"
            },
            marginUnit:{
                type:"string",
                default:"px"
            },
            backIconType:{
                type: "string",
                default: "dash"
            },
            backIconSelected:{
                type: "string",
                default: "dashicons dashicons-admin-site"
            },
            backIconCheck:{
                type:"Boolean",
                default: true
            },
            backIconSize: {
                type: "number"
            },
            backIconColor: {
                type: "string",
                default: "#fff"
            },
            backIconBackground: {
                type: "string",
                default:"transparent"
            },
            backIconAlign: {
                type: "string",
                default: "center"
            },
            backIconPaddingTop: {
                type: "number",
                default: "0"
            },
            backIconPaddingRight: {
                type: "number",
                default: "0"
            },
            backIconPaddingBottom: {
                type: "number",
                default: "0"
            },
            backIconPaddingLeft: {
                type: "number",
                default: "0"
            },
            backIconMarginTop: {
                type: "number",
                default: "0"
            },
            backIconMarginRight: {
                type: "number",
                default: "0"
            },
            backIconMarginBottom: {
                type: "number",
                default: "0"
            },
            backIconMarginLeft: {
                type: "number",
                default: "0"
            },
            backTitleCheck:{
                type:"Boolean",
                default: false
            },
            backTitleSize:{
                type:"number",
            },
            backTitleLineHeight:{
                type:"number",       
            },
            backTitleShadowColor: {
                type: "string"
            },
            backTitleShadowBlur: {
                type: "number",
                default:"0"
            },
            backTitleShadowHorizontal: {
                type: "number",
                default:"0"
            },
            backTitleShadowVertical: {
                type: "number",
                default:"0"
            },
            backTitlePaddingTop: {
                type: "number"
              },
            backTitlePaddingRight: {
                type: "number"
              },
            backTitlePaddingBottom: {
                type: "number"
              },
            backTitlePaddingLeft: {
                type: "number"
              },
            backTitleMarginTop: {
                type: "number"
              },
            backTitleMarginRight: {
                type: "number"
              },
            backTitleMarginBottom: {
                type: "number"
              },
            backTitleMarginLeft: {
                type: "number"
              },  
            backDescCheck:{
                type:"Boolean",
                default: true
            },
            backDescSize:{
                type:"number",
            },  
            backDesclineHeight:{
                type:"number",       
            },
            backDescShadowColor: {
                type: "string"
            },
            backDescShadowBlur: {
                type: "number",
                default:"0"
            },
            backDescShadowHorizontal: {
                type: "number",
                default:"0"
            },
            backDescShadowVertical: {
                type: "number",
                default:"0"
            },
            backDescPaddingTop: {
                type: "number"
              },
            backDescPaddingRight: {
                type: "number"
              },
            backDescPaddingBottom: {
                type: "number"
              },
            backDescPaddingLeft: {
                type: "number"
              },
            backDescMarginTop: {
                type: "number"
              },
            backDescMarginRight: {
                type: "number"
              },
            backDescMarginBottom: {
                type: "number"
              },
            backDescMarginLeft: {
                type: "number"
              },
        },
        save: props =>{

            const {
                position,
                widthhh,
                height,
                backfaceVisibility,
                frontTitle,
                frontTitleTag,
                frontTitleColor,
                frontDescription,
                frontDescriptionColor,
                frontBackgroundColor,
                backTitle,
                backTitleTag,
                backTitleColor,
                backDescription,
                backDescriptionColor,
                backBackgroundColor,
                backTransform,
                imgWidth,
                imgHeight,
                frontIconType,
                frontIconSelected,
                frontIconCheck,
                frontIconSize,
                frontIconColor,
                frontIconBackground,
                frontIconAlign,
                frontIconPaddingTop,
                frontIconPaddingRight,
                frontIconPaddingBottom,
                frontIconPaddingLeft,
                frontIconMarginTop,
                frontIconMarginRight,
                frontIconMarginBottom,
                frontIconMarginLeft,
                frontTitleCheck,
                frontTitleSize,
                frontTitlelineHeight,
                frontTitleShadowColor,
                frontTitleShadowBlur,
                frontTitleShadowHorizontal,
                frontTitleShadowVertical, 
                frontTitlePaddingTop,
                frontTitlePaddingRight,
                frontTitlePaddingBottom,
                frontTitlePaddingLeft,
                frontTitleMarginTop,
                frontTitleMarginRight,
                frontTitleMarginBottom,
                frontTitleMarginLeft,
                frontDescCheck,
                frontDescSize,
                frontDesclineHeight,
                frontDescShadowColor,
                frontDescShadowBlur,
                frontDescShadowHorizontal,
                frontDescShadowVertical,
                frontDescPaddingTop,
                frontDescPaddingRight,
                frontDescPaddingBottom,
                frontDescPaddingLeft,
                frontDescMarginTop,
                frontDescMarginRight,
                frontDescMarginBottom,
                frontDescMarginLeft,
                pxUnit,
                paddingUnit,
                marginUnit,
                backIconType,
                backIconSelected,
                backIconCheck,
                backIconSize,
                backIconColor,
                backIconBackground,
                backIconAlign,
                backIconPaddingTop,
                backIconPaddingRight,
                backIconPaddingBottom,
                backIconPaddingLeft,
                backIconMarginTop,
                backIconMarginRight,
                backIconMarginBottom,
                backIconMarginLeft,
                backTitleCheck,
                backTitleSize,
                backTitleLineHeight,
                backTitleShadowColor,
                backTitleShadowBlur,
                backTitleShadowHorizontal,
                backTitleShadowVertical, 
                backTitlePaddingTop,
                backTitlePaddingRight,
                backTitlePaddingBottom,
                backTitlePaddingLeft,
                backTitleMarginTop,
                backTitleMarginRight,
                backTitleMarginBottom,
                backTitleMarginLeft,
                backDescCheck,
                backDescSize,
                backDesclineHeight,
                backDescShadowColor,
                backDescShadowBlur,
                backDescShadowHorizontal,
                backDescShadowVertical,
                backDescPaddingTop,
                backDescPaddingRight,
                backDescPaddingBottom,
                backDescPaddingLeft,
                backDescMarginTop,
                backDescMarginRight,
                backDescMarginBottom,
                backDescMarginLeft,
        
            } = props.attributes;
        
            return (
                <div className="premium-flip-container flip-card ">
                    <div className="premium-flip-main-box flip-card-inner">
        
                        <div className="premium-flip-front premium-flip-frontlr flip-card-front" style={{backgroundColor: frontBackgroundColor || "#7c5707"}}>
                            <div className="premium-flip-front-overlay">
                                <div className="premium-flip-front-content-container">
                                    <div className="premium-flip-front-content">
                                        <div className="premium-flip-text-wrapper PafadeInRevLeft">
        
                                            {frontIconCheck && (
                                                <div 
                                                    className={`premium-flipbox__froIcon`}
                                                    style={{
                                                        width: widthhh ,
                                                        height: height,
                                                        marginTop: (frontIconMarginTop || "0") + (marginUnit + "px"),
                                                        marginRight: (frontIconMarginRight || "0") + (marginUnit + "px"),
                                                        marginBottom: (frontIconMarginBottom ||"0") + (marginUnit + "px"),
                                                        marginLeft: (frontIconMarginLeft ||"0") + (marginUnit + "px"),
                                                    }}
                                                >
        
                                                    {frontIconType === "fa" && 1 != FontAwesomeEnabled && (
                                                        <p className={`premium-icon__alert`}>
                                                            {__("Please Enable Font Awesome Icons from Plugin settings")}
                                                        </p>
                                                    )}
                                                    {(frontIconType === "dash" || 1 == FontAwesomeEnabled) && (
                                                        <i
                                                            className={`premium-icon ${frontIconSelected}`}
                                                            style={{
                                                                width:widthhh,
                                                                height:height,
                                                                color: frontIconColor || "#fff",
                                                                backgroundColor: frontIconBackground || "transparent",
                                                                fontSize: (frontIconSize || 50) + "px",
                                                                paddingTop: (frontIconPaddingTop || "0") + (paddingUnit || "px"),
                                                                paddingRight: (frontIconPaddingRight || "0") + (paddingUnit || "px"),
                                                                paddingBottom: (frontIconPaddingBottom || "0" )+ (paddingUnit || "px"),
                                                                paddingLeft: (frontIconPaddingLeft || "0")+ (paddingUnit || "px"),
                                                            }}
                                                        />
                                                    )}
        
                                                </div>
                                            )}
        
                                            {frontTitleCheck && (
                                                <RichText.Content
                                                    tagName="h2"
                                                    className={`premium-flip-front-title`}
                                                    value={frontTitle}
                                                    style={{
                                                        color: frontTitleColor || "#e3d192",
                                                        fontSize: frontTitleSize + "px",
                                                        lineHeight: frontTitlelineHeight + "px",
                                                        textShadow: `${frontTitleShadowHorizontal}px ${frontTitleShadowVertical}px ${frontTitleShadowBlur }px ${frontTitleShadowColor}`,
                                                        paddingTop: frontTitlePaddingTop + "px",
                                                        paddingBottom: frontTitlePaddingBottom + "px",
                                                        paddingLeft: frontTitlePaddingLeft + "px",
                                                        paddingRight: frontTitlePaddingRight + "px",
                                                        marginTop: frontTitleMarginTop + "px",
                                                        marginBottom: frontTitleMarginBottom + "px",
                                                        marginLeft: frontTitleMarginLeft + "px",
                                                        marginRight: frontTitleMarginRight + "px",
                                                    }}
                                                    keepPlaceholderOnFocus                    
                                                /> 
                                            )}
                                            {frontDescCheck && (
                                                <RichText.Content
                                                    tagName="p"
                                                    className={`premium-flip-front-description`}
                                                    value={frontDescription}
                                                    style={{
                                                        color : frontDescriptionColor || "#ddd",
                                                        fontSize: frontDescSize + "px",
                                                        lineHeight: frontDesclineHeight + "px",
                                                        textShadow: `${frontDescShadowHorizontal}px ${frontDescShadowVertical}px ${frontDescShadowBlur }px ${frontDescShadowColor}`,
                                                        paddingTop: frontDescPaddingTop + "px",
                                                        paddingBottom: frontDescPaddingBottom + "px",
                                                        paddingLeft: frontDescPaddingLeft + "px",
                                                        paddingRight: frontDescPaddingRight + "px",
                                                        marginTop: frontDescMarginTop + "px",
                                                        marginBottom: frontDescMarginBottom + "px",
                                                        marginLeft: frontDescMarginLeft + "px",
                                                        marginRight: frontDescMarginRight + "px",
                                                    }}
                                                    keepPlaceholderOnFocus                    
                                                /> 
                                            )}
        
                                        </div>
                                    </div>    
                                </div>  
                            </div>
                        </div>
        
                        <div className="premium-flip-back premium-flip-backlr flip-card-back" style={{backgroundColor: backBackgroundColor || "#ae8686" }}>
                            <div className="premium-flip-back-overlay">   
                                <div className="premium-flip-back-content-container">    
                                    <div className="premium-flip-back-content">   
                                        <div className="premium-flip-back-text-wrapper PafadeInRevRight">      
        
                                        {backIconCheck && (
                                                    <div 
                                                        className={`premium-flipbox__backIcon`}
                                                        style={{
                                                            width: widthhh,
                                                            height: height,
                                                            marginTop: (backIconMarginTop || "0") + "px",
                                                            marginRight: (backIconMarginRight || "0") + "px",
                                                            marginBottom: (backIconMarginBottom || "0")+ "px",
                                                            marginLeft: (backIconMarginLeft || "0") + "px",                                                     
                                                        }}
                                                    >
        
                                                        {backIconType === "fa" && 1 != FontAwesomeEnabled && (
                                                            <p className={`premium-icon__alert`}>
                                                                {__("Please Enable Font Awesome Icons from Plugin settings")}
                                                            </p>
                                                        )}
                                                        {( backIconType === "dash" || 1 == FontAwesomeEnabled) && (
                                                            <i
                                                                className={`premium-icon ${backIconSelected}`}
                                                                style={{
                                                                    width:widthhh,
                                                                    height:height,
                                                                    color: backIconColor || "#fff",
                                                                    backgroundColor: backIconBackground || "transparent",
                                                                    fontSize: (backIconSize || 50) + "px",
                                                                    paddingTop: (backIconPaddingTop || "0") + "px",
                                                                    paddingRight: (backIconPaddingRight || "0") + "px",
                                                                    paddingBottom: (backIconPaddingBottom || "0") + "px",
                                                                    paddingLeft: (backIconPaddingLeft || "0") + "px",
                                                                }}
                                                            />
                                                        )}
                                                    </div>
                                                )}       
        
                                                {backTitleCheck && (
                                                    <RichText.Content
                                                        tagName="h2"
                                                        className={`premium-flip-back-title`}
                                                        value={backTitle}
                                                        style={{
                                                            color: backTitleColor || "#fff",
                                                            fontSize: backTitleSize + "px",
                                                            lineHeight: backTitleLineHeight + "px",
                                                            textShadow: `${backTitleShadowHorizontal}px ${backTitleShadowVertical}px ${backTitleShadowBlur }px ${backTitleShadowColor}`,
                                                            paddingTop: backTitlePaddingTop + "px",
                                                            paddingBottom: backTitlePaddingBottom + "px",
                                                            paddingLeft: backTitlePaddingLeft + "px",
                                                            paddingRight: backTitlePaddingRight + "px",
                                                            marginTop: backTitleMarginTop + "px",
                                                            marginBottom: backTitleMarginBottom + "px",
                                                            marginLeft: backTitleMarginLeft + "px",
                                                            marginRight: backTitleMarginRight + "px",
                                                        }}
                                                        keepPlaceholderOnFocus                    
                                                    /> 
                                                )}
                                                {backDescCheck && (
                                                    <RichText.Content
                                                        tagName="p"
                                                        className={`premium-flip-back-description`}
                                                        value={backDescription}
                                                        style={{
                                                            color : backDescriptionColor || "#ddd",
                                                            fontSize: backDescSize + "px",
                                                            lineHeight: backDesclineHeight + "px",
                                                            textShadow: `${backDescShadowHorizontal}px ${backDescShadowVertical}px ${backDescShadowBlur }px ${backDescShadowColor}`,
                                                            paddingTop: backDescPaddingTop + "px",
                                                            paddingBottom: backDescPaddingBottom + "px",
                                                            paddingLeft: backDescPaddingLeft + "px",
                                                            paddingRight: backDescPaddingRight + "px",
                                                            marginTop: backDescMarginTop + "px",
                                                            marginBottom: backDescMarginBottom + "px",
                                                            marginLeft: backDescMarginLeft + "px",
                                                            marginRight: backDescMarginRight + "px",
                                                        }}
                                                        keepPlaceholderOnFocus                    
                                                    /> 
                                                )}
        
                                        </div>                        
                                    </div>            
                                </div>
                            </div>                                         
                        </div> 
        
                    </div>
                </div>
            );
        }
    }
];

export default deprecatedcontent;