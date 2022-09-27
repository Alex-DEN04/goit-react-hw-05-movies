import { Routes, Route, Link } from "react-router-dom";
import {Home} from "pages/Home";
import {Movies} from "pages/Movies"
// import {NotFound} from "pages/NotFound";
import {MovieDetails} from "pages/Movies";

export const App = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/muvies">Movies</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/muvies" element={<Movies />} />
        <Route path="/muvies/:movieId" element={<MovieDetails />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </div>
  );
};