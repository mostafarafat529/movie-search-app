import React, { useEffect, useState } from 'react';
import MovieNavbar from './MovieNavbar';
import MovieCard from './MovieCard';
import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const KEY_API = "14688e24";
const BASE_URL = `https://www.omdbapi.com/?apikey=${KEY_API}`;

const MovieSearch = () => {
const [movies, setMovies] = useState([]);
const navigate = useNavigate("") ;

const searchMovie = async (title) => {
const response = await fetch(`${BASE_URL}&s=${title}`);
const data = await response.json();
if (data.Response === "True") {
    setMovies(data.Search);
    console.log(data)
    console.log(data.Search)
} else {
    setMovies([]);
}
};


useEffect(() => {
searchMovie("Batman");
}, []);

return (
<div className="movie-app">
    <MovieNavbar onSearch={searchMovie} />
    <div className='header' style={{display:"flex" , justifyContent:"space-between" ,alignItems:"center" ,
        color:"#fff" , padding:"1rem"
    }}>
    <h2>Movie</h2>
    <select id='all' style={{width:"160px",padding:"14px", height:"60px" , fontSize:"20px" ,textTransform:"capitalize" ,
        backgroundColor:"#273746" ,color:"#fff" ,borderRadius:"1.5rem" ,fontWeight:"bold"
    }}>
      <option onClick={()=>navigate("/")}  value={1}>all</option>
      <option onClick={()=>navigate("/favorite")} value={2}>favorite</option>
    </select>
  </div>
    <Container>
    <Row>
        {movies.length > 0 ? (
        movies.map((movie) => (
            <Col key={movie.imdbID} md={4} lg={3} sm={6}>
            <MovieCard movie={movie} />
            </Col>
        ))
        ) : (
        <p className='error' style={{height:"100vh" , color:"#fff" ,
            fontSize:"3rem" , margin:"2rem"}}>there is no movie with this name</p>
        )}
    </Row>
    </Container>
</div>
);
};

export default MovieSearch;
