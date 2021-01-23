import twiterIcon from './assets/svg/twiter.svg';
import facebookIcon from './assets/svg/facebook.svg';
import insgramIcon from './assets/svg/insgram.svg';
const Title = () => (
        <div className="page__title col-sm-8 col-md-8 col-lg-8">
            <h2>John Doe</h2>
            <div className="title__subtitle">Frontend-developer</div>
            <div className="title__socialMedia">
                <a><img src={facebookIcon}/></a>
                <a><img src={twiterIcon}/></a>
                <a><img src={insgramIcon}/></a>
            </div>
        </div>
)

export default Title;