const React = require("react");
const { Component } = React;

class WordRelay extends Component {
  state = {
    result: "",
    word: "위니",
    value: "",
  };

  onSubmitForm = (e) => {
    e.preventDefault();
    if (this.state.word[this.state.word.length - 1] === this.state.value[0]) {
      this.setState({
        result: "하이",
        word: this.state.value,
        value: "",
      });
    } else {
      this.setState({
        result: "땡",
        value: "",
      });
    }
  };

  onRefInput = (c) => {
    this.input = c;
  };

  onChangeInput = (e) => {
    this.setState({ value: e.currentTarget.value });
  };

  input;

  render() {
    return (
      <>
        <div>{this.state.word}</div>
        <form onSubmit={this.onSubmitForm}>
          <label htmlFor="wordInput"></label>
          <input
            id="wordInput"
            className="wordInput"
            ref={this.onRefInput}
            value={this.state.value}
            onChange={this.onChangeInput}
          />
          <button>클릭</button>
        </form>
        <div>{this.state.result}</div>
      </>
    );
  }
}

module.exports = WordRelay;
