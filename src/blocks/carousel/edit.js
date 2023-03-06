import classnames from "classnames";
import {
    InspectorTabs,
    InspectorTab,
    PremiumResponsiveTabs,
    PremiumBorder,
    SpacingComponent,
    MultiButtonsControl,
    Icons,
    PremiumBackgroundControl,
    ResponsiveSingleRangeControl,
    PremiumShadow,
} from "@pbg/components";
import {
    borderCss,
    gradientBackground,
    marginCss,
    paddingCss,
    generateBlockId,
} from "@pbg/helpers";
import Slider from "react-slick";

const { __ } = wp.i18n;
const { PanelBody, ToggleControl, SelectControl } = wp.components;
const { Fragment, useEffect } = wp.element;
const { withSelect } = wp.data;
const { InnerBlocks, InspectorControls, useBlockProps } = wp.blockEditor;

const CONTENT = [
    [
        "core/paragraph",
        {
            content: __(
                "Insert your text or select a block ",
                "premium-blocks-for-gutenberg"
            ),
        },
    ],
];

const edit = (props) => {
    useEffect(() => {
        setAttributes({
            blockId: "premium-carousel-" + generateBlockId(props.clientId),
        });
    }, []);

    const { className, setAttributes } = props;

    const {
        stretchSection,
        innerWidthType,
        horAlign,
        height,
        innerWidth,
        minHeight,
        minHeightUnit,
        vPos,
        blockId,
        hideDesktop,
        hideTablet,
        hideMobile,
        border,
        padding,
        margin,
        background,
        boxShadow,
    } = props.attributes;


    return [
        <Fragment>

            <Slider>
                <InnerBlocks template={CONTENT} />
            </Slider>
        </Fragment>,
    ];
};

export default withSelect((select) => {
    const { __experimentalGetPreviewDeviceType = null } =
        select("core/edit-post");
    let deviceType = __experimentalGetPreviewDeviceType
        ? __experimentalGetPreviewDeviceType()
        : null;
    return { deviceType: deviceType };
})(edit);
