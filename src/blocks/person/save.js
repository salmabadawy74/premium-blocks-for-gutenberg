
import DefaultImage from "../../components/default-image";
import { FontAwesomeEnabled } from "../../../assets/js/settings";

const { RichText } = wp.editor;

const save = props => {

  const { className } = props;
  const {
    imageURL,
    imageWidth,
    imageWidthU,
    hoverEffect,
    nameTag,
    personName,
    titleTag,
    personTitle,
    personDesc,
    align,
    iconColor,
    iconBackColor,
    iconHoverColor,
    iconBackHover,
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
    iconPaddingB

  } = props.attributes;

  return (
    <div>

      {(!imageURL) && (<DefaultImage />)}
      {imageURL && (
        <div className={`premium-person__container premium-person__${hoverEffect}-effect`} style={{ width: imageWidth + imageWidthU }}>

          <div className={`premium-person__image-container`}>
            <img
              className={`premium-person__img `}
              src={imageURL}
            />
          </div>
          <div className={`premium-person__info`} >
            <div className={`premium-person__info-container`}>

              <RichText.Content
                className={`premium-person__name`}
                tagName={nameTag}
                value={personName}
                style={{
                  textAlign: align,
                  color: nameColor,
                  fontWeight: nameWeight,
                  lineHeight: nameLine + "px",
                  fontStyle: nameStyle,
                  letterSpacing: nameSpacing + "px",
                  textShadow: `${nameShadowHorizontal}px ${nameShadowVertical}px ${nameShadowBlur}px ${nameShadowColor}`
                }}
              />
              <RichText.Content
                className={`premium-person__title`}
                tagName={titleTag}
                value={personTitle}
                style={{
                  textAlign: align,
                  color: titleColor,
                  fontWeight: titleWeight,
                  lineHeight: titleLine + "px",
                  fontStyle: titleStyle,
                  letterSpacing: titleSpacing + "px",
                  textShadow: `${titleShadowHorizontal}px ${titleShadowVertical}px ${titleShadowBlur}px ${titleShadowColor}`
                }}
              />
              <RichText.Content
                className={`premium-person__description`}
                tagName={"p"}
                value={personDesc}
                style={{
                  textAlign: align,
                  fontWeight: descWeight,
                  lineHeight: descLine + "px",
                  fontStyle: descStyle,
                  letterSpacing: descSpacing + "px",
                  color: descColor
                }}
              />
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
              <ul className={`premium-person__social-list`} style={{ textAlign: align }}>
                {(1 == FontAwesomeEnabled) && (facebookURL !== '') && (
                  <li className={`premium-person__list-item`}>
                    <a href={facebookURL} target="_blank" rel="noopener noreferrer">
                      <i
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
                      />
                    </a>
                  </li>
                )}
                {(1 == FontAwesomeEnabled) && (twitterURL !== '') && (
                  <li className={`premium-person__list-item`}>
                    <a href={twitterURL} target="_blank" rel="noopener noreferrer">
                      <i
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
                      />
                    </a>
                  </li>
                )}
                {(1 == FontAwesomeEnabled) && (instaURL !== '') && (
                  <li className={`premium-person__list-item`}>
                    <a href={instaURL} target="_blank" rel="noopener noreferrer">
                      <i
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
                      />
                    </a>
                  </li>
                )}
                {(1 == FontAwesomeEnabled) && (youtubeURL !== '') && (
                  <li className={`premium-person__list-item`}>
                    <a href={youtubeURL} target="_blank" rel="noopener noreferrer">
                      <i
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
                      />
                    </a>
                  </li>
                )}
                {(1 == FontAwesomeEnabled) && (googleURL !== '') && (
                  <li className={`premium-person__list-item`}>
                    <a href={googleURL} target="_blank" rel="noopener noreferrer">
                      <i
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
                      />
                    </a>
                  </li>
                )}
                {(1 == FontAwesomeEnabled) && (behanceURL !== '') && (
                  <li className={`premium-person__list-item`}>
                    <a href={behanceURL} target="_blank" rel="noopener noreferrer">
                      <i
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
                      />
                    </a>
                  </li>
                )}
                {(1 == FontAwesomeEnabled) && (pinterestURL !== '') && (
                  <li className={`premium-person__list-item`}>
                    <a href={pinterestURL} target="_blank" rel="noopener noreferrer">
                      <i
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
                      />
                    </a>
                  </li>
                )}
                {(1 == FontAwesomeEnabled) && (dribbbleURL !== '') && (
                  <li className={`premium-person__list-item`}>
                    <a href={dribbbleURL} target="_blank" rel="noopener noreferrer">
                      <i
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
                      />
                    </a>
                  </li>
                )}
                {(1 == FontAwesomeEnabled) && (emailAddress !== '') && (
                  <li className={`premium-person__list-item`}>
                    <a href={emailAddress} target="_blank" rel="noopener noreferrer">
                      <i
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
                  </li>
                )}
              </ul>

            </div>
          </div>

        </div>
      )}

    </div>
  )

}
export default save;