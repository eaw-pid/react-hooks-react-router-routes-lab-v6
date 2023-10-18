import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom"


function Movie() {

const [movie, setMovie] = useState([])
const params = useParams()
const movieId = params.id

useEffect(() => {
  fetch(`http://localhost:4000/movies/${movieId}`)
  .then(res => res.json())
  .then(data => setMovie(data))
}, [movieId])

//have to also check that there is a movie.genre b/c movie.genre is initially undefined since it was set to an empty []
const genreList = movie.genres && movie.genres.map(genre => {
  return <span>{genre}</span>
})

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <div>
        <h1>{movie.title}</h1>
        <p>{movie.time}</p>
        {genreList}
        </div>
      </main>
    </>
  );
};

export default Movie;
