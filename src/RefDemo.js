import React, { Component } from 'react';

class RefDemo extends Component {
    constructor(){

        super()

        this.refName=React.createRef()
    }
    componentDidMount(){
       console.log("this.refName",  this.refName)
        this.refName.current.focus()
    }
    onHandleEvent=()=>{
        console.log("this.refName.current.value",this.refName)
        console.log("this.refName.current.value",this.refName.current.value)
    }
    render() {
        return (
            <div>
                <input ref={this.refName} type="text"></input>
                {/* <input type="text"></input> */}
                <button onClick={this.onHandleEvent}>click</button>
                
            </div>
        );
    }
}

export default RefDemo;