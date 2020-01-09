import React from "react";
import ViewTodoList from "./ViewToDoList";

class ToDoListClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      outputText: [],
      inputText: ""
    };
  }

  changeText = e => {
    this.setState({ inputText: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      // outputText: [...this.state.outputText, this.state.inputText],
      outputText: this.state.outputText.concat(this.state.inputText),
      inputText: ""
    });
  };

  removeOutputText = removeIndex => {
    this.setState({
      outputText: this.state.outputText.filter((text, index) => {
        return removeIndex !== index;
      })
    });
  };

  render() {
    return (
      <div>
        <div>
          <ViewTodoList
            outputText={this.state.outputText}
            onRemove={index => this.removeOutputText(index)}
          />
        </div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.inputText}
            placeholder="input here"
            onChange={this.changeText}
          />
          <button>Add</button>
        </form>
      </div>
    );
  }
}

export default ToDoListClass;
