import Fillup from "./components/Fillup";
import Navbar from "./components/Navbar";
import Blink from "./components/Blink";
import Signup from "./components/Signup";
import Form1 from "./components/Form1";
import Forgotpassword from "./components/Forgotpassword";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Blink/>
          <Fillup />
        </>
      ),
    },
    {
      path: "/Signup",
      element: (
        <>
          <Navbar />
          <Blink/>
          <Signup />
        </>
      ),
    },
    {
      path: "/resetpassword",
      element: (
        <>
          <Navbar />
          <Blink/>
          <Forgotpassword />
        </>
      ),
    },
    {
      path: "/Form1",
      element: (
        <>
          <Navbar />
          <Blink/>
          <Form1 />
        </>
      ),
    },
  ]);

  return(
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App;
