import React from 'react'
import { useSelector } from 'react-redux';
import Likesimages from './Likesimages';
import { Link } from 'react-router-dom';
import { MdDelete } from "react-icons/md";

const Likes = () => {

  const likes = useSelector((state)=>state.likes);

  return (
    <div className='w-10/12 p-5 h-full mt-5 mx-auto flex justify-center shadow-none'>
            {
               likes.length === 0 ?(
                    <div className='w-full my-auto h-full flex flex-col justify-center items-center'>
                        <p className='text-xl '>No item found</p>
                        <Link to="/dashboard">
                            <button className='mt-10 px-3 py-2 bg-green-500 text-xl rounded-lg text-white font-bold'>
                                Go to Giphy
                            </button>
                        </Link>
                    </div>
               ):( 
               <>
                    <div className='w-[70%] shadow-none'>
                        {
                            likes.map((image,index)=>{
                                return <Likesimages image={image}/>
                            })
                        }
                    </div>
                </>
               )
            }
        </div>
  )
}

export default Likes