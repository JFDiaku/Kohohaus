import FilterWidget from "../components/FilterWidget.tsx"
import chair1 from "../assets/Images/chair1.png"
import chair2 from "../assets/Images/chair2.png"
import chair3 from "../assets/Images/chair3.png"
import chair4 from "../assets/Images/chair4.png"
import chair5 from "../assets/Images/chair5.png"
import chair6 from "../assets/Images/chair6.png"
import chair7 from "../assets/Images/chair7.png"
import chair8 from "../assets/Images/chair8.png"
import chair9 from "../assets/Images/chair9.png"

import table1 from "../assets/Images/table1.png"
import table2 from "../assets/Images/table2.png"
import table3 from "../assets/Images/table3.png"
import table4 from "../assets/Images/table4.png"
import table5 from "../assets/Images/table5.png"
import table6 from "../assets/Images/table6.png"
import table7 from "../assets/Images/table7.png"
import table8 from "../assets/Images/table8.png"
import table9 from "../assets/Images/table9.png"



import sofa1 from "../assets/Images/sofa1.png"
import sofa2 from "../assets/Images/sofa2.png"
import sofa3 from "../assets/Images/sofa3.png"
import sofa4 from "../assets/Images/sofa4.png"
import sofa6 from "../assets/Images/sofa6.png"
import sofa7 from "../assets/Images/sofa7.png"
import sofa8 from "../assets/Images/sofa8.png"
import sofa9 from "../assets/Images/sofa9.png"

import stool1 from "../assets/Images/stool1.png"
import stool2 from "../assets/Images/stool2.png"
import stool3 from "../assets/Images/stool3.png"
import stool4 from "../assets/Images/stool4.png"
import stool6 from "../assets/Images/stool6.png"
import stool7 from "../assets/Images/stool7.png"
import stool8 from "../assets/Images/stool8.png"
import stool9 from "../assets/Images/stool9.png"

import { Add } from "@mui/icons-material"
import { useState } from "react"
import "../components/components.scss"


const Products = () => {
   const [activeProduct, setProduct] = useState<number | null>(null);

   const toggleOptions = (id: number) =>{
    setProduct(prev => (prev === id ? null : id));
   }

  
  interface product {
    name: string,
    image: string,
    designer: string,
    id: number
  }

const chairs: product[] = [
  {name: "J39 Mogensen Chair", image: chair1, designer: 'Lorenzo Vélin', id: 1},
  {name: "Søborg Chair", image: chair2, designer: 'Marcelle Dupré', id: 2},
  {name: "Trinidad Chair", image: chair3, designer: 'Ansel Reinhardt', id: 3},
  {name: "Canvas Chair", image: chair4, designer: 'Gianna Bellini', id: 4},
  {name: "Swoon Dining Chair", image: chair5, designer: 'Henrik Vaals', id: 5},
  {name: "Pato Chair", image: chair6, designer: 'Otto Krell', id: 6},
  {name: "Plan Chair", image: chair7, designer: 'Kade Elric', id: 7},
  {name: "Eyes Chair", image: chair8, designer: 'Jaxon Rhys', id: 8},
  {name: "Post Chair", image: chair9, designer: 'Avery Calder', id: 9}
]
 

 const tables: product[] = [
  {name: "BM67 Coffee Table", image: table1, designer: 'Noa Bennett', id: 10},
  {name: "Risom Magazine Table", image: table2, designer: 'Lucien Mårten', id: 11},
  {name: "Post Table", image: table3, designer: 'Henrik Vaals', id: 12},
  {name: "Islets Table", image: table4, designer: 'Elena Rousseau', id: 13},
  {name: "Trinidad Table", image: table5, designer: 'Ansel Reinhardt', id: 38},
  {name: "Library Table", image: table6, designer: 'Otto Krell', id: 14},
  {name: "Taro Rectangular Table", image: table7, designer: 'Marcelle Dupré', id: 15},
  {name: "C18 Dining Table", image: table8, designer: 'Lorenzo Vélin', id: 16},
  {name: "Plan Table", image: table9, designer: 'Kade Elric', id: 17},
  {name: "JG Side Table", image: table9, designer: 'Elena Rousseau', id: 18}
]

 const sofas: product[] = [
  {name: "Mogensen 2212 Sofa", image: sofa1, designer: 'Gianna Bellini', id: 19},
  {name: "Mogensen 2213 Sofa", image: sofa2, designer: 'Lorenzo Vélin', id: 20},
  {name: "Calmo Modular Sofa", image: sofa3, designer: 'Ansel Reinhardt', id: 21},
  {name: "Delphi Two-Seater Sofa", image: sofa4, designer: 'Gianna Bellini', id: 22},
  {name: "Haiku Sofa", image: sofa6, designer: 'Otto Krell', id: 23},
  {name: "Mogensen 23 Sofa", image: sofa7, designer: 'Avery Calder', id: 24},
  {name: "Delphi Modular Sofa", image: sofa8, designer: 'Noa Bennett', id: 25},
  {name: "Haiku Three-Seater", image: sofa9, designer: 'Jaxon Rhys', id: 26}
]


const stools: product[] = [
  {name: "Pioneer Stool", image: stool1, designer: 'Kade Elric', id: 27},
  {name: "Spine Barstool", image: stool2, designer: 'Lucien Mårten', id: 28},
  {name: "Gallery Stool", image: stool3, designer: 'Henrik Vaals', id: 29},
  {name: "Pioneer Counter Stool", image: stool4, designer: 'Marcelle Dupré', id: 30},
  {name: "J16 Rocking Stool", image: stool6, designer: 'Avery Calder', id: 31},
  {name: "Pato Bar Stool", image: stool7, designer: 'Elena Rousseau', id: 32},
  {name: "Spine Counter Stool", image: stool8, designer: 'Otto Krell', id: 33},
  {name: "Pioneer Bar Stool", image: stool9, designer: 'Noa Bennett', id: 34}
]

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

        <div className="product-stair bg-[#f0f0f0] aspect-[4/5]  md:aspect-card p-5  flex items-center">
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
          <img src={sf.image} alt={sf.name} className="w-100 h-auto m-auto" />
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