import React from 'react'
import avatar from '../../images/tiger.jpg'

export const ArtistProfileCard = () => {
    return (
        <div className='container-fluid'>
            <h1 className="fw-bold navbar-brand text-center mt-2 fs-2">Faningo</h1>
            <hr />

            <div class="card mx-auto" style={{ width: "22rem" }}>
                <img src={avatar} class="img avatar" alt="profilepic" />
                <div class="card-body">
                    <h5 class="card-title">Tiger Sharoff</h5>
                    <p class="card-text">Tigersharrof@gmail.com</p>
                </div>
                <ul class="list-group list-group-flush">
                    <label htmlFor="fee"></label>
                    <li class="list-group-item"><i class="fa fa-money" aria-hidden="true"></i> 1.5 Lacs</li>
                    <li class="list-group-item"><i class="fa fa-suitcase" aria-hidden="true"> Bollywood</i></li>
                    <li class="list-group-item"><i class="fa fa-file-movie-o" aria-hidden="true"> Soty-2, Heropanti</i></li>
                    <li class="list-group-item"><i class="fa fa-buysellads" aria-hidden="true"> Available</i> </li>


                </ul>
                <div class="card-body">
                    <button type="button" class="btn btn-success">Edit</button>
                    <button type="button" class="btn btn-danger ms-3">Delete</button>
                </div>
            </div>


        </div>
    )
}
