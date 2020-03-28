import React, {Component} from 'react';
import '../App.css';
import {handleInitialData} from '../Actions/shared'
import {handleAddQuestion} from '../Actions/questions'
import {setAuthedUser} from '../Actions/authedUser'
import {connect} from 'react-redux'
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

  constructor(props){
      super(props)
      this.updateUser = this.updateUser.bind(this)
      this.saveQuestion = this.saveQuestion.bind(this)
      this.state={
        userID: '',
      }
  }  
  
  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }

  updateUser(userID){
    this.props.dispatch(setAuthedUser(userID))
    this.setState(() => ({userID}))
  }

  saveQuestion(option1, option2){
    const question = {optionOneText: option1, optionTwoText: option2, author: this.state.userID}
    this.props.dispatch(handleAddQuestion(question))
  }

  render(){
    return(

      <Router>

      <Container fluid style={{ paddingLeft: 0, paddingRight: 0, backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.8),rgba(154, 231 , 251, 0.8))", minHeight: '100vh'}}>

            <Route exact path='/' render={() => (
              <Login updateUser={this.updateUser}/>
            )}/>

                <Route path={'/' + this.state.userID} render={()=>  (
                  <NavComponent/>
                )} />

                <Route path={'/' + this.state.userID + '/home'} render={() => (
                  <QuestionContainer/>
                )} />

                <Route path={'/' + this.state.userID +'/poll'} render={() => (
                  <QuestionToAnswer />
                )} />

                <Route path={'/' + this.state.userID  +  '/newQuestion'} render={() => (
                  <NewQuestion saveQuestion={this.saveQuestion}/>
                )} />

                <Route path={'/' + this.state.userID + '/leaderBoard'} render={() => (
                  <LeaderBoard />
                )} />




      </Container>

      </Router>
    )
  }
}



export default connect()(App)
