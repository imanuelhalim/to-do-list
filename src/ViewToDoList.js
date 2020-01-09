import React from "react";

const ViewTodoList = ({ outputText, onRemove }) => {
  return (
    <div>
      <span>
        {outputText.map((text, index) => {
          return (
            <div key={text + index}>
              {text}
              <button
                onClick={() => {
                  onRemove(index);
                }}
              >
                Remove
              </button>
            </div>
          );
        })}
      </span>
    </div>
  );
};

export default ViewTodoList;
