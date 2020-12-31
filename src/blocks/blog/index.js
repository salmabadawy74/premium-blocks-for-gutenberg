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
    blockID: {
      type: "string",
    },
    DisplayTitle: {
      type: "boolean",
      default: true,
    },
    DisplayDate: {
      type: "boolean",
      default: true,
    },
    DisplayComment: {
      type: "boolean",
      default: true,
    },
    DisplayExcert: {
      type: "boolean",
      default: true,
    },
    DisplayAuthor: {
      type: "boolean",
      default: true,
    },
    DisplayImage: {
      type: "boolean",
      default: true,
    },
    DisplayTaxonomy: {
      type: "boolean",
      default: true,
    },
    DisplayPostLink: {
      type: "boolean",
      default: true,
    },
    newTab: {
      type: "boolean",
      default: false,
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
      default: false,
    },
    equalHeight: {
      type: "boolean",
      default: false,
    },

    numOfPosts: {
      type: "number",
      default: 1,
    },
    numOfColumns: {
      type: "number",
      default: "2",
    },
    offsetNum: {
      type: "number",
      default: 0,
    },
    currentPost: {
      type: "boolean",
      default: false,
    },
    orderBy: {
      type: "string",
      default: "Date",
    },
    order: {
      type: "string",
      default: "desc",
    },
    featuredImage: {
      type: "boolean",
      default: false,
    },
    hoverEffect: {
      type: "string",
      default: "None",
    },
    height: {
      type: "number",
      default: "default",
    },
    HeightU: {
      type: "string",
      default: "px",
    },

    rowGapUnit: {
      type: "string",
      default: "px",
    },
    columnGap: {
      type: "number",
    },
    postPosition: {
      type: "string",
      default: "center",
    },
    displayPostContent: {
      type: "boolean",
      default: false,
    },
    displayPostExcerpt: {
      type: "string",
      default: "Post Excerpt",
    },
    excerptType: {
      type: "string",
      default: "Dots",
    },
    fullWidth: {
      type: "boolean",
      default: false,
    },
    readMoreText: {
      type: "string",
      default: "Read More",
    },
    displayPostAuthor: {
      type: "boolean",
      default: "true",
    },
    displayPostDate: {
      type: "boolean",
      default: "true",
    },
    displayPostCategories: {
      type: "boolean",
      default: "true",
    },
    displayPostComment: {
      type: "boolean",
      default: "true",
    },
    displayPostTags: {
      type: "boolean",
      default: true,
    },
    filterTabs: {
      type: "boolean",
      default: false,
    },
    getTabsFrom: {
      type: "string",
      default: "Categories",
    },
    tabLabel: {
      type: "string",
      default: "All",
    },
    filterPostion: {
      type: "string",
    },
    linkNewTab: {
      type: "boolean",
      default: false,
    },
    layoutValue: {
      type: "string",
      default: "Even",
    },
    postFilter: {
      type: "string",
      default: "Default",
    },
    sizeType: {
      type: "string",
      default: "px",
    },
    size: {
      type: "number",
      default: 20,
    },
    sizeMobile: {
      type: "number",
      default: 20,
    },
    sizeTablet: {
      type: "number",
      default: 20,
    },
    Carousel: {
      type: "boolean",
      default: false,
    },
    Autoplay: {
      type: "boolean",
      default: false,
    },
    slideToScroll: {
      type: "number",
      default: 0,
    },
    autoplaySpeed: {
      type: "number",
      default: 5000,
    },
    centerMode: {
      type: "boolean",
      default: false,
    },
    slideSpacing: {
      type: "number",
      default: 15,
    },
    navigationDots: {
      type: "boolean",
      default: true,
    },
    navigationArrow: {
      type: "boolean",
      default: false,
    },
    arrowPosition: {
      type: "number",
      default: 0,
    },
    pagination: {
      type: "boolean",
      default: false,
    },
    pageLimit: {
      type: "number",
      default: 5,
    },
    paginationPosition: {
      type: "string",
    },
    imageSize: {
      type: "number",
      default: "medium",
    },
    categories: {
      type: "string",
    },
  },
  // supports: {
  //   inserter: Blog,
  // },
  example: {},

  edit: edit,
  save: function () {},
});
