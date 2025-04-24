import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import "../App.css"
import "./MovieCard.css"
import { useNavigate} from 'react-router-dom';



const MovieCard = ({ movie }) => {
    const navigate = useNavigate("") ;
const [isfavorite , setisfavorite] = useState(false) ;

useEffect(() => {
  const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
  const exists = storedFavorites.some(fav => fav.imdbID === movie.imdbID);
  setisfavorite(exists);
}, [movie]);

// ✅ Add or Remove movie from favorites
const toggleFavorite = () => {
  let storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
  const exists = storedFavorites.some(fav => fav.imdbID === movie.imdbID);
  if (exists) {
    // Remove movie from favorites
    storedFavorites = storedFavorites.filter(fav => fav.imdbID !== movie.imdbID);
    setisfavorite(false);
  } else {
    // Add movie to favorites
    storedFavorites =[...storedFavorites , movie]
    setisfavorite(true);
  }
  localStorage.setItem('favorites', JSON.stringify(storedFavorites));
};


return (
  <>

<Card className="main_card mb-4">
  <Card.Img variant="top" src={movie.Poster} alt={movie.Title} />
  <Card.Body className="card_body">
    <Card.Title>{movie.Title} ({movie.Year})</Card.Title>
    <Card.Text>Type: {movie.Type}</Card.Text>
    <Card.Text>IMDb ID: {movie.imdbID}</Card.Text>
    <div className='btns'>
      <Button variant="outline-danger" className="view_details_btn" onClick={() => navigate(`/details/${movie.imdbID}`)}>
        view movie details
      </Button>
      <button onClick={toggleFavorite} className={`fav rounded px-3 py-1 text-white ${isfavorite ? 'bg-success' : 'bg-danger'}`}>
        {isfavorite ? '💚 Added' : '❤️ Add'}
      </button>
    </div>
  </Card.Body>
</Card>

              </>
);
};

export default MovieCard;
