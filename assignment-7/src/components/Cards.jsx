import React, { use } from "react";

const Cards = ({ fetchPromise }) => {
  const initialData = use(fetchPromise);
  console.log(initialData);

  return (
    <div className="my-16">
      <h2 className="text-2xl font-semibold container mx-auto">
        Customer Tickets
      </h2>
      {/* right side  */}
     
      {/* right side  */}
      <div className="grid grid-cols-2 gap-4 p-10 w-7/9">
        {initialData.map((issue) => {
          console.log(issue);
          return (
            <div
              key={issue.ID}
              onClick={() => onselect(issue)}
              className="shadow-md rounded-md cursor-pointer bg-slate-100 text-black p-7"
            >
              <div className="">
                <div className="flex justify-between items-center">
                  <h2 className="text-[17px] font-semibold">{issue.Title}</h2>
                  <h2
                    className={`btn rounded-full ${
                      issue.Status == "Open"
                        ? "bg-green-500 text-black"
                        : issue.Status == "In- Progress"
                        ? "bg-yellow-200 text-red-900"
                        : "bg-amber-800 text-white"
                    }`}
                  >
                    {issue.Status}
                  </h2>
                </div>
                <p className="my-3 text-[15px]">{issue.Description}</p>
                <div className="flex justify-between">
                  <div className="flex gap-2 text-[12px]">
                    <p className="">{issue.ID}</p>
                    <h3
                      className={` ${
                        issue.Priority == "HIGH PRIORITY"
                          ? "text-red-600"
                          : issue.Priority == "LOW PRIORITY"
                          ? "text-green-400"
                          : issue.Priority == "MEDIUM PRIORITY"
                          ? "text-yellow-400"
                          : "text-black"
                      } `}
                    >
                      {issue.Priority}
                    </h3>
                  </div>
                  <div className="flex  gap-2 text-[12px]">
                    <p>{issue.Assignee}</p>
                    <p>{issue.Date}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
