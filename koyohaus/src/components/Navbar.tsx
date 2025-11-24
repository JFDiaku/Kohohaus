import { Link } from 'react-router-dom'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import focus from "../assets/Images/productFocus.avif";
import desfocus from "../assets/Images/designFocus.avif";
import "./navbar.scss"
import FilterWidget from './FilterWidget';

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

// Mobile Nav scroll Lock
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

  // Dropdown Nav Links//////
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

  const Designers: link[] = [
    {name: 'Lorenzo Vélin', to: ''},
    {name: 'Marcelle Dupré', to: ''},
    {name: 'Ansel Reinhardt', to: ''},
    {name: 'Gianna Bellini', to: ''},
    {name: 'Henrik Vaals', to: ''},
    {name: 'Otto Krell', to: ''},
    {name: 'Gianna Bellini', to: ''},
    {name: 'Kade Elric', to: ''},
    {name: 'Jaxon Rhys', to: ''},
    {name: 'Avery Calder', to: ''},
    {name: 'Noa Bennett', to: ''},
    {name: 'Kade Elric', to: ''},
    {name: 'Ember Sloane', to: ''},
    {name: 'Elena Rousseau', to: ''},
    {name: 'Lucien Mårten', to: ''},
    {name: 'All Designers', to:''}

  ]

  const tool: link[] = [
    {name: 'Professionals', to: ''},
    {name: 'Press Room', to: ''},
    {name: 'Cases', to: ''},
  ]

  const contact: link[] = [
    {name: 'Customer Care', to: ''},
    {name: 'Sales', to: ''},
    {name: 'Press', to: ''},
  ]

  const company: link[] = [
    {name: 'About Us', to: ''},
    {name: 'Our History', to: ''},
    {name: 'Warranty', to: ''},
  ]
  
  const changeWrapperHeight =( state: String)=>{
    const wrapper = document.getElementById("drop-wrapper");
    if(!wrapper) return 
    if(state === 'company'){
      wrapper.style.height = '140px';
    }else{
      wrapper.style.height = '500px'
    }
  } 

  const showcase: link[] = [
    {name: 'Copenhagen', to: ''},
    {name: 'London', to: ''},
    {name: 'Oslo', to: ''},
  ]
// Dropdown Nav Links//////




  return (
    <>
    {isDesktop &&
<>
    
    <div  className="nav desktop" id='nav'>

      <div className="nav-wrapper px-8 ">
    
        <ul className="nav-left">
          <Link  to='/' className="logo">Kōyōhaus</Link>

          <li className='nav-link' 
          onMouseEnter={()=>{
            openDropdown(true);
            setMenu('products');
            changeWrapperHeight('products');
          }} 
        >
            <Link to='/products' >Products</Link>
          </li>

          <li className='nav-link'
          onMouseEnter={()=>{
            openDropdown(true);
            setMenu('designers');
            changeWrapperHeight('designers');
          }} >
            <Link to='/designers'  >Designers</Link>
          </li>
          <li className='nav-link'
          onMouseEnter={()=>{
            setMenu('company');
            changeWrapperHeight('company');
            openDropdown(true);
          }}
          onMouseLeave={()=>{
            
          }}>
            <Link to='company' >Company</Link>
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

    
        
      <div className={"dropdown" + (isDropOpen ? " show" : "")} >
        <div className="drop-wrapper" id='drop-wrapper'>
          <div  onMouseEnter={()=>{
            openDropdown(true);
            setMenu('products');
          }} 
          onMouseLeave={()=>{
            openDropdown(false);
            setMenu('');
            }} className={"products-dropdown" + (menu == 'products' ? " show" : "") +  " h-fit grid grid-cols-3"} >
            <div className="px-8 max-h-min pt-5">
              <p className='text-xs text-gray-600 font-medium'>BY CATEGORY</p> 
            
              <div className="flex mt-2 flex-col gap-3 font-medium">
                  {Bycategories.map((cat, indx)=>
                  <p key={indx} className='text-xs'>{cat.name}</p>
                  )}
              </div>
              
            </div>
            <div className="sec max-h-min p-5">
            <p className='text-xs text-gray-600' >BY DESIGNER</p> 
                <div className="flex mt-2 flex-col gap-3 font-medium">
                  {ByDesigners.map((des, indx)=>
                  <p key={indx} className='text-xs'>{des.name}</p>
                  )}
              </div>
            </div>
            <div className="p-5 max-h-[480px] flex gap-2 flex-col ">
              <p className='text-xs text-gray-600'>PRODUCT FOCUS: Lorem ipsum dolor sit amet consectetur.</p>
              <img className='aspect-square max-h-[440px] max-w-[440px]' src={focus} alt="" />
            </div>
          </div>

          <div  onMouseEnter={()=>{
            openDropdown(true);
            setMenu('designers');
          }} 
          onMouseLeave={()=>{
            openDropdown(false);
            setMenu('');
            }} className={"designers-dropdown" + (menu == 'designers' ? " show" : "") +   " h-fit grid grid-cols-3"} >

            <div className="px-8 col-span-2 py-5 sec">
              <p className='text-xs text-gray-600 font-medium'>DESIGNERS</p> 
            
              <div className="flex mt-2 flex-col h-1/2 flex-wrap gap-3 font-medium">
                  {Designers.map((des, indx)=>
                  <p key={indx} className='text-xs'>{des.name}</p>
                  )}
                  
              </div>
              
            </div>

        
          
            <div className="p-5 flex gap-2 flex-col ">
              <p className='text-xs text-gray-600'>STUDIO VISIT: Lorem ipsum dolor sit amet consectetur.</p>
              <img className='aspect-square max-h-[440px] max-w-[440px]' src={desfocus} alt="" />
            </div>
          </div>

          <div  onMouseEnter={()=>{
            openDropdown(true);
            setMenu('company');
          }} 
          onMouseLeave={()=>{
            openDropdown(false);
            setMenu('');
            }} className={"company-dropdown" + (menu == 'company' ? " show" : "") +   " h-fit grid grid-cols-4"} >

            <div className="px-8 py-5 sec1">
            <p className='text-xs text-gray-600 font-medium'>TOOLS AND DOWNLOADS</p> 
            <div className="flex flex-col gap-3 mt-3 font-medium">
                {tool.map((link, indx)=>
                  <p key={indx} className='text-xs'>{link.name}</p>
                  )}
            </div>
            </div>

            <div className="px-8 py-5 sec2">
            <p className='text-xs text-gray-600 font-medium'>GET IN TOUCH</p> 
            <div className="flex flex-col gap-3 mt-3 font-medium">
                  {contact.map((link, indx)=>
                  <p key={indx} className='text-xs'>{link.name}</p>
                  )}
            </div>
            </div>

            <div className="px-8 py-5 sec3">
            <p className='text-xs text-gray-600 font-medium'>COMPANY</p> 
            <div className="flex flex-col gap-3 mt-3 font-medium">
                {company.map((link, indx)=>
                  <p key={indx} className='text-xs'>{link.name}</p>
                  )}
            </div>
            </div>
          
            <div className="px-8 py-5">
            <p className='text-xs text-gray-600 font-medium'>SHOWROOMS</p> 
            <div className="flex flex-col gap-3 mt-3 font-medium">
                  {showcase.map((link, indx)=>
                  <p key={indx} className='text-xs'>{link.name}</p>
                  )}
            </div>
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