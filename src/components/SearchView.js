import Hero from "./Hero"
import { Link } from "react-router-dom";
 //API KEY=ca9a4388fcf97b9eaa761c36a6bfe8ae

 //API MOVIE URL = https://api.themoviedb.org/3/search/movie?api_key=ca9a4388fcf97b9eaa761c36a6bfe8ae&language=en-US&query=&page=1&include_adult=false

function SearchView({keyWord, searchResults}){
    const title = `You are searching for ${keyWord}`

    
    
    const Movie = ({movie}) => {
        const detailedUrl = `/movies/${movie.id}`
        const posterUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
        const imageNotLoaded = `https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png`
        return(
        <div className="col-lg-3 col-md-3 col-2 my-5">
        <div className="card">
            {movie.poster_path ? (
                <img src={posterUrl} 
                className="card-img-top" 
                alt={movie.original_title} 
                ></img>
            ) : (
                <img src={imageNotLoaded}
                className="card-img-top"
                alt={movie.original_title}
                ></img>
            )
        
        }
        <div className="card-body">
            <h5 className="card-title">{movie.original_title}</h5>
            <Link to={detailedUrl} className="btn btn-primary">Show details</Link>
        </div>
        </div>
        </div>
        ) 
    } 
    const resultsHtml = searchResults.map((obj, i) => {
        return <Movie movie={obj} key={i} image={obj.poster_path}/>
    })


    return(
    <>
        <Hero text={title} />
        {keyWord.length > 0 ? (
            resultsHtml.length > 0 ? (
            <div className="container">
                <div className="row">{resultsHtml}</div>
            </div>
        ) : (
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2 my-5">
                    <h2>Movie not found</h2>
                </div>
            </div>
        </div>
        )
        ) : (
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2 my-5">
                        <h2>Please Enter a movie in the search Parameter</h2>
                    </div>
                </div>
            </div>
        )}
    </>
    )
}

export default SearchView