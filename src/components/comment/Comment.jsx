import React, { Component } from 'react'

export default class Comment extends Component {
    render() {
        const {name,email,body}=this.props.comment;
        return (
            <div className="col-12">
                <div className="card" >
                <div className="card-header">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{email}</p>
                </div>
                <div className="card-body">
                    <p className="card-text">{body}</p>
                </div>
                </div>
            </div>
        )
    }
}
