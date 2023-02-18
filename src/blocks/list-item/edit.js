import { useEffect } from 'react';
import { generateBlockId } from '@pbg/helpers';
import FontIconPicker from "@fonticonpicker/react-fonticonpicker";
import {
    InspectorControls,
    useBlockProps,
    RichText
} from "@wordpress/block-editor";
import { ToggleControl, TextControl, SelectControl, PanelBody } from '@wordpress/components';
import {
    InspectorTabs,
    InspectorTab,
    PremiumResponsiveTabs,
    PremiumMediaUpload,
    GenIcon,
    FaIco,
    Ico,
    IcoNames
} from '@pbg/components';
import { Fragment } from 'react';
import classnames from "classnames";
import { __ } from '@wordpress/i18n';
const { withSelect } = wp.data;

function Edit(props) {
    const { setAttributes, clientId, context, attributes } = props;
    const {
        blockId,
        hideDesktop,
        hideTablet,
        hideMobile,
        showIcon,
        title,
        iconType,
        icon,
        enableLink,
        linkURL,
        openInNewTab,
        imageID,
        imageURL,
        icons
    } = attributes;
    const { layoutPos, divider, bulletIconFontSize } = context;

    useEffect(() => {
        if (layoutPos !== attributes.layoutPos) {
            setAttributes({ layoutPos: layoutPos });
        }
        if (divider !== attributes.divider) {
            setAttributes({ divider: divider });
        }
        if (bulletIconFontSize !== attributes.bulletIconFontSize) {
            setAttributes({ bulletIconFontSize: bulletIconFontSize });
        }
    }, [layoutPos, divider, bulletIconFontSize]);

    useEffect(() => {
        // Set block id.
        setAttributes({
            blockId:
                "premium-list-item-" + generateBlockId(clientId),
        });
    }, []);

    const blockProps = useBlockProps({
        className: classnames(blockId, 'premium-bullet-list__wrapper', {
            ['premium-desktop-hidden']: hideDesktop,
            ['premium-tablet-hidden']: hideTablet,
            ['premium-mobile-hidden']: hideMobile,
        })
    });

    const selectImage = (value) => {
        setAttributes({ imageURL: value.url });
        setAttributes({ imageID: value.id });
    }

    const removeImage = () => {
        setAttributes({ imageURL: '' });
        setAttributes({ imageID: '' });
    }

    const renderSVG = svg => (
        <GenIcon name={svg} icon={('fa' === svg.substring(0, 2) ? FaIco[svg] : Ico[svg])} />
    );

    return <Fragment>
        <InspectorControls>
            <InspectorTabs tabs={["layout", "advance"]}>
                <InspectorTab key={"layout"}>
                    <PanelBody
                        title={__(
                            "General Settings",
                            "premium-blocks-for-gutenberg"
                        )}
                        className="premium-panel-body"
                        initialOpen={true}
                    >
                        <TextControl
                            label={__("Title", 'premium-blocks-for-gutenberg')}
                            value={title}
                            onChange={value => setAttributes({ title: value })}
                        />
                        <ToggleControl
                            label={__("Show Bullet", "premium-blocks-for-gutenberg")}
                            checked={showIcon}
                            onChange={value => setAttributes({ showIcon: value })}
                        />
                        {showIcon && (
                            <>
                                <SelectControl
                                    label={__("Icon Type", 'premium-blocks-for-gutenberg')}
                                    options={[
                                        {
                                            label: __("Icon", 'premium-blocks-for-gutenberg'), value: "icon"
                                        },
                                        {
                                            label: __("Image", 'premium-blocks-for-gutenberg'), value: "image"
                                        }
                                    ]}
                                    value={iconType}
                                    onChange={newType => setAttributes({ iconType: newType })}
                                />
                                {iconType === 'icon' && (
                                    <div className='premium-blocks__base-control'>
                                        <span className='premium-control-title'>{__("Icon", 'premium-blocks-for-gutenberg')}</span>
                                        <FontIconPicker
                                            icons={IcoNames}
                                            onChange={(newIcon) =>
                                                setAttributes({ icon: newIcon })
                                            }
                                            renderFunc={renderSVG}
                                            value={icon}
                                            isMulti={false}
                                            // appendTo="body"
                                            noSelectedPlaceholder={__(
                                                "Select Icon",
                                                "premium-blocks-for-gutenberg"
                                            )}
                                        />
                                    </div>
                                )}
                                {iconType === 'image' && (
                                    <PremiumMediaUpload
                                        type="image"
                                        imageID={imageID}
                                        imageURL={imageURL}
                                        onSelectMedia={media => selectImage(media)}
                                        onRemoveImage={() => removeImage()}
                                    />
                                )}
                            </>
                        )}
                        <ToggleControl
                            label={__("Link", "premium-blocks-for-gutenberg")}
                            checked={enableLink}
                            onChange={value => setAttributes({ enableLink: value })}
                        />
                        {enableLink && (
                            <>
                                <TextControl
                                    label={__("URL", 'premium-blocks-for-gutenberg')}
                                    value={linkURL}
                                    onChange={value => setAttributes({ linkURL: value })}
                                />
                                <ToggleControl
                                    label={__("Open in new tab", "premium-blocks-for-gutenberg")}
                                    checked={openInNewTab}
                                    onChange={value => setAttributes({ openInNewTab: value })}
                                />
                            </>
                        )}
                    </PanelBody>
                </InspectorTab>
                <InspectorTab key={"advance"}>
                    <PremiumResponsiveTabs
                        Desktop={hideDesktop}
                        Tablet={hideTablet}
                        Mobile={hideMobile}
                        onChangeDesktop={(value) =>
                            setAttributes({
                                hideDesktop: value,
                            })
                        }
                        onChangeTablet={(value) =>
                            setAttributes({
                                hideTablet: value,
                            })
                        }
                        onChangeMobile={(value) =>
                            setAttributes({
                                hideMobile: value,
                            })
                        }
                    />
                </InspectorTab>
            </InspectorTabs>
        </InspectorControls>
        <li {...blockProps}>
            <div className={`premium-bullet-list__content-wrap`}>
                {showIcon && (
                    <div className='premium-bullet-list__icon-wrap'>
                        {iconType === 'icon' && (
                            <span className='premium-bullet-list__content-icon'>
                                {/* <i className={icon} /> */}
                                <GenIcon className={`premium-bullet-list-icon ${icon}`}
                                    name={icon}
                                    size={bulletIconFontSize[props.deviceType] +
                                        bulletIconFontSize.unit}
                                    icon={('fa' === icon.substring(0, 2) ? FaIco[icon] : Ico[icon])}
                                    strokeWidth={('fe' === icon.substring(0, 2) ? icons[0].width : undefined)}
                                />
                            </span>
                        )}
                        {iconType === 'image' && (
                            <img src={imageURL} alt={title} />
                        )}
                    </div>
                )}
                {enableLink && (
                    <a className='premium-bullet-list-link' href={linkURL} target={openInNewTab ? '_blank' : '_self'} rel="noopener noreferrer" />
                )}
                <div className='premium-bullet-list__label-wrap'>
                    <RichText
                        tagName="span"
                        placeholder={__("Title")}
                        value={title}
                        className='premium-bullet-list__label'
                        onChange={(val) => setAttributes({ title: val })}
                        multiline={false}
                    />
                </div>
            </div>
        </li>
        {divider && (
            <div className={`premium-bullet-list-divider-${layoutPos}`}></div>
        )}
    </Fragment>;
}

export default withSelect((select) => {
    const { __experimentalGetPreviewDeviceType = null } =
        select("core/edit-post");
    let deviceType = __experimentalGetPreviewDeviceType
        ? __experimentalGetPreviewDeviceType()
        : null;

    return {
        deviceType: deviceType,
    };
})(Edit);
