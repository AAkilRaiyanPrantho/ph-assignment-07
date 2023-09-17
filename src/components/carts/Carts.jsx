const Carts = () => {
  return (
      <div className="flex flex-col px-4 lg:flex-col">  
        <div className="bg-base-100 p-10 relative rounded-lg lg:right-40 top-0">
            <div className="text-xl text-[#2F80ED] font-bold my-2">
                <h1>Credit Hour Remaining: {}hr</h1>
            </div>
            <hr />
            <div className="my-2 text-lg font-semibold">
                <h1 className="font-bold text-2xl">Course Name</h1>
              <ol id="cart-list" className="list-decimal relative left-5">
              </ol>
            </div>
            <hr />
            <div className="my-2">
                <p className="text-xl font-medium mb-2">Total Credit Hour: <span id="total-Price" className="text-[gray]">0.00 </span><span className="text-[gray]">hr</span></p>
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

export default Carts;
