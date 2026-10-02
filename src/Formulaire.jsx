import { useState } from "react"
function Formulaire(){
    const [nom,setNom] = useState("")
    return(
        <div>
            <h2>Mon formulaire</h2>

            <input 
                type="text"
                value={nom}
                onChange={(e) => setNom(e.target.value)}
            />
            <p>{nom}</p>
        </div>
    )
}

export default Formulaire