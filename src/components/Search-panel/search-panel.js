import React from "react";

export default class SearchPanel extends React.Component {
    state = {
        search: '',
        type: 'all'
    };

    handleKey = (event) =>{
        if(event.key === 'Enter'){
            this.props.searchMovies(this.state.search, this.state.type);
        }
    };
    handleFilter = (event) =>{
        this.setState(() =>( {type: event.target.dataset.type}), ()=>{
            this.props.searchMovies(this.state.search, this.state.type);
        });
    }

    render() {
        return (
            <div className="row">
                    <div className="input-field inline">
                        <input
                            placeholder="type to search"
                            type="search"
                            className="validate"
                            value={this.state.search}
                            onChange={(e) => this.setState({search: e.target.value})}
                            onKeyDown={this.handleKey}
                        />
                        <button className="cyan lighten-2 btn search-btn" onClick={()=>this.props.searchMovies(this.state.search, this.state.type)}>Search</button>
                    </div>
                <div>
                    <label>
                        <input
                            className="with-gap"
                            name="group3"
                            type="radio"
                            data-type="all"
                            onChange={this.handleFilter}
                            checked={this.state.type === 'all'}
                        />
                        <span>All</span>
                    </label>

                    <label>
                        <input
                            className="with-gap"
                            name="group3"
                            type="radio"
                            data-type="movie"
                            onChange={this.handleFilter}
                            checked={this.state.type === 'movie'}
                        />
                        <span>Movies</span>
                    </label>

                    <label>
                        <input
                            className="with-gap"
                            name="group3"
                            type="radio"
                            data-type="series"
                            onChange={this.handleFilter}
                            checked={this.state.type === 'series'}
                        />
                        <span>Series</span>
                    </label>
                </div>
            </div>
        );
    }
};
