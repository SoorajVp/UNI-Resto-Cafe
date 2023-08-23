import { HiShoppingCart } from 'react-icons/hi'
import { BiArrowBack } from 'react-icons/bi'


const Header = () => {
    return (
        <>
            <div className="flex justify-between px-3 py-6 sm:px-5 font-bold font-serif">
                <div className="text-gray-600 flex gap-5">
                    <BiArrowBack size={30} className='pt-1 md:hidden block' />
                    UNI Resto Cafe
                </div>
                <div className="flex text-gray-600 gap-2">
                    <p className='text-sm pt-1'> My Orders</p>
                    <div className=''>
                        <HiShoppingCart size={30} className='pt-1 relative inline-flex' />
                        <div className="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 border rounded-full -ml-2">20</div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Header