import {Routes, Route, BrowserRouter, useLocation} from 'react-router-dom';
import './App.css'
import Home from "./pages/Home.jsx";
import Layout from "./pages/Layout.jsx";
import NotFound from "./pages/NotFound.jsx";
import Credits from "./pages/credits.jsx";
import Game from "./pages/Game.jsx";

let location;

export function IsHome() {
    location = useLocation();
    return (location.pathname === "/")
}

function App() {

  return (
      <>

          <BrowserRouter basename="/" future={{ v7_startTransition: true }}>
              <Routes>
                  <Route path="/" element={<Layout/>}>
                      <Route index element={<Home />} />
                      <Route path={"../credits"} element={<Credits />} />
                      <Route path={"../games"} element={<Game />} />
                      <Route path={"../*"} element={<NotFound />} />
                  </Route>
              </Routes>
          </BrowserRouter>

      </>
  )
}

export default App
