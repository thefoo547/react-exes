import React from 'react'
import { Link } from 'react-router-dom'

const Header = ()=>{
    return(
        <header className="col-12">
           <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to={'/'}>Administración de empleados</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link to={'/'} className="nav-link">Ver Empleados</Link>
                    </li>
                </ul>
                <Link to={'/nuevo'} className="btn btn-outline-success"><i className="fa fa-plus" /> Agregar empleado</Link>
            </div>
        </nav>
         
        </header>
    )
}

export default Header;