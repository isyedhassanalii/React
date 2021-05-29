import React from "react";

const ArrayMethods = () => {
  const arr = [1, 2, 3, 4, 5];
  const arr1 = [
    {
      id: 1,
      name: "abc",
    },
    {
      id: 2,
      name: "xyz",
    },
  ];
  return (
    <>
      <div>
        {arr.map((item) => (
          <span>{item},</span>
        ))}
      </div>
      <div>{arr.filter((num) => num !== 2)}</div>

      <div>
        {arr1.map((data) => {
          return <span key={data.id}>{data.name}</span>;
        })}
      </div>
    </>
  );
};

export default ArrayMethods;
