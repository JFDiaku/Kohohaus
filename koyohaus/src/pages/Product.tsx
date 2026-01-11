import {product, frames,  woods } from "../assets/data.ts"
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchProductById } from "../assets/server.ts";
import { useMediaQuery } from "@mui/material";
import "../components/components.scss"
import { Add } from "@mui/icons-material";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Minus } from "lucide-react";
import sofaspec from "../assets/Images/sofaspec.avif"
import tablespec from "../assets/Images/tablespec.avif"
import stoolspec from "../assets/Images/stoolspec.avif"
import chairspec from "../assets/Images/chairspecs.avif"


const Product = () =>{

    const isDesktop = useMediaQuery("(min-width:1025px)");
    const [data, setData] = useState<product | null >(null);
    const { item } = useParams<{ item: string }>();
    const [frame, showFrame] = useState<boolean>(false);
    const [wood, showWood] = useState<boolean>(false);
    const [spec, setSpec] = useState<string | null>(null);

     const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };


    const id: number = item ? parseInt(item, 10) : 0;

     useEffect(() => {
    const getItem = async () => {
      try {
        const foundItem = await fetchProductById(id);
        setData(foundItem);
        if (foundItem) {
          if(foundItem.type === 1){
            setSpec(chairspec);
          }else if(foundItem.type === 2){
            setSpec(tablespec);
          }else if(foundItem.type === 3){
            setSpec(sofaspec);
          }else{
            setSpec(stoolspec);
          }
        }
       
      } catch (err) {
       
      }
    };

    getItem();
  }, [id]);


  let lastScroll: number = 0;

  window.addEventListener("scroll",()=> {
    const widget =  document.getElementById("product-widget")  ;
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
      widget.style.top = isDesktop ? "5.5rem" : "3.5rem";
    }

    
    lastScroll = currentScroll <= 0 ? 0 : currentScroll;
  })

    return(
        <>
        <div className="">
          {/* nav widget */}
          <section className="lg:mt-[5.5rem] mt-[4rem] px-3 lg:px-8 sticky bg-white z-3" style={{transition:'all .3s ease-in-out'}} id="product-widget">
          <div className="mycontainer">
            <div className="lg:flex lg:justify-between items-center">
              <div className="">
                {!isDesktop && <p className="text-md">By {data?.designer}</p>}
                <p className="text-2xl">{data?.name}</p>
              </div>
              
              <div className={"flex gap-10 pb-5 mt-3" + ( !isDesktop ? " overflow-scroll [&::-webkit-scrollbar]:hidden scrollbar-none" : "")}>
                <a href="">Details</a>
                <a href="">Variants</a>
                <a href="">Designer</a>
                <a href="">Impact</a>
                <a href="">Downloads</a>
              </div>
            </div>
          </div>
          </section>  

          <section className="">
            <div className="mycontainer px-3 lg:px-8">
              {/* product view */}
              <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-20 relative">

                {/*PV left */}
                <div className="">
                <img src={data?.image} alt={data?.name} className="h-auto w-full aspect-square bg-[#f0f0f0]"/>
                <div className="mt-3 flex gap-4">
                  <img src={data?.image} alt={data?.name} className="border-gray-400 border-2 w-[90px] h-[auto] px-3"/>
                  <img src={data?.image} alt={data?.name} className="border-gray-400 border-2 w-[90px] h-[auto] px-3"/>
                </div>
                </div>

                {/*PV right */}
                <div className="sticky">
                  <p className="text-md">By {data?.designer}</p>

                  <p className="text-3xl">{data?.name}</p>

                  <p className="mt-8 border-b-3 border-gray-200 pb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Corrupti corporis eveniet necessitatibus odit, nostrum veniam quia beatae officia laboriosam! Quod iusto tempore
                     fuga maxime perspiciatis dolores vel illo. Quas esse sunt est. Est veniam quasi alias quae in laudantium iste corporis
                      optio vitae impedit praesentium quibusdam quaerat, iusto aperiam saepe!
                  </p>


                  <div className="mt-8 flex gap-4">
                    <img src={data?.image} alt={data?.name} className="border-gray-400 border-2 w-[90px] h-[auto] px-3"/>
                    <img src={data?.image} alt={data?.name} className="border-gray-400 border-2 w-[90px] h-[auto] px-3"/>
                  </div>


                  <div className="mt-8 border-b-3 border-gray-200 pb-8">
                  <div className="flex gap-2">
                    <p>WOOD:</p>
                    <p>SELECT MODEL</p>
                  </div>
                  <div className="flex gap-2">
                    <p>FRAME:</p>
                    <p>SELECT MODEL</p>
                  </div>
                  </div>

                  <div className="mt-8 pb-8 grid grid-cols-2 gap-8">
                    <button className="bg-black text-white w-full lg:text-md py-3">Find Dealer</button>
                    <button className="border-3 border-black lg:text-md py-3">Save Project <Add/></button>
                  </div>

                  <div className="">
                    <Accordion 
                               sx={{
                                backgroundColor:"transparent",
                                boxShadow: 'none',
                                borderTop: expanded === `panel1` ? 'black solid 3px' : '#e4e6eb solid 3px',
                                borderBottom: expanded === `panel1` ? 'black solid 3px' : '#e4e6eb solid 3px',
                                borderRadius: "none",
                                padding: "32px 0",
                                ":hover": {
                                  borderTop: "black solid 3px",
                                  borderBottom: "black solid 3px",
                                }
                             }} 
                              expanded={expanded === `panel1`} 
                              onChange={handleChange(`panel1`)}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon sx={{fontSize:"40px", color:'black',}}/>}
                                    aria-controls={`panel1bh-content`}
                                    id={`panel1bh-header`}
                                    sx={{padding:'0'}}
                                >
                                  <p className="text-3xl font-normal">Materials</p>
                                </AccordionSummary>
                                <AccordionDetails sx={{padding: '0'}}>

                                  <div className="">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium cupiditate deserunt enim omnis doloremque quisquam.</p>

                                  <div className={"py-8 border-t-3 border-b-3 mt-3 frames-wrapper" + (frame ? " show" : "")}>
                                      <div className="flex justify-between">
                                        <p className=" text-xl">Frame (3)</p>
                                        <button className="cursor-pointer" onClick={()=>showFrame(prev => !prev)}>{frame ? <Minus/> : <Add/>}</button>
                                        
                                      </div>

                                      <div className={"flex gap-8 frames" + (frame ? " show" : "")}> 
                                        {frames.map((fr, inx) =>
                                          <div className="" key={inx}>
                                            <img src={fr.image} alt={fr.image} className="aspect-square max-h-36" />
                                            <p className="mt-3">{fr.name}</p>
                                          </div>
                                        )}
                                      </div>
                                    </div>   
                                  </div>

                                  <div className="">
                                  

                                  <div className={"py-8  border-b-3  woods-wrapper" + (wood ? " show" : "")}>
                                      <div className="flex justify-between">
                                        <p className="text-xl">Wood (2)</p>
                                        <button className="cursor-pointer" onClick={()=>showWood(prev => !prev)}>{wood ? <Minus/> : <Add/>}</button>
                                        
                                      </div>

                                      <div className={"flex gap-8 woods" + (wood ? " show" : "")}> 
                                        {woods.map((wd, inx) =>
                                          <div className="" key={inx}>
                                            <img src={wd.image} alt={wd.image} className="aspect-square max-h-36" />
                                            <p className="mt-3">{wd.name}</p>
                                            <p className="mt-1">{wd.mix}%</p>
                                          </div>
                                        )}
                                      </div>
                                    </div>   
                                  </div>
                                    
                                  <button className="px-7 py-3 border-black border-3 mt-8">Order samples</button>
                                    
                                    
                                </AccordionDetails >
                    </Accordion>
                    <Accordion 
                               sx={{
                                backgroundColor:"transparent",
                                boxShadow: 'none',
                                borderTop: expanded === `panel2` ? 'black solid 3px' : '',
                                borderBottom: expanded === `panel2` ? 'black solid 3px' : '#e4e6eb solid 3px',
                                borderRadius: "none",
                                padding: "32px 0",
                                ":hover": {
                                  borderTop: "black solid 3px",
                                  borderBottom: "black solid 3px",
                                }
                             }} 
                              expanded={expanded === `panel2`} 
                              onChange={handleChange(`panel2`)}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon sx={{fontSize:"40px", color:'black'}}/>}
                                    aria-controls={`panel2bh-content`}
                                    id={`panel2bh-header`}
                                     sx={{padding:'0'}}
                                >
                                  <p className="text-3xl font-normal">Specifications</p>
                                </AccordionSummary>
                                <AccordionDetails sx={{padding: '0'}}>
                                  <div className="border-b-3 border-[#e4e6eb] border-t-3 flex mt-8">
                                      <ul className="w-2/5">
                                        <li className="flex justify-between border-b-2 border-#e4e6eb py-3 pe-5">
                                          <p>Width</p>
                                          <p>82,5 cm</p>
                                        </li>
                                        <li className="flex justify-between border-b-2 border-#e4e6eb py-3 pe-5">
                                          <p>Length</p>
                                          <p>180 cm</p>
                                        </li>
                                        <li className="flex justify-between border-b-2 border-#e4e6eb py-3 pe-5">
                                          <p>Heigth</p>
                                          <p>73 cm</p>
                                        </li>
                                        <li className="flex justify-between border-b-2 border-#e4e6eb py-3 pe-5">
                                          <p>Weight</p>
                                          <p>90 kg</p>
                                        </li>
                                        <li className="flex justify-between  border-#e4e6eb py-3 pe-5">
                                          <p>Design Year</p>
                                          <p>2009</p>
                                        </li>
                                      </ul>
                                      <img src={spec ? spec : ""} alt="" className="max-w-3/5 object-contain border-s-3 border-#e4e6eb p-8" />
                                  </div>
                                 
                                    
                                    
                                </AccordionDetails>
                    </Accordion>
                    <Accordion 
                               sx={{
                                backgroundColor:"transparent",
                                boxShadow: 'none',
                                borderTop: expanded === `panel3` ? 'black solid 3px' : '',
                                borderBottom: expanded === `panel3` ? 'black solid 3px' : '#e4e6eb solid 3px',
                                borderRadius: "none",
                                padding: "32px 0",
                                ":hover": {
                                  borderTop: "black solid 3px",
                                  borderBottom: "black solid 3px",
                                }
                             }} 
                              expanded={expanded === `panel3`} 
                              onChange={handleChange(`panel3`)}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon sx={{fontSize:"40px", color:'black'}}/>}
                                    aria-controls={`panel3bh-content`}
                                    id={`panel3bh-header`}
                                     sx={{padding:'0'}}
                                >
                                  <p className="text-3xl font-normal">Product Care</p>
                                </AccordionSummary>
                                <AccordionDetails sx={{padding:'0'}}>
                                  <div className="mt-8">
                                    <div className="border-t-3 border-#e4e6eb py-8">
                                      <p className="text-xl">Oiled Wood</p>
                                      <p className="mt-8 mb-8">Oiled wood will develop a natural patina that will become more beautiful over time. 
                                        At Fredericia, oil treatment is available for a number of products in oak, smoked oak or walnut.</p>

                                      <a href="" className="font-bold underline">Read more</a>
                                      <a href="" className="font-bold underline ms-8">Watch how to video</a>
                                    </div>

                                    <div className="border-t-3 border-#e4e6eb py-8">
                                      <p className="text-xl">Powder Coat Metal</p>
                                      <p className="mt-8 mb-8">Powder coated metal is durable and does not require any particular type of maintenance. Simply wipe with a soft cloth wrung in hot water,
                                         possibly containing a mild cleaning agent if necessary. Wipe the surface with a dry cloth, immediately after.</p>

                                      <a href="" className="font-bold underline">Read more</a>

                                    </div>

                                    <div className="border-t-3 border-#e4e6eb py-8">
                                      <p className="text-xl">Textiles</p>
                                      <p className="mt-8 mb-8">Powder coated metal is durable and does not require any particular type of maintenance. Simply wipe with a soft cloth wrung in hot water,
                                         possibly containing a mild cleaning agent if necessary. Wipe the surface with a dry cloth, immediately after.</p>

                                      <a href="" className="font-bold underline">Read more</a>

                                    </div>

                                    <div className="border-t-3 border-#e4e6eb py-8 border-b-3 mb-8">
                                      <p className="text-xl">Aniline Leather</p>
                                      <p className="mt-8 mb-8">Leather is an animal product, which we treat with the utmost respect. At Fredericia, we only use hides of the finest quality, from animals raised according to strict ethical guidelines. </p>

                                      <a href="" className="font-bold underline">Read more</a>
                                      <a href="" className="font-bold underline ms-8">Watch how to video</a>

                                    </div>

                                  </div>  
                                 
                                    
                                    
                                </AccordionDetails>
                    </Accordion>
                    <Accordion 
                               sx={{
                                backgroundColor:"transparent",
                                boxShadow: 'none',
                                borderTop: expanded === `panel4` ? 'black solid 3px' : '',
                                borderBottom: expanded === `panel4` ? 'black solid 3px' : '#e4e6eb solid 3px',
                                borderRadius: "none",
                                padding: "32px 0",
                                ":hover": {
                                  borderTop: "black solid 3px",
                                  borderBottom: "black solid 3px",
                                }
                             }} 
                              expanded={expanded === `panel4`} 
                              onChange={handleChange(`panel4`)}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon sx={{fontSize:"40px", color:'black'}}/>}
                                    aria-controls={`panel4bh-content`}
                                    id={`panel4bh-header`}
                                     sx={{padding:'0'}}
                                >
                                  <p className="text-3xl font-normal">Tests & Certifications</p>
                                </AccordionSummary>
                                <AccordionDetails sx={{gap:'0'}}>

                                 
                                    
                                    
                                </AccordionDetails>
                    </Accordion>

                    
                  </div>

                </div>
              </div>
            </div>
          </section> 
        </div>
        
        <div className="h-[200vh]"></div>
       
        </>
    )
}

export default Product ;