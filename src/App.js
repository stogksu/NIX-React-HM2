import React from "react";
import './App.css';
import Search from "./components/Search/Search";
import Gallery from "./components/Gallery/Gallery";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
    this.getValue = this.getValue.bind(this);
  }
  
  componentDidMount() {
    if (localStorage.getItem("inputValue")) {
      this.setState({value: localStorage.getItem("inputValue")})
    }
  }

  getValue(event) {
    localStorage.setItem("inputValue", event.target.value);
    this.setState({value: event.target.value});
  }

  render() {
    
    return (
      <div className="App">
        <Search value={this.getValue} placeholder={this.state.value}/>
        <Gallery value={this.state.value} />
      </div>
    );
  }
}

export default App
