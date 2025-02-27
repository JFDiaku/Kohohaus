import "./homepage.scss"
import HeroCouch from "../assets/images/phillip-goldsberry-fZuleEfeA1Q-unsplash.jpg"
import { ReactElement, ReactNode } from "react"
const Homepage = () => {
  
  

  return (
    <>
      <img src={HeroCouch} alt="" className="hero" />
      <div className="container hero-wrapper">
          <section className="hero-heading">
            <p className="welcome">Welcome to Kōyōhaus</p>
            <p className="text"></p>
            <div className="explore">
              <a href="">Explore</a>
              <p  className="arrow">→</p>
            </div>
          </section>
      </div>


      <section className="about">
            
      </section>
    </>
      

  )
}

export default Homepage