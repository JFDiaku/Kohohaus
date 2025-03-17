import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage.tsx'
import Navbar from './components/Navbar.tsx'

function App() {


  return (
    <>
    <Router>
      <Navbar/>
       <Routes>
          <Route path="/" element={<Homepage/>}/>
       </Routes>
 
   </Router>
    </>
  )
}

export default App
