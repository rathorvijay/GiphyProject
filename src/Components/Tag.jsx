import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Spinner from './Spinner';
import { useDispatch, useSelector } from 'react-redux';
import {add,remove} from "../redux/slice/CardSlice"

const API_KEY=process.env.REACT_APP_GIPHY_API_KEY;

const Tag = () => {

    const [image,setimage]=useState();
    const [loading,setloading]=useState(false);
    const [tag,settag]=useState('car');

    const {likes}=useSelector((state)=>state);

    console.log(likes);
    const dispatch=useDispatch();

    function additem(){
        console.log("add");
        dispatch(add(image));
    }

    function removeitem(){
        console.log("remove");
        dispatch(remove(image));
    }

    async function ApiCall(){
        setloading(true);
        const url=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
        const {data}=await axios.get(url);
        console.log(data);
        const imageSource=data.data.images.downsized_large.url;
        console.log(imageSource);
        setloading(false);
        setimage(imageSource);
    }

    function changehandler(){
        ApiCall();  
    }

    function textchangehandler(event){
        const text = event.target.value;
        console.log(text);
        settag(text);
        ApiCall();
    }

    useEffect(()=>{
        ApiCall();
    },[])

  return (
    <div className='lg:w-1/2 md:w-full  bg-blue-500 mx-auto md:p-3 mt-[30px] rounded-lg flex flex-col items-center'>
            <h1 className='text-center text-2xl font-bold uppercase py-[10px]'>random gif</h1>
            {
                loading?(<Spinner />):(   
                <>
                    <div>
                     {/* <img className='w-1/2 h-5' src={image}/> */}
                     <div className='lg:w-[30vw] lg:h-[30vh] md:w-[90vw] sm:w-[10vw] md:h-[20vh]'>
                         <img src={image} alt="not present" className='lg:w-[100%] lg:h-[100%]'></img>
                     </div>
                     {
                        likes.some((likes)=>likes===image)?(
                            <button className='px-2 py-1 rounded-full border-2 text-white border-black text-[12px] bg-red-400' onClick={removeitem}>remove to likes</button>
                        ):(
                            <button className='px-2 py-1 rounded-full border-2 text-white border-black text-[12px] bg-green-400' onClick={additem}>Add to likes</button>
                        )
                    }
                    </div>
                </>
                )
            }
            {/* (event=>settag(event.target.value)) */}
            <input className='w-11/12 py-[5px] text-center text-black rounded-2xl mt-[20px] mb-[5px]' placeholder='Enter text' type="text" onChange={textchangehandler} value={tag}></input> 
            <button onClick={changehandler} className='w-11/12 my-[20px] rounded-2xl cursor-pointer hover:bg-red-400 bg-lime-500 py-[10px] mb-[20px]'>Generate</button>
    </div>
  )
}

export default Tag