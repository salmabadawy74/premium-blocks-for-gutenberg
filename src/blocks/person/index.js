import PbgIcon from "../icons";
import save from './save'
import edit from './edit'

const { __ } = wp.i18n; //internationalization.

const { registerBlockType } = wp.blocks; //register blocks

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
        default: 50
    },
    imageWidthU: {
        type: "string",
        default: "%"
    },
    hoverEffect: {
        type: "string",
        default: "none"
    },
    nameTag: {
        type: "string",
        default: "H3"
    },
    personName: {
        type: "string",
        default: __("Person Name")
    },
    titleTag: {
        type: "string",
        default: "H3"
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
    iconColor: {
        type: "string",
        default:"#000"
    },
    iconBackColor: {
        type: "string"
    },
    iconHoverColor:{
        type:"string"
    },
    iconBackHover:{
        type:"string"
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
        default:"google.com"
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
        type:"number"
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
        type:"number"
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
        type:"string"
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
        type:"number"
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
        default:"3"
    },
    iconBorderColor:{
        type:"string"
    },
    iconBorderType:{
        type:"string"
    },
    iconBorderWidth:{
        type:"number"
    },
    iconPaddingT:{
        type:"number"
    },
    iconPaddingR:{
        type:"number"
    },
    iconPaddingL:{
        type:"number"
    },
    iconPaddingB:{
        type:"number"
    }
}

registerBlockType("premium/person", {
    title: __("Person"),
    icon: <PbgIcon icon="icon" />,
    category: "premium-blocks",
    attributes: personAttr,
    supports: {
        inserter: true
    },
    edit: edit,
    save: save
});