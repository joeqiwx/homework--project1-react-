import Home from './components/Home/Home'
import './Pages.css'
import './components/Home/Home'
import Resume from './components/Resume/Resume'
import Services from './components/Services/Services'
import Blog from './components/Blog/Blog'
import Contact from './components/Contact/Contact'

const Pages = () => (
    <main>
        <Home/>
        <Resume/>
        <Services/>
        <Blog />
        <Contact />
    </main>
)

export default Pages;