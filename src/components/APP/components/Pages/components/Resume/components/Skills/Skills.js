const Skills = ({title, skills}) => (
    <div className="skill col-sm-6 col-md-6 col-lg-6">
                        <h3> {title} <span>Skills</span></h3>
                        <div className="skill__info">
                            {skills.map((skill, index) => (
                                <div key={skill}>
                                    <h4>{skill}</h4>
							        <div className="skill__container">
								        <div className={`skill__percentage skill-${index + 1}`}>
                                        </div>
							        </div>
                                </div>
                            ))}
                        </div>
                    </div>
)
export default Skills;