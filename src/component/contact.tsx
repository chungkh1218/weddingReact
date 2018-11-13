import * as React from "react";
import { Component } from "react";

import {Cell,Grid} from'react-mdl';

import'/Users/kylechung/code/weddingreact/my-app/src/App.css'

export default class Contact extends Component{
    public render(){
        return(
            <Grid className='contact'>
            <Cell col={12}>
            <div>
                <h3>Contact me
                    </h3>
                </div>
            </Cell>
            </Grid>
        )
    }
}