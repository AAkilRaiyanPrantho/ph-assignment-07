import PropTypes from "prop-types";
import Cart from "../Cart/Cart";


const Carts = ({selectedCourses,creditHours,totalCredits}) => {
  return (
      <div className="flex flex-col px-4 lg:flex-col">  
      {/* <div><h2>selectedCourses: {selectedCourses.length}</h2></div> */}
        <div className="bg-base-100 p-10 relative rounded-lg lg:right-32 top-0">
            <div className="text-xl text-[#2F80ED] font-bold my-2">
                <h1>Credit Hour Remaining: {creditHours} hr</h1>
            </div>
            <hr />
            <div className="my-2 text-lg font-semibold">
                <h1 className="font-bold text-2xl">Course Name</h1>
                {
                    selectedCourses.map(selectedCourse => <Cart key={selectedCourse.id} cart={selectedCourse}></Cart>)
                }
              {/* <ol id="cart-list" className="list-decimal relative left-5">
              </ol> */}
            </div>
            <hr />
            <div className="my-2">
                <p className="text-xl font-medium mb-2">Total Credit Hour: {totalCredits}</p>
            </div>
            <hr />

            <div className="my-2">
                <p className="text-xl font-medium mb-2">Total Price: <span id="total-Price" className="text-[gray]">0.00 </span><span className="text-[gray]">USD</span></p>
            </div>
            <div className="flex justify-center"></div>
            <div className="flex my-2 relative left-10 top-20">
            </div>
          </div>
        </div>
    
  );
};

Carts.propTypes = {
    // course: PropTypes.object.isRequired,
    selectedCourses: PropTypes.array,
    creditHours: PropTypes.number,
    totalCredits: PropTypes.number,
  };

export default Carts;
