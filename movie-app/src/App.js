import React, {Component} from 'react';
import axios from 'axios';

import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min'
import './css/bootstrap-grid.min.css'
import './main.scss'

class App extends Component{
  state = {
    movie:{},
    isFetching: false
  }


  handleSubmit = async evt =>{
    evt.preventDefault();

    this.setState({isFetching: true})

    const title = evt.target[0].value;
    const url_api = "http://www.omdbapi.com/?i=tt3896198&apikey=98562907";
    const res= await axios.get(url_api, {params: {t: title}});

    this.setState(
      {
        movie: (await res).data,
        isFetching: false
      }
    )

  }
  render() {
    const {movie} = this.state;
    return(
        <div>

          <form onSubmit={this.handleSubmit}>
            <div className="row justify-content-center">
                <div className="col-md-6 col-12">
                    <div className="input-field inline">
                        <label htmlFor="film-name">Película</label>
                        <input type="text" className="validate" name="" id="film-name"/>
                        <span className="helper-text" data-error="wrong" data-success="right"></span>

                    </div>

                    <button type="submit" className="btn waves-effect waves-light" style={{marginLeft: "1em"}}> <i className="material-icons search">search</i> Buscar</button>
                </div>
            </div>
          </form>
          {this.state.isFetching && (
            <h4>Cargando...</h4>
          )}
          {movie.Title && !this.state.isFetching && (
            <div className="row justify-content-center">
              <div className="col-md-6 col-12">
                <div className="card">
                  <div className="card-image">
                    <img src={movie.Poster} alt="poster"/>
                    <span className="card-title">{movie.Title}</span>
                  </div>
                  <div className="card-content">
                    <p>{movie.Plot}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
    )
  }
}

export default App;
