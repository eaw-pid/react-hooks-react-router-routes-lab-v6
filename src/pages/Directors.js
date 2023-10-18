import { useEffect, useState } from "react";
import NavBar from "../components/NavBar"

function Directors() {

  const [directors, setDirector] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/directors")
    .then(res => res.json())
    .then(data => setDirector(data))
  }, [])

  const directorList = directors.map((director) => {
    return (
      <div key={director.id}>
        <article>
          <h2>{director.name}</h2>
          <ul>
          {director.movies.map((movie) => {
            return (
              <li>{movie}</li>
            )
          })}
          </ul>
        </article>
      </div>
    )
  })
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Directors Page</h1>
        {directorList}
      </main>
    </>
  );
};

export default Directors;
