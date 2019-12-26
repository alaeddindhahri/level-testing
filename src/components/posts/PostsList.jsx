import React, { Component } from 'react'
import Post from '../post/Post';

export default class PostsList extends Component {

    render() {
        return (
            <div>
                <div className="row" style={{"font-weight":"700"},{"font-size":"6rem"}}>
                    Posts List
                </div>
                <div className="row mt-5">
                    {this.props.posts.filter(post=>(post.userId==this.props.match.params.idUser)).map((post,key)=><Post key={key} post={post}/>)}
                </div>
            </div>
        )
    }
}
