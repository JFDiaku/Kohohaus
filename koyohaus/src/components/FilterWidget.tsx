import { Add, KeyboardArrowDown, KeyboardArrowUp, Remove } from "@mui/icons-material";
import { useState, useEffect } from "react";
import "../components/components.scss"
import FidgetMenu from "./FidgetMenu.tsx";
import {useMediaQuery} from "@mui/material";

const FilterWidget = () => {
    const [Bycategories] = useState(() => [
    {name: 'Chairs and stools', to: '' , amount: Math.floor(Math.random() * 20) },
    {name: 'Lounge chairs', to: '' , amount: Math.floor(Math.random() * 20) },
    {name: 'Sofas', to: '' , amount: Math.floor(Math.random() * 20) },
    {name: 'Tables', to: '' , amount: Math.floor(Math.random() * 20) },
    {name: 'Coffee tables', to: '' , amount: Math.floor(Math.random() * 20) },
    {name: 'Complements', to: '' , amount: Math.floor(Math.random() * 20) },
    {name: 'All Products', to:'', amount: Math.floor(Math.random() * 20) }
  ]) 

      const [ByDesigners] = useState(() => [
      {name: 'Lorenzo Vélin', to: '' , amount: Math.floor(Math.random() * 20) },
      {name: 'Marcelle Dupré', to: '' , amount: Math.floor(Math.random() * 20) },
      {name: 'Ansel Reinhardt', to: '' , amount: Math.floor(Math.random() * 20) },
      {name: 'Gianna Bellini', to: '' , amount: Math.floor(Math.random() * 20) },
      {name: 'Henrik Vaals', to: '' , amount: Math.floor(Math.random() * 20) },
      {name: 'Otto Krell', to: '' , amount: Math.floor(Math.random() * 20) },
      {name: 'Gianna Bellini', to: '' , amount: Math.floor(Math.random() * 20) },
      {name: 'All Designers', to:'', amount: Math.floor(Math.random() * 20) }
    ])
  
  
  
  
      const [ByMaterials] = useState(() => [
      {name: 'Lorenzo Vélin', to: '' , amount: Math.floor(Math.random() * 20) },
      {name: 'Marcelle Dupré', to: '' , amount: Math.floor(Math.random() * 20) },
      {name: 'Ansel Reinhardt', to: '' , amount: Math.floor(Math.random() * 20) },
      {name: 'Gianna Bellini', to: '' , amount: Math.floor(Math.random() * 20) },
      {name: 'Henrik Vaals', to: '' , amount: Math.floor(Math.random() * 20) },
      {name: 'Otto Krell', to: '' , amount: Math.floor(Math.random() * 20) },
      {name: 'Gianna Bellini', to: '' , amount: Math.floor(Math.random() * 20) },
      {name: 'All Designers', to:'', amount: Math.floor(Math.random() * 20) }
    ])

  const isDesktop = useMediaQuery("(min-width:1025px)");

  const [mode, setMode] = useState<String>('inactive');
  let lastScroll: number = 0;

  window.addEventListener("scroll",()=> {
    const widget =  document.getElementById("widget")  ;
    if(!widget) return;

    const currentScroll = window.scrollY || document.documentElement.scrollTop;

    if(currentScroll == 0){
      widget.style.top = "0";
      return;
    }


    if (currentScroll > lastScroll) {
      // Downscroll
      widget.style.top = "0";
    } else {
      // Upscroll
      widget.style.top = isDesktop ? "5.5rem" : "3.55rem";
    }

    
    lastScroll = currentScroll <= 0 ? 0 : currentScroll;
  })


  
const handleNav = (state: String) => {
    const widget =  document.getElementById("widget") ;

    const currentScroll = window.scrollY || document.documentElement.scrollTop;
    if(!widget) return;
    let doc = document.documentElement;
    setMode(state);
    console.log(mode)
    if(state === 'filter' && !isDesktop && currentScroll < 300 ){
       window.scrollTo({
    top: 200,      
    behavior: "smooth"
  });
        widget.style.top = "0";
        doc.style.overflow = "hidden"; 
    }else if(state === 'filter' && !isDesktop){
        widget.style.top = "0";
        doc.style.overflow = "hidden"; 
    }else if(state === 'sort'){
        doc.style.overflow = "";  
    }
    else{
        doc.style.overflow = '';
    }
   };
  

    useEffect(() => {
       const nav = document.getElementById("mobile-nav") ;
       if (!nav) return;
   
       nav.style.backgroundColor = "white";
     }, []);


  return (
    <>
    <section className={"lg:px-10 px-4 md:px-5 filterwidget" + (mode !== 'inactive' ? ' active' : '' )} id='widget'>
      <div className="mycontainer relative">

        <div className="grid grid-cols-3 lg:grid-cols-6 w-full text-sm">
          <div className={(mode !== 'inactive' ? "border-e-2 border-black" : "border-e-1 border-gray-500") + " flex justify-between items-center pe-4 py-2"}>
            <p className="lg:text-lg">Filter</p>
           {mode !== 'filter' ? <span onClick={()=>{handleNav('filter')}}><Add sx={{fontSize:"20px"}}/> </span>
           : <span onClick={()=>{handleNav('inactive');}}><Remove sx={{fontSize:"20px"}}/> </span> }
          </div>

          <div className={(mode !== 'inactive' ? "border-e-2 border-black" : "border-e-1 border-gray-500") + " flex justify-center items-center py-2"}>
            260 Products 
          </div>


          <div className="py-2 ps-4 flex justify-between items-center lg:col-span-4 lg:justify-end">
            <p>Sort By</p>
            {mode !== 'sort' ? <span onClick={()=>{handleNav('sort')}}><KeyboardArrowDown sx={{fontSize:"25px"}}/> </span>
           : <span onClick={()=>{handleNav('inactive');}}><KeyboardArrowUp sx={{fontSize:"25px"}}/> </span> }
          </div>
        
        </div>

        {isDesktop && 
        <form className={"sort-desktop "+ (mode === 'sort' ?  " show" : "")}>
   
            <label className="sort-label border-b-2">
            <input type="radio" name="option" value="Featured" onChange={()=>{handleNav('inactive');}}></input>
            Featured 
            </label> 

            <label  className="sort-label border-b-2">
            <input type="radio" name="option" value="Ascending" onChange={()=>{handleNav('inactive');}}></input>
            Name (A-Z)
            </label> 

            <label  className="sort-label ">
            <input type="radio" name="option" value="Descending" onChange={()=>{handleNav('inactive');}}></input>
            Name (Z-A)
            </label> 

        </form>}

        

      </div>
       {!isDesktop && 
        <form className={"sort"+ (mode === 'sort' ?  " show" : "")}>
   
            <label className="sort-label border-b-2">
            <input type="radio" name="option" value="Featured" onChange={()=>{handleNav('inactive');}}></input>
            Featured 
            </label> 

            <label  className="sort-label border-b-2">
            <input type="radio" name="option" value="Ascending" onChange={()=>{handleNav('inactive');}}></input>
            Name (A-Z)
            </label> 

            <label  className="sort-label border-b-2">
            <input type="radio" name="option" value="Descending" onChange={()=>{handleNav('inactive');}}></input>
            Name (Z-A)
            </label> 

        </form>} 
         {isDesktop && <div className={"filter" + (isDesktop ? ' desk' : '')+ (mode === 'filter' ?  " show" : "")}>
             <div className="grid grid-cols-4 max-w-[2000px] m-auto p-10 text-sm">

                <div className='flex flex-col gap-2 col-span-1'>
                  <p className="mb-2 font-medium text-gray-500">BY CATEGORIES</p>
                          {Bycategories.map((cat, index)=>
                  <label key={index} className="flex items-center gap-2 text-xs ">
                      <input type="checkbox" name={cat.name} value={cat.name} />
                      {cat.name}           
                  </label>)}
                </div>

                <div className='flex flex-col gap-2 col-span-1'>
                  <p className="mb-2 font-medium text-gray-500">BY DESIGNERS</p>
                          {ByDesigners.map((des, index)=>
                  <label key={index} className="flex items-center gap-2 text-xs ">
                      <input type="checkbox" name={des.name} value={des.name} />
                      {des.name}           
                  </label>)}
                </div>

                <div className='flex flex-col gap-2 col-span-1'>
                  <p className="mb-2 font-medium text-gray-500">BY MATERIALS</p>
                          {ByMaterials.map((mat, index)=>
                  <label key={index} className="flex items-center gap-2 text-xs ">
                      <input type="checkbox" name={mat.name} value={mat.name} />
                      {mat.name}           
                  </label>)}
                </div>


              </div> 

            <div className="absolute bottom-0 left-0 right-0 border-t-2 border-black">
              <div className="max-w-[2000px] m-auto flex gap-4 items-center py-5 px-4 justify-end">
                <p onClick={()=>handleNav('inactive')} className='text-xs'><u>Clear all</u></p>

                <button onClick={()=>handleNav('inactive')} className='bg-black p-0 text-xs text-white px-6 py-3'>Seen products (260)</button>
              </div>
            </div>
        </div>}
    </section>
    
    <div className="filter-dropdown">
      <FidgetMenu mode={mode} handleNav={handleNav}/>   
    </div>
    </>
    
  )
}

export default FilterWidget