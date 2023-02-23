import { useState } from "@wordpress/element";
import { __ } from "@wordpress/i18n";
import AdvancedSwitcher from "../common/AdvancedSwitcher";
import CheckBox from "../common/checkBox";
import Container from "../common/Container";
import { useDispatch, useSelector } from "react-redux";
import { updateSettings } from "../features/settings/index";
import { actions } from "../features/Alert/AlertSlice";
const Setting = () => {
    const settings = useSelector((state) => state.settingStates.apiSettings);
    const [mapApi, setMapApi] = useState(settings?.["premium-map-key"]);
    const dispatch = useDispatch();
    const onChangeData = async (key, value) => {
        const updatedData = { ...settings };
        updatedData[key] = value;
        dispatch(updateSettings(updatedData));
        const body = new FormData();

        body.append("action", "pb-panel-update-settings");
        body.append("nonce", PremiumBlocksPanelData.nonce);
        body.append("value", JSON.stringify(updatedData));

        try {
            const response = await fetch(PremiumBlocksPanelData.ajaxurl, {
                method: "POST",
                body,
            });
            if (response.status === 200) {
                const { success, data } = await response.json();
                if (success && data.setting) {
                    dispatch(
                        actions.createAlert({
                            message: __("Settings saved.", "premium-blocks-for-gutenberg"),
                            type: "success",
                        })
                    );
                }
            }
        } catch (e) {
            console.log(e);
            dispatch(
                actions.createAlert({
                    message: __("An unknown error occurred.", ""),
                    type: "error",
                })
            );
        }
    };

    return (
        <Container>
            <div className="pb-settings">
                <div className="pb-api-settings">
                    <div className="pb-advanced-input pb-advanced-input-contain-subTitle">
                        <div>
                            <h2>
                                {__(
                                    "Google Maps API Key:",
                                    "premium-blocks-for-gutenberg"
                                )}
                            </h2>
                            <span>
                                {__(
                                    "Premium Maps Block requires Google API key to be entered. If you don’t have one,",
                                    "premium-blocks-for-gutenberg"
                                )}{" "}
                                <a
                                    href="https://developers.google.com/maps/documentation/javascript/get-api-key"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {__(
                                        "Click Here",
                                        "premium-blocks-for-gutenberg"
                                    )}
                                </a>{" "}
                                {__(
                                    "to get your key.",
                                    "premium-blocks-for-gutenberg"
                                )}
                            </span>
                        </div>
                        <div>
                            <input
                                type="text"
                                value={mapApi}
                                onChange={(e) => setMapApi(e.target.value)}
                                placeholder={__(
                                    "API Key",
                                    "premium-blocks-for-gutenberg"
                                )}
                            />
                        </div>
                        <button
                            type="button"
                            className="pb-button secondary primary pb-button-save-map"
                            onClick={() =>
                                onChangeData("premium-map-key", mapApi)
                            }
                        >
                            Save
                        </button>
                    </div>
                    <div className="pb-advanced-input-subTitle">
                        <CheckBox
                            label={__(
                                "Enable Maps API JS File",
                                "premium-blocks-for-gutenberg"
                            )}
                            onChange={(checked) =>
                                onChangeData("premium-map-api", checked)
                            }
                            checked={settings?.["premium-map-api"] || false}
                            description={__(
                                "This will Enable the API JS file if it's not included by another theme or plugin.",
                                "premium-blocks-for-gutenberg"
                            )}
                        />
                    </div>
                </div>
                <div className="pb-setting-options">
                    <AdvancedSwitcher
                        label={__(
                            "Enable Font Awesome Icons",
                            "premium-blocks-for-gutenberg"
                        )}
                        onChange={(checked) =>
                            onChangeData("premium-fa-css", checked)
                        }
                        checked={settings?.["premium-fa-css"] || false}
                        description={__(
                            "This will load Font Awesome Icons to be used within Premium Blocks.",
                            "premium-blocks-for-gutenberg"
                        )}
                    />
                    <AdvancedSwitcher
                        label={__(
                            "Allow JSON Uploads",
                            "premium-blocks-for-gutenberg"
                        )}
                        onChange={(checked) =>
                            onChangeData("premium-upload-json", checked)
                        }
                        checked={settings?.["premium-upload-json"] || false}
                        description={__(
                            "This option will be used to upload JSON files in lottie animation block.",
                            "premium-blocks-for-gutenberg"
                        )}
                    />
                    <AdvancedSwitcher
                        label={__(
                            "Enable Global Setting SideBar in Post Editor",
                            "premium-blocks-for-gutenberg"
                        )}
                        onChange={(checked) =>
                            onChangeData("enable-post-editor-sidebar", checked)
                        }
                        checked={settings?.["enable-post-editor-sidebar"] || false}
                        description={__(
                            "This option will be used to Enable Global Setting SideBar in Post Editor.",
                            "premium-blocks-for-gutenberg"
                        )}
                    />
                    {PremiumBlocksPanelData?.isBlockTheme && (
                        <AdvancedSwitcher
                            label={__(
                                "Enable Global Setting SideBar in Site Editor",
                                "premium-blocks-for-gutenberg"
                            )}
                            onChange={(checked) =>
                                onChangeData("enable-site-editor-sidebar", checked)
                            }
                            checked={settings?.["enable-site-editor-sidebar"] || false}
                            description={__(
                                "This option will be used to Enable Global Setting SideBar in Site Editor.",
                                "premium-blocks-for-gutenberg"
                            )}
                            style={{
                                opacity: !settings?.["enable-post-editor-sidebar"] && '0.4',
                                pointerEvents: !settings?.["enable-post-editor-sidebar"] && 'none',
                            }}
                        />
                    )}
                </div>
            </div>
        </Container>
    );
};

export default Setting;
