/* eslint-disable react/prop-types */
import { BsFillCircleFill } from 'react-icons/bs';
import { useContext, useState } from 'react'
import { CartContext } from '../Contexts/CartContext';

const ItemCard = ({ item }) => {

    let [count, setCount] = useState(0)
    let { cartCount, setCartCount } = useContext(CartContext)

    const increment = () => {
        setCartCount(cartCount + 1)
        setCount(count + 1)
    }

    const decrement = () => {
        if( count > 0 ) {
            setCartCount(cartCount - 1)
            setCount(count - 1)
        }
    }

    return (
        <>
            <div className="grid grid-cols-6 border-b-2 p-2 font-serif lg:mx-5">
                <div className="sm:col-span-5 col-span-4 flex gap-2">
                    <div>
                        <div className={`${item?.dish_Type == 2 ? "border-green-600 text-green-600" : "border-red-500 text-red-500"} border-2 mt-1 block`}>
                            <BsFillCircleFill className='p-0.5' />
                        </div>
                    </div>
                    <div className='w-full space-y-0.5'>
                        <h3 className="font-bold text-base text-gray-700">{item?.dish_name}</h3>
                        <div className='flex justify-between min-w-full'>
                            <h4 className="font-semibold text-sm text-gray-500"> {item.dish_currency + " " + item.dish_price}</h4>
                            <p className="font-semibold text-sm text-gray-600 "> {item?.dish_calories} calories</p>
                        </div>
                        <h4 className="text-sm text-gray-400 ">{item?.dish_description}</h4>
                        { item.dish_Availability &&
                            <div className='flex text-white bg-green-600 w-fit gap-5 px-4 rounded-full'>
                                <button className='text-base font-semibold' onClick={decrement}> - </button>
                                <p className='text-sm pt-0.5 font-medium'> {count} </p>
                                <button className='text-base font-semibold' onClick={increment}> + </button>
                            </div> 
                        }
                        <h4 className="text-sm text-red-600">{item?.addonCat.length > 0 && "Customization available"}</h4>
                        <h4 className="text-sm text-red-600">{!item?.dish_Availability && "Not available"}</h4>
                    </div>

                </div>
                <div className="flex col-span-2 sm:col-span-1 justify-end px-2">
                    <img src={item?.dish_image} className="w-16 h-16 rounded-md" alt="food" />
                </div>
            </div>

        </>
    )
}

export default ItemCard