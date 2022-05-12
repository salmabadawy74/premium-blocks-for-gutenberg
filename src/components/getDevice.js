const { useSelect, useDispatch } = wp.data;

export const useDeviceType = () => {
    const { deviceType } = useSelect((select) => {
        const {
            __experimentalGetPreviewDeviceType = null,
        } = select('core/edit-post');
        return __experimentalGetPreviewDeviceType ? __experimentalGetPreviewDeviceType() : 'Desktop';
    }, []);

    return deviceType
}