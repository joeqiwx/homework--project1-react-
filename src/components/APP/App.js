import Header from "./components/Header/Header"
import Pages from "./components/Pages/Pages"
import Footer from "./components/Footer/Footer";
import '../../../assets/css/style.css'
// const obj = {
//     currentPage : "Home"
// }
// const App = ({render}) => {

//     const changePage = (pageName) => {
//         obj.currentPage = pageName;
//         render();
//     }
//     return(
//     <div>
//         <Header currentPage={obj.currentPage} 
//                 changePage={changePage}/>
//         <Pages currentPage={obj.currentPage}/>
//         <Footer/>
//     </div>
// )};
class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentPage : 'Home',
        }
    }
    render() {
        const {currentPage} = this.state;
        const changePage = (pageName) => {
            this.setState({currentPage : pageName});
        }
        return (
            <div>
                <Header currentPage={currentPage} 
                        changePage={changePage}/>
                <Pages currentPage={currentPage}/>
                <Footer/>
            </div>
        )
    }
}
export default App;