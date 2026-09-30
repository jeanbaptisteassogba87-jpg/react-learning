import Presentation from "./Presentation";
import Skills from "./Skills";
import Contact from "./Contact";

function App(){
  const nom = "Jean-Baptiste"
  const formation = "Licence 3 SIL"
  const langage = "JavaScript"
  const niveau = "débutant"
  const email = "email@gmail.com"
  const telephone = "01-94-65-35-12"
  return(
    <div>
       <h1>Bonjour {nom} </h1>
      <p>Je suis étudiant en informatique </p>
      <p>Actuellement en  {formation}</p>

      <Presentation nom={nom} formation={formation}/>
      <Skills langage={langage} niveau={niveau}/>
      <Contact email={email} telephone={telephone} />
    </div>
  );
}

export default App 