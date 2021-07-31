import { NavLink } from 'react-router-dom'
import AiOutlineHeart from '../icons/Cart'
import React, { useRef } from 'react'


export const Navbar = (props) => {
    
    return (
        <>
            <div className="container-fluid nav_bg">
                <div className="row">
                    <div className="col-sm-10 col-lg-12 mx-auto">
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <div className="container-fluid">
                                <NavLink className="navbar-brand fw-bold fs-3" to="/">Faningo</NavLink>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fs-5 navfont">
                                        <li className="nav-item navfont ">
                                            <NavLink className="nav-link active navfont" aria-current="page" to="/">Home</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link navfont" to="/about">About</NavLink>
                                        </li>

                                        

                                        <li className="nav-item ">
                                            <NavLink className="nav-link navfont " to="/favourite"><AiOutlineHeart /></NavLink>
                                        </li>

                                        
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}
