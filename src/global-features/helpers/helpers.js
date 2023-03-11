export const checkSelector = (selector) => {
    try {
        const checker = document.querySelector(selector);
        return true;
    } catch (e) {
        return false;
    }
}

export const isPremiumBlock = (blockName) => {
    return blockName.startsWith('premium/');
}