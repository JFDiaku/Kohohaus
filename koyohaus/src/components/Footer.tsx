import "./footer.scss";

interface link {
  name: string,
  src: string
}

interface color {
  color: string
}

const Footer : React.FC<color> = ({color}) => {
  const company: link[] = [
    {name: "About us",
    src: ""
    },
    {name: "Sustainability",
    src: ""
    },
    {name: "Careers",
    src: ""
    },  
    {name: "Privacy policy",
    src: ""
    },  
  ]
  



  const followUs: link[] = [
    {name:"Instagram",
    src:""
    },
    {name:"LinkedIn",
      src:""
    },
    {name:"Facebook",
      src:""
    },
    {name:"Pinterest",
      src:""
    }
  ]

  const inspiration: link[] = [
    {name:"Newsletter",
    src:""
    },
    {name:"Catalogues",
      src:""
    },
    {name:"Cases",
      src:""
    },
    {name:"Care and Maintenance",
      src:""
    }
  ]

  


  const contact: link[] = [
    {name:"Customer Care",
      src:""
    },
    {name:"Sales",
      src:""
    },
    {name:"Press",
      src:""
    },
    {name:"FAQ",
      src:""
    }
  ]


  

  return (
    <>
    <div  className={(color == "white" ? "bg-white" : "bg-black") + " px-5 md:px-10 "}>

      <div className="mycontainer">
        <div className="w-full grid grid-cols-2 md:grid-cols-4 py-10 gap-10">

          <ul className="footLink" >
            <p className={color == 'white' ? "text-black" : 'text-gray-600'}>INSPIRATION</p>
            {inspiration.map((footLink, ind) => 
              <li className={(color == "white" ? "before:bg-black" : "before:bg-white")} key={ind}>
                <a className={(color == "white" ? "text-black" : "text-white")} href="">{footLink.name}</a>
              </li>
            )}
          </ul>
          
          <ul className="footLink">
            <p  className={color == 'white' ? "text-black" : 'text-gray-600'}>COMPANY</p>
            {company.map((footLink, ind) => 
              <li className={(color == "white" ? "before:bg-black" : "before:bg-white")} key={ind}>
                <a className={(color == "white" ? "text-black" : "text-white")} href="">{footLink.name}</a>
              </li>
            )}
          </ul>

          <ul className="footLink">
            <p  className={color == 'white' ? "text-black" : 'text-gray-600'}>CONTACT</p>
            {contact.map((footLink, ind) => 
              <li className={(color == "white" ? "before:bg-black" : "before:bg-white")} key={ind}>
                <a className={(color == "white" ? "text-black" : "text-white")} href="">{footLink.name}</a>
              </li>
            )}
          </ul>

          <ul  className="footLink">
            <p  className={color == 'white' ? "text-black" : 'text-gray-600'}>FOLLOW US</p>
            {followUs.map((footLink, ind) => 
              <li className={(color == "white" ? "before:bg-black" : "before:bg-white")} key={ind}>
                <a className={(color == "white" ? "text-black" : "text-white")} href="">{footLink.name}</a>
              </li>
            )}
          </ul>

          

        </div>
      </div>
    </div>
    <div className={
  (color === "white" ? "bg-white border-t-gray" : "bg-black border-t-gray-500") +
  " border-t-1 px-5 md:px-10 py-6"
}>
      <div className="mycontainer">
        <div className="flex justify-between items-center w-full">
          <p className={ (color === "white" ? "text-black" : "text-white") + " text-3xl font-bold"}>Kōyōhaus</p>
          <p className="md:text-sm md:max-w-none max-w-32 text-xs font-mono text-gray-600">Copyright © Kōyōhaus Furniture 2023</p>
        </div>
      </div>
    </div>

    </>
  )
}

export default Footer