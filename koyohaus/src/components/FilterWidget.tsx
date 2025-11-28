import { Add, KeyboardArrowDown, Remove } from "@mui/icons-material";
import { useState } from "react";
import "../components/components.scss"
import FidgetMenu from "./FidgetMenu.tsx";

const FilterWidget = () => {

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
      widget.style.top = "3.7rem";
    }

    
    lastScroll = currentScroll <= 0 ? 0 : currentScroll;
  })


  
const handleNav = (state: String) => {
    const widget =  document.getElementById("widget") ;
    const currentScroll = window.scrollY || document.documentElement.scrollTop;
    if(!widget) return;
    let doc = document.body;
    setMode(state);
    console.log(mode)
    if(state !== 'inactive' && currentScroll < 200 ){
       window.scrollTo({
    top: 200,      
    behavior: "smooth"
  });
        widget.style.top = "0";
        doc.style.overflow = "hidden"; 
    }
    if(state !== 'inactive'){
        doc.style.overflow = "hidden";  
    }
    else{
        doc.style.overflow = '';
    }
   };
  



  return (
    <>
    <section className="lg:px-10 px-4 md:px-5 filterwidget" id='widget'>
      <div className="mycontainer">
        <div className="grid grid-cols-3 w-full">
          <div className="border-e-1 border-gray-500 flex justify-between items-center pe-4 py-2">
            <p className="text-lg">Filter</p>
           {mode !== 'filter' ? <span onClick={()=>{handleNav('filter')}}><Add sx={{fontSize:"20px"}}/> </span>
           : <span onClick={()=>{handleNav('inactive');}}><Remove sx={{fontSize:"20px"}}/> </span> }
          </div>

          <div className="border-e-1 border-gray-500 flex justify-center items-center py-2">
            260 Products 
          </div>


          <div className="py-2 ps-4 flex justify-between items-center">
            <p>Sort By</p>
            <KeyboardArrowDown/>
          </div>
        </div>
      </div>
    </section>
    <div className="filter-dropdown">
      <FidgetMenu mode={mode} handleNav={handleNav}/>

      
    </div>
    </>
    
  )
}

export default FilterWidget