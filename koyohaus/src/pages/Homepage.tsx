import "./homepage.scss"
import HeroCouch from "../assets/images/phillip-goldsberry-fZuleEfeA1Q-unsplash.jpg"
import { ReactElement, ReactNode } from "react"
import Navbar from "../components/Navbar.tsx"
import { useMediaQueryContext } from "../components/MediaQueryContext.tsx"
const Homepage = () => {
  const { isMobile, isTablet, isDesktop } = useMediaQueryContext();
  

  return (
    <>
      <img src={HeroCouch} alt="" className="hero" />
      <div className="container hero-wrapper">
          <section className="hero-heading" style={{bottom: isDesktop && '5rem' }}>
            <p className="welcome" >Welcome to Kōyōhaus</p>
            <p className="text"></p>
            <div className="explore">
              <a href="">Explore</a>
              <p  className="arrow">→</p>
            </div>
          </section>
      </div>


      <section className="about">
        <Navbar/>
      </section>
    </>
      

  )
}

export default Homepage