import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import {Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'

class NavComponent extends Component {

  render(){
    
      return (
        <Nav activeKey="/home" className="justify-content-end">
          
        {this.props.loggedUser &&

        <Fragment>

          <Nav.Item>
            <Link to={'/'+ this.props.loggedUser.id +'/home'}>Home</Link>
          </Nav.Item>

          <Nav.Item>
            <Link to={'/'+ this.props.loggedUser.id +'/newQuestion'}>New Question</Link>
          </Nav.Item>

          <Nav.Item>
            <Link to={'/'+ this.props.loggedUser.id +'/leaderBoard'}>Leader Board</Link>
          </Nav.Item>

          <Nav.Item>
              <p>

                      <img style={{width:'30px', height:'30px', borderRadius: '15px', marginRight: '10px'}}
                      src={this.props.loggedUser.avatarURL} 
                      alt={this.props.loggedUser.name + ' logo'}/>

                      Hi, {this.props.loggedUser.name}</p>
          </Nav.Item>

          <Nav.Item>
            <Link to="/">Logout</Link>
          </Nav.Item>

        </Fragment>   
  }
      </Nav>
    )
 
  
    }


}

function mapStateToProps({users, authedUser}){
  const usersArray = Object.keys(users).map((u) => users[u])
  const loggedUser = usersArray.filter((u) => u.id === authedUser)[0]
  return {loggedUser}
}


export default connect(mapStateToProps)(NavComponent)