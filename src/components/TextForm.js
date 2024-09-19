import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  };
  const handleOnClick = () => {
    // console.log("UpperCase Was Clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success");
  };
  const handleLowerClick = () => {
    // console.log("LowerCase was clicked");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "success");
  };
  const handleCopyClick = () => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        props.showAlert("Copied to clipboard", "success");
      })
      .catch((err) => {
        props.showAlert("Failed to copied", "success");
      });
  };
  const handleClear = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Cleared Text", "success");
  };
  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };
  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container"
        style={{
          border: props.mode === "dark" ? "1px solid white" : "1px solid grey",
          borderRadius: "20px",
        }}
      >
        <div
          className="container"
          style={{
            color: props.mode === "dark" ? "white" : "black",
          }}
        >
          <h1>{props.heading}</h1>
          <div className="mb-3">
            <textarea
              className="form-control"
              value={text}
              onChange={handleOnChange}
              id="myBox"
              rows="8"
              style={{
                backgroundColor: props.mode === "dark" ? "grey" : "white",
                color: props.mode === "dark" ? "white" : "black",
              }}
            ></textarea>
          </div>
          <button className="btn btn-primary mx-2" onClick={handleOnClick}>
            Conver to UpperCase
          </button>
          <button className="btn btn-warning mx-2" onClick={handleLowerClick}>
            Convert to LowerCase
          </button>
          <button className="btn btn-danger mx-2" onClick={handleCopyClick}>
            Copy To Clipboard
          </button>
          <button className="btn btn-secondary mx-2" onClick={handleClear}>
            Clear Text
          </button>
          <button className="btn btn-primary mx-2" onClick={handleExtraSpace}>
            Remove Extra Space
          </button>
        </div>
        <div
          className="container my-3"
          style={{
            color: props.mode === "dark" ? "white" : "black",
          }}
        >
          <h1>Your Text Summary</h1>
          <p>
            {text.split(" ").length} words {text.length} characters
          </p>
          <p>{0.008 * text.split(" ").length} minutes to read</p>
          <h2>Preview</h2>
          <p>
            {text.length > 0
              ? text
              : "Enter something in the textarea to preview"}
          </p>
        </div>
      </div>
    </>
  );
}
TextForm.propTypes = { heading: PropTypes.string };
