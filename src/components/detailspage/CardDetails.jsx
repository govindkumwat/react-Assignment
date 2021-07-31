import { withRouter } from 'react-router-dom'
import {Navbar} from '../Navbar'
function CardDetails({items}) {
    
    return (
        <>
        <Navbar/>
      
            <div className="row">
                <div className="col-sm-10 col-md-10 col-lg-8 d-flex">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">{items.ModelName}</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </div>

            </>
        
        

    )
}

export default (CardDetails);