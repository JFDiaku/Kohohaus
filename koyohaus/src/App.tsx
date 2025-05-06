import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage.tsx'
import Navbar from './components/Navbar.tsx'
import { useLocation } from 'react-router-dom'
import Products from './pages/Products.tsx'
import Footer from './components/Footer.tsx'
import Scroll from './components/Scroll.tsx'
function App() {
  const location = useLocation();


  const hideNavbarRoutes = ['/'];

  const showNavbar = !hideNavbarRoutes.includes(location.pathname);


  return (
    <>
      <Scroll/>
      {showNavbar && <Navbar />}
       <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/products" element={<Products/>}/>
       </Routes>
       {<Footer color={showNavbar ? 'black' : 'white' }/>}
    </>
  )
}

export default App
