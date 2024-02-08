import './App.css';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import Footer from './Components/Footer';
import List from './Components/list';

function App() {
  return (
    <main>
      <Navbar/>
      <Sidebar/>
      <List/>
      <Footer/>
    </main>
  );
}

export default App



/*
<div className='main'>
<Sidebar/>
</div> 
*/