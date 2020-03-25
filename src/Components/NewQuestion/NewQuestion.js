import React, {Component} from 'react'
import { Button } from 'react-bootstrap'
import {StyledNewQuestion} from './StyledNewQuestion'

export default class NewQuestion extends Component{
    render(){
        return(
            <StyledNewQuestion>
                <div>
                    <h2>Create New Question</h2>
                </div>
                <h6>Complete the question:</h6>
                <h5>Would you rather ...</h5>
                <input placeholder="Type first option's text here"/>
                <h6>or</h6>
                <input placeholder="Type second option's text here"/>
                <Button>Submit</Button>
            </StyledNewQuestion>
        )
    }
}