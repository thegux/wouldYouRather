import React, {Component} from 'react'
import { StyledQuestion, StyledQuestionAuthor, StyledQuestionContent, StyledQuestionText } from './StyledQuestion'
import {Form, Button, Row, Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import { handleQuestionAnswer } from '../../Actions/shared'


class QuestionToAnswer extends Component {

    constructor(props) {
        super(props)
        this.handleAnswer = this.handleAnswer.bind(this)
        this.saveQuestionAnswer = this.saveQuestionAnswer.bind(this)
        this.state={
            option: '',
        }
    }


    handleAnswer(option) {
        this.setState(() => ({option}))
    }

    saveQuestionAnswer() {
        const authedUser = this.props.authedUser
        const qid = this.props.qid
        const answer = this.state.option
        const info = {authedUser, qid, answer}

        if(answer !== '') {
          this.props.dispatch(handleQuestionAnswer(info))
        } else {
          alert('You must choose one option')
        }
    }

    render() {
        return(
            <StyledQuestion>
                <StyledQuestionAuthor>
                    {this.props.userName} asks..
                </StyledQuestionAuthor>

                <StyledQuestionContent>
                    <img
                        src={this.props.userAvatar}
                        alt={this.props.userName + "'s avatar'"}/>

                    <StyledQuestionText>
                        <h4>Would you rather</h4>
                        <Form>

                            <Form.Group as={Row}>

                            <Col sm={10}>
                                <Form.Check
                                type="radio"
                                label={this.props.optionOne}
                                name="formHorizontalRadios"
                                id="optionOne"
                                onChange={() => this.handleAnswer('optionOne')}
                                />
                                <Form.Check
                                type="radio"
                                label={this.props.optionTwo}
                                name="formHorizontalRadios"
                                id="optionTwo"
                                onChange={() => this.handleAnswer('optionTwo')}
                                />
                            </Col>

                            </Form.Group>

                            <Link to={'/questions/'+ this.props.qid}><Button onClick={this.saveQuestionAnswer}>Vote</Button></Link>

                        </Form>


                    </StyledQuestionText>

                </StyledQuestionContent>

            </StyledQuestion>
        )
    }
}

function mapStateToProps({authedUser}){
    return{
        authedUser
    }
}


export default connect(mapStateToProps)(QuestionToAnswer)
