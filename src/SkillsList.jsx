function SkillsList(){
    const skills = ["Pyton" , "JavaScript", "React" ,"Django" , "Rust"]
    return(
        <div>
            <h2>Mes compétences</h2>
            {skills.map((skill)=>(
                <p>{skill}</p>
            ))}
        </div>
    );
}

export default SkillsList