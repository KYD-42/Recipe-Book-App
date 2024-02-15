import { Link } from 'react-router-dom';

function Sidebar() {
    return (
      <div className="sidebar">
        <Link to="/about" style={{ textDecoration: 'none', color: '#F1DBAE' }}><p>About</p></Link>
      </div>
    );
  }
  
  export default Sidebar;