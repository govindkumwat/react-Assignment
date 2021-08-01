import React from 'react'
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
           signup = "/bussinesssignup"
           
           />
        </>
    )
}
