import React from 'react'

export const Category = ({ filterItem, catItems }) => {
    return (
        <>

            <div className="container ">
              
                    <div className="col-md-8 col-lg-10 col-sm-8 mx-auto">
                        <div class="btn-toolbar ">

                            {
                                catItems.map((curClem, index) => {
                                    return (
                                        <button type="button" class="btn btn-warning  me-3 md-5 m-3 navfont" key={index} onClick={() => filterItem(curClem)}>{curClem}</button>
                                    )
                                })
                            }
                            {/* <button type="button" class="btn btn-warning  me-3 md-5 m-3" onClick={() => filterItem('Bollywood')}>Bollywood</button>
                <button type="button" class="btn btn-warning me-3 m-3" onClick={() => filterItem('Tollywood')}>Tollywood</button>
                <button type="button" class="btn btn-warning me-3 m-3" onClick={() => filterItem('Hindi Tv Serials')}>TV Serial Artist</button>
                <button type="button" class="btn btn-warning me-3 m-3" onClick={() => filterItem('Others')}>Others</button> */}



                        </div>
                    </div>
                </div>
          
        </>


    )
}
