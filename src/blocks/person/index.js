import { person } from "../../../assets/js/settings";
import PbgIcon from "../icons";
import save from './save';
import edit from './edit';
import deprecatedContent from './deprecated'

//internationalization.
const { __ } = wp.i18n; 

//register blocks
const { registerBlockType } = wp.blocks; 

const personAttr = {
    imageID: {
        type: "number"
    },
    imageURL: {
        type: "string",
        source: "attribute",
        attribute: "src",
        selector: ".premium-person__img",
    },
    imageWidth: {
        type: "number",
        default: "50"
    },
    imageWidthU: {
        type: "string",
        default: "%"
    },
    imgAlign:{
        type: "string",
        default: "center"
    },
    hoverEffect: {
        type: "string",
        default: "none"
    },
    nameTag: {
        type: "string",
        default: "H2"
    },
    personName: {
        type: "string",
        default: __("Person Name")
    },
    titleTag: {
        type: "string",
        default: "H4"
    },
    personTitle: {
        type: "string",
        default: __("Person Title")
    },
    personDesc: {
        type: "string",
        default: __("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper nulla non metus auctor fringilla")
    },
    align: {
        type: "string",
        default: "center"
    },
    blur: {
        type: "number",
        default: "0"
    },
    bright: {
        type: "number",
        default: "100"
    },
    contrast: {
        type: "number",
        default: "100"
    },
    saturation: {
        type: "number",
        default: "100"
    },
    hue: {
        type: "number",
        default: "0"
    },
    iconColor: {
        type: "string",
        default:"#000"
    },
    iconBackColor: {
        type: "string",
        default: "transparent"
    },
    iconHoverColor:{
        type:"string",
        default:"#fff"
    },
    iconBackHover:{
        type:"string",
        default:"transparent"
    },
    facebookURL:{
        type:"string",
        default:"#"
    },
    twitterURL:{
        type:"string",
        default:"#"
    },
    instaURL:{
        type:"string",
        default:"#"
    },
    youtubeURL:{
        type:"string",
        default:"#"
    },
    googleURL:{
        type:"string",
        default:"#"
    },
    behanceURL:{
        type:"string",
        default:"#"
    },
    pinterestURL:{
        type:"string",
        default:"#"
    },
    dribbbleURL:{
        type:"string",
        default:"#"
    },
    emailAddress:{
        type:"string",
        default:__("google.com")
    },
    nameColor:{
        type:"string",
        default:"#000"
    },
    titleColor:{
        type:"string",
        default:"#000"
    },
    nameSpacing:{
        type:"number",
        default:"0"
    },
    nameStyle:{
        type:"string",
        default:"normal"
    },
    nameWeight:{
        type:"number"
    },
    nameLine:{
        type:"number"
    },
    titleSpacing:{
        type:"number",
        default:"0"
    },
    titleStyle:{
        type:"string",
        default:"normal"
    },
    titleWeight:{
        type:"number"
    },
    titleLine:{
        type:"number"
    },
    nameShadowColor:{
        type:"string",
        default:"transparent"
    },
    nameShadowBlur:{
        type:"number",
        default:"0"
    },
    nameShadowHorizontal:{
        type:"number",
        default:"0"
    },
    nameShadowVertical:{
        type:"number",
        default:"0"
    },
    titleShadowColor:{
        type:"string",
        default:"transparent"
    },
    titleShadowBlur:{
        type:"number",
        default:"0"
    },
    titleShadowHorizontal:{
        type:"number",
        default:"0"
    },
    titleShadowVertical:{
        type:"number",
        default:"0"
    },
    descLine:{
        type:"number"
    },
    descSpacing:{
        type:"number",
        default:"0"
    },
    descStyle:{
        type:"string",
        default:"normal"
    },
    descWeight:{
        type:"number"
    },
    descColor:{
        type:"string",
        default:"#000"
    },
    iconBorderRadius:{
        type:"number",
        default:"0"
    },
    iconBorderColor:{
        type:"string",
        default:"#000"
    },
    iconBorderType:{
        type:"string",
        default:"none"
    },
    iconBorderWidth:{
        type:"number",
        default:"0"
    },
    iconPaddingT:{
        type:"number",
        default:"0"
    },
    iconPaddingR:{
        type:"number",
        default:"0"
    },
    iconPaddingL:{
        type:"number",
        default:"0"
    },
    iconPaddingB:{
        type:"number",
        default:"0"
    }
}

registerBlockType("premium/person", {
    title: __("Person"),
    icon: <PbgIcon icon="icon" />,
    category: "premium-blocks",
    attributes: personAttr,
    supports: {
        inserter: person
    },
    edit: edit,
    save: save,
    deprecated: deprecatedContent
});