import blogImg from './assets/img/blog_post_1.jpg'
import './Blog.css'
const Blog = () => (
    <section className="container" id="Blog">
    <div className="page__header row">
        <h2>Blog</h2>
    </div>
    <div className="page__content">
        <div className="row">
            <div className="blog col-sm-12 col-md-6 col-lg-6">
                <div className="blog__img">
                    <img src={blogImg} />
                    <div className="blog__date">
                        <span className="day">6</span>
                        <span className="month">Dec</span>
                    </div>
                </div>
                <div className="blog__info">
                    <div className="category">Travel</div>
                    <h4>Bootstrap is most popular Framework</h4>
                </div>
            </div>
            <div className="blog col-sm-12 col-md-6 col-lg-6">
                <div className="blog__img">
                    <img src={blogImg} />
                    <div className="blog__date">
                        <span className="day">6</span>
                        <span className="month">Dec</span>
                    </div>
                </div>
                <div className="blog__info">
                    <div className="category">Travel</div>
                    <h4>Bootstrap is most popular Framework</h4>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="blog col-sm-12 col-md-6 col-lg-6">
                <div className="blog__img">
                    <img src={blogImg} />
                    <div className="blog__date">
                        <span className="day">6</span>
                        <span className="month">Dec</span>
                    </div>
                </div>
                <div className="blog__info">
                    <div className="category">Travel</div>
                    <h4>Bootstrap is most popular Framework</h4>
                </div>
            </div>
            <div className="blog col-sm-12 col-md-6 col-lg-6">
                <div className="blog__img">
                    <img src={blogImg} />
                    <div className="blog__date">
                        <span className="day">6</span>
                        <span className="month">Dec</span>
                    </div>
                </div>
                <div className="blog__info">
                    <div className="category">Travel</div>
                    <h4>Bootstrap is most popular Framework</h4>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="blog col-sm-12 col-md-6 col-lg-6">
                <div className="blog__img">
                    <img src={blogImg} />
                    <div className="blog__date">
                        <span className="day">6</span>
                        <span className="month">Dec</span>
                    </div>
                </div>
                <div className="blog__info">
                    <div className="category">Travel</div>
                    <h4>Bootstrap is most popular Framework</h4>
                </div>
            </div>
            <div className="blog col-sm-12 col-md-6 col-lg-6">
                <div className="blog__img">
                    <img src={blogImg} />
                    <div className="blog__date">
                        <span className="day">6</span>
                        <span className="month">Dec</span>
                    </div>
                </div>
                <div className="blog__info">
                    <div className="category">Travel</div>
                    <h4>Bootstrap is most popular Framework</h4>
                </div>
            </div>
        </div>
    </div>
</section>
)
export default Blog;