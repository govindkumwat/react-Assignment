import React from 'react'
import { Navbar } from './Navbar'
export const About = () => {
    return (
        <div>
            <Navbar />

            <div className="container-fluid">
                <div className="col-10 mx-auto text-center mt-5 ">
                    
                        <h2 className='navfont '>Who We Are</h2>
                        <h6 className='navfont '>Based in India with clients & team members all over the globe</h6>
                       <div>
                           <hr />
                            <h5 className='navfont'>Faningo is a celebrity engagement platform that aims to offer collaboration with
personalities in multiple fields like TV shows, movies, sports, authors, and many more. Any celebrity
can be selected for events such as cultural, entertainment, motivational and other miscellaneous
activities.</h5>
                       </div>

                       <hr />
                       <div>
                            <h2 className='navfont'>Contact Us</h2>
                            <span className='navfont'>support@example.com</span>
                       </div>
                       <hr />

                       <div>
                           <h2>Social Links</h2>
                           <div className='row'>
                           <div className='fs-2 mt-2 col-12'>
                               <i class="fa fa-facebook-square " aria-hidden="true"></i>
                               <i class="fa fa-instagram ms-4" aria-hidden="true"></i>
                               <i class="fa fa-linkedin-square ms-4" aria-hidden="true"></i>
                               <i class="fa fa-dribbble ms-4" aria-hidden="true"></i>
                               <i class="fa fa-twitter-square ms-4" aria-hidden="true"></i>
                           </div>
                       </div>
                       </div>
                        
                </div>

            </div>
        </div>
    )
}
