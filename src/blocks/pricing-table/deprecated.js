const className = "premium-pricing-table";

const { __ } = wp.i18n;

const { RichText } = wp.editor;

const pricingAttrs_1_6_3 = {
    contentAlign: {
        type: "string",
        default: "center"
    },
    tableBack: {
        type: "string"
    },
    borderType: {
        type: "string",
        default: "none"
    },
    borderWidth: {
        type: "number",
        default: "1"
    },
    borderRadius: {
        type: "number",
        default: "0"
    },
    borderColor: {
        type: "string"
    },
    tablePadding: {
        type: "number",
        default: "0"
    },
    tableShadowColor: {
        type: "string"
    },
    tableShadowBlur: {
        type: "number",
        default: "0"
    },
    tableShadowHorizontal: {
        type: "number",
        default: "0"
    },
    tableShadowVertical: {
        type: "number",
        default: "0"
    },
    tableShadowPosition: {
        type: "string",
        default: ""
    },
    title: {
        type: "array",
        source: "children",
        selector: ".premium-pricing-table__title",
        default: "Pricing Table"
    },
    titleTag: {
        type: "string",
        default: "H2"
    },
    titleColor: {
        type: "string",
        default: "#6ec1e4"
    },
    titleSize: {
        type: "number"
    },
    titleLine: {
        type: "number"
    },
    titleLetter: {
        type: "number"
    },
    titleStyle: {
        type: "string"
    },
    titleUpper: {
        type: "boolean"
    },
    titleWeight: {
        type: "number",
        default: 500
    },
    titleShadowColor: {
        type: "string"
    },
    titleShadowBlur: {
        type: "number",
        default: "0"
    },
    titleShadowHorizontal: {
        type: "number",
        default: "0"
    },
    titleShadowVertical: {
        type: "number",
        default: "0"
    },
    titleBack: {
        type: "string"
    },
    titleMarginB: {
        type: "number",
        default: 20
    },
    titleMarginT: {
        type: "number",
        default: 20
    },
    titlePadding: {
        type: "number",
        default: "0"
    },
    desc: {
        type: "array",
        source: "children",
        selector: ".premium-pricing-table__desc"
    },
    descColor: {
        type: "string",
        default: "#000"
    },
    descSize: {
        type: "number"
    },
    descWeight: {
        type: "number"
    },
    descLetter: {
        type: "number"
    },
    descStyle: {
        type: "string"
    },
    descLine: {
        type: "number"
    },
    descBack: {
        type: "string"
    },
    descMarginT: {
        type: "number",
        default: "0"
    },
    descMarginB: {
        type: "number",
        default: "30"
    },
    descPadding: {
        type: "number",
        default: "0"
    },
    titleChecked: {
        type: "boolean",
        default: true
    },
    descChecked: {
        type: "boolean",
        default: false
    },
    priceChecked: {
        type: "boolean",
        default: true
    },
    priceBack: {
        type: "string"
    },
    priceMarginT: {
        type: "number"
    },
    priceMarginB: {
        type: "number",
        default: 10
    },
    pricePadding: {
        type: "number"
    },
    slashPrice: {
        type: "string"
    },
    slashColor: {
        type: "string"
    },
    slashSize: {
        type: "number",
        default: 20
    },
    slashWeight: {
        type: "number"
    },
    currPrice: {
        type: "string",
        default: "$"
    },
    currColor: {
        type: "string"
    },
    currSize: {
        type: "number",
        default: 20
    },
    currWeight: {
        type: "number"
    },
    valPrice: {
        type: "string",
        default: "25"
    },
    valColor: {
        type: "string"
    },
    valSize: {
        type: "number",
        default: 50
    },
    valWeight: {
        type: "number"
    },
    divPrice: {
        type: "string",
        default: "/"
    },
    divColor: {
        type: "string"
    },
    divSize: {
        type: "number",
        default: 20
    },
    divWeight: {
        type: "number"
    },
    durPrice: {
        type: "string",
        default: "m"
    },
    durColor: {
        type: "string"
    },
    durSize: {
        type: "number",
        default: 20
    },
    durWeight: {
        type: "number"
    },
    selectedStyle: {
        type: "string",
        default: "price"
    },
    btnChecked: {
        type: "boolean",
        default: true
    },
    btnText: {
        type: "string",
        default: "Get Started"
    },
    btnLink: {
        type: "string",
        source: "attribute",
        attribute: "href",
        selector: ".premium-pricing-table__button_link"
    },
    btnTarget: {
        type: "boolean",
        default: true
    },
    btnColor: {
        type: "string",
        default: "#fff"
    },
    btnHoverColor: {
        type: "string"
    },
    btnWidth: {
        type: "number"
    },
    btnSize: {
        type: "number"
    },
    btnWeight: {
        type: "number",
        default: 900
    },
    btnLine: {
        type: "number"
    },
    btnLetter: {
        type: "number"
    },
    btnStyle: {
        type: "string"
    },
    btnUpper: {
        type: "boolean"
    },
    btnBack: {
        type: "string",
        default: "#6ec1e4"
    },
    btnHoverBack: {
        type: "string"
    },
    btnMarginT: {
        type: "number",
        default: "0"
    },
    btnMarginB: {
        type: "number",
        default: "0"
    },
    btnPadding: {
        type: "number",
        default: 10
    },
    btnPaddingU: {
        type: "string"
    },
    btnBorderType: {
        type: "string",
        default: "none"
    },
    btnBorderWidth: {
        type: "number",
        default: "1"
    },
    btnBorderRadius: {
        type: "number",
        default: "0"
    },
    btnBorderColor: {
        type: "string"
    },
    badgeChecked: {
        type: "boolean"
    },
    badgePos: {
        type: "string",
        default: "right"
    },
    badgeBack: {
        type: "string",
        default: "#6ec1e4"
    },
    badgeColor: {
        type: "string"
    },
    badgeTextSize: {
        type: "number"
    },
    badgeSize: {
        type: "number"
    },
    badgeTop: {
        type: "number"
    },
    badgeHorizontal: {
        type: "number"
    },
    badgeWidth: {
        type: "number"
    },
    badgeWeight: {
        type: "number",
        default: 900
    },
    badgeLetter: {
        type: "number"
    },
    badgeStyle: {
        type: "string"
    },
    badgeUpper: {
        type: "boolean"
    },
    badgeText: {
        type: "string",
        default: __("Popular")
    },
    listChecked: {
        type: "boolean",
        default: true
    },
    listColor: {
        type: "string"
    },
    listSize: {
        type: "number"
    },
    listWeight: {
        type: "number",
        default: 500
    },
    listItemsStyle: {
        type: "string"
    },
    listLetter: {
        type: "number"
    },
    listLine: {
        type: "number"
    },
    listUpper: {
        type: "boolean"
    },
    listBack: {
        type: "string"
    },
    listItems: {
        type: "array",
        source: "children",
        selector: ".premium-pricing-table__list"
    },
    listMarginB: {
        type: "number",
        default: 20
    },
    listMarginT: {
        type: "number"
    },
    listPadding: {
        type: "number"
    },
    listStyle: {
        type: "string",
        default: "disc"
    },
    slashV: {
        type: "string",
        default: "center"
    },
    currV: {
        type: "string",
        default: "center"
    },
    valV: {
        type: "string",
        default: "center"
    },
    divV: {
        type: "string",
        default: "center"
    },
    durV: {
        type: "string",
        default: "center"
    },
    id: {
        type: "string"
    }
};

