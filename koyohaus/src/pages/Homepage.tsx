
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Link } from "react-router-dom"
import { East } from "@mui/icons-material";
import { useMediaQuery } from '@mui/material';
import { Carousel, CarouselApi, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "../components/ui/carousel.tsx";
import Footer from "../components/Footer.tsx";
import { useEffect } from 'react';
import LandingNavBar from '../components/LandingNavBar.tsx';
const Homepage = () => {


 
  
  const isTablet = useMediaQuery("(max-width:1000px)");
  const isDesktop = useMediaQuery("(min-width:1025px)");
  
  
  const heroImg = "src/assets/images/phillip-goldsberry-fZuleEfeA1Q-unsplash.jpg"

  interface link {
    name: string,
    src: string
  }


  const categories: link[] = [
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

  const designers: link[] = [
    {name: "Lorem ipsum",
    src: "src/assets/Images/designer1.avif"
    },
    {name: "adipisicing elit",
    src: "src/assets/Images/designer2.avif"
    },
    {name: "repudiandae voluptas",
    src: "src/assets/Images/designer3.jpg"
    },  
  ]

  const missions: link[] = [
    {name: "OUR MISSION",
    src: "src/assets/Images/mission.avif"
    },
    {name: "CERTIFICATIONS",
    src: "src/assets/Images/bcorp.avif"
    },
    {name: "PRODUCTION",
    src: "src/assets/Images/production.avif"
    },  
    {name: "TRACEABILITY",
    src: "src/assets/Images/sustainability.webm"
    },  
  ]
  

  useEffect(() => {
    const nav =document.getElementById("hero-nav") ;
    if (!nav) return;


    const handleScroll = () => {
      const currentScroll = window.scrollY || document.documentElement.scrollTop;


    
      if (currentScroll > 0) {
       nav.style.backgroundColor = "black"
      } else {
        nav.style.backgroundColor = "transparent" 
      }

    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  

  return (
    <>
    <LandingNavBar/>

      <div id='hero' className="h-screen sticky -z-1 top-0 px-4 md:px-5 lg:px-10 text-white flex justify-center items-end pb-16 md:pb-40 " 
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



    <section className="md:-mt-16" >
        {isDesktop && <div id='hero-nav' className="nav hero lg:px-10 px-4 md:px-5" >
        <div className="nav-wrapper ">
          

          <ul className="nav-left">
            <Link to='/' className="logo">Kōyōhaus</Link>
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

        </div>}

        <div className="lg:px-10 px-4 md:px-5  pb-20 bg-black">
        <p className="md:text-6xl text-4xl font-light md:max-w-10/12 text-white pt-10 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, modi temporibus repudiandae quis magnam eos.</p>
        
        
        <div className="bg-gray-200 flex w-fit rounded-4xl gap-2 text-sm ml-auto -mb-24 mt-40">
          <p className="bg-white rounded-4xl w-fit p-2">Grid view</p>
          <p className="w-fit rounded-4xl py-2 pe-2">List view</p>
        </div>

        {/* <div className="bg-gray-200 flex w-fit rounded-4xl gap-2 text-sm ml-auto -mb-24 mt-40">
          <p className="w-fit py-2 rounded-4xl ps-2">Grid view</p>
          <p className="w-fit bg-white rounded-4xl p-2">List view</p>
        </div> */}

        <div className="grid grid-cols-2 md:grid-cols-3 mt-35 md:gap-8 gap-4 text-white ">
        {categories.map((cat, indx)=> 
          <div key={indx} className="md:p-6 p-2 box-border aspect-retro md:aspect-frame" style={{
            backgroundImage:`url("${cat.src}")`,
            backgroundPosition:'center',
            backgroundSize:'cover',
     
            }}>
            <p className="lg:text-4xl md:text-3xl text-lg font-light">{cat.name}</p>
          </div>
         )}
        </div>
        </div>
      

    </section>


    <section className="lg:px-10 px-4 md:px-5 py-20 bg-white">
      <div className="mycontainer">
        <p className="lg:text-6xl text-4xl font-normal md:max-w-5/12">Discover our most beloved designs</p>
         <p className="mt-10">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste sunt veritatis aperiam hic iusto vero saepe repellat enim sit rerum? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, id!</p>
      </div>

      <Carousel className="mt-20" >
        <CarouselContent className="gap-3 md:gap-8">
          {categories.map((cat, indx)=> 
              <CarouselItem key={indx} 
              style={{
                backgroundImage:`url("${cat.src}")`,
                backgroundPosition:'center',
                backgroundSize:'cover',    
              }} className="lg:basis-1/5 md:1/4 basis-1/2 aspect-card  bg-amber-100 "></CarouselItem>
              )}
        </CarouselContent>
        <CarouselNext className="md:-right-5 -right-4 text-black" />
        <CarouselPrevious className="md:-left-5  -left-4 text-black" />
      </Carousel>

    </section>

    <section className="lg:px-10 px-4 md:px-5 py-20 bg-black text-white">
      <div className="mycontainer">
        <p className="lg:text-6xl text-4xl font-normal md:max-w-5/12">Explore our Universe</p>
         <p className="mt-10">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste sunt veritatis aperiam hic iusto vero saepe repellat enim sit rerum? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, id!</p>
      </div>

      <Carousel className="mt-20" >
        <CarouselContent className="gap-3 md:gap-8">
          {categories.map((cat, indx)=> 
              <CarouselItem key={indx} 
              style={{
                backgroundImage:`url("${cat.src}")`,
                backgroundPosition:'center',
                backgroundSize:'cover',    
              }} className="lg:basis-1/5 md:1/4 basis-1/2 aspect-card  bg-amber-100 "></CarouselItem>
              )}
        </CarouselContent>
        <CarouselNext className="md:-right-5 -right-4 text-black" />
        <CarouselPrevious className="md:-left-5  -left-4 text-black" />
      </Carousel>

    </section>


    <section className=" text-black lg:px-10 px-4 md:px-5 pt-10 pb-20  bg-white ">
      <div className="mycontainer">
      <p className="lg:text-6xl text-4xl font-normal md:max-w-5/12">Meet the masters that define us</p>

      <p className="mt-10 md:max-w-9/12">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos quis quam atque soluta repudiandae voluptas repellat officia voluptate, dicta neque.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, modi.
      </p>


      <div className="grid grid-cols-1 md:grid-cols-3 w-full md:gap-5 gap-16 mt-20">
      {designers.map((designer, indx) => 
        <a key={indx} href="" className="no-underline aspect-frame relative" style={{
          backgroundImage:`url("${designer.src}")`,
          backgroundSize:"cover",
          backgroundPosition:'center',
          objectFit:'cover',
          backgroundRepeat:'no-repeat'}}>

          <p className="color-black text-sm absolute md:-bottom-14 -bottom-8">
          {designer.name.toUpperCase()}
          </p>
        </a>
        
      )}
      </div>

      <a href="" className="bg-black text-white py-2 mt-30 w-fit px-5 m-auto">Meet all designers</a>
      </div>


    </section>

    <section className=" pt-10 pb-20 text-white bg-black">
      <div className="mycontainer lg:px-10 px-4 md:px-5">
        <p className="lg:text-6xl text-4xl font-normal md:max-w-9/12">Kōyōhaus for People & Planet</p>

        <p className="mt-10 md:max-w-9/12">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos quis quam atque soluta repudiandae voluptas repellat officia voluptate, dicta neque.</p>

      
      </div>

      
      <a href="" className="border-t-4 border-b-white md:border-b-2 min-w-full block mt-15 md:text-xl lg:text-3xl font-light">
        <div className="grid grid-cols-2 md:grid-cols-4 m-auto md:px-5 lg:px-10" 
        style={{
          maxWidth: "2000px",
        }}>
        {missions.map((mission, index) =>
          <div key={index} className=  {mission.name === "TRACEABILITY" ?  "border-white p-3 md:p-6 outline-1 md:outline-0 outline-white flex flex-col gap-4 lg:gap-8" : " md:border-e-2 outline-1 md:p-6 border-white p-3 outline-white  md:outline-0 flex flex-col gap-4 lg:gap-8"}  >
            <p>0{index + 1}</p>

            <p>{mission.name}</p>

            {mission.name === "TRACEABILITY" ? 
            <video loop preload="true" autoPlay playsInline muted className="aspect-square">
            <source src={mission.src} type="video/mp4"></source>
          </video>
                        
            : 
            <img className="aspect-square" src={mission.src} alt="" /> 
            }
          </div>
        )}
      </div>
      </a>
    </section>
    

  


     
      
    </>
      

  )
}

export default Homepage