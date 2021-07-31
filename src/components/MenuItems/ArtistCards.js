import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import CardDetails from '../detailspage/CardDetails';
// import '../homecard.css'


export const MenuItems = ({ items }) => {
    return (
<div className='container-fluid mb-5'>
            <div className="row">
                <div className="col-8 mx-auto">
                    <div className="row gy-4">
                    {
                        items.map((elem) => {
                            const { id, ModelPhoto, ModelName, ModelIndustry, Instagram } = elem;
                            console.log(elem)
                            return (

                                <>
                                    <div className='imageheight col-lg-4 col-10 mx-auto'>
                                <div class="profile-card-2 "><img src={ModelPhoto} class=".img-fluid. max-width: 100%; cardimg" />
                                    <div class="profile-name">{ModelName}</div>
                                    <div class="profile-username">{ModelIndustry}</div>
                                    <div class="profile-icons"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a></div>
                                </div>
                                </div>

                                

                                </>

                            )
                        })
                    }
                    </div>

                </div>
            </div>
        </div>

    )
}












