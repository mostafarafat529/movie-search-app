import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import "./DetailsFilm.css"
import { Button } from 'react-bootstrap';

// api ....
const KEY_API = "14688e24";
const BASE_URL = `https://www.omdbapi.com/?apikey=${KEY_API}`;
const DetailsFilm = () => {

  const { detailsID } = useParams();
  const navigate = useNavigate("")

  const [ShowMovie,setShowMovie] = useState({}) ;

  useEffect(()=>{
fetch(`${BASE_URL}&i=${detailsID}`)
.then((req)=>req.json()).then((data)=>setShowMovie(data)); ;
  },[detailsID])

  return (
    <div className='film' style={{ color: "#000" ,backgroundColor:"#fff" }}>
      <div className='image'>
      <img src={ShowMovie.Poster} alt={ShowMovie.Title}/>
      </div>
      <div className='info'>
      <h1>{ShowMovie.Title} ({ShowMovie.Year})</h1>
      <p>Type: {ShowMovie.Type}</p>
      <h2>IMDb ID: {ShowMovie.imdbID}</h2>
      <div className='btn'>
      <Button variant="info" style={{fontSize:"20px"}}>watch it </Button>
      <Button variant="danger" style={{fontSize:"20px" , margin:"0 20px"}} onClick={()=> navigate("/")}>back to movies</Button>
      </div>
      </div>
    </div>
  );
};

export default DetailsFilm;