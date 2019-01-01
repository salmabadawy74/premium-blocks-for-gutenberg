import { iconList } from "../settings";
import FontIconPicker from "@fonticonpicker/react-fonticonpicker";
import iconsList from "../../components/icon-list";
import PbgIcon from "../icons";

if (iconList) {
  const className = "premium-icon-list";

  const { __ } = wp.i18n;

  const { registerBlockType } = wp.blocks;

  const {
    PanelBody,
    SelectControl,
    RangeControl,
    TextControl,
    ToggleControl
  } = wp.components;
  const {
    InspectorControls,
    AlignmentToolbar,
    PanelColorSettings,
    BlockControls
  } = wp.editor;

  const iconListAttrs = {
    id: {
      type: "string"
    },
    contentAlign: {
      type: "string",
      default: "center"
    },
    iconsNumber: {
      type: "number",
      default: 3
    },
    iconsArr: {
      type: "array",
      default: [0, 0, 0]
    },
    selectedIcons: {
      type: "array",
      default: [
        "dashicons dashicons-admin-site",
        "dashicons dashicons-admin-site",
        "dashicons dashicons-admin-site"
      ]
    },
    iconsColors: {
      type: "array",
      default: ["#000", "#000", "#000"]
    },
    iconsEffects: {
      type: "array",
      default: ["none", "none", "none"]
    },
    iconsBackColors: {
      type: "array",
      default: ["#fff", "#fff", "#fff"]
    },
    iconsHoverColors: {
      type: "array",
      default: ["#000", "#000", "#000"]
    },
    iconsHoverBack: {
      type: "array",
      default: ["#fff", "#fff", "#fff"]
    },
    iconsWidths: {
      type: "array",
      default: [15, 15, 15]
    },
    iconsSizes: {
      type: "array",
      default: [20, 20, 20]
    },
    iconsRadius: {
      type: "array",
      default: [0, 0, 0]
    },
    iconsPaddings: {
      type: "array",
      default: [0, 0, 0]
    },
    iconsLabels: {
      type: "array",
      default: ["Icon #1", "Icon #2", "Icon #3"]
    },
    labelsPositions: {
      type: "array",
      default: ["column", "column", "column"]
    },
    labelsColors: {
      type: "array",
      default: ["#000", "#000", "#000"]
    },
    labelsHoverColors: {
      type: "array",
      default: ["#000", "#000", "#000"]
    },
    iconsUrls: {
      type: "array",
      default: [null, null, null]
    },
    iconsTabs: {
      type: "array",
      default: [false, false, false]
    }
  };

  registerBlockType("premium/icon-list", {
    title: __("Icon List"),
    icon: <PbgIcon icon="icon" />,
    category: "premium-blocks",
    attributes: iconListAttrs,
    edit: props => {
      const { isSelected, setAttributes, clientId: blockId } = props;
      const {
        id,
        contentAlign,
        iconsNumber,
        iconsArr,
        selectedIcons,
        iconsColors,
        iconsEffects,
        iconsWidths,
        iconsBackColors,
        iconsHoverColors,
        iconsHoverBack,
        iconsSizes,
        iconsRadius,
        iconsPaddings,
        iconsLabels,
        labelsPositions,
        labelsColors,
        labelsHoverColors,
        iconsUrls,
        iconsTabs
      } = props.attributes;

      const EFFECTS = [
        {
          value: "none",
          label: __("None")
        },
        {
          value: "pulse",
          label: __("Pulse")
        },
        {
          value: "rotate",
          label: __("Rotate")
        },
        {
          value: "drotate",
          label: __("3D Rotate")
        },
        {
          value: "buzz",
          label: __("Buzz")
        },
        {
          value: "drop",
          label: __("Drop Shadow")
        },
        {
          value: "wobble",
          label: __("Wobble")
        }
      ];

      const POSITIONS = [
        {
          value: "column",
          label: __("Below")
        },
        {
          value: "row",
          label: __("Right")
        },
        {
          value: "row-reverse",
          label: __("Left")
        }
      ];

      let icons = [
          selectedIcons[0],
          selectedIcons[1],
          selectedIcons[2],
          selectedIcons[3],
          selectedIcons[4],
          selectedIcons[5],
          selectedIcons[6],
          selectedIcons[7]
        ],
        sizes = [
          iconsSizes[0],
          iconsSizes[1],
          iconsSizes[2],
          iconsSizes[3],
          iconsSizes[4],
          iconsSizes[5],
          iconsSizes[6],
          iconsSizes[7]
        ],
        widths = [
          iconsWidths[0],
          iconsWidths[1],
          iconsWidths[2],
          iconsWidths[3],
          iconsWidths[4],
          iconsWidths[5],
          iconsWidths[6],
          iconsWidths[7]
        ],
        colors = [
          iconsColors[0],
          iconsColors[1],
          iconsColors[2],
          iconsColors[3],
          iconsColors[4],
          iconsColors[5],
          iconsColors[6],
          iconsColors[7]
        ],
        effects = [
          iconsEffects[0],
          iconsEffects[1],
          iconsEffects[2],
          iconsEffects[3],
          iconsEffects[4],
          iconsEffects[5],
          iconsEffects[6],
          iconsEffects[7]
        ],
        backColors = [
          iconsBackColors[0],
          iconsBackColors[1],
          iconsBackColors[2],
          iconsBackColors[3],
          iconsBackColors[4],
          iconsBackColors[5],
          iconsBackColors[6],
          iconsBackColors[7]
        ],
        hoverColors = [
          iconsHoverColors[0],
          iconsHoverColors[1],
          iconsHoverColors[2],
          iconsHoverColors[3],
          iconsHoverColors[4],
          iconsHoverColors[5],
          iconsHoverColors[6],
          iconsHoverColors[7]
        ],
        hoverBackColors = [
          iconsHoverBack[0],
          iconsHoverBack[1],
          iconsHoverBack[2],
          iconsHoverBack[3],
          iconsHoverBack[4],
          iconsHoverBack[5],
          iconsHoverBack[6],
          iconsHoverBack[7]
        ],
        borders = [
          iconsRadius[0],
          iconsRadius[1],
          iconsRadius[2],
          iconsRadius[3],
          iconsRadius[4],
          iconsRadius[5],
          iconsRadius[6],
          iconsRadius[7]
        ],
        paddings = [
          iconsPaddings[0],
          iconsPaddings[1],
          iconsPaddings[2],
          iconsPaddings[3],
          iconsPaddings[4],
          iconsPaddings[5],
          iconsPaddings[6],
          iconsPaddings[7]
        ],
        labels = [
          iconsLabels[0],
          iconsLabels[1],
          iconsLabels[2],
          iconsLabels[3],
          iconsLabels[4],
          iconsLabels[5],
          iconsLabels[6],
          iconsLabels[7]
        ],
        positions = [
          labelsPositions[0],
          labelsPositions[1],
          labelsPositions[2],
          labelsPositions[3],
          labelsPositions[4],
          labelsPositions[5],
          labelsPositions[6],
          labelsPositions[7]
        ],
        labelsCols = [
          labelsColors[0],
          labelsColors[1],
          labelsColors[2],
          labelsColors[3],
          labelsColors[4],
          labelsColors[5],
          labelsColors[6],
          labelsColors[7]
        ],
        labelsHoverCols = [
          labelsHoverColors[0],
          labelsHoverColors[1],
          labelsHoverColors[2],
          labelsHoverColors[3],
          labelsHoverColors[4],
          labelsHoverColors[5],
          labelsHoverColors[6],
          labelsHoverColors[7]
        ],
        urls = [
          iconsUrls[0],
          iconsUrls[1],
          iconsUrls[2],
          iconsUrls[3],
          iconsUrls[4],
          iconsUrls[5],
          iconsUrls[6],
          iconsUrls[7]
        ],
        tabs = [
          iconsTabs[0],
          iconsTabs[1],
          iconsTabs[2],
          iconsTabs[3],
          iconsTabs[4],
          iconsTabs[5],
          iconsTabs[6],
          iconsTabs[7]
        ];
      const panelComponents = iconsArr.map((element, index) => {
        return (
          <PanelBody
            className="premium-panel-body"
            title={__(`Icon #${index + 1} Style`)}
            initialOpen={false}
          >
            <FontIconPicker
              icons={iconsList}
              value={selectedIcons[index]}
              isMulti={false}
              noSelectedPlaceholder={__("Select Icon")}
              onChange={newValue => {
                icons[index] = newValue;
                setAttributes({ selectedIcons: icons });
              }}
            />
            <TextControl
              label={__("Label")}
              value={iconsLabels[index]}
              onChange={newText => {
                labels[index] = newText === undefined ? "" : newText;
                setAttributes({ iconsLabels: labels });
              }}
            />
            <TextControl
              label={__("URL")}
              value={iconsUrls[index]}
              onChange={newText => {
                urls[index] = newText === undefined ? null : newText;
                setAttributes({ iconsUrls: urls });
              }}
            />
            <ToggleControl
              label={__("Open link in new tab")}
              checked={iconsTabs[index]}
              onChange={newValue => {
                tabs[index] = newValue === undefined ? false : newValue;
                setAttributes({ iconsTabs: tabs });
              }}
            />
            <SelectControl
              label={__("Label Position")}
              options={POSITIONS}
              value={labelsPositions[index]}
              onChange={newValue => {
                positions[index] = newValue === undefined ? "column" : newValue;
                setAttributes({ labelsPositions: positions });
              }}
            />
            <RangeControl
              label={__("Icon/Label Size (PX)")}
              value={iconsSizes[index]}
              onChange={newValue => {
                sizes[index] = newValue;
                setAttributes({ iconsSizes: sizes });
              }}
            />
            <RangeControl
              label={__("Width (%)")}
              value={iconsWidths[index]}
              onChange={newValue => {
                widths[index] = newValue === undefined ? 15 : newValue;
                setAttributes({ iconsWidths: widths });
              }}
            />
            <SelectControl
              label={__("Hover Effect")}
              options={EFFECTS}
              value={iconsEffects[index]}
              onChange={newValue => {
                effects[index] = newValue;
                setAttributes({ iconsEffects: effects });
              }}
            />
            <PanelColorSettings
              title={__("Colors")}
              className="premium-panel-body-inner"
              colorSettings={[
                {
                  value: labelsColors[index],
                  onChange: colorValue => {
                    labelsCols[index] =
                      colorValue === undefined ? "#000" : colorValue;
                    setAttributes({ labelsColors: labelsCols });
                  },
                  label: __("Label Color")
                },
                {
                  value: iconsColors[index],
                  onChange: colorValue => {
                    colors[index] =
                      colorValue === undefined ? "#000" : colorValue;
                    setAttributes({ iconsColors: colors });
                  },
                  label: __("Icon Color")
                },
                {
                  value: iconsBackColors[index],
                  onChange: colorValue => {
                    backColors[index] =
                      colorValue === undefined ? "#fff" : colorValue;
                    setAttributes({ iconsBackColors: backColors });
                  },
                  label: __("Background Color")
                },
                {
                  value: labelsHoverColors[index],
                  onChange: colorValue => {
                    labelsHoverCols[index] =
                      colorValue === undefined ? "#000" : colorValue;
                    setAttributes({ labelsHoverColors: labelsHoverCols });
                  },
                  label: __("Label Hover Color")
                },
                {
                  value: iconsHoverColors[index],
                  onChange: colorValue => {
                    hoverColors[index] =
                      colorValue === undefined ? "#000" : colorValue;
                    setAttributes({ iconsHoverColors: hoverColors });
                  },
                  label: __("Icon Hover Color")
                },
                {
                  value: iconsHoverBack[index],
                  onChange: colorValue => {
                    hoverBackColors[index] =
                      colorValue === undefined ? "#fff" : colorValue;
                    setAttributes({ iconsHoverBack: hoverBackColors });
                  },
                  label: __("Background Hover Color")
                }
              ]}
            />
            <RangeControl
              label={__("Border Radius (%)")}
              value={iconsRadius[index]}
              onChange={newValue => {
                borders[index] = newValue === undefined ? 0 : newValue;
                setAttributes({ iconsRadius: borders });
              }}
            />
            <RangeControl
              label={__("Padding (PX)")}
              value={iconsPaddings[index]}
              onChange={newValue => {
                paddings[index] = newValue === undefined ? 0 : newValue;
                setAttributes({ iconsPaddings: paddings });
              }}
            />
          </PanelBody>
        );
      });

      const iconListItems = iconsArr.map((element, index) => {
        return (
          <div
            id={`${className}__icon_wrap-${index}`}
            className={`${className}__icon_wrap list-${
              labelsPositions[index] === undefined
                ? "column"
                : labelsPositions[index]
            }`}
            style={{
              color:
                iconsColors[index] === undefined ? "#000" : iconsColors[index],
              backgroundColor:
                iconsBackColors[index] === undefined
                  ? "#fff"
                  : iconsBackColors[index],
              flexBasis:
                iconsWidths[index] === undefined
                  ? 15
                  : iconsWidths[index] + "%",
              borderRadius:
                iconsRadius[index] === undefined ? 0 : iconsRadius[index] + "%",
              padding:
                iconsPaddings[index] === undefined
                  ? 0
                  : iconsRadius[index] + "%"
            }}
          >
            <style
              dangerouslySetInnerHTML={{
                __html: [
                  `#premium-icon-list-${id} #premium-icon-list__icon_wrap-${index}:hover {`,
                  `color: ${
                    iconsHoverColors[index] === undefined
                      ? "#000"
                      : iconsHoverColors[index]
                  } !important;`,
                  `background-color: ${
                    iconsHoverBack[index] === undefined
                      ? "#fff"
                      : iconsHoverBack[index]
                  } !important;`,
                  "}",
                  `#premium-icon-list-${id} #premium-icon-list__icon_wrap-${index}:hover .premium-icon-list__text {`,
                  `color: ${
                    labelsHoverColors[index] === undefined
                      ? "#000"
                      : labelsHoverColors[index]
                  } !important;`,
                  "}"
                ].join("\n")
              }}
            />
            <i
              className={`${className}__icon ${
                selectedIcons[index] === undefined ? "" : selectedIcons[index]
              } ${className}__${
                iconsEffects[index] === undefined ? "none" : iconsEffects[index]
              }`}
              style={{
                fontSize:
                  iconsSizes[index] === undefined ? 20 : iconsSizes[index]
              }}
            />
            {iconsLabels[index] && (
              <p
                className={`${className}__text`}
                style={{
                  color:
                    labelsColors[index] === undefined
                      ? "#000"
                      : labelsColors[index],
                  fontSize:
                    iconsSizes[index] === undefined ? 20 : iconsSizes[index]
                }}
              >
                {iconsLabels[index]}
              </p>
            )}
            {iconsUrls[index] && (
              <a
                className={`${className}__link`}
                href={iconsUrls[index]}
                target={iconsTabs[index] && "_blank"}
              />
            )}
          </div>
        );
      });

      setAttributes({ id: blockId });
      return [
        isSelected && (
          <BlockControls key="controls">
            <AlignmentToolbar
              value={contentAlign}
              onChange={newAlign =>
                setAttributes({
                  contentAlign: newAlign === undefined ? "left" : newAlign
                })
              }
            />
          </BlockControls>
        ),
        isSelected && (
          <InspectorControls key="inspector">
            <PanelBody
              className="premium-panel-body"
              title={__("Number of Icons")}
              initialOpen={false}
            >
              <RangeControl
                label={__("Set Number of Icons")}
                value={iconsNumber}
                min="1"
                max="8"
                onChange={newValue => {
                  iconsArr.length = newValue;
                  setAttributes({
                    iconsNumber: newValue,
                    iconsArr: iconsArr.fill(0)
                  });
                }}
              />
            </PanelBody>
            {panelComponents}
          </InspectorControls>
        ),

        <div id={`${className}-${id}`} className={`${className}`}>
          <div
            className={`${className}__list_wrap`}
            style={{
              justifyContent: contentAlign
            }}
          >
            {iconListItems}
          </div>
        </div>
      ];
    },
    save: props => {
      const {
        id,
        contentAlign,
        iconsNumber,
        iconsArr,
        selectedIcons,
        iconsColors,
        iconsEffects,
        iconsBackColors,
        iconsHoverColors,
        iconsHoverBack,
        iconsWidths,
        iconsSizes,
        iconsRadius,
        iconsPaddings,
        iconsLabels,
        labelsPositions,
        labelsColors,
        labelsHoverColors,
        iconsUrls,
        iconsTabs
      } = props.attributes;

      iconsArr.length = iconsNumber;
      iconsArr.fill(0);

      const iconListItems = iconsArr.map((element, index) => {
        return (
          <div
            id={`${className}__icon_wrap-${index}`}
            className={`${className}__icon_wrap list-${
              labelsPositions[index] === undefined
                ? "column"
                : labelsPositions[index]
            }`}
            style={{
              color:
                iconsColors[index] === undefined ? "#000" : iconsColors[index],
              backgroundColor:
                iconsBackColors[index] === undefined
                  ? "#fff"
                  : iconsBackColors[index],
              flexBasis:
                iconsWidths[index] === undefined
                  ? 15
                  : iconsWidths[index] + "%",
              borderRadius:
                iconsRadius[index] === undefined ? 0 : iconsRadius[index] + "%",
              padding:
                iconsPaddings[index] === undefined
                  ? 0
                  : iconsRadius[index] + "%"
            }}
          >
            <style
              dangerouslySetInnerHTML={{
                __html: [
                  `#premium-icon-list-${id} #premium-icon-list__icon_wrap-${index}:hover {`,
                  `color: ${
                    iconsHoverColors[index] === undefined
                      ? "#000"
                      : iconsHoverColors[index]
                  } !important;`,
                  `background-color: ${
                    iconsHoverBack[index] === undefined
                      ? "#fff"
                      : iconsHoverBack[index]
                  } !important;`,
                  "}",
                  `#premium-icon-list-${id} #premium-icon-list__icon_wrap-${index}:hover .premium-icon-list__text {`,
                  `color: ${
                    labelsHoverColors[index] === undefined
                      ? "#000"
                      : labelsHoverColors[index]
                  } !important;`,
                  "}"
                ].join("\n")
              }}
            />
            <i
              className={`${className}__icon ${
                selectedIcons[index] === undefined ? "" : selectedIcons[index]
              } ${className}__${
                iconsEffects[index] === undefined ? "none" : iconsEffects[index]
              }`}
              style={{
                fontSize:
                  iconsSizes[index] === undefined ? 20 : iconsSizes[index]
              }}
            />
            {iconsLabels[index] && (
              <p
                className={`${className}__text`}
                style={{
                  color:
                    labelsColors[index] === undefined
                      ? "#000"
                      : labelsColors[index],
                  fontSize:
                    iconsSizes[index] === undefined ? 20 : iconsSizes[index]
                }}
              >
                {iconsLabels[index]}
              </p>
            )}
            {iconsUrls[index] && (
              <a
                className={`${className}__link`}
                href={iconsUrls[index]}
                target={iconsTabs[index] && "_blank"}
              />
            )}
          </div>
        );
      });

      return (
        <div id={`${className}-${id}`} className={`${className}`}>
          <div
            className={`${className}__list_wrap`}
            style={{
              justifyContent: contentAlign
            }}
          >
            {iconListItems}
          </div>
        </div>
      );
    }
  });
}
