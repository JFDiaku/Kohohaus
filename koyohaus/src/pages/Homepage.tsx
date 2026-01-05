
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
import tablesCat from "../assets/Images/tables.avif";
import sofasCat from "../assets/Images/sofas.avif";
import coffee from "../assets/Images/coffee.avif";
import loungeChair from "../assets/Images/loungueChair.avif";
import complements from "../assets/Images/complements.avif";
import chairsCat from "../assets/Images/chairs.avif";
import designer1 from "../assets/Images/designer1.avif";
import designer2 from "../assets/Images/designer2.avif"
import designer3 from "../assets/Images/designer3.jpg"
import mission from "../assets/Images/mission.avif"
import bcorp from "../assets/Images/bcorp.avif"
import production from "../assets/Images/production.avif"
import sustainability from "../assets/Images/sustainability.webm"
import heroImg from "../assets/Images/phillip-goldsberry-fZuleEfeA1Q-unsplash.jpg"
import explore1 from "../assets/Images/explore1.avif"
import explore2 from "../assets/Images/explore2.avif"
import explore3 from "../assets/Images/explore3.avif"
import explore4 from "../assets/Images/explore4.avif"
import explore5 from "../assets/Images/explore5.avif"
import explore6 from "../assets/Images/explore6.avif"
import "../components/components.scss"
import table1 from "../assets/Images/table3.png"
import sofa2 from "../assets/Images/sofa2.png"
import sofa7 from "../assets/Images/sofa4.png"

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {chairs, stools, tables, sofas, product} from  "../assets/data.ts" 


