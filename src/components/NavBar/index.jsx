
import React from 'react';
import { CartWidget } from './CartWidget.jsx';
import { Link } from 'react-router-dom';

export const NavBar = () => {
    
    return (
        <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand" >LARA STORE</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item"><a className="nav-link active" aria-current="page" href="/">Home</a></li>
                        <li className="nav-item dropdown"><a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Productos</a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link to="/category/divertido" className="dropdown-item">Camisetas Divertidas</Link></li>
                                <li><Link to="/category/plantbased" className="dropdown-item">Camisetas PlantBased</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item"><Link to="/cart"className="nav-link"> <CartWidget /></Link></li>
                        </ul>
                </div>
            </div>
        </nav>
    )
}
