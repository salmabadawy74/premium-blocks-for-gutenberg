import googleFonts from '../premium-fonts';
export const getDefaultFonts = () => {
    const fonts = [
        { value: "", label: __("Default", 'premium-blocks-for-gutenberg'), weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], google: false },
        { value: "Arial", label: "Arial", weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], google: false },
        { value: "Helvetica", label: "Helvetica", weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], google: false },
        { value: "Times New Roman", label: "Times New Roman", weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], google: false },
        { value: "Georgia", label: "Georgia", weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], google: false },
    ]

    let systemFonts = fonts.map((familyValue) => ({
        family: familyValue.value,
        variations: [],
        source: "system",
        all_variations: weight

    }))
    let googleFont = Object.keys(googleFonts).map((k, v) => ({

        family: key,
        variations: [],
        source: "google",
        all_variations: googleFonts[k].weight

    }))

    return {
        system: systemFonts,
        google: googleFont
    }

}
