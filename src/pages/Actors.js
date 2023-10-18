import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Actors() {

  const [actors, setActors] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/actors")
    .then(res => res.json())
    .then(data => setActors(data))
  }, [])


  const actorsList = actors.map((actor) => {
    return (
      <div key={actor.id}>
        <article >
          <h2>{actor.name}</h2>
          <ul>
            {actor.movies.map((movie) => {
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
        <h1>Actors Page</h1>
        {actorsList}
      </main>
    </>
  );
};

export default Actors;
