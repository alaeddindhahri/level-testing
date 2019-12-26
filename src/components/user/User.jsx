import React from 'react';
import './user.css';
import {Link} from 'react-router-dom';

export default class User extends React.Component {
    
    render(){
    const {id,name,website,email} = this.props.user;
    return (
        <div className="col-3 user-card">
            <img src="https://coverfiles.alphacoders.com/372/37275.jpg" className="timeline-img" alt="avatar-bg"/>
            <img src="https://www.svgrepo.com/show/61986/avatar.svg" className="avatar" alt="avatar"/>
            <div className="user-details">
                <p className="name">{name}</p>
                <p className="website-link">{website}</p>
                <p className="email">{email}</p>
            </div>
            <Link to={`/users/${id}`} className="btn btn-info posts" target="_blank">Posts</Link>
        </div>
    )
    }
}
