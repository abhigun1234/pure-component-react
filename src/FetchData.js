import React, { Component } from 'react';
import axios  from 'axios';
class FetchData extends Component {
    constructor(props){

        super(props)
        this.state={posts:[]}
    }
   //class life cycle were you have toi do http communction
    componentDidMount(){
     axios.get('https://jsonplaceholder.typicode.com/posts').then(res=>{

        console.log("res",res)
        this.setState({posts:res.data})

     }).catch(error=>{

     })

    }
    render() {
        console.log("data",this.state.posts)
        return (
            <div>
               Fetching the list of post 
            </div>
        );
    }
}

export default FetchData;