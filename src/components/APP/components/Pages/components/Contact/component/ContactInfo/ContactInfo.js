const ContactInfo = ({infoIcon, description, key}) => (
    <div className="contact__info" key={key}>
        <div className="contact__icon">
            <img src={infoIcon} />
        </div>
        <h5>{description}</h5>
    </div>
)

export default ContactInfo;