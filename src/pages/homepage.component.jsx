import React, {useEffect, useState} from "react";
import {SearchBox, handleChange} from "../components/searchBox/search.component";
import TileList from '../components/tile-list/tile-list.component'


const HomePage = () => {

    const [parkingLots, setParkingLots] = useState()
    const [search, setSearch] = useState()
    // const [filteredParkingsLot, setFilteredParkingsLot] = useState([])



    useEffect( ()=>{

        async function fetchData (){
            const response = await fetch('https://api.golemio.cz/v2/parkings/',{
                headers: {
                    'X-Access-Token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Impha3ViLnR1cm5lckBwb3N0LmN6IiwiaWQiOjc2NCwibmFtZSI6bnVsbCwic3VybmFtZSI6bnVsbCwiaWF0IjoxNjE4Njg5NzE5LCJleHAiOjExNjE4Njg5NzE5LCJpc3MiOiJnb2xlbWlvIiwianRpIjoiMmFiMTAwMjEtNzNiNC00Yzc0LTgwOGQtNjA0Y2Q4ZWI2NjY0In0.RS4J3wUs08aiyhauWqphXgWnStSs4t4rfE0-B4j7ehs'
                }
            } )
            const responseBody = await response.json()
            setParkingLots(responseBody.features)
        }
        fetchData()
    }, [])

  // const filteredParkings = parkingLots.filter(parkinglot =>{
  //    return  parkinglot.properties.name.toLoweCase().includes(search.toLowerCase())
  // })

  if (!parkingLots) return null
    return ( <>
        <SearchBox
            placeholder='Hledej parkoviste'
            onChange={e => setSearch(e.target.value)}

        />
    <TileList parkingLots={parkingLots}/>
        </>
)}

export default HomePage