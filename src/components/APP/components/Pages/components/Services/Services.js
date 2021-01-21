import webDesignIcon from './assets/img/web_design_icon.png'
import clientIcon from '/assets/img/client_1.png'
import './Services.css'
const Services = () => (
    <section className="container" id="Services">
    <div className="page__header row">
        <h2>Services</h2>
    </div>
    <div className="page__content">
        <div className="row">
            <h3 className="col-sm-12 col-md-12">My <span>Services</span></h3>
            <div className="service col-sm-6 col-md-3">
                <div className="service__img">
                    <img src={webDesignIcon} />
                </div>
                <h4>Web Design</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
            </div>
            <div className="service col-sm-6 col-md-3">
                <div className="service__img">
                    <img src={webDesignIcon} />
                </div>
                <h4>Web Design</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
            </div>
            <div className="service col-sm-6 col-md-3">
                <div className="service__img">
                    <img src={webDesignIcon} />
                </div>
                <h4>Web Design</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
            </div>
            <div className="service col-sm-6 col-md-3">
                <div className="service__img">
                    <img src={webDesignIcon} />
                </div>
                <h4>Web Design</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
            </div>
        </div>
        <div className="row">
            <h3 className="col-sm-12 col-md-12">Clients</h3>
            <div className="client col-sm-4 col-md-2">
                <div className="client__logo">
                    <a href="#" target="_blank">
                        <img src={clientIcon} />
                    </a>
                </div>
            </div>
            <div className="client col-sm-4 col-md-2">
                <div className="client__logo">
                    <a href="#" target="_blank">
                        <img src={clientIcon} />
                    </a>
                </div>
            </div>
            <div className="client col-sm-4 col-md-2">
                <div className="client__logo">
                    <a href="#" target="_blank">
                        <img src={clientIcon} />
                    </a>
                </div>
            </div>
            <div className="client col-sm-4 col-md-2">
                <div className="client__logo">
                    <a href="#" target="_blank">
                        <img src={clientIcon} />
                    </a>
                </div>
            </div>
            <div className="client col-sm-4 col-md-2">
                <div className="client__logo">
                    <a href="#" target="_blank">
                        <img src={clientIcon} />
                    </a>
                </div>
            </div>
            <div className="client col-sm-4 col-md-2">
                <div className="client__logo">
                    <a href="#" target="_blank">
                        <img src={clientIcon} />
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>
)

export default Services;