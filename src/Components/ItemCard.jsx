/* eslint-disable react/prop-types */
import { BsFillCircleFill } from 'react-icons/bs'

const ItemCard = ({ item }) => {
    console.log("this is item - - -", item);
    return (
        <>
            <div className="grid grid-cols-6 border-b-2 p-2 font-serif">
                <div className="sm:col-span-5 col-span-4 flex gap-2">
                    <div>
                        <div className='border-2 mt-1 border-green-600 text-green-600 block '>
                            <BsFillCircleFill className='p-0.5' />
                        </div>
                    </div>
                    <div className='w-full space-y-0.5'>
                        <h3 className="font-bold text-gray-700"> Kerala Mandhi</h3>
                        <div className='flex justify-between min-w-full'>
                            <h4 className="font-semibold text-sm text-gray-600"> SAR-24</h4>
                            <p className="font-semibold text-sm text-gray-600 "> 4 calories</p>
                        </div>
                        <h4 className="text-sm text-gray-400 "> Contrary to popular ing, and font sizes based on different screen sizes.s an example of h</h4>
                        <div className='flex text-white bg-green-600 w-fit gap-5 px-4 rounded-full'>
                            <button className='text-lg font-medium'> - </button>
                            <p className='text-sm pt-1 font-medium'> 0 </p>
                            <button className='text-lg font-medium'> + </button>
                        </div>
                        <h4 className="text-sm text-red-600">Customization available</h4>

                    </div>

                </div>
                <div className="flex col-span-2 sm:col-span-1 justify-end px-2">
                    <img src="https://i.imgur.com/PoJfqsD.jpg" className="w-16 h-16 rounded-md" alt="food" />
                </div>

            </div>
        </>
    )
}

export default ItemCard