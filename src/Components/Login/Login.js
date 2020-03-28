import React, {Component} from 'react'
import { NavLink } from 'react-router-dom'
import {connect} from 'react-redux'
import {StyledLogin, StyledLoginProfile,
        StyledLoginItem, StyledLoginHeader} from './StyledLogin'
import {Button, Dropdown} from 'react-bootstrap'

class Login extends Component {

    state={
        dropdown: 'Select User',
        userID: '',
    }

    handleDropdown(user){
        const dropdown = user.name
        const userID = user.id
        this.setState(() => ({dropdown, userID}))
    }



    render(){
        
        return(

        <StyledLogin>

            <StyledLoginItem>

                <StyledLoginHeader>
                    <h6>
                        Welcome to the Would You Rather App!
                    </h6>
                    <p>Please sign in to continue</p>
                </StyledLoginHeader>

                <img src="https://miro.medium.com/max/1200/1*XLPUfIkmIA01h1D0ti-wJw.png" 
                    alt="React + Redux Logo"/>

                <h4>Sign in</h4>

                <StyledLoginProfile>

                     <Dropdown>

                        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                            {this.state.dropdown}
                        </Dropdown.Toggle>

                        <Dropdown.Menu>

                            {this.props.user && this.props.user.map((user) =>

                                <Dropdown.Item onClick={() => this.handleDropdown(user)}>
                                    <img src={user.avatar} alt="user avatar"/>
                                    {user.name}
                                </Dropdown.Item>
                            )}

                        </Dropdown.Menu>

                    </Dropdown>

                    
                </StyledLoginProfile>

                <NavLink to={'/' + this.state.userID +'/home'}>
                    <Button onClick={() => this.props.updateUser(this.state.userID)}>Sign in</Button>
                </NavLink>

            </StyledLoginItem>
            
        </StyledLogin>

        )
    }
}

function mapStateToProps({users}){
    const userIDs = Object.keys(users);
    const user = userIDs.map((id) => {return { name: users[id].name, avatar: users[id].avatarURL, id: id}});

    return {
        user,
    }
}

export default connect(mapStateToProps)(Login)