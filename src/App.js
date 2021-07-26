// import { render } from "react-dom";
import "./styles.css";
import Movie from "./components/Movie";
import { useEffect, useState } from "react";

export default function App() {
  const [movieTitle, setMovieTitle] = useState("");
  const [movieYear, setMovieYear] = useState("");
  const [movies, setMovies] = useState([
    { title: "hello world1", year: 2001 },
    { title: "hello world2", year: 2002 },
    { title: "hello world3", year: 2003 },
    { title: "hello world4", year: 2004 }
  ]);

  useEffect(() => {
    console.log("render");
  });

  // const movies = [
  //   { title: "hello world1", year: 2001 },
  //   { title: "hello world2", year: 2002 },
  //   { title: "hello world3", year: 2003 },
  //   { title: "hello world4", year: 2004 }
  // ];

  const renderMovies = movies.map((movie) => {
    return (
      <div>
        <Movie movie={movie} key={movie.title} />
      </div>
    );
  });

  const addMovie = (event) => {
    // preventDefault를 해야지 submit 했을 때, 리프레쉬 안된다. 페이지 리로딩X
    event.preventDefault();
    setMovies([
      ...movies,
      {
        title: movieTitle,
        yeat: movieYear
      }
    ]);
    //영화추가(setMovies 사용 안할시 사용)
    movies.push({
      title: movieTitle,
      year: movieYear
    });

    setMovieTitle(""); //추가되면서 삭제
    setMovieYear(""); //추가되면서 삭제
  };
  return (
    <div className="App">
      <h1>Movie List</h1>
      <form onSubmit={addMovie}>
        <input
          type="text"
          value={movieTitle}
          placeholder="영화제목"
          onChange={(e) => setMovieTitle(e.target.value)}
        />
        <br />
        <input
          type="text"
          value={movieYear}
          placeholder="개봉년도"
          onChange={(e) => setMovieYear(e.target.value)}
        />
        <br />
        <button type="submit">영화추가</button>
      </form>
      {renderMovies}
    </div>
  );
}
