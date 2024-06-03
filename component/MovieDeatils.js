import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const Moviedetails=()=>{
let {id}=useParams();

console.log(id)
const[movieDetailsData,setmovieDetailsData]=useState([])
// const APIKEY="ba7a19ab"
useEffect(()=>{
    fetch(`https://www.omdbapi.com/?apikey=ba7a19ab&i=${id}`)
    .then(res => res.json())
    .then(data =>{
       console.log(data)
        
        if(data.Response == "False") {
            throw new Error(" sorry😔, try to be more specific with movie name");
        }
        
        setmovieDetailsData(data)
    } )

    .catch(err=>alert(err));

},[])
console.log(movieDetailsData)
const{Title,Plot,BoxOffice,Released, Poster,Actors,Director,Genre,Language,Runtime,Type,imdbRating}=movieDetailsData
return movieDetailsData.length===0? <h1>loading.....</h1>: (
<div className="Moviedetails">
<img src={Poster} alt="img" srcSet="" /> 
<div className="info"  >
    <h1>{Title}</h1>
    <h2>Cast:-{Actors}</h2>
    <h2>{BoxOffice}</h2>
    <h4>Director:-{Director}</h4>
    <h4>Descripton:-{Plot}</h4>
    <h4>Language:-{Language}</h4>
    <h5>{imdbRating}⭐</h5>

    <p>Duration:-{Runtime}</p>
    <p>Genre:-{Genre}</p>
    <p>Type:-{Type}</p>
    <p>Released:-{Released}</p>
    </div>

    
</div>
)    
}
export default Moviedetails