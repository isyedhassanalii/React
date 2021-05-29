import React from "react";

const Style = () => {
  const styles = {
    mySpan: {
      backgroundColor: "black",
      color: "green",
    },
  };
  return (
    <>
      <div
        style={{
          backgroundColor: "red",
          color: "white",
          borderRadius: "1px solid black",
          padding: "10px",
          margin: "0 auto",
        }}
      >
        Styling in react
      </div>
      <div style={styles.mySpan}>Another way of styling</div>
    </>
  );
};

export default Style;
