import {createBrowserRouter} from "react-router-dom"
import Layout from "../Common/Layout"
import Home from "../Pages/Home"

export const MainRouter = createBrowserRouter ([
    {
        path:"/", 
        element:<Layout/>,
        children:([
            { 
                index:true, 
                element:<Home/>
            }
        ])
    },
   
    
])