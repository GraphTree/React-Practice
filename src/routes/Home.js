import { json } from "d3";
import {useState, useEffect} from "react"
import {Link, Outlet} from "react-router-dom"
import Movie from "../components/Movie"
import Navigation from "../components/Navigation"
import Loading from "../components/Loading"

function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovie] = useState([]);
    const maxPage = 2;



    useEffect(()=>{
        getMovieData();
    },[])    

    const numberGenerator =(maxNumber) =>{
        const numberArray =[];
        for (let index = 1; index <= maxNumber; index++) {
            numberArray.push(index)            
        }
        return numberArray
    }

    const getMovieData = async(maxPage, movieDataSetFunction) => {

        const numberArray = numberGenerator(20);
        const responseArray = await Promise.all(numberArray.map(page => fetch(`https://yts.mx/api/v2/list_movies.json?page=${page}`)));
        const responses = await Promise.all(responseArray.map(response => response.json()));        
        const resonseData =  responses.map(response => response.data.movies);        
        const movie =  resonseData.flat();
        const uniqueMovie =  movie.filter((each, index, self) =>
                            index === self.findIndex((t) => (t.id === each.id))
      )
        setMovie(uniqueMovie);
        setLoading(false)
        
    };



    return(
    <div>  
        {loading === true ? <Loading/> : null}
        <h2>Your Movie Home!</h2>
        
        <Navigation />
            <div style={{
                display:"grid",
                gridTemplateColumns: "repeat(2, 1fr)"
                }}>
            {
            movies.map((movie) => <Movie 
                                        key={movie.id}
                                        id={movie.id}
                                        title={movie.title}
                                        imgUrl={movie.medium_cover_image}
                                        genres={movie.genres}
                                        summary={movie.summary}
                                        />)
                                        }
            </div>
        <Outlet/>
    </div>)    
}

export default Home