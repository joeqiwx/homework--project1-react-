import {PAGE} from '../../../../../../store/constants'
import './Resume.css'
import Page from '../../../Page/Page'
import Education from './components/Education/Education'
import Experience from './components/Experience/Experience'
import Skills from './components/Skills/Skills'
const Resume = ({display}) => (
    <Page display={display}
          pageName={PAGE.RESUME}
    >
        <div className="row">
            <Education />
            <Experience />
        </div>
        <div className="row">
            <Skills title={'Design'} 
            skills={['Web Design', 'Graphic Design', 'Print Design']}/>
            <Skills title={'Code'}
            skills ={['HTML5', 'CSS3/LESS/SASS','jQuery']}/>
        </div>
    </Page>
)

export default Resume;