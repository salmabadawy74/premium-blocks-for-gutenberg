import { button } from "../settings";
if (button) {
  const className = "premium-button";

  const { __ } = wp.i18n;

  const { registerBlockType } = wp.blocks;

  registerBlockType("premium/button", {
    title: __("Button"),
    icon: "clock",
    category: "premium-blocks",
    edit: props => {
      const { isSelected, setAttributes } = props;

      return [<h1>Hello World</h1>];
    },
    save: props => {
      return <h1>Hello World</h1>;
    }
  });
}
