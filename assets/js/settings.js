/*import premiumLogo from "./logo";
wp.blocks.updateCategory("premium-blocks", { icon: premiumLogo });*/

//Blocks Keys
export const {
    Modal,
    accordion,
    banner,
    heading,
    button,
    icon,
    lottie,
    maps,
    person,
    container,
    search,
    section,
    testimonials,
    trigger,
    [`bullet-list`]: bulletList,
    [`content-switcher`]: contentSwitcher,
    [`count-up`]: countUp,
    [`dual-heading`]: dualHeading,
    [`fancy-text`]: fancyText,
    [`icon-box`]: iconBox,
    [`image-separator`]: imageSeparator,
    [`pricing-table`]: pricingTable,
    [`video-box`]: videoBox

} = PremiumBlocksSettings.activeBlocks;

//Plugin Config Keys
export const { FontAwesomeEnabled } = FontAwesomeConfig;
export const { JsonUploadEnabled } = JsonUploadFile;