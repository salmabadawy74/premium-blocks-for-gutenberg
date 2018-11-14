const { __ } = wp.i18n;
const { SelectControl } = wp.components;
import { FontAwesomeEnabled } from "../blocks/settings";
export default function PremiumIcon(props) {
  const { icon, onChangeIcon = () => {} } = props;
  //Dashicons
  const DASHICONS = [
    {
      value: "",
      label: "none"
    },
    {
      value: " dashicons dashicons-menu",
      label: "menu"
    },
    {
      value: " dashicons dashicons-dashboard",
      label: "dashboard"
    },
    {
      value: " dashicons dashicons-admin-site",
      label: "admin-site"
    },
    {
      value: " dashicons dashicons-admin-media",
      label: "admin-media"
    },
    {
      value: " dashicons dashicons-admin-page",
      label: "admin-page"
    },
    {
      value: " dashicons dashicons-admin-comments",
      label: "admin-comments"
    },
    {
      value: " dashicons dashicons-admin-appearance",
      label: "admin-appearance"
    },
    {
      value: " dashicons dashicons-admin-plugins",
      label: "admin-plugins"
    },
    {
      value: " dashicons dashicons-admin-users",
      label: "admin-users"
    },
    {
      value: " dashicons dashicons-admin-tools",
      label: "admin-tools"
    },
    {
      value: " dashicons dashicons-admin-settings",
      label: "admin-settings"
    },
    {
      value: " dashicons dashicons-admin-network",
      label: "admin-network"
    },
    {
      value: " dashicons dashicons-admin-generic",
      label: "admin-generic"
    },
    {
      value: " dashicons dashicons-admin-home",
      label: "admin-home"
    },
    {
      value: " dashicons dashicons-admin-collapse",
      label: "admin-collapse"
    },
    {
      value: " dashicons dashicons-admin-links",
      label: "admin-links"
    },
    {
      value: " dashicons dashicons-admin-post",
      label: "admin-post"
    },
    {
      value: " dashicons dashicons-format-standard",
      label: "format-standard"
    },
    {
      value: " dashicons dashicons-format-image",
      label: "format-image"
    },
    {
      value: " dashicons dashicons-format-gallery",
      label: "format-gallery"
    },
    {
      value: " dashicons dashicons-format-audio",
      label: "format-audio"
    },
    {
      value: " dashicons dashicons-format-video",
      label: "format-video"
    },
    {
      value: " dashicons dashicons-format-links",
      label: "format-links"
    },
    {
      value: " dashicons dashicons-format-chat",
      label: "format-chat"
    },
    {
      value: " dashicons dashicons-format-status",
      label: "format-status"
    },
    {
      value: " dashicons dashicons-format-aside",
      label: "format-aside"
    },
    {
      value: " dashicons dashicons-format-quote",
      label: "format-quote"
    },
    {
      value: " dashicons dashicons-welcome-write-blog",
      label: "welcome-write-blog"
    },
    {
      value: " dashicons dashicons-welcome-edit-page",
      label: "welcome-edit-page"
    },
    {
      value: " dashicons dashicons-welcome-add-page",
      label: "welcome-add-page"
    },
    {
      value: " dashicons dashicons-welcome-view-site",
      label: "welcome-view-site"
    },
    {
      value: " dashicons dashicons-welcome-widgets-menus",
      label: "welcome-widgets-menus"
    },
    {
      value: " dashicons dashicons-welcome-comments",
      label: "welcome-comments"
    },
    {
      value: " dashicons dashicons-welcome-learn-more",
      label: "welcome-learn-more"
    },
    {
      value: " dashicons dashicons-image-crop",
      label: "image-crop"
    },
    {
      value: " dashicons dashicons-image-rotate-left",
      label: "image-rotate-left"
    },
    {
      value: " dashicons dashicons-image-rotate-right",
      label: "image-rotate-right"
    },
    {
      value: " dashicons dashicons-image-flip-vertical",
      label: "image-flip-vertical"
    },
    {
      value: " dashicons dashicons-image-flip-horizontal",
      label: "image-flip-horizontal"
    },
    {
      value: " dashicons dashicons-undo",
      label: "undo"
    },
    {
      value: " dashicons dashicons-redo",
      label: "redo"
    },
    {
      value: " dashicons dashicons-editor-bold",
      label: "editor-bold"
    },
    {
      value: " dashicons dashicons-editor-italic",
      label: "editor-italic"
    },
    {
      value: " dashicons dashicons-editor-ul",
      label: "editor-ul"
    },
    {
      value: " dashicons dashicons-editor-ol",
      label: "editor-ol"
    },
    {
      value: " dashicons dashicons-editor-quote",
      label: "editor-quote"
    },
    {
      value: " dashicons dashicons-editor-alignleft",
      label: "editor-alignleft"
    },
    {
      value: " dashicons dashicons-editor-aligncenter",
      label: "editor-aligncenter"
    },
    {
      value: " dashicons dashicons-editor-alignright",
      label: "editor-alignright"
    },
    {
      value: " dashicons dashicons-editor-insertmore",
      label: "editor-insertmore"
    },
    {
      value: " dashicons dashicons-editor-spellcheck",
      label: "editor-spellcheck"
    },
    {
      value: " dashicons dashicons-editor-distractionfree",
      label: "editor-distractionfree"
    },
    {
      value: " dashicons dashicons-editor-expand",
      label: "editor-expand"
    },
    {
      value: " dashicons dashicons-editor-contract",
      label: "editor-contract"
    },
    {
      value: " dashicons dashicons-editor-kitchensink",
      label: "editor-kitchensink"
    },
    {
      value: " dashicons dashicons-editor-underline",
      label: "editor-underline"
    },
    {
      value: " dashicons dashicons-editor-justify",
      label: "editor-justify"
    },
    {
      value: " dashicons dashicons-editor-textcolor",
      label: "editor-textcolor"
    },
    {
      value: " dashicons dashicons-editor-paste-word",
      label: "editor-paste-word"
    },
    {
      value: " dashicons dashicons-editor-paste-text",
      label: "editor-paste-text"
    },
    {
      value: " dashicons dashicons-editor-removeformatting",
      label: "editor-removeformatting"
    },
    {
      value: " dashicons dashicons-editor-video",
      label: "editor-video"
    },
    {
      value: " dashicons dashicons-editor-customchar",
      label: "editor-customchar"
    },
    {
      value: " dashicons dashicons-editor-outdent",
      label: "editor-outdent"
    },
    {
      value: " dashicons dashicons-editor-indent",
      label: "editor-indent"
    },
    {
      value: " dashicons dashicons-editor-help",
      label: "editor-help"
    },
    {
      value: " dashicons dashicons-editor-strikethrough",
      label: "editor-strikethrough"
    },
    {
      value: " dashicons dashicons-editor-unlink",
      label: "editor-unlink"
    },
    {
      value: " dashicons dashicons-editor-rtl",
      label: "editor-rtl"
    },
    {
      value: " dashicons dashicons-editor-break",
      label: "editor-break"
    },
    {
      value: " dashicons dashicons-editor-code",
      label: "editor-code"
    },
    {
      value: " dashicons dashicons-editor-paragraph",
      label: "editor-paragraph"
    },
    {
      value: " dashicons dashicons-align-left",
      label: "align-left"
    },
    {
      value: " dashicons dashicons-align-right",
      label: "align-right"
    },
    {
      value: " dashicons dashicons-align-center",
      label: "align-center"
    },
    {
      value: " dashicons dashicons-align-none",
      label: "align-none"
    },
    {
      value: " dashicons dashicons-lock",
      label: "lock"
    },
    {
      value: " dashicons dashicons-calendar",
      label: "calendar"
    },
    {
      value: " dashicons dashicons-visibility",
      label: "visibility"
    },
    {
      value: " dashicons dashicons-post-status",
      label: "post-status"
    },
    {
      value: " dashicons dashicons-edit",
      label: "edit"
    },
    {
      value: " dashicons dashicons-post-trash",
      label: "post-trash"
    },
    {
      value: " dashicons dashicons-trash",
      label: "trash"
    },
    {
      value: " dashicons dashicons-external",
      label: "external"
    },
    {
      value: " dashicons dashicons-arrow-up",
      label: "arrow-up"
    },
    {
      value: " dashicons dashicons-arrow-down",
      label: "arrow-down"
    },
    {
      value: " dashicons dashicons-arrow-left",
      label: "arrow-left"
    },
    {
      value: " dashicons dashicons-arrow-right",
      label: "arrow-right"
    },
    {
      value: " dashicons dashicons-arrow-up-alt",
      label: "arrow-up-alt"
    },
    {
      value: " dashicons dashicons-arrow-down-alt",
      label: "arrow-down-alt"
    },
    {
      value: " dashicons dashicons-arrow-left-alt",
      label: "arrow-left-alt"
    },
    {
      value: " dashicons dashicons-arrow-right-alt",
      label: "arrow-right-alt"
    },
    {
      value: " dashicons dashicons-arrow-up-alt2",
      label: "arrow-up-alt2"
    },
    {
      value: " dashicons dashicons-arrow-down-alt2",
      label: "arrow-down-alt2"
    },
    {
      value: " dashicons dashicons-arrow-left-alt2",
      label: "arrow-left-alt2"
    },
    {
      value: " dashicons dashicons-arrow-right-alt2",
      label: "arrow-right-alt2"
    },
    {
      value: " dashicons dashicons-leftright",
      label: "leftright"
    },
    {
      value: " dashicons dashicons-sort",
      label: "sort"
    },
    {
      value: " dashicons dashicons-randomize",
      label: "randomize"
    },
    {
      value: " dashicons dashicons-list-view",
      label: "list-view"
    },
    {
      value: " dashicons dashicons-exerpt-view",
      label: "exerpt-view"
    },
    {
      value: " dashicons dashicons-hammer",
      label: "hammer"
    },
    {
      value: " dashicons dashicons-art",
      label: "art"
    },
    {
      value: " dashicons dashicons-migrate",
      label: "migrate"
    },
    {
      value: " dashicons dashicons-performance",
      label: "performance"
    },
    {
      value: " dashicons dashicons-universal-access",
      label: "universal-access"
    },
    {
      value: " dashicons dashicons-universal-access-alt",
      label: "universal-access-alt"
    },
    {
      value: " dashicons dashicons-tickets",
      label: "tickets"
    },
    {
      value: " dashicons dashicons-nametag",
      label: "nametag"
    },
    {
      value: " dashicons dashicons-clipboard",
      label: "clipboard"
    },
    {
      value: " dashicons dashicons-heart",
      label: "heart"
    },
    {
      value: " dashicons dashicons-megaphone",
      label: "megaphone"
    },
    {
      value: " dashicons dashicons-schedule",
      label: "schedule"
    },
    {
      value: " dashicons dashicons-wordpress",
      label: "wordpress"
    },
    {
      value: " dashicons dashicons-wordpress-alt",
      label: "wordpress-alt"
    },
    {
      value: " dashicons dashicons-pressthis,",
      label: "pressthis,"
    },
    {
      value: " dashicons dashicons-update,",
      label: "update,"
    },
    {
      value: " dashicons dashicons-screenoptions",
      label: "screenoptions"
    },
    {
      value: " dashicons dashicons-info",
      label: "info"
    },
    {
      value: " dashicons dashicons-cart",
      label: "cart"
    },
    {
      value: " dashicons dashicons-feedback",
      label: "feedback"
    },
    {
      value: " dashicons dashicons-cloud",
      label: "cloud"
    },
    {
      value: " dashicons dashicons-translation",
      label: "translation"
    },
    {
      value: " dashicons dashicons-tag",
      label: "tag"
    },
    {
      value: " dashicons dashicons-category",
      label: "category"
    },
    {
      value: " dashicons dashicons-archive",
      label: "archive"
    },
    {
      value: " dashicons dashicons-tagcloud",
      label: "tagcloud"
    },
    {
      value: " dashicons dashicons-text",
      label: "text"
    },
    {
      value: " dashicons dashicons-media-archive",
      label: "media-archive"
    },
    {
      value: " dashicons dashicons-media-audio",
      label: "media-audio"
    },
    {
      value: " dashicons dashicons-media-code",
      label: "media-code"
    },
    {
      value: " dashicons dashicons-media-default",
      label: "media-default"
    },
    {
      value: " dashicons dashicons-media-document",
      label: "media-document"
    },
    {
      value: " dashicons dashicons-media-interactive",
      label: "media-interactive"
    },
    {
      value: " dashicons dashicons-media-spreadsheet",
      label: "media-spreadsheet"
    },
    {
      value: " dashicons dashicons-media-text",
      label: "media-text"
    },
    {
      value: " dashicons dashicons-media-video",
      label: "media-video"
    },
    {
      value: " dashicons dashicons-playlist-audio",
      label: "playlist-audio"
    },
    {
      value: " dashicons dashicons-playlist-video",
      label: "playlist-video"
    },
    {
      value: " dashicons dashicons-yes",
      label: "yes"
    },
    {
      value: " dashicons dashicons-no",
      label: "no"
    },
    {
      value: " dashicons dashicons-no-alt",
      label: "no-alt"
    },
    {
      value: " dashicons dashicons-plus",
      label: "plus"
    },
    {
      value: " dashicons dashicons-plus-alt",
      label: "plus-alt"
    },
    {
      value: " dashicons dashicons-minus",
      label: "minus"
    },
    {
      value: " dashicons dashicons-dismiss",
      label: "dismiss"
    },
    {
      value: " dashicons dashicons-marker",
      label: "marker"
    },
    {
      value: " dashicons dashicons-star-filled",
      label: "star-filled"
    },
    {
      value: " dashicons dashicons-star-half",
      label: "star-half"
    },
    {
      value: " dashicons dashicons-star-empty",
      label: "star-empty"
    },
    {
      value: " dashicons dashicons-flag",
      label: "flag"
    },
    {
      value: " dashicons dashicons-share",
      label: "share"
    },
    {
      value: " dashicons dashicons-share1",
      label: "share1"
    },
    {
      value: " dashicons dashicons-share-alt",
      label: "share-alt"
    },
    {
      value: " dashicons dashicons-share-alt2",
      label: "share-alt2"
    },
    {
      value: " dashicons dashicons-twitter",
      label: "twitter"
    },
    {
      value: " dashicons dashicons-rss",
      label: "rss"
    },
    {
      value: " dashicons dashicons-email",
      label: "email"
    },
    {
      value: " dashicons dashicons-email-alt",
      label: "email-alt"
    },
    {
      value: " dashicons dashicons-facebook",
      label: "facebook"
    },
    {
      value: " dashicons dashicons-facebook-alt",
      label: "facebook-alt"
    },
    {
      value: " dashicons dashicons-networking",
      label: "networking"
    },
    {
      value: " dashicons dashicons-googleplus",
      label: "googleplus"
    },
    {
      value: " dashicons dashicons-location",
      label: "location"
    },
    {
      value: " dashicons dashicons-location-alt",
      label: "location-alt"
    },
    {
      value: " dashicons dashicons-camera",
      label: "camera"
    },
    {
      value: " dashicons dashicons-images-alt",
      label: "images-alt"
    },
    {
      value: " dashicons dashicons-images-alt2",
      label: "images-alt2"
    },
    {
      value: " dashicons dashicons-video-alt",
      label: "video-alt"
    },
    {
      value: " dashicons dashicons-video-alt2",
      label: "video-alt2"
    },
    {
      value: " dashicons dashicons-video-alt3",
      label: "video-alt3"
    },
    {
      value: " dashicons dashicons-vault",
      label: "vault"
    },
    {
      value: " dashicons dashicons-shield",
      label: "shield"
    },
    {
      value: " dashicons dashicons-shield-alt",
      label: "shield-alt"
    },
    {
      value: " dashicons dashicons-sos",
      label: "sos"
    },
    {
      value: " dashicons dashicons-search",
      label: "search"
    },
    {
      value: " dashicons dashicons-slides",
      label: "slides"
    },
    {
      value: " dashicons dashicons-analytics",
      label: "analytics"
    },
    {
      value: " dashicons dashicons-chart-pie",
      label: "chart-pie"
    },
    {
      value: " dashicons dashicons-chart-bar",
      label: "chart-bar"
    },
    {
      value: " dashicons dashicons-chart-line",
      label: "chart-line"
    },
    {
      value: " dashicons dashicons-chart-area",
      label: "chart-area"
    },
    {
      value: " dashicons dashicons-groups",
      label: "groups"
    },
    {
      value: " dashicons dashicons-businessman",
      label: "businessman"
    },
    {
      value: " dashicons dashicons-id",
      label: "id"
    },
    {
      value: " dashicons dashicons-id-alt",
      label: "id-alt"
    },
    {
      value: " dashicons dashicons-products",
      label: "products"
    },
    {
      value: " dashicons dashicons-awards",
      label: "awards"
    },
    {
      value: " dashicons dashicons-forms",
      label: "forms"
    },
    {
      value: " dashicons dashicons-testimonial",
      label: "testimonial"
    },
    {
      value: " dashicons dashicons-portfolio",
      label: "portfolio"
    },
    {
      value: " dashicons dashicons-book",
      label: "book"
    },
    {
      value: " dashicons dashicons-book-alt",
      label: "book-alt"
    },
    {
      value: " dashicons dashicons-download",
      label: "download"
    },
    {
      value: " dashicons dashicons-upload",
      label: "upload"
    },
    {
      value: " dashicons dashicons-backup",
      label: "backup"
    },
    {
      value: " dashicons dashicons-clock",
      label: "clock"
    },
    {
      value: " dashicons dashicons-lightbulb",
      label: "lightbulb"
    },
    {
      value: " dashicons dashicons-microphone",
      label: "microphone"
    },
    {
      value: " dashicons dashicons-desktop",
      label: "desktop"
    },
    {
      value: " dashicons dashicons-tablet",
      label: "tablet"
    },
    {
      value: " dashicons dashicons-smartphone",
      label: "smartphone"
    },
    {
      value: " dashicons dashicons-smiley",
      label: "smiley"
    }
  ];

  //Font Awesome Icons
  const ICONS = [
    {
      value: "",
      label: "none"
    },
    {
      value: "fa fa-500px",
      label: "500px"
    },
    {
      value: "fa fa-address-book",
      label: "address-book"
    },
    {
      value: "fa fa-address-book-o",
      label: "address-book-o"
    },
    {
      value: "fa fa-address-card",
      label: "address-card"
    },
    {
      value: "fa fa-address-card-o",
      label: "address-card-o"
    },
    {
      value: "fa fa-adjust",
      label: "adjust"
    },
    {
      value: "fa fa-adn",
      label: "adn"
    },
    {
      value: "fa fa-align-center",
      label: "align-center"
    },
    {
      value: "fa fa-align-justify",
      label: "align-justify"
    },
    {
      value: "fa fa-align-left",
      label: "align-left"
    },
    {
      value: "fa fa-align-right",
      label: "align-right"
    },
    {
      value: "fa fa-amazon",
      label: "amazon"
    },
    {
      value: "fa fa-ambulance",
      label: "ambulance"
    },
    {
      value: "fa fa-american-sign-language-interpreting",
      label: "american-sign-language-interpreting"
    },
    {
      value: "fa fa-anchor",
      label: "anchor"
    },
    {
      value: "fa fa-android",
      label: "android"
    },
    {
      value: "fa fa-angellist",
      label: "angellist"
    },
    {
      value: "fa fa-angle-double-down",
      label: "angle-double-down"
    },
    {
      value: "fa fa-angle-double-left",
      label: "angle-double-left"
    },
    {
      value: "fa fa-angle-double-right",
      label: "angle-double-right"
    },
    {
      value: "fa fa-angle-double-up",
      label: "angle-double-up"
    },
    {
      value: "fa fa-angle-down",
      label: "angle-down"
    },
    {
      value: "fa fa-angle-left",
      label: "angle-left"
    },
    {
      value: "fa fa-angle-right",
      label: "angle-right"
    },
    {
      value: "fa fa-angle-up",
      label: "angle-up"
    },
    {
      value: "fa fa-apple",
      label: "apple"
    },
    {
      value: "fa fa-archive",
      label: "archive"
    },
    {
      value: "fa fa-area-chart",
      label: "area-chart"
    },
    {
      value: "fa fa-arrow-circle-down",
      label: "arrow-circle-down"
    },
    {
      value: "fa fa-arrow-circle-left",
      label: "arrow-circle-left"
    },
    {
      value: "fa fa-arrow-circle-o-down",
      label: "arrow-circle-o-down"
    },
    {
      value: "fa fa-arrow-circle-o-left",
      label: "arrow-circle-o-left"
    },
    {
      value: "fa fa-arrow-circle-o-right",
      label: "arrow-circle-o-right"
    },
    {
      value: "fa fa-arrow-circle-o-up",
      label: "arrow-circle-o-up"
    },
    {
      value: "fa fa-arrow-circle-right",
      label: "arrow-circle-right"
    },
    {
      value: "fa fa-arrow-circle-up",
      label: "arrow-circle-up"
    },
    {
      value: "fa fa-arrow-down",
      label: "arrow-down"
    },
    {
      value: "fa fa-arrow-left",
      label: "arrow-left"
    },
    {
      value: "fa fa-arrow-right",
      label: "arrow-right"
    },
    {
      value: "fa fa-arrow-up",
      label: "arrow-up"
    },
    {
      value: "fa fa-arrows",
      label: "arrows"
    },
    {
      value: "fa fa-arrows-alt",
      label: "arrows-alt"
    },
    {
      value: "fa fa-arrows-h",
      label: "arrows-h"
    },
    {
      value: "fa fa-arrows-v",
      label: "arrows-v"
    },
    {
      value: "fa fa-asl-interpreting",
      label: "asl-interpreting"
    },
    {
      value: "fa fa-assistive-listening-systems",
      label: "assistive-listening-systems"
    },
    {
      value: "fa fa-asterisk",
      label: "asterisk"
    },
    {
      value: "fa fa-at",
      label: "at"
    },
    {
      value: "fa fa-audio-description",
      label: "audio-description"
    },
    {
      value: "fa fa-automobile",
      label: "automobile"
    },
    {
      value: "fa fa-backward",
      label: "backward"
    },
    {
      value: "fa fa-balance-scale",
      label: "balance-scale"
    },
    {
      value: "fa fa-ban",
      label: "ban"
    },
    {
      value: "fa fa-bandcamp",
      label: "bandcamp"
    },
    {
      value: "fa fa-bank",
      label: "bank"
    },
    {
      value: "fa fa-bar-chart",
      label: "bar-chart"
    },
    {
      value: "fa fa-bar-chart-o",
      label: "bar-chart-o"
    },
    {
      value: "fa fa-barcode",
      label: "barcode"
    },
    {
      value: "fa fa-bars",
      label: "bars"
    },
    {
      value: "fa fa-bath",
      label: "bath"
    },
    {
      value: "fa fa-bathtub",
      label: "bathtub"
    },
    {
      value: "fa fa-battery",
      label: "battery"
    },
    {
      value: "fa fa-battery-0",
      label: "battery-0"
    },
    {
      value: "fa fa-battery-1",
      label: "battery-1"
    },
    {
      value: "fa fa-battery-2",
      label: "battery-2"
    },
    {
      value: "fa fa-battery-3",
      label: "battery-3"
    },
    {
      value: "fa fa-battery-4",
      label: "battery-4"
    },
    {
      value: "fa fa-battery-empty",
      label: "battery-empty"
    },
    {
      value: "fa fa-battery-full",
      label: "battery-full"
    },
    {
      value: "fa fa-battery-half",
      label: "battery-half"
    },
    {
      value: "fa fa-battery-quarter",
      label: "battery-quarter"
    },
    {
      value: "fa fa-battery-three-quarters",
      label: "battery-three-quarters"
    },
    {
      value: "fa fa-bed",
      label: "bed"
    },
    {
      value: "fa fa-beer",
      label: "beer"
    },
    {
      value: "fa fa-behance",
      label: "behance"
    },
    {
      value: "fa fa-behance-square",
      label: "behance-square"
    },
    {
      value: "fa fa-bell",
      label: "bell"
    },
    {
      value: "fa fa-bell-o",
      label: "bell-o"
    },
    {
      value: "fa fa-bell-slash",
      label: "bell-slash"
    },
    {
      value: "fa fa-bell-slash-o",
      label: "bell-slash-o"
    },
    {
      value: "fa fa-bicycle",
      label: "bicycle"
    },
    {
      value: "fa fa-binoculars",
      label: "binoculars"
    },
    {
      value: "fa fa-birthday-cake",
      label: "birthday-cake"
    },
    {
      value: "fa fa-bitbucket",
      label: "bitbucket"
    },
    {
      value: "fa fa-bitbucket-square",
      label: "bitbucket-square"
    },
    {
      value: "fa fa-bitcoin",
      label: "bitcoin"
    },
    {
      value: "fa fa-black-tie",
      label: "black-tie"
    },
    {
      value: "fa fa-blind",
      label: "blind"
    },
    {
      value: "fa fa-bluetooth",
      label: "bluetooth"
    },
    {
      value: "fa fa-bluetooth-b",
      label: "bluetooth-b"
    },
    {
      value: "fa fa-bold",
      label: "bold"
    },
    {
      value: "fa fa-bolt",
      label: "bolt"
    },
    {
      value: "fa fa-bomb",
      label: "bomb"
    },
    {
      value: "fa fa-book",
      label: "book"
    },
    {
      value: "fa fa-bookmark",
      label: "bookmark"
    },
    {
      value: "fa fa-bookmark-o",
      label: "bookmark-o"
    },
    {
      value: "fa fa-braille",
      label: "braille"
    },
    {
      value: "fa fa-briefcase",
      label: "briefcase"
    },
    {
      value: "fa fa-btc",
      label: "btc"
    },
    {
      value: "fa fa-bug",
      label: "bug"
    },
    {
      value: "fa fa-building",
      label: "building"
    },
    {
      value: "fa fa-building-o",
      label: "building-o"
    },
    {
      value: "fa fa-bullhorn",
      label: "bullhorn"
    },
    {
      value: "fa fa-bullseye",
      label: "bullseye"
    },
    {
      value: "fa fa-bus",
      label: "bus"
    },
    {
      value: "fa fa-buysellads",
      label: "buysellads"
    },
    {
      value: "fa fa-cab",
      label: "cab"
    },
    {
      value: "fa fa-calculator",
      label: "calculator"
    },
    {
      value: "fa fa-calendar",
      label: "calendar"
    },
    {
      value: "fa fa-calendar-check-o",
      label: "calendar-check-o"
    },
    {
      value: "fa fa-calendar-minus-o",
      label: "calendar-minus-o"
    },
    {
      value: "fa fa-calendar-o",
      label: "calendar-o"
    },
    {
      value: "fa fa-calendar-plus-o",
      label: "calendar-plus-o"
    },
    {
      value: "fa fa-calendar-times-o",
      label: "calendar-times-o"
    },
    {
      value: "fa fa-camera",
      label: "camera"
    },
    {
      value: "fa fa-camera-retro",
      label: "camera-retro"
    },
    {
      value: "fa fa-car",
      label: "car"
    },
    {
      value: "fa fa-caret-down",
      label: "caret-down"
    },
    {
      value: "fa fa-caret-left",
      label: "caret-left"
    },
    {
      value: "fa fa-caret-right",
      label: "caret-right"
    },
    {
      value: "fa fa-caret-square-o-down",
      label: "caret-square-o-down"
    },
    {
      value: "fa fa-caret-square-o-left",
      label: "caret-square-o-left"
    },
    {
      value: "fa fa-caret-square-o-right",
      label: "caret-square-o-right"
    },
    {
      value: "fa fa-caret-square-o-up",
      label: "caret-square-o-up"
    },
    {
      value: "fa fa-caret-up",
      label: "caret-up"
    },
    {
      value: "fa fa-cart-arrow-down",
      label: "cart-arrow-down"
    },
    {
      value: "fa fa-cart-plus",
      label: "cart-plus"
    },
    {
      value: "fa fa-cc",
      label: "cc"
    },
    {
      value: "fa fa-cc-amex",
      label: "cc-amex"
    },
    {
      value: "fa fa-cc-diners-club",
      label: "cc-diners-club"
    },
    {
      value: "fa fa-cc-discover",
      label: "cc-discover"
    },
    {
      value: "fa fa-cc-jcb",
      label: "cc-jcb"
    },
    {
      value: "fa fa-cc-mastercard",
      label: "cc-mastercard"
    },
    {
      value: "fa fa-cc-paypal",
      label: "cc-paypal"
    },
    {
      value: "fa fa-cc-stripe",
      label: "cc-stripe"
    },
    {
      value: "fa fa-cc-visa",
      label: "cc-visa"
    },
    {
      value: "fa fa-certificate",
      label: "certificate"
    },
    {
      value: "fa fa-chain",
      label: "chain"
    },
    {
      value: "fa fa-chain-broken",
      label: "chain-broken"
    },
    {
      value: "fa fa-check",
      label: "check"
    },
    {
      value: "fa fa-check-circle",
      label: "check-circle"
    },
    {
      value: "fa fa-check-circle-o",
      label: "check-circle-o"
    },
    {
      value: "fa fa-check-square",
      label: "check-square"
    },
    {
      value: "fa fa-check-square-o",
      label: "check-square-o"
    },
    {
      value: "fa fa-chevron-circle-down",
      label: "chevron-circle-down"
    },
    {
      value: "fa fa-chevron-circle-left",
      label: "chevron-circle-left"
    },
    {
      value: "fa fa-chevron-circle-right",
      label: "chevron-circle-right"
    },
    {
      value: "fa fa-chevron-circle-up",
      label: "chevron-circle-up"
    },
    {
      value: "fa fa-chevron-down",
      label: "chevron-down"
    },
    {
      value: "fa fa-chevron-left",
      label: "chevron-left"
    },
    {
      value: "fa fa-chevron-right",
      label: "chevron-right"
    },
    {
      value: "fa fa-chevron-up",
      label: "chevron-up"
    },
    {
      value: "fa fa-child",
      label: "child"
    },
    {
      value: "fa fa-chrome",
      label: "chrome"
    },
    {
      value: "fa fa-circle",
      label: "circle"
    },
    {
      value: "fa fa-circle-o",
      label: "circle-o"
    },
    {
      value: "fa fa-circle-o-notch",
      label: "circle-o-notch"
    },
    {
      value: "fa fa-circle-thin",
      label: "circle-thin"
    },
    {
      value: "fa fa-clipboard",
      label: "clipboard"
    },
    {
      value: "fa fa-clock-o",
      label: "clock-o"
    },
    {
      value: "fa fa-clone",
      label: "clone"
    },
    {
      value: "fa fa-close",
      label: "close"
    },
    {
      value: "fa fa-cloud",
      label: "cloud"
    },
    {
      value: "fa fa-cloud-download",
      label: "cloud-download"
    },
    {
      value: "fa fa-cloud-upload",
      label: "cloud-upload"
    },
    {
      value: "fa fa-cny",
      label: "cny"
    },
    {
      value: "fa fa-code",
      label: "code"
    },
    {
      value: "fa fa-code-fork",
      label: "code-fork"
    },
    {
      value: "fa fa-codepen",
      label: "codepen"
    },
    {
      value: "fa fa-codiepie",
      label: "codiepie"
    },
    {
      value: "fa fa-coffee",
      label: "coffee"
    },
    {
      value: "fa fa-cog",
      label: "cog"
    },
    {
      value: "fa fa-cogs",
      label: "cogs"
    },
    {
      value: "fa fa-columns",
      label: "columns"
    },
    {
      value: "fa fa-comment",
      label: "comment"
    },
    {
      value: "fa fa-comment-o",
      label: "comment-o"
    },
    {
      value: "fa fa-commenting",
      label: "commenting"
    },
    {
      value: "fa fa-commenting-o",
      label: "commenting-o"
    },
    {
      value: "fa fa-comments",
      label: "comments"
    },
    {
      value: "fa fa-comments-o",
      label: "comments-o"
    },
    {
      value: "fa fa-compass",
      label: "compass"
    },
    {
      value: "fa fa-compress",
      label: "compress"
    },
    {
      value: "fa fa-connectdevelop",
      label: "connectdevelop"
    },
    {
      value: "fa fa-contao",
      label: "contao"
    },
    {
      value: "fa fa-copy",
      label: "copy"
    },
    {
      value: "fa fa-copyright",
      label: "copyright"
    },
    {
      value: "fa fa-creative-commons",
      label: "creative-commons"
    },
    {
      value: "fa fa-credit-card",
      label: "credit-card"
    },
    {
      value: "fa fa-credit-card-alt",
      label: "credit-card-alt"
    },
    {
      value: "fa fa-crop",
      label: "crop"
    },
    {
      value: "fa fa-crosshairs",
      label: "crosshairs"
    },
    {
      value: "fa fa-css3",
      label: "css3"
    },
    {
      value: "fa fa-cube",
      label: "cube"
    },
    {
      value: "fa fa-cubes",
      label: "cubes"
    },
    {
      value: "fa fa-cut",
      label: "cut"
    },
    {
      value: "fa fa-cutlery",
      label: "cutlery"
    },
    {
      value: "fa fa-dashboard",
      label: "dashboard"
    },
    {
      value: "fa fa-dashcube",
      label: "dashcube"
    },
    {
      value: "fa fa-database",
      label: "database"
    },
    {
      value: "fa fa-deaf",
      label: "deaf"
    },
    {
      value: "fa fa-deafness",
      label: "deafness"
    },
    {
      value: "fa fa-dedent",
      label: "dedent"
    },
    {
      value: "fa fa-delicious",
      label: "delicious"
    },
    {
      value: "fa fa-desktop",
      label: "desktop"
    },
    {
      value: "fa fa-deviantart",
      label: "deviantart"
    },
    {
      value: "fa fa-diamond",
      label: "diamond"
    },
    {
      value: "fa fa-digg",
      label: "digg"
    },
    {
      value: "fa fa-dollar",
      label: "dollar"
    },
    {
      value: "fa fa-dot-circle-o",
      label: "dot-circle-o"
    },
    {
      value: "fa fa-download",
      label: "download"
    },
    {
      value: "fa fa-dribbble",
      label: "dribbble"
    },
    {
      value: "fa fa-drivers-license",
      label: "drivers-license"
    },
    {
      value: "fa fa-drivers-license-o",
      label: "drivers-license-o"
    },
    {
      value: "fa fa-dropbox",
      label: "dropbox"
    },
    {
      value: "fa fa-drupal",
      label: "drupal"
    },
    {
      value: "fa fa-edge",
      label: "edge"
    },
    {
      value: "fa fa-edit",
      label: "edit"
    },
    {
      value: "fa fa-eercast",
      label: "eercast"
    },
    {
      value: "fa fa-eject",
      label: "eject"
    },
    {
      value: "fa fa-ellipsis-h",
      label: "ellipsis-h"
    },
    {
      value: "fa fa-ellipsis-v",
      label: "ellipsis-v"
    },
    {
      value: "fa fa-empire",
      label: "empire"
    },
    {
      value: "fa fa-envelope",
      label: "envelope"
    },
    {
      value: "fa fa-envelope-o",
      label: "envelope-o"
    },
    {
      value: "fa fa-envelope-open",
      label: "envelope-open"
    },
    {
      value: "fa fa-envelope-open-o",
      label: "envelope-open-o"
    },
    {
      value: "fa fa-envelope-square",
      label: "envelope-square"
    },
    {
      value: "fa fa-envira",
      label: "envira"
    },
    {
      value: "fa fa-eraser",
      label: "eraser"
    },
    {
      value: "fa fa-etsy",
      label: "etsy"
    },
    {
      value: "fa fa-eur",
      label: "eur"
    },
    {
      value: "fa fa-euro",
      label: "euro"
    },
    {
      value: "fa fa-exchange",
      label: "exchange"
    },
    {
      value: "fa fa-exclamation",
      label: "exclamation"
    },
    {
      value: "fa fa-exclamation-circle",
      label: "exclamation-circle"
    },
    {
      value: "fa fa-exclamation-triangle",
      label: "exclamation-triangle"
    },
    {
      value: "fa fa-expand",
      label: "expand"
    },
    {
      value: "fa fa-expeditedssl",
      label: "expeditedssl"
    },
    {
      value: "fa fa-external-link",
      label: "external-link"
    },
    {
      value: "fa fa-external-link-square",
      label: "external-link-square"
    },
    {
      value: "fa fa-eye",
      label: "eye"
    },
    {
      value: "fa fa-eye-slash",
      label: "eye-slash"
    },
    {
      value: "fa fa-eyedropper",
      label: "eyedropper"
    },
    {
      value: "fa fa-fa",
      label: "fa"
    },
    {
      value: "fa fa-facebook",
      label: "facebook"
    },
    {
      value: "fa fa-facebook-f",
      label: "facebook-f"
    },
    {
      value: "fa fa-facebook-official",
      label: "facebook-official"
    },
    {
      value: "fa fa-facebook-square",
      label: "facebook-square"
    },
    {
      value: "fa fa-fast-backward",
      label: "fast-backward"
    },
    {
      value: "fa fa-fast-forward",
      label: "fast-forward"
    },
    {
      value: "fa fa-fax",
      label: "fax"
    },
    {
      value: "fa fa-feed",
      label: "feed"
    },
    {
      value: "fa fa-female",
      label: "female"
    },
    {
      value: "fa fa-fighter-jet",
      label: "fighter-jet"
    },
    {
      value: "fa fa-file",
      label: "file"
    },
    {
      value: "fa fa-file-archive-o",
      label: "file-archive-o"
    },
    {
      value: "fa fa-file-audio-o",
      label: "file-audio-o"
    },
    {
      value: "fa fa-file-code-o",
      label: "file-code-o"
    },
    {
      value: "fa fa-file-excel-o",
      label: "file-excel-o"
    },
    {
      value: "fa fa-file-image-o",
      label: "file-image-o"
    },
    {
      value: "fa fa-file-movie-o",
      label: "file-movie-o"
    },
    {
      value: "fa fa-file-o",
      label: "file-o"
    },
    {
      value: "fa fa-file-pdf-o",
      label: "file-pdf-o"
    },
    {
      value: "fa fa-file-photo-o",
      label: "file-photo-o"
    },
    {
      value: "fa fa-file-picture-o",
      label: "file-picture-o"
    },
    {
      value: "fa fa-file-powerpoint-o",
      label: "file-powerpoint-o"
    },
    {
      value: "fa fa-file-sound-o",
      label: "file-sound-o"
    },
    {
      value: "fa fa-file-text",
      label: "file-text"
    },
    {
      value: "fa fa-file-text-o",
      label: "file-text-o"
    },
    {
      value: "fa fa-file-video-o",
      label: "file-video-o"
    },
    {
      value: "fa fa-file-word-o",
      label: "file-word-o"
    },
    {
      value: "fa fa-file-zip-o",
      label: "file-zip-o"
    },
    {
      value: "fa fa-files-o",
      label: "files-o"
    },
    {
      value: "fa fa-film",
      label: "film"
    },
    {
      value: "fa fa-filter",
      label: "filter"
    },
    {
      value: "fa fa-fire",
      label: "fire"
    },
    {
      value: "fa fa-fire-extinguisher",
      label: "fire-extinguisher"
    },
    {
      value: "fa fa-firefox",
      label: "firefox"
    },
    {
      value: "fa fa-first-order",
      label: "first-order"
    },
    {
      value: "fa fa-flag",
      label: "flag"
    },
    {
      value: "fa fa-flag-checkered",
      label: "flag-checkered"
    },
    {
      value: "fa fa-flag-o",
      label: "flag-o"
    },
    {
      value: "fa fa-flash",
      label: "flash"
    },
    {
      value: "fa fa-flask",
      label: "flask"
    },
    {
      value: "fa fa-flickr",
      label: "flickr"
    },
    {
      value: "fa fa-floppy-o",
      label: "floppy-o"
    },
    {
      value: "fa fa-folder",
      label: "folder"
    },
    {
      value: "fa fa-folder-o",
      label: "folder-o"
    },
    {
      value: "fa fa-folder-open",
      label: "folder-open"
    },
    {
      value: "fa fa-folder-open-o",
      label: "folder-open-o"
    },
    {
      value: "fa fa-font",
      label: "font"
    },
    {
      value: "fa fa-font-awesome",
      label: "font-awesome"
    },
    {
      value: "fa fa-fonticons",
      label: "fonticons"
    },
    {
      value: "fa fa-fort-awesome",
      label: "fort-awesome"
    },
    {
      value: "fa fa-forumbee",
      label: "forumbee"
    },
    {
      value: "fa fa-forward",
      label: "forward"
    },
    {
      value: "fa fa-foursquare",
      label: "foursquare"
    },
    {
      value: "fa fa-free-code-camp",
      label: "free-code-camp"
    },
    {
      value: "fa fa-frown-o",
      label: "frown-o"
    },
    {
      value: "fa fa-futbol-o",
      label: "futbol-o"
    },
    {
      value: "fa fa-gamepad",
      label: "gamepad"
    },
    {
      value: "fa fa-gavel",
      label: "gavel"
    },
    {
      value: "fa fa-gbp",
      label: "gbp"
    },
    {
      value: "fa fa-ge",
      label: "ge"
    },
    {
      value: "fa fa-gear",
      label: "gear"
    },
    {
      value: "fa fa-gears",
      label: "gears"
    },
    {
      value: "fa fa-genderless",
      label: "genderless"
    },
    {
      value: "fa fa-get-pocket",
      label: "get-pocket"
    },
    {
      value: "fa fa-gg",
      label: "gg"
    },
    {
      value: "fa fa-gg-circle",
      label: "gg-circle"
    },
    {
      value: "fa fa-gift",
      label: "gift"
    },
    {
      value: "fa fa-git",
      label: "git"
    },
    {
      value: "fa fa-git-square",
      label: "git-square"
    },
    {
      value: "fa fa-github",
      label: "github"
    },
    {
      value: "fa fa-github-alt",
      label: "github-alt"
    },
    {
      value: "fa fa-github-square",
      label: "github-square"
    },
    {
      value: "fa fa-gitlab",
      label: "gitlab"
    },
    {
      value: "fa fa-gittip",
      label: "gittip"
    },
    {
      value: "fa fa-glass",
      label: "glass"
    },
    {
      value: "fa fa-glide",
      label: "glide"
    },
    {
      value: "fa fa-glide-g",
      label: "glide-g"
    },
    {
      value: "fa fa-globe",
      label: "globe"
    },
    {
      value: "fa fa-google",
      label: "google"
    },
    {
      value: "fa fa-google-plus",
      label: "google-plus"
    },
    {
      value: "fa fa-google-plus-circle",
      label: "google-plus-circle"
    },
    {
      value: "fa fa-google-plus-official",
      label: "google-plus-official"
    },
    {
      value: "fa fa-google-plus-square",
      label: "google-plus-square"
    },
    {
      value: "fa fa-google-wallet",
      label: "google-wallet"
    },
    {
      value: "fa fa-graduation-cap",
      label: "graduation-cap"
    },
    {
      value: "fa fa-gratipay",
      label: "gratipay"
    },
    {
      value: "fa fa-grav",
      label: "grav"
    },
    {
      value: "fa fa-group",
      label: "group"
    },
    {
      value: "fa fa-h-square",
      label: "h-square"
    },
    {
      value: "fa fa-hacker-news",
      label: "hacker-news"
    },
    {
      value: "fa fa-hand-grab-o",
      label: "hand-grab-o"
    },
    {
      value: "fa fa-hand-lizard-o",
      label: "hand-lizard-o"
    },
    {
      value: "fa fa-hand-o-down",
      label: "hand-o-down"
    },
    {
      value: "fa fa-hand-o-left",
      label: "hand-o-left"
    },
    {
      value: "fa fa-hand-o-right",
      label: "hand-o-right"
    },
    {
      value: "fa fa-hand-o-up",
      label: "hand-o-up"
    },
    {
      value: "fa fa-hand-paper-o",
      label: "hand-paper-o"
    },
    {
      value: "fa fa-hand-peace-o",
      label: "hand-peace-o"
    },
    {
      value: "fa fa-hand-pointer-o",
      label: "hand-pointer-o"
    },
    {
      value: "fa fa-hand-rock-o",
      label: "hand-rock-o"
    },
    {
      value: "fa fa-hand-scissors-o",
      label: "hand-scissors-o"
    },
    {
      value: "fa fa-hand-spock-o",
      label: "hand-spock-o"
    },
    {
      value: "fa fa-hand-stop-o",
      label: "hand-stop-o"
    },
    {
      value: "fa fa-handshake-o",
      label: "handshake-o"
    },
    {
      value: "fa fa-hard-of-hearing",
      label: "hard-of-hearing"
    },
    {
      value: "fa fa-hashtag",
      label: "hashtag"
    },
    {
      value: "fa fa-hdd-o",
      label: "hdd-o"
    },
    {
      value: "fa fa-header",
      label: "header"
    },
    {
      value: "fa fa-headphones",
      label: "headphones"
    },
    {
      value: "fa fa-heart",
      label: "heart"
    },
    {
      value: "fa fa-heart-o",
      label: "heart-o"
    },
    {
      value: "fa fa-heartbeat",
      label: "heartbeat"
    },
    {
      value: "fa fa-history",
      label: "history"
    },
    {
      value: "fa fa-home",
      label: "home"
    },
    {
      value: "fa fa-hospital-o",
      label: "hospital-o"
    },
    {
      value: "fa fa-hotel",
      label: "hotel"
    },
    {
      value: "fa fa-hourglass",
      label: "hourglass"
    },
    {
      value: "fa fa-hourglass-1",
      label: "hourglass-1"
    },
    {
      value: "fa fa-hourglass-2",
      label: "hourglass-2"
    },
    {
      value: "fa fa-hourglass-3",
      label: "hourglass-3"
    },
    {
      value: "fa fa-hourglass-end",
      label: "hourglass-end"
    },
    {
      value: "fa fa-hourglass-half",
      label: "hourglass-half"
    },
    {
      value: "fa fa-hourglass-o",
      label: "hourglass-o"
    },
    {
      value: "fa fa-hourglass-start",
      label: "hourglass-start"
    },
    {
      value: "fa fa-houzz",
      label: "houzz"
    },
    {
      value: "fa fa-html5",
      label: "html5"
    },
    {
      value: "fa fa-i-cursor",
      label: "i-cursor"
    },
    {
      value: "fa fa-id-badge",
      label: "id-badge"
    },
    {
      value: "fa fa-id-card",
      label: "id-card"
    },
    {
      value: "fa fa-id-card-o",
      label: "id-card-o"
    },
    {
      value: "fa fa-ils",
      label: "ils"
    },
    {
      value: "fa fa-image",
      label: "image"
    },
    {
      value: "fa fa-imdb",
      label: "imdb"
    },
    {
      value: "fa fa-inbox",
      label: "inbox"
    },
    {
      value: "fa fa-indent",
      label: "indent"
    },
    {
      value: "fa fa-industry",
      label: "industry"
    },
    {
      value: "fa fa-info",
      label: "info"
    },
    {
      value: "fa fa-info-circle",
      label: "info-circle"
    },
    {
      value: "fa fa-inr",
      label: "inr"
    },
    {
      value: "fa fa-instagram",
      label: "instagram"
    },
    {
      value: "fa fa-institution",
      label: "institution"
    },
    {
      value: "fa fa-internet-explorer",
      label: "internet-explorer"
    },
    {
      value: "fa fa-intersex",
      label: "intersex"
    },
    {
      value: "fa fa-ioxhost",
      label: "ioxhost"
    },
    {
      value: "fa fa-italic",
      label: "italic"
    },
    {
      value: "fa fa-joomla",
      label: "joomla"
    },
    {
      value: "fa fa-jpy",
      label: "jpy"
    },
    {
      value: "fa fa-jsfiddle",
      label: "jsfiddle"
    },
    {
      value: "fa fa-key",
      label: "key"
    },
    {
      value: "fa fa-keyboard-o",
      label: "keyboard-o"
    },
    {
      value: "fa fa-krw",
      label: "krw"
    },
    {
      value: "fa fa-language",
      label: "language"
    },
    {
      value: "fa fa-laptop",
      label: "laptop"
    },
    {
      value: "fa fa-lastfm",
      label: "lastfm"
    },
    {
      value: "fa fa-lastfm-square",
      label: "lastfm-square"
    },
    {
      value: "fa fa-leaf",
      label: "leaf"
    },
    {
      value: "fa fa-leanpub",
      label: "leanpub"
    },
    {
      value: "fa fa-legal",
      label: "legal"
    },
    {
      value: "fa fa-lemon-o",
      label: "lemon-o"
    },
    {
      value: "fa fa-level-down",
      label: "level-down"
    },
    {
      value: "fa fa-level-up",
      label: "level-up"
    },
    {
      value: "fa fa-life-bouy",
      label: "life-bouy"
    },
    {
      value: "fa fa-life-buoy",
      label: "life-buoy"
    },
    {
      value: "fa fa-life-ring",
      label: "life-ring"
    },
    {
      value: "fa fa-life-saver",
      label: "life-saver"
    },
    {
      value: "fa fa-lightbulb-o",
      label: "lightbulb-o"
    },
    {
      value: "fa fa-line-chart",
      label: "line-chart"
    },
    {
      value: "fa fa-link",
      label: "link"
    },
    {
      value: "fa fa-linkedin",
      label: "linkedin"
    },
    {
      value: "fa fa-linkedin-square",
      label: "linkedin-square"
    },
    {
      value: "fa fa-linode",
      label: "linode"
    },
    {
      value: "fa fa-linux",
      label: "linux"
    },
    {
      value: "fa fa-list",
      label: "list"
    },
    {
      value: "fa fa-list-alt",
      label: "list-alt"
    },
    {
      value: "fa fa-list-ol",
      label: "list-ol"
    },
    {
      value: "fa fa-list-ul",
      label: "list-ul"
    },
    {
      value: "fa fa-location-arrow",
      label: "location-arrow"
    },
    {
      value: "fa fa-lock",
      label: "lock"
    },
    {
      value: "fa fa-long-arrow-down",
      label: "long-arrow-down"
    },
    {
      value: "fa fa-long-arrow-left",
      label: "long-arrow-left"
    },
    {
      value: "fa fa-long-arrow-right",
      label: "long-arrow-right"
    },
    {
      value: "fa fa-long-arrow-up",
      label: "long-arrow-up"
    },
    {
      value: "fa fa-low-vision",
      label: "low-vision"
    },
    {
      value: "fa fa-magic",
      label: "magic"
    },
    {
      value: "fa fa-magnet",
      label: "magnet"
    },
    {
      value: "fa fa-mail-forward",
      label: "mail-forward"
    },
    {
      value: "fa fa-mail-reply",
      label: "mail-reply"
    },
    {
      value: "fa fa-mail-reply-all",
      label: "mail-reply-all"
    },
    {
      value: "fa fa-male",
      label: "male"
    },
    {
      value: "fa fa-map",
      label: "map"
    },
    {
      value: "fa fa-map-marker",
      label: "map-marker"
    },
    {
      value: "fa fa-map-o",
      label: "map-o"
    },
    {
      value: "fa fa-map-pin",
      label: "map-pin"
    },
    {
      value: "fa fa-map-signs",
      label: "map-signs"
    },
    {
      value: "fa fa-mars",
      label: "mars"
    },
    {
      value: "fa fa-mars-double",
      label: "mars-double"
    },
    {
      value: "fa fa-mars-stroke",
      label: "mars-stroke"
    },
    {
      value: "fa fa-mars-stroke-h",
      label: "mars-stroke-h"
    },
    {
      value: "fa fa-mars-stroke-v",
      label: "mars-stroke-v"
    },
    {
      value: "fa fa-maxcdn",
      label: "maxcdn"
    },
    {
      value: "fa fa-meanpath",
      label: "meanpath"
    },
    {
      value: "fa fa-medium",
      label: "medium"
    },
    {
      value: "fa fa-medkit",
      label: "medkit"
    },
    {
      value: "fa fa-meetup",
      label: "meetup"
    },
    {
      value: "fa fa-meh-o",
      label: "meh-o"
    },
    {
      value: "fa fa-mercury",
      label: "mercury"
    },
    {
      value: "fa fa-microchip",
      label: "microchip"
    },
    {
      value: "fa fa-microphone",
      label: "microphone"
    },
    {
      value: "fa fa-microphone-slash",
      label: "microphone-slash"
    },
    {
      value: "fa fa-minus",
      label: "minus"
    },
    {
      value: "fa fa-minus-circle",
      label: "minus-circle"
    },
    {
      value: "fa fa-minus-square",
      label: "minus-square"
    },
    {
      value: "fa fa-minus-square-o",
      label: "minus-square-o"
    },
    {
      value: "fa fa-mixcloud",
      label: "mixcloud"
    },
    {
      value: "fa fa-mobile",
      label: "mobile"
    },
    {
      value: "fa fa-mobile-phone",
      label: "mobile-phone"
    },
    {
      value: "fa fa-modx",
      label: "modx"
    },
    {
      value: "fa fa-money",
      label: "money"
    },
    {
      value: "fa fa-moon-o",
      label: "moon-o"
    },
    {
      value: "fa fa-mortar-board",
      label: "mortar-board"
    },
    {
      value: "fa fa-motorcycle",
      label: "motorcycle"
    },
    {
      value: "fa fa-mouse-pointer",
      label: "mouse-pointer"
    },
    {
      value: "fa fa-music",
      label: "music"
    },
    {
      value: "fa fa-navicon",
      label: "navicon"
    },
    {
      value: "fa fa-neuter",
      label: "neuter"
    },
    {
      value: "fa fa-newspaper-o",
      label: "newspaper-o"
    },
    {
      value: "fa fa-object-group",
      label: "object-group"
    },
    {
      value: "fa fa-object-ungroup",
      label: "object-ungroup"
    },
    {
      value: "fa fa-odnoklassniki",
      label: "odnoklassniki"
    },
    {
      value: "fa fa-odnoklassniki-square",
      label: "odnoklassniki-square"
    },
    {
      value: "fa fa-opencart",
      label: "opencart"
    },
    {
      value: "fa fa-openid",
      label: "openid"
    },
    {
      value: "fa fa-opera",
      label: "opera"
    },
    {
      value: "fa fa-optin-monster",
      label: "optin-monster"
    },
    {
      value: "fa fa-outdent",
      label: "outdent"
    },
    {
      value: "fa fa-pagelines",
      label: "pagelines"
    },
    {
      value: "fa fa-paint-brush",
      label: "paint-brush"
    },
    {
      value: "fa fa-paper-plane",
      label: "paper-plane"
    },
    {
      value: "fa fa-paper-plane-o",
      label: "paper-plane-o"
    },
    {
      value: "fa fa-paperclip",
      label: "paperclip"
    },
    {
      value: "fa fa-paragraph",
      label: "paragraph"
    },
    {
      value: "fa fa-paste",
      label: "paste"
    },
    {
      value: "fa fa-pause",
      label: "pause"
    },
    {
      value: "fa fa-pause-circle",
      label: "pause-circle"
    },
    {
      value: "fa fa-pause-circle-o",
      label: "pause-circle-o"
    },
    {
      value: "fa fa-paw",
      label: "paw"
    },
    {
      value: "fa fa-paypal",
      label: "paypal"
    },
    {
      value: "fa fa-pencil",
      label: "pencil"
    },
    {
      value: "fa fa-pencil-square",
      label: "pencil-square"
    },
    {
      value: "fa fa-pencil-square-o",
      label: "pencil-square-o"
    },
    {
      value: "fa fa-percent",
      label: "percent"
    },
    {
      value: "fa fa-phone",
      label: "phone"
    },
    {
      value: "fa fa-phone-square",
      label: "phone-square"
    },
    {
      value: "fa fa-photo",
      label: "photo"
    },
    {
      value: "fa fa-picture-o",
      label: "picture-o"
    },
    {
      value: "fa fa-pie-chart",
      label: "pie-chart"
    },
    {
      value: "fa fa-pied-piper",
      label: "pied-piper"
    },
    {
      value: "fa fa-pied-piper-alt",
      label: "pied-piper-alt"
    },
    {
      value: "fa fa-pied-piper-pp",
      label: "pied-piper-pp"
    },
    {
      value: "fa fa-pinterest",
      label: "pinterest"
    },
    {
      value: "fa fa-pinterest-p",
      label: "pinterest-p"
    },
    {
      value: "fa fa-pinterest-square",
      label: "pinterest-square"
    },
    {
      value: "fa fa-plane",
      label: "plane"
    },
    {
      value: "fa fa-play",
      label: "play"
    },
    {
      value: "fa fa-play-circle",
      label: "play-circle"
    },
    {
      value: "fa fa-play-circle-o",
      label: "play-circle-o"
    },
    {
      value: "fa fa-plug",
      label: "plug"
    },
    {
      value: "fa fa-plus",
      label: "plus"
    },
    {
      value: "fa fa-plus-circle",
      label: "plus-circle"
    },
    {
      value: "fa fa-plus-square",
      label: "plus-square"
    },
    {
      value: "fa fa-plus-square-o",
      label: "plus-square-o"
    },
    {
      value: "fa fa-podcast",
      label: "podcast"
    },
    {
      value: "fa fa-power-off",
      label: "power-off"
    },
    {
      value: "fa fa-print",
      label: "print"
    },
    {
      value: "fa fa-product-hunt",
      label: "product-hunt"
    },
    {
      value: "fa fa-pull-left",
      label: "pull-left"
    },
    {
      value: "fa fa-pull-right",
      label: "pull-right"
    },
    {
      value: "fa fa-puzzle-piece",
      label: "puzzle-piece"
    },
    {
      value: "fa fa-qq",
      label: "qq"
    },
    {
      value: "fa fa-qrcode",
      label: "qrcode"
    },
    {
      value: "fa fa-question",
      label: "question"
    },
    {
      value: "fa fa-question-circle",
      label: "question-circle"
    },
    {
      value: "fa fa-question-circle-o",
      label: "question-circle-o"
    },
    {
      value: "fa fa-quora",
      label: "quora"
    },
    {
      value: "fa fa-quote-left",
      label: "quote-left"
    },
    {
      value: "fa fa-quote-right",
      label: "quote-right"
    },
    {
      value: "fa fa-ra",
      label: "ra"
    },
    {
      value: "fa fa-random",
      label: "random"
    },
    {
      value: "fa fa-ravelry",
      label: "ravelry"
    },
    {
      value: "fa fa-rebel",
      label: "rebel"
    },
    {
      value: "fa fa-recycle",
      label: "recycle"
    },
    {
      value: "fa fa-reddit",
      label: "reddit"
    },
    {
      value: "fa fa-reddit-alien",
      label: "reddit-alien"
    },
    {
      value: "fa fa-reddit-square",
      label: "reddit-square"
    },
    {
      value: "fa fa-refresh",
      label: "refresh"
    },
    {
      value: "fa fa-registered",
      label: "registered"
    },
    {
      value: "fa fa-remove",
      label: "remove"
    },
    {
      value: "fa fa-renren",
      label: "renren"
    },
    {
      value: "fa fa-reorder",
      label: "reorder"
    },
    {
      value: "fa fa-repeat",
      label: "repeat"
    },
    {
      value: "fa fa-reply",
      label: "reply"
    },
    {
      value: "fa fa-reply-all",
      label: "reply-all"
    },
    {
      value: "fa fa-resistance",
      label: "resistance"
    },
    {
      value: "fa fa-retweet",
      label: "retweet"
    },
    {
      value: "fa fa-rmb",
      label: "rmb"
    },
    {
      value: "fa fa-road",
      label: "road"
    },
    {
      value: "fa fa-rocket",
      label: "rocket"
    },
    {
      value: "fa fa-rotate-left",
      label: "rotate-left"
    },
    {
      value: "fa fa-rotate-right",
      label: "rotate-right"
    },
    {
      value: "fa fa-rouble",
      label: "rouble"
    },
    {
      value: "fa fa-rss",
      label: "rss"
    },
    {
      value: "fa fa-rss-square",
      label: "rss-square"
    },
    {
      value: "fa fa-rub",
      label: "rub"
    },
    {
      value: "fa fa-ruble",
      label: "ruble"
    },
    {
      value: "fa fa-rupee",
      label: "rupee"
    },
    {
      value: "fa fa-s15",
      label: "s15"
    },
    {
      value: "fa fa-safari",
      label: "safari"
    },
    {
      value: "fa fa-save",
      label: "save"
    },
    {
      value: "fa fa-scissors",
      label: "scissors"
    },
    {
      value: "fa fa-scribd",
      label: "scribd"
    },
    {
      value: "fa fa-search",
      label: "search"
    },
    {
      value: "fa fa-search-minus",
      label: "search-minus"
    },
    {
      value: "fa fa-search-plus",
      label: "search-plus"
    },
    {
      value: "fa fa-sellsy",
      label: "sellsy"
    },
    {
      value: "fa fa-send",
      label: "send"
    },
    {
      value: "fa fa-send-o",
      label: "send-o"
    },
    {
      value: "fa fa-server",
      label: "server"
    },
    {
      value: "fa fa-share",
      label: "share"
    },
    {
      value: "fa fa-share-alt",
      label: "share-alt"
    },
    {
      value: "fa fa-share-alt-square",
      label: "share-alt-square"
    },
    {
      value: "fa fa-share-square",
      label: "share-square"
    },
    {
      value: "fa fa-share-square-o",
      label: "share-square-o"
    },
    {
      value: "fa fa-shekel",
      label: "shekel"
    },
    {
      value: "fa fa-sheqel",
      label: "sheqel"
    },
    {
      value: "fa fa-shield",
      label: "shield"
    },
    {
      value: "fa fa-ship",
      label: "ship"
    },
    {
      value: "fa fa-shirtsinbulk",
      label: "shirtsinbulk"
    },
    {
      value: "fa fa-shopping-bag",
      label: "shopping-bag"
    },
    {
      value: "fa fa-shopping-basket",
      label: "shopping-basket"
    },
    {
      value: "fa fa-shopping-cart",
      label: "shopping-cart"
    },
    {
      value: "fa fa-shower",
      label: "shower"
    },
    {
      value: "fa fa-sign-in",
      label: "sign-in"
    },
    {
      value: "fa fa-sign-language",
      label: "sign-language"
    },
    {
      value: "fa fa-sign-out",
      label: "sign-out"
    },
    {
      value: "fa fa-signal",
      label: "signal"
    },
    {
      value: "fa fa-signing",
      label: "signing"
    },
    {
      value: "fa fa-simplybuilt",
      label: "simplybuilt"
    },
    {
      value: "fa fa-sitemap",
      label: "sitemap"
    },
    {
      value: "fa fa-skyatlas",
      label: "skyatlas"
    },
    {
      value: "fa fa-skype",
      label: "skype"
    },
    {
      value: "fa fa-slack",
      label: "slack"
    },
    {
      value: "fa fa-sliders",
      label: "sliders"
    },
    {
      value: "fa fa-slideshare",
      label: "slideshare"
    },
    {
      value: "fa fa-smile-o",
      label: "smile-o"
    },
    {
      value: "fa fa-snapchat",
      label: "snapchat"
    },
    {
      value: "fa fa-snapchat-ghost",
      label: "snapchat-ghost"
    },
    {
      value: "fa fa-snapchat-square",
      label: "snapchat-square"
    },
    {
      value: "fa fa-snowflake-o",
      label: "snowflake-o"
    },
    {
      value: "fa fa-soccer-ball-o",
      label: "soccer-ball-o"
    },
    {
      value: "fa fa-sort",
      label: "sort"
    },
    {
      value: "fa fa-sort-alpha-asc",
      label: "sort-alpha-asc"
    },
    {
      value: "fa fa-sort-alpha-desc",
      label: "sort-alpha-desc"
    },
    {
      value: "fa fa-sort-amount-asc",
      label: "sort-amount-asc"
    },
    {
      value: "fa fa-sort-amount-desc",
      label: "sort-amount-desc"
    },
    {
      value: "fa fa-sort-asc",
      label: "sort-asc"
    },
    {
      value: "fa fa-sort-desc",
      label: "sort-desc"
    },
    {
      value: "fa fa-sort-down",
      label: "sort-down"
    },
    {
      value: "fa fa-sort-numeric-asc",
      label: "sort-numeric-asc"
    },
    {
      value: "fa fa-sort-numeric-desc",
      label: "sort-numeric-desc"
    },
    {
      value: "fa fa-sort-up",
      label: "sort-up"
    },
    {
      value: "fa fa-soundcloud",
      label: "soundcloud"
    },
    {
      value: "fa fa-space-shuttle",
      label: "space-shuttle"
    },
    {
      value: "fa fa-spinner",
      label: "spinner"
    },
    {
      value: "fa fa-spoon",
      label: "spoon"
    },
    {
      value: "fa fa-spotify",
      label: "spotify"
    },
    {
      value: "fa fa-square",
      label: "square"
    },
    {
      value: "fa fa-square-o",
      label: "square-o"
    },
    {
      value: "fa fa-stack-exchange",
      label: "stack-exchange"
    },
    {
      value: "fa fa-stack-overflow",
      label: "stack-overflow"
    },
    {
      value: "fa fa-star",
      label: "star"
    },
    {
      value: "fa fa-star-half",
      label: "star-half"
    },
    {
      value: "fa fa-star-half-empty",
      label: "star-half-empty"
    },
    {
      value: "fa fa-star-half-full",
      label: "star-half-full"
    },
    {
      value: "fa fa-star-half-o",
      label: "star-half-o"
    },
    {
      value: "fa fa-star-o",
      label: "star-o"
    },
    {
      value: "fa fa-steam",
      label: "steam"
    },
    {
      value: "fa fa-steam-square",
      label: "steam-square"
    },
    {
      value: "fa fa-step-backward",
      label: "step-backward"
    },
    {
      value: "fa fa-step-forward",
      label: "step-forward"
    },
    {
      value: "fa fa-stethoscope",
      label: "stethoscope"
    },
    {
      value: "fa fa-sticky-note",
      label: "sticky-note"
    },
    {
      value: "fa fa-sticky-note-o",
      label: "sticky-note-o"
    },
    {
      value: "fa fa-stop",
      label: "stop"
    },
    {
      value: "fa fa-stop-circle",
      label: "stop-circle"
    },
    {
      value: "fa fa-stop-circle-o",
      label: "stop-circle-o"
    },
    {
      value: "fa fa-street-view",
      label: "street-view"
    },
    {
      value: "fa fa-strikethrough",
      label: "strikethrough"
    },
    {
      value: "fa fa-stumbleupon",
      label: "stumbleupon"
    },
    {
      value: "fa fa-stumbleupon-circle",
      label: "stumbleupon-circle"
    },
    {
      value: "fa fa-subscript",
      label: "subscript"
    },
    {
      value: "fa fa-subway",
      label: "subway"
    },
    {
      value: "fa fa-suitcase",
      label: "suitcase"
    },
    {
      value: "fa fa-sun-o",
      label: "sun-o"
    },
    {
      value: "fa fa-superpowers",
      label: "superpowers"
    },
    {
      value: "fa fa-superscript",
      label: "superscript"
    },
    {
      value: "fa fa-support",
      label: "support"
    },
    {
      value: "fa fa-table",
      label: "table"
    },
    {
      value: "fa fa-tablet",
      label: "tablet"
    },
    {
      value: "fa fa-tachometer",
      label: "tachometer"
    },
    {
      value: "fa fa-tag",
      label: "tag"
    },
    {
      value: "fa fa-tags",
      label: "tags"
    },
    {
      value: "fa fa-tasks",
      label: "tasks"
    },
    {
      value: "fa fa-taxi",
      label: "taxi"
    },
    {
      value: "fa fa-telegram",
      label: "telegram"
    },
    {
      value: "fa fa-television",
      label: "television"
    },
    {
      value: "fa fa-tencent-weibo",
      label: "tencent-weibo"
    },
    {
      value: "fa fa-terminal",
      label: "terminal"
    },
    {
      value: "fa fa-text-height",
      label: "text-height"
    },
    {
      value: "fa fa-text-width",
      label: "text-width"
    },
    {
      value: "fa fa-th",
      label: "th"
    },
    {
      value: "fa fa-th-large",
      label: "th-large"
    },
    {
      value: "fa fa-th-list",
      label: "th-list"
    },
    {
      value: "fa fa-themeisle",
      label: "themeisle"
    },
    {
      value: "fa fa-thermometer",
      label: "thermometer"
    },
    {
      value: "fa fa-thermometer-0",
      label: "thermometer-0"
    },
    {
      value: "fa fa-thermometer-1",
      label: "thermometer-1"
    },
    {
      value: "fa fa-thermometer-2",
      label: "thermometer-2"
    },
    {
      value: "fa fa-thermometer-3",
      label: "thermometer-3"
    },
    {
      value: "fa fa-thermometer-4",
      label: "thermometer-4"
    },
    {
      value: "fa fa-thermometer-empty",
      label: "thermometer-empty"
    },
    {
      value: "fa fa-thermometer-full",
      label: "thermometer-full"
    },
    {
      value: "fa fa-thermometer-half",
      label: "thermometer-half"
    },
    {
      value: "fa fa-thermometer-quarter",
      label: "thermometer-quarter"
    },
    {
      value: "fa fa-thermometer-three-quarters",
      label: "thermometer-three-quarters"
    },
    {
      value: "fa fa-thumb-tack",
      label: "thumb-tack"
    },
    {
      value: "fa fa-thumbs-down",
      label: "thumbs-down"
    },
    {
      value: "fa fa-thumbs-o-down",
      label: "thumbs-o-down"
    },
    {
      value: "fa fa-thumbs-o-up",
      label: "thumbs-o-up"
    },
    {
      value: "fa fa-thumbs-up",
      label: "thumbs-up"
    },
    {
      value: "fa fa-ticket",
      label: "ticket"
    },
    {
      value: "fa fa-times",
      label: "times"
    },
    {
      value: "fa fa-times-circle",
      label: "times-circle"
    },
    {
      value: "fa fa-times-circle-o",
      label: "times-circle-o"
    },
    {
      value: "fa fa-times-rectangle",
      label: "times-rectangle"
    },
    {
      value: "fa fa-times-rectangle-o",
      label: "times-rectangle-o"
    },
    {
      value: "fa fa-tint",
      label: "tint"
    },
    {
      value: "fa fa-toggle-down",
      label: "toggle-down"
    },
    {
      value: "fa fa-toggle-left",
      label: "toggle-left"
    },
    {
      value: "fa fa-toggle-off",
      label: "toggle-off"
    },
    {
      value: "fa fa-toggle-on",
      label: "toggle-on"
    },
    {
      value: "fa fa-toggle-right",
      label: "toggle-right"
    },
    {
      value: "fa fa-toggle-up",
      label: "toggle-up"
    },
    {
      value: "fa fa-trademark",
      label: "trademark"
    },
    {
      value: "fa fa-train",
      label: "train"
    },
    {
      value: "fa fa-transgender",
      label: "transgender"
    },
    {
      value: "fa fa-transgender-alt",
      label: "transgender-alt"
    },
    {
      value: "fa fa-trash",
      label: "trash"
    },
    {
      value: "fa fa-trash-o",
      label: "trash-o"
    },
    {
      value: "fa fa-tree",
      label: "tree"
    },
    {
      value: "fa fa-trello",
      label: "trello"
    },
    {
      value: "fa fa-tripadvisor",
      label: "tripadvisor"
    },
    {
      value: "fa fa-trophy",
      label: "trophy"
    },
    {
      value: "fa fa-truck",
      label: "truck"
    },
    {
      value: "fa fa-try",
      label: "try"
    },
    {
      value: "fa fa-tty",
      label: "tty"
    },
    {
      value: "fa fa-tumblr",
      label: "tumblr"
    },
    {
      value: "fa fa-tumblr-square",
      label: "tumblr-square"
    },
    {
      value: "fa fa-turkish-lira",
      label: "turkish-lira"
    },
    {
      value: "fa fa-tv",
      label: "tv"
    },
    {
      value: "fa fa-twitch",
      label: "twitch"
    },
    {
      value: "fa fa-twitter",
      label: "twitter"
    },
    {
      value: "fa fa-twitter-square",
      label: "twitter-square"
    },
    {
      value: "fa fa-umbrella",
      label: "umbrella"
    },
    {
      value: "fa fa-underline",
      label: "underline"
    },
    {
      value: "fa fa-undo",
      label: "undo"
    },
    {
      value: "fa fa-universal-access",
      label: "universal-access"
    },
    {
      value: "fa fa-university",
      label: "university"
    },
    {
      value: "fa fa-unlink",
      label: "unlink"
    },
    {
      value: "fa fa-unlock",
      label: "unlock"
    },
    {
      value: "fa fa-unlock-alt",
      label: "unlock-alt"
    },
    {
      value: "fa fa-unsorted",
      label: "unsorted"
    },
    {
      value: "fa fa-upload",
      label: "upload"
    },
    {
      value: "fa fa-usb",
      label: "usb"
    },
    {
      value: "fa fa-usd",
      label: "usd"
    },
    {
      value: "fa fa-user",
      label: "user"
    },
    {
      value: "fa fa-user-circle",
      label: "user-circle"
    },
    {
      value: "fa fa-user-circle-o",
      label: "user-circle-o"
    },
    {
      value: "fa fa-user-md",
      label: "user-md"
    },
    {
      value: "fa fa-user-o",
      label: "user-o"
    },
    {
      value: "fa fa-user-plus",
      label: "user-plus"
    },
    {
      value: "fa fa-user-secret",
      label: "user-secret"
    },
    {
      value: "fa fa-user-times",
      label: "user-times"
    },
    {
      value: "fa fa-users",
      label: "users"
    },
    {
      value: "fa fa-vcard",
      label: "vcard"
    },
    {
      value: "fa fa-vcard-o",
      label: "vcard-o"
    },
    {
      value: "fa fa-venus",
      label: "venus"
    },
    {
      value: "fa fa-venus-double",
      label: "venus-double"
    },
    {
      value: "fa fa-venus-mars",
      label: "venus-mars"
    },
    {
      value: "fa fa-viacoin",
      label: "viacoin"
    },
    {
      value: "fa fa-viadeo",
      label: "viadeo"
    },
    {
      value: "fa fa-viadeo-square",
      label: "viadeo-square"
    },
    {
      value: "fa fa-video-camera",
      label: "video-camera"
    },
    {
      value: "fa fa-vimeo",
      label: "vimeo"
    },
    {
      value: "fa fa-vimeo-square",
      label: "vimeo-square"
    },
    {
      value: "fa fa-vine",
      label: "vine"
    },
    {
      value: "fa fa-vk",
      label: "vk"
    },
    {
      value: "fa fa-volume-control-phone",
      label: "volume-control-phone"
    },
    {
      value: "fa fa-volume-down",
      label: "volume-down"
    },
    {
      value: "fa fa-volume-off",
      label: "volume-off"
    },
    {
      value: "fa fa-volume-up",
      label: "volume-up"
    },
    {
      value: "fa fa-warning",
      label: "warning"
    },
    {
      value: "fa fa-wechat",
      label: "wechat"
    },
    {
      value: "fa fa-weibo",
      label: "weibo"
    },
    {
      value: "fa fa-weixin",
      label: "weixin"
    },
    {
      value: "fa fa-whatsapp",
      label: "whatsapp"
    },
    {
      value: "fa fa-wheelchair",
      label: "wheelchair"
    },
    {
      value: "fa fa-wheelchair-alt",
      label: "wheelchair-alt"
    },
    {
      value: "fa fa-wifi",
      label: "wifi"
    },
    {
      value: "fa fa-wikipedia-w",
      label: "wikipedia-w"
    },
    {
      value: "fa fa-window-close",
      label: "window-close"
    },
    {
      value: "fa fa-window-close-o",
      label: "window-close-o"
    },
    {
      value: "fa fa-window-maximize",
      label: "window-maximize"
    },
    {
      value: "fa fa-window-minimize",
      label: "window-minimize"
    },
    {
      value: "fa fa-window-restore",
      label: "window-restore"
    },
    {
      value: "fa fa-windows",
      label: "windows"
    },
    {
      value: "fa fa-won",
      label: "won"
    },
    {
      value: "fa fa-wordpress",
      label: "wordpress"
    },
    {
      value: "fa fa-wpbeginner",
      label: "wpbeginner"
    },
    {
      value: "fa fa-wpexplorer",
      label: "wpexplorer"
    },
    {
      value: "fa fa-wpforms",
      label: "wpforms"
    },
    {
      value: "fa fa-wrench",
      label: "wrench"
    },
    {
      value: "fa fa-xing",
      label: "xing"
    },
    {
      value: "fa fa-xing-square",
      label: "xing-square"
    },
    {
      value: "fa fa-y-combinator",
      label: "y-combinator"
    },
    {
      value: "fa fa-y-combinator-square",
      label: "y-combinator-square"
    },
    {
      value: "fa fa-yahoo",
      label: "yahoo"
    },
    {
      value: "fa fa-yc",
      label: "yc"
    },
    {
      value: "fa fa-yc-square",
      label: "yc-square"
    },
    {
      value: "fa fa-yelp",
      label: "yelp"
    },
    {
      value: "fa fa-yen",
      label: "yen"
    },
    {
      value: "fa fa-yoast",
      label: "yoast"
    },
    {
      value: "fa fa-youtube",
      label: "youtube"
    },
    {
      value: "fa fa-youtube-play",
      label: "youtube-play"
    },
    {
      value: "fa fa-youtube-square",
      label: "youtube-square"
    }
  ];
  return (
    <SelectControl
      label={__("Choose Icon")}
      options={1 == FontAwesomeEnabled ? ICONS : DASHICONS}
      value={icon}
      onChange={onChangeIcon}
    />
  );
}
