import React from 'react';
import { BrowserRouter as Link } from 'react-router-dom';
import About from '../pages/About';
import Contact from '../pages/Contact';
import HomePage from '../pages/HomePage';

function SiteHeader() {
  return (
    <header style={{border:"1px solid silver", margin:"10px"}}>
        <nav>
            <ul style={{display:"flex",justifyContent:"space-around", listStyle:"none"}}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    </header>
    // <Router>
    //     <header style={{border:"1px solid silver", margin:"10px"}}>
    //         <nav>
    //             <ul style={{display:"flex",justifyContent:"space-around", listStyle:"none"}}>
    //                 <li><Link to="/">Home</Link></li>
    //                 <li><Link to="/about">About</Link></li>
    //                 <li><Link to="/contact">Contact</Link></li>
    //             </ul>
    //         </nav>
    //         <Routes>
    //             <Route path="/" element={<HomePage/>}></Route>
    //             <Route path="/about"element={<About/>}></Route>
    //             <Route path="/contact" element={<Contact/>}></Route>
    //         </Routes>            
    //     </header>
    // </Router>
    
  )
}

export default SiteHeader