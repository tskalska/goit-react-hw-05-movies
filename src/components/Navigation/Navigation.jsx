import  { NavLink } from 'react-router-dom';
import'./navigation.css';

const Navigation = () => (
  <div>
      <NavLink to="/" className="link"> Home </NavLink>
      <NavLink to="/movies" className= "link"> Movies </NavLink>
      <NavLink to="/about" className = "link"> About </NavLink>
  </div>
) 

export default Navigation;