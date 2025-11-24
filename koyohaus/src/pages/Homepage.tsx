
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Link } from "react-router-dom"
import { East } from "@mui/icons-material";
import { useMediaQuery } from '@mui/material';
import { Carousel, CarouselApi, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "../components/ui/carousel.tsx";
import { ReactNode, useState } from 'react';
import { useEffect } from 'react';
import LandingNavBar from '../components/LandingNavBar.tsx';
import focus from "../assets/Images/productFocus.avif";
import desfocus from "../assets/Images/designFocus.avif";
const Homepage = () => {


 
  
  const isTablet = useMediaQuery("(max-width:1000px)");
  const isDesktop = useMediaQuery("(min-width:1025px)");
  const [isDropDownOpen, openDropdownMenu] = useState<boolean>(false);
  const [drop, setDrop] = useState<String>('');
  const [active, setActive] = useState<boolean>(false);
  
  const heroImg = "src/assets/images/phillip-goldsberry-fZuleEfeA1Q-unsplash.jpg"

  interface link {
    name: string,
    to: string
  }


  const categories: link[] = [
    {name: "TABLES",
    to: "src/assets/Images/tables.avif"
    },
    {name: "SOFAS",
    to: "src/assets/Images/sofas.avif"
    },
    {name: "COFFEE TABLES",
    to: "src/assets/Images/coffee.avif"
    },
    {name: "LOUNGUE CHAIRS",
    to: "src/assets/Images/loungueChair.avif"
    },
    {name: "COMPLEMENTS",
    to: "src/assets/Images/complements.avif"
    },
    {name: "CHAIRS AND STOOLS",
    to: "src/assets/Images/chairs.avif"
    }
    
  ]

  const designers: link[] = [
    {name: "Lorem ipsum",
    to: "src/assets/Images/designer1.avif"
    },
    {name: "adipisicing elit",
    to: "src/assets/Images/designer2.avif"
    },
    {name: "repudiandae voluptas",
    to: "src/assets/Images/designer3.jpg"
    },  
  ]

  const missions: link[] = [
    {name: "OUR MISSION",
    to: "src/assets/Images/mission.avif"
    },
    {name: "CERTIFICATIONS",
    to: "src/assets/Images/bcorp.avif"
    },
    {name: "PRODUCTION",
    to: "src/assets/Images/production.avif"
    },  
    {name: "TRACEABILITY",
    to: "src/assets/Images/sustainability.webm"
    },  
  ]
  
  let navTop = false;

  useEffect(() => {
    const nav = document.getElementById("hero-nav") ;
    const homedropdown = document.getElementById("homedroptop")
    const currentScroll = window.scrollY || document.documentElement.scrollTop;

    if (!nav) return;
    if (!homedropdown) return;

    const moveNav = () => {
       if (currentScroll > 500 ){
       homedropdown.style.bottom = '0 ';
      homedropdown.style.top = 'unset ';
      homedropdown.style.marginBottom = '5rem '; 
      homedropdown.style.marginTop = 'unset '; 
      }else{
         homedropdown.style.bottom = 'unset ';
      homedropdown.style.top = '0 ';
      homedropdown.style.marginTop = '5rem '; 
       homedropdown.style.marginBottom = 'unset '; 
      }
      
    }

    const handleScroll = () => {
  
      const logo = document.getElementById("logo")
      if (!nav || !logo) return;
    
      if (currentScroll > 0) {
       nav.style.backgroundColor = "black"
       nav.style.color = 'white'
      logo.style.color = 'white'
      } else {
        nav.style.backgroundColor = "transparent" 
      
      }

     

    };

    

    window.addEventListener("scroll", handleScroll);
     window.addEventListener("scroll", moveNav);
    handleScroll();
    moveNav();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
        const wrapper = document.getElementById("drop-wrapper-hero");
        if(!wrapper) return 
        if(state === ""){
          wrapper.style.height = '0px';
        }else if(state === 'company'){
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

    

    const handleNav =(state: String) => {
      const nav =document.getElementById("hero-nav") ;
      const logo = document.getElementById("logo")
      if (!nav || !logo) return;

      if(state == 'active'){
        nav.style.backgroundColor = 'white';
        nav.style.color = 'black';
        logo.style.color = 'black';
      }else{
        nav.style.backgroundColor = 'black';
        nav.style.color = 'white';
        logo.style.color = 'white';
      }
      

    
    }

  
   
  

  return (
    <>
    <LandingNavBar active={false}/>

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



    <section className="md:-mt-20 " >
        {isDesktop && <div id='hero-nav' className="nav hero top px-0" >
        <div className="nav-wrapper px-8">
                
                    <ul className="nav-left">
                      <Link  to='/' className="logo" id='logo'>Kōyōhaus</Link>
            
                      <li className='nav-link hero'  
                      onMouseEnter={()=>{
                        openDropdownMenu(true);
                        setDrop('products');
                        changeWrapperHeight('products');
                        
                      }} 
                      onMouseOver={()=>{
                        handleNav('active');
                      }}

                      onMouseLeave={()=>{
                        handleNav('inactive');
                        openDropdownMenu(false)
                      }}
                    >
                        <Link>Products</Link>
                      </li>
            
                      <li className='nav-link hero' 
                      onMouseEnter={()=>{
                        openDropdownMenu(true);
                        setDrop('designers');
                        changeWrapperHeight('designers');
                        
                      }}
                      
                      onMouseOver={()=>{
                        handleNav('active');
                      }}

                      onMouseLeave={()=>{
                        handleNav('inactive');
                        openDropdownMenu(false)
                      }}>
                        <Link >Designers</Link>
                      </li>

                      <li className='nav-link hero' 
                      onMouseEnter={()=>{
                        setDrop('company');
                        changeWrapperHeight('company');
                        openDropdownMenu(true);
                        
                      }}
                      onMouseOver={()=>{
                        handleNav('active');
                      }}

                      onMouseLeave={()=>{
                        handleNav('inactive');
                        openDropdownMenu(false)
                      }}>
                        <Link >Company</Link>
                      </li> 
                    </ul>
            
            
                    <ul className="nav-right">
                      <li className='nav-link hero' >
                        <Link to='' >
                          <SearchRoundedIcon/>
                        </Link>
                      </li>
                      <li className='nav-link hero' >
                        <Link to='' >
                          <PersonOutlineRoundedIcon/>
                        </Link>
                      </li>
                      <li className='nav-link hero' >
                        <Link to='' >
                          <FavoriteBorderIcon/>
                        </Link>
                      </li> 
                    </ul>
        </div>

        <div className={"homedropdown" + (isDropDownOpen ? " show" : "") } id='homedroptop' >
                    <div className="drop-wrapper" id='drop-wrapper-hero' 
                      onMouseOver={()=>[
                        handleNav('active')
                      ]}>

                      <div  /*products*/
                        onMouseEnter={()=>{
                        openDropdownMenu(true);
                        setDrop('products');
                        handleNav('active');}} 

                  
                      onMouseLeave={()=>{
                        openDropdownMenu(false);
                        setDrop('');
                      handleNav('inactive');}} 
                        
                        
                      className={"products-dropdown" + (drop == 'products' ? " show" : "") + 
                       " h-fit grid grid-cols-3"}>

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
                        openDropdownMenu(true);
                        setDrop('designers');
                        handleNav('active');
                      }} 
                      onMouseLeave={()=>{
                        openDropdownMenu(false);
                        setDrop('');
                       ;
                        }} className={"designers-dropdown" + (drop == 'designers' ? " show" : "") +   " h-fit grid grid-cols-3"} >
            
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
                        openDropdownMenu(true);
                        setDrop('company');
                        handleNav('active');
                      }} 
                      
                      onMouseLeave={()=>{
                        openDropdownMenu(false);
                        setDrop('');
                        handleNav('inactive');
                       
                        }} className={"company-dropdown" + (drop == 'company' ? " show" : "") +   " h-fit grid grid-cols-4"} >
            
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

        </div>}


        <div className="bg-black">

        <div className="mycontainer lg:px-10 px-4 md:px-5  pb-20 bg-black">
        <p className="md:text-6xl text-4xl font-light md:max-w-10/12 text-white pt-10 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, modi temporibus repudiandae quis magnam eos.</p>
        
        
        <div className="bg-gray-200 flex w-fit rounded-4xl gap-2 text-sm ml-auto -mb-24 mt-40">
          <p className="bg-white rounded-4xl w-fit p-2">Grid view</p>
          <p className="w-fit rounded-4xl py-2 pe-2">List view</p>
        </div>

     

        <div className="grid grid-cols-2 md:grid-cols-3 mt-35 md:gap-8 gap-4 text-white ">
        {categories.map((cat, indx)=> 
          <div key={indx} className="md:p-6 p-2 box-border aspect-retro md:aspect-frame" style={{
            backgroundImage:`url("${cat.to}")`,
            backgroundPosition:'center',
            backgroundSize:'cover',
     
            }}>
            <p className="lg:text-4xl md:text-3xl text-lg font-light">{cat.name}</p>
          </div>
         )}
        </div>
        </div>
        </div>
      

    </section>


    <section className="lg:px-10 px-4 md:px-5 py-20 bg-white">
      <div className="mycontainer">
        <p className="lg:text-6xl text-4xl font-normal md:max-w-5/12">Discover our most beloved designs</p>
         <p className="mt-10">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste sunt veritatis aperiam hic iusto vero saepe repellat enim sit rerum? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, id!</p>

         <Carousel className="mt-20" >
        <CarouselContent className="gap-3 md:gap-8">
          {categories.map((cat, indx)=> 
              <CarouselItem key={indx} 
              style={{
                backgroundImage:`url("${cat.to}")`,
                backgroundPosition:'center',
                backgroundSize:'cover',    
              }} className="lg:basis-1/5 md:1/4 basis-1/2 aspect-card  bg-amber-100 "></CarouselItem>
              )}
        </CarouselContent>
        <CarouselNext className="md:-right-5 -right-4 text-black" />
        <CarouselPrevious className="md:-left-5  -left-4 text-black" />
      </Carousel>
      </div>

      

    </section>

    <section className="lg:px-10 px-4 md:px-5 py-20 bg-black text-white">
      <div className="mycontainer">
        <p className="lg:text-6xl text-4xl font-normal md:max-w-5/12">Explore our Universe</p>
         <p className="mt-10">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste sunt veritatis aperiam hic iusto vero saepe repellat enim sit rerum? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, id!</p>

         <Carousel className="mt-20" >
        <CarouselContent className="gap-3 md:gap-8">
          {categories.map((cat, indx)=> 
              <CarouselItem key={indx} 
              style={{
                backgroundImage:`url("${cat.to}")`,
                backgroundPosition:'center',
                backgroundSize:'cover',    
              }} className="lg:basis-1/5 md:1/4 basis-1/2 aspect-card  bg-amber-100 "></CarouselItem>
              )}
        </CarouselContent>
        <CarouselNext className="md:-right-5 -right-4 text-black" />
        <CarouselPrevious className="md:-left-5  -left-4 text-black" />
      </Carousel>
      </div>

      

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
          backgroundImage:`url("${designer.to}")`,
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
            <source src={mission.to} type="video/mp4"></source>
          </video>
                        
            : 
            <img className="aspect-square" src={mission.to} alt="" /> 
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