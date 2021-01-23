import "../../../../../assets/css/bootstrap.min.css"
import "./Pages.css"
import Home from './components/Home/Home'
import Resume from './components/Resume/Resume'
import Services from './components/Services/Services'
import Blog from './components/Blog/Blog'
import Contact from './components/Contact/Contact'

const Pages = ({currentPage}) => (
    <main>
        <Home display={currentPage==="Home"}/>
        <Resume display={currentPage==="Resume"}/>
        <Services display={currentPage==="Services"}/>
        <Blog display={currentPage==="Blog"}/>
    </main>
)

export default Pages;