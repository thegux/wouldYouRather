import React, {Component} from 'react'
import { StyledQuestion, StyledQuestionAuthor, StyledQuestionContent, StyledQuestionText } from './StyledQuestion'
import {Form, Button, Row, Col} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'

export default class QuestionToAnswer extends Component {
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
                        <h4>Would you rather?</h4>
                        <Form.Group as={Row}>
                        <Col sm={10}>
                            <Form.Check
                            type="radio"
                            label="first radio"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios1"
                            />
                            <Form.Check
                            type="radio"
                            label="second radio"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios2"
                            />
                        </Col>
                        </Form.Group>

                            <NavLink to="/in/poll"><Button>View Poll</Button></NavLink>
                    </StyledQuestionText>
                    
                </StyledQuestionContent>

            </StyledQuestion>
        )
    }
}