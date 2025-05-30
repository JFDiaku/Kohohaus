import { Link } from 'react-router-dom'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import focus from "../assets/Images/productFocus.avif";
import "./navbar.scss"

import { colors, MenuList, requirePropFactory, useMediaQuery } from '@mui/material';
import { ArrowForward, Close, Menu} from '@mui/icons-material';
import { useEffect, useState } from 'react';
const Navbar = () => {
  const isTablet = useMediaQuery("(max-width:1000px)");
  const isDesktop = useMediaQuery("(min-width:1025px)");
  const [isMobileNavOpen, openMobileNav] = useState<boolean>(false);
  const [isDropOpen, openDropdown] = useState<boolean>(false);
  const [menu, setMenu] = useState<String>('');


  let lastScroll: number = 0;

  window.addEventListener("scroll",()=> {
    const nav = isDesktop ? document.getElementById("nav")  : document.getElementById("mobile-nav") ;
    if(!nav) return;

    const currentScroll = window.scrollY || document.documentElement.scrollTop;

    if(currentScroll == 0){
      nav.style.top = "0";
      return;
    }

    if (currentScroll > lastScroll) {
      // Downscroll
      nav.style.top = "-10rem";
    } else {
      // Upscroll
      nav.style.top = "0";
    }

    
    lastScroll = currentScroll <= 0 ? 0 : currentScroll;
  })


  const scrollLock =( state: boolean)=>{
    if(state){
      document.documentElement.style.overflow = 'hidden'
    }else{
      document.documentElement.style.overflow = 'auto'
    }
  }


  


  interface link{
    name: string
    to: string
  }

  const navLinks: link[] = [
    {name: 'Products', to: ''},
    {name: 'Designers', to: ''},
    {name: 'Company', to: ''},
  ]

  const Bycategories: link[] = [
    {name: 'Chairs and stools', to: ''},
    {name: 'Lounge chairs', to: ''},
    {name: 'Sofas', to: ''},
    {name: 'Tables', to: ''},
    {name: 'Coffee tables', to: ''},
    {name: 'Complements', to: ''},
    {name: 'All Products', to:''}
  ]


  
  const ByDesigners: link[] = [
    {name: 'Lorenzo Vélin', to: ''},
    {name: 'Marcelle Dupré', to: ''},
    {name: 'Ansel Reinhardt', to: ''},
    {name: 'Gianna Bellini', to: ''},
    {name: 'Henrik Vaals', to: ''},
    {name: 'Otto Krell', to: ''},
    {name: 'Gianna Bellini', to: ''},
    {name: 'All Designers', to:''}
  ]

  return (
    <>
    {isDesktop &&
<>
    
    <div className="nav desktop" id='nav'>
    <div className="nav-wrapper px-8 ">
  
      <ul className="nav-left">
        <Link  to='/' className="logo">Kōyōhaus</Link>
        <li className='nav-link' 
        onMouseEnter={()=>{
          openDropdown(true);
          setMenu('products');
        }} 
        onMouseLeave={()=>{
          openDropdown(false);
          setMenu("");
          }}>
          <Link to='/products' >Products</Link>
        </li>
        <li className='nav-link'>
          <Link to='' >Designers</Link>
        </li>
        <li className='nav-link'>
          <Link to='' >Company</Link>
        </li> 
      </ul>


      <ul className="nav-right">
        <li className='nav-link'>
          <Link to='' >
            <SearchRoundedIcon/>
          </Link>
        </li>
        <li className='nav-link'>
          <Link to='' >
            <PersonOutlineRoundedIcon/>
          </Link>
        </li>
        <li className='nav-link'>
          <Link to='' >
            <FavoriteBorderIcon/>
          </Link>
        </li> 
      </ul>
    </div>
       
    <div className={"dropdown" + ((isDropOpen && menu == 'products') ? " show" : "")} >
      <div className="drop-wrapper h-fit">
        <div  onMouseEnter={()=>{
          openDropdown(true);
          setMenu('products');
        }} 
        onMouseLeave={()=>{
          openDropdown(false);
          setMenu("");
          }} className="products-dropdown grid grid-cols-3" >
          <div className="px-8  py-5">
            <p className='text-xs text-gray-600'>BY CATEGORY</p> 
            {Bycategories.map((cat, indx)=>
            <div key={indx} className="flex flex-col gap-3 font-medium">
              <p className='text-xs'>{cat.name}</p>
            </div>
            )}
          </div>
          <div className="sec p-5">
          <p className='text-xs text-gray-600' >BY DESIGNER</p> 
            {ByDesigners.map((des, indx)=>
            <div key={indx} className="flex flex-col gap-3 font-medium">
              <p className='text-xs'>{des.name}</p>
            </div>
            )}
          </div>
          <div className="p-5 flex gap-2 flex-col ">
            <p className='text-xs text-gray-600'>PRODUCT FOCUS: Lorem ipsum dolor sit amet consectetur.</p>
            <img className='aspect-square object-fit' src={focus} alt="" />
          </div>
        </div>
      </div>
    </div>


    </div>
</>
    }


    {isTablet &&
    <>
    <div id='mobile-nav' className={isMobileNavOpen ? "nav mobile active" : "nav mobile"}>
    
    <div className="nav-wrapper" >
    <Link to='/'  onClick={()=> scrollLock(false)} className="logo2 text-black">Kōyōhaus</Link>
    


      <ul className="nav-right">
        <li className='nav-link'>
          <Link to='' >
            <SearchRoundedIcon sx={{fontSize:'30px'}}/>
          </Link>
        </li>
        <li className='nav-link'>
          <Link to='' >
            <PersonOutlineRoundedIcon sx={{fontSize:'30px'}}/>
          </Link>
        </li>
        <li className='nav-link' onClick={()=>
        {openMobileNav(!isMobileNavOpen);
         scrollLock(!isMobileNavOpen);
        }}>
            { isMobileNavOpen ? 
            <Close sx={{color:'black', fontSize: '30px'}}/>
            :
            <Menu sx={{color:'black', fontSize: '30px'}} />}
        </li> 
      </ul>
    </div>
    </div>

    <div className={isMobileNavOpen ? "mobile-nav active" : "mobile-nav"}>
        {navLinks.map(link =>
          <div key={link.name} className="mobile-nav-item">
            <Link to="/products" onClick={()=> scrollLock(false)} className='link-name'>{link.name}</Link>

            {link.name === 'Products' ?
              <div className="arrow">
                <ArrowForward sx={{fontSize:"40px"}}/>
              </div> 
              :
              <Link to={link.to} className="arrow" >
                <ArrowForward  sx={{fontSize:"40px"}}/>
              </Link> 
            }
          </div>
        )}

        <Link to='' className="mobile-nav-item ">
          <div className="my-account">
            <PersonOutlineRoundedIcon sx={{fontSize:"40px"}}/>
            <p className='link-name'>My Account</p>
          </div>
        </Link>
    </div>
    </>
    }

    
    </>
    
  )
}

export default Navbar