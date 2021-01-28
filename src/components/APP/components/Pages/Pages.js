import "../../../../../assets/css/bootstrap.min.css"
import "./Pages.css"
import {PAGE} from "../../../../store/constants"
import Home from './components/Home/Home'
import Resume from './components/Resume/Resume'
import Services from './components/Services/Services'
import Blog from './components/Blog/Blog'
import Contact from './components/Contact/Contact'

const Pages = ({currentPage}) => (
    <main>
        <Home display={currentPage===PAGE.HOME}/>
        <Resume display={currentPage===PAGE.RESUME}/>
        <Services display={currentPage===PAGE.SERVICES}/>
        <Blog display={currentPage===PAGE.BLOG}/>
        <Contact display={currentPage===PAGE.CONTACT} />
    </main>
)

export default Pages;