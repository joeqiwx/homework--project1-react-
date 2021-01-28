import {PAGE} from '../../../../../../store/constants'
import Page from '../../../Page/Page'
import './Home.css'
import Photo from './components/Photo/Photo';
import Title from './components/Title/Title';
import AboutMe from './components/AboutMe/AboutMe';
import Info from './components/Info/Info'
const Home = ({display}) => (
    <Page display={display}
          pageName={PAGE.HOME}
          header={(
            <>
            <Photo />
            <Title />
            </>)}>
        <AboutMe />
        <Info />
    </Page>
)

export default Home;