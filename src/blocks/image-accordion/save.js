import classnames from "classnames"

export default function save ( props ) {
    
    const { attributes, className } = props
    const {
        block_id,
        align,
        repeaterImageAccordion,
        direction,
        skew,
        height,
        heightU,
        contentPosition,
        alignPosition,
        hideDesc,
        hoverIndex,
        overlayColor,
        overlayHover,
        blur,
        bright,
        contrast,
        saturation,
        hue,
        iconU,
        iconSize,
        iconColor,
        iconHoverColor,
        backgroundColor,
        backgroundHover,
        iconShadowColor,
        iconShadowBlur,
        iconShadowHorizontal,
        iconShadowVertical,
        iconShadowPosition,
        iconborderType,
        iconborderWidth,
        iconborderColor,
        iconborderRadius,
        iconmarginTop,
        iconmarginRight,
        iconmarginBottom,
        iconmarginLeft,
        iconpaddingUnit,
        iconpaddingTop,
        iconpaddingRight,
        iconpaddingBottom,
        iconpaddingLeft,
        titleColor,
        titleSize,
        titleWeight,
        titleStyle,
        titleLetter,
        titleUpper,
        titleShadowColor,
        titleShadowBlur,
        titleShadowHorizontal,
        titleShadowVertical,
        titlemarginTop,
        titlemarginRight,
        titlemarginBottom,
        titlemarginLeft,
        titlemarginUnit,
        titlepaddingUnit,
        titlepaddingTop,
        titlepaddingRight,
        titlepaddingBottom,
        titlepaddingLeft,
        descColor,
        descSize,
        descWeight,
        descStyle,
        descLetter,
        descUpper,
        descShadowColor,
        descShadowBlur,
        descShadowHorizontal,
        descShadowVertical,
        descmarginTop,
        descmarginRight,
        descmarginBottom,
        descmarginLeft,
        descpaddingUnit,
        descpaddingTop,
        descpaddingRight,
        descpaddingBottom,
        descpaddingLeft,
        linkColor,
        linkHover,
        linkSize,
        linkWeight,
        linkStyle,
        linkLetter,
        linkUpper,
        containerborderType,
        containerborderWidth,
        containerborderRadius,
        containerborderColor,
        containerShadowColor,
        containerShadowBlur,
        containerShadowHorizontal,
        containerShadowVertical,
        containerShadowPosition,
        containermarginTop,
        containermarginRight,
        containermarginBottom,
        containermarginLeft,
        containermarginUnit,
    } = attributes;
    return (
        <div className="premium-accordion-container" >
        <div
          id={`premium-accordion-section-${block_id} `}
          className={ `premium-accordion-section` }
          style={{
            border: containerborderType,
            borderWidth: containerborderWidth + "px",
            borderRadius: containerborderRadius + "px",
            borderColor: containerborderColor,
            boxShadow: `${ containerShadowHorizontal }px ${ containerShadowVertical }px ${ containerShadowBlur }px ${ containerShadowColor } ${ containerShadowPosition }`,
            marginTop: containermarginTop + containermarginUnit,
            marginBottom: containermarginBottom + containermarginUnit,
            marginRight: containermarginRight + containermarginUnit,
            marginLeft: containermarginLeft + containermarginUnit,
          }}
        >
          <div className={`premium-accordion-${direction}`}>
            <ul className={`premium-accordion-ul premium-accordion-center`}>
              {repeaterImageAccordion.map((item, index) => {
                return (
                  <li className={ `premium-accordion-li` }
                    id={`premium-accordion-li-${index}`}
                    style={ {
                    height: height + heightU,
                    filter:`brightness( ${bright}% ) contrast( ${contrast}% ) saturate( ${saturation}% ) blur( ${blur}px ) hue-rotate( ${hue}deg )`,
                    
                  }}>
                    <div className={ `premium-accordion-background` } ></div>
                    <a className={ `premium-accordion-item-link` } title={ item.urlTitle } href={ item.url } style={ {
                      color: linkColor,
                      fontSize: linkSize + 'px',
                      fontWeight: linkWeight,
                      fontStyle: linkStyle,
                      letterSpacing:linkLetter
                    }}>{item.urlTitle }</a>
                    <div className={ `premium-accordion-overlay-wrap` }
                    style={{alignItems:contentPosition,justifyContent:alignPosition,backgroundColor:backgroundColor}}
                    >
                      <div
                        className={`accpremium-accordion-content premium-accordion-${contentPosition}`}
                      >
                        <h3 className={ `premium-accordion-title` }
                          style={ {
                            font: titleSize + 'px', color: titleColor, fontWeight: titleWeight, letterSpacing: titleLetter, fontStyle: titleStyle,
                            marginTop: titlemarginTop +'px',
                            marginBottom: titlemarginBottom + 'px',
                            marginRight: titlemarginRight + 'px',
                            marginLeft: titlemarginLeft + 'px',
                           paddingTop: titlepaddingTop + titlepaddingUnit,
                           paddingBottom: titlepaddingBottom + titlepaddingUnit,
                           paddingRight: titlepaddingRight + titlepaddingUnit,
                            paddingLeft: titlepaddingLeft + titlepaddingUnit,
                           textShadow:`${ titleShadowHorizontal }px ${ titleShadowVertical }px ${ titleShadowBlur }px ${ titleShadowColor }`
                          } }
                        >{ item.title }</h3>
                        <div className={ `premium-accordion-description` }
                         style={ {
                          font: descSize + 'px', color: descColor, fontWeight: descWeight, letterSpacing: descLetter, fontStyle: descStyle,
                          marginTop: descmarginTop +'px',
                          marginBottom: descmarginBottom + 'px',
                          marginRight: descmarginRight + 'px',
                          marginLeft: descmarginLeft + 'px',
                         paddingTop: descpaddingTop + descpaddingUnit,
                         paddingBottom: descpaddingBottom + descpaddingUnit,
                         paddingRight: descpaddingRight + descpaddingUnit,
                          paddingLeft: descpaddingLeft + descpaddingUnit,
                         textShadow:`${ descShadowHorizontal }px ${ descShadowVertical }px ${ descShadowBlur }px ${ descShadowColor }`
                        } }
                        >{ item.desc }</div>
                      </div>
                    </div>
                    <style
                      dangerouslySetInnerHTML={ {
                        __html: [
                          ` #premium-accordion-li-${index} .premium-accordion-background{`,
                          `background-image:url(${ item.imageURL });`,
                          `background-size : ${ item.backgroundSize };`,
                          `background-position : ${ item.backgroundPosition };`,
                          `background-repeat : ${item.backgroundRepeat};`,
                          "}"
                        ].join ("\n" ),
                      } }
                    />
                  </li>
                 
                );
                


               
              })}
            </ul>
          </div>
        </div>
      </div>
   
    )
}