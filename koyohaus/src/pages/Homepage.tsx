import "./homepage.scss"
import { ReactElement, ReactNode } from "react";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Navbar from "../components/Navbar.tsx";
import { useMediaQueryContext } from "../components/MediaQueryContext.tsx"
import SwipeCarousel from "../components/SwipeCarousel.tsx";
import { Link } from "react-router-dom"
import { Category, East } from "@mui/icons-material"
const Homepage = () => {
  const { isMobile, isTablet, isDesktop } = useMediaQueryContext();
  
  const heroImg = "src/assets/images/phillip-goldsberry-fZuleEfeA1Q-unsplash.jpg"

  interface category {
    name: String,
    src: String
  }
  const categories: category[] = [
    {name: "TABLES",
    src: "src/assets/Images/tables.avif"
    },
    {name: "SOFAS",
    src: "src/assets/Images/sofas.avif"
    },
    {name: "COFFEE TABLES",
    src: "src/assets/Images/coffee.avif"
    },
    {name: "LOUNGUE CHAIRS",
    src: "src/assets/Images/loungueChair.avif"
    },
    {name: "COMPLEMENTS",
    src: "src/assets/Images/complements.avif"
    },
    {name: "CHAIRS AND STOOLS",
    src: "src/assets/Images/chairs.avif"
    }
    
  ]

  return (
    <>

      <div className="h-screen  px-4 md:px-5 lg:px-10 text-white flex justify-center items-end pb-40 " 
      style={{
        backgroundImage:`url("${heroImg}")`,
        backgroundPosition:'center',
        objectFit:'cover',
        backgroundSize:'cover',
        backgroundRepeat:'no-repeat',
        }}>


          <div className="flex-col flex gap-5 w-full " style={{maxWidth:"2000px"}} >
            <p className="text-6xl font-light">Welcome to Kōyōhaus: Lorem ipsum dolor sit amet. </p>
            <a className="text-xl flex gap-2 items-center" href="">
              Explore 
              <East className="mt-2" sx={{fontSize:'25px'}}/>
            </a>
          </div>
  
        
        
      </div>



    <section className="lg:px-10 px-4 md:px-5 bg-black -mt-16" >
        {isDesktop && <div className="nav hero" >
        <div className="nav-wrapper ">
          

          <ul className="nav-left">
            <p className="logo">Kōyōhaus</p>
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

        </div>}


        <p className="text-5xl mt-5 font-light text-white pt-10 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, modi temporibus repudiandae quis magnam eos.</p>
        
        
        <div className="grid grid-cols-2 md:grid-cols-3 mt-35 gap-10">
        {categories.map((cat, indx)=> 
          <div key={indx} className="h-72" style={{
            backgroundImage:`url("${cat.src}")`,
            backgroundPosition:'center',
            backgroundSize:'cover'
            }}>
            <p>{cat.name}</p>
          </div>
         )}
        </div>
      
   

    </section>

     
      
    </>
      

  )
}

export default Homepage