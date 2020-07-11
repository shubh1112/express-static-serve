import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "",
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    fetch("/getData")
    .then(res => res.json())
    .then(data => this.setState({data}));
  };

  handleClick = () => {
    if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
      window.location.port = 4000;
    } else {
      window.location.replace('/app1')
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Hello From App2!</h1>
        <div>
          <span>Go to App1 :</span>&nbsp;
          <button onClick={this.handleClick}>App1</button>
          <div>Data loaded from Backend: {this.state.data}</div>
        </div>
      </div>
    );
  }
}

export default App;
