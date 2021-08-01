import React from 'react'
import { Navbar } from '../Navbar'
import { NavLink, Link } from 'react-router-dom'
import { LoginJson } from '../utils/LoginJson'




export const Login = () => {
    return (
        <>
           <LoginJson
           link='/loginartist'
           brand = "Faningo"
           loginAs = "Artist"
           heading = "Bussiness Login"
           redirect = "home"
           signup = "/artistsignup"
           
           />
        </>
    )
}
