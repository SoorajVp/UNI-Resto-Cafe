/* eslint-disable react/prop-types */


const MenuTabs = ({ MenuList }) => {
    console.log("This is menu list - - - -", MenuList)

    return (
        <>
            <div className="text-sm font-bold  font-serif text-gray-600">
                <ul className="flex overflow-x-auto border-b gap-5 md:px-8  w-auto">
                    {
                        MenuList.map((item) => (
                            // <ItemCard item={item} key={item.menu_category_id} />
                            
                            <li className="md:px-14 px-4 py-2 whitespace-nowrap" key={item.menu_category_id}>{item.menu_category}</li>
                        ))
                    }
                    {/* <li className="px-10 py-2 border-b-4 border-red-500 text-red-600">jiiiiii</li> */}
                </ul>
            </div>
        </>
    )
}

export default MenuTabs
