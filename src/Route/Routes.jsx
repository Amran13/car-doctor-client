import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import About from "../pages/About/About/About";
import Services from "../pages/Services/Services/Services";
import Contact from "../pages/Contact/Contact/Contact";

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
        }
      ]
    },
  ]);


export default router