
import DefaultImage from "../../components/default-image";
const save = props => {
    const {className} = props;
    const{
            imageURL,
            imageID,
            imageWidth,
            imageWidthU,
            effect,
            NameTag,
            TitleTag,
            Person,
            PersonTitle,
            PersonDesc,
            align,
            iconSize,
            iconColor,
            iconBackColor,
            facebookURL,
            twitterURL,
            instaURL,
            youtubeURL,
            googleURL,
            behanceURL,
            pinterestURL,
            dribbbleURL,
            emailAddress,
            nameColor,
            titleColor,
            nameSpacing,
            nameStyle,
            nameWeight,
            nameLine,
            titleSpacing,
            titleStyle,
            titleWeight,
            titleLine,
            nameShadowColor,
            nameShadowBlur,
            nameShadowHorizontal,
            nameShadowVertical,
            titleShadowColor,
            titleShadowBlur,
            titleShadowHorizontal,
            titleShadowVertical,
            descLine,
            descSpacing,
            descStyle,
            descWeight,
            descColor,
            iconBorderRadius,
            iconBorderColor,
            iconBorderType,
            iconBorderWidth,
            iconPaddingT,
            iconPaddingR,
            iconPaddingL,
            iconPaddingB,
            iconHoverColor,
            iconBackHover
        }=props.attributes;
    
    return(
        <div>
    {(!imageURL )&&( <DefaultImage />)}
      {imageURL && (
        <div className={`premium-person__imgFrame`}>
          <img
            className={`premium-person__img premium-person__img-${effect}`}
            src={imageURL}
            width={imageWidth + imageWidthU} />
          <div className="premium-person__imgOverlay">
            <RichText
              tagName={NameTag}
              value={Person}
              isSelected={false}
              onChange={newText => setAttributes({ Person: newText })}
              style={{
                textAlign: align,
                margin: "0px",
                padding: "0px",
                color: nameColor,
                fontWeight: nameWeight,
                lineHeight: nameLine + "px",
                fontStyle: nameStyle,
                letterSpacing: nameSpacing + "px",
                textShadow: `${nameShadowHorizontal}px ${nameShadowVertical}px ${nameShadowBlur}px ${nameShadowColor}`
              }}
            >

            </RichText>

            <RichText
              tagName={TitleTag}
              value={PersonTitle}
              isSelected={false}
              onChange={newText => setAttributes({ PersonTitle: newText })}
              style={{
                textAlign: align,
                margin: "0px",
                padding: "0px",
                whiteSpace: "nowrap",
                color: titleColor,
                fontWeight: titleWeight,
                lineHeight: titleLine + "px",
                fontStyle: titleStyle,
                letterSpacing: titleSpacing + "px",
                textShadow: `${titleShadowHorizontal}px ${titleShadowVertical}px ${titleShadowBlur}px ${titleShadowColor}`
              }}
            >

            </RichText>

            <RichText
              tagName={"p"}
              value={PersonDesc}
              isSelected={false}
              onChange={newText => setAttributes({ PersonDesc: newText })}
              style={{
                textAlign: align,
                whiteSpace: "nowrap",
                fontWeight: descWeight,
                lineHeight: descLine + "px",
                fontStyle: descStyle,
                letterSpacing: descSpacing + "px",
                color: descColor
              }}
            >

            </RichText>
            <style
              dangerouslySetInnerHTML={{
                __html: [
                  `.premium-person__icon:hover{`,
                  `color:${iconHoverColor}!important;`,
                  `background-color:${iconBackHover}!important;`,
                  "}"
                ].join("\n")
              }}
            />

            <div style={{ textAlign: align }}>
              {(1 == FontAwesomeEnabled) && (facebookURL !== '') && (
                <a href={facebookURL}><i
                  className={`fa fa-facebook premium-person__icon `}
                  style={{
                    color: iconColor,
                    backgroundColor: iconBackColor,
                    border: `${iconBorderType}`,
                    borderWidth: `${iconBorderWidth}px`,
                    borderColor: iconBorderColor,
                    borderRadius: `${iconBorderRadius}px`,
                    paddingTop: `${iconPaddingT}px`,
                    paddingBottom: `${iconPaddingB}px`,
                    paddingLeft: `${iconPaddingL}px`,
                    paddingRight: `${iconPaddingR}px`
                  }}
                /></a>
              )}
              {(1 == FontAwesomeEnabled) && (twitterURL !== '') && (
                <a href={twitterURL}> <i
                  className={`fa fa-twitter premium-person__icon `}
                  style={{
                    color: iconColor,
                    backgroundColor: iconBackColor,
                    border: `${iconBorderType}`,
                    borderWidth: `${iconBorderWidth}px`,
                    borderColor: iconBorderColor,
                    borderRadius: `${iconBorderRadius}px`,
                    paddingTop: `${iconPaddingT}px`,
                    paddingBottom: `${iconPaddingB}px`,
                    paddingLeft: `${iconPaddingL}px`,
                    paddingRight: `${iconPaddingR}px`
                  }}
                /></a>
              )}
              {(1 == FontAwesomeEnabled) && (instaURL !== '') && (
                <a href={instaURL}><i
                  className={`fa fa-instagram premium-person__icon `}
                  style={{
                    color: iconColor,
                    backgroundColor: iconBackColor,
                    border: `${iconBorderType}`,
                    borderWidth: `${iconBorderWidth}px`,
                    borderColor: iconBorderColor,
                    borderRadius: `${iconBorderRadius}px`,
                    paddingTop: `${iconPaddingT}px`,
                    paddingBottom: `${iconPaddingB}px`,
                    paddingLeft: `${iconPaddingL}px`,
                    paddingRight: `${iconPaddingR}px`
                  }}
                /></a>
              )}
              {(1 == FontAwesomeEnabled) && (youtubeURL !== '') && (
                <a href={youtubeURL}><i
                  className={`fa fa-youtube premium-person__icon `}
                  style={{
                    color: iconColor,
                    backgroundColor: iconBackColor,
                    border: `${iconBorderType}`,
                    borderWidth: `${iconBorderWidth}px`,
                    borderColor: iconBorderColor,
                    borderRadius: `${iconBorderRadius}px`,
                    paddingTop: `${iconPaddingT}px`,
                    paddingBottom: `${iconPaddingB}px`,
                    paddingLeft: `${iconPaddingL}px`,
                    paddingRight: `${iconPaddingR}px`
                  }}
                /></a>
              )}
              {(1 == FontAwesomeEnabled) && (googleURL !== '') && (
                <a href={googleURL}><i
                  className={`fa fa-google-plus premium-person__icon `}
                  style={{
                    color: iconColor,
                    backgroundColor: iconBackColor,
                    border: `${iconBorderType}`,
                    borderWidth: `${iconBorderWidth}px`,
                    borderColor: iconBorderColor,
                    borderRadius: `${iconBorderRadius}px`,
                    paddingTop: `${iconPaddingT}px`,
                    paddingBottom: `${iconPaddingB}px`,
                    paddingLeft: `${iconPaddingL}px`,
                    paddingRight: `${iconPaddingR}px`
                  }}
                /></a>
              )}
              {(1 == FontAwesomeEnabled) && (behanceURL !== '') && (
                <a href={behanceURL}> <i
                  className={`fa fa-behance premium-person__icon `}
                  style={{
                    color: iconColor,
                    backgroundColor: iconBackColor,
                    border: `${iconBorderType}`,
                    borderWidth: `${iconBorderWidth}px`,
                    borderColor: iconBorderColor,
                    borderRadius: `${iconBorderRadius}px`,
                    paddingTop: `${iconPaddingT}px`,
                    paddingBottom: `${iconPaddingB}px`,
                    paddingLeft: `${iconPaddingL}px`,
                    paddingRight: `${iconPaddingR}px`
                  }}
                /></a>
              )}
              {(1 == FontAwesomeEnabled) && (pinterestURL !== '') && (
                <a href={pinterestURL}><i
                  className={`fa fa-pinterest premium-person__icon`}
                  style={{
                    color: iconColor,
                    backgroundColor: iconBackColor,
                    border: `${iconBorderType}`,
                    borderWidth: `${iconBorderWidth}px`,
                    borderColor: iconBorderColor,
                    borderRadius: `${iconBorderRadius}px`,
                    paddingTop: `${iconPaddingT}px`,
                    paddingBottom: `${iconPaddingB}px`,
                    paddingLeft: `${iconPaddingL}px`,
                    paddingRight: `${iconPaddingR}px`
                  }}
                /></a>
              )}
              {(1 == FontAwesomeEnabled) && (dribbbleURL !== '') && (
                <a href={dribbbleURL}><i
                  className={`fa fa-dribbble premium-person__icon `}
                  style={{
                    color: iconColor,
                    backgroundColor: iconBackColor,
                    border: `${iconBorderType}`,
                    borderWidth: `${iconBorderWidth}px`,
                    borderColor: iconBorderColor,
                    borderRadius: `${iconBorderRadius}px`,
                    paddingTop: `${iconPaddingT}px`,
                    paddingBottom: `${iconPaddingB}px`,
                    paddingLeft: `${iconPaddingL}px`,
                    paddingRight: `${iconPaddingR}px`
                  }}
                /></a>
              )}
              {(1 == FontAwesomeEnabled) && (emailAddress !== '') && (
                <a href={emailAddress}><i
                  className={`premium-person__icon fa fa-envelope`}
                  style={{
                    color: iconColor,
                    backgroundColor: iconBackColor,
                    border: `${iconBorderType}`,
                    borderWidth: `${iconBorderWidth}px`,
                    borderColor: iconBorderColor,
                    borderRadius: `${iconBorderRadius}px`,
                    paddingTop: `${iconPaddingT}px`,
                    paddingBottom: `${iconPaddingB}px`,
                    paddingLeft: `${iconPaddingL}px`,
                    paddingRight: `${iconPaddingR}px`

                  }}
                />
                </a>
              )}
            </div>
          </div>
        </div>)
      }

    </div>
    )
}
export default save