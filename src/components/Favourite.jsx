import React from 'react'
import { Navbar } from './Navbar'

export const Favourite = () => {
    return (
        <>
         <Navbar/>
        <div className="container-fluid nav_bg mt-5">
           
            <div className="row">
                <div className="col-11 mx-auto">
                   
                    <h2 className="text-center">Your Favourite Artists</h2>
                    <hr />
                </div>
            </div>
        </div>
        </>
    )
}
