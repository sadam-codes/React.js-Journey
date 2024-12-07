import React from "react";

const Cards = ({ username = "Default Name" }) => {
  // console.log(username);
  return (
    <div>
      <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 cursor-pointer ">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {/* {username || 'Default'} */}
          {username}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque
          eget massa justo.
        </p>
      </div>
    </div>
  );
};

export default Cards;
