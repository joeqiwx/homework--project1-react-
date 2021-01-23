
const Service = ({serviceItems}) => (
    <>
    {serviceItems.map(({
    icon,
    serviceName,
    description
}) => (
    <div className="service col-sm-6 col-md-3" key={serviceName}>
        <div className="service__img">
            <img src={icon} />
        </div>
        <h4>{serviceName}</h4>
        <p>{description}</p>
    </div>
    ))}
    </>
    );
export default Service;
