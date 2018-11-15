const { __ } = wp.i18n;
const { SelectControl } = wp.components;
export default function PremiumIcon(props) {
  const { type, icon, onChangeIcon = () => {} } = props;
  //Dashicons
  const DASHICONS = [
    {
      value: "",
      label: "none"
    },
    {
      value: "dashicons dashicons-menu",
      label: <p>&#xf333; dashicons-menu</p>
    },
    {
      value: "dashicons dashicons-admin-site",
      label: <p>&#xf319; dashicons-admin-site</p>
    },
    {
      value: "dashicons dashicons-dashboard",
      label: <p>&#xf226; dashicons-dashboard</p>
    },
    {
      value: "dashicons dashicons-admin-post",
      label: <p>&#xf109; dashicons-admin-post</p>
    },
    {
      value: "dashicons dashicons-admin-media",
      label: <p>&#xf104; dashicons-admin-media</p>
    },
    {
      value: "dashicons dashicons-admin-links",
      label: <p>&#xf103; dashicons-admin-links</p>
    },
    {
      value: "dashicons dashicons-admin-page",
      label: <p>&#xf105; dashicons-admin-page</p>
    },
    {
      value: "dashicons dashicons-admin-comments",
      label: <p>&#xf101; dashicons-admin-comments</p>
    },
    {
      value: "dashicons dashicons-admin-appearance",
      label: <p>&#xf100; dashicons-admin-appearance</p>
    },
    {
      value: "dashicons dashicons-admin-plugins",
      label: <p>&#xf106; dashicons-admin-plugins</p>
    },
    {
      value: "dashicons dashicons-admin-users",
      label: <p>&#xf110; dashicons-admin-users</p>
    },
    {
      value: "dashicons dashicons-admin-tools",
      label: <p>&#xf107; dashicons-admin-tools</p>
    },
    {
      value: "dashicons dashicons-admin-settings",
      label: <p>&#xf108; dashicons-admin-settings</p>
    },
    {
      value: "dashicons dashicons-admin-network",
      label: <p>&#xf112; dashicons-admin-network</p>
    },
    {
      value: "dashicons dashicons-admin-home",
      label: <p>&#xf102; dashicons-admin-home</p>
    },
    {
      value: "dashicons dashicons-admin-generic",
      label: <p>&#xf111; dashicons-admin-generic</p>
    },
    {
      value: "dashicons dashicons-admin-collapse",
      label: <p>&#xf148; dashicons-admin-collapse</p>
    },
    {
      value: "dashicons dashicons-filter",
      label: <p>&#xf536; dashicons-filter</p>
    },
    {
      value: "dashicons dashicons-admin-customizer",
      label: <p>&#xf540; dashicons-admin-customizer</p>
    },
    {
      value: "dashicons dashicons-admin-multisite",
      label: <p>&#xf541; dashicons-admin-multisite</p>
    },
    {
      value: "dashicons dashicons-welcome-write-blog",
      label: <p>&#xf119; dashicons-welcome-write-blog</p>
    },
    {
      value: "dashicons dashicons-welcome-add-page",
      label: <p>&#xf133; dashicons-welcome-add-page</p>
    },
    {
      value: "dashicons dashicons-welcome-view-site",
      label: <p>&#xf115; dashicons-welcome-view-site</p>
    },
    {
      value: "dashicons dashicons-welcome-widgets-menus",
      label: <p>&#xf116; dashicons-welcome-widgets-menus</p>
    },
    {
      value: "dashicons dashicons-welcome-comments",
      label: <p>&#xf117; dashicons-welcome-comments</p>
    },
    {
      value: "dashicons dashicons-welcome-learn-more",
      label: <p>&#xf118; dashicons-welcome-learn-more</p>
    },
    {
      value: "dashicons dashicons-format-aside",
      label: <p>&#xf123; dashicons-format-aside</p>
    },
    {
      value: "dashicons dashicons-format-image",
      label: <p>&#xf128; dashicons-format-image</p>
    },
    {
      value: "dashicons dashicons-format-gallery",
      label: <p>&#xf161; dashicons-format-gallery</p>
    },
    {
      value: "dashicons dashicons-format-video",
      label: <p>&#xf126; dashicons-format-video</p>
    },
    {
      value: "dashicons dashicons-format-status",
      label: <p>&#xf130; dashicons-format-status</p>
    },
    {
      value: "dashicons dashicons-format-quote",
      label: <p>&#xf122; dashicons-format-quote</p>
    },
    {
      value: "dashicons dashicons-format-chat",
      label: <p>&#xf125; dashicons-format-chat</p>
    },
    {
      value: "dashicons dashicons-format-audio",
      label: <p>&#xf127; dashicons-format-audio</p>
    },
    {
      value: "dashicons dashicons-camera",
      label: <p>&#xf306; dashicons-camera</p>
    },
    {
      value: "dashicons dashicons-images-alt",
      label: <p>&#xf232; dashicons-images-alt</p>
    },
    {
      value: "dashicons dashicons-images-alt2",
      label: <p>&#xf233; dashicons-images-alt2</p>
    },
    {
      value: "dashicons dashicons-video-alt",
      label: <p>&#xf234; dashicons-video-alt</p>
    },
    {
      value: "dashicons dashicons-video-alt2",
      label: <p>&#xf235; dashicons-video-alt2</p>
    },
    {
      value: "dashicons dashicons-video-alt3",
      label: <p>&#xf236; dashicons-video-alt3</p>
    },
    {
      value: "dashicons dashicons-media-archive",
      label: <p>&#xf501; dashicons-media-archive</p>
    },
    {
      value: "dashicons dashicons-media-audio",
      label: <p>&#xf500; dashicons-media-audio</p>
    },
    {
      value: "dashicons dashicons-media-code",
      label: <p>&#xf499; dashicons-media-code</p>
    },
    {
      value: "dashicons dashicons-media-default",
      label: <p>&#xf498; dashicons-media-default</p>
    },
    {
      value: "dashicons dashicons-media-document",
      label: <p>&#xf497; dashicons-media-document</p>
    },
    {
      value: "dashicons dashicons-media-interactive",
      label: <p>&#xf496; dashicons-media-interactive</p>
    },
    {
      value: "dashicons dashicons-media-spreadsheet",
      label: <p>&#xf495; dashicons-media-spreadsheet</p>
    },
    {
      value: "dashicons dashicons-media-text",
      label: <p>&#xf491; dashicons-media-text</p>
    },
    {
      value: "dashicons dashicons-media-video",
      label: <p>&#xf490; dashicons-media-video</p>
    },
    {
      value: "dashicons dashicons-playlist-audio",
      label: <p>&#xf492; dashicons-playlist-audio</p>
    },
    {
      value: "dashicons dashicons-playlist-video",
      label: <p>&#xf493; dashicons-playlist-video</p>
    },
    {
      value: "dashicons dashicons-controls-play",
      label: <p>&#xf522; dashicons-controls-play</p>
    },
    {
      value: "dashicons dashicons-controls-pause",
      label: <p>&#xf523; dashicons-controls-pause</p>
    },
    {
      value: "dashicons dashicons-controls-forward",
      label: <p>&#xf519; dashicons-controls-forward</p>
    },
    {
      value: "dashicons dashicons-controls-skipforward",
      label: <p>&#xf517; dashicons-controls-skipforward</p>
    },
    {
      value: "dashicons dashicons-controls-back",
      label: <p>&#xf518; dashicons-controls-back</p>
    },
    {
      value: "dashicons dashicons-controls-skipback",
      label: <p>&#xf516; dashicons-controls-skipback</p>
    },
    {
      value: "dashicons dashicons-controls-repeat",
      label: <p>&#xf515; dashicons-controls-repeat</p>
    },
    {
      value: "dashicons dashicons-controls-volumeon",
      label: <p>&#xf521; dashicons-controls-volumeon</p>
    },
    {
      value: "dashicons dashicons-controls-volumeoff",
      label: <p>&#xf520; dashicons-controls-volumeoff</p>
    },
    {
      value: "dashicons dashicons-image-crop",
      label: <p>&#xf165; dashicons-image-crop</p>
    },
    {
      value: "dashicons dashicons-image-rotate",
      label: <p>&#xf531; dashicons-image-rotate</p>
    },
    {
      value: "dashicons dashicons-image-rotate-left",
      label: <p>&#xf166; dashicons-image-rotate-left</p>
    },
    {
      value: "dashicons dashicons-image-rotate-right",
      label: <p>&#xf167; dashicons-image-rotate-right</p>
    },
    {
      value: "dashicons dashicons-image-flip-vertical",
      label: <p>&#xf168; dashicons-image-flip-vertical</p>
    },
    {
      value: "dashicons dashicons-image-flip-horizontal",
      label: <p>&#xf169; dashicons-image-flip-horizontal</p>
    },
    {
      value: "dashicons dashicons-image-filter",
      label: <p>&#xf533; dashicons-image-filter</p>
    },
    {
      value: "dashicons dashicons-undo",
      label: <p>&#xf171; dashicons-undo</p>
    },
    {
      value: "dashicons dashicons-redo",
      label: <p>&#xf172; dashicons-redo</p>
    },
    {
      value: "dashicons dashicons-editor-bold",
      label: <p>&#xf200; dashicons-editor-bold</p>
    },
    {
      value: "dashicons dashicons-editor-italic",
      label: <p>&#xf201; dashicons-editor-italic</p>
    },
    {
      value: "dashicons dashicons-editor-ul",
      label: <p>&#xf203; dashicons-editor-ul</p>
    },
    {
      value: "dashicons dashicons-editor-ol",
      label: <p>&#xf204; dashicons-editor-ol</p>
    },
    {
      value: "dashicons dashicons-editor-quote",
      label: <p>&#xf205; dashicons-editor-quote</p>
    },
    {
      value: "dashicons dashicons-editor-alignleft",
      label: <p>&#xf206; dashicons-editor-alignleft</p>
    },
    {
      value: "dashicons dashicons-editor-aligncenter",
      label: <p>&#xf207; dashicons-editor-aligncenter</p>
    },
    {
      value: "dashicons dashicons-editor-alignright",
      label: <p>&#xf208; dashicons-editor-alignright</p>
    },
    {
      value: "dashicons dashicons-editor-insertmore",
      label: <p>&#xf209; dashicons-editor-insertmore</p>
    },
    {
      value: "dashicons dashicons-editor-spellcheck",
      label: <p>&#xf210; dashicons-editor-spellcheck</p>
    },
    {
      value: "dashicons dashicons-editor-expand",
      label: <p>&#xf211; dashicons-editor-expand</p>
    },
    {
      value: "dashicons dashicons-editor-contract",
      label: <p>&#xf506; dashicons-editor-contract</p>
    },
    {
      value: "dashicons dashicons-editor-kitchensink",
      label: <p>&#xf212; dashicons-editor-kitchensink</p>
    },
    {
      value: "dashicons dashicons-editor-underline",
      label: <p>&#xf213; dashicons-editor-underline</p>
    },
    {
      value: "dashicons dashicons-editor-justify",
      label: <p>&#xf214; dashicons-editor-justify</p>
    },
    {
      value: "dashicons dashicons-editor-textcolor",
      label: <p>&#xf215; dashicons-editor-textcolor</p>
    },
    {
      value: "dashicons dashicons-editor-paste-word",
      label: <p>&#xf216; dashicons-editor-paste-word</p>
    },
    {
      value: "dashicons dashicons-editor-paste-text",
      label: <p>&#xf217; dashicons-editor-paste-text</p>
    },
    {
      value: "dashicons dashicons-editor-removeformatting",
      label: <p>&#xf218; dashicons-editor-removeformatting</p>
    },
    {
      value: "dashicons dashicons-editor-video",
      label: <p>&#xf219; dashicons-editor-video</p>
    },
    {
      value: "dashicons dashicons-editor-customchar",
      label: <p>&#xf220; dashicons-editor-customchar</p>
    },
    {
      value: "dashicons dashicons-editor-outdent",
      label: <p>&#xf221; dashicons-editor-outdent</p>
    },
    {
      value: "dashicons dashicons-editor-indent",
      label: <p>&#xf222; dashicons-editor-indent</p>
    },
    {
      value: "dashicons dashicons-editor-help",
      label: <p>&#xf223; dashicons-editor-help</p>
    },
    {
      value: "dashicons dashicons-editor-strikethrough",
      label: <p>&#xf224; dashicons-editor-strikethrough</p>
    },
    {
      value: "dashicons dashicons-editor-unlink",
      label: <p>&#xf225; dashicons-editor-unlink</p>
    },
    {
      value: "dashicons dashicons-editor-rtl",
      label: <p>&#xf320; dashicons-editor-rtl</p>
    },
    {
      value: "dashicons dashicons-editor-break",
      label: <p>&#xf474; dashicons-editor-break</p>
    },
    {
      value: "dashicons dashicons-editor-code",
      label: <p>&#xf475; dashicons-editor-code</p>
    },
    {
      value: "dashicons dashicons-editor-paragraph",
      label: <p>&#xf476; dashicons-editor-paragraph</p>
    },
    {
      value: "dashicons dashicons-editor-table",
      label: <p>&#xf535; dashicons-editor-table</p>
    },
    {
      value: "dashicons dashicons-align-left",
      label: <p>&#xf135; dashicons-align-left</p>
    },
    {
      value: "dashicons dashicons-align-right",
      label: <p>&#xf136; dashicons-align-right</p>
    },
    {
      value: "dashicons dashicons-align-center",
      label: <p>&#xf134; dashicons-align-center</p>
    },
    {
      value: "dashicons dashicons-align-none",
      label: <p>&#xf138; dashicons-align-none</p>
    },
    {
      value: "dashicons dashicons-lock",
      label: <p>&#xf160; dashicons-lock</p>
    },
    {
      value: "dashicons dashicons-unlock",
      label: <p>&#xf528; dashicons-unlock</p>
    },
    {
      value: "dashicons dashicons-calendar",
      label: <p>&#xf145; dashicons-calendar</p>
    },
    {
      value: "dashicons dashicons-calendar-alt",
      label: <p>&#xf508; dashicons-calendar-alt</p>
    },
    {
      value: "dashicons dashicons-visibility",
      label: <p>&#xf177; dashicons-visibility</p>
    },
    {
      value: "dashicons dashicons-hidden",
      label: <p>&#xf530; dashicons-hidden</p>
    },
    {
      value: "dashicons dashicons-post-status",
      label: <p>&#xf173; dashicons-post-status</p>
    },
    {
      value: "dashicons dashicons-edit",
      label: <p>&#xf464; dashicons-edit</p>
    },
    {
      value: "dashicons dashicons-trash",
      label: <p>&#xf182; dashicons-trash</p>
    },
    {
      value: "dashicons dashicons-sticky",
      label: <p>&#xf537; dashicons-sticky</p>
    },
    {
      value: "dashicons dashicons-external",
      label: <p>&#xf504; dashicons-external</p>
    },
    {
      value: "dashicons dashicons-arrow-up",
      label: <p>&#xf142; dashicons-arrow-up</p>
    },
    {
      value: "dashicons dashicons-arrow-down",
      label: <p>&#xf140; dashicons-arrow-down</p>
    },
    {
      value: "dashicons dashicons-arrow-right",
      label: <p>&#xf139; dashicons-arrow-right</p>
    },
    {
      value: "dashicons dashicons-arrow-left",
      label: <p>&#xf141; dashicons-arrow-left</p>
    },
    {
      value: "dashicons dashicons-arrow-up-alt",
      label: <p>&#xf342; dashicons-arrow-up-alt</p>
    },
    {
      value: "dashicons dashicons-arrow-down-alt",
      label: <p>&#xf346; dashicons-arrow-down-alt</p>
    },
    {
      value: "dashicons dashicons-arrow-right-alt",
      label: <p>&#xf344; dashicons-arrow-right-alt</p>
    },
    {
      value: "dashicons dashicons-arrow-left-alt",
      label: <p>&#xf340; dashicons-arrow-left-alt</p>
    },
    {
      value: "dashicons dashicons-arrow-up-alt2",
      label: <p>&#xf343; dashicons-arrow-up-alt2</p>
    },
    {
      value: "dashicons dashicons-arrow-down-alt2",
      label: <p>&#xf347; dashicons-arrow-down-alt2</p>
    },
    {
      value: "dashicons dashicons-arrow-right-alt2",
      label: <p>&#xf345; dashicons-arrow-right-alt2</p>
    },
    {
      value: "dashicons dashicons-arrow-left-alt2",
      label: <p>&#xf341; dashicons-arrow-left-alt2</p>
    },
    {
      value: "dashicons dashicons-sort",
      label: <p>&#xf156; dashicons-sort</p>
    },
    {
      value: "dashicons dashicons-leftright",
      label: <p>&#xf229; dashicons-leftright</p>
    },
    {
      value: "dashicons dashicons-randomize",
      label: <p>&#xf503; dashicons-randomize</p>
    },
    {
      value: "dashicons dashicons-list-view",
      label: <p>&#xf163; dashicons-list-view</p>
    },
    {
      value: "dashicons dashicons-exerpt-view",
      label: <p>&#xf164; dashicons-exerpt-view</p>
    },
    {
      value: "dashicons dashicons-grid-view",
      label: <p>&#xf509; dashicons-grid-view</p>
    },
    {
      value: "dashicons dashicons-move",
      label: <p>&#xf545; dashicons-move</p>
    },
    {
      value: "dashicons dashicons-share",
      label: <p>&#xf237; dashicons-share</p>
    },
    {
      value: "dashicons dashicons-share-alt",
      label: <p>&#xf240; dashicons-share-alt</p>
    },
    {
      value: "dashicons dashicons-share-alt2",
      label: <p>&#xf242; dashicons-share-alt2</p>
    },
    {
      value: "dashicons dashicons-twitter",
      label: <p>&#xf301; dashicons-twitter</p>
    },
    {
      value: "dashicons dashicons-rss",
      label: <p>&#xf303; dashicons-rss</p>
    },
    {
      value: "dashicons dashicons-email",
      label: <p>&#xf465; dashicons-email</p>
    },
    {
      value: "dashicons dashicons-email-alt",
      label: <p>&#xf466; dashicons-email-alt</p>
    },
    {
      value: "dashicons dashicons-facebook",
      label: <p>&#xf304; dashicons-facebook</p>
    },
    {
      value: "dashicons dashicons-facebook-alt",
      label: <p>&#xf305; dashicons-facebook-alt</p>
    },
    {
      value: "dashicons dashicons-googleplus",
      label: <p>&#xf462; dashicons-googleplus</p>
    },
    {
      value: "dashicons dashicons-networking",
      label: <p>&#xf325; dashicons-networking</p>
    },
    {
      value: "dashicons dashicons-hammer",
      label: <p>&#xf308; dashicons-hammer</p>
    },
    {
      value: "dashicons dashicons-art",
      label: <p>&#xf309; dashicons-art</p>
    },
    {
      value: "dashicons dashicons-migrate",
      label: <p>&#xf310; dashicons-migrate</p>
    },
    {
      value: "dashicons dashicons-performance",
      label: <p>&#xf311; dashicons-performance</p>
    },
    {
      value: "dashicons dashicons-universal-access",
      label: <p>&#xf483; dashicons-universal-access</p>
    },
    {
      value: "dashicons dashicons-universal-access-alt",
      label: <p>&#xf507; dashicons-universal-access-alt</p>
    },
    {
      value: "dashicons dashicons-tickets",
      label: <p>&#xf486; dashicons-tickets</p>
    },
    {
      value: "dashicons dashicons-nametag",
      label: <p>&#xf484; dashicons-nametag</p>
    },
    {
      value: "dashicons dashicons-clipboard",
      label: <p>&#xf481; dashicons-clipboard</p>
    },
    {
      value: "dashicons dashicons-heart",
      label: <p>&#xf487; dashicons-heart</p>
    },
    {
      value: "dashicons dashicons-megaphone",
      label: <p>&#xf488; dashicons-megaphone</p>
    },
    {
      value: "dashicons dashicons-schedule",
      label: <p>&#xf489; dashicons-schedule</p>
    },
    {
      value: "dashicons dashicons-wordpress",
      label: <p>&#xf120; dashicons-wordpress</p>
    },
    {
      value: "dashicons dashicons-wordpress-alt",
      label: <p>&#xf324; dashicons-wordpress-alt</p>
    },
    {
      value: "dashicons dashicons-pressthis",
      label: <p>&#xf157; dashicons-pressthis</p>
    },
    {
      value: "dashicons dashicons-update",
      label: <p>&#xf463; dashicons-update</p>
    },
    {
      value: "dashicons dashicons-screenoptions",
      label: <p>&#xf180; dashicons-screenoptions</p>
    },
    {
      value: "dashicons dashicons-info",
      label: <p>&#xf348; dashicons-info</p>
    },
    {
      value: "dashicons dashicons-cart",
      label: <p>&#xf174; dashicons-cart</p>
    },
    {
      value: "dashicons dashicons-feedback",
      label: <p>&#xf175; dashicons-feedback</p>
    },
    {
      value: "dashicons dashicons-cloud",
      label: <p>&#xf176; dashicons-cloud</p>
    },
    {
      value: "dashicons dashicons-translation",
      label: <p>&#xf326; dashicons-translation</p>
    },
    {
      value: "dashicons dashicons-tag",
      label: <p>&#xf323; dashicons-tag</p>
    },
    {
      value: "dashicons dashicons-category",
      label: <p>&#xf318; dashicons-category</p>
    },
    {
      value: "dashicons dashicons-archive",
      label: <p>&#xf480; dashicons-archive</p>
    },
    {
      value: "dashicons dashicons-tagcloud",
      label: <p>&#xf479; dashicons-tagcloud</p>
    },
    {
      value: "dashicons dashicons-text",
      label: <p>&#xf478; dashicons-text</p>
    },
    {
      value: "dashicons dashicons-yes",
      label: <p>&#xf147; dashicons-yes</p>
    },
    {
      value: "dashicons dashicons-no",
      label: <p>&#xf158; dashicons-no</p>
    },
    {
      value: "dashicons dashicons-no-alt",
      label: <p>&#xf335; dashicons-no-alt</p>
    },
    {
      value: "dashicons dashicons-plus",
      label: <p>&#xf132; dashicons-plus</p>
    },
    {
      value: "dashicons dashicons-plus-alt",
      label: <p>&#xf502; dashicons-plus-alt</p>
    },
    {
      value: "dashicons dashicons-minus",
      label: <p>&#xf460; dashicons-minus</p>
    },
    {
      value: "dashicons dashicons-dismiss",
      label: <p>&#xf153; dashicons-dismiss</p>
    },
    {
      value: "dashicons dashicons-marker",
      label: <p>&#xf159; dashicons-marker</p>
    },
    {
      value: "dashicons dashicons-star-filled",
      label: <p>&#xf155; dashicons-star-filled</p>
    },
    {
      value: "dashicons dashicons-star-half",
      label: <p>&#xf459; dashicons-star-half</p>
    },
    {
      value: "dashicons dashicons-star-empty",
      label: <p>&#xf154; dashicons-star-empty</p>
    },
    {
      value: "dashicons dashicons-flag",
      label: <p>&#xf227; dashicons-flag</p>
    },
    {
      value: "dashicons dashicons-warning",
      label: <p>&#xf534; dashicons-warning</p>
    },
    {
      value: "dashicons dashicons-location",
      label: <p>&#xf230; dashicons-location</p>
    },
    {
      value: "dashicons dashicons-location-alt",
      label: <p>&#xf231; dashicons-location-alt</p>
    },
    {
      value: "dashicons dashicons-vault",
      label: <p>&#xf178; dashicons-vault</p>
    },
    {
      value: "dashicons dashicons-shield",
      label: <p>&#xf332; dashicons-shield</p>
    },
    {
      value: "dashicons dashicons-shield-alt",
      label: <p>&#xf334; dashicons-shield-alt</p>
    },
    {
      value: "dashicons dashicons-sos",
      label: <p>&#xf468; dashicons-sos</p>
    },
    {
      value: "dashicons dashicons-search",
      label: <p>&#xf179; dashicons-search</p>
    },
    {
      value: "dashicons dashicons-slides",
      label: <p>&#xf181; dashicons-slides</p>
    },
    {
      value: "dashicons dashicons-analytics",
      label: <p>&#xf183; dashicons-analytics</p>
    },
    {
      value: "dashicons dashicons-chart-pie",
      label: <p>&#xf184; dashicons-chart-pie</p>
    },
    {
      value: "dashicons dashicons-chart-bar",
      label: <p>&#xf185; dashicons-chart-bar</p>
    },
    {
      value: "dashicons dashicons-chart-line",
      label: <p>&#xf238; dashicons-chart-line</p>
    },
    {
      value: "dashicons dashicons-chart-area",
      label: <p>&#xf239; dashicons-chart-area</p>
    },
    {
      value: "dashicons dashicons-groups",
      label: <p>&#xf307; dashicons-groups</p>
    },
    {
      value: "dashicons dashicons-businessman",
      label: <p>&#xf338; dashicons-businessman</p>
    },
    {
      value: "dashicons dashicons-id",
      label: <p>&#xf336; dashicons-id</p>
    },
    {
      value: "dashicons dashicons-id-alt",
      label: <p>&#xf337; dashicons-id-alt</p>
    },
    {
      value: "dashicons dashicons-products",
      label: <p>&#xf312; dashicons-products</p>
    },
    {
      value: "dashicons dashicons-awards",
      label: <p>&#xf313; dashicons-awards</p>
    },
    {
      value: "dashicons dashicons-forms",
      label: <p>&#xf314; dashicons-forms</p>
    },
    {
      value: "dashicons dashicons-testimonial",
      label: <p>&#xf473; dashicons-testimonial</p>
    },
    {
      value: "dashicons dashicons-portfolio",
      label: <p>&#xf322; dashicons-portfolio</p>
    },
    {
      value: "dashicons dashicons-book",
      label: <p>&#xf330; dashicons-book</p>
    },
    {
      value: "dashicons dashicons-book-alt",
      label: <p>&#xf331; dashicons-book-alt</p>
    },
    {
      value: "dashicons dashicons-download",
      label: <p>&#xf316; dashicons-download</p>
    },
    {
      value: "dashicons dashicons-upload",
      label: <p>&#xf317; dashicons-upload</p>
    },
    {
      value: "dashicons dashicons-backup",
      label: <p>&#xf321; dashicons-backup</p>
    },
    {
      value: "dashicons dashicons-clock",
      label: <p>&#xf469; dashicons-clock</p>
    },
    {
      value: "dashicons dashicons-lightbulb",
      label: <p>&#xf339; dashicons-lightbulb</p>
    },
    {
      value: "dashicons dashicons-microphone",
      label: <p>&#xf482; dashicons-microphone</p>
    },
    {
      value: "dashicons dashicons-desktop",
      label: <p>&#xf472; dashicons-desktop</p>
    },
    {
      value: "dashicons dashicons-laptop",
      label: <p>&#xf547; dashicons-laptop</p>
    },
    {
      value: "dashicons dashicons-tablet",
      label: <p>&#xf471; dashicons-tablet</p>
    },
    {
      value: "dashicons dashicons-smartphone",
      label: <p>&#xf470; dashicons-smartphone</p>
    },
    {
      value: "dashicons dashicons-phone",
      label: <p>&#xf525; dashicons-phone</p>
    },
    {
      value: "dashicons dashicons-index-card",
      label: <p>&#xf510; dashicons-index-card</p>
    },
    {
      value: "dashicons dashicons-carrot",
      label: <p>&#xf511; dashicons-carrot</p>
    },
    {
      value: "dashicons dashicons-building",
      label: <p>&#xf512; dashicons-building</p>
    },
    {
      value: "dashicons dashicons-store",
      label: <p>&#xf513; dashicons-store</p>
    },
    {
      value: "dashicons dashicons-album",
      label: <p>&#xf514; dashicons-album</p>
    },
    {
      value: "dashicons dashicons-palmtree",
      label: <p>&#xf527; dashicons-palmtree</p>
    },
    {
      value: "dashicons dashicons-tickets-alt",
      label: <p>&#xf524; dashicons-tickets-alt</p>
    },
    {
      value: "dashicons dashicons-money",
      label: <p>&#xf526; dashicons-money</p>
    },
    {
      value: "dashicons dashicons-smiley",
      label: <p>&#xf328; dashicons-smiley</p>
    },
    {
      value: "dashicons dashicons-thumbs-up",
      label: <p>&#xf529; dashicons-thumbs-up</p>
    },
    {
      value: "dashicons dashicons-thumbs-down",
      label: <p>&#xf542; dashicons-thumbs-down</p>
    },
    {
      value: "dashicons dashicons-layout",
      label: <p>&#xf538; dashicons-layout</p>
    },
    {
      value: "dashicons dashicons-paperclip",
      label: <p>&#xf546; dashicons-paperclip</p>
    }
  ];

  //Font Awesome Icons
  const ICONS = [
    {
      value: "",
      label: "none"
    },
    {
      value: "fa fa-glass",
      label: <p>&#xf000; fa-glass</p>
    },
    {
      value: "fa fa-music",
      label: <p>&#xf001; fa-music</p>
    },
    {
      value: "fa fa-search",
      label: <p>&#xf002; fa-search</p>
    },
    {
      value: "fa fa-envelope-o",
      label: <p>&#xf003; fa-envelope-o</p>
    },
    {
      value: "fa fa-heart",
      label: <p>&#xf004; fa-heart</p>
    },
    {
      value: "fa fa-star",
      label: <p>&#xf005; fa-star</p>
    },
    {
      value: "fa fa-star-o",
      label: <p>&#xf006; fa-star-o</p>
    },
    {
      value: "fa fa-user",
      label: <p>&#xf007; fa-user</p>
    },
    {
      value: "fa fa-film",
      label: <p>&#xf008; fa-film</p>
    },
    {
      value: "fa fa-th-large",
      label: <p>&#xf009; fa-th-large</p>
    },
    {
      value: "fa fa-th",
      label: <p>&#xf00a; fa-th</p>
    },
    {
      value: "fa fa-th-list",
      label: <p>&#xf00b; fa-th-list</p>
    },
    {
      value: "fa fa-check",
      label: <p>&#xf00c; fa-check</p>
    },
    {
      value: "fa fa-times",
      label: <p>&#xf00d; fa-times</p>
    },
    {
      value: "fa fa-search-plus",
      label: <p>&#xf00e; fa-search-plus</p>
    },
    {
      value: "fa fa-search-minus",
      label: <p>&#xf010; fa-search-minus</p>
    },
    {
      value: "fa fa-power-off",
      label: <p>&#xf011; fa-power-off</p>
    },
    {
      value: "fa fa-signal",
      label: <p>&#xf012; fa-signal</p>
    },
    {
      value: "fa fa-cog",
      label: <p>&#xf013; fa-cog</p>
    },
    {
      value: "fa fa-trash-o",
      label: <p>&#xf014; fa-trash-o</p>
    },
    {
      value: "fa fa-home",
      label: <p>&#xf015; fa-home</p>
    },
    {
      value: "fa fa-file-o",
      label: <p>&#xf016; fa-file-o</p>
    },
    {
      value: "fa fa-clock-o",
      label: <p>&#xf017; fa-clock-o</p>
    },
    {
      value: "fa fa-road",
      label: <p>&#xf018; fa-road</p>
    },
    {
      value: "fa fa-download",
      label: <p>&#xf019; fa-download</p>
    },
    {
      value: "fa fa-arrow-circle-o-down",
      label: <p>&#xf01a; fa-arrow-circle-o-down</p>
    },
    {
      value: "fa fa-arrow-circle-o-up",
      label: <p>&#xf01b; fa-arrow-circle-o-up</p>
    },
    {
      value: "fa fa-inbox",
      label: <p>&#xf01c; fa-inbox</p>
    },
    {
      value: "fa fa-play-circle-o",
      label: <p>&#xf01d; fa-play-circle-o</p>
    },
    {
      value: "fa fa-repeat",
      label: <p>&#xf01e; fa-repeat</p>
    },
    {
      value: "fa fa-refresh",
      label: <p>&#xf021; fa-refresh</p>
    },
    {
      value: "fa fa-list-alt",
      label: <p>&#xf022; fa-list-alt</p>
    },
    {
      value: "fa fa-lock",
      label: <p>&#xf023; fa-lock</p>
    },
    {
      value: "fa fa-flag",
      label: <p>&#xf024; fa-flag</p>
    },
    {
      value: "fa fa-headphones",
      label: <p>&#xf025; fa-headphones</p>
    },
    {
      value: "fa fa-volume-off",
      label: <p>&#xf026; fa-volume-off</p>
    },
    {
      value: "fa fa-volume-down",
      label: <p>&#xf027; fa-volume-down</p>
    },
    {
      value: "fa fa-volume-up",
      label: <p>&#xf028; fa-volume-up</p>
    },
    {
      value: "fa fa-qrcode",
      label: <p>&#xf029; fa-qrcode</p>
    },
    {
      value: "fa fa-barcode",
      label: <p>&#xf02a; fa-barcode</p>
    },
    {
      value: "fa fa-tag",
      label: <p>&#xf02b; fa-tag</p>
    },
    {
      value: "fa fa-tags",
      label: <p>&#xf02c; fa-tags</p>
    },
    {
      value: "fa fa-book",
      label: <p>&#xf02d; fa-book</p>
    },
    {
      value: "fa fa-bookmark",
      label: <p>&#xf02e; fa-bookmark</p>
    },
    {
      value: "fa fa-print",
      label: <p>&#xf02f; fa-print</p>
    },
    {
      value: "fa fa-camera",
      label: <p>&#xf030; fa-camera</p>
    },
    {
      value: "fa fa-font",
      label: <p>&#xf031; fa-font</p>
    },
    {
      value: "fa fa-bold",
      label: <p>&#xf032; fa-bold</p>
    },
    {
      value: "fa fa-italic",
      label: <p>&#xf033; fa-italic</p>
    },
    {
      value: "fa fa-text-height",
      label: <p>&#xf034; fa-text-height</p>
    },
    {
      value: "fa fa-text-width",
      label: <p>&#xf035; fa-text-width</p>
    },
    {
      value: "fa fa-align-left",
      label: <p>&#xf036; fa-align-left</p>
    },
    {
      value: "fa fa-align-center",
      label: <p>&#xf037; fa-align-center</p>
    },
    {
      value: "fa fa-align-right",
      label: <p>&#xf038; fa-align-right</p>
    },
    {
      value: "fa fa-align-justify",
      label: <p>&#xf039; fa-align-justify</p>
    },
    {
      value: "fa fa-list",
      label: <p>&#xf03a; fa-list</p>
    },
    {
      value: "fa fa-outdent",
      label: <p>&#xf03b; fa-outdent</p>
    },
    {
      value: "fa fa-indent",
      label: <p>&#xf03c; fa-indent</p>
    },
    {
      value: "fa fa-video-camera",
      label: <p>&#xf03d; fa-video-camera</p>
    },
    {
      value: "fa fa-picture-o",
      label: <p>&#xf03e; fa-picture-o</p>
    },
    {
      value: "fa fa-pencil",
      label: <p>&#xf040; fa-pencil</p>
    },
    {
      value: "fa fa-map-marker",
      label: <p>&#xf041; fa-map-marker</p>
    },
    {
      value: "fa fa-adjust",
      label: <p>&#xf042; fa-adjust</p>
    },
    {
      value: "fa fa-tint",
      label: <p>&#xf043; fa-tint</p>
    },
    {
      value: "fa fa-pencil-square-o",
      label: <p>&#xf044; fa-pencil-square-o</p>
    },
    {
      value: "fa fa-share-square-o",
      label: <p>&#xf045; fa-share-square-o</p>
    },
    {
      value: "fa fa-check-square-o",
      label: <p>&#xf046; fa-check-square-o</p>
    },
    {
      value: "fa fa-arrows",
      label: <p>&#xf047; fa-arrows</p>
    },
    {
      value: "fa fa-step-backward",
      label: <p>&#xf048; fa-step-backward</p>
    },
    {
      value: "fa fa-fast-backward",
      label: <p>&#xf049; fa-fast-backward</p>
    },
    {
      value: "fa fa-backward",
      label: <p>&#xf04a; fa-backward</p>
    },
    {
      value: "fa fa-play",
      label: <p>&#xf04b; fa-play</p>
    },
    {
      value: "fa fa-pause",
      label: <p>&#xf04c; fa-pause</p>
    },
    {
      value: "fa fa-stop",
      label: <p>&#xf04d; fa-stop</p>
    },
    {
      value: "fa fa-forward",
      label: <p>&#xf04e; fa-forward</p>
    },
    {
      value: "fa fa-fast-forward",
      label: <p>&#xf050; fa-fast-forward</p>
    },
    {
      value: "fa fa-step-forward",
      label: <p>&#xf051; fa-step-forward</p>
    },
    {
      value: "fa fa-eject",
      label: <p>&#xf052; fa-eject</p>
    },
    {
      value: "fa fa-chevron-left",
      label: <p>&#xf053; fa-chevron-left</p>
    },
    {
      value: "fa fa-chevron-right",
      label: <p>&#xf054; fa-chevron-right</p>
    },
    {
      value: "fa fa-plus-circle",
      label: <p>&#xf055; fa-plus-circle</p>
    },
    {
      value: "fa fa-minus-circle",
      label: <p>&#xf056; fa-minus-circle</p>
    },
    {
      value: "fa fa-times-circle",
      label: <p>&#xf057; fa-times-circle</p>
    },
    {
      value: "fa fa-check-circle",
      label: <p>&#xf058; fa-check-circle</p>
    },
    {
      value: "fa fa-question-circle",
      label: <p>&#xf059; fa-question-circle</p>
    },
    {
      value: "fa fa-info-circle",
      label: <p>&#xf05a; fa-info-circle</p>
    },
    {
      value: "fa fa-crosshairs",
      label: <p>&#xf05b; fa-crosshairs</p>
    },
    {
      value: "fa fa-times-circle-o",
      label: <p>&#xf05c; fa-times-circle-o</p>
    },
    {
      value: "fa fa-check-circle-o",
      label: <p>&#xf05d; fa-check-circle-o</p>
    },
    {
      value: "fa fa-ban",
      label: <p>&#xf05e; fa-ban</p>
    },
    {
      value: "fa fa-arrow-left",
      label: <p>&#xf060; fa-arrow-left</p>
    },
    {
      value: "fa fa-arrow-right",
      label: <p>&#xf061; fa-arrow-right</p>
    },
    {
      value: "fa fa-arrow-up",
      label: <p>&#xf062; fa-arrow-up</p>
    },
    {
      value: "fa fa-arrow-down",
      label: <p>&#xf063; fa-arrow-down</p>
    },
    {
      value: "fa fa-share",
      label: <p>&#xf064; fa-share</p>
    },
    {
      value: "fa fa-expand",
      label: <p>&#xf065; fa-expand</p>
    },
    {
      value: "fa fa-compress",
      label: <p>&#xf066; fa-compress</p>
    },
    {
      value: "fa fa-plus",
      label: <p>&#xf067; fa-plus</p>
    },
    {
      value: "fa fa-minus",
      label: <p>&#xf068; fa-minus</p>
    },
    {
      value: "fa fa-asterisk",
      label: <p>&#xf069; fa-asterisk</p>
    },
    {
      value: "fa fa-exclamation-circle",
      label: <p>&#xf06a; fa-exclamation-circle</p>
    },
    {
      value: "fa fa-gift",
      label: <p>&#xf06b; fa-gift</p>
    },
    {
      value: "fa fa-leaf",
      label: <p>&#xf06c; fa-leaf</p>
    },
    {
      value: "fa fa-fire",
      label: <p>&#xf06d; fa-fire</p>
    },
    {
      value: "fa fa-eye",
      label: <p>&#xf06e; fa-eye</p>
    },
    {
      value: "fa fa-eye-slash",
      label: <p>&#xf070; fa-eye-slash</p>
    },
    {
      value: "fa fa-exclamation-triangle",
      label: <p>&#xf071; fa-exclamation-triangle</p>
    },
    {
      value: "fa fa-plane",
      label: <p>&#xf072; fa-plane</p>
    },
    {
      value: "fa fa-calendar",
      label: <p>&#xf073; fa-calendar</p>
    },
    {
      value: "fa fa-random",
      label: <p>&#xf074; fa-random</p>
    },
    {
      value: "fa fa-comment",
      label: <p>&#xf075; fa-comment</p>
    },
    {
      value: "fa fa-magnet",
      label: <p>&#xf076; fa-magnet</p>
    },
    {
      value: "fa fa-chevron-up",
      label: <p>&#xf077; fa-chevron-up</p>
    },
    {
      value: "fa fa-chevron-down",
      label: <p>&#xf078; fa-chevron-down</p>
    },
    {
      value: "fa fa-retweet",
      label: <p>&#xf079; fa-retweet</p>
    },
    {
      value: "fa fa-shopping-cart",
      label: <p>&#xf07a; fa-shopping-cart</p>
    },
    {
      value: "fa fa-folder",
      label: <p>&#xf07b; fa-folder</p>
    },
    {
      value: "fa fa-folder-open",
      label: <p>&#xf07c; fa-folder-open</p>
    },
    {
      value: "fa fa-arrows-v",
      label: <p>&#xf07d; fa-arrows-v</p>
    },
    {
      value: "fa fa-arrows-h",
      label: <p>&#xf07e; fa-arrows-h</p>
    },
    {
      value: "fa fa-bar-chart",
      label: <p>&#xf080; fa-bar-chart</p>
    },
    {
      value: "fa fa-twitter-square",
      label: <p>&#xf081; fa-twitter-square</p>
    },
    {
      value: "fa fa-facebook-square",
      label: <p>&#xf082; fa-facebook-square</p>
    },
    {
      value: "fa fa-camera-retro",
      label: <p>&#xf083; fa-camera-retro</p>
    },
    {
      value: "fa fa-key",
      label: <p>&#xf084; fa-key</p>
    },
    {
      value: "fa fa-cogs",
      label: <p>&#xf085; fa-cogs</p>
    },
    {
      value: "fa fa-comments",
      label: <p>&#xf086; fa-comments</p>
    },
    {
      value: "fa fa-thumbs-o-up",
      label: <p>&#xf087; fa-thumbs-o-up</p>
    },
    {
      value: "fa fa-thumbs-o-down",
      label: <p>&#xf088; fa-thumbs-o-down</p>
    },
    {
      value: "fa fa-star-half",
      label: <p>&#xf089; fa-star-half</p>
    },
    {
      value: "fa fa-heart-o",
      label: <p>&#xf08a; fa-heart-o</p>
    },
    {
      value: "fa fa-sign-out",
      label: <p>&#xf08b; fa-sign-out</p>
    },
    {
      value: "fa fa-linkedin-square",
      label: <p>&#xf08c; fa-linkedin-square</p>
    },
    {
      value: "fa fa-thumb-tack",
      label: <p>&#xf08d; fa-thumb-tack</p>
    },
    {
      value: "fa fa-external-link",
      label: <p>&#xf08e; fa-external-link</p>
    },
    {
      value: "fa fa-sign-in",
      label: <p>&#xf090; fa-sign-in</p>
    },
    {
      value: "fa fa-trophy",
      label: <p>&#xf091; fa-trophy</p>
    },
    {
      value: "fa fa-github-square",
      label: <p>&#xf092; fa-github-square</p>
    },
    {
      value: "fa fa-upload",
      label: <p>&#xf093; fa-upload</p>
    },
    {
      value: "fa fa-lemon-o",
      label: <p>&#xf094; fa-lemon-o</p>
    },
    {
      value: "fa fa-phone",
      label: <p>&#xf095; fa-phone</p>
    },
    {
      value: "fa fa-square-o",
      label: <p>&#xf096; fa-square-o</p>
    },
    {
      value: "fa fa-bookmark-o",
      label: <p>&#xf097; fa-bookmark-o</p>
    },
    {
      value: "fa fa-phone-square",
      label: <p>&#xf098; fa-phone-square</p>
    },
    {
      value: "fa fa-twitter",
      label: <p>&#xf099; fa-twitter</p>
    },
    {
      value: "fa fa-facebook",
      label: <p>&#xf09a; fa-facebook</p>
    },
    {
      value: "fa fa-github",
      label: <p>&#xf09b; fa-github</p>
    },
    {
      value: "fa fa-unlock",
      label: <p>&#xf09c; fa-unlock</p>
    },
    {
      value: "fa fa-credit-card",
      label: <p>&#xf09d; fa-credit-card</p>
    },
    {
      value: "fa fa-rss",
      label: <p>&#xf09e; fa-rss</p>
    },
    {
      value: "fa fa-hdd-o",
      label: <p>&#xf0a0; fa-hdd-o</p>
    },
    {
      value: "fa fa-bullhorn",
      label: <p>&#xf0a1; fa-bullhorn</p>
    },
    {
      value: "fa fa-bell",
      label: <p>&#xf0f3; fa-bell</p>
    },
    {
      value: "fa fa-certificate",
      label: <p>&#xf0a3; fa-certificate</p>
    },
    {
      value: "fa fa-hand-o-right",
      label: <p>&#xf0a4; fa-hand-o-right</p>
    },
    {
      value: "fa fa-hand-o-left",
      label: <p>&#xf0a5; fa-hand-o-left</p>
    },
    {
      value: "fa fa-hand-o-up",
      label: <p>&#xf0a6; fa-hand-o-up</p>
    },
    {
      value: "fa fa-hand-o-down",
      label: <p>&#xf0a7; fa-hand-o-down</p>
    },
    {
      value: "fa fa-arrow-circle-left",
      label: <p>&#xf0a8; fa-arrow-circle-left</p>
    },
    {
      value: "fa fa-arrow-circle-right",
      label: <p>&#xf0a9; fa-arrow-circle-right</p>
    },
    {
      value: "fa fa-arrow-circle-up",
      label: <p>&#xf0aa; fa-arrow-circle-up</p>
    },
    {
      value: "fa fa-arrow-circle-down",
      label: <p>&#xf0ab; fa-arrow-circle-down</p>
    },
    {
      value: "fa fa-globe",
      label: <p>&#xf0ac; fa-globe</p>
    },
    {
      value: "fa fa-wrench",
      label: <p>&#xf0ad; fa-wrench</p>
    },
    {
      value: "fa fa-tasks",
      label: <p>&#xf0ae; fa-tasks</p>
    },
    {
      value: "fa fa-filter",
      label: <p>&#xf0b0; fa-filter</p>
    },
    {
      value: "fa fa-briefcase",
      label: <p>&#xf0b1; fa-briefcase</p>
    },
    {
      value: "fa fa-arrows-alt",
      label: <p>&#xf0b2; fa-arrows-alt</p>
    },
    {
      value: "fa fa-users",
      label: <p>&#xf0c0; fa-users</p>
    },
    {
      value: "fa fa-link",
      label: <p>&#xf0c1; fa-link</p>
    },
    {
      value: "fa fa-cloud",
      label: <p>&#xf0c2; fa-cloud</p>
    },
    {
      value: "fa fa-flask",
      label: <p>&#xf0c3; fa-flask</p>
    },
    {
      value: "fa fa-scissors",
      label: <p>&#xf0c4; fa-scissors</p>
    },
    {
      value: "fa fa-files-o",
      label: <p>&#xf0c5; fa-files-o</p>
    },
    {
      value: "fa fa-paperclip",
      label: <p>&#xf0c6; fa-paperclip</p>
    },
    {
      value: "fa fa-floppy-o",
      label: <p>&#xf0c7; fa-floppy-o</p>
    },
    {
      value: "fa fa-square",
      label: <p>&#xf0c8; fa-square</p>
    },
    {
      value: "fa fa-bars",
      label: <p>&#xf0c9; fa-bars</p>
    },
    {
      value: "fa fa-list-ul",
      label: <p>&#xf0ca; fa-list-ul</p>
    },
    {
      value: "fa fa-list-ol",
      label: <p>&#xf0cb; fa-list-ol</p>
    },
    {
      value: "fa fa-strikethrough",
      label: <p>&#xf0cc; fa-strikethrough</p>
    },
    {
      value: "fa fa-underline",
      label: <p>&#xf0cd; fa-underline</p>
    },
    {
      value: "fa fa-table",
      label: <p>&#xf0ce; fa-table</p>
    },
    {
      value: "fa fa-magic",
      label: <p>&#xf0d0; fa-magic</p>
    },
    {
      value: "fa fa-truck",
      label: <p>&#xf0d1; fa-truck</p>
    },
    {
      value: "fa fa-pinterest",
      label: <p>&#xf0d2; fa-pinterest</p>
    },
    {
      value: "fa fa-pinterest-square",
      label: <p>&#xf0d3; fa-pinterest-square</p>
    },
    {
      value: "fa fa-google-plus-square",
      label: <p>&#xf0d4; fa-google-plus-square</p>
    },
    {
      value: "fa fa-google-plus",
      label: <p>&#xf0d5; fa-google-plus</p>
    },
    {
      value: "fa fa-money",
      label: <p>&#xf0d6; fa-money</p>
    },
    {
      value: "fa fa-caret-down",
      label: <p>&#xf0d7; fa-caret-down</p>
    },
    {
      value: "fa fa-caret-up",
      label: <p>&#xf0d8; fa-caret-up</p>
    },
    {
      value: "fa fa-caret-left",
      label: <p>&#xf0d9; fa-caret-left</p>
    },
    {
      value: "fa fa-caret-right",
      label: <p>&#xf0da; fa-caret-right</p>
    },
    {
      value: "fa fa-columns",
      label: <p>&#xf0db; fa-columns</p>
    },
    {
      value: "fa fa-sort",
      label: <p>&#xf0dc; fa-sort</p>
    },
    {
      value: "fa fa-sort-desc",
      label: <p>&#xf0dd; fa-sort-desc</p>
    },
    {
      value: "fa fa-sort-asc",
      label: <p>&#xf0de; fa-sort-asc</p>
    },
    {
      value: "fa fa-envelope",
      label: <p>&#xf0e0; fa-envelope</p>
    },
    {
      value: "fa fa-linkedin",
      label: <p>&#xf0e1; fa-linkedin</p>
    },
    {
      value: "fa fa-undo",
      label: <p>&#xf0e2; fa-undo</p>
    },
    {
      value: "fa fa-gavel",
      label: <p>&#xf0e3; fa-gavel</p>
    },
    {
      value: "fa fa-tachometer",
      label: <p>&#xf0e4; fa-tachometer</p>
    },
    {
      value: "fa fa-comment-o",
      label: <p>&#xf0e5; fa-comment-o</p>
    },
    {
      value: "fa fa-comments-o",
      label: <p>&#xf0e6; fa-comments-o</p>
    },
    {
      value: "fa fa-bolt",
      label: <p>&#xf0e7; fa-bolt</p>
    },
    {
      value: "fa fa-sitemap",
      label: <p>&#xf0e8; fa-sitemap</p>
    },
    {
      value: "fa fa-umbrella",
      label: <p>&#xf0e9; fa-umbrella</p>
    },
    {
      value: "fa fa-clipboard",
      label: <p>&#xf0ea; fa-clipboard</p>
    },
    {
      value: "fa fa-lightbulb-o",
      label: <p>&#xf0eb; fa-lightbulb-o</p>
    },
    {
      value: "fa fa-exchange",
      label: <p>&#xf0ec; fa-exchange</p>
    },
    {
      value: "fa fa-cloud-download",
      label: <p>&#xf0ed; fa-cloud-download</p>
    },
    {
      value: "fa fa-cloud-upload",
      label: <p>&#xf0ee; fa-cloud-upload</p>
    },
    {
      value: "fa fa-user-md",
      label: <p>&#xf0f0; fa-user-md</p>
    },
    {
      value: "fa fa-stethoscope",
      label: <p>&#xf0f1; fa-stethoscope</p>
    },
    {
      value: "fa fa-suitcase",
      label: <p>&#xf0f2; fa-suitcase</p>
    },
    {
      value: "fa fa-bell-o",
      label: <p>&#xf0a2; fa-bell-o</p>
    },
    {
      value: "fa fa-coffee",
      label: <p>&#xf0f4; fa-coffee</p>
    },
    {
      value: "fa fa-cutlery",
      label: <p>&#xf0f5; fa-cutlery</p>
    },
    {
      value: "fa fa-file-text-o",
      label: <p>&#xf0f6; fa-file-text-o</p>
    },
    {
      value: "fa fa-building-o",
      label: <p>&#xf0f7; fa-building-o</p>
    },
    {
      value: "fa fa-hospital-o",
      label: <p>&#xf0f8; fa-hospital-o</p>
    },
    {
      value: "fa fa-ambulance",
      label: <p>&#xf0f9; fa-ambulance</p>
    },
    {
      value: "fa fa-medkit",
      label: <p>&#xf0fa; fa-medkit</p>
    },
    {
      value: "fa fa-fighter-jet",
      label: <p>&#xf0fb; fa-fighter-jet</p>
    },
    {
      value: "fa fa-beer",
      label: <p>&#xf0fc; fa-beer</p>
    },
    {
      value: "fa fa-h-square",
      label: <p>&#xf0fd; fa-h-square</p>
    },
    {
      value: "fa fa-plus-square",
      label: <p>&#xf0fe; fa-plus-square</p>
    },
    {
      value: "fa fa-angle-double-left",
      label: <p>&#xf100; fa-angle-double-left</p>
    },
    {
      value: "fa fa-angle-double-right",
      label: <p>&#xf101; fa-angle-double-right</p>
    },
    {
      value: "fa fa-angle-double-up",
      label: <p>&#xf102; fa-angle-double-up</p>
    },
    {
      value: "fa fa-angle-double-down",
      label: <p>&#xf103; fa-angle-double-down</p>
    },
    {
      value: "fa fa-angle-left",
      label: <p>&#xf104; fa-angle-left</p>
    },
    {
      value: "fa fa-angle-right",
      label: <p>&#xf105; fa-angle-right</p>
    },
    {
      value: "fa fa-angle-up",
      label: <p>&#xf106; fa-angle-up</p>
    },
    {
      value: "fa fa-angle-down",
      label: <p>&#xf107; fa-angle-down</p>
    },
    {
      value: "fa fa-desktop",
      label: <p>&#xf108; fa-desktop</p>
    },
    {
      value: "fa fa-laptop",
      label: <p>&#xf109; fa-laptop</p>
    },
    {
      value: "fa fa-tablet",
      label: <p>&#xf10a; fa-tablet</p>
    },
    {
      value: "fa fa-mobile",
      label: <p>&#xf10b; fa-mobile</p>
    },
    {
      value: "fa fa-circle-o",
      label: <p>&#xf10c; fa-circle-o</p>
    },
    {
      value: "fa fa-quote-left",
      label: <p>&#xf10d; fa-quote-left</p>
    },
    {
      value: "fa fa-quote-right",
      label: <p>&#xf10e; fa-quote-right</p>
    },
    {
      value: "fa fa-spinner",
      label: <p>&#xf110; fa-spinner</p>
    },
    {
      value: "fa fa-circle",
      label: <p>&#xf111; fa-circle</p>
    },
    {
      value: "fa fa-reply",
      label: <p>&#xf112; fa-reply</p>
    },
    {
      value: "fa fa-github-alt",
      label: <p>&#xf113; fa-github-alt</p>
    },
    {
      value: "fa fa-folder-o",
      label: <p>&#xf114; fa-folder-o</p>
    },
    {
      value: "fa fa-folder-open-o",
      label: <p>&#xf115; fa-folder-open-o</p>
    },
    {
      value: "fa fa-smile-o",
      label: <p>&#xf118; fa-smile-o</p>
    },
    {
      value: "fa fa-frown-o",
      label: <p>&#xf119; fa-frown-o</p>
    },
    {
      value: "fa fa-meh-o",
      label: <p>&#xf11a; fa-meh-o</p>
    },
    {
      value: "fa fa-gamepad",
      label: <p>&#xf11b; fa-gamepad</p>
    },
    {
      value: "fa fa-keyboard-o",
      label: <p>&#xf11c; fa-keyboard-o</p>
    },
    {
      value: "fa fa-flag-o",
      label: <p>&#xf11d; fa-flag-o</p>
    },
    {
      value: "fa fa-flag-checkered",
      label: <p>&#xf11e; fa-flag-checkered</p>
    },
    {
      value: "fa fa-terminal",
      label: <p>&#xf120; fa-terminal</p>
    },
    {
      value: "fa fa-code",
      label: <p>&#xf121; fa-code</p>
    },
    {
      value: "fa fa-reply-all",
      label: <p>&#xf122; fa-reply-all</p>
    },
    {
      value: "fa fa-star-half-o",
      label: <p>&#xf123; fa-star-half-o</p>
    },
    {
      value: "fa fa-location-arrow",
      label: <p>&#xf124; fa-location-arrow</p>
    },
    {
      value: "fa fa-crop",
      label: <p>&#xf125; fa-crop</p>
    },
    {
      value: "fa fa-code-fork",
      label: <p>&#xf126; fa-code-fork</p>
    },
    {
      value: "fa fa-chain-broken",
      label: <p>&#xf127; fa-chain-broken</p>
    },
    {
      value: "fa fa-question",
      label: <p>&#xf128; fa-question</p>
    },
    {
      value: "fa fa-info",
      label: <p>&#xf129; fa-info</p>
    },
    {
      value: "fa fa-exclamation",
      label: <p>&#xf12a; fa-exclamation</p>
    },
    {
      value: "fa fa-superscript",
      label: <p>&#xf12b; fa-superscript</p>
    },
    {
      value: "fa fa-subscript",
      label: <p>&#xf12c; fa-subscript</p>
    },
    {
      value: "fa fa-eraser",
      label: <p>&#xf12d; fa-eraser</p>
    },
    {
      value: "fa fa-puzzle-piece",
      label: <p>&#xf12e; fa-puzzle-piece</p>
    },
    {
      value: "fa fa-microphone",
      label: <p>&#xf130; fa-microphone</p>
    },
    {
      value: "fa fa-microphone-slash",
      label: <p>&#xf131; fa-microphone-slash</p>
    },
    {
      value: "fa fa-shield",
      label: <p>&#xf132; fa-shield</p>
    },
    {
      value: "fa fa-calendar-o",
      label: <p>&#xf133; fa-calendar-o</p>
    },
    {
      value: "fa fa-fire-extinguisher",
      label: <p>&#xf134; fa-fire-extinguisher</p>
    },
    {
      value: "fa fa-rocket",
      label: <p>&#xf135; fa-rocket</p>
    },
    {
      value: "fa fa-maxcdn",
      label: <p>&#xf136; fa-maxcdn</p>
    },
    {
      value: "fa fa-chevron-circle-left",
      label: <p>&#xf137; fa-chevron-circle-left</p>
    },
    {
      value: "fa fa-chevron-circle-right",
      label: <p>&#xf138; fa-chevron-circle-right</p>
    },
    {
      value: "fa fa-chevron-circle-up",
      label: <p>&#xf139; fa-chevron-circle-up</p>
    },
    {
      value: "fa fa-chevron-circle-down",
      label: <p>&#xf13a; fa-chevron-circle-down</p>
    },
    {
      value: "fa fa-html5",
      label: <p>&#xf13b; fa-html5</p>
    },
    {
      value: "fa fa-css3",
      label: <p>&#xf13c; fa-css3</p>
    },
    {
      value: "fa fa-anchor",
      label: <p>&#xf13d; fa-anchor</p>
    },
    {
      value: "fa fa-unlock-alt",
      label: <p>&#xf13e; fa-unlock-alt</p>
    },
    {
      value: "fa fa-bullseye",
      label: <p>&#xf140; fa-bullseye</p>
    },
    {
      value: "fa fa-ellipsis-h",
      label: <p>&#xf141; fa-ellipsis-h</p>
    },
    {
      value: "fa fa-ellipsis-v",
      label: <p>&#xf142; fa-ellipsis-v</p>
    },
    {
      value: "fa fa-rss-square",
      label: <p>&#xf143; fa-rss-square</p>
    },
    {
      value: "fa fa-play-circle",
      label: <p>&#xf144; fa-play-circle</p>
    },
    {
      value: "fa fa-ticket",
      label: <p>&#xf145; fa-ticket</p>
    },
    {
      value: "fa fa-minus-square",
      label: <p>&#xf146; fa-minus-square</p>
    },
    {
      value: "fa fa-minus-square-o",
      label: <p>&#xf147; fa-minus-square-o</p>
    },
    {
      value: "fa fa-level-up",
      label: <p>&#xf148; fa-level-up</p>
    },
    {
      value: "fa fa-level-down",
      label: <p>&#xf149; fa-level-down</p>
    },
    {
      value: "fa fa-check-square",
      label: <p>&#xf14a; fa-check-square</p>
    },
    {
      value: "fa fa-pencil-square",
      label: <p>&#xf14b; fa-pencil-square</p>
    },
    {
      value: "fa fa-external-link-square",
      label: <p>&#xf14c; fa-external-link-square</p>
    },
    {
      value: "fa fa-share-square",
      label: <p>&#xf14d; fa-share-square</p>
    },
    {
      value: "fa fa-compass",
      label: <p>&#xf14e; fa-compass</p>
    },
    {
      value: "fa fa-caret-square-o-down",
      label: <p>&#xf150; fa-caret-square-o-down</p>
    },
    {
      value: "fa fa-caret-square-o-up",
      label: <p>&#xf151; fa-caret-square-o-up</p>
    },
    {
      value: "fa fa-caret-square-o-right",
      label: <p>&#xf152; fa-caret-square-o-right</p>
    },
    {
      value: "fa fa-eur",
      label: <p>&#xf153; fa-eur</p>
    },
    {
      value: "fa fa-gbp",
      label: <p>&#xf154; fa-gbp</p>
    },
    {
      value: "fa fa-usd",
      label: <p>&#xf155; fa-usd</p>
    },
    {
      value: "fa fa-inr",
      label: <p>&#xf156; fa-inr</p>
    },
    {
      value: "fa fa-jpy",
      label: <p>&#xf157; fa-jpy</p>
    },
    {
      value: "fa fa-rub",
      label: <p>&#xf158; fa-rub</p>
    },
    {
      value: "fa fa-krw",
      label: <p>&#xf159; fa-krw</p>
    },
    {
      value: "fa fa-btc",
      label: <p>&#xf15a; fa-btc</p>
    },
    {
      value: "fa fa-file",
      label: <p>&#xf15b; fa-file</p>
    },
    {
      value: "fa fa-file-text",
      label: <p>&#xf15c; fa-file-text</p>
    },
    {
      value: "fa fa-sort-alpha-asc",
      label: <p>&#xf15d; fa-sort-alpha-asc</p>
    },
    {
      value: "fa fa-sort-alpha-desc",
      label: <p>&#xf15e; fa-sort-alpha-desc</p>
    },
    {
      value: "fa fa-sort-amount-asc",
      label: <p>&#xf160; fa-sort-amount-asc</p>
    },
    {
      value: "fa fa-sort-amount-desc",
      label: <p>&#xf161; fa-sort-amount-desc</p>
    },
    {
      value: "fa fa-sort-numeric-asc",
      label: <p>&#xf162; fa-sort-numeric-asc</p>
    },
    {
      value: "fa fa-sort-numeric-desc",
      label: <p>&#xf163; fa-sort-numeric-desc</p>
    },
    {
      value: "fa fa-thumbs-up",
      label: <p>&#xf164; fa-thumbs-up</p>
    },
    {
      value: "fa fa-thumbs-down",
      label: <p>&#xf165; fa-thumbs-down</p>
    },
    {
      value: "fa fa-youtube-square",
      label: <p>&#xf166; fa-youtube-square</p>
    },
    {
      value: "fa fa-youtube",
      label: <p>&#xf167; fa-youtube</p>
    },
    {
      value: "fa fa-xing",
      label: <p>&#xf168; fa-xing</p>
    },
    {
      value: "fa fa-xing-square",
      label: <p>&#xf169; fa-xing-square</p>
    },
    {
      value: "fa fa-youtube-play",
      label: <p>&#xf16a; fa-youtube-play</p>
    },
    {
      value: "fa fa-dropbox",
      label: <p>&#xf16b; fa-dropbox</p>
    },
    {
      value: "fa fa-stack-overflow",
      label: <p>&#xf16c; fa-stack-overflow</p>
    },
    {
      value: "fa fa-instagram",
      label: <p>&#xf16d; fa-instagram</p>
    },
    {
      value: "fa fa-flickr",
      label: <p>&#xf16e; fa-flickr</p>
    },
    {
      value: "fa fa-adn",
      label: <p>&#xf170; fa-adn</p>
    },
    {
      value: "fa fa-bitbucket",
      label: <p>&#xf171; fa-bitbucket</p>
    },
    {
      value: "fa fa-bitbucket-square",
      label: <p>&#xf172; fa-bitbucket-square</p>
    },
    {
      value: "fa fa-tumblr",
      label: <p>&#xf173; fa-tumblr</p>
    },
    {
      value: "fa fa-tumblr-square",
      label: <p>&#xf174; fa-tumblr-square</p>
    },
    {
      value: "fa fa-long-arrow-down",
      label: <p>&#xf175; fa-long-arrow-down</p>
    },
    {
      value: "fa fa-long-arrow-up",
      label: <p>&#xf176; fa-long-arrow-up</p>
    },
    {
      value: "fa fa-long-arrow-left",
      label: <p>&#xf177; fa-long-arrow-left</p>
    },
    {
      value: "fa fa-long-arrow-right",
      label: <p>&#xf178; fa-long-arrow-right</p>
    },
    {
      value: "fa fa-apple",
      label: <p>&#xf179; fa-apple</p>
    },
    {
      value: "fa fa-windows",
      label: <p>&#xf17a; fa-windows</p>
    },
    {
      value: "fa fa-android",
      label: <p>&#xf17b; fa-android</p>
    },
    {
      value: "fa fa-linux",
      label: <p>&#xf17c; fa-linux</p>
    },
    {
      value: "fa fa-dribbble",
      label: <p>&#xf17d; fa-dribbble</p>
    },
    {
      value: "fa fa-skype",
      label: <p>&#xf17e; fa-skype</p>
    },
    {
      value: "fa fa-foursquare",
      label: <p>&#xf180; fa-foursquare</p>
    },
    {
      value: "fa fa-trello",
      label: <p>&#xf181; fa-trello</p>
    },
    {
      value: "fa fa-female",
      label: <p>&#xf182; fa-female</p>
    },
    {
      value: "fa fa-male",
      label: <p>&#xf183; fa-male</p>
    },
    {
      value: "fa fa-gratipay",
      label: <p>&#xf184; fa-gratipay</p>
    },
    {
      value: "fa fa-sun-o",
      label: <p>&#xf185; fa-sun-o</p>
    },
    {
      value: "fa fa-moon-o",
      label: <p>&#xf186; fa-moon-o</p>
    },
    {
      value: "fa fa-archive",
      label: <p>&#xf187; fa-archive</p>
    },
    {
      value: "fa fa-bug",
      label: <p>&#xf188; fa-bug</p>
    },
    {
      value: "fa fa-vk",
      label: <p>&#xf189; fa-vk</p>
    },
    {
      value: "fa fa-weibo",
      label: <p>&#xf18a; fa-weibo</p>
    },
    {
      value: "fa fa-renren",
      label: <p>&#xf18b; fa-renren</p>
    },
    {
      value: "fa fa-pagelines",
      label: <p>&#xf18c; fa-pagelines</p>
    },
    {
      value: "fa fa-stack-exchange",
      label: <p>&#xf18d; fa-stack-exchange</p>
    },
    {
      value: "fa fa-arrow-circle-o-right",
      label: <p>&#xf18e; fa-arrow-circle-o-right</p>
    },
    {
      value: "fa fa-arrow-circle-o-left",
      label: <p>&#xf190; fa-arrow-circle-o-left</p>
    },
    {
      value: "fa fa-caret-square-o-left",
      label: <p>&#xf191; fa-caret-square-o-left</p>
    },
    {
      value: "fa fa-dot-circle-o",
      label: <p>&#xf192; fa-dot-circle-o</p>
    },
    {
      value: "fa fa-wheelchair",
      label: <p>&#xf193; fa-wheelchair</p>
    },
    {
      value: "fa fa-vimeo-square",
      label: <p>&#xf194; fa-vimeo-square</p>
    },
    {
      value: "fa fa-try",
      label: <p>&#xf195; fa-try</p>
    },
    {
      value: "fa fa-plus-square-o",
      label: <p>&#xf196; fa-plus-square-o</p>
    },
    {
      value: "fa fa-space-shuttle",
      label: <p>&#xf197; fa-space-shuttle</p>
    },
    {
      value: "fa fa-slack",
      label: <p>&#xf198; fa-slack</p>
    },
    {
      value: "fa fa-envelope-square",
      label: <p>&#xf199; fa-envelope-square</p>
    },
    {
      value: "fa fa-wordpress",
      label: <p>&#xf19a; fa-wordpress</p>
    },
    {
      value: "fa fa-openid",
      label: <p>&#xf19b; fa-openid</p>
    },
    {
      value: "fa fa-university",
      label: <p>&#xf19c; fa-university</p>
    },
    {
      value: "fa fa-graduation-cap",
      label: <p>&#xf19d; fa-graduation-cap</p>
    },
    {
      value: "fa fa-yahoo",
      label: <p>&#xf19e; fa-yahoo</p>
    },
    {
      value: "fa fa-google",
      label: <p>&#xf1a0; fa-google</p>
    },
    {
      value: "fa fa-reddit",
      label: <p>&#xf1a1; fa-reddit</p>
    },
    {
      value: "fa fa-reddit-square",
      label: <p>&#xf1a2; fa-reddit-square</p>
    },
    {
      value: "fa fa-stumbleupon-circle",
      label: <p>&#xf1a3; fa-stumbleupon-circle</p>
    },
    {
      value: "fa fa-stumbleupon",
      label: <p>&#xf1a4; fa-stumbleupon</p>
    },
    {
      value: "fa fa-delicious",
      label: <p>&#xf1a5; fa-delicious</p>
    },
    {
      value: "fa fa-digg",
      label: <p>&#xf1a6; fa-digg</p>
    },
    {
      value: "fa fa-pied-piper-pp",
      label: <p>&#xf1a7; fa-pied-piper-pp</p>
    },
    {
      value: "fa fa-pied-piper-alt",
      label: <p>&#xf1a8; fa-pied-piper-alt</p>
    },
    {
      value: "fa fa-drupal",
      label: <p>&#xf1a9; fa-drupal</p>
    },
    {
      value: "fa fa-joomla",
      label: <p>&#xf1aa; fa-joomla</p>
    },
    {
      value: "fa fa-language",
      label: <p>&#xf1ab; fa-language</p>
    },
    {
      value: "fa fa-fax",
      label: <p>&#xf1ac; fa-fax</p>
    },
    {
      value: "fa fa-building",
      label: <p>&#xf1ad; fa-building</p>
    },
    {
      value: "fa fa-child",
      label: <p>&#xf1ae; fa-child</p>
    },
    {
      value: "fa fa-paw",
      label: <p>&#xf1b0; fa-paw</p>
    },
    {
      value: "fa fa-spoon",
      label: <p>&#xf1b1; fa-spoon</p>
    },
    {
      value: "fa fa-cube",
      label: <p>&#xf1b2; fa-cube</p>
    },
    {
      value: "fa fa-cubes",
      label: <p>&#xf1b3; fa-cubes</p>
    },
    {
      value: "fa fa-behance",
      label: <p>&#xf1b4; fa-behance</p>
    },
    {
      value: "fa fa-behance-square",
      label: <p>&#xf1b5; fa-behance-square</p>
    },
    {
      value: "fa fa-steam",
      label: <p>&#xf1b6; fa-steam</p>
    },
    {
      value: "fa fa-steam-square",
      label: <p>&#xf1b7; fa-steam-square</p>
    },
    {
      value: "fa fa-recycle",
      label: <p>&#xf1b8; fa-recycle</p>
    },
    {
      value: "fa fa-car",
      label: <p>&#xf1b9; fa-car</p>
    },
    {
      value: "fa fa-taxi",
      label: <p>&#xf1ba; fa-taxi</p>
    },
    {
      value: "fa fa-tree",
      label: <p>&#xf1bb; fa-tree</p>
    },
    {
      value: "fa fa-spotify",
      label: <p>&#xf1bc; fa-spotify</p>
    },
    {
      value: "fa fa-deviantart",
      label: <p>&#xf1bd; fa-deviantart</p>
    },
    {
      value: "fa fa-soundcloud",
      label: <p>&#xf1be; fa-soundcloud</p>
    },
    {
      value: "fa fa-database",
      label: <p>&#xf1c0; fa-database</p>
    },
    {
      value: "fa fa-file-pdf-o",
      label: <p>&#xf1c1; fa-file-pdf-o</p>
    },
    {
      value: "fa fa-file-word-o",
      label: <p>&#xf1c2; fa-file-word-o</p>
    },
    {
      value: "fa fa-file-excel-o",
      label: <p>&#xf1c3; fa-file-excel-o</p>
    },
    {
      value: "fa fa-file-powerpoint-o",
      label: <p>&#xf1c4; fa-file-powerpoint-o</p>
    },
    {
      value: "fa fa-file-image-o",
      label: <p>&#xf1c5; fa-file-image-o</p>
    },
    {
      value: "fa fa-file-archive-o",
      label: <p>&#xf1c6; fa-file-archive-o</p>
    },
    {
      value: "fa fa-file-audio-o",
      label: <p>&#xf1c7; fa-file-audio-o</p>
    },
    {
      value: "fa fa-file-video-o",
      label: <p>&#xf1c8; fa-file-video-o</p>
    },
    {
      value: "fa fa-file-code-o",
      label: <p>&#xf1c9; fa-file-code-o</p>
    },
    {
      value: "fa fa-vine",
      label: <p>&#xf1ca; fa-vine</p>
    },
    {
      value: "fa fa-codepen",
      label: <p>&#xf1cb; fa-codepen</p>
    },
    {
      value: "fa fa-jsfiddle",
      label: <p>&#xf1cc; fa-jsfiddle</p>
    },
    {
      value: "fa fa-life-ring",
      label: <p>&#xf1cd; fa-life-ring</p>
    },
    {
      value: "fa fa-circle-o-notch",
      label: <p>&#xf1ce; fa-circle-o-notch</p>
    },
    {
      value: "fa fa-rebel",
      label: <p>&#xf1d0; fa-rebel</p>
    },
    {
      value: "fa fa-empire",
      label: <p>&#xf1d1; fa-empire</p>
    },
    {
      value: "fa fa-git-square",
      label: <p>&#xf1d2; fa-git-square</p>
    },
    {
      value: "fa fa-git",
      label: <p>&#xf1d3; fa-git</p>
    },
    {
      value: "fa fa-hacker-news",
      label: <p>&#xf1d4; fa-hacker-news</p>
    },
    {
      value: "fa fa-tencent-weibo",
      label: <p>&#xf1d5; fa-tencent-weibo</p>
    },
    {
      value: "fa fa-qq",
      label: <p>&#xf1d6; fa-qq</p>
    },
    {
      value: "fa fa-weixin",
      label: <p>&#xf1d7; fa-weixin</p>
    },
    {
      value: "fa fa-paper-plane",
      label: <p>&#xf1d8; fa-paper-plane</p>
    },
    {
      value: "fa fa-paper-plane-o",
      label: <p>&#xf1d9; fa-paper-plane-o</p>
    },
    {
      value: "fa fa-history",
      label: <p>&#xf1da; fa-history</p>
    },
    {
      value: "fa fa-circle-thin",
      label: <p>&#xf1db; fa-circle-thin</p>
    },
    {
      value: "fa fa-header",
      label: <p>&#xf1dc; fa-header</p>
    },
    {
      value: "fa fa-paragraph",
      label: <p>&#xf1dd; fa-paragraph</p>
    },
    {
      value: "fa fa-sliders",
      label: <p>&#xf1de; fa-sliders</p>
    },
    {
      value: "fa fa-share-alt",
      label: <p>&#xf1e0; fa-share-alt</p>
    },
    {
      value: "fa fa-share-alt-square",
      label: <p>&#xf1e1; fa-share-alt-square</p>
    },
    {
      value: "fa fa-bomb",
      label: <p>&#xf1e2; fa-bomb</p>
    },
    {
      value: "fa fa-futbol-o",
      label: <p>&#xf1e3; fa-futbol-o</p>
    },
    {
      value: "fa fa-tty",
      label: <p>&#xf1e4; fa-tty</p>
    },
    {
      value: "fa fa-binoculars",
      label: <p>&#xf1e5; fa-binoculars</p>
    },
    {
      value: "fa fa-plug",
      label: <p>&#xf1e6; fa-plug</p>
    },
    {
      value: "fa fa-slideshare",
      label: <p>&#xf1e7; fa-slideshare</p>
    },
    {
      value: "fa fa-twitch",
      label: <p>&#xf1e8; fa-twitch</p>
    },
    {
      value: "fa fa-yelp",
      label: <p>&#xf1e9; fa-yelp</p>
    },
    {
      value: "fa fa-newspaper-o",
      label: <p>&#xf1ea; fa-newspaper-o</p>
    },
    {
      value: "fa fa-wifi",
      label: <p>&#xf1eb; fa-wifi</p>
    },
    {
      value: "fa fa-calculator",
      label: <p>&#xf1ec; fa-calculator</p>
    },
    {
      value: "fa fa-paypal",
      label: <p>&#xf1ed; fa-paypal</p>
    },
    {
      value: "fa fa-google-wallet",
      label: <p>&#xf1ee; fa-google-wallet</p>
    },
    {
      value: "fa fa-cc-visa",
      label: <p>&#xf1f0; fa-cc-visa</p>
    },
    {
      value: "fa fa-cc-mastercard",
      label: <p>&#xf1f1; fa-cc-mastercard</p>
    },
    {
      value: "fa fa-cc-discover",
      label: <p>&#xf1f2; fa-cc-discover</p>
    },
    {
      value: "fa fa-cc-amex",
      label: <p>&#xf1f3; fa-cc-amex</p>
    },
    {
      value: "fa fa-cc-paypal",
      label: <p>&#xf1f4; fa-cc-paypal</p>
    },
    {
      value: "fa fa-cc-stripe",
      label: <p>&#xf1f5; fa-cc-stripe</p>
    },
    {
      value: "fa fa-bell-slash",
      label: <p>&#xf1f6; fa-bell-slash</p>
    },
    {
      value: "fa fa-bell-slash-o",
      label: <p>&#xf1f7; fa-bell-slash-o</p>
    },
    {
      value: "fa fa-trash",
      label: <p>&#xf1f8; fa-trash</p>
    },
    {
      value: "fa fa-copyright",
      label: <p>&#xf1f9; fa-copyright</p>
    },
    {
      value: "fa fa-at",
      label: <p>&#xf1fa; fa-at</p>
    },
    {
      value: "fa fa-eyedropper",
      label: <p>&#xf1fb; fa-eyedropper</p>
    },
    {
      value: "fa fa-paint-brush",
      label: <p>&#xf1fc; fa-paint-brush</p>
    },
    {
      value: "fa fa-birthday-cake",
      label: <p>&#xf1fd; fa-birthday-cake</p>
    },
    {
      value: "fa fa-area-chart",
      label: <p>&#xf1fe; fa-area-chart</p>
    },
    {
      value: "fa fa-pie-chart",
      label: <p>&#xf200; fa-pie-chart</p>
    },
    {
      value: "fa fa-line-chart",
      label: <p>&#xf201; fa-line-chart</p>
    },
    {
      value: "fa fa-lastfm",
      label: <p>&#xf202; fa-lastfm</p>
    },
    {
      value: "fa fa-lastfm-square",
      label: <p>&#xf203; fa-lastfm-square</p>
    },
    {
      value: "fa fa-toggle-off",
      label: <p>&#xf204; fa-toggle-off</p>
    },
    {
      value: "fa fa-toggle-on",
      label: <p>&#xf205; fa-toggle-on</p>
    },
    {
      value: "fa fa-bicycle",
      label: <p>&#xf206; fa-bicycle</p>
    },
    {
      value: "fa fa-bus",
      label: <p>&#xf207; fa-bus</p>
    },
    {
      value: "fa fa-ioxhost",
      label: <p>&#xf208; fa-ioxhost</p>
    },
    {
      value: "fa fa-angellist",
      label: <p>&#xf209; fa-angellist</p>
    },
    {
      value: "fa fa-cc",
      label: <p>&#xf20a; fa-cc</p>
    },
    {
      value: "fa fa-ils",
      label: <p>&#xf20b; fa-ils</p>
    },
    {
      value: "fa fa-meanpath",
      label: <p>&#xf20c; fa-meanpath</p>
    },
    {
      value: "fa fa-buysellads",
      label: <p>&#xf20d; fa-buysellads</p>
    },
    {
      value: "fa fa-connectdevelop",
      label: <p>&#xf20e; fa-connectdevelop</p>
    },
    {
      value: "fa fa-dashcube",
      label: <p>&#xf210; fa-dashcube</p>
    },
    {
      value: "fa fa-forumbee",
      label: <p>&#xf211; fa-forumbee</p>
    },
    {
      value: "fa fa-leanpub",
      label: <p>&#xf212; fa-leanpub</p>
    },
    {
      value: "fa fa-sellsy",
      label: <p>&#xf213; fa-sellsy</p>
    },
    {
      value: "fa fa-shirtsinbulk",
      label: <p>&#xf214; fa-shirtsinbulk</p>
    },
    {
      value: "fa fa-simplybuilt",
      label: <p>&#xf215; fa-simplybuilt</p>
    },
    {
      value: "fa fa-skyatlas",
      label: <p>&#xf216; fa-skyatlas</p>
    },
    {
      value: "fa fa-cart-plus",
      label: <p>&#xf217; fa-cart-plus</p>
    },
    {
      value: "fa fa-cart-arrow-down",
      label: <p>&#xf218; fa-cart-arrow-down</p>
    },
    {
      value: "fa fa-diamond",
      label: <p>&#xf219; fa-diamond</p>
    },
    {
      value: "fa fa-ship",
      label: <p>&#xf21a; fa-ship</p>
    },
    {
      value: "fa fa-user-secret",
      label: <p>&#xf21b; fa-user-secret</p>
    },
    {
      value: "fa fa-motorcycle",
      label: <p>&#xf21c; fa-motorcycle</p>
    },
    {
      value: "fa fa-street-view",
      label: <p>&#xf21d; fa-street-view</p>
    },
    {
      value: "fa fa-heartbeat",
      label: <p>&#xf21e; fa-heartbeat</p>
    },
    {
      value: "fa fa-venus",
      label: <p>&#xf221; fa-venus</p>
    },
    {
      value: "fa fa-mars",
      label: <p>&#xf222; fa-mars</p>
    },
    {
      value: "fa fa-mercury",
      label: <p>&#xf223; fa-mercury</p>
    },
    {
      value: "fa fa-transgender",
      label: <p>&#xf224; fa-transgender</p>
    },
    {
      value: "fa fa-transgender-alt",
      label: <p>&#xf225; fa-transgender-alt</p>
    },
    {
      value: "fa fa-venus-double",
      label: <p>&#xf226; fa-venus-double</p>
    },
    {
      value: "fa fa-mars-double",
      label: <p>&#xf227; fa-mars-double</p>
    },
    {
      value: "fa fa-venus-mars",
      label: <p>&#xf228; fa-venus-mars</p>
    },
    {
      value: "fa fa-mars-stroke",
      label: <p>&#xf229; fa-mars-stroke</p>
    },
    {
      value: "fa fa-mars-stroke-v",
      label: <p>&#xf22a; fa-mars-stroke-v</p>
    },
    {
      value: "fa fa-mars-stroke-h",
      label: <p>&#xf22b; fa-mars-stroke-h</p>
    },
    {
      value: "fa fa-neuter",
      label: <p>&#xf22c; fa-neuter</p>
    },
    {
      value: "fa fa-genderless",
      label: <p>&#xf22d; fa-genderless</p>
    },
    {
      value: "fa fa-facebook-official",
      label: <p>&#xf230; fa-facebook-official</p>
    },
    {
      value: "fa fa-pinterest-p",
      label: <p>&#xf231; fa-pinterest-p</p>
    },
    {
      value: "fa fa-whatsapp",
      label: <p>&#xf232; fa-whatsapp</p>
    },
    {
      value: "fa fa-server",
      label: <p>&#xf233; fa-server</p>
    },
    {
      value: "fa fa-user-plus",
      label: <p>&#xf234; fa-user-plus</p>
    },
    {
      value: "fa fa-user-times",
      label: <p>&#xf235; fa-user-times</p>
    },
    {
      value: "fa fa-bed",
      label: <p>&#xf236; fa-bed</p>
    },
    {
      value: "fa fa-viacoin",
      label: <p>&#xf237; fa-viacoin</p>
    },
    {
      value: "fa fa-train",
      label: <p>&#xf238; fa-train</p>
    },
    {
      value: "fa fa-subway",
      label: <p>&#xf239; fa-subway</p>
    },
    {
      value: "fa fa-medium",
      label: <p>&#xf23a; fa-medium</p>
    },
    {
      value: "fa fa-y-combinator",
      label: <p>&#xf23b; fa-y-combinator</p>
    },
    {
      value: "fa fa-optin-monster",
      label: <p>&#xf23c; fa-optin-monster</p>
    },
    {
      value: "fa fa-opencart",
      label: <p>&#xf23d; fa-opencart</p>
    },
    {
      value: "fa fa-expeditedssl",
      label: <p>&#xf23e; fa-expeditedssl</p>
    },
    {
      value: "fa fa-battery-full",
      label: <p>&#xf240; fa-battery-full</p>
    },
    {
      value: "fa fa-battery-three-quarters",
      label: <p>&#xf241; fa-battery-three-quarters</p>
    },
    {
      value: "fa fa-battery-half",
      label: <p>&#xf242; fa-battery-half</p>
    },
    {
      value: "fa fa-battery-quarter",
      label: <p>&#xf243; fa-battery-quarter</p>
    },
    {
      value: "fa fa-battery-empty",
      label: <p>&#xf244; fa-battery-empty</p>
    },
    {
      value: "fa fa-mouse-pointer",
      label: <p>&#xf245; fa-mouse-pointer</p>
    },
    {
      value: "fa fa-i-cursor",
      label: <p>&#xf246; fa-i-cursor</p>
    },
    {
      value: "fa fa-object-group",
      label: <p>&#xf247; fa-object-group</p>
    },
    {
      value: "fa fa-object-ungroup",
      label: <p>&#xf248; fa-object-ungroup</p>
    },
    {
      value: "fa fa-sticky-note",
      label: <p>&#xf249; fa-sticky-note</p>
    },
    {
      value: "fa fa-sticky-note-o",
      label: <p>&#xf24a; fa-sticky-note-o</p>
    },
    {
      value: "fa fa-cc-jcb",
      label: <p>&#xf24b; fa-cc-jcb</p>
    },
    {
      value: "fa fa-cc-diners-club",
      label: <p>&#xf24c; fa-cc-diners-club</p>
    },
    {
      value: "fa fa-clone",
      label: <p>&#xf24d; fa-clone</p>
    },
    {
      value: "fa fa-balance-scale",
      label: <p>&#xf24e; fa-balance-scale</p>
    },
    {
      value: "fa fa-hourglass-o",
      label: <p>&#xf250; fa-hourglass-o</p>
    },
    {
      value: "fa fa-hourglass-start",
      label: <p>&#xf251; fa-hourglass-start</p>
    },
    {
      value: "fa fa-hourglass-half",
      label: <p>&#xf252; fa-hourglass-half</p>
    },
    {
      value: "fa fa-hourglass-end",
      label: <p>&#xf253; fa-hourglass-end</p>
    },
    {
      value: "fa fa-hourglass",
      label: <p>&#xf254; fa-hourglass</p>
    },
    {
      value: "fa fa-hand-rock-o",
      label: <p>&#xf255; fa-hand-rock-o</p>
    },
    {
      value: "fa fa-hand-paper-o",
      label: <p>&#xf256; fa-hand-paper-o</p>
    },
    {
      value: "fa fa-hand-scissors-o",
      label: <p>&#xf257; fa-hand-scissors-o</p>
    },
    {
      value: "fa fa-hand-lizard-o",
      label: <p>&#xf258; fa-hand-lizard-o</p>
    },
    {
      value: "fa fa-hand-spock-o",
      label: <p>&#xf259; fa-hand-spock-o</p>
    },
    {
      value: "fa fa-hand-pointer-o",
      label: <p>&#xf25a; fa-hand-pointer-o</p>
    },
    {
      value: "fa fa-hand-peace-o",
      label: <p>&#xf25b; fa-hand-peace-o</p>
    },
    {
      value: "fa fa-trademark",
      label: <p>&#xf25c; fa-trademark</p>
    },
    {
      value: "fa fa-registered",
      label: <p>&#xf25d; fa-registered</p>
    },
    {
      value: "fa fa-creative-commons",
      label: <p>&#xf25e; fa-creative-commons</p>
    },
    {
      value: "fa fa-gg",
      label: <p>&#xf260; fa-gg</p>
    },
    {
      value: "fa fa-gg-circle",
      label: <p>&#xf261; fa-gg-circle</p>
    },
    {
      value: "fa fa-tripadvisor",
      label: <p>&#xf262; fa-tripadvisor</p>
    },
    {
      value: "fa fa-odnoklassniki",
      label: <p>&#xf263; fa-odnoklassniki</p>
    },
    {
      value: "fa fa-odnoklassniki-square",
      label: <p>&#xf264; fa-odnoklassniki-square</p>
    },
    {
      value: "fa fa-get-pocket",
      label: <p>&#xf265; fa-get-pocket</p>
    },
    {
      value: "fa fa-wikipedia-w",
      label: <p>&#xf266; fa-wikipedia-w</p>
    },
    {
      value: "fa fa-safari",
      label: <p>&#xf267; fa-safari</p>
    },
    {
      value: "fa fa-chrome",
      label: <p>&#xf268; fa-chrome</p>
    },
    {
      value: "fa fa-firefox",
      label: <p>&#xf269; fa-firefox</p>
    },
    {
      value: "fa fa-opera",
      label: <p>&#xf26a; fa-opera</p>
    },
    {
      value: "fa fa-internet-explorer",
      label: <p>&#xf26b; fa-internet-explorer</p>
    },
    {
      value: "fa fa-television",
      label: <p>&#xf26c; fa-television</p>
    },
    {
      value: "fa fa-contao",
      label: <p>&#xf26d; fa-contao</p>
    },
    {
      value: "fa fa-500px",
      label: <p>&#xf26e; fa-500px</p>
    },
    {
      value: "fa fa-amazon",
      label: <p>&#xf270; fa-amazon</p>
    },
    {
      value: "fa fa-calendar-plus-o",
      label: <p>&#xf271; fa-calendar-plus-o</p>
    },
    {
      value: "fa fa-calendar-minus-o",
      label: <p>&#xf272; fa-calendar-minus-o</p>
    },
    {
      value: "fa fa-calendar-times-o",
      label: <p>&#xf273; fa-calendar-times-o</p>
    },
    {
      value: "fa fa-calendar-check-o",
      label: <p>&#xf274; fa-calendar-check-o</p>
    },
    {
      value: "fa fa-industry",
      label: <p>&#xf275; fa-industry</p>
    },
    {
      value: "fa fa-map-pin",
      label: <p>&#xf276; fa-map-pin</p>
    },
    {
      value: "fa fa-map-signs",
      label: <p>&#xf277; fa-map-signs</p>
    },
    {
      value: "fa fa-map-o",
      label: <p>&#xf278; fa-map-o</p>
    },
    {
      value: "fa fa-map",
      label: <p>&#xf279; fa-map</p>
    },
    {
      value: "fa fa-commenting",
      label: <p>&#xf27a; fa-commenting</p>
    },
    {
      value: "fa fa-commenting-o",
      label: <p>&#xf27b; fa-commenting-o</p>
    },
    {
      value: "fa fa-houzz",
      label: <p>&#xf27c; fa-houzz</p>
    },
    {
      value: "fa fa-vimeo",
      label: <p>&#xf27d; fa-vimeo</p>
    },
    {
      value: "fa fa-black-tie",
      label: <p>&#xf27e; fa-black-tie</p>
    },
    {
      value: "fa fa-fonticons",
      label: <p>&#xf280; fa-fonticons</p>
    },
    {
      value: "fa fa-reddit-alien",
      label: <p>&#xf281; fa-reddit-alien</p>
    },
    {
      value: "fa fa-edge",
      label: <p>&#xf282; fa-edge</p>
    },
    {
      value: "fa fa-credit-card-alt",
      label: <p>&#xf283; fa-credit-card-alt</p>
    },
    {
      value: "fa fa-codiepie",
      label: <p>&#xf284; fa-codiepie</p>
    },
    {
      value: "fa fa-modx",
      label: <p>&#xf285; fa-modx</p>
    },
    {
      value: "fa fa-fort-awesome",
      label: <p>&#xf286; fa-fort-awesome</p>
    },
    {
      value: "fa fa-usb",
      label: <p>&#xf287; fa-usb</p>
    },
    {
      value: "fa fa-product-hunt",
      label: <p>&#xf288; fa-product-hunt</p>
    },
    {
      value: "fa fa-mixcloud",
      label: <p>&#xf289; fa-mixcloud</p>
    },
    {
      value: "fa fa-scribd",
      label: <p>&#xf28a; fa-scribd</p>
    },
    {
      value: "fa fa-pause-circle",
      label: <p>&#xf28b; fa-pause-circle</p>
    },
    {
      value: "fa fa-pause-circle-o",
      label: <p>&#xf28c; fa-pause-circle-o</p>
    },
    {
      value: "fa fa-stop-circle",
      label: <p>&#xf28d; fa-stop-circle</p>
    },
    {
      value: "fa fa-stop-circle-o",
      label: <p>&#xf28e; fa-stop-circle-o</p>
    },
    {
      value: "fa fa-shopping-bag",
      label: <p>&#xf290; fa-shopping-bag</p>
    },
    {
      value: "fa fa-shopping-basket",
      label: <p>&#xf291; fa-shopping-basket</p>
    },
    {
      value: "fa fa-hashtag",
      label: <p>&#xf292; fa-hashtag</p>
    },
    {
      value: "fa fa-bluetooth",
      label: <p>&#xf293; fa-bluetooth</p>
    },
    {
      value: "fa fa-bluetooth-b",
      label: <p>&#xf294; fa-bluetooth-b</p>
    },
    {
      value: "fa fa-percent",
      label: <p>&#xf295; fa-percent</p>
    },
    {
      value: "fa fa-gitlab",
      label: <p>&#xf296; fa-gitlab</p>
    },
    {
      value: "fa fa-wpbeginner",
      label: <p>&#xf297; fa-wpbeginner</p>
    },
    {
      value: "fa fa-wpforms",
      label: <p>&#xf298; fa-wpforms</p>
    },
    {
      value: "fa fa-envira",
      label: <p>&#xf299; fa-envira</p>
    },
    {
      value: "fa fa-universal-access",
      label: <p>&#xf29a; fa-universal-access</p>
    },
    {
      value: "fa fa-wheelchair-alt",
      label: <p>&#xf29b; fa-wheelchair-alt</p>
    },
    {
      value: "fa fa-question-circle-o",
      label: <p>&#xf29c; fa-question-circle-o</p>
    },
    {
      value: "fa fa-blind",
      label: <p>&#xf29d; fa-blind</p>
    },
    {
      value: "fa fa-audio-description",
      label: <p>&#xf29e; fa-audio-description</p>
    },
    {
      value: "fa fa-volume-control-phone",
      label: <p>&#xf2a0; fa-volume-control-phone</p>
    },
    {
      value: "fa fa-braille",
      label: <p>&#xf2a1; fa-braille</p>
    },
    {
      value: "fa fa-assistive-listening-systems",
      label: <p>&#xf2a2; fa-assistive-listening-systems</p>
    },
    {
      value: "fa fa-american-sign-language-interpreting",
      label: <p>&#xf2a3; fa-american-sign-language-interpreting</p>
    },
    {
      value: "fa fa-deaf",
      label: <p>&#xf2a4; fa-deaf</p>
    },
    {
      value: "fa fa-glide",
      label: <p>&#xf2a5; fa-glide</p>
    },
    {
      value: "fa fa-glide-g",
      label: <p>&#xf2a6; fa-glide-g</p>
    },
    {
      value: "fa fa-sign-language",
      label: <p>&#xf2a7; fa-sign-language</p>
    },
    {
      value: "fa fa-low-vision",
      label: <p>&#xf2a8; fa-low-vision</p>
    },
    {
      value: "fa fa-viadeo",
      label: <p>&#xf2a9; fa-viadeo</p>
    },
    {
      value: "fa fa-viadeo-square",
      label: <p>&#xf2aa; fa-viadeo-square</p>
    },
    {
      value: "fa fa-snapchat",
      label: <p>&#xf2ab; fa-snapchat</p>
    },
    {
      value: "fa fa-snapchat-ghost",
      label: <p>&#xf2ac; fa-snapchat-ghost</p>
    },
    {
      value: "fa fa-snapchat-square",
      label: <p>&#xf2ad; fa-snapchat-square</p>
    },
    {
      value: "fa fa-pied-piper",
      label: <p>&#xf2ae; fa-pied-piper</p>
    },
    {
      value: "fa fa-first-order",
      label: <p>&#xf2b0; fa-first-order</p>
    },
    {
      value: "fa fa-yoast",
      label: <p>&#xf2b1; fa-yoast</p>
    },
    {
      value: "fa fa-themeisle",
      label: <p>&#xf2b2; fa-themeisle</p>
    },
    {
      value: "fa fa-google-plus-official",
      label: <p>&#xf2b3; fa-google-plus-official</p>
    },
    {
      value: "fa fa-font-awesome",
      label: <p>&#xf2b4; fa-font-awesome</p>
    }
  ];
  return (
    <SelectControl
      label={__("Choose Icon")}
      options={"fa" === type ? ICONS : DASHICONS}
      value={icon}
      onChange={onChangeIcon}
    />
  );
}
