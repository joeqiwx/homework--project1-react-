import Header from "./components/Header/Header"
import Pages from "./components/Pages/Pages"
import Footer from "./components/Footer/Footer";
import '../../../assets/css/style.css'
import { PAGE } from "../../store/constants";
class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentPage : PAGE.HOME,
        }

        this.changePage = this.changePage.bind(this);
    }

    changePage(pageName) {
        this.setState({currentPage : pageName});
    }
    
    // changePage = (pageName) => {
    //     this.setState({currentPage : pageName});
    // }

    render() {
        const {currentPage} = this.state;
        return (
            <div>
                <Header currentPage={currentPage} 
                        changePage={this.changePage}/>
                <Pages currentPage={currentPage}/>
                <Footer/>
            </div>
        )
    }
}
export default App;