import React, { Component } from 'react';
import Comment from '../comment/Comment';

export default class CommentsList extends Component {
    render() {
        return (
            <div>
                <div className="row" style={{"font-weight":"700"},{"font-size":"4rem"}}>
                    Comments List
                </div>
                <div className="row mt-5">
                    {this.props.comments.filter(comment=>(comment.postId==this.props.match.params.idPost)).map((comment,key)=><Comment key={key} comment={comment}/>)}
                </div>
            </div>
        )
    }
}
