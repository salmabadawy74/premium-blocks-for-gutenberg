/**
 * External dependencies
 */
import MicroModal from 'micromodal';

// Responsive navigation toggle.
function navigationToggleModal(modal) {
    const dialogContainer = modal.querySelector(
        `.premium-navigation__responsive-dialog`
    );

    const isHidden = 'true' === modal.getAttribute('aria-hidden');

    modal.classList.toggle('has-modal-open', !isHidden);
    dialogContainer.toggleAttribute('aria-modal', !isHidden);

    if (isHidden) {
        dialogContainer.removeAttribute('role');
        dialogContainer.removeAttribute('aria-modal');
    } else {
        dialogContainer.setAttribute('role', 'dialog');
        dialogContainer.setAttribute('aria-modal', 'true');
    }

    // Add a class to indicate the modal is open.
    const htmlElement = document.documentElement;
    htmlElement.classList.toggle('has-modal-open');
}

// Open on click functionality.
function closeSubmenus(element) {
    element
        .querySelectorAll('[aria-expanded="true"]')
        .forEach(function (toggle) {
            toggle.setAttribute('aria-expanded', 'false');
        });
}

function toggleSubmenuOnClick(event) {
    const buttonToggle = event.target.closest('[aria-expanded]');
    const isSubmenuOpen = buttonToggle.getAttribute('aria-expanded');

    if (isSubmenuOpen === 'true') {
        closeSubmenus(buttonToggle.closest('.premium-navigation-item'));
    } else {
        // Close all sibling submenus.
        const parentElement = buttonToggle.closest(
            '.premium-navigation-item'
        );
        const navigationParent = buttonToggle.closest(
            '.premium-navigation__submenu-container, .premium-navigation__container'
        );
        navigationParent
            .querySelectorAll('.premium-navigation-item')
            .forEach(function (child) {
                if (child !== parentElement) {
                    closeSubmenus(child);
                }
            });
        // Open submenu.
        buttonToggle.setAttribute('aria-expanded', 'true');
    }
}

// Necessary for some themes such as TT1 Blocks, where
// scripts could be loaded before the body.
window.addEventListener('load', () => {
    MicroModal.init({
        onShow: navigationToggleModal,
        onClose: navigationToggleModal,
        openClass: 'is-menu-open',
    });

    const submenuButtons = document.querySelectorAll(
        '.premium-navigation-submenu__toggle'
    );

    submenuButtons.forEach(function (button) {
        button.addEventListener('click', toggleSubmenuOnClick);
    });

    // Close on click outside.
    document.addEventListener('click', function (event) {
        const navigationBlocks = document.querySelectorAll(
            '.wp-block-premium-navigation'
        );
        navigationBlocks.forEach(function (block) {
            if (!block.contains(event.target)) {
                closeSubmenus(block);
            }
        });
    });
    // Close on focus outside.
    document.addEventListener('keyup', function (event) {
        const submenuBlocks = document.querySelectorAll(
            '.premium-navigation-item.has-child'
        );
        submenuBlocks.forEach(function (block) {
            if (!block.contains(event.target)) {
                closeSubmenus(block);
            }
        });
    });
});
