import './Resume.css'
const Resume = () => (
    <section className="container" id="Resume">
            <div className="page__header row">
                <h2>Resume</h2>
            </div>
            <div className="page__content">
                <div className="row">
                    <div className="col-sm-6 col-md-6 col-lg-6">
                        <h3>Education</h3>
                        <div className="timeline">
                            <div className="timeline__card">
                                <h4>Specialization Course</h4>
                                <span className="card__time">2010</span>
                                <span className="timeline__company"> Apple Inc.</span>
                                <p>Mauris magna sapien, pharetra consectetur fringilla vitae, interdum sed tortor</p>
                            </div>
                        
                            <div className="timeline__card">
                                <h4>Specialization Course</h4>
                                <span className="card__time">2010</span>
                                <span className="timeline__company"> Apple Inc.</span>
                                <p>Mauris magna sapien, pharetra consectetur fringilla vitae, interdum sed tortor</p>
                            </div>

                            <div className="timeline__card">
                                <h4>Specialization Course</h4>
                                <span className="card__time">2010</span>
                                <span className="timeline__company"> Apple Inc.</span>
                                <p>Mauris magna sapien, pharetra consectetur fringilla vitae, interdum sed tortor</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-6">
                        <h3>Experience</h3>
                        <div className="timeline">
                            <div className="timeline__card">
                                <h4>Specialization Course</h4>
                                <span className="card__time">2010</span>
                                <span className="timeline__company"> Apple Inc.</span>
                                <p>Mauris magna sapien, pharetra consectetur fringilla vitae, interdum sed tortor</p>
                            </div>
                        
                            <div className="timeline__card">
                                <h4>Specialization Course</h4>
                                <span className="card__time">2010</span>
                                <span className="timeline__company"> Apple Inc.</span>
                                <p>Mauris magna sapien, pharetra consectetur fringilla vitae, interdum sed tortor</p>
                            </div>

                            <div className="timeline__card">
                                <h4>Specialization Course</h4>
                                <span className="card__time">2010</span>
                                <span className="timeline__company"> Apple Inc.</span>
                                <p>Mauris magna sapien, pharetra consectetur fringilla vitae, interdum sed tortor</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="skill col-sm-6 col-md-6 col-lg-6">
                        <h3>Design <span>Skills</span></h3>
                        <div className="skill__info">
                            <h4>Web Design</h4>
							    <div className="skill__container">
								    <div className="skill__percentage skill-1"></div>
							    </div>
							    <h4>Graphic Design</h4>
							    <div className="skill__container">
								    <div className="skill__percentage skill-2"></div>
							    </div>
							    <h4>Print Design</h4>
							    <div className="skill__container">
								    <div className="skill__percentage skill-3"></div>
							    </div>
                        </div>
                    </div>

                    <div className="skill col-sm-6 col-md-6 col-lg-6">
                        <h3>Design <span>Skills</span></h3>
                        <div className="skill__info">
                            <h4>Web Design</h4>
							    <div className="skill__container">
								    <div className="skill__percentage skill-1"></div>
							    </div>
							    <h4>Graphic Design</h4>
							    <div className="skill__container">
								    <div className="skill__percentage skill-2"></div>
							    </div>
							    <h4>Print Design</h4>
							    <div className="skill__container">
								    <div className="skill__percentage skill-3"></div>
							    </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
)

export default Resume;