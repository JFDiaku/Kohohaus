import {product, products, frame, frames, wood, woods } from "../assets/data.ts"
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


const Product = () =>{

    const isDesktop = useMediaQuery("(min-width:1025px)");
    const [data, setData] = useState<product | null >(null);
    const { item } = useParams<{ item: string }>();
    const [error, setError] = useState<string | null>(null);
    const [frame, showFrame] = useState<boolean>(false);
    const [wood, showWood] = useState<boolean>(false);


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
      } catch (err) {
        if (err instanceof Error) setError(err.message);
      }
    };

    getItem();
  }, [id]);


  const accordionSx = {
    backgroundColor: 'transparent',
  boxShadow: 'none',
  padding: '32px 0',

  // base borders (single owner)
  borderBottom: '3px solid #e4e6eb',
  '&:first-of-type': {
    borderTop: '3px solid #e4e6eb',
  },

  // remove MUI divider
  '&::before': {
    display: 'none',
  },

  // hover state
  '&:hover': {
    borderColor: 'black',
  },

  // expanded state (persists after click)
  '&.Mui-expanded': {
    borderColor: 'black',
  },
};

    return(
        <>
        <div className="">
          {/* nav widget */}
          <section className="lg:mt-[5.5rem] mt-[4rem] px-3 lg:px-8">
          <div className="mycontainer">
            <div className="lg:flex lg:justify-between">
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

          <section>
            <div className="mycontainer px-3 lg:px-8">
              {/* product view */}
              <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-20">

                {/*PV left */}
                <div className="">
                <img src={data?.image} alt={data?.name} className="h-auto w-full aspect-square bg-[#f0f0f0]"/>
                <div className="mt-3 flex gap-4">
                  <img src={data?.image} alt={data?.name} className="border-gray-400 border-2 w-[90px] h-[auto] px-3"/>
                  <img src={data?.image} alt={data?.name} className="border-gray-400 border-2 w-[90px] h-[auto] px-3"/>
                </div>
                </div>

                {/*PV right */}
                <div className="mt">
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
                    disableGutters
                    elevation={0}
                    square
                               sx={accordionSx} 
                              expanded={expanded === `panel1`} 
                              onChange={handleChange(`panel1`)}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon sx={{fontSize:"40px", color:'black'}}/>}
                                    aria-controls={`panel1bh-content`}
                                    id={`panel1bh-header`}
                                >
                                  <p className="text-3xl font-normal">Materials</p>
                                </AccordionSummary>
                                <AccordionDetails sx={{gap:'0'}}>

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
                                    
                                    
                                </AccordionDetails>
                    </Accordion>

                    <Accordion 
                    disableGutters
                    elevation={0}
                    square
                               sx={accordionSx} 
                              expanded={expanded === `panel2`} 
                              onChange={handleChange(`panel2`)}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon sx={{fontSize:"40px", color:'black'}}/>}
                                    aria-controls={`panel2bh-content`}
                                    id={`panel2bh-header`}
                                >
                                  <p className="text-3xl font-normal">Specifications</p>
                                </AccordionSummary>
                                <AccordionDetails sx={{gap:'0'}}>
                                    <p>hello</p>
                                    
                                </AccordionDetails>
                    </Accordion>

                    <Accordion 
                    disableGutters
                    elevation={0}
                    square
                               sx={accordionSx} 
                              expanded={expanded === `panel3`} 
                              onChange={handleChange(`panel3`)}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon sx={{fontSize:"40px", color:'black'}}/>}
                                    aria-controls={`panel3bh-content`}
                                    id={`panel3bh-header`}
                                >
                                  <p className="text-3xl font-normal">Product Care</p>
                                </AccordionSummary>
                                <AccordionDetails sx={{gap:'0'}}>
                                    <p>hello</p>
                                    
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