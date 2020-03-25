import React, {Component} from 'react'
import { NavLink } from 'react-router-dom'
import {StyledLogin, StyledLoginProfile,
        StyledLoginItem, StyledLoginHeader} from './StyledLogin'
import {Button, Dropdown} from 'react-bootstrap'

export default class Login extends Component {
    
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
                            Select User
                        </Dropdown.Toggle>

                        <Dropdown.Menu>

                            <Dropdown.Item>     <img style={{width:'30px', height:'30px', borderRadius: '15px', marginRight: '10px'}}
                    src="https://miro.medium.com/max/1200/1*XLPUfIkmIA01h1D0ti-wJw.png" 
                    alt="React + Redux Logo"/>
                        Action
                        </Dropdown.Item>

                        </Dropdown.Menu>

                    </Dropdown>

                    
                </StyledLoginProfile>
                <NavLink to="/in/home"><Button className="signIn">Sign in</Button></NavLink>

            </StyledLoginItem>
            
        </StyledLogin>
        )
    }
}