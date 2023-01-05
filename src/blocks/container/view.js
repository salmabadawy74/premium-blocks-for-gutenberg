import { checkSelector, setElementsHeight } from "./utils";

if (Object.keys(PBG_EqualHeight).length) {
    console.log(PBG_EqualHeight);
    Object.keys(PBG_EqualHeight).map(id => {
        const attributes = PBG_EqualHeight[id].attributes;
        const containerBlock = document.querySelector(`.premium-block-${id}`);
        const { equalHeightType, customSelectors, equalHeightBlocks } = attributes;

        if (equalHeightType === 'blocks') {
            if (equalHeightBlocks.length) {
                for (const block of equalHeightBlocks) {
                    const blockName = block.includes('core') ? block.replace('core/', '') : block.replaceAll('/', '-');
                    const blockClass = `wp-block-${blockName}`;
                    const allBlocksType = containerBlock.querySelectorAll(`.${blockClass}`);
                    setElementsHeight(allBlocksType);
                }
            }
        }

        if (equalHeightType === 'custom-selector') {
            if (customSelectors?.length) {
                for (const selector of customSelectors) {
                    if (checkSelector(selector)) {
                        const allElements = containerBlock.querySelectorAll(selector);
                        setElementsHeight(allElements);
                    }
                }
            }
        }
    })
}