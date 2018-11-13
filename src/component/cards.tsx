import * as React from "react";

import { Component } from "react";

import { Card, CardText, Cell, Grid } from "react-mdl";

import "/Users/kylechung/code/weddingreact/my-app/src/App.css";


export default class MyCard extends Component{
    public render(){
        return <section className="cardbg">
            <div className="cardheader">
              <h3>The Trend</h3>
            </div>
            <Grid>
              <Cell col={3}>
                <Card className="showcard" shadow={0} style={{ width: "300px", height: "320px" }}>
                  <img width="250px" src="http://s3.weddbook.com/t4/2/4/1/2414976/blue-saphire-ring-engagement-ring-rose-gold-engagement-ring-gem-ring-gemstone-ring-vintage-engagement-ring-sapphire-ring-oval-ring.jpg" />
                  <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Aenan convallis.
                  </CardText>
                </Card>
              </Cell>
              <Cell col={3}>
                <Card className="showcard" shadow={0} style={{ width: "320px", height: "320px" }}>
                  <img width="250px" src="http://s3.weddbook.com/t4/2/4/1/2414976/blue-saphire-ring-engagement-ring-rose-gold-engagement-ring-gem-ring-gemstone-ring-vintage-engagement-ring-sapphire-ring-oval-ring.jpg" />
                  <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Aenan convallis.
                  </CardText>
                </Card>
              </Cell>
              <Cell col={3}>
                <Card className="showcard" shadow={0} style={{ width: "320px", height: "320px" }}>
                  <img width="250px" src="http://s3.weddbook.com/t4/2/4/1/2414976/blue-saphire-ring-engagement-ring-rose-gold-engagement-ring-gem-ring-gemstone-ring-vintage-engagement-ring-sapphire-ring-oval-ring.jpg" />
                  <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Aenan convallis.
                  </CardText>
                </Card>
              </Cell>
              <Cell col={3}>
                <Card className="showcard" shadow={0} style={{ width: "320px", height: "320px" }}>
                  <img width="250px" src="http://s3.weddbook.com/t4/2/4/1/2414976/blue-saphire-ring-engagement-ring-rose-gold-engagement-ring-gem-ring-gemstone-ring-vintage-engagement-ring-sapphire-ring-oval-ring.jpg" />
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

