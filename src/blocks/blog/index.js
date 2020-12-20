import { Blog } from "../../../assets/js/Blog";
const { __ } = wp.i18n;

import PbgIcon from "../icons";
import edit from "./edit";
//import save from "./save";

const { registerBlockType } = wp.blocks;

registerBlockType("premium/post-blog", {
  title: __("Premium Blog"),
  icon: <PbgIcon icon="content-switcher" />,
  category: "premium-blocks",
  attributes: {
    id: {
      type: "string",
    },
  },
  supports: {
    inserter: Blog,
  },
  example: {},

  edit: edit,
  save: function () {},
});
