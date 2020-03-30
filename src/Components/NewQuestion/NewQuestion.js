import React, {Component} from 'react'
import { Button } from 'react-bootstrap'
import {connect} from 'react-redux'
import {StyledNewQuestion} from './StyledNewQuestion'
import { handleAddQuestion } from '../../Actions/shared'
import {withRouter} from 'react-router-dom'

class NewQuestion extends Component {

    state = {
        option1: '',
        option2: '',
    }

    handleOptionOne(option1){
        this.setState(() => ({option1}))
    }

    handleOptionTwo(option2){
        this.setState(() => ({option2}))
    }

    saveQuestion(option1, option2){
        const question = {optionOneText: option1, optionTwoText: option2, author: this.props.authedUser}
        this.props.dispatch(handleAddQuestion(question)).then(this.props.history.push('/home'))
    }

    render(){
        return(
            <StyledNewQuestion>

                    <div>
                        <h2>Create New Question</h2>
                    </div>

                    <h6>Complete the question:</h6>

                    <h5>Would you rather ...</h5>

                    <input value={this.state.option1}
                           onChange={(e) => this.handleOptionOne(e.target.value)}
                           placeholder="Type first option's text here"/>

                    <h6>or</h6>

                    <input value={this.state.option2}
                           onChange={(e) => this.handleOptionTwo(e.target.value)}
                           placeholder="Type second option's text here"/>

 
                        <Button onClick={() => this.saveQuestion(this.state.option1, this.state.option2)}>
                            Submit
                        </Button>

            </StyledNewQuestion>
        )
    }
}

function mapStateToProps({authedUser}){
    return{
        authedUser
    }
}

export default withRouter(connect(mapStateToProps)(NewQuestion))