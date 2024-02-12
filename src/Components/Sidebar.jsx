import { NavLink } from 'react-router-dom';

function Sidebar(props) {
    return (
      <div className="sidebar">
        <NavLink to="/"><h2>Home</h2></NavLink>
        <NavLink to="/about"><h2>About</h2></NavLink>
      </div>
    );
  }
  
  export default Sidebar;