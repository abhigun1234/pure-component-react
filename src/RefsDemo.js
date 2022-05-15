import React, { Component } from 'react';

class RefsDemo extends Component {
    constructor(props){

        super(props)
        this.inputRef=React.createRef()
        this.onClickHandler=this.onClickHandler.bind()
    }
    componentDidMount(){

        this.inputRef.current.focus()
    }
    onClickHandler=()=>{
        console.log("value",this.inputRef.current.value)

    }
    render() {
        return (
            <div>
                <input type='text' ref={this.inputRef}></input>
                <button onClick={this.onClickHandler}>click</button>
            </div>
        );
    }
}

export default RefsDemo;