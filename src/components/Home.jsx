import React, { useState } from 'react'
import './homecard.css'
import {Navbar} from './Navbar'
import { MenuItems } from './MenuItems/ArtistCards';
import { Category } from './MenuItems/Category';
import Sdata from './Sdata'
import {Searchbar} from './Searchbar'

const allCatValues = [...new Set(Sdata.map((curElem) =>curElem.ModelIndustry)), "All"]
console.log(allCatValues)

export const Home = () => {

    const [items, setItems] = useState(Sdata);
    const [catItems, setCatItem] = useState(allCatValues)
    const [searchTerm, setSearchTerm] = useState("")
    const [searchResults, setSearchResults] = useState([])

    const filterItem = (categItem) => {

        if (categItem === 'All'){
            setItems(Sdata)
            return;
        }
       
    
        const updatedItem = Sdata.filter((curElem) => {
            return curElem.ModelIndustry === categItem;

        });
        console.log(updatedItem);
        setItems(updatedItem)
    }

    const searchHandler =(searchTerm)=>{
        setSearchTerm(searchTerm);
        if(searchTerm !== ""){
            const newContactList = items.filter((data) =>{
            return   Object.values(data).join('').toLowerCase().includes(searchTerm.toLowerCase());
               
            })
            setSearchResults(newContactList);
        }else{
            setSearchResults(items)
        
        }
    }
    return (
        <>
                <Navbar />
                <Searchbar term = {searchTerm} searchKeyword ={searchHandler}/>
                <Category filterItem={filterItem} catItems ={catItems}  />
                
                <MenuItems items={searchTerm.length < 1 ? items : searchResults} />
            
        </>

    )
    }


   