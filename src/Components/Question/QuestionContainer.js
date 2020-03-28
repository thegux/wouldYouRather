import React, {Component} from 'react'
import Question from './Question'
import { connect } from 'react-redux'
import {Tabs, Tab} from 'react-bootstrap' 
import { StyledQuestionContainer } from './StyledQuestionContainer'

class QuestionContainer extends Component {
    
    handleUserAvatar(id){
         return this.props.user.filter((u) => u.id === id)[0].avatarURL
    }

    handleUserName(id){
        return this.props.user.filter((u) => u.id === id)[0].name
    }

    render(){
        return(
            <Tabs defaultActiveKey="unanswered" id="uncontrolled-tab-example">

                <Tab eventKey="unanswered" title="Unanswered Questions">

                    <StyledQuestionContainer>

                    {this.props.qU && this.props.qU.map((q) => 
                        <Question key={q.id}
                                  id={q.id}
                                  authorAvatar={this.handleUserAvatar(q.author)}
                                  author={this.handleUserName(q.author)}
                                  option={q.optionOne.text}/>
                    )}

                    </StyledQuestionContainer>

                </Tab>

                <Tab eventKey="answered" title="Answered Questions">

                    <StyledQuestionContainer>

                    {this.props.qA && this.props.qA.map((q) => 
                        <Question key={q.id}
                                  id={q.id}
                                  authorAvatar={this.handleUserAvatar(q.author)}
                                  author={this.handleUserName(q.author)}
                                  option={q.optionOne.text}/>
                    )}

                    </StyledQuestionContainer>

                </Tab>

            </Tabs>
        )
    }
}



function mapStateToProps({authedUser, questions, users}){
    const question = Object.keys(questions).map((q) => questions[q])
    const user = Object.keys(users).map((u) => users[u])
    const qU = question.filter((q) => !q.optionOne.votes.includes(authedUser) & !q.optionTwo.votes.includes(authedUser))
    const qA = question.filter((q) => q.optionOne.votes.includes(authedUser) || q.optionTwo.votes.includes(authedUser))
    
    return {
        authedUser,
        qU,
        qA,
        user   
    }
}


export default connect(mapStateToProps)(QuestionContainer)