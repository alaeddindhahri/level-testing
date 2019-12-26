import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import {Route} from 'react-router-dom';
import UsersList from './components/users/UsersList';
import Posts from './components/posts/PostsList';
import Comments from './components/Comments/CommentsList';

export default class App extends React.Component{
  state={
    users:[],
    posts:[],
    comments:[]
  }
  /************API calls**************/
  getData = (apiPath,stateKey)=>{
    axios.get(apiPath).then(response=>{
      this.setState({
        [stateKey]:response.data
      })
    })
  }
    /************API calls**************/
  componentDidMount(){
    this.getData('https://jsonplaceholder.typicode.com/users','users');
    this.getData('https://jsonplaceholder.typicode.com/posts/','posts');
    this.getData('https://jsonplaceholder.typicode.com/comments','comments');
  }
  render(){
    // console.log(this.state.users)
  return (
    <div className="App">
      <div className="container-fluid">
        <Route exact path="/users" render={()=><UsersList users={this.state.users}/>}/>
        <Route exact path="/users/:idUser" render={(props)=><Posts {...props} posts={this.state.posts}/>}/>
        <Route exact path="/users/:idUser/:idPost" render={(props)=><Comments {...props} comments={this.state.comments}/>}/>
      </div>
    </div>
  )
  }
};
