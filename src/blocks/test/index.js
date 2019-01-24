const { registerBlockType } = wp.blocks;

const { InspectorControls } = wp.editor;

const { PanelBody, RangeControl } = wp.components;

const testAttributes = {
  text: {
    type: "string",
    default: "hello world"
  },
  newtextSize: {
    type: "number"
  }
};
registerBlockType("premium/test", {
  title: "Test",
  icon: "twitter",
  category: "premium-blocks",
  attributes: testAttributes,
  edit: props => {
    const { setAttributes } = props;
    const { text, textSize } = props.attributes;
    return [
      <InspectorControls key={"inspector"}>
        <PanelBody>
          <RangeControl
            label={"Font Size (PX)"}
            value={textSize}
            onChange={newValue => setAttributes({ textSize: newValue })}
          />
        </PanelBody>
      </InspectorControls>,
      <h3 style={{ fontSize: textSize }}>{text}</h3>
    ];
  },
  save: props => {
    const { text, textSize } = props.attributes;
    return <h3 style={{ fontSize: textSize }}>{text}</h3>;
  },
  deprecated: [
    {
      attributes: {
        text: {
          type: "string",
          default: "hello world"
        },
        textSize: {
          type: "number",
          default: 30
        }
      },
      migrate: ({ textSize }) => {
        return { newtextSize: textSize };
      },
      save: props => {
        const { text, textSize } = props.attributes;
        return <h2 style={{ fontSize: textSize }}>{text}</h2>;
      }
    },
    {
      attributes: testAttributes,
      save: props => {
        const { text, textSize } = props.attributes;
        return <h2 style={{ fontSize: textSize }}>{text}</h2>;
      }
    },
    {
      attributes: testAttributes,
      save: props => {
        const { text } = props.attributes;
        return <p>{text}</p>;
      }
    }
  ]
});
