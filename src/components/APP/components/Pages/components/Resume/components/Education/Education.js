import Timeline from '../Timeline/Timeline';

const Education = () => (
    <div className="col-sm-6 col-md-6 col-lg-6">
        <h3>Education</h3>
            <div className="timeline" >
                <Timeline items={
                    [{
                        key:'Key',
                        title:'Specialization Course',
                        year: 2010,
                        company: 'Apple Inc.',
                        description:'Mauris magna sapien, pharetra consectetur fringilla vitae, interdum sed tortor.'  
                    },{
                        key:'Key',
                        title:'Specialization Course',
                        year: 2010,
                        company: 'Apple Inc.',
                        description:'Mauris magna sapien, pharetra consectetur fringilla vitae, interdum sed tortor.'  
                    },{
                        key:'Key',
                        title:'Specialization Course',
                        year: 2010,
                        company: 'Apple Inc.',
                        description:'Mauris magna sapien, pharetra consectetur fringilla vitae, interdum sed tortor.'  
                    }]}/>
            </div>
    </div>
);
export default Education;