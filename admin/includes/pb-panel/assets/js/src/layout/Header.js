import Logo from "../common/logo"
const { __ } = wp.i18n;

const Header = () => {
    return <div className='pb-panel-header'>
        <div className='logo'>
            <Logo />
        </div>
        <a href="https://premiumblocks.io/docs/" className='docs pb-button secondary' target="_blank">{__('Knowledge Base    ', "premium-blocks-for-gutenberg")}</a>
    </div>
}

export default Header