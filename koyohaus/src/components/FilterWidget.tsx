import { Add, KeyboardArrowDown } from "@mui/icons-material";
import "../components/components.scss"

const FilterWidget = () => {
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
      widget.style.top = "5.5rem";
    }

    
    lastScroll = currentScroll <= 0 ? 0 : currentScroll;
  })

  return (
    <section className="lg:px-10 px-4 md:px-5 filterwidget" id='widget'>
      <div className="mycontainer">
        <div className="grid grid-cols-3 w-full">
          <div className="border-e-1 border-gray-500 flex justify-between items-center pe-4 py-2">
            <p className="text-lg">Filter</p>
            <Add sx={{fontSize:"20px"}}/>
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
  )
}

export default FilterWidget