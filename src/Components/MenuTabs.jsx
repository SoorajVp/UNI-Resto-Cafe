import { useContext } from 'react'
import { MenuItemsList } from "../Contexts/MenuContext"

const MenuTabs = ({ items }) => {
    const { menuItems, setMenuItems } = useContext(MenuItemsList)

    return (
        <>
            <div className="text-sm font-bold  font-serif text-gray-600">
                <ul className="flex overflow-x-auto border-b gap-5 md:px-8  w-auto">
                    {
                        items.map((item) => (
                            <li onClick={() => setMenuItems(item)}
                                className={`${item.menu_category_id === menuItems.menu_category_id && "border-b-2 border-red-500 text-red-600" } md:px-14 px-4 py-2 cursor-pointer whitespace-nowrap`} key={item.menu_category_id}>
                                {item.menu_category}
                            </li>
                        ))
                    }
                </ul>
            </div>
        </>
    )
}

export default MenuTabs
