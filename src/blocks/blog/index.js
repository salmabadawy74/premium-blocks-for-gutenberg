const { __ } = wp.i18n;
import blogAttributes from "./attributes";

import PbgIcon from "../icons";
import edit from "./edit";
//import save from "./save";

const { registerBlockType } = wp.blocks;

registerBlockType("premium/post-blog", {
  title: __("Premium Blog"),
  icon: <PbgIcon icon="content-switcher" />,
  category: "premium-blocks",
  attributes: blogAttributes,
  // supports: {
  //   inserter: Blog,
  // },
  example: {},

  edit: edit,
  save: function () {},
});
