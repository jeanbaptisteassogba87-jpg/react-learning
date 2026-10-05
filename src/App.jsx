import { useState } from "react";
import Presentation from "./Presentation";
import Skills from "./Skills";
import Contact from "./Contact";
import Visibility from "./Visibility";
import SkillsList from "./SkillsList";
import Formulaire from "./Formulaire";
import Projects from "./Projects";

function App(){
  const nom = "Jean-Baptiste"
  const formation = "Licence 3 SIL"
  const langage = "JavaScript"
  const niveau = "débutant"
  const email = "email@gmail.com"
  const telephone = "01-94-65-35-12" 
  const [compteur , setCompteur] = useState(0)

  return(
    <div className="app-shell">
      <h1>Bonjour {nom} </h1>
      <p>Je suis étudiant en informatique </p>
      <p>Actuellement en  {formation}</p>

      <Presentation nom={nom} formation={formation}/>
      <Skills langage={langage} niveau={niveau}/>
      <Contact email={email} telephone={telephone} />

      <section className="counter-box">
        <p>Compteur : {compteur}</p>
        <div className="counter-actions">
          <button onClick={()=>setCompteur(compteur+1)}>Ajouter </button>
          <button onClick={()=>setCompteur(compteur-1)}>Retirer</button>
        </div>
      </section>

      <Visibility />
      <SkillsList />
      <Projects />
      <Formulaire />
    </div>
  );
}

export default App