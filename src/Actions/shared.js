import {getInitialData} from '../Utils/api'
import {receiveQuestions, addQuestion, questionAnswer} from './questions'
import {receiveUsers} from './users'
import  {saveUserAnswer, addUserQuestion} from './users'
import {saveQuestion, saveQuestionAnswer} from '../Utils/api' 
import {showLoading, hideLoading} from 'react-redux-loading'

export function handleInitialData(){
  return (dispatch) => {
    return getInitialData().then(({users, questions}) => {
        dispatch(receiveUsers(users))
        dispatch(receiveQuestions(questions))
    })
  }
}

export function handleAddQuestion(question){

  return (dispatch, getState) => {
    dispatch(showLoading())
    const {authedUser} = getState() 

    return saveQuestion(question)
    .then((question) => {
        dispatch(addQuestion(question))
        dispatch(addUserQuestion(question, authedUser))
        dispatch(hideLoading())
    })

   }

}

export function handleQuestionAnswer(info){

    return (dispatch) => {
      dispatch(showLoading())
      return saveQuestionAnswer(info).then(() => {
        dispatch(questionAnswer(info))
        dispatch(saveUserAnswer(info))
        dispatch(hideLoading())
      })
    }

}