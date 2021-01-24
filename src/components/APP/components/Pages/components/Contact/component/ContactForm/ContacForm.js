import emailIcon from './assets/svg/email.svg';
import messageIcon from './assets/svg/message.svg';
import personIcon from './assets/svg/person.svg';
import ReCAPTCHA from "react-google-recaptcha";
const ContactForm = () => (
    <div className="col-sm-6 col-md-6 contact">
        <h3>Contact <span>Form</span></h3>
        <form className="contact__form">
            <div className="form__group">
                <div className="form__item">
                    <img src={personIcon}/>
                    <input id="form__name" placeholder="Full name" />
                </div>
                <div className="form__item">
                    <img src={emailIcon} />
                    <input id="form__email" placeholder="Email Address" />
                </div>
                <div className="form__item">
                    <img src={messageIcon} />
                    <textarea id='form_message' placeholder="Message for Me" rows="4"></textarea>
                </div>
                <script src="https://www.google.com/recaptcha/api.js" async defer></script>
                <div className="g-recaptcha" data-sitekey="6LdqmCAUAAAAAMMNEZvn6g4W5e0or2sZmAVpxVqI"></div>
                <ReCAPTCHA className="g-recaptcha" sitekey="6LdqmCAUAAAAAMMNEZvn6g4W5e0or2sZmAVpxVqI" />
                <input type="submit" className="form__btn" value="Send message" />
            </div>
        </form>
    </div>
)

export default ContactForm;