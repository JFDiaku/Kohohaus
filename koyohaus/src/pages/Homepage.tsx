
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Link } from "react-router-dom"
import { East } from "@mui/icons-material";
import { useMediaQuery } from '@mui/material';
import { Carousel,  CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "../components/ui/carousel.tsx";
import { useState } from 'react';
import { useEffect } from 'react';
import LandingNavBar from '../components/LandingNavBar.tsx';
import focus from "../assets/Images/productFocus.avif";
import desfocus from "../assets/Images/designFocus.avif";
import tables from "../assets/Images/tables.avif";
import sofas from "../assets/Images/sofas.avif";
import coffee from "../assets/Images/coffee.avif";
import loungeChair from "../assets/Images/loungueChair.avif";
import complements from "../assets/Images/complements.avif";
import chairs from "../assets/Images/chairs.avif";
import designer1 from "../assets/Images/designer1.avif";
import designer2 from "../assets/Images/designer2.avif"
import designer3 from "../assets/Images/designer3.jpg"
import mission from "../assets/Images/mission.avif"
import bcorp from "../assets/Images/bcorp.avif"
import production from "../assets/Images/production.avif"
import sustainability from "../assets/Images/sustainability.webm"
import heroImg from "../assets/Images/phillip-goldsberry-fZuleEfeA1Q-unsplash.jpg"

const Homepage = () => {


 
  
  const isDesktop = useMediaQuery("(min-width:1025px)");
  const [isDropDownOpen, openDropdownMenu] = useState<boolean>(false);
  const [drop, setDrop] = useState<String>('');

  


  interface link {
    name: string,
    to: string
  }


  const categories: link[] = [
    {name: "TABLES",
    to: tables
    },
    {name: "SOFAS",
    to: sofas
    },
    {name: "COFFEE TABLES",
    to: coffee
    },
    {name: "LOUNGUE CHAIRS",
    to: loungeChair
    },
    {name: "COMPLEMENTS",
    to: complements
    },
    {name: "CHAIRS AND STOOLS",
    to: chairs
    }
    
  ]

  const designers: link[] = [
    {name: "Lorem ipsum",
    to: designer1
    },
    {name: "adipisicing elit",
    to: designer2
    },
    {name: "repudiandae voluptas",
    to: designer3
    },  
  ]

  const missions: link[] = [
    {name: "OUR MISSION",
    to: mission
    },
    {name: "CERTIFICATIONS",
    to: bcorp
    },
    {name: "PRODUCTION",
    to: production
    },  
    {name: "TRACEABILITY",
    to: sustainability  
    },  
  ]
  


  useEffect(() => {
    const nav = document.getElementById("hero-nav") ;
    const homedropdown = document.getElementById("homedroptop")
   

    if (!nav) return;
    if (!homedropdown) return;


   
    const handleScroll = () => {
      const currentScroll = window.scrollY || document.documentElement.scrollTop;
      const logo = document.getElementById("logo")
    
      if (!nav || !logo) return;
  
    
      if (currentScroll > 0) {
       nav.style.backgroundColor = "black"
       nav.style.color = 'white'
       logo.style.color = 'white'
    
      } else {
        nav.style.backgroundColor = "transparent" 
      
      }
      
      if(currentScroll > 300) {
        homedropdown.style.marginBottom = 'unset';
        homedropdown.style.bottom = 'unset';
        homedropdown.style.top = '0';
        homedropdown.style.marginTop = '5.6rem ';
      }else{
        homedropdown.style.marginTop = 'unset';
        homedropdown.style.top = 'unset';
        homedropdown.style.bottom = '0';
        homedropdown.style.marginBottom = '5.5rem';

      }

    };

    

    window.addEventListener("scroll", handleScroll);
    handleScroll();




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

    

    const handleNav =(state: String) => {
      const nav =document.getElementById("hero-nav") ;
      const logo = document.getElementById("logo")
      const currentScroll = window.scrollY || document.documentElement.scrollTop;
    ;
      if (!nav || !logo) return;
  
      if(state == 'active'){
        nav.style.backgroundColor = 'white';
        nav.style.color = 'black';
        logo.style.color = 'black';
      }else if(currentScroll === 0){
        nav.style.backgroundColor = 'transparent';
        nav.style.color = 'white';
        logo.style.color = 'white';
      }else{
        nav.style.backgroundColor = 'black';
        nav.style.color = 'white';
        logo.style.color = 'white';
      }
      
  
    }

  
   
  

  return (
    <>
    <LandingNavBar />

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
                          <Link to='/products'>Products</Link>
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
                          <Link to={"/designers"} >Designers</Link>
                        </li>

                        
                      </ul>
              
              
                      <ul className="nav-right">

                        <li className='nav-link hero mr-10 company-link' 
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
                          <Link to={"/"} >Company</Link>
                        </li> 

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
                    <div className="drop-wrapper" id='drop-wrapper-hero' onMouseEnter={()=>[handleNav('active')]}  onMouseOver={()=>[handleNav('active')]} onMouseLeave={()=>{handleNav('inactive');}} >

                    

                      <div  
                        onMouseEnter={()=>{
                        openDropdownMenu(true);
                        setDrop('products');
                        handleNav('active');}} 

                  
                      onMouseLeave={()=>{
                        openDropdownMenu(false);
                        setDrop('');
                      handleNav('inactive');
                    }} 
                        
                        
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
            
                      <div   onMouseEnter={()=>{
                        openDropdownMenu(true);
                        setDrop('designers');
                        handleNav('active');
                      }} 
                      onMouseLeave={()=>{
                        openDropdownMenu(false);
                        setDrop('');
                        handleNav('inactive');
                       
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