//STEP 1: import these elements from react-router-dom
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Outlet,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home"
import Page1 from "./pages/Page1"
import Page2 from "./pages/Page2"

function App() {
  const router = createBrowserRouter( //STEP 2: create a variable named router and pass createBrowserRouter()
    createRoutesFromElements( //STEP 3: Pass createRoutesFromElements()
      <Route path="/" element={<Root />}> {/*//STEP 4: Add a <Route> tag as parent tag and pass path --> / and element <Root /> to it */}

      {/*STEP 6: define your actual routes*/}
        <Route index element={<Home />} /> {/*STEP 6.1: home page or initial URL -> pass index instead of path, add the element prop as usual*/}
        <Route path="/page1" element={<Page1 />} /> {/*STEP 6.2: for the other pages add the path and element props, as usual*/}
        <Route path="/page2" element={<Page2 />} />
      </Route>
    )
  );

  return (
    <div className="App ">
      <RouterProvider router={router}/> {/* STEP 7: Add a <RouterProvider> tag and pass the router as prop, to the App component's JSX */}

    </div>
  );
}
export default App;

const Root = () => { //STEP 5 create the Root component
  return (
    <> {/* STEP 5.1: Add a fragment as parent tag*/}
      <div> {/* STEP 5.2: in a div pass to it the components of the navbar (or the navbar component) */}
        <Navbar />
      </div>
      <div> {/* STEP 5.3:  add anoter div and pass the <Outlet /> component from react-router-dom*/}
        <Outlet />
      </div>
    </>
  );
};
