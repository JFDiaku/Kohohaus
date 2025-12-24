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
  {name: "The Spanish Chair", image: chair1 , designer: 'Gianna Bellini', id:1},
  {name: "The Spanish Chair", image: chair2 , designer: 'Lorenzo Vélin', id:2},
  {name: "The Spanish Chair", image: chair3 , designer: 'Marcelle Dupré', id:3},
  {name: "The Spanish Chair", image: chair4 , designer: 'Gianna Bellini', id:4},
  {name: "The Spanish Chair", image: chair5 , designer: 'Gianna Bellini', id:5},
  {name: "The Spanish Chair", image: chair6 , designer: 'Henrik Vaals', id:6},
  {name: "The Spanish Chair", image: chair7 , designer: 'Gianna Bellini', id:7},
  {name: "The Spanish Chair", image: chair8 , designer: 'Gianna Bellini', id:8},
  {name: "The Spanish Chair", image: chair9 , designer: 'Gianna Bellini', id:9}
 ]
 

 const tables: product[] = [
  {name: "The Spanish Chair", image: table1 , designer: 'Gianna Bellini', id:10},
  {name: "The Spanish table", image: table2 , designer: 'Lorenzo Vélin', id:11},
  {name: "The Spanish table", image: table3 , designer: 'Marcelle Dupré', id:12},
  {name: "The Spanish table", image: table4 , designer: 'Gianna Bellini', id:13},
  {name: "The Spanish table", image: table6 , designer: 'Henrik Vaals', id:15},
  {name: "The Spanish table", image: table7 , designer: 'Gianna Bellini', id:16},
  {name: "The Spanish table", image: table8 , designer: 'Gianna Bellini', id:17},
  {name: "The Spanish table", image: table9 , designer: 'Gianna Bellini', id:18}
 ]

  const sofas: product[] = [
  {name: "The Spanish Chair", image: sofa1 , designer: 'Gianna Bellini', id:19},
  {name: "The Spanish sofa", image: sofa2 , designer: 'Lorenzo Vélin', id:20},
  {name: "The Spanish sofa", image: sofa3 , designer: 'Marcelle Dupré', id:21},
  {name: "The Spanish sofa", image: sofa4 , designer: 'Gianna Bellini', id:22},
  {name: "The Spanish sofa", image: sofa6 , designer: 'Henrik Vaals', id:23},
  {name: "The Spanish sofa", image: sofa7 , designer: 'Gianna Bellini', id:24},
  {name: "The Spanish sofa", image: sofa8 , designer: 'Gianna Bellini', id:25},
  {name: "The Spanish sofa", image: sofa9 , designer: 'Gianna Bellini', id:26}
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

        <div className="product-chair bg-[#f0f0f0] aspect-[4/5]  md:aspect-card    flex items-center">
          <img src={ch.image} alt={ch.name} className="w-100 h-100 m-auto" />
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
    <section className="px-4 lg:px-10 mb-10" >
       <div className="mycontainer">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 ">
        {tables.map((tb) =>
        <div key={tb.id} className="flex flex-col text-start justify-center gap-4 relative">

        <div className="product-table bg-[#f0f0f0] md:aspect-[23/18] flex items-center">
          <img src={tb.image} alt={tb.name} className="w-100 h-100 m-auto" />
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
    <section className="px-4 lg:px-10 mb-10" >
       <div className="mycontainer">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 ">
        {sofas.map((sf) =>
        <div key={sf.id} className="flex flex-col text-start justify-center gap-4 relative">

        <div className="product-table bg-[#f0f0f0] md:aspect-[23/18] flex items-center">
          <img src={sf.image} alt={sf.name} className="w-100 h-100 m-auto" />
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
    <div className="mt-40"></div>
   

    </>
    
  )
}

export default Products