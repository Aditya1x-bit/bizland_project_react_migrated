import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Topbar from './Topbar';
import Header from './Header';
import Home from './Home';
import Footer from './Footer';
import About from './About';
import Services from './Services';
import Portfolio from './Portfolio';
import Team from './Team';
import Contact from './Contact';
import PortDetails from './PortDetails';

function App() {
  return (
    <>
    <Router>
      <Topbar />
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/services' element={<Services/>}></Route>
        <Route path='/portfolio' element={<Portfolio/>}></Route>
        <Route path='/team' element={<Team/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/portfolio-details.html' element={<PortDetails/>}/>
      </Routes>
      <Footer/>
    </Router>
    </>
  );
}

export default App;