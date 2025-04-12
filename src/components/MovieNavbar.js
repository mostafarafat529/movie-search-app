import React, { useState } from 'react'
import "./MovieNavbar.css"
import { FaSearch } from "react-icons/fa";
import { GiFilmProjector } from "react-icons/gi";
import { useNavigate } from 'react-router-dom';



const MovieNavbar = ({onSearch}) => {
const [InputSearch , setInputSearch] = useState("");
const navigate = useNavigate("");

  // when click on search if there ara text or not
  const handlesearch =()=>{
    if(!InputSearch.trim()){
      return
    }else{
      onSearch(InputSearch);
    }
  }

  const handlekeudown = (e)=>{
if(e.key === "Enter"){
  onSearch(InputSearch)
}
  }
  return (
    <div className='moviesearch'>
  <div className='nav'>
      <p className='fs-2 fw-bold'onClick={()=>navigate("/")} style={{cursor:"pointer" , userSelect:"none"}} >Movie App</p>
      <div className="inp">
      <span>
        <input type="text" placeholder="Search for movies" value={InputSearch} 
        onChange={(e)=>setInputSearch(e.target.value)} onKeyDown={handlekeudown}
        />
        <FaSearch className="search-icon" onClick={handlesearch} />
      </span>
    </div>
    <div className='icon'>
<GiFilmProjector className='film-icon'/>
    </div>
  </div>
    </div>
  )
}

export default MovieNavbar