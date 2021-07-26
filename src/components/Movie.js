import React from "react";

// const Movie = (props) => {
//   return (
//     // key 값 필요없음.
//     <div className="movie">
//       <div className="movie-title">{props.movie.title}</div>
//       <div className="movie-year">{props.movie.year}</div>
//     </div>
//   );
// };

const Movie = ({ movie }) => {
  return (
    // key 값 필요없음.
    <div className="movie">
      <div className="movie-title">{movie.title}</div>
      <div className="movie-year">{movie.year}</div>
    </div>
  );
};

export default Movie;
