import React, { Component } from 'react'
import './Post.css';
import {Link} from 'react-router-dom';

export default class Post extends Component {
    render() {
        const {userId,id,title,body} = this.props.post;
        return (
            <div className="col-6">
                <div className="card" >
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{body}</p>
                </div>
                <div className="card-footer">
                    <Link to={`/users/${userId}/${id}`} className="btn btn-primary comments" target="_blank">Comments</Link>
                    {/* <p>#{}</p> */}
                </div>
                </div>
            </div>
        )
    }
}
