import { useEffect, useState } from "react"
import Header from "../Components/Header"
import ItemCard from "../Components/ItemCard"
import MenuTabs from "../Components/MenuTabs"

const Home = () => {
    const [ MenuList, setMenuList ] = useState([])

    useEffect(() => {
        fetchItems();
    }, [])

    const fetchItems = async() => {
        const response = await fetch("https://run.mocky.io/v3/a67edc87-49c7-4822-9cb4-e2ef94cb3099")
        const json = await response.json();
        console.log("This is card data ", json[0]?.table_menu_list)
        setMenuList(json[0]?.table_menu_list)
    }

    return (
        <>
            <Header />
            <MenuTabs MenuList={MenuList} />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />

        </>
    )
}

export default Home