import { Link } from 'react-router-dom'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import "./navbar.scss"

import { colors, MenuList, requirePropFactory, useMediaQuery } from '@mui/material';
import { ArrowForward, Close, Menu} from '@mui/icons-material';
import { useEffect, useState } from 'react';

const LandingNavBar = () => {
  const isTablet = useMediaQuery("(max-width:1000px)");
  const isDesktop = useMediaQuery("(min-width:1025px)");

  const [isMobileNavOpen, openMobileNav] = useState<boolean>(false);
  let lastScrollTop: number = 0;

  
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
    {name: 'Products', to: '/Products'},
    {name: 'Designers', to: ''},
    {name: 'Company', to: ''},
  ]

    
  useEffect(() => {
    const nav =document.getElementById("nav") ;
    if (!nav) return;

    let lastScrollTop = window.scrollY || document.documentElement.scrollTop;

    const handleScroll = () => {
      const currentScroll = window.scrollY || document.documentElement.scrollTop;


    
      if (currentScroll > 1300 && isDesktop) {
        if (currentScroll > lastScrollTop) {
          // Downscroll
          nav.style.top = "-10rem";
        } else {
          // Upscroll
          nav.style.top = "0";
        }
      } else {
        nav.style.top = "-10rem"; 
      }




      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  let lastScroll = 0;

  window.addEventListener("scroll",()=> {
    const nav =document.getElementById("mobile-nav") ;
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
  


  return (
    <>
        {isDesktop &&
    <div className="nav desktop" id='nav'>
    <div className="nav-wrapper px-8 ">
      

      <ul className="nav-left">
        <Link  to='/' className="logo">Kōyōhaus</Link>
        <li className='nav-link'>
          <Link to='/products' >Products</Link>
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
    
    <div className="nav-wrapper" >
    <Link to='/'  onClick={()=> scrollLock(false)} className="logo">Kōyōhaus</Link>
    


      <ul className="nav-right">
        <li className='nav-link'>
          <Link to='' >
            <SearchRoundedIcon sx={{color: isMobileNavOpen ? 'black' : 'white', fontSize:'30px'}}/>
          </Link>
        </li>
        <li className='nav-link'>
          <Link to='' >
            <PersonOutlineRoundedIcon sx={{color: isMobileNavOpen ? 'black' : 'white',  fontSize:'30px'}}/>
          </Link>
        </li>
        <li className='nav-link' onClick={()=>
        {openMobileNav(!isMobileNavOpen);
         scrollLock(!isMobileNavOpen);
        }}>
            { isMobileNavOpen ? 
            <Close sx={{color:'black', fontSize:'30px'}}/>
            :
            <Menu sx={{color:'white', fontSize:'30px'}} />}
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

export default LandingNavBar