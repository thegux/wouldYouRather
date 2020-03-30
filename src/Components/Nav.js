import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import {Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {setAuthedUser} from '../Actions/authedUser'

class NavComponent extends Component {

  constructor(props){
    super(props)
    this.handleLogOut = this.handleLogOut.bind(this)
  }

  handleLogOut(){
    this.props.dispatch(setAuthedUser(null))
  }

  render(){

      return (
        <Nav activeKey="/home" className="justify-content-end">

          <Nav.Item>
            <Link to={'/home'}>Home</Link>
          </Nav.Item>

          <Nav.Item>
            <Link to={'/add'}>New Question</Link>
          </Nav.Item>

          <Nav.Item>
            <Link to={'/leaderBoard'}>Leader Board</Link>
          </Nav.Item>

          {this.props.authedUser &&
                  <Fragment>
                    <Nav.Item>
                    <p>

                            <img
                            src={this.props.loggedUser.avatarURL}
                            alt={this.props.loggedUser.name + ' logo'}/>

                            Hi, {this.props.loggedUser.name}</p>
                </Nav.Item>

                <Nav.Item onClick={this.handleLogOut}>
                  <Link to="/">Logout</Link>
                </Nav.Item>
                </Fragment>
            }

        </Nav>
      )


    }


}

function mapStateToProps({users, authedUser}) {
  const usersArray = Object.keys(users).map((u) => users[u])
  const loggedUser = usersArray.filter((u) => u.id === authedUser)[0]

  return {
    loggedUser,
    authedUser
  }
  
}


export default connect(mapStateToProps)(NavComponent)
