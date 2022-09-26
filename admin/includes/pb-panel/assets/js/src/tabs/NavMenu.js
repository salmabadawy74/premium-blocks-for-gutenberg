import { Link, useLocation } from "react-router-dom";
import { __ } from "@wordpress/i18n";

export default function MainNav() {
    const menus = [
        {
            name: __("Welcome", "premium-blocks-for-gutenberg"),
            slug: PremiumBlocksPanelData.home_slug,
            path: "",
        },
        {
            name: __("Blocks / Extensions", "premium-blocks-for-gutenberg"),
            slug: PremiumBlocksPanelData.home_slug,
            path: "blocks",
        },
        {
            name: __("Settings", "premium-blocks-for-gutenberg"),
            slug: PremiumBlocksPanelData.home_slug,
            path: "settings",
        },
        {
            name: __("Version Control", "premium-blocks-for-gutenberg"),
            slug: PremiumBlocksPanelData.home_slug,
            path: "rollback",
        },
        {
            name: __("System Info", "premium-blocks-for-gutenberg"),
            slug: PremiumBlocksPanelData.home_slug,
            path: "system",
        },
    ];

    const query = new URLSearchParams(useLocation()?.search);
    const activePage = query.get("page")
        ? query.get("page")
        : PremiumBlocksPanelData.home_slug;
    const activePath = query.get("path") ? query.get("path") : "";

    return (
        <nav>
            <div>
                {menus.map((menu, key) => (
                    <Link
                        index={key}
                        key={`?page=${menu.slug}&path=${menu.path}`}
                        to={{
                            search: `?page=${menu.slug}${
                                "" !== menu.path ? "&path=" + menu.path : ""
                            }`,
                        }}
                    >
                        {menu.name}
                    </Link>
                ))}
            </div>
        </nav>
    );
}
