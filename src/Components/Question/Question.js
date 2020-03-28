import React, {Component} from 'react'
import { NavLink } from 'react-router-dom'
import {Button} from 'react-bootstrap'
import {StyledQuestion, StyledQuestionContent,
        StyledQuestionAuthor, StyledQuestionText} from './StyledQuestion'


class Question extends Component {
    render(){
        return(

            <StyledQuestion>

                    <StyledQuestionAuthor>
                        {this.props.author} asks..
                    </StyledQuestionAuthor>

                 
                <StyledQuestionContent>

                    <img 
                        src={this.props.authorAvatar} 
                        alt={this.props.author + ' logo'}/>


                        <StyledQuestionText>
                            <h5>Would you rather</h5>
                            <p>...{this.props.option}...</p>
                            <NavLink to="/in/poll"><Button>View Poll</Button></NavLink>
                        </StyledQuestionText>

                        
                </StyledQuestionContent>

                
            </StyledQuestion>
        )
    }
}

export default Question