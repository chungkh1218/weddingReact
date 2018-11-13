import * as React from "react";

import { Component } from "react";

import { Card, CardText, CardTitle, Cell, Grid } from "react-mdl";

import "/Users/kylechung/code/weddingreact/my-app/src/App.css";


export default class MyCard extends Component{
    public render(){
        return <section className="cardbg">
            <Grid>
              <Cell col={3}>
                <Card shadow={0} style={{ width: "320px", height: "320px", margin: "auto" }}>
                  <CardTitle expand={true} style={{ color: "#fff", background: "url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC" }}>
                    Update
                  </CardTitle>
                  <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Aenan convallis.
                  </CardText>
                </Card>
              </Cell>
              <Cell col={3}>
                <Card shadow={0} style={{ width: "320px", height: "320px", margin: "auto" }}>
                  <CardTitle expand={true} style={{ color: "#fff", background: "url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC" }}>
                    Update
                  </CardTitle>
                  <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Aenan convallis.
                  </CardText>
                </Card>
              </Cell>
              <Cell col={3}>
                <Card shadow={0} style={{ width: "320px", height: "320px", margin: "auto" }}>
                  <CardTitle expand={true} style={{ color: "#fff", background: "url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC" }}>
                    Update
                  </CardTitle>
                  <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Aenan convallis.
                  </CardText>
                </Card>
              </Cell>
              <Cell col={3}>
                <Card shadow={0} style={{ width: "320px", height: "320px", margin: "auto" }}>
                  <CardTitle style={{ color: "#fff", width:'300px' , background: "url(https://media.brides.com/photos/59efa6ba1a36de37c3b058b4/master/w_767,c_limit/1%2520CARTIER.png) bottom right 15% no-repeat #46B6AC" }}>
                    Update
                  </CardTitle>
                  <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Aenan convallis.
                  </CardText>
                </Card>
              </Cell>
            </Grid>
          </section>;
    }
}

