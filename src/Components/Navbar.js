import React from 'react'
import {Link} from "react-router-dom"
import {toast} from "react-hot-toast"
import { useSelector } from 'react-redux';
import { AiOutlineLike } from "react-icons/ai";

const Navbar = (props) => {
    const {likes}=useSelector((state)=>state);
    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;

  return (
    <div className='flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto text-white'>

        <Link to="/"> 
            <h1 className='text-2xl font-bold'>AlphaBI</h1>
        </Link>


        {/* Login - SignUp - LogOut - Dashboard */}
        <div className='flex items-center gap-x-4'>
            { !isLoggedIn &&
                <Link to="/login">
                    <button className='bg-richblack-800 text-richblack-100 py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700'>
                        Log in
                    </button>
                </Link>
            }
            { !isLoggedIn &&
                <Link to="/signup">
                    <button  className='bg-richblack-800 text-richblack-100 py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700'>
                        Sign up
                    </button>
                </Link>
            }
            { isLoggedIn &&
                <Link to="/">
                    <button onClick={() => {
                        setIsLoggedIn(false);
                        toast.success("Logged Out");
                    }}
                    className='bg-richblack-800 text-richblack-100 py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700'>
                        Log Out
                    </button>
                </Link>
            }
            { isLoggedIn &&
                <Link to="/dashboard">
                    <button
                     className='bg-richblack-800 text-richblack-100 py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700'>
                        Dashboard
                    </button>
                </Link>
            }
             { isLoggedIn &&
                <Link to="/likes">
                   <div className="relative ">
                <  AiOutlineLike className="absolute"/>
                    <div className='absolute text-[16px] top-[-15px] left-2 text-green-500'>
                       {likes.length} 
                    </div>
                </div>
                </Link>
            }
        </div>
      
    </div>
  )
}

export default Navbar
