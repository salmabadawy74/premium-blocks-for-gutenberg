import { __ } from '@wordpress/i18n';
import PremiumTypo from '../../../components/premium-typo';
import ScreenHeader from "../components/header"
import defaults from '../helpers/defaults';
const TypographyScreen = props => {
    const { typography } = defaults;
    return <>
        <ScreenHeader
            title={__('Typography')}
            description={__('Manage the typography settings for different elements.')}
        />
        <div className='premium-typography-screen'>
            <PremiumTypo value={typography.h1} title={__('Heading 1')} titleTag={'h1'} onChange={(newValue => console.log(newValue))} />
        </div>
    </>
}

export default TypographyScreen