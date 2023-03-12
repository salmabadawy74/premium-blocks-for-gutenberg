/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { FormTokenField } from "@wordpress/components";
import { useSelect } from "@wordpress/data";
import { store as coreStore } from "@wordpress/core-data";

/**
 * Internal dependencies
 */

const AUTHORS_QUERY = {
    who: "authors",
    per_page: -1,
    _fields: "id,name",
    context: "view",
};
const getEntitiesInfo = (entities) => {
    const mapping = entities?.reduce(
        (accumulator, entity) => {
            const { mapById, mapByName, names } = accumulator;
            mapById[entity.id] = entity;
            mapByName[entity.name] = entity;
            names.push(entity.name);
            return accumulator;
        },
        { mapById: {}, mapByName: {}, names: [] }
    );
    return {
        entities,
        ...mapping,
    };
};

function AuthorControl({ value, onChange }) {
    const authorsList = useSelect((select) => {
        const { getUsers } = select(coreStore);
        return getUsers(AUTHORS_QUERY);
    }, []);

    if (!authorsList) {
        return null;
    }
    const authorsInfo = getEntitiesInfo(authorsList);
    const normalizedValue = !value ? [] : value.toString().split(",");
    const sanitizedValue = normalizedValue.reduce((accumulator, authorId) => {
        const author = authorsInfo.mapById[authorId];
        if (author) {
            accumulator.push({
                id: authorId,
                value: author.name,
            });
        }
        return accumulator;
    }, []);

    const getIdByValue = (entitiesMappedByName, authorValue) => {
        const id = authorValue?.id || entitiesMappedByName[authorValue]?.id;
        if (id) return id;
    };
    const onAuthorChange = (newValue) => {
        const ids = Array.from(
            newValue.reduce((accumulator, author) => {
                const id = getIdByValue(authorsInfo.mapByName, author);
                if (id) accumulator.add(id);
                return accumulator;
            }, new Set())
        );
        onChange({ author: ids.join(",") });
    };
    return (
        <FormTokenField
            label={__("Authors")}
            value={sanitizedValue}
            suggestions={authorsInfo.names}
            onChange={onAuthorChange}
            __experimentalShowHowTo={false}
        />
    );
}

export default AuthorControl;
