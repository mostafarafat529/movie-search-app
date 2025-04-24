import React, { useEffect, useState } from 'react';
import { Col, Row, Card, Button } from 'react-bootstrap'; 
import { useNavigate } from 'react-router-dom';

const FavoriteFilm = () => {
    const [favorite, setFavorite] = useState([]); 
    const navigate =useNavigate("")

    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem("favorites")) || []; 
        setFavorite(stored); // تحديث الحالة
    }, []); 
    
    const removeFilmFromFav = (id) => {
        const handlefilms = favorite.filter((item) => item.imdbID !== id); 
        setFavorite(handlefilms);  
        localStorage.setItem("favorites", JSON.stringify(handlefilms));
    }
    
    console.log("favorite : =>  " ,favorite.Title)
return (
<div style={{ backgroundColor: "#000", minHeight: "100vh", color: "#fff" }}>
<h1 style={{ fontSize: "2.5rem", fontWeight: "bold", color: "#f39c12" }}>
Your Favorite Movies </h1>
<Button variant="primary" onClick={() => navigate('/')}
style={{ marginTop: "20px", color:"#fff",fontSize: "1.2rem" }}
>Go to Home Page</Button>
<Row>
    {favorite.length>0 ? (
        favorite.map((fav) => (
            <Col md={4} lg={3} sm={6} key={fav.imdbID}> 
    <Card className="main_card mb-4" style={{
        width: '18rem', padding: "20px 0", minHeight: "700px", backgroundColor: "#273746", color: "#fff", margin: "30px 0"
    }}>
<Card.Img
  variant="top"
  src={fav.Poster}
  alt={fav.Title}
/>

        <Card.Body style={{
            display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center"
        }}>
            <Card.Title>{fav.Title} ({fav.Year})</Card.Title>
            <Card.Text>Type: {fav.Type}</Card.Text>
            <Card.Text>IMDb ID: {fav.imdbID}</Card.Text>
            <Button variant="danger" onClick={()=>removeFilmFromFav(fav.imdbID)}>Remove from Favorites</Button>
        </Card.Body>
    </Card>
</Col>
))
) : (
    <h1>No favorite movies yet!</h1>
)}
</Row>
</div>
);
}

export default FavoriteFilm;
