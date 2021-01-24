const { __ } = wp.i18n;
import PbgIcon from "../icons";
import edit from "./edit";
const { registerBlockType } = wp.blocks;
registerBlockType("premium/post-blog", {
  title: __("Premium Blog"),
  icon: <PbgIcon icon="content-switcher" />,
  category: "premium-blocks",
  attributes: {
    blockID: {
      type: "string",
    },
    borderWidth: {
      type: "number",
    },
    borderRadius: {
      type: "number",
    },
    borderColor: {
      type: "string",
    },
    rowGap: {
      type: "number",
      default: 16,
    },
    columnGap: {
      type: "number",
      default:16
    },
    gridCheck: {
      type: "boolean",
      default: false,
    },
    numOfPosts: {
      type: "number",
      default: 4,
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
      default:"date"
    },
    order: {
      type: "string",
      default: "desc",
    },
    featuredImage: {
      type: "boolean",
      default: true,
    },
    hoverEffect: {
      type: "string",
      default: "zoomin",
    },
    height: {
      type: "number",
      default: 300,
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
      default: 16,
    },
    displayPostContent: {
      type: "boolean",
      default: true,
    },
    displayPostExcerpt: {
      type: "string",
      default: "Post Excerpt",
    },
    excerptType: {
      type: "string",
      default: "Dots",
    },
    excerptLength: {
      type: "number",
      default: 25,
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

    layoutValue: {
      type: "string",
      default: "even",
    },
    postFilter: {
      type: "string",
      default: "Default",
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
      default: 1,
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
      default: true,
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
      type: "string",
      default: "large",
    },
    categories: {
      type: "string",
    },
    overlayColor: {
      type: "string",
      default: "transparent",
    },
    blur: {
      type: "number",
      default: "0",
    },
    bright: {
      type: "number",
      default: "100",
    },
    contrast: {
      type: "number",
      default: "100",
    },
    saturation: {
      type: "number",
      default: "100",
    },
    hue: {
      type: "number",
      default: "0",
    },
    firstContentLetter: {
      type: "number",
    },
    firstContentStyle: {
      type: "string",
    },
    firstContentUpper: {
      type: "boolean",
      default: false,
    },
    firstContentWeight: {
      type: "number",
      default: 500,
    },
    firstContentfontSize: {
      type: "number",
      default: 15,
    },
    firstContentfontSizeType: {
      type: "string",
      default: "px",
    },
    firstContentfontSizeMobile: {
      type: "number",
      default: 15,
    },
    firstContentfontSizeTablet: {
      type: "number",
      default: 15,
    },
    secondContentLetter: {
      type: "number",
    },
    secondContentStyle: {
      type: "string",
    },
    secondContentUpper: {
      type: "boolean",
      default: false,
    },
    secondContentWeight: {
      type: "number",
      default: 500,
    },
    secondContentfontSize: {
      type: "number",
      default: 15,
    },
    secondContentfontSizeType: {
      type: "string",
      default: "px",
    },
    secondContentfontSizeMobile: {
      type: "number",
      default: 15,
    },
    secondContentfontSizeTablet: {
      type: "number",
      default: 15,
    },
    typoColor: {
      type: "string",   
    },
    metaColor: {
      type: "string"   
    },
    linkColor: {
      type: "string"
    },
    sepaColor: {
      type: "string" 
    },
    hoverTag: {
      type: "string"
    },
    postContentLetter: {
      type: "number",
    },
    postContentStyle: {
      type: "string",
    },
    postContentUpper: {
      type: "boolean",
      default: false,
    },
    postContentWeight: {
      type: "number",
      default: 500,
    },
    postContentfontSize: {
      type: "number",
      default: 15,
    },
    postContentfontSizeType: {
      type: "string",
      default: "px",
    },
    postContentfontSizeMobile: {
      type: "number",
      default: 15,
    },
    postContentfontSizeTablet: {
      type: "number",
      default: 15,
    },
    textColor: {
      type: "string",
    
    },
    tagColor: {
      type: "string"  
    },
    hoverColor: {
      type: "string"
    },
    buttonColor: {
      type: "string"     
    },
    buttonhover: {
      type: "string",

    },
    buttonBackground: {
      type: "string",

    },
    hoverBackground: {
      type: "string",

    },
    currentPage: {
      type: "number",
      default: 0,
    },
    classMigrate: {
      type: "boolean",
      default: false,
    },
    columns: {
      type: "number",
      default: 3,
    },
    mcolumns: {
      type: "number",
      default: 2,
    },
    tcolumns: {
      type: "number",
      default: 1,
    },
    thumbnail: {
      type: "string",
      default: "cover",
    },
    thumbnailMobile: {
      type: "string",
      default: "cover",
    },
    thumbnailTablet: {
      type: "string",
      default: "cover",
    },
    marginBottom: {
      type: "number",
    },
    marginBottomTablet: {
      type: "number",
    },
    marginBottomMobile: {
      type: "number",
    },
    marginBottom: {
      type: "number",
    },
    PostmarginBottomType: {
      type: "string",
      default: "px",
    },
    PostmarginBottom: {
      type: "number",
      default:'',
    },
    PostmarginBottomMobile: {
      type: "number",
      default:''
    },
    PostmarginBottomTablet: {
      type: "number",
      default:''
    },
    PostmarginTopType: {
      type: "string",
      default: "px",
    },
    PostmarginTop: {
      type: "number",
    },
    PostmarginTopMobile: {
      type: "number",
    },
    PostmarginTopTablet: {
      type: "number",
    },
    postSpacingType: {
      type: "string",
      default: "px",
    },
    postSpacing: {
      type: "number",
    },
    postSpacingMobile: {
      type: "number",
    },
    postSpacingTablet: {
      type: "number",
    },
    postContentfontSizeType: {
      type: "string",
      default: "px",
    },
    postContentfontSize: {
      type: "number",
    },
    postContentfontSizeMobile: {
      type: "number",
    },
    postContentfontSizeTablet: {
      type: "number",
    },
    PostmarginRightType: {
      type: "string",
      default: "px",
    },
    PostmarginRight: {
      type: "number",
    },
    PostmarginRightMobile: {
      type: "number",
    },
    PostmarginRightTablet: {
      type: "number",
    },
    PostmarginLeftType: {
      type: "string",
    },
    PostmarginLeft: {
      type: "number",
    },
    PostmarginLeftMobile: {
      type: "number",
    },
    PostmarginLeftTablet: {
      type: "number",
    },
    backgroundPostContent: {
      type: "string",
    },
    containerShadowColor: {
      type: "string",
    },
    containerShadowBlur: {
      type: "string",
    },
    containerShadowHorizontal: {
      type: "string",
    },
    containerShadowVertical: {
      type: "string",
    },
    containerShadowPosition: {
      type: "string",
    },
    tagsfontSizeType: {
      type: "string",
      default: "px",
    },
    tagsfontSize: {
      type: "number",
      default: "default",
    },
    tagsfontSizeMobile: {
      type: "number",
      default: "default",
    },
    tagsfontSizeTablet: {
      type: "number",
      default: "default",
    },
    tagsWeight: {
      type: "number",
      default: "default",
    },
    tagsStyle: {
      type: "string",
      default: "default",
    },
    tagsLetter: {
      type: "string",
      default: "default",
    },
    tagsUpper: {
      type: "string",
      default: "default",
    },
    buttonfontSizeType: {
      type: "string",
      default: "px",
    },
    buttonfontSize: {
      type: "number",
    },
    buttonfontSizeMobile: {
      type: "number",
    },
    buttonfontSizeTablet: {
      type: "number",
    },
    buttonWeight: {
      type: "number",
    },
    buttonStyle: {
      type: "number",
    },
    buttonLetter: {
      type: "number",
    },
    buttonUpper: {
      type: "number",
    },
    buttonSpacingType: {
      type: "string",
      default: "px",
    },
    buttonSpacing: {
      type: "number",
    },
    buttonSpacingMobile: {
      type: "number",
    },
    buttonSpacingTablet: {
      type: "number",
    },
    borderType: {
      type: "string",
      default: "solid",
    },
    buttonPaddingType: {
      type: "string",
      default: "px",
    },
    buttonPadding: {
      type: "number",
    },
    buttonPaddingMobile: {
      type: "number",
    },
    buttonPaddingTablet: {
      type: "number",
    },
  },
  example: {},
  edit: edit,
  save() {
    return null;
  },
});
