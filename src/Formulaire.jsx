import { useState } from "react"
function Formulaire(){
    const [nom,setNom] = useState("")
    const [message , setMessage] = useState("")
    function handleSubmit(e){
        e.preventDefault()
        setMessage(nom)
    }
    return(
        <form onSubmit={handleSubmit}>
            <h2>Mon formulaire</h2>

            <input 
                type="text"
                value={nom}
                onChange={(e) => setNom(e.target.value)}
            />
            <button type="submit">Envoyer</button>
            {message && (
                <p>Bonjour {message}</p>
            )
            
            }
        </form>
    )
}

export default Formulaire