const pricingAttrs_1_6_5 = {
	contentAlign: {
        type: "string",
        default: "center"
    },
    tableBack: {
        type: "string"
    },
    borderType: {
        type: "string",
        default: "none"
    },
    borderWidth: {
        type: "number",
        default: "1"
    },
    borderRadius: {
        type: "number",
        default: "0"
    },
    borderColor: {
        type: "string"
    },
    tablePadding: {
        type: "number",
        default: "0"
    },
    tableShadowColor: {
        type: "string"
    },
    tableShadowBlur: {
        type: "number",
        default: "0"
    },
    tableShadowHorizontal: {
        type: "number",
        default: "0"
    },
    tableShadowVertical: {
        type: "number",
        default: "0"
    },
    tableShadowPosition: {
        type: "string",
        default: ""
    },
    title: {
        type: "array",
        source: "children",
        selector: ".premium-pricing-table__title",
        default: "Pricing Table"
    },
    titleTag: {
        type: "string",
        default: "H2"
    },
    titleColor: {
        type: "string",
        default: "#6ec1e4"
    },
    titleSize: {
        type: "number"
    },
    titleLine: {
        type: "number"
    },
    titleLetter: {
        type: "number"
    },
    titleStyle: {
        type: "string"
    },
    titleUpper: {
        type: "boolean"
    },
    titleWeight: {
        type: "number",
        default: 500
    },
    titleShadowColor: {
        type: "string"
    },
    titleShadowBlur: {
        type: "number",
        default: "0"
    },
    titleShadowHorizontal: {
        type: "number",
        default: "0"
    },
    titleShadowVertical: {
        type: "number",
        default: "0"
    },
    titleBack: {
        type: "string"
    },
    titleMarginB: {
        type: "number",
        default: 20
    },
    titleMarginT: {
        type: "number",
        default: 20
    },
    titlePadding: {
        type: "number",
        default: "0"
    },
    desc: {
        type: "array",
        source: "children",
        selector: ".premium-pricing-table__desc"
    },
    descColor: {
        type: "string",
        default: "#000"
    },
    descSize: {
        type: "number"
    },
    descWeight: {
        type: "number"
    },
    descLetter: {
        type: "number"
    },
    descStyle: {
        type: "string"
    },
    descLine: {
        type: "number"
    },
    descBack: {
        type: "string"
    },
    descMarginT: {
        type: "number",
        default: "0"
    },
    descMarginB: {
        type: "number",
        default: "30"
    },
    descPadding: {
        type: "number",
        default: "0"
    },
    titleChecked: {
        type: "boolean",
        default: true
    },
    descChecked: {
        type: "boolean",
        default: false
    },
    priceChecked: {
        type: "boolean",
        default: true
    },
    priceBack: {
        type: "string"
    },
    priceMarginT: {
        type: "number"
    },
    priceMarginB: {
        type: "number",
        default: 10
    },
    pricePadding: {
        type: "number"
    },
    slashPrice: {
        type: "string"
    },
    slashColor: {
        type: "string"
    },
    slashSize: {
        type: "number",
        default: 20
    },
    slashWeight: {
        type: "number"
    },
    currPrice: {
        type: "string",
        default: "$"
    },
    currColor: {
        type: "string"
    },
    currSize: {
        type: "number",
        default: 20
    },
    currWeight: {
        type: "number"
    },
    valPrice: {
        type: "string",
        default: "25"
    },
    valColor: {
        type: "string"
    },
    valSize: {
        type: "number",
        default: 50
    },
    valWeight: {
        type: "number"
    },
    divPrice: {
        type: "string",
        default: "/"
    },
    divColor: {
        type: "string"
    },
    divSize: {
        type: "number",
        default: 20
    },
    divWeight: {
        type: "number"
    },
    durPrice: {
        type: "string",
        default: "m"
    },
    durColor: {
        type: "string"
    },
    durSize: {
        type: "number",
        default: 20
    },
    durWeight: {
        type: "number"
    },
    selectedStyle: {
        type: "string",
        default: "price"
    },
    btnChecked: {
        type: "boolean",
        default: true
    },
    btnText: {
        type: "string",
        default: "Get Started"
    },
    btnLink: {
        type: "string",
        source: "attribute",
        attribute: "href",
        selector: ".premium-pricing-table__button_link"
    },
    btnTarget: {
        type: "boolean",
        default: true
    },
    btnColor: {
        type: "string",
        default: "#fff"
    },
    btnHoverColor: {
        type: "string"
    },
    btnWidth: {
        type: "number"
    },
    btnSize: {
        type: "number"
    },
    btnWeight: {
        type: "number",
        default: 900
    },
    btnLine: {
        type: "number"
    },
    btnLetter: {
        type: "number"
    },
    btnStyle: {
        type: "string"
    },
    btnUpper: {
        type: "boolean"
    },
    btnBack: {
        type: "string",
        default: "#6ec1e4"
    },
    btnHoverBack: {
        type: "string"
    },
    btnMarginT: {
        type: "number",
        default: "0"
    },
    btnMarginB: {
        type: "number",
        default: "0"
    },
    btnPadding: {
        type: "number",
        default: 10
    },
    btnPaddingU: {
        type: "string"
    },
    btnBorderType: {
        type: "string",
        default: "none"
    },
    btnBorderWidth: {
        type: "number",
        default: "1"
    },
    btnBorderRadius: {
        type: "number",
        default: "0"
    },
    btnBorderColor: {
        type: "string"
    },
    badgeChecked: {
        type: "boolean"
    },
    badgePos: {
        type: "string",
        default: "right"
    },
    badgeBack: {
        type: "string",
        default: "#6ec1e4"
    },
    badgeColor: {
        type: "string"
    },
    badgeTextSize: {
        type: "number"
    },
    badgeSize: {
        type: "number"
    },
    badgeTop: {
        type: "number"
    },
    badgeHorizontal: {
        type: "number"
    },
    badgeWidth: {
        type: "number"
    },
    badgeWeight: {
        type: "number",
        default: 900
    },
    badgeLetter: {
        type: "number"
    },
    badgeStyle: {
        type: "string"
    },
    badgeUpper: {
        type: "boolean"
    },
    badgeText: {
        type: "string",
        default: __("Popular")
    },
    listChecked: {
        type: "boolean",
        default: true
    },
    listColor: {
        type: "string"
    },
    listSize: {
        type: "number"
    },
    listWeight: {
        type: "number",
        default: 500
    },
    listItemsStyle: {
        type: "string"
    },
    listLetter: {
        type: "number"
    },
    listLine: {
        type: "number"
    },
    listUpper: {
        type: "boolean"
    },
    listBack: {
        type: "string"
    },
    listItems: {
        type: "array",
        source: "children",
        selector: ".premium-pricing-table__list"
    },
    listMarginB: {
        type: "number",
        default: 20
    },
    listMarginT: {
        type: "number"
    },
    listPadding: {
        type: "number"
    },
    listStyle: {
        type: "string",
        default: "disc"
    },
    featsAlign: {
        type: "string"
    },
    slashV: {
        type: "string",
        default: "center"
    },
    currV: {
        type: "string",
        default: "center"
    },
    valV: {
        type: "string",
        default: "center"
    },
    divV: {
        type: "string",
        default: "center"
    },
    durV: {
        type: "string",
        default: "center"
    },
    id: {
        type: "string"
    }
}
const newAttributes_1_5_6 = {
	hideDesktop: {
		type: "boolean",
		default:false
	},
	hideTablet: {
		type: "boolean",
		default:false
	},
	hideMobile: {
		type: 'boolean',
		default:false
	}
}