const Homepage = () => {


 
  
  const isDesktop = useMediaQuery("(min-width:1025px)");
  const [isDropDownOpen, openDropdownMenu] = useState<boolean>(false);
  const [drop, setDrop] = useState<String>('');
  const [view, setView] = useState<String>('grid');

  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };



  interface link {
    name: string,
    to?: string,
    img?: string,
    text?: string
    products?: product[]
  }


  const categories: link[] = [
    {name: "TABLES",
    to: tablesCat,
    products: tables
    },
    {name: "SOFAS",
    to: sofasCat,
    products: sofas
    },
    {name: "COFFEE TABLES",
    to: coffee,
    products: stools
    },
    {name: "LOUNGUE CHAIRS",
    to: loungeChair,
    products: chairs
    },
    {name: "COMPLEMENTS",
    to: complements,
    products: stools
    },
    {name: "CHAIRS AND STOOLS",
    to: chairsCat,
    products: stools
    }
    
  ]

  const explore: link[] = [
   {
    name: "Plan Wood: Where warmth meets precision",
    text: "Explore the new Plan Wood Series designed by Barber Osgerby. A warm and tactile evolution of the original Plan Collection.",
    img: explore1,
  },
  {
    name: "The Spanish Chair: A timeless icon",
    text: "Børge Mogensen’s Spanish Chair blends solid craftsmanship with bold proportions and enduring comfort.",
    img: explore2,
  },
  {
    name: "J39 People’s Chair: Everyday elegance",
    text: "A democratic design classic by Børge Mogensen, created for daily use with honest materials and form.",
    img: explore3,
  },
  {
    name: "Piloti Table: Architecture in furniture",
    text: "Inspired by modernist principles, the Piloti Table balances structure and lightness in solid wood.",
    img: explore4,
  },
  {
    name: "Søborg Chair: Refined modern comfort",
    text: "A sculptural chair that combines soft curves with precise lines, offering comfort without excess.",
    img: explore5,
  },
  {
    name: "Calmo Lounge: Quiet luxury",
    text: "Designed for relaxed living, the Calmo Lounge series brings understated elegance to contemporary spaces.",
    img: explore6,
  },
  ]



  const designs: link[] = [
    {
    name: "Piloti Table",
    text: "Noa Bennett",
    img: table1,
  },
  {
    name: "Risom Magazine Sofa",
    text: "Lucien Mårten",
    img: sofa2,
  },
  {
    name: "Mogensen 2213 Sofa",
    text: "Lorenzo Vélin",
    img: sofa7,
  },
   
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
        homedropdown.style.marginTop = '5.5rem ';
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
            <p className="text-6xl font-light">Welcome to Kōyōhaus</p>
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
        <p className="md:text-6xl text-4xl font-light md:max-w-10/12 text-white pt-10 ">Kōyōhaus is a modern design house rooted in craftsmanship, creating enduring originals shaped by precision, purpose, and time.</p>
        
        
        <div className="bg-[#333333] flex w-fit rounded-4xl gap-2 text-sm ml-auto -mb-24 mt-40">
          <p onClick={()=>setView('grid')} className={"grid-button" + (view === "grid" ? ' show' : '')}>Grid view</p>
          <p onClick={()=>setView('list')} className={"list-button" + (view === "list" ? ' show' : '')}>List view</p>
        </div>

     
  
        <div className={"grid grid-cols-2 md:grid-cols-3 mt-35 md:gap-8 gap-4 text-white gridview" + (view === "grid" ? ' show' : '')}>
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

        <div className={"listview" + (view === "list" ? ' show' : '')}>
        {categories.map((cat, indx)=> 
          <Accordion key={indx}
           sx={{
            backgroundColor:"transparent",
          color:'white',
          borderTop:'2px gray solid',
         borderBottom: indx === 5 ? '2px gray solid' : ''}} 
          expanded={expanded === `panel${indx}`} 
          onChange={handleChange(`panel${indx}`)}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{color:'white'}} />}
                aria-controls={`panel${indx}bh-content`}
                id={`panel${indx}bh-header`}
            >
                <p className='md:text-[35px] text-[20px]'>
                {cat.name}
                </p>

            </AccordionSummary>
            <AccordionDetails>

              <div className="flex md:gap-4 gap-1 justify-evenly flex-wrap ">
                {cat.products?.map((img, index)=>
                <div key={index} className={ (cat.name === 'CHAIRS AND STOOLS' || 
                          cat.name ===  'LOUNGUE CHAIRS' || 
                          cat.name ===   'COFFEE TABLES' || cat.name ===   'COMPLEMENTS' ?
                           "aspect-[2/3] max-h-[200px] max-w-[100px] w-full" : "aspect-[10/5] max-h-[150px] max-w-[300px] w-full" ) + ' bg-[#f0f0f0]'}
                     >
                  <img src={img.image} alt="" className='min-w-full min-h-full m-auto'/>
                
                </div>
                )}
              </div>
                
                
                
            </AccordionDetails>
            </Accordion>
         )}
        </div>


        </div>
        </div>
      

    </section>


    <section className="lg:px-10 px-4 md:px-5 py-20 bg-white">
      <div className="mycontainer">
        <p className="lg:text-6xl text-4xl font-normal md:max-w-5/12">Discover our most beloved designs</p>
         <p className="mt-10 max-w-[700px] text-lg">Designed by our designers, these products span chairs, tables, sofas, and stools that define our collection. From the J39 Mogensen Chair and Plan Table to the Mogensen sofas and Pioneer stools, each piece reflects careful craftsmanship and lasting design values.</p>

         <Carousel className="mt-20"  >
        <CarouselContent className="gap-3 md:gap-8">
          {designs.map((des, indx)=> 
              <CarouselItem key={indx} className="basis  ">
                <img src={des.img} className=" aspect-[40/24] min-h-100 min-w-100 m-auto bg-[#f0f0f0] xl:px-50 xl:pb-10 4xl:px-100 3xl:py-20 3xl:aspect-[54/30]   box-content"></img>

                <div className="mt-5">
                  <p className='font-light text-xl '>{des.name}</p>
                  <p className='mt-2 text-3xl'>{des.text}</p>
                </div>
              </CarouselItem>
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
         <p className="mt-10 max-w-[700px] text-lg">Covering design news, interviews, and creative projects, these stories are capturing the most attention right now.</p>

         <Carousel className="mt-20" >
        <CarouselContent className="lg:ml-20 justify-between">
          {explore.map((cat, indx)=> 
              <CarouselItem key={indx} className="basis md:basis-1/2  xl:basis-1/3 ">
                <img src={cat.img} className=" aspect-card min-h-100 min-w-100 m-auto"></img>

                <div className=" mt-3">
                  <p>{cat.name}</p>
                  <p className='mt-3 font-light'>{cat.text}</p>
                </div>

              </CarouselItem>
              )}
        </CarouselContent>
        <CarouselNext className="md:-right-5 -right-4 text-black cursor-pointer" />
        <CarouselPrevious className="md:-left-5  -left-4 text-black cursor-pointer" />
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