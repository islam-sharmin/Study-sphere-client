import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home";
import Assignments from "../pages/Assignments";
import CreateAssignment from "../pages/CreateAssignment";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";
import PrivateRoutes from "./PrivateRoutes";
import Details from "../pages/Details";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/assignments',
                element: <Assignments></Assignments>
            },
            {
                path: '/createAssignment',
                element: <PrivateRoutes><CreateAssignment></CreateAssignment></PrivateRoutes>
            },
            {
                path: '/details/:id',
                element: <PrivateRoutes><Details></Details></PrivateRoutes>,
                loader: ({params}) => fetch(`http://localhost:5000/assignments/${params.id}`)
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/login',
                element: <Login></Login>
            }
        ]
      },
])

export default router;