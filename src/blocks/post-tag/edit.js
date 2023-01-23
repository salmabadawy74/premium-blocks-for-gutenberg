import { Fragment, useEffect } from "react";
import { useSelect, withSelect, select } from "@wordpress/data";
import { store as coreStore } from "@wordpress/core-data";
import { useEntityProp } from "@wordpress/core-data";
import { __ } from "@wordpress/i18n";

const { dateI18n, format, __experimentalGetSettings } = wp.date;
import {
    generateBlockId,
    typographyCss,
    paddingCss,
    marginCss,
} from "@pbg/helpers";
import {
    InspectorControls,
    useBlockProps,
    RichText,
} from "@wordpress/block-editor";
import {
    PanelBody,
    SelectControl,
    TextControl,
    ToggleControl,
} from "@wordpress/components";
import {
    MultiButtonsControl,
    InspectorTabs,
    InspectorTab,
    PremiumResponsiveTabs,
    SpacingComponent,
    AdvancedColorControl as AdvancedPopColorControl,
    Icons,
    WebfontLoader,
    PremiumTypo,
    alignIcons,
} from "@pbg/components";
function Tags(props) {
    const {
        isSelected,
        context: { postId, postType, queryId },
        attributes,
        setAttributes,
        taxonomies,
    } = props;
    const {
        displayPostTags,
        typography,
        color,
        hoverColor,
        hideDesktop,
        hideTablet,
        hideMobile,
    } = attributes;
    // const selectedTerm = useSelect(
    //     (select) => {
    //         const { getTaxonomy } = select(coreStore);
    //         const taxonomy = getTaxonomy(term);
    //         return taxonomy?.visibility?.publicly_queryable ? taxonomy : {};
    //     },
    //     [term]
    // );
    const [tags, setTags] = useEntityProp("postType", postType, "tags", postId);
    console.log(taxonomies);
    let tagName = [];
    if (tagList) {
        tagList.map((tag, thisIndex) => {
            if (tag.id == post.tags[thisIndex]) {
                tagName.push(tag.name);
            }
        });
    }
    if (tagName.length > 0 && displayPostTags) {
        return (
            <div className={`premium-blog-post-tags-container`}>
                <i className={`fa fa-tags fa-fw`}></i>
                {tagName.join(",")}
            </div>
        );
    } else {
        return null;
    }
}
export default withSelect((select, props) => {
    const {
        context: { postId, postType, queryId },
    } = props;

    return {
        taxonomies: select(coreStore).getTaxonomies({ per_page: -1 }),
    };
})(Tags);
