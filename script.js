import React from "react";
import {createRoot} from "react-dom/client";
import {AppRouter} from "./App";
import { RouterProvider } from "react-router";


const root=createRoot(document.getElementById("root"))
root.render(<RouterProvider router={AppRouter}/>)
