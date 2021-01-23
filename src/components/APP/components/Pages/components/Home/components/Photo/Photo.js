import photo from './assets/img/photo.png';
const Photo = () => (
        <picture className="page__photo col-sm-4 col-md-4 col-lg-4" alt="individual photo">
            <img src={photo}/>
        </picture>
)

export default Photo;