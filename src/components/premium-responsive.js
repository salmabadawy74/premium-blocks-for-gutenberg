const { __ } = wp.i18n;

const { RangeControl, ButtonGroup, Button, TabPanel, Dashicon } = wp.components;

// Extend component
const { Component, Fragment } = wp.element;

/**
 * Internal dependencies
 */
import map from "lodash/map";

function PremiumResponsive(props) {
  let sizeTypes;

  if ("sizeTypes" in props) {
    sizeTypes = props.sizeTypes;
  } else {
    sizeTypes = [
      { key: "px", name: __("px") },
      { key: "em", name: __("em") },
    ];
  }

  const sizeTypesControls = (
    <ButtonGroup
      className="premium-size-type-field"
      aria-label={__("Size Type")}
    >
      {map(sizeTypes, ({ name, key }) => (
        <Button
          key={key}
          className="premium-size-btn"
          isSmall
          isPrimary={props.type.value === key}
          aria-pressed={props.type.value === key}
          onClick={() => props.setAttributes({ [props.typeLabel]: key })}
        >
          {name}
        </Button>
      ))}
    </ButtonGroup>
  );

  return (
    <TabPanel
      className="premium-size-type-field-tabs"
      activeClass="active-tab"
      tabs={[
        {
          name: "desktop",
          title: <Dashicon icon="desktop" />,
          className: "premium-desktop-tab premium-responsive-tabs",
        },
        {
          name: "tablet",
          title: <Dashicon icon="tablet" />,
          className: "premium-tablet-tab premium-responsive-tabs",
        },
        {
          name: "mobile",
          title: <Dashicon icon="smartphone" />,
          className: "premium-mobile-tab premium-responsive-tabs",
        },
      ]}
    >
      {(tab) => {
        let tabout;

        if ( "mobile" === tab.name )
        {
          document.querySelector( '.editor-styles-wrapper' ).style.width = '360px';
          document.querySelector( '.editor-styles-wrapper' ).style.margin = '36px auto';
          tabout = (
            <Fragment>
              {sizeTypesControls}
              <RangeControl
                label={__(props.sizeMobileText)}
                value={props.sizeMobile.value}
                onChange={(value) =>
                  props.setAttributes({ [props.sizeMobileLabel]: value })
                }
                min={0}
                max={200}
                step={props.steps}
                beforeIcon="editor-textcolor"
                allowReset
              />
            </Fragment>
          );
        } else if ("tablet" === tab.name) {
          document.querySelector( '.editor-styles-wrapper' ).style.width = '780px';
          document.querySelector( '.editor-styles-wrapper' ).style.margin = '36px auto';
          tabout = (
            <Fragment>
              {sizeTypesControls}
              <RangeControl
                label={__(props.sizeTabletText)}
                value={props.sizeTablet.value}
                onChange={(value) =>
                  props.setAttributes({ [props.sizeTabletLabel]: value })
                }
                min={0}
                max={200}
                step={props.steps}
                beforeIcon="editor-textcolor"
                allowReset
              />
            </Fragment>
          );
        } else {
          document.querySelector( '.editor-styles-wrapper' ).style.width = '1024px';
          tabout = (
            <Fragment>
              {sizeTypesControls}
              <RangeControl
                label={__(props.sizeText)}
                value={props.size.value}
                onChange={(value) =>
                  props.setAttributes({ [props.sizeLabel]: value })
                }
                min={0}
                max={200}
                step={props.steps}
                beforeIcon="editor-textcolor"
                allowReset
              />
            </Fragment>
          );
        }

        return <div>{tabout}</div>;
      }}
    </TabPanel>
  );
}

export default PremiumResponsive;
