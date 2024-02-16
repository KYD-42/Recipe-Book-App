import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
      <div className="navbar">
        <NavLink to="/" style={{ textDecoration: 'none' }}><img src="src/assets/logo.svg" height={40}/></NavLink>
        <div className="links">
        <NavLink to="/" style={{ textDecoration: 'none' }}>
  <p style={{ color: '#F1DBAE'}}>Home</p>
</NavLink>
        <button className="btn">
    <span className="icon">
        <svg viewBox="0 0 175 80" width="40" height="40">
            <rect width="80" height="15" fill="#F1DBAE" rx="10"></rect>
            <rect y="30" width="80" height="15" fill="#F1DBAE" rx="10"></rect>
            <rect y="60" width="80" height="15" fill="#F1DBAE" rx="10"></rect>
        </svg>
    </span>
    <span className="text">MENU</span>
</button>
        </div>
      </div>
    );
  }
  
  export default Navbar;