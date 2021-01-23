const Timeline = ({items}) => (
    <>
    {items.map(({
        key,
        title,
        year,
        company,
        description
    }, index) => (
            <div className="timeline__card" key={index}>
                <h4>{title}</h4>
                <span className="card__time">{year}</span>
                <span className="timeline__company">{company}</span>
                <p>{description}</p>
            </div>
    ))}
    </>);
    export default Timeline;