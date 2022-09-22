const pushHistory = (tab) => {
    if (tab) {
        const url = new URL(window.location);
        url.searchParams.set("tab", tab);
        window.history.pushState({}, "", url);
        // window.location.reload();
    }
};

export default pushHistory;
