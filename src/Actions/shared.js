import {getInitialData} from '../Utils/api'
import {receiveQuestions, addQuestion, questionAnswer} from './questions'
import {receiveUsers} from './users'
import  {saveUserAnswer, addUserQuestion} from './users'
import {saveQuestion, saveQuestionAnswer} from '../Utils/api' 

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

    const {authedUser} = getState() 

    return saveQuestion(question)
    .then((question) => {
        dispatch(addQuestion(question));
        dispatch(addUserQuestion(question, authedUser))
    })

   }

}

export function handleQuestionAnswer(info){

    return (dispatch) => {
      return saveQuestionAnswer(info).then(() => {
        dispatch(questionAnswer(info));
        dispatch(saveUserAnswer(info))
      })
    }

}