import { useState } from "react"

function Visibility() {
    const [visible, setVisible] = useState(false)

    return (
        <div>
            <button onClick={() => setVisible(!visible)}>
                {visible ? "Masquer" : "Afficher"}
            </button>

            {visible && (
                <p>Mon numéro de téléphone : 0194653512</p>
            )}
        </div>
    )
}

export default Visibility