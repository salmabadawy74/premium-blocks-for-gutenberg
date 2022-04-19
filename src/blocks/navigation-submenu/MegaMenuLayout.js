import { ButtonGroup, Tooltip, Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import Icons from './layout-icons';

const MegaMenuLayout = (props) => {
    let defaultParams = {
        '6': {
            'equal': {
                tooltip: __('Equal Width Columns', 'kemet'),
                icon: 'sixcol',
            },
            'left-six-heavy': {
                tooltip: __('Left Heavy 25/15/15/15/15/15', 'kemet'),
                icon: 'lfiveheavy',
            },
            'center-six-heavy': {
                tooltip: __('Center Heavy 15/15/20/20/15/15', 'kemet'),
                icon: 'cfiveheavy',
            },
            'right-six-heavy': {
                tooltip: __('Right Heavy 15/15/15/15/15/25', 'kemet'),
                icon: 'rfiveheavy',
            },
        },
        '5': {
            'equal': {
                tooltip: __('Equal Width Columns', 'kemet'),
                icon: 'fivecol',
            },
            'left-five-forty': {
                tooltip: __('Left Heavy 40/15/15/15/15', 'kemet'),
                icon: 'lfiveforty',
            },
            'center-five-forty': {
                tooltip: __('Center Heavy 15/15/40/15/15', 'kemet'),
                icon: 'cfiveforty',
            },
            'right-five-forty': {
                tooltip: __('Right Heavy 15/15/15/15/40', 'kemet'),
                icon: 'rfiveforty',
            },
        },
        '4': {
            'equal': {
                tooltip: __('Equal Width Columns', 'kemet'),
                icon: 'fourcol',
            },
            'left-forty': {
                tooltip: __('Left Heavy 40/20/20/20', 'kemet'),
                icon: 'lfourforty',
            },
            'center-forty': {
                tooltip: __('Center Heavy 10/40/40/10', 'kemet'),
                icon: 'cfourforty',
            },
            'right-forty': {
                tooltip: __('Right Heavy 20/20/20/40', 'kemet'),
                icon: 'rfourforty',
            },
        },
        '3': {
            'equal': {
                tooltip: __('Equal Width Columns', 'kemet'),
                icon: 'threecol',
            },
            'left-half': {
                tooltip: __('Left Heavy 50/25/25', 'kemet'),
                icon: 'lefthalf',
            },
            'right-half': {
                tooltip: __('Right Heavy 25/25/50', 'kemet'),
                icon: 'righthalf',
            },
            'center-half': {
                tooltip: __('Center Heavy 25/50/25', 'kemet'),
                icon: 'centerhalf',
            },
            'center-wide': {
                tooltip: __('Wide Center 20/60/20', 'kemet'),
                icon: 'widecenter',
            },
        },
        '2': {
            'equal': {
                tooltip: __('Equal Width Columns', 'kemet'),
                icon: 'twocol',
            },
            'left-golden': {
                tooltip: __('Left Heavy 66/33', 'kemet'),
                icon: 'twoleftgolden',
            },
            'right-golden': {
                tooltip: __('Right Heavy 33/66', 'kemet'),
                icon: 'tworightgolden',
            },
        },
        '1': {
            'row': {
                tooltip: __('Equal Width Columns', 'kemet'),
                icon: 'row',
            },
        }
    };

    let columns = props.megaMenuColumns ? props.megaMenuColumns : 2;
    columns = parseInt(columns, 10);
    const layouts = defaultParams;
    let defaultValue = columns !== 1 ? 'equal' : 'row';

    const controlMap = layouts[columns];

    return <div id='pbg-radio-control'>
        <label>{props.label}</label>
        <ButtonGroup className="pbg-radio-container-control">
            {Object.keys(controlMap).map((item) => {
                const currentValue = props.value ? props.value : defaultValue;

                return <Tooltip text={controlMap[item].tooltip}>
                    <Button
                        className={item === currentValue ? 'is-primary' : 'is-secondary'}
                        onClick={() => {
                            let newValue = item
                            props.onChange(newValue)
                        }}
                    >
                        {Icons.row[controlMap[item].icon] ? Icons.row[controlMap[item].icon] : item}
                    </Button>
                </Tooltip>
            })}
        </ButtonGroup>
    </div>
}

export default MegaMenuLayout