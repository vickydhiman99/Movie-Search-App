import React, { Children } from "react"
import Header from "./component/Header"
import Footer from "./component/Footer";
import Body from "./component/Body"
import "./style.css";
import { createBrowserRouter,Outlet} from "react-router-dom";
import Moviedetails from "./component/MovieDeatils";
import Error from "./component/Error";


const App=()=>{
    return(
   <>
   <Header/>
   <Outlet/>
  <Footer/> 
   </>
    )

}
export const AppRouter=createBrowserRouter([
     {
         path:"/",
         element:<App/>,
         errorElement:<Error/>,
         children:[
            {
                path:"/",
                element:<Body/>,
                
            },
            {
                path:"/movie/:id",
                element:<Moviedetails/>
            }

         ]
    

     },
 

    //  {
    //     path:"/",
    //     element:<Body/>,
        

    // }
    //  {
    //      path:"/",
    //      element:<body/>,
    //      children:[
           
    //      ]


    //  },
    
 ])
export  default  App
