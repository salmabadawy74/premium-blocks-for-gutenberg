import { checkSelector, setElementsHeight } from "./utils";

if (Object.keys(PBG_EqualHeight).length) {
    Object.keys(PBG_EqualHeight).map(id => {
        const attributes = PBG_EqualHeight[id].attributes;
        const containerBlock = document.querySelector(`.premium-block-${id}`);
        const { customSelectors, equalHeightBlocks } = attributes;

        if (equalHeightBlocks.length) {
            for (const block of equalHeightBlocks) {
                const blockName = block.includes('core') ? block.replace('core/', '') : block.replaceAll('/', '-');
                const blockClass = `wp-block-${blockName}`;
                const allBlocksType = containerBlock.querySelectorAll(`.${blockClass}`);
                setElementsHeight(allBlocksType);
            }
        }

        if (customSelectors?.length) {
            for (const selector of customSelectors) {
                if (checkSelector(selector)) {
                    const allElements = containerBlock.querySelectorAll(selector);
                    setElementsHeight(allElements);
                }
            }
        }
    })
}