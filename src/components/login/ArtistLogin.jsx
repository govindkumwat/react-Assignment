import React from 'react'
import {NavLink} from 'react-router-dom'
import { Login } from './Login'
import { LoginJson } from '../utils/LoginJson'

export const ArtistLogin = (props) => {
    return (
        <>
       <LoginJson
           link='/login'
           brand = "Faningo"
           loginAs = "Bussiness"
           heading = "Artist Login"
           redirect = "/addartistdetails"
           
           />
        </>
    )
}
