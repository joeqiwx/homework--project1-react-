import photo from './assets/img/photo.png';
import twiterIcon from './assets/svg/twiter.svg';
import facebookIcon from './assets/svg/facebook.svg';
import insgramIcon from './assets/svg/insgram.svg';
import './Home.css'

const Home = () => (
    <section className="container page " id="Home">
    <div className="page__header row" >
        <picture className="page__photo col-sm-4 col-md-4 col-lg-4" alt="individual photo">
            <img src={photo}/>
        </picture>
        <div className="page__title col-sm-8 col-md-8 col-lg-8">
            <h2>John Doe</h2>
            <div className="title__subtitle">Frontend-developer</div>
            <div className="title__socialMedia">
                <a><img src={facebookIcon}/></a>
                <a><img src={twiterIcon}/></a>
                <a><img src={insgramIcon}/></a>
            </div>
        </div>

    </div>
    <div className="page__content row">
        <div className="content__aboutMe col-sm-6 col-md-6 col-lg-6" >
            <h3>About <span>Me</span></h3>
            <p>Hello! I’m John Doe. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Aenean fermentum ullamcorper sem, at placerat dolor volutpat ac. Duis nulla enim, 
                condimentum nec ultricies.
            </p>
        </div>
        <div className="content__info col-sm-6 col-md-6 col-lg-6">
            <dl>
                <dt>Age</dt>
                <dd>29</dd>
                <dt>Residence</dt>
                <dd>Austrilian</dd>
                <dt>Address</dt>
                <dd>Level 3 / 57 Coronation Drive, Brisbane</dd>
                <dt>e-mail</dt>
                <dd><a href="mailto:email@example.com">info@jiangren.com.au</a></dd>
                <dt>Phone</dt>
                <dd>+0123 123 456 789</dd>
            </dl>
        </div>
    </div>
</section>
)

export default Home;