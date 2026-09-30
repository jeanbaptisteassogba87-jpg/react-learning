import Presentation from "./Presentation";
import Skills from "./Skills";

function App(){
  const nom = "Jean-Baptiste"
  const formation = "Licence 3 SIL"
  const langage = "JavaScript"
  const niveau = "débutant"
  return(
    <div>
       <h1>Bonjour {nom} </h1>
      <p>Je suis étudiant en informatique </p>
      <p>Actuellement en  {formation}</p>

      <Presentation nom={nom} formation={formation}/>
      <Skills langage={langage} niveau={niveau}/>
    </div>
  );
}

export default App 