import './Contact.css';
import {PAGE} from '../../../../../../store/constants'
import locationIcon from './assets/svg/location.svg';
import phoneIcon from './assets/svg/phone.svg';
import emailInfoIcon from './assets/svg/contactEmail.svg';
import tickIcon from './assets/svg/tick.svg';
import Page from '../../../Page/Page';
import ContactInfo from './component/ContactInfo/ContactInfo';
import ContacForm from './component/ContactForm/ContacForm';
const infoList = [{
    infoIcon: locationIcon,
    description: 'Brisbane, Australia'
},{
    infoIcon: emailInfoIcon,
    description: 'info@jiangren.com.au'
},{
    infoIcon: phoneIcon,
    description: '+123 654 78900'
},{
    infoIcon: tickIcon,
    description: 'Freelance Available'
}];

const Contact = ({display}) => (
    <Page display={display} pageName={PAGE.CONTACT}>
        <div className="row">
            <div className="col-sm-6 col-md-6 contact">
                <h3>Get in <span>Touch</span></h3>
                <div id="map"></div>
                {infoList.map(({infoIcon, description}, index)=>(
                    <ContactInfo infoIcon={infoIcon}
                                 description={description}
                                 key={index} />
                ))}
            </div>

            <ContacForm />
        </div>
    </Page>
)
export default Contact;
