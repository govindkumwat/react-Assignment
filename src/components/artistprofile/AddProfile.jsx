import React from 'react'
import { NavLink } from 'react-router-dom'
export const AddProfile = () => {
    return (
        <div>
            <h1 className="fw-bold navbar-brand text-center mt-2 fs-2">Faningo</h1>
            <hr />
            <div className="col-10 col-lg-6 col-md-6 mx-auto">
                <form>

                    <div>
                        <label htmlFor="profilepic" className="form-label">Uplaod Profile Picture</label>
                        <input type="file" className="form-control" name="file" id="profilepic" />
                    </div>

                    <div className='mb-3'>
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" id="name" />

                    </div>

                    <div className='mb-3'>
                        <label htmlFor="Fee" className="form-label">Fee</label>
                        <input type="number" className="form-control" id="Fee" />

                    </div>


                    <div className='mb-3'>
                        <label htmlFor="Category" className="form-label">Category</label>
                        <input type="text" className="form-control" id="category" />

                    </div>

                    <div className='mb-3'>
                        <label htmlFor="tvshows" className="form-label">TV Shows :if any</label>
                        <input type="text" className="form-control" id="tvshows" />

                    </div>

                    <div className='mb-3'>
                        <label htmlFor="movies" className="form-label">Movies :if any</label>
                        <input type="text" className="form-control" id="movies" />

                    </div>

                    <div className='mb-3'>
                        <label htmlFor="Other" className="form-label">Other (Drama, Youtube etc)</label>
                        <input type="text" className="form-control" id="name" />

                    </div>


                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" />
                        <label class ="form-check-label" for="flexSwitchCheckChecked">Availabe for Hire</label>
                    </div>

                    <div className='mb-3 mt-3'>
                        <label htmlFor="Images" className="form-label">Upload Your & Videos for Portfolio</label>
                        <input type="file" className="form-control" name="file" id="profilepic" />
                    </div>

                    <NavLink to="/artistprofilecard" class="btn btn-primary mb-5">Submit</NavLink>
                </form>
            </div>
        </div>
    )
}
