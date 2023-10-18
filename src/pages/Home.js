import { useEffect, useState } from "react";
import NavBar from "../components/NavBar"
import MovieCard from "../components/MovieCard"


function Home() {

const [movies, setMovies] = useState([])

useEffect(() => {
    fetch("http://localhost:4000/movies")
    .then(res => res.json())
    .then(movieData => setMovies(movieData))
  }, [])

  // const movieList = 

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Home Page</h1>
           {movies.map(movie => {
    return <MovieCard key={movie.id} movie={movie}/>
  })}
      </main>
    </>
  );
};

export default Home;