
import { Link } from "react-router-dom";

import React, { useEffect, useState } from "react";
const Header=()=>{
const [isvisible,Setisvisible]=useState()

useEffect(()=>{
    
 navigator.onLine?Setisvisible(true):Setisvisible(false)

},[])

return(
    <div className="header">
   <Link to="./"> <h1>  movie search App  </h1></Link>
    {isvisible ?<p>🟢online</p>:<p> ⭕ofline</p>}
    </div>
)
}
export default Header