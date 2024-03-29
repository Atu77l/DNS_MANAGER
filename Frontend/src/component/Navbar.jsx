import React, { useState, useRef, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo12.webp';
import secureLocalStorage from 'react-secure-storage';
import Person3Icon from '@mui/icons-material/Person3';
import LogoutIcon from '@mui/icons-material/Logout';
import { GET_PROFILE_IMAGE } from '../../constant/constant';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import DescriptionIcon from '@mui/icons-material/Description';
import ClearIcon from '@mui/icons-material/Clear';


const Navbar = (props) => {
  const [show, setShow] = useState(false);
  const [icon, showIcon] = useState(true);
  const boxRef = useRef(null);
  const navigate = useNavigate()
  const [image, setImage] = useState(null);
  const [admin, setAdmin] = useState('user');

  const handleClickOutside = (event) => {
    if (boxRef.current && !boxRef.current.contains(event.target)) {
      setShow(false);
    }
  };
  const Download_Profile_Image = async () => {

    const profilePic = secureLocalStorage.getItem('profilePic');
    if (profilePic) {
      const imgUrl = `${GET_PROFILE_IMAGE}/${profilePic}`;
      setImage(imgUrl);
    }
  }
  useEffect(() => {
    Download_Profile_Image();
    const admin = secureLocalStorage.getItem('role')
    setAdmin(admin);
  }, [props.profilePic])

  const logoutFunction = () => {
    secureLocalStorage.removeItem('token');
    secureLocalStorage.removeItem('name');
    secureLocalStorage.removeItem('id');
    secureLocalStorage.removeItem('active')
    secureLocalStorage.removeItem('profilePic');
    navigate('/login');
  }
  useEffect(() => {
    // Attach the event listener when the component mounts
    document.addEventListener('mousedown', handleClickOutside);
    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      {/* For Tablet and Desktop View */}
      <div className="hidden md:flex sm:flex-row bg-white">
        <div className="flex flex-row">
          <Link to='/'><div className="text-xl font-bold rounded-md p-1 fixed top-0"><img src={logo} alt="logo" className="h-10 w-12 rounded-md" /></div></Link>
          <div className='font-[800] text-[25px] mt-2 ml-16 text-[#343C6A]'>FPrognos.</div>
          <Link to='/'><div className="text-[16px] ml-5 mt-4 text-[#242424] hover:text-[blue]">home</div></Link>
          <Link to='/bucket'><div className=" text-[16px] ml-5 mt-4 text-[#242424] hover:text-[blue]">dashboard</div></Link>
          {admin == 'admin' && <Link to='/admin'><div className="ml-5 text-[#242424] mt-4 text-[16px] hover:text-[blue]" onClick={()=>{navigate('/admin');}}>Admin</div></Link>}
        </div>
        {/* <div className="text-xl font-bold ml-10 text-black mt-3">Hello, {name}</div> */}
        <div className="flex justify-end flex-grow">
          <div className="pr-2 flex flex-row ml-8 sm:float-right ">
            <Link to='/plan'><button
              className="mt-3 mb-2  ml-5 rounded border-2 border-primary bg-[#5C53E9] text-white  text-sm text-primary transition duration-150 ease-in-out focus:outline-none focus:ring-0 motion-reduce:transition-none p-[6px]"
              type="button" id="button-addon3" data-te-ripple-init> Buy Coin</button></Link>
            {image ? (
              <img src={image.toString()} alt="profile" className="w-8 h-8 ml-2 mt-2 rounded-full cursor-pointer max-md:ml-2 border-2 border-white" onClick={() => { setShow(!show) }} />
            ) : (
              <Person3Icon className="rounded-full border-2 ml-2 mt-3 cursor-pointer" style={{ height: "36px", width: "36px" }} onClick={() => { setShow(!show) }} />
            )}
            {show &&
              <div ref={boxRef} className="absolute right-0 z-10 mt-16 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 text-black ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button">
                <Link to="/profile" className="block px-4 py-2 text-l font-medium " role="menuitem" id="user-menu-item-0">Your Profile   <Person3Icon sx={{ marginLeft: "20px", fontSize: "40px" }} /></Link>
                <div className="block px-4 py-2 text-l font-medium cursor-pointer " role="menuitem" id="user-menu-item-2" onClick={logoutFunction}>Sign out    <LogoutIcon sx={{ marginLeft: "50px", fontSize: "30px" }} /></div>
              </div>
            }
          </div>
        </div>
      </div>
      {/* For Mobile View */}
      <div className='grid grid-cols-2 md:hidden bg-white'>
        {!icon && <div className="m-2 md:hidden cursor-pointer text-center justify-center pt-1 w-8 h-8 hover:rounded-full hover:bg-slate-400" ><MenuIcon onClick={()=>{showIcon(!icon);}}/></div>}
        {icon && <div className="m-2 md:hidden cursor-pointer text-center justify-center pt-1 h-8 w-8 hover:rounded-full hover:bg-slate-400"><ClearIcon onClick={()=>{showIcon(!icon);}}/></div>}
        <Link to='/'><div className="block text-xl font-bold m-2 text-black p-1 float-right md:float-left"><img src={logo} alt="logo" className="h-9 w-9" /></div></Link>
      
       </div>
       {icon &&
        <div className="md:hidden">
          <div className='grid grid-cols-1 mt-0 font-bold  text-xl md:hidden bg-white text-[#232323] w-full'>
            <Link to='/'><div className="hover:bg-blue-500 p-1 text-xl w-full"><HomeIcon />     Home</div></Link>
            <Link to='/bucket'><div className="hover:bg-blue-500 p-1 text-xl"><ShoppingBasketIcon />    Bucket</div></Link>
            <div className="hover:bg-blue-500 p-1 text-xl cursor-pointer" onClick={logoutFunction}><LogoutIcon />     Sign out</div>
          </div>
        </div>
      }
    </>
  )
}

export default Navbar