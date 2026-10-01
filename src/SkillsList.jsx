function SkillsList(){
    const skills = [
        {nom :"Python" , niveau :"Intermédiare"},
        {nom :"Django" , niveau :"Intermédiare"},
        {nom :"React" , niveau :"Débutant"}
    ]
    return(
        <div>
            <h2>Mes compétences</h2>
            {skills.map((skill)=>(
                <p key={skill.nom}>
                    {skill.nom} - {skill.niveau}
                </p>
            ))}
        </div>
    );
}

export default SkillsList