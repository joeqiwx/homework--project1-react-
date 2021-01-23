import './Blogcard.css'
const Blogcard = ({
    key,
    blogImg,
    day,
    month,
    category,
    title
}) => (
    <div className="blog col-sm-12 col-md-6 col-lg-6" key={key}>
        <div className="blog__img">
            <img src={blogImg} />
            <div className="blog__date">
                <span className="day">{day}</span>
                <span className="month">{month}</span>
            </div>
        </div>
        <div className="blog__info">
            <div className="category">{category}</div>
            <h4>{title}</h4>
        </div>
    </div>
)
export default Blogcard;