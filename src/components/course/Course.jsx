import PropTypes from "prop-types";

const Course = ({ course }) => {
  console.log(course);
  const { title, thumbnail, details, dollar, price, value, book, credit, hour} = course;
  return (
    <div className="flex flex-row">
      {/* <img src={thumbnail} alt={`Thumbnail of Course ${title}`} />
      <h2 className="text-4xl">{title}</h2> */}

      <div className="card w-96 bg-base-100 shadow-xl mb-10">
        <figure>
          <img className="w-full p-4"
            src={thumbnail} alt={`Thumbnail of Course ${title}`}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{details}</p>
          <div className="flex flex-row justify-center gap-8">
            <div className="flex flex-row justify-center items-center">
                <img className="p-2"
            src={dollar} alt={`Dollar Sign`}
          />
          <p>{price} {value}</p>
          </div>
            <div className="flex flex-row justify-center items-center">
                <img className="p-2"
            src={book} alt={`Book Sign`}
          />
          <p>{credit} {hour}hr</p>
          </div>
          </div>
          <div className="card-actions justify-center w-full">
            <button className="btn btn-primary w-[320px]">Select</button>
          </div>
        </div>
      </div>
    </div>
  );
};

Course.propTypes = {
  course: PropTypes.object.isRequired,
};

export default Course;
