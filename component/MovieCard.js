
import React from "react"

const MovieCard=({data})=>{
    console.log(data.Type+ " of movie cad")
    const {Title,Poster,
    Type,
    Year,
}=data
   
return (
    <div className="MovieCard">
 
           <img src={Poster} alt="img" srcSet="" /> 
           <div className="details">
           <h2>{Title}</h2>
           <h3>type:-{Type}</h3>
           <h3>year:-{Year}</h3>
           
           </div>

    </div>
)
}

export default MovieCard