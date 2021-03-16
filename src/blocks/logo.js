const el = wp.element.createElement;

const premiumLogo = el(
    "svg",
    { width: 20, height: 20 },
    el("path", {
        fill: "#4a00e0",
        d:
            "M20 18.008h-20v-16.016h20v16.016zM1.172 16.836h17.656v-13.672h-17.656v13.672z",
    }),
    el("path", {
        fill: "#4a00e0",
        d: "M7.617 4.604h4.766v1.172h-4.766v-1.172z",
    }),
    el("path", {
        fill: "#4a00e0",
        d:
            "M8.998 14.385h-6.237v-6.238h6.238v6.238zM3.932 13.213h3.894v-3.894h-3.894v3.894z",
    }),
    el("path", {
        fill: "#4a00e0",
        d:
            "M17.24 11.852h-6.237v-3.705h6.238v3.705zM12.174 10.68h3.894v-1.361h-3.894v1.361z",
    }),
    el("path", {
        fill: "#4a00e0",
        d: "M11.588 13.024h5.066v1.172h-5.066v-1.172z",
    })
);

export default premiumLogo;
