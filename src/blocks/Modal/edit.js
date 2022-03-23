import FontIconPicker from "@fonticonpicker/react-fonticonpicker";
import iconsList from "../../components/premium-icons-list";
import AdvancedPopColorControl from '../../components/Color Control/ColorComponent';
import PremiumBorder from "../../components/premium-border"
import PremiumResponsivePadding from '../../components/Premium-Responsive-Padding';

const { Button, Modal } = wp.components;
const { useState, Fragment } = wp.element;
const { InnerBlocks } = wp.blockEditor;

const edit = () => {
    const [isOpen, setOpen] = useState(false);
    const openModal = () => setOpen(true);
    const closeModal = () => setOpen(false);

    return [
        isSelected && (
            <InspectorControls key={"inspector"}>
                <PanelBody
                    title={__("Content", 'premium-blocks-for-gutenberg')}
                    className="premium-panel-body"
                    initialOpen={true}
                >
                    <ToggleControl
                        label={__('Header', 'premium-blocks-for-gutenberg')}
                        checked={contentStyles[0].showHeader}
                        onChange={(value) => saveContentStyle({ showHeader: value })}
                    />
                    {
                        contentStyles[0].showHeader && (
                            <Fragment>
                                <SelectControl
                                    label={__('Icon Type', 'premium-blocks-for-gutenberg')}
                                    options={[
                                        { label: __("None", "premium-blocks-for-gutenberg"), value: 'none' },
                                        { label: __("Icon", "premium-blocks-for-gutenberg"), value: 'icon' },
                                        { label: __('Custom Image', 'premium-blocks-for-gutenberg'), value: 'image' },
                                        { label: __('Lottie Animations', 'premium-blocks-for-gutenberg'), value: 'lottie' }
                                    ]}
                                    value={contentStyles[0].iconType}
                                    onChange={(value) => saveContentStyle({ iconType: value })}
                                />
                                {contentStyles[0].iconType === "icon" && (
                                    <Fragment>
                                        <p className="premium-editor-paragraph">{__("Select Icon", 'premium-blocks-for-gutenberg')}</p>
                                        <FontIconPicker
                                            icons={iconsList}
                                            onChange={newIcon => saveContentStyle({ contentIcon: newIcon })}
                                            value={contentStyles[0].contentIcon}
                                            isMulti={false}
                                            appendTo="body"
                                            noSelectedPlaceholder={__("Select Icon", 'premium-blocks-for-gutenberg')}
                                        />
                                    </Fragment>)
                                }
                                { contentStyles[0].iconType === "image" && (
                                    <PremiumMediaUpload
                                        type="image"
                                        imageID={contentStyles[0].contentImgID}
                                        imageURL={contentStyles[0].contentImgURL}
                                        onSelectMedia={(media) => {
                                            saveContentStyle({
                                                contentImgID: media.id,
                                                contentImgURL: media.url,
                                            });
                                        }}
                                        onRemoveImage={() =>
                                            saveContentStyle({
                                                contentImgID: "",
                                                contentImgURL: "",
                                            })
                                        }
                                    />)
                                }
                                {contentStyles[0].iconType === "lottie" && (
                                    <Fragment>
                                        <TextControl
                                            label={__("Animation JSON URL", "premium-blocks-for-gutenberg")}
                                            value={contentStyles[0].lottieURL}
                                            onChange={(value) => saveContentStyle({ lottieURL: value })}
                                        />
                                        <ToggleControl
                                            label={__("Loop", 'premium-blocks-for-gutenberg')}
                                            checked={contentStyles[0].loopLottie}
                                            onChange={(value) => saveContentStyle({ loopLottie: value })}
                                        />
                                        <ToggleControl
                                            label={__("Reverse", 'premium-blocks-for-gutenberg')}
                                            checked={contentStyles[0].reverseLottie}
                                            onChange={(value) => saveContentStyle({ reverseLottie: value })}
                                        />
                                    </Fragment>
                                )}
                                {contentStyles[0].iconType !== "none" && (
                                    <ResponsiveRangeControl
                                        label={__('Icon Size', 'premium-blocks-for-gutenberg')}
                                        value={contentStyles[0].iconSize}
                                        onChange={(value) => saveContentStyle({ iconSize: (value !== "") ? value : 200 })}
                                        tabletValue={contentStyles[0].iconSizeTablet}
                                        onChangeTablet={(value) => saveContentStyle({ iconSizeTablet: (value !== "") ? value : 200 })}
                                        mobileValue={contentStyles[0].iconSizeMobile}
                                        onChangeMobile={(value) => saveContentStyle({ iconSizeMobile: (value !== "") ? value : 200 })}
                                        min={0}
                                        max={100}
                                        step={1}
                                        onChangeUnit={newValue => saveContentStyle({ iconSizeUnit: newValue })}
                                        unit={contentStyles[0].iconSizeUnit}
                                        showUnit={true}
                                        units={['px', 'em']}
                                        defaultValue={0}
                                    />)
                                }
                                <TextControl
                                    label={__("Title", 'premium-blocks-for-gutenberg')}
                                    value={contentStyles[0].titleText}
                                    onChange={(value) => saveContentStyle({ titleText: value })}
                                />
                            </Fragment>
                        )
                    }
                    <hr />
                    <ToggleControl
                        label={__("Upper Close Button", 'premium-blocks-for-gutenberg')}
                        checked={contentStyles[0].showUpperClose}
                        onChange={(value) => saveContentStyle({ showUpperClose: value })}
                    />
                    <ToggleControl
                        label={__("Lower Close Button", 'premium-blocks-for-gutenberg')}
                        checked={contentStyles[0].showLowerClose}
                        onChange={(value) => saveContentStyle({ showLowerClose: value })}
                    />
                    {
                        contentStyles[0].showLowerClose && (
                            <TextControl
                                label={__("Text", 'premium-blocks-for-gutenberg')}
                                checked={contentStyles[0].lowerCloseText}
                                onChange={(value) => saveContentStyle({ lowerCloseText: value })}
                            />
                        )
                    }
                </PanelBody>
                <PanelBody
                    title={__("Trigger Option", 'premium-blocks-for-gutenberg')}
                    className="premium-panel-body"
                    initialOpen={false}
                >

                </PanelBody>
                <PanelBody
                    title={__("Triger", 'premium-blocks-for-gutenberg')}
                    className="premium-panel-body"
                    initialOpen={false}
                >
                    <AdvancedPopColorControl
                        label={__("Color", 'premium-blocks-for-gutenberg')}
                        colorValue={triggerStyles[0].color}
                        colorDefault={''}
                        onColorChange={(newValue) => saveTriggerStyles({ backColor: newValue })}
                    />
                    <AdvancedPopColorControl
                        label={__("Hover Color", 'premium-blocks-for-gutenberg')}
                        colorValue={triggerStyles[0].hoverColor}
                        colorDefault={''}
                        onColorChange={(newValue) => saveTriggerStyles({ hoverColor: newValue })}
                    />
                    <AdvancedPopColorControl
                        label={__("Icon Color", 'premium-blocks-for-gutenberg')}
                        colorValue={triggerStyles[0].iconColor}
                        colorDefault={''}
                        onColorChange={(newValue) => saveTriggerStyles({ iconColor: newValue })}
                    />
                    <AdvancedPopColorControl
                        label={__("Icon Hover Color", 'premium-blocks-for-gutenberg')}
                        colorValue={triggerStyles[0].iconHoverColor}
                        colorDefault={''}
                        onColorChange={(newValue) => saveTriggerStyles({ iconHoverColor: newValue })}
                    />
                    <PremiumTypo
                        components={["responsiveSize", "weight", "spacing", "style", "upper", "family"]}
                        setAttributes={saveTriggerStyles}
                        fontSizeType={{
                            value: triggerStyles[0].triggerSizeUnit,
                            label: __("titleSizeUnit", 'premium-blocks-for-gutenberg'),
                        }}
                        fontSize={triggerStyles[0].triggerSize}
                        fontSizeMobile={triggerStyles[0].triggerSizeMobile}
                        fontSizeTablet={triggerStyles[0].triggerSizeTablet}
                        onChangeSize={newSize => saveTriggerStyles({ triggerSize: newSize })}
                        onChangeTabletSize={newSize => saveTriggerStyles({ triggerSizeTablet: newSize })}
                        onChangeMobileSize={newSize => saveTriggerStyles({ triggerSizeMobile: newSize })}
                        fontFamily={triggerStyles[0].titleFamily}
                        weight={triggerStyles[0].triggerWeight}
                        style={triggerStyles[0].triggerStyle}
                        spacing={triggerStyles[0].triggerSpacing}
                        upper={triggerStyles[0].triggerUpper}
                        onChangeWeight={newWeight => saveTriggerStyles({ triggerWeight: newWeight })}
                        onChangeStyle={newStyle => saveTriggerStyles({ triggerStyle: newStyle })}
                        onChangeSpacing={newValue => saveTriggerStyles({ triggerSpacing: newValue })}
                        onChangeFamily={(fontFamily) => saveTriggerStyles({ triggerFamily: fontFamily })}
                        onChangeUpper={check => saveTriggerStyles({ triggerUpper: check })}
                    />
                    <TabPanel
                        className="premium-color-tabpanel"
                        activeClass="active-tab"
                        tabs={[
                            {
                                name: "normal",
                                title: "Normal",
                                className: "premium-tab",
                            },
                            {
                                name: "hover",
                                title: "Hover",
                                className: "premium-tab",
                            },
                        ]}
                    >
                        {(tab) => {
                            let tabout;
                            if ("normal" === tab.name) {
                                tabout = (
                                    <Fragment>
                                        <AdvancedPopColorControl
                                            label={__("Icon Color", 'premium-blocks-for-gutenberg')}
                                            colorValue={iconColor}
                                            colorDefault={''}
                                            onColorChange={newValue => setAttributes({ iconColor: newValue || "transparent", })}
                                        />
                                        <AdvancedPopColorControl
                                            label={__(`Background Color`)}
                                            colorValue={iconBackColor}
                                            onColorChange={newvalue => setAttributes({ iconBackColor: newvalue, })}
                                            colorDefault={``}
                                        />
                                    </Fragment>
                                );
                            }
                            if ("hover" === tab.name) {
                                tabout = (
                                    <Fragment>

                                    </Fragment>
                                );
                            }
                            return (
                                <div>
                                    {tabout}
                                    <hr />
                                </div>
                            );
                        }}
                    </TabPanel>

                </PanelBody>
                <PanelBody
                    title={__("Header", 'premium-blocks-for-gutenberg')}
                    className="premium-panel-body"
                    initialOpen={false}
                >
                    <AdvancedPopColorControl
                        label={__("Color", 'premium-blocks-for-gutenberg')}
                        colorValue={headerStyles[0].color}
                        colorDefault={''}
                        onColorChange={(newValue) => saveHeaderStyles({ color: newValue })}
                    />
                    <AdvancedPopColorControl
                        label={__("Background Color", 'premium-blocks-for-gutenberg')}
                        colorValue={headerStyles[0].backColor}
                        colorDefault={''}
                        onColorChange={(newValue) => saveHeaderStyles({ backColor: newValue })}
                    />
                    <PremiumTypo
                        components={["responsiveSize", "weight", "spacing", "style", "upper", "family"]}
                        setAttributes={saveHeaderStyles}
                        fontSizeType={{
                            value: triggerStyles[0].triggerSizeUnit,
                            label: __("titleSizeUnit", 'premium-blocks-for-gutenberg'),
                        }}
                        fontSize={triggerStyles[0].triggerSize}
                        fontSizeMobile={triggerStyles[0].triggerSizeMobile}
                        fontSizeTablet={triggerStyles[0].triggerSizeTablet}
                        onChangeSize={newSize => saveTriggerStyles({ triggerSize: newSize })}
                        onChangeTabletSize={newSize => saveTriggerStyles({ triggerSizeTablet: newSize })}
                        onChangeMobileSize={newSize => saveTriggerStyles({ triggerSizeMobile: newSize })}
                        fontFamily={triggerStyles[0].titleFamily}
                        weight={triggerStyles[0].triggerWeight}
                        style={triggerStyles[0].triggerStyle}
                        spacing={triggerStyles[0].triggerSpacing}
                        upper={triggerStyles[0].triggerUpper}
                        onChangeWeight={newWeight => saveTriggerStyles({ triggerWeight: newWeight })}
                        onChangeStyle={newStyle => saveTriggerStyles({ triggerStyle: newStyle })}
                        onChangeSpacing={newValue => saveTriggerStyles({ triggerSpacing: newValue })}
                        onChangeFamily={(fontFamily) => saveTriggerStyles({ triggerFamily: fontFamily })}
                        onChangeUpper={check => saveTriggerStyles({ triggerUpper: check })}
                    />
                    <PremiumBorder
                        borderType={triggerStyles[0].borderType}
                        borderWidth={triggerStyles[0].borderWidth}
                        top={borderTop}
                        right={borderRight}
                        bottom={borderBottom}
                        left={borderLeft}
                        borderColor={triggerStyles[0].borderColor}
                        borderRadius={triggerStyles[0].borderRadius}
                        onChangeType={(newType) => saveTriggerStyles({ borderType: newType })}
                        onChangeWidth={({ top, right, bottom, left }) =>
                            setAttributes({
                                borderTop: top,
                                borderRight: right,
                                borderBottom: bottom,
                                borderLeft: left,
                            })
                        }
                        onChangeColor={(colorValue) => saveTriggerStyles({ borderColor: colorValue })}
                        onChangeRadius={(newRadius) => saveTriggerStyles({ borderRadius: newRadius })}
                    />
                </PanelBody>
                <PanelBody
                    title={__("Upper Close Button", 'premium-blocks-for-gutenberg')}
                    className="premium-panel-body"
                    initialOpen={false}
                >
                    <ResponsiveRangeControl
                        label={__('Size', 'premium-blocks-for-gutenberg')}
                        value={upperStyles[0].size}
                        onChange={(value) => saveUpperStyles({ size: (value !== "") ? value : 200 })}
                        tabletValue={upperStyles[0].sizeTablet}
                        onChangeTablet={(value) => saveUpperStyles({ sizeTablet: (value !== "") ? value : 200 })}
                        mobileValue={upperStyles[0].sizeMobile}
                        onChangeMobile={(value) => saveUpperStyles({ sizeMobile: (value !== "") ? value : 200 })}
                        min={0}
                        max={100}
                        step={1}
                        onChangeUnit={newValue => saveUpperStyles({ sizeUnit: newValue })}
                        unit={upperStyles[0].sizeUnit}
                        showUnit={true}
                        units={['px', '%', 'em']}
                        defaultValue={0}
                    />
                    <TabPanel
                        className="premium-color-tabpanel"
                        activeClass="active-tab"
                        tabs={[
                            {
                                name: "normal",
                                title: "Normal",
                                className: "premium-tab",
                            },
                            {
                                name: "hover",
                                title: "Hover",
                                className: "premium-tab",
                            },
                        ]}
                    >
                        {(tab) => {
                            let tabout;
                            if ("normal" === tab.name) {
                                tabout = (
                                    <Fragment>
                                        <AdvancedPopColorControl
                                            label={__("Color", 'premium-blocks-for-gutenberg')}
                                            colorValue={upperStyles[0].color}
                                            colorDefault={''}
                                            onColorChange={newValue => saveUpperStyles({ color: newValue || "transparent", })}
                                        />
                                        <AdvancedPopColorControl
                                            label={__(`Background Color`)}
                                            colorValue={upperStyles[0].backColor}
                                            onColorChange={newvalue => saveUpperStyles({ backColor: newvalue })}
                                            colorDefault={``}
                                        />
                                        <PremiumBorder
                                            borderType={upperStyles[0].borderType}
                                            top={borderTop}
                                            right={borderRight}
                                            bottom={borderBottom}
                                            left={borderLeft}
                                            borderColor={upperStyles[0].borderColor}
                                            borderRadius={upperStyles[0].borderRadius}
                                            onChangeType={(newType) => saveUpperStyles({ borderType: newType })}
                                            onChangeWidth={({ top, right, bottom, left }) =>
                                                setAttributes({
                                                    borderTop: top,
                                                    borderRight: right,
                                                    borderBottom: bottom,
                                                    borderLeft: left,
                                                })
                                            }
                                            onChangeColor={(colorValue) => saveUpperStyles({ borderColor: colorValue })}
                                            onChangeRadius={(newRadius) => saveUpperStyles({ borderRadius: newRadius })}
                                        />
                                    </Fragment>
                                );
                            }
                            if ("hover" === tab.name) {
                                tabout = (
                                    <Fragment>
                                        <AdvancedPopColorControl
                                            label={__("Color", 'premium-blocks-for-gutenberg')}
                                            colorValue={upperStyles[0].colorH}
                                            colorDefault={''}
                                            onColorChange={newValue => saveUpperStyles({ colorH: newValue || "transparent", })}
                                        />
                                        <AdvancedPopColorControl
                                            label={__(`Background Color`)}
                                            colorValue={upperStyles[0].backColorH}
                                            onColorChange={newvalue => saveUpperStyles({ backColorH: newvalue })}
                                            colorDefault={``}
                                        />
                                        <PremiumBorder
                                            borderType={upperStyles[0].borderTypeH}
                                            top={borderTopH}
                                            right={borderRightH}
                                            bottom={borderBottomH}
                                            left={borderLeftH}
                                            borderColor={upperStyles[0].borderColorH}
                                            borderRadius={upperStyles[0].borderRadiusH}
                                            onChangeType={(newType) => saveUpperStyles({ borderTypeH: newType })}
                                            onChangeWidth={({ top, right, bottom, left }) =>
                                                setAttributes({
                                                    borderTopH: top,
                                                    borderRightH: right,
                                                    borderBottomH: bottom,
                                                    borderLeftH: left,
                                                })
                                            }
                                            onChangeColor={(colorValue) => saveUpperStyles({ borderColorH: colorValue })}
                                            onChangeRadius={(newRadius) => saveUpperStyles({ borderRadiusH: newRadius })}
                                        />
                                    </Fragment>
                                );
                            }
                            return (
                                <div>
                                    {tabout}
                                    <hr />
                                </div>
                            );
                        }}
                    </TabPanel>

                    <PremiumResponsivePadding
                        paddingTop={upperPaddingT}
                        paddingRight={upperPaddingR}
                        paddingBottom={upperPaddingB}
                        paddingLeft={upperPaddingL}
                        paddingTopTablet={upperPaddingTTablet}
                        paddingRightTablet={upperPaddingRTablet}
                        paddingBottomTablet={upperPaddingBTablet}
                        paddingLeftTablet={upperPaddingLTablet}
                        paddingTopMobile={upperPaddingTMobile}
                        paddingRightMobile={upperPaddingRMobile}
                        paddingBottomMobile={upperPaddingBMobile}
                        paddingLeftMobile={upperPaddingLMobile}
                        showUnits={true}
                        selectedUnit={upperStyles[0].paddingU}
                        onChangePadSizeUnit={newvalue =>
                            saveUpperStyles({ paddingU: newvalue })
                        }
                        onChangePaddingTop={
                            (device, newValue) => {
                                if (device === "desktop") {
                                    setAttributes({ upperPaddingT: newValue })
                                } else if (device === "tablet") {
                                    setAttributes({ upperPaddingTTablet: newValue })
                                } else {
                                    setAttributes({ upperPaddingTMobile: newValue })
                                }
                            }
                        }
                        onChangePaddingRight={
                            (device, newValue) => {
                                if (device === "desktop") {
                                    setAttributes({ upperPaddingR: newValue })
                                } else if (device === "tablet") {
                                    setAttributes({ upperPaddingRTablet: newValue })
                                } else {
                                    setAttributes({ upperPaddingRMobile: newValue })
                                }
                            }
                        }
                        onChangePaddingBottom={
                            (device, newValue) => {
                                if (device === "desktop") {
                                    setAttributes({ upperPaddingB: newValue })
                                } else if (device === "tablet") {
                                    setAttributes({ upperPaddingBTablet: newValue })
                                } else {
                                    setAttributes({ upperPaddingBMobile: newValue })
                                }
                            }
                        }
                        onChangePaddingLeft={
                            (device, newValue) => {
                                if (device === "desktop") {
                                    setAttributes({ upperPaddingL: newValue })
                                } else if (device === "tablet") {
                                    setAttributes({ upperPaddingLTablet: newValue })
                                } else {
                                    setAttributes({ upperPaddingLMobile: newValue })
                                }
                            }
                        }
                    />
                </PanelBody>
                <PanelBody
                    title={__("Lower Close Button", 'premium-blocks-for-gutenberg')}
                    className="premium-panel-body"
                    initialOpen={false}
                >
                    <PremiumTypo
                        components={["responsiveSize", "weight", "spacing", "style", "upper", "family"]}
                        setAttributes={saveStyles}
                        fontSizeType={{
                            value: triggerStyles[0].triggerSizeUnit,
                            label: __("titleSizeUnit", 'premium-blocks-for-gutenberg'),
                        }}
                        fontSize={triggerStyles[0].triggerSize}
                        fontSizeMobile={triggerStyles[0].triggerSizeMobile}
                        fontSizeTablet={triggerStyles[0].triggerSizeTablet}
                        onChangeSize={newSize => saveTriggerStyles({ triggerSize: newSize })}
                        onChangeTabletSize={newSize => saveTriggerStyles({ triggerSizeTablet: newSize })}
                        onChangeMobileSize={newSize => saveTriggerStyles({ triggerSizeMobile: newSize })}
                        fontFamily={triggerStyles[0].titleFamily}
                        weight={triggerStyles[0].triggerWeight}
                        style={triggerStyles[0].triggerStyle}
                        spacing={triggerStyles[0].triggerSpacing}
                        upper={triggerStyles[0].triggerUpper}
                        onChangeWeight={newWeight => saveTriggerStyles({ triggerWeight: newWeight })}
                        onChangeStyle={newStyle => saveTriggerStyles({ triggerStyle: newStyle })}
                        onChangeSpacing={newValue => saveTriggerStyles({ triggerSpacing: newValue })}
                        onChangeFamily={(fontFamily) => saveTriggerStyles({ triggerFamily: fontFamily })}
                        onChangeUpper={check => saveTriggerStyles({ triggerUpper: check })}
                    />
                </PanelBody>
                <PanelBody
                    title={__("Modal Body", 'premium-blocks-for-gutenberg')}
                    className="premium-panel-body"
                    initialOpen={false}
                >

                </PanelBody>
            </InspectorControls >
        ),
        <Fragment>
            <Button variant="secondary" onClick={openModal}>
                Open Modal
            </Button>
            {isOpen && (
                <Modal title="This is my modal" >
                    <Button variant="secondary" onClick={closeModal}>
                        <InnerBlocks templateLock={false} />
                    </Button>
                </Modal>
            )}
        </Fragment>
    ];
};
export default edit