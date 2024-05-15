import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home";
import Assignments from "../pages/Assignments";
import CreateAssignment from "../pages/CreateAssignment";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";
import PrivateRoutes from "./PrivateRoutes";
import Details from "../pages/Details";
import TakeAssignments from "../pages/TakeAssignments";
import PendingAssignment from "../pages/PendingAssignment";
import Update from "../pages/Update";
import AttemptAssignment from "../pages/AttemptAssignment";
import SubmittedAssignment from "../pages/SubmittedAssignment";
import ErrorPage from "../pages/ErrorPage";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
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
                loader: ({params}) => fetch(`https://study-sphere-server-nine.vercel.app/assignments/${params.id}`)
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/takeAssignment/:id',
                element: <PrivateRoutes><TakeAssignments></TakeAssignments></PrivateRoutes>,
                loader: ({params}) => fetch(`https://study-sphere-server-nine.vercel.app/assignments/${params.id}`)
            },
            {
                path: '/pending',
                element: <PrivateRoutes><PendingAssignment></PendingAssignment></PrivateRoutes>
            },
            {
                path: '/update/:id',
                element: <PrivateRoutes><Update></Update></PrivateRoutes>,
                loader: ({params}) => fetch(`https://study-sphere-server-nine.vercel.app/assignments/${params.id}`)
            },
            {
                path: '/attemptAssignment',
                element: <PrivateRoutes><AttemptAssignment></AttemptAssignment></PrivateRoutes>
            },
            {
                path: '/submittedAssignment/:id',
                element: <PrivateRoutes><SubmittedAssignment></SubmittedAssignment></PrivateRoutes>,
                loader: ({params}) => fetch(`https://study-sphere-server-nine.vercel.app/quiz/${params.id}`)
            }
        ]
      },
])

export default router;