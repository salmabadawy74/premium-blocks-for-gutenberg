import { useState } from "@wordpress/element";
import { __ } from "@wordpress/i18n";
import AdvancedSwitcher from "../common/AdvancedSwitcher";
import Container from "../common/Container";
const { Dashicon } = wp.components;
import {
    store as coreStore,
    useEntityProp,
    useEntityRecords,
} from "@wordpress/core-data";
import { useDispatch } from "@wordpress/data";

const Setting = () => {
    const [data, setData] = useState(PremiumBlocksPanelData.apiData);
    const { saveEntityRecord } = useDispatch(coreStore);
    const onChangeData = async (key, value) => {
        const updatedData = { ...data };
        updatedData[key] = value;
        setData(updatedData);
        await saveEntityRecord("root", "site", {
            pbg_maps_settings: updatedData,
        });
    };
    return (
        <Container>
            <div className="pb-settings">
                <div className="pb-api-settings">
                    <div className="pb-advanced-input">
                        <div>
                            <h2>
                                {__(
                                    "Google Maps API Key:",
                                    "premium-blocks-for-gutenberg"
                                )}
                            </h2>
                            <span>
                                {__(
                                    "Premium Maps Block requires Google API key to be entered below. If you don’t have one,",
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
                                value={data?.["premium-map-key"]}
                                onChange={(e) =>
                                    onChangeData(
                                        "premium-map-key",
                                        e.target.value
                                    )
                                }
                                placeholder={__(
                                    "API Key",
                                    "premium-blocks-for-gutenberg"
                                )}
                            />
                        </div>
                    </div>
                </div>
                <div className="pb-setting-options">
                    <AdvancedSwitcher
                        label={__(
                            "Enable Maps API JS File",
                            "premium-blocks-for-gutenberg"
                        )}
                        onChange={(checked) =>
                            onChangeData("premium-map-api", checked)
                        }
                        checked={data?.["premium-map-api"]}
                        description={__(
                            "This will Enable the API JS file if it's not included by another theme or plugin.",
                            "premium-blocks-for-gutenberg"
                        )}
                    />
                    <AdvancedSwitcher
                        label={__(
                            "Enable Font Awesome Icons",
                            "premium-blocks-for-gutenberg"
                        )}
                        onChange={(checked) =>
                            onChangeData("premium-fa-css", checked)
                        }
                        checked={data?.["premium-fa-css"]}
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
                        checked={data?.["premium-upload-json"]}
                        description={__(
                            "This option will be used to upload JSON files in lottie animation block.",
                            "premium-blocks-for-gutenberg"
                        )}
                    />
                </div>
            </div>
        </Container>
    );
};

export default Setting;
