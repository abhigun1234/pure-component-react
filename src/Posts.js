import axios from 'axios';
import React, { Component } from 'react';

class Posts extends Component {
    constructor() {

        super()
        this.state = { posts: [] }
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts').then(res => {

            console.log("res", res)
            //  this.state.posts=res.data
            this.setState({ posts: res.data })
        }).catch(error => {

        })
    }
    render() {
        console.log("  this.state.posts",  this.state.posts)
        const {posts}=this.state
        return (
            <div>
                List of posts
                {

                   posts.length ? posts.map(post=><div>{post.title}</div>):null
                }
                
            </div>
        );
    }
}

export default Posts;