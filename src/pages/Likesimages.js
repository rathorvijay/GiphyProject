import React from 'react'
import { useDispatch } from 'react-redux';
import {remove} from "../redux/slice/CardSlice";
import { MdDelete } from "react-icons/md";

const Likesimages = (props) => {
    const {image}=props;

    const dispatch=useDispatch();
    function removeitem(){
        dispatch(remove(props.image));
    }

    return (
    <>
    <div className='flex w-full border-b-2 border-black p-3 h-3/12 gap-3'>
        <div className='lg:w-[30%] md:w-[70%]'>
            <img src={image} alt="not present" className='w-[90%] h-[90%]'></img>
        </div>
        <div className='w-[70%]'>
            {/* <h>{title}</h>
            <p>{description}</p> */}
            <div className='flex justify-between'>
                <button onClick={removeitem}>
                  <MdDelete className="size-10 text-red-500"/>
                </button>
            </div>
        </div>
    </div>
</>
  )
}

export default Likesimages