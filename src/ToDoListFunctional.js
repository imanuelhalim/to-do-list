import React from "react";

const ToDoListFunctional = props => {
  const [outputText, setOutputText] = React.useState([]);
  const [inputText, setInputText] = React.useState("");
  // const [username, setUsername] = React.useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (inputText.trim() < 1) {
      alert("Input Text cannot be blank");
    } else {
      setOutputText(outputText.concat(inputText));
    }
    setInputText("");
  };

  const changeText = e => {
    setInputText(e.target.value);
  };

  const removeText = removeIndex => {
    setOutputText(
      outputText.filter((text, index) => {
        return removeIndex !== index;
      })
    );
  };

  const showResult = outputText => {
    return (
      <div>
        {outputText.map((text, index) => {
          return (
            <div key={text + index}>
              {text + " "}
              <button
                onClick={() => {
                  removeText(index);
                }}
              >
                Remove
              </button>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div>
      <h1>Hello {props.showUser()}</h1>
      <br />
      <div>{showResult(outputText)}</div>
      <br />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputText}
          placeholder="input here"
          onChange={changeText}
        />
        <button>Add</button>
      </form>
    </div>
  );
};

export default ToDoListFunctional;
