import classnames from "classnames";
import DefaultImage from "../../components/default-image";
import { FontAwesomeEnabled } from "../../../assets/js/settings";

const { RichText } = wp.editor;

const save = props => {

  const { className } = props;
  const {
    imageURL,
    imageWidth,
    imageWidthU,
    imgAlign,
    hoverEffect,
    nameTag,
    personName,
    titleTag,
    personTitle,
    personDesc,
    align,
    blur,
    bright,
    contrast,
    saturation,
    hue,
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

  const mainClasses = classnames(className, "premium-person");

  return (
    <div>

      {(!imageURL) && (<DefaultImage />)}
      {imageURL && (
        <div className={`${mainClasses}__wrap`} style={{ display: "flex", justifyContent: imgAlign || "center" }} >
          <div className={`premium-person__container premium-person__${hoverEffect || "none"}-effect`} style={{ width: (imageWidth || "1") + (imageWidthU || "%") }}>

            <div className={`premium-person__image-container`}>
              <img
                className={`premium-person__img `}
                src={imageURL}
                style={{ filter: `brightness( ${bright || "100"}% ) contrast( ${contrast || "100"}% ) saturate( ${saturation || "100"}% ) blur( ${blur || "0"}px ) hue-rotate( ${hue || "0"}deg )` }}
              />
            </div>
            <div className={`premium-person__info`} >
              <div className={`premium-person__info-container`} style={{ textAlign: align || "center" }}>

                <RichText.Content
                  className={`premium-person__name`}
                  tagName={nameTag}
                  value={personName}
                  style={{
                    color: nameColor || "#000",
                    fontWeight: nameWeight,
                    lineHeight: nameLine + "px",
                    fontStyle: nameStyle || "normal",
                    letterSpacing: (nameSpacing || "0") + "px",
                    textShadow: `${nameShadowHorizontal || "0"}px ${nameShadowVertical || "0"}px ${nameShadowBlur || "0"}px ${nameShadowColor || "transparent"}`
                  }}
                />
                <RichText.Content
                  className={`premium-person__title`}
                  tagName={titleTag}
                  value={personTitle}
                  style={{
                    color: titleColor || "#000",
                    fontWeight: titleWeight,
                    lineHeight: titleLine + "px",
                    fontStyle: titleStyle || "normal",
                    letterSpacing: (titleSpacing || "0") + "px",
                    textShadow: `${titleShadowHorizontal || "0"}px ${titleShadowVertical || "0"}px ${titleShadowBlur || "0"}px ${titleShadowColor || "transparent"}`
                  }}
                />
                <RichText.Content
                  className={`premium-person__description`}
                  tagName={"p"}
                  value={personDesc}
                  style={{
                    fontWeight: descWeight,
                    lineHeight: descLine + "px",
                    fontStyle: descStyle || "normal",
                    letterSpacing: (descSpacing || "0") + "px",
                    color: descColor || "#000"
                  }}
                />
                <style
                  dangerouslySetInnerHTML={{
                    __html: [
                      `.premium-person__icon:hover{`,
                      `color:${iconHoverColor || "#fff"}!important;`,
                      `background-color:${iconBackHover || "transparent"}!important;`,
                      "}"
                    ].join("\n")
                  }}
                />
                <ul className={`premium-person__social-list`} style={{ textAlign: align || "center" }}>
                  {(1 == FontAwesomeEnabled) && (facebookURL !== '') && (
                    <li className={`premium-person__list-item`}>
                      <a href={facebookURL} target="_blank" rel="noopener noreferrer">
                        <i
                          className={`fa fa-facebook premium-person__icon `}
                          style={{
                            color: iconColor || "#000",
                            backgroundColor: iconBackColor || "transparent",
                            border: `${iconBorderType || "none"}`,
                            borderWidth: `${iconBorderWidth || "0"}px`,
                            borderColor: iconBorderColor || "#000",
                            borderRadius: `${iconBorderRadius || "0"}px`,
                            paddingTop: `${iconPaddingT || "0"}px`,
                            paddingBottom: `${iconPaddingB || "0"}px`,
                            paddingLeft: `${iconPaddingL || "0"}px`,
                            paddingRight: `${iconPaddingR || "0"}px`
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
                            color: iconColor || "#000",
                            backgroundColor: iconBackColor || "transparent",
                            border: `${iconBorderType || "none"}`,
                            borderWidth: `${iconBorderWidth || "0"}px`,
                            borderColor: iconBorderColor || "#000",
                            borderRadius: `${iconBorderRadius || "0"}px`,
                            paddingTop: `${iconPaddingT || "0"}px`,
                            paddingBottom: `${iconPaddingB || "0"}px`,
                            paddingLeft: `${iconPaddingL || "0"}px`,
                            paddingRight: `${iconPaddingR || "0"}px`
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
                            color: iconColor || "#000",
                            backgroundColor: iconBackColor || "transparent",
                            border: `${iconBorderType || "none"}`,
                            borderWidth: `${iconBorderWidth || "0"}px`,
                            borderColor: iconBorderColor || "#000",
                            borderRadius: `${iconBorderRadius || "0"}px`,
                            paddingTop: `${iconPaddingT || "0"}px`,
                            paddingBottom: `${iconPaddingB || "0"}px`,
                            paddingLeft: `${iconPaddingL || "0"}px`,
                            paddingRight: `${iconPaddingR || "0"}px`
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
                            color: iconColor || "#000",
                            backgroundColor: iconBackColor || "transparent",
                            border: `${iconBorderType || "none"}`,
                            borderWidth: `${iconBorderWidth || "0"}px`,
                            borderColor: iconBorderColor || "#000",
                            borderRadius: `${iconBorderRadius || "0"}px`,
                            paddingTop: `${iconPaddingT || "0"}px`,
                            paddingBottom: `${iconPaddingB || "0"}px`,
                            paddingLeft: `${iconPaddingL || "0"}px`,
                            paddingRight: `${iconPaddingR || "0"}px`
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
                            color: iconColor || "#000",
                            backgroundColor: iconBackColor || "transparent",
                            border: `${iconBorderType || "none"}`,
                            borderWidth: `${iconBorderWidth || "0"}px`,
                            borderColor: iconBorderColor || "#000",
                            borderRadius: `${iconBorderRadius || "0"}px`,
                            paddingTop: `${iconPaddingT || "0"}px`,
                            paddingBottom: `${iconPaddingB || "0"}px`,
                            paddingLeft: `${iconPaddingL || "0"}px`,
                            paddingRight: `${iconPaddingR || "0"}px`
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
                            color: iconColor || "#000",
                            backgroundColor: iconBackColor || "transparent",
                            border: `${iconBorderType || "none"}`,
                            borderWidth: `${iconBorderWidth || "0"}px`,
                            borderColor: iconBorderColor || "#000",
                            borderRadius: `${iconBorderRadius || "0"}px`,
                            paddingTop: `${iconPaddingT || "0"}px`,
                            paddingBottom: `${iconPaddingB || "0"}px`,
                            paddingLeft: `${iconPaddingL || "0"}px`,
                            paddingRight: `${iconPaddingR || "0"}px`
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
                            color: iconColor || "#000",
                            backgroundColor: iconBackColor || "transparent",
                            border: `${iconBorderType || "none"}`,
                            borderWidth: `${iconBorderWidth || "0"}px`,
                            borderColor: iconBorderColor || "#000",
                            borderRadius: `${iconBorderRadius || "0"}px`,
                            paddingTop: `${iconPaddingT || "0"}px`,
                            paddingBottom: `${iconPaddingB || "0"}px`,
                            paddingLeft: `${iconPaddingL || "0"}px`,
                            paddingRight: `${iconPaddingR || "0"}px`
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
                            color: iconColor || "#000",
                            backgroundColor: iconBackColor || "transparent",
                            border: `${iconBorderType || "none"}`,
                            borderWidth: `${iconBorderWidth || "0"}px`,
                            borderColor: iconBorderColor || "#000",
                            borderRadius: `${iconBorderRadius || "0"}px`,
                            paddingTop: `${iconPaddingT || "0"}px`,
                            paddingBottom: `${iconPaddingB || "0"}px`,
                            paddingLeft: `${iconPaddingL || "0"}px`,
                            paddingRight: `${iconPaddingR || "0"}px`
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
                            color: iconColor || "#000",
                            backgroundColor: iconBackColor || "transparent",
                            border: `${iconBorderType || "none"}`,
                            borderWidth: `${iconBorderWidth || "0"}px`,
                            borderColor: iconBorderColor || "#000",
                            borderRadius: `${iconBorderRadius || "0"}px`,
                            paddingTop: `${iconPaddingT || "0"}px`,
                            paddingBottom: `${iconPaddingB || "0"}px`,
                            paddingLeft: `${iconPaddingL || "0"}px`,
                            paddingRight: `${iconPaddingR || "0"}px`
                          }}
                        />
                      </a>
                    </li>
                  )}
                </ul>

              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  )

}
export default save;