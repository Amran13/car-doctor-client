import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import About from "../pages/About/About/About";
import Services from "../pages/Services/Services/Services";
import Contact from "../pages/Contact/Contact/Contact";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

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
            element : <About></About>
        },
        {
            path : '/services',
            element : <Services />
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