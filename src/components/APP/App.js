import Header from "./components/Header/Header"
import Pages from "./components/Pages/Pages"
import Footer from "./components/Footer/Footer";
import '../../../assets/css/style.css'
const obj = {
    currentPage : "Resume"
}
const App = ({render}) => {

    const changePage = (pageName) => {
        obj.currentPage = pageName;
        render();
    }
    return(
    <div>
        <Header currentPage={obj.currentPage} 
                changePage={changePage}/>
        <Pages currentPage={obj.currentPage}/>
        <Footer/>
    </div>
)};

export default App;