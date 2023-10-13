import React, { useState } from "react";
import Header from "./Components/Header";
import "../public/styles.css";
import HamroButton from "./Components/HamroButton";

const App = () => {
  const [number, setNumber] = useState(0);
  console.log(number);

  const [showDiv, setShowDiv] = useState(false);

  const handleAdd = () => {
    const newNumber = number + 1;
    setNumber(newNumber);
  };
  const handleShowHide = () => {
    setShowDiv((preVal) => !preVal);
  };

  return (
    <>
      <Header name="Bishal" headline="This is a Headline" number={number} />
      <hr />
      <div>React JS Project</div>
      <div>I am clicked {number} of times.</div>

      <HamroButton text="Add" onClick={handleAdd} color="red" />
      <HamroButton text="Show/Hide" onClick={handleShowHide} color="blue" />
      {showDiv === true ? (
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quae
          voluptate nihil nesciunt. Aspernatur voluptate nostrum quos magni
          libero eius exercitationem? Nobis quod est dolorem perspiciatis
          provident aut inventore quisquam?
        </div>
      ) : (
        <>Click to show</>
      )}
    </>
  );
};

export default App;
