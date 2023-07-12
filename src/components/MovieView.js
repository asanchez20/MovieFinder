import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import Hero from "./Hero"

function MovieView(){

    const { id } = useParams()
    const [movieDetails, setMovieDetails] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=ca9a4388fcf97b9eaa761c36a6bfe8ae&language=en-US`)
        .then(resp => resp.json())
        .then(data => {
                setMovieDetails(data)
                setIsLoading(false)
        })
    }, [id])

    function renderMovieDetails() {
        if(isLoading){
           return <Hero text={"Loading..."} />
        } if(movieDetails){
            const posterUrl = `https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`
            const backdropUrl = `https://image.tmdb.org/t/p/original/${movieDetails.backdrop_path}`
            return (
            <>
            <Hero text={movieDetails.original_title} backdrop={backdropUrl}/>
            <div className="container">
                <div className="row">
                    <div className="col-md-3 py-5">
                        <img src={posterUrl} alt="..." className="img-fluid shadow rounded"/>
                    </div> 
                    <div className="col-md-9 py-5">
                        <h1>{movieDetails.original_title}</h1>
                        <p className="lead">{movieDetails.overview}</p>
                    </div>   
                </div>
            </div>
            </>
            )
        }
    }
    return renderMovieDetails();
}

export default MovieView