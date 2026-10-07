function Matrice(){
    const mot = "exercicepoint";

    const lettres = mot.split("");

    const codeAscii = lettres.map(lettre => lettre.charCodeAt(0));

    const matrice = [codeAscii];
    return(
        <div>
            <h2>CODE ASCII DE CHAQUE LETTRE </h2>
            {lettres.map((lettre,index)=>(
                <p key={index}>Lettre {lettre} : {codeAscii[index]}</p>
            ))}
        </div>
    );
}

export default Matrice ;