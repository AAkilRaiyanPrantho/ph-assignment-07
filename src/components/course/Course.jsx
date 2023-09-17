import PropTypes from 'prop-types';

const Course = ({ course }) => {
    console.log(course);
    const {title,thumbnail} = course;
    return (
        <div>
            <img src={thumbnail} alt={`Thumbnail of Course ${title}`} />
            <h2 className="text-4xl">{title}</h2>
        </div>
    );
};

Course.propTypes = {
    course: PropTypes.object.isRequired
}

export default Course;