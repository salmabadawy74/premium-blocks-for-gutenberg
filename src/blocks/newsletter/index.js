
import { newsletter } from "../../../assets/js/settings";
import PbgIcon from "../icons";
import { edit } from './edit'
import { save } from './save'

const { __ } = wp.i18n;

const { registerBlockType } = wp.blocks;



registerBlockType("premium/newsletter", {
    title: __(" MailChimp Newsletter"),
    icon: <PbgIcon icon="section" />,
    category: "premium-blocks",
    attributes: {
        email: {
            type: "string",
            default: ""
        }
    },
    supports: {
        inserter: newsletter
    },
    example: {},
    edit: edit,
    save: save,
});
