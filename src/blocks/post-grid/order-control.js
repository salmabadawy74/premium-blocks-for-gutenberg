/**
 * WordPress dependencies
 */
import { SelectControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";

const orderOptions = [
    {
        label: __("Newest to Oldest", "premium-blocks-for-gutenberg"),
        value: "date/desc",
    },
    {
        label: __("Oldest to Newest", "premium-blocks-for-gutenberg"),
        value: "date/asc",
    },
    { label: __("A → Z", "premium-blocks-for-gutenberg"), value: "title/asc" },
    { label: __("Z → A", "premium-blocks-for-gutenberg"), value: "title/desc" },
    {
        label: __("Last Modified to Oldest", "premium-blocks-for-gutenberg"),
        value: "modified/desc",
    },
    {
        label: __("Oldest Modified to Last", "premium-blocks-for-gutenberg"),
        value: "modified/asc",
    },
    {
        label: __("Menu Order", "premium-blocks-for-gutenberg"),
        value: "menu_order/asc",
    },
    { label: __("Random", "premium-blocks-for-gutenberg"), value: "rand/desc" },
];
function OrderControl({ order, orderBy, onChange }) {
    return (
        <SelectControl
            __nextHasNoMarginBottom
            label={__("Order by")}
            value={`${orderBy}/${order}`}
            options={orderOptions}
            onChange={(value) => {
                const [newOrderBy, newOrder] = value.split("/");
                onChange({ order: newOrder, orderBy: newOrderBy });
            }}
        />
    );
}

export default OrderControl;
