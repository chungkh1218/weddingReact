import * as React from 'react';
import {Component} from 'react';
import {Cell,Grid}from 'react-mdl'
import {Link} from 'react-router-dom'

import "./articles.css";


interface IArticle {
    topic:string
}

export default class Articles extends Component<{},IArticle>{
    constructor(props:any) {
        super(props);
        this.state = {
            topic : "Wedding trends that you need to know",
        };
    }

    public render(){
        return <div style={{ width: "90%", margin: "auto" }}>
            <Grid className="maingrid1">
              <Cell col={4}>
                <h4>Focus</h4>
                <img width="360" src="https://ritzcarlton-h.assetsadobe.com/is/image/content/dam/the-ritz-carlton/hotels/asia-pacific/singapore/singapore/new-images/05_KLK%20Photography_Ritz%20Carlton%202016.png?$XlargeViewport100pct$" />
                <h5>
                  <Link to="/">{this.state.topic}</Link>
                </h5>
                <p>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel
                  metus scelerisque ante sollicitudin commodo. Cras
                  purus odio, vestibulum in vulputate at, tempus viverra
                  turpis. Fusce condimentum nunc ac nisi vulputate
                  fringilla. Donec lacinia congue felis in faucibus.
                </p>
              </Cell>
              <Cell col={4}>
                <h4>Whats' new?</h4>
                <img width="360" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgsn8m0kF1ILsxtPyvRiVJKv-_GaOUi36dNOptfDeUFS5BDfrcGA" />
                <h5>
                  <Link to="/">{this.state.topic}</Link>
                </h5>
                <p>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel
                  metus scelerisque ante sollicitudin commodo. Cras
                  purus odio, vestibulum in vulputate at, tempus viverra
                  turpis. Fusce condimentum nunc ac nisi vulputate
                  fringilla. Donec lacinia congue felis in faucibus.
                </p>
              </Cell>
              <Cell col={4}>
                <h4>Gallery</h4>
                <img width="360" src="https://greenweddingshoes.com/wp-content/uploads/2015/01/tylerbranch-wedding-01.jpg" />
                <h5>
                  <Link to="/">{this.state.topic}</Link>
                </h5>
                <p>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel
                  metus scelerisque ante sollicitudin commodo. Cras
                  purus odio, vestibulum in vulputate at, tempus viverra
                  turpis. Fusce condimentum nunc ac nisi vulputate
                  fringilla. Donec lacinia congue felis in faucibus.
                </p>
              </Cell>
            </Grid>
          </div>;
    }
}
/*
<div className="row show-grid bsClass">
            
              <div className="col l4 s12">
                <Media.Body>
                  <Media.Heading>Focus </Media.Heading>

                  <Media>
                    <img width="360" src="https://ritzcarlton-h.assetsadobe.com/is/image/content/dam/the-ritz-carlton/hotels/asia-pacific/singapore/singapore/new-images/05_KLK%20Photography_Ritz%20Carlton%202016.png?$XlargeViewport100pct$" />
                  </Media>
                  <Link to="/">{this.state.topic}</Link>
                  <p>
                    Cras sit amet nibh libero, in gravida nulla. Nulla
                    vel metus scelerisque ante sollicitudin commodo.
                    Cras purus odio, vestibulum in vulputate at, tempus
                    viverra turpis. Fusce condimentum nunc ac nisi
                    vulputate fringilla. Donec lacinia congue felis in
                    faucibus.
                  </p>
                </Media.Body>
              </div>
          

            <div className="col l4 s12">
              <Media.Heading>What's New?</Media.Heading>
              <Media.Body>
                <Media>
                  <img width={360} src="https://ritzcarlton-h.assetsadobe.com/is/image/content/dam/the-ritz-carlton/hotels/asia-pacific/singapore/singapore/new-images/05_KLK%20Photography_Ritz%20Carlton%202016.png?$XlargeViewport100pct$" alt="thumbnail" />
                </Media>
                <p>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel
                  metus scelerisque ante sollicitudin commodo. Cras
                  purus odio.
                </p>
                <Media>
                  <Media.Left>
                    <img width={150} src="https://ritzcarlton-h.assetsadobe.com/is/image/content/dam/the-ritz-carlton/hotels/asia-pacific/singapore/singapore/new-images/05_KLK%20Photography_Ritz%20Carlton%202016.png?$XlargeViewport100pct$" alt="thumbnail" />
                  </Media.Left>
                  <Media.Body>
                    <Media.Heading>Nested Media Heading</Media.Heading>
                    <p>
                      Cras sit amet nibh libero, in gravida nulla. Nulla
                      vel metus scelerisque ante sollicitudin commodo.
                      Cras purus odio.
                    </p>
                  </Media.Body>
                </Media>
                <Media>
                  <Media.Left>
                    <img width={150} src="https://ritzcarlton-h.assetsadobe.com/is/image/content/dam/the-ritz-carlton/hotels/asia-pacific/singapore/singapore/new-images/05_KLK%20Photography_Ritz%20Carlton%202016.png?$XlargeViewport100pct$" alt="thumbnail" />
                  </Media.Left>
                  <Media.Body>
                    <Media.Heading>Nested Media Heading</Media.Heading>

                    <p>
                      Cras sit amet nibh libero, in gravida nulla. Nulla
                      vel metus scelerisque ante sollicitudin commodo.
                      Cras purus odio.
                    </p>
                  </Media.Body>
                </Media>
              </Media.Body>
            </div>

            <div className="col l4 s12">
              <Media.Body>
                <Media.Heading>Popular</Media.Heading>
                <Media>
                  <img width="360" src="https://ritzcarlton-h.assetsadobe.com/is/image/content/dam/the-ritz-carlton/hotels/asia-pacific/singapore/singapore/new-images/05_KLK%20Photography_Ritz%20Carlton%202016.png?$XlargeViewport100pct$" />
                </Media>
                <div className="row">
                  <div className=" col l2 ">
                    <img width="150" src="https://ritzcarlton-h.assetsadobe.com/is/image/content/dam/the-ritz-carlton/hotels/asia-pacific/singapore/singapore/new-images/05_KLK%20Photography_Ritz%20Carlton%202016.png?$XlargeViewport100pct$" />
                  </div>
                  <div className=" col l2">
                    <img width="150" src="https://ritzcarlton-h.assetsadobe.com/is/image/content/dam/the-ritz-carlton/hotels/asia-pacific/singapore/singapore/new-images/05_KLK%20Photography_Ritz%20Carlton%202016.png?$XlargeViewport100pct$" />
                  </div>
                </div>
              </Media.Body>
            </div>
            */