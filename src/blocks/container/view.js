import { checkSelector, setElementsHeight, resetHeight } from "./utils";

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
        Object.keys(PBG_EqualHeight).map(id => {
            if (id === 'breakPoints') {
                return;
            }
            const attributes = PBG_EqualHeight[id].attributes;
            const containerBlock = document.querySelector(`.premium-block-${id}`);
            const { customSelectors, equalHeightBlocks, equalHeightDevices } = attributes;
            if (equalHeightDevices.includes(device)) {
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
            } else {
                if (equalHeightBlocks.length) {
                    for (const block of equalHeightBlocks) {
                        const blockName = block.includes('core') ? block.replace('core/', '') : block.replaceAll('/', '-');
                        const blockClass = `wp-block-${blockName}`;
                        const allBlocksType = containerBlock.querySelectorAll(`.${blockClass}`);
                        resetHeight(allBlocksType);
                    }
                }

                if (customSelectors?.length) {
                    for (const selector of customSelectors) {
                        if (checkSelector(selector)) {
                            const allElements = containerBlock.querySelectorAll(selector);
                            resetHeight(allElements);
                        }
                    }
                }
            }
        })
    }
}
window.addEventListener("resize", applyEqualHeight, false);
applyEqualHeight();