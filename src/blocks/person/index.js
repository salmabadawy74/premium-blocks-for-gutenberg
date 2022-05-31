import { person } from "../../../assets/js/settings";

import save from "./save";
import edit from "./edit";
import deprecated from "./deprecated";
import PbgIcon from "../icons";
import attributes from "./attributes";

const { __ } = wp.i18n;

const { registerBlockType } = wp.blocks;

registerBlockType("premium/person", {
    title: __("Team Members"),
    description: __('Show off your team members along with social links using Premium Team Members Block', 'premium-block-for-gutenberg'),
    icon: <svg id="Accordion" xmlns="http://www.w3.org/2000/svg" width="21.5" height="21.5" viewBox="0 0 21.5 21.5"><defs><style></style></defs><title>premium-team-members</title><g id="Team_Members" data-name="Team Members"><path class="cls-1" d="M12.62,14h-.27a4,4,0,1,1,.3,0ZM12.5,7.48a2.53,2.53,0,0,0-.14,5h.29a2.53,2.53,0,0,0-.15-5Z" transform="translate(-1.75 -1.75)" /><path class="cls-1" d="M23.25,12.5a10.75,10.75,0,1,0-18,7.87s0,0,0,.06l.31.27a10,10,0,0,0,2.15,1.42l.33.16a6.5,6.5,0,0,0,.61.25l.34.13.32.1.45.13a10.61,10.61,0,0,0,5.48,0l.45-.13.32-.1.34-.13a6.5,6.5,0,0,0,.61-.25l.33-.16a10,10,0,0,0,2.15-1.42l.31-.27s0,0,0-.06A10.7,10.7,0,0,0,23.25,12.5Zm-20,0a9.25,9.25,0,1,1,16.32,6,5,5,0,0,0-1.68-1.79,10.52,10.52,0,0,0-10.78,0,5,5,0,0,0-1.68,1.79A9.29,9.29,0,0,1,3.25,12.5Zm14.53,7.59c-.21.14-.42.28-.64.4a1.38,1.38,0,0,1-.24.14l-.51.26c-.23.11-.47.21-.71.3a8.84,8.84,0,0,1-1.77.45c-.2,0-.4.06-.6.07a8.22,8.22,0,0,1-1.62,0c-.2,0-.4,0-.6-.07a8.84,8.84,0,0,1-1.77-.45c-.24-.09-.48-.19-.71-.3l-.51-.26a1.38,1.38,0,0,1-.24-.14c-.22-.12-.43-.26-.64-.4a7.73,7.73,0,0,1-.64-.49,3.23,3.23,0,0,1,1.36-1.68,9,9,0,0,1,9.11,0,3.25,3.25,0,0,1,1.37,1.68A7.73,7.73,0,0,1,17.78,20.09Z" transform="translate(-1.75 -1.75)" /></g></svg>,
    category: "premium-blocks",
    attributes: attributes,
    supports: {
        inserter: person
    },
    example: {},
    edit: edit,
    save: save,
    deprecated: deprecated
});