import { Link } from "react-router-dom";

const MenuList = ({ items, basePath = "" }) => (
    <ul className="space-y-2">
        {items.map((item, index) => {
            const label = typeof item === "string" ? item : item.label;
            const to =
                typeof item === "string"
                    ? `${basePath}/${item.toLowerCase().replace(/ /g, "-")}`
                    : item.to;

            return (
                <li key={index}>
                    <Link
                        to={to}
                        className="block py-1 text-gray-700 hover:text-blue-600 transition-colors"
                    >
                        {label}
                    </Link>
                </li>
            );
        })}
    </ul>
);

export default MenuList;
