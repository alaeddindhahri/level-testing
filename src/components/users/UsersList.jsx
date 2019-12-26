import React, { Component } from 'react'
import User from '../user/User';

export default class UsersList extends Component {
    render() {
        // console.log(this.props)
        return (
        <div className="row">
          {this.props.users.map((user,key)=><User key={key} user={user}/>)}
        </div>
        )
    }
}
