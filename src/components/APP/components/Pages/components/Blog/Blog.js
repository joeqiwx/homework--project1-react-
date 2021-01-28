import Page from '../../../Page/Page'
import {PAGE} from '../../../../../../store/constants'
import blogImg from './assets/img/blog_post_1.jpg';
import Blogcard from './components/Blogcard/Blogcard';
import './Blog.css';
const blogs = [{
    blogImg:blogImg,
    day : 6,
    month : 'Dec',
    category : 'Travel',
    title: 'Bootstrap is the Most Popular Framework'
},{
    blogImg:blogImg,
    day : 3,
    month : 'Nov',
    category : 'jQuery',
    title: 'One Framework, Every Device'
},{
    blogImg:blogImg,
    day : 12,
    month : 'Oct',
    category : 'Sport',
    title: 'Designed for Everyone, Everywhere'
},{
    blogImg:blogImg,
    day : 18,
    month : 'Aug',
    category : 'Css',
    title: 'An Introduction To PostCSS'
},{
    blogImg:blogImg,
    day : 2,
    month : 'Jul',
    category : 'CSS3',
    title: 'Original and Innovative Web Layouts'
},{
    blogImg:blogImg,
    day : 8,
    month : 'May',
    category : 'HTML5',
    title: 'Creative and Innovative Navigation Designs'
},];

const Blog = ({display}) => (
    <Page display={display} pageName={PAGE.BLOG}>
        {blogs.map(({
            blogImg,
            day,
            month,
            category,
            title
        }, index) => (
            <Blogcard key={index}
                      blogImg={blogImg} 
                      day={day}
                      month={month} 
                      category={category}
                      title={title}/>
        ))}
    </Page>
)
export default Blog;