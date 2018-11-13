import * as React from "react";
import { Component } from "react";
import { Content, Drawer, Header, Layout, Navigation } from "react-mdl";

import'/Users/kylechung/code/weddingreact/my-app/src/App.css'

import Main from './main'





export default class MyNav extends Component {
  public render() {
    return (
       
       <div style={{ height: '40em', position: "relative" }}>
        <Layout fixedHeader={false}>
          <Header className='header-color' title=''>
            <Navigation>
              <a href="/">Home</a>
              <a href="contact">Contact</a>
            </Navigation>
          </Header>
          <Drawer title="Menu">
            <Navigation>
              <a href="/">Home</a>
              <a href="/contact">Contact</a>
            </Navigation>
          </Drawer>
          <Content style={{height: '100em'}}><Main/></Content>
        </Layout>
      </div>
     
    );
}}



