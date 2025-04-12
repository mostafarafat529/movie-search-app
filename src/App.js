import React from "react";
import MovieSearch from "./components/MovieSearch"; 
import { Route ,Routes } from "react-router-dom";
import "./App.css"
import DetailsFilm from "./components/DetailsFilm";
import FavoriteFilm from "./components/FavoriteFilm";

function App() {
  return (
    <div className="App" style={{backgroundColor:"#000"}}>
      <Routes>
        <Route path="/" element={ <MovieSearch /> }/>
        <Route path="/details/:detailsID" element={ <DetailsFilm /> }/>
        <Route path="/favorite" element={ <FavoriteFilm /> }/>
      </Routes>
    </div>
  );
}

export default App;
