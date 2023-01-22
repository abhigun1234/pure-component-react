import React, { Component } from 'react';
import Memo from './Memo';
import MemoComp from './MemoComp';
import MemoDemo from './MemoDemo';
import PureComp from './PureComp';
import Regular from './Regular';

class Parent extends Component {
    constructor(props){
        super(props)
    this.state={ name:'ravi'}

    
    }
    componentDidMount(){
            setInterval(()=>{
             this.setState({name:'ravi'})
            },2000)
    }
    render() {
     console.log("parent component called")
        return (
            <div>
                Parent Component
                 <Regular name={this.state.name}></Regular>
                <MemoDemo></MemoDemo>
                 {/* <MemoComp></MemoComp> */}
               
            </div>
        );
    }
}

export default Parent;