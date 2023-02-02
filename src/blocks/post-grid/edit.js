import { useSelect, useDispatch } from "@wordpress/data";
import {
    MultiButtonsControl as ResponsiveRadioControl,
    InspectorTabs,
    InspectorTab,
    PremiumResponsiveTabs,
    SpacingComponent as SpacingControl,
    AdvancedColorControl as AdvancedPopColorControl,
    Icons,
    PremiumBackgroundControl,
    PremiumBorder,
} from "@pbg/components";
import { generateBlockId, paddingCss } from "@pbg/helpers";

const { __ } = wp.i18n;
const { withSelect } = wp.data;
const { useEffect, Fragment } = wp.element;
const { PanelBody, ToggleControl } = wp.components;
import Inspector from "./inspector";
import {
    BlockControls,
    InspectorControls,
    useBlockProps,
    store as blockEditorStore,
    useInnerBlocksProps,
} from "@wordpress/block-editor";
import { useInstanceId } from "@wordpress/compose";
/**
 * Internal dependencies
 */
const DEFAULTS_POSTS_PER_PAGE = 3;

const TEMPLATE = [["premium/post-template"]];
export default function QueryContent({ attributes, setAttributes }) {
    const { queryId, query, tagName: TagName = "div" } = attributes;
    const { __unstableMarkNextChangeAsNotPersistent } =
        useDispatch(blockEditorStore);
    const instanceId = useInstanceId(QueryContent);
    const blockProps = useBlockProps();
    const innerBlocksProps = useInnerBlocksProps(blockProps, {
        template: TEMPLATE,
    });
    const { postsPerPage } = useSelect((select) => {
        const { getSettings } = select(blockEditorStore);
        return {
            postsPerPage:
                +getSettings().postsPerPage || DEFAULTS_POSTS_PER_PAGE,
        };
    }, []);
    useEffect(() => {
        const newQuery = {};
        if (!query.perPage && postsPerPage) {
            newQuery.perPage = postsPerPage;
        }
        if (!!Object.keys(newQuery).length) {
            __unstableMarkNextChangeAsNotPersistent();
            updateQuery(newQuery);
        }
    }, [query.perPage]);
    // We need this for multi-query block pagination.
    // Query parameters for each block are scoped to their ID.
    useEffect(() => {
        if (!Number.isFinite(queryId)) {
            __unstableMarkNextChangeAsNotPersistent();
            setAttributes({ queryId: instanceId });
        }
    }, [queryId, instanceId]);
    const updateQuery = (newQuery) =>
        setAttributes({ query: { ...query, ...newQuery } });
    return (
        <Fragment>
            <Inspector attributes={attributes} setQuery={updateQuery} />
            <div {...innerBlocksProps} />
        </Fragment>
    );
}
