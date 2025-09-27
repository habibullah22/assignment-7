import React from "react";

const Banner = () => {
  return (
    <div>
      <div>
        <div className="flex justify-center gap-4 my-4 container mx-auto">
          <div className="rounded-md py-10 flex flex-col items-center text-white w-2/5 h-[200px] bg-purple-600">
            <h2 className="font-bold text-[35px] ">In-Progress</h2>
            <h2 className="font-bold text-[40px] text-white">0</h2>
          </div>
          <div className="rounded-md py-10 flex flex-col items-center text-white w-2/5 h-[200px] bg-green-600">
            <h2 className="font-bold text-[35px] ">Resolved</h2>
            <h2 className="font-bold text-[40px] text-white">0</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
