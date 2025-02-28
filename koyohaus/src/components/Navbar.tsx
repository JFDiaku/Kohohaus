import { Link } from 'react-router-dom'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useMediaQueryContext } from './MediaQueryContext';
import "./navbar.scss"
import { colors, MenuList } from '@mui/material';
import { ArrowForward, Close, Menu} from '@mui/icons-material';
import { useEffect, useState } from 'react';
const Navbar = () => {
  const { isMobile, isTablet, isDesktop } = useMediaQueryContext();
  const [isMobileNavOpen, openMobileNav] = useState<boolean>(false);
  let lastScrollTop: number = 0;


  window.addEventListener("scroll",()=>{
    let currentScroll: number = window.scrollY || document.documentElement.scrollTop;
    const mobile_nav: any = document.getElementById('mobile-nav');
    if (currentScroll <= 150 && isTablet) {
      // At the top of the page
      mobile_nav.style.top = "-10rem";
  }

  mobile_nav.style.transition = "top .5s ease-in-out";
  mobile_nav.style.transitionDelay = "0";

  if (currentScroll > lastScrollTop && isTablet) {
    // Downscroll
       mobile_nav.style.top = "-10rem";
    }else {
        // Upscroll
        mobile_nav.style.transition = "color 1.5s ease-in-out";
        mobile_nav.style.top = "0";
  
    }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; 
  })


  const scrollLock =( state: boolean)=>{
    console.log(state);
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

  return (
    <>
    {isDesktop &&
    <div className="nav desktop">

    <p className="logo">Kōyōhaus</p>
    <div className="nav-wrapper">
      <ul className="nav-left">
        <li className='nav-link'>
          <Link to='' >Products</Link>
        </li>
        <li className='nav-link'>
          <Link to='' >designers</Link>
        </li>
        <li className='nav-link'>
          <Link to='' >company</Link>
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

    </div>
    }


    {isTablet &&
    <>
    <div id='mobile-nav' className={isMobileNavOpen ? "nav mobile active" : "nav mobile"}>
    
    <div className="nav-wrapper" style={{padding:'10px'}}>
    <p className="logo">Kōyōhaus</p>
    


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
        <li className='nav-link' onClick={()=>
        {openMobileNav(!isMobileNavOpen);
         scrollLock(!isMobileNavOpen);
        }}>
            { isMobileNavOpen ? 
            <Close sx={{color:'black'}}/>
            :
            <Menu sx={{color:'white'}} />}
        </li> 
      </ul>
    </div>
    </div>

    <div className={isMobileNavOpen ? "mobile-nav active" : "mobile-nav"}>
        {navLinks.map(link =>
          <div key={link.name} className="mobile-nav-item">
            <p className='link-name'>{link.name}</p>

            {link.name === 'Products' ?
              <div className="arrow">
                <ArrowForward sx={{fontSize:"40px"}}/>
              </div> 
              :
              <Link to='' className="arrow" >
                <ArrowForward  sx={{fontSize:"40px"}}/>
              </Link> 
            }
          </div>
        )}

        <Link to='' className="mobile-nav-item ">
          <div className="my-account">
            <PersonOutlineRoundedIcon/>
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