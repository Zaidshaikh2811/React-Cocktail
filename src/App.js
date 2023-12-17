import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
  BrowserRouter,
} from "react-router-dom";
// import pages
import Home from "./pages/Home";
import About from "./pages/About";
import SingleCocktail from "./pages/SingleCocktail";
import Error from "./pages/Error";
// import components
import Navbar from "./components/Navbar";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar></Navbar>}>
          <Route index path="/" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route
            path="/cocktail/:id"
            element={<SingleCocktail></SingleCocktail>}
          ></Route>
          <Route path="*" element={<Error></Error>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
