const getLocalStorage = (key = false) => {
    if (!window.localStorage) {
        return null;
    }

    if (!key) {
        return localStorage;
    }

    const PBGSettingState = localStorage.getItem(key);

    if (PBGSettingState) {
        return JSON.parse(PBGSettingState);
    }

    return null;
};

export default getLocalStorage;
