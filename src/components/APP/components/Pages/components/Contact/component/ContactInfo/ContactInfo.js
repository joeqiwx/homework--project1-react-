const ContactInfo = ({infoIcon, description}) => (
    <div className="contact__info">
        <div className="contact__icon">
            <img src={infoIcon} />
        </div>
        <h5>{description}</h5>
    </div>
)

export default ContactInfo;