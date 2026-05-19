import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home";
import WatchList from "../pages/WatchList";
import About from "../pages/About";
import Search from "../pages/Search";
import MovieDetails from "../pages/MovieDetails";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movie/:id" element={<MovieDetails />} />
      <Route path="/search" element={<Search />} />
      <Route path="/watchlist" element={<WatchList />} />
      <Route path="/about" element={<About />} />
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  )
}

export default AppRoutes;