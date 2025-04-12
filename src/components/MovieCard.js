import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import "../App.css"
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

<Card className=" main_card mb-4" style={{ width: '18rem' ,padding:"20px 0" ,
minHeight:"700px" ,backgroundColor:"#273746 " ,color:"#fff", margin:"30px 0"  }}>
    <Card.Img variant="top" src={movie.Poster} alt={movie.Title} />
    <Card.Body style={{display:"flex" , flexDirection:"column" , justifyContent:"space-between" ,alignItems:"center"}}>
    <Card.Title>{movie.Title} ({movie.Year})</Card.Title>
    <Card.Text>Type: {movie.Type}</Card.Text>
    <Card.Text>IMDb ID: {movie.imdbID}</Card.Text>
    <div className='btns' style={{display:"flex" , justifyContent:"center" ,alignItems:"center" , gap:"10px"}}>
    <Button variant="outline-danger" style={{width:"80%" ,fontSize:"18px" 
    }}onClick={()=>navigate(`/details/${movie.imdbID}`)}>
        view movie details
        </Button>
        <button
            onClick={toggleFavorite}
            className={`rounded px-3 py-1 text-white ${isfavorite ? 'bg-success' : 'bg-danger'}`}>
            { isfavorite? '💚 Added' : '❤️ Add'}
          </button>
        </div>
    </Card.Body>
</Card>
              </>
);
};

export default MovieCard;
