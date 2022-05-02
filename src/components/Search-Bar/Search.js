import { useEffect, useState } from 'react'
import '../Search-Bar/Search.css'
import {  isMobile } from 'react-device-detect'
import SearchBar4Desktop from './SearchBarDesktop'
import SearchBar4Mobile from './SearchBarMobile'
import noResultsImg from '../../assets/images/TulumBeachHome.jpg'

function SearchBar({ places, setResults}) {

    const [ searchParams, setSearchParams ] = useState({})
    
    const noResults = [{
        "_id": "no_results",
        "name": "Sorry, we have no results",
        "location": searchParams.location,
        "address": "Somewhere",
        "rooms": null,
        "area": null,
        "price": null,
        "conditions": "null",
        "about": "null",
        "category": "null",
        "imgUrl": noResultsImg,
        "__v": null,
        "createdAt": "null",
        "updatedAt": "null"
    }]
    useEffect(()=>{

    },[searchParams])

    const handleSearch = (e) =>{
        console.log('hereHandle')
        setSearchParams({...searchParams,  [e.target.name]: e.target.value})
    }

    const renderSearchBar = () =>{
        return isMobile ? <SearchBar4Mobile handleSearch={handleSearch} searchResults={searchResults} /> : <SearchBar4Desktop handleSearch={handleSearch} searchResults={searchResults}/>
    }

    function searchResults(e){
        e.preventDefault()
        function filterData(){

            let locationResults = places.filter(place=>{
                return place.location.includes(searchParams.location)
             })

             let servicesResults = locationResults.filter(place=>{
                 return place.conditions.includes(searchParams.services)
             })

            if(searchParams.rooms ==='true'){
                let roomsOver = servicesResults.filter(place=>{
                    return (place.rooms >= 4)
                })
                return roomsOver
            }else{
                let roomsUnder = servicesResults.filter(place=>{
                    return (place.rooms < 4)
                })
                return roomsUnder
            }
        }
        let results = filterData()
    
        if(results.length === 0){
            setResults(noResults)
        }else{
            setResults(results)
        }
        

    }

    

    return <div className='house_search'>
                <h4>Find the place you are looking for</h4>
                {renderSearchBar()}

        </div>
}

export default SearchBar;