import { Component } from "react";
import {React} from "react";
export class ClassComponentState extends Component{
    //constructor:runs once when component is first created
    constructor(props){
         super(props);//super() calls the parent constructor
         this.state={count:0};//state is going to be here and stays even after the re-renders
    }

    //2.Event handler:arrow function to handle 'this' binding ...
    increment=()=>{
        this.setState((prevState)=>({
            count:prevState.count+1
        }));
    };
    //3.Render:run whenever state/props change
    render(){
        
        return(
            <div>
                <h3>Class component state</h3>
                <p>Count:{this.state.count}</p>
                <button onClick={this.increment}>Increment</button>
            </div>
        );
    }
}