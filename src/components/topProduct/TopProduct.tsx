import React from 'react'
import Img1 from "../../../public/images/shirt/shirt.png"
import Img2 from "../../../public/images/shirt/shirt2.png";
import Img3 from "../../../public/images/shirt/shirt3.png";
import { FaStar } from 'react-icons/fa6';
const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Casual Wear",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    img: Img2,
    title: "Printed shirt",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    img: Img3,
    title: "Women shirt",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];
const TopProduct = () => {
return (
    <div>
        <div className='container'>
            <div className='text-left mb-24'>
                <p className='text-sm text-yellow-400'>
                    Top Rated Products for you
                </p>
                <h1 className='text-3xl font-bold'>
                    Best Products
                </h1>
                <p className='text-xs text-gray-400'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
            asperiores modi Sit asperiores modi
                </p>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center'>
                {
                    ProductsData.map((item,index)=>{
                        return(
                            <div data-aos="zoom-in" key={index} className='group bg-white dark:bg-gray-800 hover:bg-black dark:hover:bg-yellow-200 hover:text-white rounded-2xl relative shadow-xl duration-300 max-w-[300px]'>
                                <div className='h-[100px] '>
                                    <img src={item.img.src} alt="img" className='max-w-[140px]  mx-auto transform -translate-y-20 block group-hover:scale-105 duration-300 drop-shadow-md' />
                                </div>
                                <div className='p-4 text-center'>
                                    <div className='w-full flex items-center justify-center gap-1'>
                                        <FaStar  className="text-yellow-500" />
                                        <FaStar className="text-yellow-500" />
                                        <FaStar className="text-yellow-500" />
                                        <FaStar className="text-yellow-500" />
                                    </div>
                                    <h1 className="text-xl font-bold">{item.title}</h1>
                                <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                                {item.description}
                                </p>
                                <button
                                className="bg-yellow-500 hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-gray-700"
                                // onClick={handleOrderPopup}
                                >
                                Order Now
                                </button>

                                </div>
                            </div>
                        )
                    })
                }


            </div>
        </div>
    </div>
)
}

export default TopProduct