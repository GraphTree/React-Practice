import {useState, useEffect} from "react"
import {Link, Outlet} from "react-router-dom"

function Movie() {
    const moveData = async() => {
        const response = await fetch("https://yts.mx/api/v2/list_movies.json?");
        const jsonData = await response.json()
        console.log(jsonData.data)

    };

    useEffect(()=>{
        moveData()
    },[])

    return(
    <div>  

    </div>)    
}

export default Movie