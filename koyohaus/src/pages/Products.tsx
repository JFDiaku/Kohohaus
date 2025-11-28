import FilterWidget from "../components/FilterWidget.tsx"



const Products = () => {

  return (
    <>
    <section className="mt-0 lg:mt-20 lg:px-10 px-4 md:px-5 pt-20 pb-10 lg:pb-15">
      <div className="mycontainer">
        <p className="text-[25px] md:text-4xl lg:text-5xl font-[350]">All Products</p>
      </div>
    </section>
    <FilterWidget/>
    <section className="h-[200vh]"></section>

    </>
    
  )
}

export default Products