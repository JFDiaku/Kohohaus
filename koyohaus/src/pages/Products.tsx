import FilterWidget from "../components/FilterWidget.tsx"


import {chairs, stools, tables, sofas} from  "../assets/data.ts" 

import { Add } from "@mui/icons-material"
import { useState } from "react"
import "../components/components.scss"


const Products = () => {
   const [activeProduct, setProduct] = useState<number | null>(null);

   const toggleOptions = (id: number) =>{
    setProduct(prev => (prev === id ? null : id));
   }


  return (
    <>
    <section className="mt-3 lg:mt-20 lg:px-10 px-4 md:px-5 pt-20 pb-10 lg:pb-15">
      <div className="mycontainer">
        <p className="text-[25px] md:text-4xl lg:text-5xl font-[350] z-5">All Products</p>
      </div>
    </section>
    <FilterWidget/>
    <section className="chairs px-4 lg:px-10 mt-4 mb-10">
      <div className="mycontainer">
        <div className="grid max-[500px]:gap-10  max-[500px]:grid-cols-1 min-[500px]:gap-5 min-[500px]:gap-y-10 lg:gap-5  grid-cols-2 md:grid-cols-3 ">
        {chairs.map((ch) =>
        <div key={ch.id} className="flex flex-col text-start justify-center gap-4 relative">

        <div className="product-chair bg-[#f0f0f0] aspect-[4/5]  md:aspect-card p-5  flex items-center">
          <img src={ch.image} alt={ch.name} className="w-100 h-auto m-auto" />
        </div>

        <div className="flex flex-col gap-1 ">
            <p className="text-gray-500 text-xl">{ch.designer}</p>
            <p className="text-2xl">{ch.name}</p>
        </div>

        <div className="absolute top-4 right-4 flex flex-col ">

          <span className={'cursor-pointer z-4 max-w-fit self-end' + (activeProduct === ch.id ? ' bg-black' : ' bg-white')} onClick={()=> toggleOptions(ch.id)}> 
            <Add className={'toggle-options cursor-pointer' + (activeProduct === ch.id ? ' active' : '')} />
          </span>

          <div className={"options flex flex-col bg-white -mt-7 pt-10 px-8 text-sm items-end  gap-2 pb-10" + (activeProduct === ch.id ? " active" : "") } >
           <p className="product-options">Add to Favorites</p> 
           <p className="product-options">Add to cart</p>
           <p className="product-options">All Images</p>
          </div>
        </div>

       

        </div>
        )}
      </div> 
      </div>
      
    </section>
    {/* CHAIRS SECTION */}


<section className="chairs px-4 lg:px-10 mt-4 mb-10">
      <div className="mycontainer">
        <div className="grid max-[500px]:gap-10  max-[500px]:grid-cols-1 min-[500px]:gap-5 min-[500px]:gap-y-10 lg:gap-5  grid-cols-2 md:grid-cols-3 ">
        {stools.map((st) =>
        <div key={st.id} className="flex flex-col text-start justify-center gap-4 relative">

        <div className="product-chair bg-[#f0f0f0] aspect-[4/5]  md:aspect-card p-5  flex items-center">
          <img src={st.image} alt={st.name} className="w-100 h-auto m-auto" />
        </div>

        <div className="flex flex-col gap-1 ">
            <p className="text-gray-500 text-xl">{st.designer}</p>
            <p className="text-2xl">{st.name}</p>
        </div>

        <div className="absolute top-4 right-4 flex flex-col ">

          <span className={'cursor-pointer z-4 max-w-fit self-end' + (activeProduct === st.id ? ' bg-black' : ' bg-white')} onClick={()=> toggleOptions(st.id)}> 
            <Add className={'toggle-options cursor-pointer' + (activeProduct === st.id ? ' active' : '')} />
          </span>

          <div className={"options flex flex-col bg-white -mt-7 pt-10 px-8 text-sm items-end  gap-2 pb-10" + (activeProduct === st.id ? " active" : "") } >
           <p className="product-options">Add to Favorites</p> 
           <p className="product-options">Add to cart</p>
           <p className="product-options">All Images</p>
          </div>
        </div>

       

        </div>
        )}
      </div> 
      </div>
      
    </section>
    {/* STOOLS SECTION */}


    <section className="px-4 lg:px-10 mb-10" >
       <div className="mycontainer">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 ">
        {tables.map((tb) =>
        <div key={tb.id} className="flex flex-col text-start justify-center gap-4 relative">

        <div className="product-table bg-[#f0f0f0] md:aspect-[23/18] p-5  flex items-center">
          <img src={tb.image} alt={tb.name} className="w-100 h-auto m-auto md:min-h-[300px]" />
        </div>

        <div className="flex flex-col gap-1 ">
            <p className="text-gray-500 text-xl">{tb.designer}</p>
            <p className="text-2xl">{tb.name}</p>
        </div>

        <div className="absolute top-4 right-4 flex flex-col ">

          <span className={'cursor-pointer z-4 max-w-fit self-end' + (activeProduct === tb.id ? ' bg-black' : ' bg-white')} onClick={()=> toggleOptions(tb.id)}> 
            <Add className={'toggle-options cursor-pointer' + (activeProduct === tb.id ? ' active' : '')} />
          </span>

          <div className={"options flex flex-col bg-white -mt-7 pt-10 px-8 text-sm items-end  gap-2 pb-10" + (activeProduct === tb.id ? " active" : "") } >
           <p className="product-options">Add to Favorites</p> 
           <p className="product-options">Add to cart</p>
           <p className="product-options">All Images</p>
          </div>
        </div>

       

        </div>
        )}
      </div> 
      </div>
    </section>
    {/* TABLE SECTION */}

    <section className="px-4 lg:px-10 mb-10" >
       <div className="mycontainer">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 ">
        {sofas.map((sf) =>
        <div key={sf.id} className="flex flex-col text-start justify-center gap-4 relative">

        <div className="product-table bg-[#f0f0f0] p-5  md:aspect-[23/18] flex items-center">
          <img src={sf.image} alt={sf.name} loading="lazy" className="w-100 h-auto m-auto" />
        </div>

        <div className="flex flex-col gap-1 ">
            <p className="text-gray-500 text-xl">{sf.designer}</p>
            <p className="text-2xl">{sf.name}</p>
        </div>

        <div className="absolute top-4 right-4 flex flex-col ">

          <span className={'cursor-pointer z-4 max-w-fit self-end' + (activeProduct === sf.id ? ' bg-black' : ' bg-white')} onClick={()=> toggleOptions(sf.id)}> 
            <Add className={'toggle-options cursor-pointer' + (activeProduct === sf.id ? ' active' : '')} />
          </span>

          <div className={"options flex flex-col bg-white -mt-7 pt-10 px-8 text-sm items-end  gap-2 pb-10" + (activeProduct === sf.id ? " active" : "") } >
           <p className="product-options">Add to Favorites</p> 
           <p className="product-options">Add to cart</p>
           <p className="product-options">All Images</p>
          </div>
        </div>

       

        </div>
        )}
      </div> 
      </div>
    </section>
    {/* SOFAS */}

    <div className="mt-40"></div>
   

    </>
    
  )
}

export default Products