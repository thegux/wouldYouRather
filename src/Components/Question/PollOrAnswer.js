import React, {Component} from 'react'
import {connect} from 'react-redux'
import QuestionToAnswer from '../Question/QuestionToAnswer'
import Poll from '../Poll/Poll'
import {withRouter} from 'react-router-dom'

class PollOrAnswer extends Component {
    render(){
        return(
            <div>
            {this.props.error ?
                this.props.history.push('/error')
            : 
            <div>
                {this.props.questionAnswered ?
                    <Poll
                        choice={this.props.choice}
                        userAvatar={this.props.user.avatarURL}
                        userName={this.props.user.name}
                        total={this.props.total}
                        votesOne={this.props.question.optionOne.votes.length}
                        votesTwo={this.props.question.optionTwo.votes.length}
                        optionOne={this.props.question.optionOne.text}
                        optionTwo={this.props.question.optionTwo.text}/>
                    :
                <QuestionToAnswer 
                    qid={this.props.question.id}
                    userAvatar={this.props.user.avatarURL}
                    userName={this.props.user.name}
                    optionOne={this.props.question.optionOne.text}
                    optionTwo={this.props.question.optionTwo.text}/>
                }

                </div>
            }
            </div>
        )
    }
}

function mapStateToProps({authedUser, questions, users}, props) {
    const questionID = props.match.params.question_id
    const question = Object.keys(questions).map((q) => questions[q]).filter((q) => q.id === questionID)[0]
    
    if (question){

    const total = question.optionOne.votes.length + question.optionTwo.votes.length;
    const user = Object.keys(users).map((u) => users[u]).filter((u) => u.id === question.author)[0]
    let questionAnswered = false

        if(question.optionOne.votes.includes(authedUser) || question.optionTwo.votes.includes(authedUser)){ 
            
            questionAnswered = true
            let choice;
            {question.optionOne.votes.includes(authedUser) ? choice = 'optionOne' :  choice = 'optionTwo'}
            if(total > 0){
                return{
                    question,
                    questionAnswered,
                    user,
                    total,
                    choice
                }
            } else {return {error: true}} 
        
        }    
            
            return{
                question,
                questionAnswered,
                user,
            }

            

    } else {return {error: true}} 

}

export default withRouter(connect(mapStateToProps)(PollOrAnswer))