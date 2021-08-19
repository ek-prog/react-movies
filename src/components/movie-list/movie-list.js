import React from "react";
import MovieListItem from "../movie-list-item";



function Movies (props){
    const{movies = [] } = props;
    return(
        <div className="movies">
            {movies.length ? movies.map( item => (
                <MovieListItem key={item.imdbID} {...item}/>
            )) : <h4>Nothing found</h4>
            }
        </div>
    )

}
export default Movies;
