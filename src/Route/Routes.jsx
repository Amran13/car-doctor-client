import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import About from "../pages/About/About/About";
import Services from "../pages/Services/Services/Services";
import Contact from "../pages/Contact/Contact/Contact";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Protected from "../pages/Protected/Protected";
import CheckOut from "../pages/CheckOut/CheckOut";
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails/ServiceDetails";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children : [
        {
            path : '/',
            element : <Home></Home>
        },
        {
            path : '/about',
            element : <Protected> <About></About> </Protected>
        },
        {
            path : '/services',
            element : <Protected> <Services></Services> </Protected>
        },
        {
          path : '/services/:id',
          element : <ServiceDetails></ServiceDetails>,
          loader : ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
          path : '/checkout/:id',
          element : <CheckOut></CheckOut>,
          loader : ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
            path : '/contact',
            element : <Contact />
        },
        {
          path : '/login',
          element : <Login></Login>
        },
        {
          path : '/register',
          element : <Register></Register>
        }
      ]
    },
  ]);


export default router