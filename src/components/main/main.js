import React,{Component} from "react";
import Movies from "../movie-list";
import SearchPanel from "../Search-panel";
import Preloader from "../preloader";

const API_KEY = process.env.REACT_APP_API_KEY;

export default class Main extends Component{
    state = {
        movies: [],
        loading: true
    }
    componentDidMount() {
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
            .then(res => res.json())
            .then(result => {this.setState({movies: result.Search, loading: false});
                },
            )
    }

    searchMovies = (str, type = 'all') =>{
        this.setState({loading:true})
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${type !== 'all' ? `&type=${type}` : '' }`)
            .then(res => res.json())
            .then(result => {this.setState({movies: result.Search, loading: false});
                },
            )
    }

    render() {
        const {movies, loading} = this.state;
        return(
            <main className='container content'>
                <SearchPanel searchMovies={this.searchMovies} />
                {
                    loading ?(
                            <Preloader /> ):
                    (<Movies movies={movies} />)
                }
            </main>
        );
    };
};
