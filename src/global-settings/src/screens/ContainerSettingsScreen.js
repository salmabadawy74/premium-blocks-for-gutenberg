import { __ } from '@wordpress/i18n';
import ScreenHeader from "../components/header"

const ContainerSettingsScreen = props => {
    return <>
        <ScreenHeader
            title={__('Container Settings')}
            description={__('Manage container default width and devices breakpoints.')}
        />
    </>
}

export default ContainerSettingsScreen