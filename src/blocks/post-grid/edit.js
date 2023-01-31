import classnames from "classnames";
import {
    MultiButtonsControl as ResponsiveRadioControl,
    InspectorTabs,
    InspectorTab,
    PremiumResponsiveTabs,
    SpacingComponent as SpacingControl,
    AdvancedColorControl as AdvancedPopColorControl,
    Icons,
    MultiButtonsControl as ResponsiveRadioControl,
    PremiumBackgroundControl,
    PremiumBorder,
} from "@pbg/components";
import { generateBlockId, paddingCss } from "@pbg/helpers";

const { __ } = wp.i18n;
const { withSelect } = wp.data;
const { useEffect, Fragment } = wp.element;
const { PanelBody, ToggleControl } = wp.components;
const { InspectorControls, useBlockProps, InnerBlocks } = wp.blockEditor;

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
    const { themeSupportsLayout } = useSelect((select) => {
        const { getSettings } = select(blockEditorStore);
        return { themeSupportsLayout: getSettings()?.supportsLayout };
    }, []);
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
    const gridClasses = gridCheck ? "premium-blog-even" : "premium-blog-list";

    return (
        <Fragment>
            <div
                {...useBlockProps({
                    className: classnames(
                        className,
                        ` ${blockId} premium-blog-post-outer-container ${gridClasses}`,
                        {
                            " premium-desktop-hidden": hideDesktop,
                            " premium-tablet-hidden": hideTablet,
                            " premium-mobile-hidden": hideMobile,
                        }
                    ),
                })}
            >
                {...innerBlocksProps}
            </div>
        </Fragment>
    );
}
