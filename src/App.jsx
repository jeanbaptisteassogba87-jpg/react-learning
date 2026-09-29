import { useState } from "react";
import Presentation from "./Presentation";

function App(){
  const nom = "Jean-Baptiste"
  const formation = "Licence 3 SIL"
  return(
    <div>
       <h1>Bonjour {nom} </h1>
      <p>Je suis étudiant en informatique </p>
      <p>Actuellement en  {formation}</p>

      <Presentation />
    </div>
  );
}

export default App 