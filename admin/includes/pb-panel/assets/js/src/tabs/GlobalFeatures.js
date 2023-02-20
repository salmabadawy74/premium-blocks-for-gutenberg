import { useState } from "@wordpress/element";
import { __ } from "@wordpress/i18n";
import AdvancedSwitcher from "../common/AdvancedSwitcher";
import Container from "../common/Container";
import { useDispatch, useSelector } from "react-redux";
import { updateGlobalFeatures } from "../features/global-features/index";
import { actions } from "../features/Alert/AlertSlice";

const GlobalFeatures = props => {
    const settings = useSelector((state) => state.globalFeatures.data);
    const dispatch = useDispatch();

    const onChangeData = async (key, value) => {
        const updatedData = { ...settings };
        updatedData[key] = value;
        dispatch(updateGlobalFeatures(updatedData));
        const body = new FormData();
        body.append("action", "pb-panel-update-global-features");
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

    return <Container>
        <div className="pb-settings">
            <div className="pb-setting-options">
                <AdvancedSwitcher
                    label={__(
                        "Equal Height",
                        "premium-blocks-for-gutenberg"
                    )}
                    onChange={(checked) =>
                        onChangeData("premium-equal-height", checked)
                    }
                    checked={settings?.["premium-equal-height"] || false}
                    description={__(
                        "Make your blocks the same height with just ONE click.",
                        "premium-blocks-for-gutenberg"
                    )}
                />
                <AdvancedSwitcher
                    label={__(
                        "Floating Effect",
                        "premium-blocks-for-gutenberg"
                    )}
                    onChange={(checked) =>
                        onChangeData("premium-floating-effect", checked)
                    }
                    checked={settings?.["premium-floating-effect"] || false}
                    description={__(
                        "Apply advanced floating effects on any Premium Blocks for Gutenberg block.",
                        "premium-blocks-for-gutenberg"
                    )}
                />
                <AdvancedSwitcher
                    label={__(
                        "Apply Floating Effect to All Gutenberg Blocks",
                        "premium-blocks-for-gutenberg"
                    )}
                    onChange={(checked) =>
                        onChangeData("premium-floating-effect-all-blocks", checked)
                    }
                    checked={settings?.["premium-floating-effect-all-blocks"] || false}
                    description={__(
                        "This option will be used to Apply Floating Effect to All Gutenberg Blocks.",
                        "premium-blocks-for-gutenberg"
                    )}
                    style={{
                        opacity: !settings?.["premium-floating-effect"] && '0.4',
                        pointerEvents: !settings?.["premium-floating-effect"] && 'none',
                    }}
                />
                <AdvancedSwitcher
                    label={__(
                        "Entrance Animation",
                        "premium-blocks-for-gutenberg"
                    )}
                    onChange={(checked) =>
                        onChangeData("premium-entrance-animation", checked)
                    }
                    checked={settings?.["premium-entrance-animation"] || false}
                    description={__(
                        "Apply entrance animation on any Premium Blocks for Gutenberg block.",
                        "premium-blocks-for-gutenberg"
                    )}
                />
                <AdvancedSwitcher
                    label={__(
                        "Apply Entrance Animation to All Gutenberg Blocks",
                        "premium-blocks-for-gutenberg"
                    )}
                    onChange={(checked) =>
                        onChangeData("premium-entrance-animation-all-blocks", checked)
                    }
                    checked={settings?.["premium-entrance-animation-all-blocks"] || false}
                    description={__(
                        "This option will be used to Apply Entrance Animation to All Gutenberg Blocks.",
                        "premium-blocks-for-gutenberg"
                    )}
                    style={{
                        opacity: !settings?.["premium-entrance-animation"] && '0.4',
                        pointerEvents: !settings?.["premium-entrance-animation"] && 'none',
                    }}
                />
            </div>
        </div>
    </Container>
}

export default GlobalFeatures;