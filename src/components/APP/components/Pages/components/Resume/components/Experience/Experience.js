import Timeline from '../Timeline/Timeline'

const Experience = () => (
    <div className="col-sm-6 col-md-6 col-lg-6">
        <h3>Education</h3>
        <div className="timeline" >
            <Timeline items={
                [{
                    key:'Key',
                    title:'Frontend-developer',
                    year: 'Dec 2012 - Current',
                    company: 'Web Agency',
                    description:'Mauris magna sapien, pharetra consectetur fringilla vitae, interdum sed tortor.'  
                },{
                    key:'Key',
                    title:'Web Designer',
                    year: 'Dec 2011 - Nov 2012',
                    company: 'Apple Inc.',
                    description:'Mauris magna sapien, pharetra consectetur fringilla vitae, interdum sed tortor.'  
                }, {
                    key:'Key',
                    title:'Graphic Designer',
                    year: 'Jan 2010 - Dec 2011',
                    company: 'Apple Inc.',
                    description:'Mauris magna sapien, pharetra consectetur fringilla vitae, interdum sed tortor.'  
                }]
            }/>

        </div>
    </div>
);
export default Experience;