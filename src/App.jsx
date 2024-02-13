import './App.css';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import ItemDetails from './Pages/ItemDetails';
import About from './Pages/About';
import NotFound from './Pages/NotFound';
import {Routes, Route} from 'react-router-dom';


function App() {

  return (
  <main>
    <Navbar/>
    <Sidebar/>
    <Routes>
      <Route path="/" element = {<Home/>} />
      <Route path="/about" element = {<About/>} />
      <Route path="/recipes/:id" element = {<ItemDetails/>} />
      <Route path="*" element = {<NotFound/>} />
    </Routes>
    <Footer/>
  </main>
  )
}

export default App
