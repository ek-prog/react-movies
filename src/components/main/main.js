import React, {useState, useEffect} from "react";
import Movies from "../movie-list";
import SearchPanel from "../Search-panel";
import Preloader from "../preloader";

const API_KEY = process.env.REACT_APP_API_KEY;


const Main = () =>{
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);



   const searchMovies = (str, type = 'all') =>{
       setLoading(true);
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${type !== 'all' ? `&type=${type}` : '' }`)
            .then(res => res.json())
            .then(result => {
                setMovies(result.Search);
                setLoading(false);
                },
            )
            .catch((err) => {
                console.error(err);
                setLoading(false);
            });
    }


    useEffect(()=> {
            fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
                .then(res => res.json())
                .then(result => {
                        setMovies(result.Search);
                        setLoading(false);
                    },
                )
                .catch((err) => {
                    console.error(err);
                    setLoading(false);
                });
        }
        ,[])
        return(
            <main className='container content'>
                <SearchPanel searchMovies={searchMovies} />
                {loading ?(<Preloader /> ): (<Movies movies={movies} />)}
            </main>
        );
};

export default Main;