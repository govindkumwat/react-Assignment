import React from 'react'
import {Signupjson} from '../utils/Signupjson'
export const ArtistSignup = () => {
    return (
        <div>
            <Signupjson
            link='/bussinesssignup'
           brand = "Faningo"
           signupas = "Bussiness"
           heading = "Artist Login"
           redirect = "/loginartist"
           login = "/loginartist"
            />       
             </div>
    )
}
