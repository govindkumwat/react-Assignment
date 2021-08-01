import React,{useRef} from 'react'

export const Searchbar = (props) => {
    const inputEl = useRef("");
    console.log(props)

    const getSearchTerm = () => {
        props.searchKeyword(inputEl.current.value);
    };
    return (
        <div>
            <div className=" col-8  mx-auto">
                <input class="form-control me-2 navfont" type="search" placeholder="Search Artists" aria-label="Search" value={props.term} onChange={getSearchTerm} ref={inputEl} />
                
            </div>
        </div>
    )
}
