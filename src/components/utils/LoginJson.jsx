import React from 'react'
import {NavLink} from 'react-router-dom'
import { Login } from '../login/Login'
import  web  from '../../images/robo.svg'
import {ArtistLogin} from '../login/ArtistLogin'

export const LoginJson = (props) => {
    return (
        <>
        <h1 className="fw-bold navbar-brand text-center mt-2 fs-2">Faningo</h1>
        <hr />

                <h2 className='text-center navfont'>{props.heading}</h2>
            <section id='header' className='d-flex align-items-center justify-content-center header ' >
                <div className='container-fluid nav_bg'>
                    <div className='row' >
                        <div className='col-10 mx-auto'>
                            <div className='row'>
                                <div className=" center col-md-6 pt-5  pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column " >
                                    <h3 className='navfont'>Welcome to <strong>{props.brand}</strong></h3>
                                    
                                    <div className='mt-3'>
                                        <NavLink to={props.link} className=" navfont btn btn-primary ">Login as {props.loginAs}</NavLink>
                                        <br /><br />
                                        <p  className="btn-get-started navfont">Customer Support: Support@faningo.com</p>
                                        <p to="/" className="btn-get-started navfont">We would love your feedback</p>
                                        
                                    </div>
                                </div>

                                <div className='  col-lg-6 order-1 order-lg-2 header-img mt-5 fw-bold'>
                                    <form>
                                        <div class="mb-3 navfont">
                                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                                            <input type="email" class="form-control navfont" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
                                            <div id="emailHelp" class ="form-text navfont">We'll never share your email with anyone else.</div>
                                        </div>
                                        <div class="mb-3">
                                            <label for="exampleInputPassword1 navfont" class="form-label">Password</label>
                                            <input type="password" class="form-control" id="exampleInputPassword1" required/>
                                        </div>
                                        <div class="mb-3 form-check">
                                            <input type="checkbox" class="form-check-input" id="exampleCheck1" required/>
                                            <label class ="form-check-label navfont" for="exampleCheck1">Check me out</label>
                                        </div>
                                        <NavLink to={props.redirect} class="btn btn-primary navfont">Login</NavLink>
                                    </form>
                                    <p className='mt-5 navfont'>Not A Member? <NavLink to="/">Sign up</NavLink></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </>
        
    )
}