const pricingAttrs_1_6_8=Object.assign(pricingAttrs_1_6_5,newAttributes_1_5_6)

const deprecatedContent = [
	{
		attributes: pricingAttrs_1_6_8,
		migrate: attributes => {
			let newAttributes = {
				hideDesktop: false,
				hideTablet: false,
				hideMobile:false
			}
			return Object.assign(attributes,newAttributes)
		},
		save: props => {
			const {
				contentAlign,
				tableBack,
				borderType,
				borderWidth,
				borderRadius,
				borderColor,
				tablePadding,
				tableShadowBlur,
				tableShadowColor,
				tableShadowHorizontal,
				tableShadowVertical,
				tableShadowPosition,
				titleChecked,
				title,
				titleTag,
				titleColor,
				titleSize,
				titleLetter,
				titleUpper,
				titleStyle,
				titleLine,
				titleWeight,
				titleBack,
				titleShadowBlur,
				titleShadowColor,
				titleShadowHorizontal,
				titleShadowVertical,
				titleMarginT,
				titleMarginB,
				titlePadding,
				descChecked,
				desc,
				descColor,
				descSize,
				descLine,
				descWeight,
				descStyle,
				descLetter,
				descBack,
				descMarginT,
				descMarginB,
				descPadding,
				priceChecked,
				priceBack,
				priceMarginT,
				priceMarginB,
				pricePadding,
				slashPrice,
				slashColor,
				slashSize,
				slashWeight,
				slashV,
				currPrice,
				currColor,
				currSize,
				currWeight,
				currV,
				valPrice,
				valColor,
				valSize,
				valWeight,
				valV,
				divPrice,
				divColor,
				divSize,
				divWeight,
				divV,
				durPrice,
				durColor,
				durSize,
				durWeight,
				durV,
				btnChecked,
				btnText,
				btnLink,
				btnTarget,
				btnColor,
				btnHoverColor,
				btnSize,
				btnWeight,
				btnLine,
				btnLetter,
				btnUpper,
				btnStyle,
				btnBack,
				btnHoverBack,
				btnMarginT,
				btnMarginB,
				btnPadding,
				btnPaddingU,
				btnWidth,
				btnBorderType,
				btnBorderWidth,
				btnBorderRadius,
				btnBorderColor,
				badgeChecked,
				badgePos,
				badgeBack,
				badgeColor,
				badgeTop,
				badgeHorizontal,
				badgeWidth,
				badgeSize,
				badgeTextSize,
				badgeWeight,
				badgeLetter,
				badgeStyle,
				badgeUpper,
				badgeText,
				listChecked,
				listColor,
				listWeight,
				listSize,
				listItemsStyle,
				listLine,
				listUpper,
				listLetter,
				listBack,
				listItems,
				listMarginB,
				listMarginT,
				listPadding,
				listStyle,
				featsAlign,
				id
			} = props.attributes;

			return (
				<div
					id={`${className}-${id}`}
					className={`${className}`}
					style={{
						textAlign: contentAlign,
						background: tableBack,
						border: borderType,
						borderWidth: borderWidth + "px",
						borderRadius: borderRadius + "px",
						borderColor: borderColor,
						padding: tablePadding + "px",
						boxShadow: `${tableShadowHorizontal}px ${tableShadowVertical}px ${tableShadowBlur}px ${tableShadowColor} ${tableShadowPosition}`
					}}
				>
					{badgeChecked && (
						<div
							className={`premium-pricing-table__badge_wrap premium-pricing-table__badge_${badgePos}`}
						>
							<div
								className={`premium-pricing-table__badge`}
								style={{
									borderRightColor:
										"right" === badgePos
											? badgeBack
											: "transparent",
									borderTopColor:
										"left" === badgePos ? badgeBack : "transparent",
									borderBottomWidth: badgeSize + "px",
									borderRightWidth: badgeSize + "px",
									borderTopWidth:
										"left" === badgePos ? badgeSize + "px" : "none",
									borderLeftWidth:
										"right" === badgePos ? badgeSize + "px" : "none"
								}}
							>
								<span
									style={{
										fontSize: badgeTextSize + "px",
										color: badgeColor,
										fontWeight: badgeWeight,
										textTransform: badgeUpper
											? "uppercase"
											: "none",
										letterSpacing: badgeLetter + "px",
										fontStyle: badgeStyle,
										width: badgeWidth + "px",
										top: badgeTop + "px",
										left:
											"left" === badgePos
												? badgeHorizontal + "px"
												: "auto",
										right:
											"right" === badgePos
												? badgeHorizontal + "px"
												: "auto"
									}}
								>
									{badgeText}
								</span>
							</div>
						</div>
					)}
					{titleChecked && (
						<div
							className={`premium-pricing-table__title_wrap`}
							style={{
								paddingTop: titleMarginT + "px",
								paddingBottom: titleMarginB + "px"
							}}
						>
							<RichText.Content
								tagName={titleTag.toLowerCase()}
								className={`premium-pricing-table__title`}
								value={title}
								style={{
									color: titleColor,
									background: titleBack,
									fontSize: titleSize + "px",
									letterSpacing: titleLetter + "px",
									textTransform: titleUpper ? "uppercase" : "none",
									fontStyle: titleStyle,
									fontWeight: titleWeight,
									lineHeight: titleLine + "px",
									marginBottom: titleMarginB + "px",
									padding: titlePadding + "px",
									textShadow: `${titleShadowHorizontal}px ${titleShadowVertical}px ${titleShadowBlur}px ${titleShadowColor}`
								}}
							/>
						</div>
					)}
					{priceChecked && (
						<div
							className={`premium-pricing-table__price_wrap`}
							style={{
								background: priceBack,
								marginTop: priceMarginT + "px",
								marginBottom: priceMarginB + "px",
								padding: pricePadding + "px",
								justifyContent: contentAlign
							}}
						>
							{slashPrice && (
								<strike
									className={`premium-pricing-table__slash`}
									style={{
										color: slashColor,
										fontSize: slashSize + "px",
										fontWeight: slashWeight,
										alignSelf: slashV
									}}
								>
									{slashPrice}
								</strike>
							)}
							{currPrice && (
								<span
									className={`premium-pricing-table__currency`}
									style={{
										color: currColor,
										fontSize: currSize + "px",
										fontWeight: currWeight,
										alignSelf: currV
									}}
								>
									{currPrice}
								</span>
							)}
							{valPrice && (
								<span
									className={`premium-pricing-table__val`}
									style={{
										color: valColor,
										fontSize: valSize + "px",
										fontWeight: valWeight,
										alignSelf: valV
									}}
								>
									{valPrice}
								</span>
							)}
							{divPrice && (
								<span
									className={`premium-pricing-table__divider`}
									style={{
										color: divColor,
										fontSize: divSize + "px",
										fontWeight: divWeight,
										alignSelf: divV
									}}
								>
									{divPrice}
								</span>
							)}
							{durPrice && (
								<span
									className={`premium-pricing-table__dur`}
									style={{
										color: durColor,
										fontSize: durSize + "px",
										fontWeight: durWeight,
										alignSelf: durV
									}}
								>
									{durPrice}
								</span>
							)}
						</div>
					)}
					{listChecked && (
						<div
							className={`premium-pricing-table__list_wrap`}
							style={{
								marginTop: listMarginT + "px",
								marginBottom: listMarginB + "px"
							}}
						>
							<ul
								className={`premium-pricing-table__list list-${listStyle}`}
								style={{
									color: listColor,
									fontSize: listSize + "px",
									background: listBack,
									padding: listPadding + "px",
									listStyle:
										"check" !== listStyle ? listStyle : "none",
									listStylePosition: "inside",
									fontWeight: listWeight,
									letterSpacing: listLetter + "px",
									textTransform: listUpper ? "uppercase" : "none",
									fontStyle: listItemsStyle,
									lineHeight: listLine + "px",
									textAlign: featsAlign ? featsAlign : contentAlign
								}}
							>
								{listItems}
							</ul>
						</div>
					)}
					{descChecked && (
						<div className={`premium-pricing-table__desc_wrap`}>
							<RichText.Content
								tagName="p"
								className={`premium-pricing-table__desc`}
								value={desc}
								style={{
									color: descColor,
									background: descBack,
									fontSize: descSize + "px",
									fontWeight: descWeight,
									lineHeight: descLine + "px",
									letterSpacing: descLetter + "px",
									fontStyle: descStyle,
									marginTop: descMarginT + "px",
									marginBottom: descMarginB + "px",
									padding: descPadding + "px"
								}}
							/>
						</div>
					)}
					{btnChecked && (
						<div
							className={`premium-pricing-table__button`}
							style={{
								width: btnWidth + "%"
							}}
						>
							<a
								class={`premium-pricing-table__button_link`}
								href={btnLink}
								target={btnTarget ? "_blank" : "_self"}
								rel="noopener noreferrer"
								style={{
									color: btnColor,
									background: btnBack ? btnBack : "transparent",
									fontSize: btnSize + "px",
									fontWeight: btnWeight,
									letterSpacing: btnLetter + "px",
									fontStyle: btnStyle,
									lineHeight: btnLine + "px",
									marginTop: btnMarginT,
									marginBottom: btnMarginB,
									padding: btnPadding + btnPaddingU,
									border: btnBorderType,
									borderWidth: btnBorderWidth + "px",
									borderRadius: btnBorderRadius + "px",
									borderColor: btnBorderColor
								}}
							>
								<RichText.Content
									tagName="span"
									onChange={newText =>
										setAttributes({ btnText: newText })
									}
									value={btnText}
									style={{
										textTransform: btnUpper ? "uppercase" : "none"
									}}
								/>
							</a>
							<style
								dangerouslySetInnerHTML={{
									__html: [
										`#premium-pricing-table-${id} .premium-pricing-table__button_link:hover {`,
										`color: ${btnHoverColor} !important;`,
										`background: ${btnHoverBack} !important`,
										"}"
									].join("\n")
								}}
							/>
						</div>
					)}
				</div>
			);
		}
	},
    {
        attributes: pricingAttrs_1_6_3,
        migrate: attributes => {
            return Object.assign(attributes, { featsAlign: "" });
        },
        save: props => {
            const {
                contentAlign,
                tableBack,
                borderType,
                borderWidth,
                borderRadius,
                borderColor,
                tablePadding,
                tableShadowBlur,
                tableShadowColor,
                tableShadowHorizontal,
                tableShadowVertical,
                tableShadowPosition,
                titleChecked,
                title,
                titleTag,
                titleColor,
                titleSize,
                titleLetter,
                titleUpper,
                titleStyle,
                titleLine,
                titleWeight,
                titleBack,
                titleShadowBlur,
                titleShadowColor,
                titleShadowHorizontal,
                titleShadowVertical,
                titleMarginT,
                titleMarginB,
                titlePadding,
                descChecked,
                desc,
                descColor,
                descSize,
                descLine,
                descWeight,
                descStyle,
                descLetter,
                descBack,
                descMarginT,
                descMarginB,
                descPadding,
                priceChecked,
                priceBack,
                priceMarginT,
                priceMarginB,
                pricePadding,
                slashPrice,
                slashColor,
                slashSize,
                slashWeight,
                slashV,
                currPrice,
                currColor,
                currSize,
                currWeight,
                currV,
                valPrice,
                valColor,
                valSize,
                valWeight,
                valV,
                divPrice,
                divColor,
                divSize,
                divWeight,
                divV,
                durPrice,
                durColor,
                durSize,
                durWeight,
                durV,
                btnChecked,
                btnText,
                btnLink,
                btnTarget,
                btnColor,
                btnHoverColor,
                btnSize,
                btnWeight,
                btnLine,
                btnLetter,
                btnUpper,
                btnStyle,
                btnBack,
                btnHoverBack,
                btnMarginT,
                btnMarginB,
                btnPadding,
                btnPaddingU,
                btnWidth,
                btnBorderType,
                btnBorderWidth,
                btnBorderRadius,
                btnBorderColor,
                badgeChecked,
                badgePos,
                badgeBack,
                badgeColor,
                badgeTop,
                badgeHorizontal,
                badgeWidth,
                badgeSize,
                badgeTextSize,
                badgeWeight,
                badgeLetter,
                badgeStyle,
                badgeUpper,
                badgeText,
                listChecked,
                listColor,
                listWeight,
                listSize,
                listItemsStyle,
                listLine,
                listUpper,
                listLetter,
                listBack,
                listItems,
                listMarginB,
                listMarginT,
                listPadding,
                listStyle,
                id
            } = props.attributes;
            return (
                <div
                    id={`${className}-${id}`}
                    className={`${className}`}
                    style={{
                        textAlign: contentAlign,
                        background: tableBack,
                        border: borderType,
                        borderWidth: borderWidth + "px",
                        borderRadius: borderRadius + "px",
                        borderColor: borderColor,
                        padding: tablePadding + "px",
                        boxShadow: `${tableShadowHorizontal}px ${tableShadowVertical}px ${tableShadowBlur}px ${tableShadowColor} ${tableShadowPosition}`
                    }}
                >
                    {badgeChecked && (
                        <div
                            className={`${className}__badge_wrap ${className}__badge_${badgePos}`}
                        >
                            <div
                                className={`${className}__badge`}
                                style={{
                                    borderRightColor:
                                        "right" === badgePos ? badgeBack : "transparent",
                                    borderTopColor:
                                        "left" === badgePos ? badgeBack : "transparent",
                                    borderBottomWidth: badgeSize + "px",
                                    borderRightWidth: badgeSize + "px",
                                    borderTopWidth:
                                        "left" === badgePos ? badgeSize + "px" : "none",
                                    borderLeftWidth:
                                        "right" === badgePos ? badgeSize + "px" : "none"
                                }}
                            >
                                <span
                                    style={{
                                        fontSize: badgeTextSize + "px",
                                        color: badgeColor,
                                        fontWeight: badgeWeight,
                                        textTransform: badgeUpper ? "uppercase" : "none",
                                        letterSpacing: badgeLetter + "px",
                                        fontStyle: badgeStyle,
                                        width: badgeWidth + "px",
                                        top: badgeTop + "px",
                                        left: "left" === badgePos ? badgeHorizontal + "px" : "auto",
                                        right:
                                            "right" === badgePos ? badgeHorizontal + "px" : "auto"
                                    }}
                                >
                                    {badgeText}
                                </span>
                            </div>
                        </div>
                    )}
                    {titleChecked && (
                        <div
                            className={`${className}__title_wrap`}
                            style={{
                                paddingTop: titleMarginT + "px",
                                paddingBottom: titleMarginB + "px"
                            }}
                        >
                            <RichText.Content
                                tagName={titleTag.toLowerCase()}
                                className={`${className}__title`}
                                value={title}
                                style={{
                                    color: titleColor,
                                    background: titleBack,
                                    fontSize: titleSize + "px",
                                    letterSpacing: titleLetter + "px",
                                    textTransform: titleUpper ? "uppercase" : "none",
                                    fontStyle: titleStyle,
                                    fontWeight: titleWeight,
                                    lineHeight: titleLine + "px",
                                    marginBottom: titleMarginB + "px",
                                    padding: titlePadding + "px",
                                    textShadow: `${titleShadowHorizontal}px ${titleShadowVertical}px ${titleShadowBlur}px ${titleShadowColor}`
                                }}
                            />
                        </div>
                    )}
                    {priceChecked && (
                        <div
                            className={`${className}__price_wrap`}
                            style={{
                                background: priceBack,
                                marginTop: priceMarginT + "px",
                                marginBottom: priceMarginB + "px",
                                padding: pricePadding + "px",
                                justifyContent: contentAlign
                            }}
                        >
                            {slashPrice && (
                                <strike
                                    className={`${className}__slash`}
                                    style={{
                                        color: slashColor,
                                        fontSize: slashSize + "px",
                                        fontWeight: slashWeight,
                                        alignSelf: slashV
                                    }}
                                >
                                    {slashPrice}
                                </strike>
                            )}
                            {currPrice && (
                                <span
                                    className={`${className}__currency`}
                                    style={{
                                        color: currColor,
                                        fontSize: currSize + "px",
                                        fontWeight: currWeight,
                                        alignSelf: currV
                                    }}
                                >
                                    {currPrice}
                                </span>
                            )}
                            {valPrice && (
                                <span
                                    className={`${className}__val`}
                                    style={{
                                        color: valColor,
                                        fontSize: valSize + "px",
                                        fontWeight: valWeight,
                                        alignSelf: valV
                                    }}
                                >
                                    {valPrice}
                                </span>
                            )}
                            {divPrice && (
                                <span
                                    className={`${className}__divider`}
                                    style={{
                                        color: divColor,
                                        fontSize: divSize + "px",
                                        fontWeight: divWeight,
                                        alignSelf: divV
                                    }}
                                >
                                    {divPrice}
                                </span>
                            )}
                            {durPrice && (
                                <span
                                    className={`${className}__dur`}
                                    style={{
                                        color: durColor,
                                        fontSize: durSize + "px",
                                        fontWeight: durWeight,
                                        alignSelf: durV
                                    }}
                                >
                                    {durPrice}
                                </span>
                            )}
                        </div>
                    )}
                    {listChecked && (
                        <div
                            className={`${className}__list_wrap`}
                            style={{
                                marginTop: listMarginT + "px",
                                marginBottom: listMarginB + "px"
                            }}
                        >
                            <ul
                                className={`${className}__list list-${listStyle}`}
                                style={{
                                    color: listColor,
                                    fontSize: listSize + "px",
                                    background: listBack,
                                    padding: listPadding + "px",
                                    listStyle: "check" !== listStyle ? listStyle : "none",
                                    listStylePosition: "inside",
                                    fontWeight: listWeight,
                                    letterSpacing: listLetter + "px",
                                    textTransform: listUpper ? "uppercase" : "none",
                                    fontStyle: listItemsStyle,
                                    lineHeight: listLine + "px"
                                }}
                            >
                                {listItems}
                            </ul>
                        </div>
                    )}
                    {descChecked && (
                        <div className={`${className}__desc_wrap`}>
                            <RichText.Content
                                tagName="p"
                                className={`${className}__desc`}
                                value={desc}
                                style={{
                                    color: descColor,
                                    background: descBack,
                                    fontSize: descSize + "px",
                                    fontWeight: descWeight,
                                    lineHeight: descLine + "px",
                                    letterSpacing: descLetter + "px",
                                    fontStyle: descStyle,
                                    marginTop: descMarginT + "px",
                                    marginBottom: descMarginB + "px",
                                    padding: descPadding + "px"
                                }}
                            />
                        </div>
                    )}
                    {btnChecked && (
                        <div
                            className={`${className}__button`}
                            style={{
                                width: btnWidth + "%"
                            }}
                        >
                            <a
                                class={`${className}__button_link`}
                                href={btnLink}
                                target={btnTarget ? "_blank" : "_self"}
                                rel="noopener noreferrer"
                                style={{
                                    color: btnColor,
                                    background: btnBack ? btnBack : "transparent",
                                    fontSize: btnSize + "px",
                                    fontWeight: btnWeight,
                                    letterSpacing: btnLetter + "px",
                                    fontStyle: btnStyle,
                                    lineHeight: btnLine + "px",
                                    marginTop: btnMarginT,
                                    marginBottom: btnMarginB,
                                    padding: btnPadding + btnPaddingU,
                                    border: btnBorderType,
                                    borderWidth: btnBorderWidth + "px",
                                    borderRadius: btnBorderRadius + "px",
                                    borderColor: btnBorderColor
                                }}
                            >
                                <RichText.Content
                                    tagName="span"
                                    onChange={newText => setAttributes({ btnText: newText })}
                                    value={btnText}
                                    style={{
                                        textTransform: btnUpper ? "uppercase" : "none"
                                    }}
                                />
                            </a>
                            <style
                                dangerouslySetInnerHTML={{
                                    __html: [
                                        `#premium-pricing-table-${id} .premium-pricing-table__button_link:hover {`,
                                        `color: ${btnHoverColor} !important;`,
                                        `background: ${btnHoverBack} !important`,
                                        "}"
                                    ].join("\n")
                                }}
                            />
                        </div>
                    )}
                </div>
            );
        }
    },
    {
        attributes: pricingAttrs_1_6_3,
        migrate: attributes => {
            return Object.assign(attributes, { btnPaddingU: "" });
        },
        save: props => {
            const {
                contentAlign,
                tableBack,
                borderType,
                borderWidth,
                borderRadius,
                borderColor,
                tablePadding,
                titleChecked,
                title,
                titleTag,
                titleColor,
                titleSize,
                titleLetter,
                titleUpper,
                titleStyle,
                titleLine,
                titleWeight,
                titleBack,
                titleShadowBlur,
                titleShadowColor,
                titleShadowHorizontal,
                titleShadowVertical,
                titleMarginT,
                titleMarginB,
                titlePadding,
                descChecked,
                desc,
                descColor,
                descSize,
                descLine,
                descWeight,
                descStyle,
                descLetter,
                descBack,
                descMarginT,
                descMarginB,
                descPadding,
                priceChecked,
                priceBack,
                priceMarginT,
                priceMarginB,
                pricePadding,
                slashPrice,
                slashColor,
                slashSize,
                slashWeight,
                slashV,
                currPrice,
                currColor,
                currSize,
                currWeight,
                currV,
                valPrice,
                valColor,
                valSize,
                valWeight,
                valV,
                divPrice,
                divColor,
                divSize,
                divWeight,
                divV,
                durPrice,
                durColor,
                durSize,
                durWeight,
                durV,
                btnChecked,
                btnText,
                btnLink,
                btnTarget,
                btnColor,
                btnHoverColor,
                btnSize,
                btnWeight,
                btnLine,
                btnLetter,
                btnUpper,
                btnStyle,
                btnBack,
                btnHoverBack,
                btnMarginT,
                btnMarginB,
                btnPadding,
                btnWidth,
                btnBorderType,
                btnBorderWidth,
                btnBorderRadius,
                btnBorderColor,
                badgeChecked,
                badgePos,
                badgeBack,
                badgeColor,
                badgeTop,
                badgeHorizontal,
                badgeWidth,
                badgeSize,
                badgeTextSize,
                badgeWeight,
                badgeLetter,
                badgeStyle,
                badgeUpper,
                badgeText,
                listChecked,
                listColor,
                listWeight,
                listSize,
                listItemsStyle,
                listLine,
                listUpper,
                listLetter,
                listBack,
                listItems,
                listMarginB,
                listMarginT,
                listPadding,
                listStyle,
                id
            } = props.attributes;
            return (
                <div
                    id={`${className}-${id}`}
                    className={`${className}`}
                    style={{
                        textAlign: contentAlign,
                        background: tableBack,
                        border: borderType,
                        borderWidth: borderWidth + "px",
                        borderRadius: borderRadius + "px",
                        borderColor: borderColor,
                        padding: tablePadding + "px"
                    }}
                >
                    {badgeChecked && (
                        <div
                            className={`${className}__badge_wrap ${className}__badge_${badgePos}`}
                        >
                            <div
                                className={`${className}__badge`}
                                style={{
                                    borderRightColor:
                                        "right" === badgePos ? badgeBack : "transparent",
                                    borderTopColor:
                                        "left" === badgePos ? badgeBack : "transparent",
                                    borderBottomWidth: badgeSize + "px",
                                    borderRightWidth: badgeSize + "px",
                                    borderTopWidth:
                                        "left" === badgePos ? badgeSize + "px" : "none",
                                    borderLeftWidth:
                                        "right" === badgePos ? badgeSize + "px" : "none"
                                }}
                            >
                                <span
                                    style={{
                                        fontSize: badgeTextSize + "px",
                                        color: badgeColor,
                                        fontWeight: badgeWeight,
                                        textTransform: badgeUpper ? "uppercase" : "none",
                                        letterSpacing: badgeLetter + "px",
                                        fontStyle: badgeStyle,
                                        width: badgeWidth + "px",
                                        top: badgeTop + "px",
                                        left: "left" === badgePos ? badgeHorizontal + "px" : "auto",
                                        right:
                                            "right" === badgePos ? badgeHorizontal + "px" : "auto"
                                    }}
                                >
                                    {badgeText}
                                </span>
                            </div>
                        </div>
                    )}
                    {titleChecked && (
                        <div
                            className={`${className}__title_wrap`}
                            style={{
                                paddingTop: titleMarginT + "px",
                                paddingBottom: titleMarginB + "px"
                            }}
                        >
                            <RichText.Content
                                tagName={titleTag.toLowerCase()}
                                className={`${className}__title`}
                                value={title}
                                style={{
                                    color: titleColor,
                                    background: titleBack,
                                    fontSize: titleSize + "px",
                                    letterSpacing: titleLetter + "px",
                                    textTransform: titleUpper ? "uppercase" : "none",
                                    fontStyle: titleStyle,
                                    fontWeight: titleWeight,
                                    lineHeight: titleLine + "px",
                                    marginBottom: titleMarginB + "px",
                                    padding: titlePadding + "px",
                                    textShadow: `${titleShadowHorizontal}px ${titleShadowVertical}px ${titleShadowBlur}px ${titleShadowColor}`
                                }}
                            />
                        </div>
                    )}
                    {priceChecked && (
                        <div
                            className={`${className}__price_wrap`}
                            style={{
                                background: priceBack,
                                marginTop: priceMarginT + "px",
                                marginBottom: priceMarginB + "px",
                                padding: pricePadding + "px",
                                justifyContent: contentAlign
                            }}
                        >
                            {slashPrice && (
                                <strike
                                    className={`${className}__slash`}
                                    style={{
                                        color: slashColor,
                                        fontSize: slashSize + "px",
                                        fontWeight: slashWeight,
                                        alignSelf: slashV
                                    }}
                                >
                                    {slashPrice}
                                </strike>
                            )}
                            {currPrice && (
                                <span
                                    className={`${className}__currency`}
                                    style={{
                                        color: currColor,
                                        fontSize: currSize + "px",
                                        fontWeight: currWeight,
                                        alignSelf: currV
                                    }}
                                >
                                    {currPrice}
                                </span>
                            )}
                            {valPrice && (
                                <span
                                    className={`${className}__val`}
                                    style={{
                                        color: valColor,
                                        fontSize: valSize + "px",
                                        fontWeight: valWeight,
                                        alignSelf: valV
                                    }}
                                >
                                    {valPrice}
                                </span>
                            )}
                            {divPrice && (
                                <span
                                    className={`${className}__divider`}
                                    style={{
                                        color: divColor,
                                        fontSize: divSize + "px",
                                        fontWeight: divWeight,
                                        alignSelf: divV
                                    }}
                                >
                                    {divPrice}
                                </span>
                            )}
                            {durPrice && (
                                <span
                                    className={`${className}__dur`}
                                    style={{
                                        color: durColor,
                                        fontSize: durSize + "px",
                                        fontWeight: durWeight,
                                        alignSelf: durV
                                    }}
                                >
                                    {durPrice}
                                </span>
                            )}
                        </div>
                    )}
                    {listChecked && (
                        <div
                            className={`${className}__list_wrap`}
                            style={{
                                marginTop: listMarginT + "px",
                                marginBottom: listMarginB + "px"
                            }}
                        >
                            <ul
                                className={`${className}__list list-${listStyle}`}
                                style={{
                                    color: listColor,
                                    fontSize: listSize + "px",
                                    background: listBack,
                                    padding: listPadding + "px",
                                    listStyle: "check" !== listStyle ? listStyle : "none",
                                    listStylePosition: "inside",
                                    fontWeight: listWeight,
                                    letterSpacing: listLetter + "px",
                                    textTransform: listUpper ? "uppercase" : "none",
                                    fontStyle: listItemsStyle,
                                    lineHeight: listLine + "px"
                                }}
                            >
                                {listItems}
                            </ul>
                        </div>
                    )}
                    {descChecked && (
                        <div className={`${className}__desc_wrap`}>
                            <RichText.Content
                                tagName="p"
                                className={`${className}__desc`}
                                value={desc}
                                style={{
                                    color: descColor,
                                    background: descBack,
                                    fontSize: descSize + "px",
                                    fontWeight: descWeight,
                                    lineHeight: descLine + "px",
                                    letterSpacing: descLetter + "px",
                                    fontStyle: descStyle,
                                    marginTop: descMarginT + "px",
                                    marginBottom: descMarginB + "px",
                                    padding: descPadding + "px"
                                }}
                            />
                        </div>
                    )}
                    {btnChecked && (
                        <div
                            className={`${className}__button`}
                            style={{
                                width: btnWidth + "%"
                            }}
                        >
                            <a
                                class={`${className}__button_link`}
                                href={btnLink}
                                target={btnTarget ? "_blank" : "_self"}
                                style={{
                                    color: btnColor,
                                    background: btnBack ? btnBack : "transparent",
                                    fontSize: btnSize + "px",
                                    fontWeight: btnWeight,
                                    letterSpacing: btnLetter + "px",
                                    fontStyle: btnStyle,
                                    lineHeight: btnLine + "px",
                                    marginTop: btnMarginT,
                                    marginBottom: btnMarginB,
                                    padding: btnPadding,
                                    border: btnBorderType,
                                    borderWidth: btnBorderWidth + "px",
                                    borderRadius: btnBorderRadius + "px",
                                    borderColor: btnBorderColor
                                }}
                            >
                                <RichText.Content
                                    tagName="span"
                                    onChange={newText => setAttributes({ btnText: newText })}
                                    value={btnText}
                                    style={{
                                        textTransform: btnUpper ? "uppercase" : "none"
                                    }}
                                />
                            </a>
                            <style
                                dangerouslySetInnerHTML={{
                                    __html: [
                                        `#premium-pricing-table-${id} .premium-pricing-table__button_link:hover {`,
                                        `color: ${btnHoverColor} !important;`,
                                        `background: ${btnHoverBack} !important`,
                                        "}"
                                    ].join("\n")
                                }}
                            />
                        </div>
                    )}
                </div>
            );
        }
    }
];

export default deprecatedContent;
