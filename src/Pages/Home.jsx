import { useContext, useEffect, useState } from "react"
import { MenuItemsList } from "../Contexts/MenuContext"
import Header from "../Components/Header"
import ItemCard from "../Components/ItemCard"
import MenuTabs from "../Components/MenuTabs"
import { BASE_URL } from "../Constants"

const Home = () => {
    const [items, setItems] = useState([])
    const { menuItems, setMenuItems } = useContext(MenuItemsList)

    useEffect(() => {
        fetchItems();
    }, [])

    // Fetching api data function
    const fetchItems = async () => {
        const response = await fetch(BASE_URL)
        const json = await response.json();
        console.log("This is card data ", json[0]?.table_menu_list)
        setItems(json[0]?.table_menu_list)
        setMenuItems(json[0]?.table_menu_list[0])
    }

    return (
        <>
            <Header />
            <MenuTabs items={items} />
            
            {/* Listing menu items  */}
            { menuItems && menuItems?.category_dishes?.map((item) => (
                <ItemCard item={item} key={item?.dish_id} />
            ))}
        </>
    )
}

export default Home