import React from "react";
import ReactDOM from "react-dom";

const MessageComponent = (props) => <div>{props.text}</div>;
const MessageField = (props) => {
  return props.messages.map((message) => <MessageComponent text={message} />);
};

class Messages extends React.Component {
  constructor() {
    super();

    this.messages = ["Привет", "Как дела?"];
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    this.messages.push(this.state.value);
    this.setState({ value: "" });

    event.preventDefault();
  }

  render() {
    return (
      <div>
        <MessageField messages={this.messages} />

        <hr />
        <form onSubmit={this.handleSubmit}>
          <label>
            Message:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" onChange={this.handleChange} />
        </form>
      </div>
    );
  }
}

ReactDOM.render(<Messages />, document.getElementById("root"));
