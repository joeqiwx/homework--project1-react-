import './Contact.css';
import emailIcon from './assets/svg/email.svg';
import locationIcon from '/assets/svg/location.svg';
import messageIcon from './assets/svg/email.svg';
import personIcon from './assets/svg/person.svg'
const Contact = () => (
    <section class="container" id="Contact">
    <div class="page__header row">
        <h2>Contact</h2>
    </div>
    <div class="page__content">
        <div class="row">
            <div class="col-sm-6 col-md-6 contact">
                <h3>Get in <span>Touch</span></h3>
                <div id="map"></div>
                {/* <div id="googleMap" style="width:451px;height:180px;"></div>
                <script>
                    {myMap()}
                </script> */}
                <div class="contact__info">
                    <div class="contact__icon">
                        <img src={locationIcon} />
                    </div>
                    <h5>Brisbane,Australia</h5>
                </div>
                  <div class="contact__info">
                    <div class="contact__icon">
                        <img src={locationIcon} />
                    </div>
                    <h5>Brisbane,Australia</h5>
                </div>                       <div class="contact__info">
                    <div class="contact__icon">
                        <img src={locationIcon} />
                    </div>
                    <h5>Brisbane,Australia</h5>
                </div>                       <div class="contact__info">
                    <div class="contact__icon">
                        <img src={locationIcon} />
                    </div>
                    <h5>Brisbane,Australia</h5>
                </div>
            </div>
            <div class="col-sm-6 col-md-6 contact">
                <h3>Contact <span>Form</span></h3>
                <form class="contact__form">
                    <div class="form__group">
                        <div class="form__item">
                            <img src={personIcon}/>
                            <input id="form__name" placeholder="Full name" />
                        </div>
                        <div class="form__item">
                            <img src={emailIcon} />
                            <input id="form__email" placeholder="Email Address" />
                        </div>
                        <div class="form__item">
                            <img src={messageIcon} />
                            <textarea id='form_message' placeholder="Message for Me" rows="4"></textarea>
                        </div>
                        <script src="https://www.google.com/recaptcha/api.js" async defer></script>
                        <div class="g-recaptcha" data-sitekey="6LdqmCAUAAAAAMMNEZvn6g4W5e0or2sZmAVpxVqI"></div>
                        <input type="submit" class="form__btn" value="Send message" />
                    </div>
                </form>
            </div>
        </div>
    </div>
</section>
);
function myMap() {
var mapProp= {
center:new google.maps.LatLng(51.508742,-0.120850),
zoom:5,
};
var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
}
export default Contact;