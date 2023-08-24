import { useState, createContext } from "react";

export const MenuItemsList = createContext();

const MenuProvider = ({ children }) => {

    const [ menuItems, setMenuItems ] = useState("");

    return (
        <MenuItemsList.Provider value={{ menuItems, setMenuItems }}>
            {children}
        </MenuItemsList.Provider>
    )
}

export default MenuProvider;