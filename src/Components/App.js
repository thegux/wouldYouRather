import React, {Component} from 'react';
import '../App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import NavComponent from "./Nav"
import Login from './Login/Login';
import QuestionContainer from './Question/QuestionContainer';
import QuestionToAnswer from './Question/QuestionToAnswer'
import Poll from './Poll/Poll'
import LeaderBoard from './Board/LeaderBoard'
import NewQuestion from './NewQuestion/NewQuestion'
import {Container} from 'react-bootstrap'

class App extends Component {
  render(){
    return(

      <Router>
      <Container fluid style={{ paddingLeft: 0, paddingRight: 0, backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.8),rgba(154, 231 , 251, 0.8))", minHeight: '100vh'}}>

            <Route exact path='/' render={() => (
              <Login/>
            )}/>

            <Route path='/in' render={() => (
              <NavComponent/>
            )} />

            <Route path='/in/home' render={() => (
              <QuestionContainer/>
            )} />

            <Route path='/in/poll' render={() => (
              <QuestionToAnswer/>
            )} />

            <Route path='/in/newQuestion' render={() => (
              <NewQuestion/>
            )} />

            <Route path='/in/leaderBoard' render={() => (
              <LeaderBoard/>
            )} />


      </Container>
      </Router>
    )
  }
}

export default App;
