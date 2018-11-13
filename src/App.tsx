import * as React from "react";
/*
import { Media, } from "react-bootstrap";
*/
import MyCard from "./component/cards";
import MyNav from "./component/navbar";
import MyTab from'./component/tab'






import "./App.css";

import { Component } from "react";

class App extends Component {
  public render() {
    return <div>
        <MyNav />
        <MyTab />
        <MyCard/>
      
      </div>;
  }
}

export default App;
