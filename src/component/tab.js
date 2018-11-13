import * as React from "react";

import { Component } from "react";

import { Grid, Cell,Tab, Tabs } from "react-mdl";

import'/Users/kylechung/code/weddingreact/my-app/src/App.css'


export default class MyTabs extends Component {
    constructor(props) {
        super(props)
        this.state = { activeTab: 0 }};

    handleTab() {     
      if(this.state.activeTab === 0){
          return <Grid>
              <Cell col={6} className="HKtab">
                <img width="100%" src="https://bishopspalace.org.uk/generated/images/gallery/wedding-couple-cropped-1158by600-e609b6.jpg" />
              </Cell>
              <Cell col={6}>
                <h5>Hong Kong</h5>
                <p>
                  Cras sit amet nibh libero, in gravida nulla. Nulla
                  vel metus scelerisque ante sollicitudin commodo.
                  Cras purus odio, vestibulum in vulputate at, tempus
                  viverra turpis. Fusce condimentum nunc ac nisi
                  vulputate fringilla. Donec lacinia congue felis in
                  faucibus.Cras sit amet nibh libero, in gravida
                  nulla. Nulla vel metus scelerisque ante sollicitudin
                  commodo. Cras purus odio, vestibulum in vulputate
                  at, tempus viverra turpis. Fusce condimentum nunc ac
                  nisi vulputate fringilla. Donec lacinia congue felis
                  in faucibus.Cras sit amet nibh libero, in gravida
                  nulla. Nulla vel metus scelerisque ante sollicitudin
                  commodo. Cras purus odio, vestibulum in vulputate
                  at, tempus viverra turpis. Fusce condimentum nunc ac
                  nisi vulputate fringilla. Donec lacinia congue felis
                  in faucibus.
                </p>
              </Cell>
            </Grid>;
        } else if (this.state.activeTab === 1){
          return <Grid>
              <Cell col={6} className="HKtab">
                <img width="100%" src="https://i2.wp.com/www.usmagazine.com/wp-content/uploads/2017/11/serena-williams-alexis-ohanian-wedding-mel-barlow-and-co-allan-zepeda-2.jpg?crop=0px%2C55px%2C2000px%2C1050px&resize=1200%2C630&ssl=1" />
              </Cell>
              <Cell col={6}>
                <h5>Overseas</h5>
                <p>
                  Cras sit amet nibh libero, in gravida nulla. Nulla
                  vel metus scelerisque ante sollicitudin commodo.
                  Cras purus odio, vestibulum in vulputate at, tempus
                  viverra turpis. Fusce condimentum nunc ac nisi
                  vulputate fringilla. Donec lacinia congue felis in
                  faucibus.Cras sit amet nibh libero, in gravida
                  nulla. Nulla vel metus scelerisque ante sollicitudin
                  commodo. Cras purus odio, vestibulum in vulputate
                  at, tempus viverra turpis. Fusce condimentum nunc ac
                  nisi vulputate fringilla. Donec lacinia congue felis
                  in faucibus.Cras sit amet nibh libero, in gravida
                  nulla. Nulla vel metus scelerisque ante sollicitudin
                  commodo. Cras purus odio, vestibulum in vulputate
                  at, tempus viverra turpis. Fusce condimentum nunc ac
                  nisi vulputate fringilla. Donec lacinia congue felis
                  in faucibus.
                </p>
              </Cell>
            </Grid>;
        }
      }
  
    

    

    render() {
        return (
            <div className="demo-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>HK</Tab>
                    <Tab>Overseas</Tab>
                </Tabs>
                <section>
                    {this.handleTab()}
                </section>
            </div>    
        );
    }
}
 
/*
interface ITabs {
  region: string;

}

export default class MyTabs extends Component<{}, ITabs> {
                 constructor(props: any) {
                   super(props);
                   this.state = { region: "hk" };
                   this.renderArticle = this.renderArticle.bind(this);
                 }

                 public renderArticle(region: string) {
                   if (this.handleClickHk) {
                     return;
                   }
                 }

                 public handleClickHk = () => {
                   this.setState({
                    region: "hk"
                   });
                   this.renderArticle("hk");
                 };

                 public handleClickOs = () => {
                   this.setState({
                  region: "os"
                   });
                   
                 };
                 
                 public render() {
                   return <Tabs defaultActiveKey={2} id="uncontrolled-tab-example">
                       <Tab eventKey={1} title="HK">
                         HK
                       </Tab>

                       <Tab eventKey={2} title="OS">
                         OS
                       </Tab>
                       {this.state.region === "hk" ? "Hello,HK" : "Hello,OS"}
                     </Tabs>;
                     
                 }
               }

              
*/