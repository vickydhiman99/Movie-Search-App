

import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import MovieCard from "./MovieCard"

const Body = () => {

    const [search, setsearch] = useState("Avengers")
    const [Data, SetData] = useState([])
    const[page, setpage] = useState(parseInt(1))
    console.log(page)
    
   

    const APIKEY = "ba7a19ab"
    useEffect(() => { fetchdata()},[page])

    const fetchdata = () => {


            fetch(`https://www.omdbapi.com/?apikey=${APIKEY}&s=${search}&page=${page}`)
                .then(res => res.json())
                .then(data => {
                    if (data.Response == "False") {
                        throw new Error(" sorry😔, try to be more specific with movie name");
                    }

                    SetData(data)
                    
                   
                })

                .catch(err => alert(err.message));



           
            }
       
        console.log(Data, search)
 
        return (
            <div className="body">
                <div className="searchbar">
                    
                    <input type="text" placeholder="search movie" name="search" className="search" onChange={(e) => setsearch(e.target.value)} value={search} />
                    <input type="button" value="search" className="search" onClick={(e) => {
                        e.preventDefault()
                        fetchdata()
                    }} />
                </div>
                <div className="moviecollection">
                    {

                        Data.length === 0 ? <h1>enter movie name</h1> : Data.Search.map((item) => <Link to={/movie/ + item.imdbID} key={item.imdbID}> <MovieCard data={item} /></Link>)

                    }
                </div>
                {
                Data.length === 0 ? null : <div className="pagenavigate" >
                    <button className="search" onClick={
                        () => {
                            setpage(()=>page-parseInt(1))
                        }
                    }  >prev</button>
                    <p>{page}</p>
                    <button className="search" onClick={
                        () => {
                            setpage(()=>page+parseInt(1))
                        }
                    }  >next</button>
                </div>


                }
            </div>
        )
    }
export default Body