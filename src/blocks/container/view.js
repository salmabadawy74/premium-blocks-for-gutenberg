import { checkSelector, setElementsHeight, resetHeight } from "./utils";

const blocksHeightHandler = (blocks, containerBlock, type = 'set') => {
    if (blocks.length) {
        for (const block of blocks) {
            const blockName = block.includes('core') ? block.replace('core/', '') : block.replaceAll('/', '-');
            const blockClass = `wp-block-${blockName}`;
            const allBlocksType = containerBlock.querySelectorAll(`.${blockClass}`);
            if (type === 'set') {
                setElementsHeight(allBlocksType);
                return;
            }
            resetHeight(allBlocksType);
        }
    }
}

const blocksElementsHeightHandler = (selectors, containerBlock, type = 'set') => {
    if (selectors?.length) {
        for (const selector of selectors) {
            if (checkSelector(selector)) {
                const allBlocksElements = containerBlock.querySelectorAll(selector);
                if (type === 'set') {
                    setElementsHeight(allBlocksElements);
                    return;
                }
                resetHeight(allBlocksElements);
            }
        }
    }
}
const applyEqualHeight = () => {
    if (Object.keys(PBG_EqualHeight).length) {
        const { breakPoints } = PBG_EqualHeight;
        let device = 'desktop';
        if (window.matchMedia(breakPoints.desktop).matches) {
            device = 'desktop';
        } else if (window.matchMedia(breakPoints.tablet).matches && !window.matchMedia(breakPoints.mobile).matches) {
            device = 'tablet';
        } else if (window.matchMedia(breakPoints.mobile).matches) {
            device = 'mobile';
        }
        const equalHeightData = { ...PBG_EqualHeight };
        delete equalHeightData.breakPoints;
        Object.keys(equalHeightData).map(id => {
            const attributes = equalHeightData[id].attributes;
            const containerBlock = document.querySelector(`.premium-block-${id}`);
            const { customSelectors, equalHeightBlocks, equalHeightDevices } = attributes;

            if (equalHeightDevices.includes(device)) {
                blocksHeightHandler(equalHeightBlocks, containerBlock);
                blocksElementsHeightHandler(customSelectors, containerBlock);
            } else {
                blocksHeightHandler(equalHeightBlocks, containerBlock, 'reset');
                blocksElementsHeightHandler(customSelectors, containerBlock, 'reset');
            }
        })
    }
}
window.addEventListener("resize", applyEqualHeight, false);
applyEqualHeight();