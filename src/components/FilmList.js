import React, {useState} from "react";
import Film from "./Film";

const FilmList = ({films}) => {
  const filmNodes = films.map(film => (
    <Film key={film.id} url={film.url} name={film.name}>{film.name}</Film>
  )
    
  
  )

  return (
    <>
      {filmNodes}
    </>
  );
}



export default FilmList;