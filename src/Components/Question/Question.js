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
                        Sara Edo asks..
                    </StyledQuestionAuthor>

                 
                <StyledQuestionContent>

                    <img 
                        src="https://miro.medium.com/max/1200/1*XLPUfIkmIA01h1D0ti-wJw.png" 
                        alt="React + Redux Logo"/>


                        <StyledQuestionText>
                            <h5>Would you rather</h5>
                            <p>...write a book...</p>
                            <NavLink to="/in/poll"><Button>View Poll</Button></NavLink>
                        </StyledQuestionText>

                        
                </StyledQuestionContent>

                
            </StyledQuestion>
        )
    }
}

export default Question