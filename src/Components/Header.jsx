import React from "react";

// const Header = (props) => {
//   const { name, headline } = props;
//   return (
//     <>
//       <h1>{name}</h1>
//       <h2>{headline}</h2>
//     </>
//   );
// };
const Header = ({ name, headline, number }) => {
  return (
    <>
      <div className="header-name">{name}</div>
      <hr />
      <div className="headline" style={{ fontSize: "30px" }}>
        {headline}
      </div>
      <div>
        I am clicked{" "}
        <span style={{ color: number >= 5 ? "red" : "blue" }}> {number} </span>{" "}
        of times
      </div>
    </>
  );
};

export default Header;
