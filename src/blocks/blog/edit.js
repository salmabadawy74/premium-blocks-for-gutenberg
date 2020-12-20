const { __ } = wp.i18n;
const { Component } = wp.element;
const {
  IconButton,

  PanelBody,
  SelectControl,
  RangeControl,
  TextControl,
  ToggleControl,
} = wp.components;

const {
  InspectorControls,

  ColorPalette,

  MediaUpload,
} = wp.editor;
class edit extends Component {
  constructor() {
    super(...arguments);
  }
  componentDidMount() {}
  render() {
    const Skin = [
      {
        value: "Classic",
        label: __("Classic"),
      },
      {
        value: "Modern",
        label: __("Modern"),
      },
      {
        value: "Cards",
        label: __("Cards"),
      },
      {
        value: "On Side",
        label: __("On Side"),
      },
      {
        value: "Banner",
        label: __("Banner"),
      },
    ];
    const Source = [
      {
        value: "Posts",
        label: __("Posts"),
      },
      {
        value: "Pages",
        label: __("Pages"),
      },
      {
        value: "Media",
        label: __("Media"),
      },
      {
        value: "My Templates",
        label: __("My Templates"),
      },
    ];
    const Filter_Rule = [
      { value: "Match Categories", label: __("Match Categories") },
      { value: "Exclude Categories", label: __("Exclude Categories") },
    ];
    const Author_Rule = [
      { value: "Match Authors", label: __("Match Authors") },
      { value: "Exclude Authors", label: __("Exclude Authors") },
    ];
    const {
      setAttributes,
      attributes,
      isSelected,
      clientId: blockID,
    } = this.props;
    const {
      filter_rule,
      author_rule,
      skinValue,
      gridCheck,
      numOfPosts,
      sourceValue,

      block_id,
      displayPostTitle,
      displayPostDate,
      displayPostComment,
      displayPostExcerpt,
      displayPostAuthor,
      displayPostImage,
      displayPostTaxonomy,
      imgSize,
      imgPosition,
      displayPostLink,
      newTab,
      ctaText,
      borderWidth,
      borderStyle,
      borderColor,
      borderHColor,
      borderRadius,
      btnVPadding,
      btnHPadding,
      align,
      columns,
      tcolumns,
      mcolumns,
      order,
      orderBy,
      categories,
      postsToShow,
      rowGap,
      columnGap,
      bgColor,
      contentPadding,
      contentPaddingMobile,
      titleColor,
      titleTag,
      titleFontSize,
      titleFontSizeType,
      titleFontSizeMobile,
      titleFontSizeTablet,
      titleFontFamily,
      titleFontWeight,
      titleFontSubset,
      titleLineHeightType,
      titleLineHeight,
      titleLineHeightTablet,
      titleLineHeightMobile,
      titleLoadGoogleFonts,
      metaFontSize,
      metaFontSizeType,
      metaFontSizeMobile,
      metaFontSizeTablet,
      metaFontFamily,
      metaFontWeight,
      metaFontSubset,
      metaLineHeightType,
      metaLineHeight,
      metaLineHeightTablet,
      metaLineHeightMobile,
      metaLoadGoogleFonts,
      excerptFontSize,
      excerptFontSizeType,
      excerptFontSizeTablet,
      excerptFontSizeMobile,
      excerptFontFamily,
      excerptFontWeight,
      excerptFontSubset,
      excerptLineHeightType,
      excerptLineHeight,
      excerptLineHeightTablet,
      excerptLineHeightMobile,
      excerptLoadGoogleFonts,
      ctaFontSize,
      ctaFontSizeType,
      ctaFontSizeTablet,
      ctaFontSizeMobile,
      ctaFontFamily,
      ctaFontWeight,
      ctaFontSubset,
      ctaLineHeightType,
      ctaLineHeight,
      ctaLineHeightTablet,
      ctaLineHeightMobile,
      ctaLoadGoogleFonts,
      metaColor,
      excerptColor,
      ctaColor,
      ctaBgColor,
      ctaHColor,
      ctaBgHColor,
      titleBottomSpace,
      metaBottomSpace,
      excerptBottomSpace,
    } = attributes;
    return [
      isSelected && (
        <InspectorControls>
          <PanelBody
            title={__("General")}
            className="premium-panel-body"
            initialOpen={true}
          >
            <SelectControl
              label={__("Skin")}
              options={Skin}
              value={skinValue}
              onChange={(newSkin) => setAttributes({ skinValue: newSkin })}
            />
            <ToggleControl
              label={__("Grid")}
              checked={gridCheck}
              onChange={(newCheck) => setAttributes({ gridCheck: newCheck })}
            />
            <RangeControl
              label={__("Posts Per Page")}
              value={numOfPosts}
              onChange={(newNumber) => setAttributes({ numOfPosts: newNumber })}
              min={1}
              max={100}
            />
          </PanelBody>
          <PanelBody
            title={__("Query")}
            className="premium-panel-body"
            initialOpen={false}
          >
            <SelectControl
              label={__("Source")}
              options={Source}
              value={sourceValue}
              onChange={(newSource) =>
                setAttributes({ sourceValue: newSource })
              }
            />
            <hr />
            <SelectControl
              label={__("Categories Filter Rule")}
              options={Filter_Rule}
              value={filter_rule}
              onChange={(newFilterRule) =>
                setAttributes({ filter_rule: newFilterRule })
              }
            />
            {/* <SelectControl
              label={__("Categories Filter")}
              value={}
              onChange={() => {}}
            /> */}

            <SelectControl
              label={__("Filter By Author Rule")}
              options={Author_Rule}
              value={author_rule}
              onChange={(newAuthorRule) =>
                setAttributes({ author_rule: newAuthorRule })
              }
            />
            {/* <SelectControl label={__("Authors")} value={} onChange={() => {}} /> */}
          </PanelBody>
        </InspectorControls>
      ),
    ];
  }
}
export default edit;
