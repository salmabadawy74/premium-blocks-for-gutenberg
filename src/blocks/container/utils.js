export const getBiggestHeight = (elements) => {
    let maxHeight = 0;
    for (const element of elements) {
        const elementHeight = element.getBoundingClientRect().height;
        if (elementHeight > maxHeight) {
            maxHeight = elementHeight;
        }
    }
    return maxHeight;
}

export const setElementsHeight = (elements) => {
    if (elements.length) {
        const maxHeight = getBiggestHeight(elements);
        Array.from(elements).forEach(element => {
            element.style.height = `${maxHeight}px`;
        })
    }
}
export const resetHeight = (elements) => {
    if (elements.length) {
        Array.from(elements).forEach(element => {
            element.style.removeProperty("height");
        })
    }
}
export const resetBlocksHeight = (block, container) => {
    const blockName = block.includes('core') ? block.replace('core/', '') : block.replaceAll('/', '-');
    const blockClass = `wp-block-${blockName}`;
    const allBlocksType = container?.querySelectorAll(`.${blockClass}`) || [];
    resetHeight(allBlocksType);
}

export const checkSelector = (selector) => {
    try {
        const checker = document.querySelector(selector);
        return true;
    } catch (e) {
        return false;
    }
}