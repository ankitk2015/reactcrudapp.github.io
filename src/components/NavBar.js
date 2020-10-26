import React from 'react';
import {Link,NavLink} from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-info">
            <div className="container">
            <NavLink className="navbar-brand" exact to="/"><i className="fab fa-adn fa-lg"> Crud App</i></NavLink>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <NavLink className="nav-link" exact to="/">Home</NavLink>
                    </li>
                    
                </ul>
            </div>

            <NavLink className="btn btn-outline-light" to="/users/add">Add User</NavLink>
        </div>
            
        </nav>
    )
}

export default NavBar;