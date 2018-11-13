import * as React from "react";
import {Component} from 'react'

import {Switch, Route} from'react-router-dom'

import Articles from './articles';
import Contact from'./contact'

const Main = () => (
  <Switch>
    <Route exact path="/" component={Articles} />
    <Route path="/contact" component={Contact} />
  </Switch>
);


export default Main

