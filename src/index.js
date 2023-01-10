import { FontAwesomeEnabled } from "../assets/js/settings";
import {
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
    section,
    testimonials,
    bulletList,
    contentSwitcher,
    countUp,
    dualHeading,
    fancyText,
    iconBox,
    imageSeparator,
    pricingTable,
    videoBox,
} from "../assets/js/settings";

dualHeading ? require("./blocks/dual-heading") : "";
accordion ? require("./blocks/accordion") : "";
banner ? require("./blocks/banner") : "";
button ? require("./blocks/button") : "";
countUp ? require("./blocks/count-up") : "";
icon ? require("./blocks/icon") : "";
iconBox ? require("./blocks/icon-box") : "";
maps ? require("./blocks/maps") : "";
pricingTable ? require("./blocks/pricing-table") : "";
section ? require("./blocks/section") : "";
testimonials ? require("./blocks/testimonials") : "";
videoBox ? require("./blocks/video-box") : "";
fancyText ? require("./blocks/fancy-text") : "";
lottie ? require("./blocks/lottie") : "";
Modal ? require("./blocks/Modal") : "";
imageSeparator ? require("./blocks/image-separator") : "";
bulletList ? require("./blocks/bullet-list") : "";
person ? require("./blocks/person") : "";
heading ? require("./blocks/heading") : "";
container ? require("./blocks/container") : "";
import "./blocks/switcher-child";
contentSwitcher ? require("./blocks/content-switcher") : "";
import "./blocks/accordion-item";
import "./blocks/price";
import "./blocks/list-item";
import "./blocks/text";
import "./blocks/badge";
import "./blocks/image";
import "./blocks/icon-group";
import "./blocks/counter";
import "./blocks/author";

window.PremiumOptionsSettings = {
    FontAwesomeEnabled,
};
