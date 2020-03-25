import React, {Component} from 'react'
import Question from './Question'
import {Tabs, Tab} from 'react-bootstrap' 
import { StyledQuestionContainer } from './StyledQuestionContainer'

class QuestionContainer extends Component {
    render(){
        return(
            <Tabs defaultActiveKey="unanswered" id="uncontrolled-tab-example">
                <Tab eventKey="unanswered" title="Unanswered Questions">
                    <StyledQuestionContainer>
                        <Question/>
                        <Question/>
                        <Question/>
                        <Question/>
                    </StyledQuestionContainer>
                </Tab>
                <Tab eventKey="answered" title="Answered Questions">
                <StyledQuestionContainer>
                        <Question/>
                        <Question/>
                    </StyledQuestionContainer>
                </Tab>
            </Tabs>
        )
    }
}

export default QuestionContainer