const { __ } = wp.i18n;

const {
  SelectControl,

  TabPanel,
  Dashicon,
} = wp.components;

// Extend component
const { Component, Fragment } = wp.element;

/**
 * Internal dependencies
 */
function PremiumResponsiveSelect(props) {
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

        if ("mobile" === tab.name) {
          tabout = (
            <Fragment>
              <SelectControl
                label={__(props.sizeMobileText.label)}
                value={props.sizeMobileText.value}
                onChange={(value) =>
                  props.setAttributes({
                    [props.sizeMobileText.value]: value,
                  })
                }
                options={props.options}
                beforeIcon="editor-textcolor"
                allowReset
                initialPosition={30}
              />
            </Fragment>
          );
        } else if ("tablet" === tab.name) {
          tabout = (
            <Fragment>
              <SelectControl
                label={__(props.sizeTabletText.label)}
                value={props.sizeTabletText.value}
                onChange={(value) =>
                  props.setAttributes({
                    [props.sizeTabletText.value]: value,
                  })
                }
                options={props.options}
                beforeIcon="editor-textcolor"
                allowReset
                initialPosition={30}
              />
            </Fragment>
          );
        } else {
          tabout = (
            <Fragment>
              <SelectControl
                label={__(props.size.label)}
                value={props.size.value}
                onChange={(value) =>
                  props.setAttributes({
                    [props.size.value]: value,
                  })
                }
                options={props.options}
                beforeIcon="editor-textcolor"
                allowReset
                initialPosition={30}
              />
            </Fragment>
          );
        }

        return <div>{tabout}</div>;
      }}
    </TabPanel>
  );
}
export default PremiumResponsiveSelect;
