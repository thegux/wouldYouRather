import React, {Component} from 'react';
import '../App.css';
import {handleInitialData} from '../Actions/shared'
import {connect} from 'react-redux'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import Login from './Login/Login';
import QuestionContainer from './Question/QuestionContainer';
import PollOrAnswer from './Question/PollOrAnswer'
import LeaderBoard from './Board/LeaderBoard'
import NewQuestion from './NewQuestion/NewQuestion'
import {Container} from 'react-bootstrap'
import Error from './404/Error'
import NavComponent from './Nav'

class App extends Component {

  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }

  render(){
    
    return(

      <Router>

      <Container fluid style={{ paddingLeft: 0, paddingRight: 0, backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.8),rgba(154, 231 , 251, 0.8))", minHeight: '100vh'}}>
          <NavComponent/>
          <Switch>

                    <Route exact path='/' component={Login}/>

                    <Route path={'/home'}>
                      {this.props.authedUser ? <QuestionContainer/> : 
                          <Redirect
                          to={{
                            pathname: "/",
                            state: { referrer: '/home' }
                          }}
                        />
                      }
                    </Route>
                    
                    <Route path={'/questions/:question_id' } render={(props) => 
                    
                        this.props.authedUser ? <PollOrAnswer {...props}/> : 
                          <Redirect
                          to={{
                            pathname: "/",
                            state: {
                              referrer: '/questions/' + props.match.params.question_id
                            }
                          }}
                        />
                    }/>

                    <Route path={'/add'}>
                      {this.props.authedUser ? <NewQuestion/> : 
                      <Redirect
                          to={{
                            pathname: "/",
                            state: { referrer: '/add' }
                          }}
                        />}
                    </Route>

                    <Route path={'/leaderBoard'}>
                      {this.props.authedUser ? <LeaderBoard /> : 
                          <Redirect
                          to={{
                            pathname: "/",
                            state: { referrer: '/leaderBoard' }
                          }}
                        />
                      }
                    </Route>
                    
                  <Route component={Error}/>
                    
          </Switch>

      </Container>

      </Router>
    )
  }
}

function mapStateToProps({authedUser}){
  return{
    authedUser
  }
}

export default connect(mapStateToProps)(App)
