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
        default: 100
    },
    imageWidthU: {
        type: "string",
        default: "%"
    },
    imageHeight: {
        type: "number",
    },
    effect: {
        type: "string",
        default: "none"
    },
    NameTag: {
        type: "string",
        default: "H3"
    },
    Person: {
        type: "string",
        default: "Person Name"
    },
    TitleTag: {
        type: "string",
        default: "H3"
    },
    PersonTitle: {
        type: "string",
        default: "Person Title"
    },
    PersonDesc: {
        type: "string",
        default: "Person Description"
    },
    align: {
        type: "string",
        default: "center"
    },
    iconColor: {
        type: "string",
        default:"white"
    },
    iconBackColor: {
        type: "string"
    },
    selectedIcon: {
        type: "string",
        default: "fa fa-linkedin"
    },
    
    iconType:{
        type:"string",
        default:"fa"
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
        default:"white"
    },
    titleColor:{
        type:"string",
        default:"white"
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
        default:"white"
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
    },
    iconHoverColor:{
        type:"string"
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