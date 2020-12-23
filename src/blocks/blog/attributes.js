import { number } from "prop-types";

const blogAttributes = {
  blockID: {
    type: "string",
  },
  DisplayTitle: {
    type: "boolean",
    value: true,
  },
  DisplayDate: {
    type: "boolean",
    default: true,
  },
  DisplayComment: {
    type: "boolean",
    value: true,
  },
  DisplayExcert: {
    type: "boolean",
    value: true,
  },
  DisplayAuthor: {
    type: "boolean",
    value: true,
  },
  DisplayImage: {
    type: "boolean",
    value: true,
  },
  DisplayTaxonomy: {
    type: "boolean",
    value: true,
  },
  DisplayPostLink: {
    type: "boolean",
    value: true,
  },
  newTab: {
    type: "boolean",
    value: false,
  },
  borderWidth: {
    type: "number",
  },
  ctaText: {
    type: "string",
  },
  borderRadius: {
    type: "number",
  },
  borderColor: {
    type: "string",
  },
  vPadding: {
    type: "number",
  },
  hPadding: {
    type: "number",
  },
  categories: {
    type: "string",
  },
  rowGap: {
    type: "number",
  },
  columnGap: {
    type: "number",
  },
  bgColor: {
    type: "string",
  },
  contentPadding: {
    type: "number",
  },
  contentPaddingMobile: {
    type: "string",
  },
  gridCheck: {
    type: "boolean",
    value: false,
  },
  equalHeight: {
    type: "boolean",
    value: false,
  },
  numOfPosts: {
    type: "number",
    value: 1,
  },
  sourceValue: {
    type: "string",
    value: "Posts",
  },
  categoryFilter: {
    type: "string",
  },
  post_rule: {
    type: "string",
    value: "Match Posts",
  },
  displayStickyPosts: {
    type: "boolean",
    value: false,
  },
  offsetNum: {
    type: "number",
    value: 0,
  },
  currentPost: {
    type: "boolean",
    value: false,
  },
  orderBy: {
    type: "string",
    value: "Date",
  },
  order: {
    type: "string",
    value: "Descending",
  },
  featuredImage: {
    type: "boolean",
    value: false,
  },
  hoverEffect: {
    type: "string",
    value: "None",
  },
  height: {
    type: "number",
    value: "default",
  },
  HeightU: {
    type: "string",
    value: "px",
  },
  titleTag: {
    type: "string",
    value: "h2",
  },

  rowGapUnit: {
    type: "string",
    value: "px",
  },
  columnGap: {
    type: "number",
  },
  postPosition: {
    type: "string",
    value: "center",
  },
  displayPostContent: {
    type: "boolean",
    value: false,
  },
  displayPostExcerpt: {
    type: "string",
    value: "Post Excerpt",
  },
  excerptType: {
    type: "string",
    value: "Dots",
  },
};
export default blogAttributes;
