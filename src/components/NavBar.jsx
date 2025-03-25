import '../Styling/NavBar.css';
import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <div className="NavBar">
            <NavLink className="nav-link" to="/">Home</NavLink>
            <NavLink className="nav-link" to="/skills">Skills</NavLink>
            <NavLink className="nav-link" to="/experience">Experience</NavLink>
        </div>
    );
}

export default NavBar;