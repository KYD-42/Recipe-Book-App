import './App.css';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import Footer from './Components/Footer';
import Dashboard from './Pages/Dashboard';
import About from './Pages/About';
import NotFound from './Pages/NotFound';
import ItemDetails from './Pages/itemDetails';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <main>
      <Navbar/>
      <Sidebar/>
      <Routes>
        <Route path="/" element = {<Dashboard/>} /> {/* Home Page */}
        <Route path="/about" element = {<About/>} /> {/* About Page */}
        <Route path="/recipes/:id" element = {<ItemDetails/>} /> {/* Recipe Details Page */}
        <Route path="*" element = {<NotFound/>} /> {/* 404 Page */}
      </Routes>    
      <Footer/>
    </main>
  );
}

export default App