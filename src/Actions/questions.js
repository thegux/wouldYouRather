import {saveQuestion, saveQuestionAnswer} from '../Utils/api'
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const SAVE_QUESTION_ANSWER = 'SAVE_QUESTION_ANSWER'



//Actions
export function receiveQuestions(questions){
    return {
        type: RECEIVE_QUESTIONS,
        questions,
    }
}

function addQuestion(question){
    return {
        type: ADD_QUESTION,
        question
    }
}

function questionAnswer({authedUser, qid, answer }){
      return {
          type: SAVE_QUESTION_ANSWER,
          authedUser,
          qid,
          answer,
      }
}



//Actions to be used with thunk
export function handleAddQuestion(question){
  return (dispatch) => {
    return saveQuestion(question)
              .then((question) => dispatch(addQuestion(question)))
  }
}

export function handleQuestionAnswer(info){
    return (dispatch) => {
      return saveQuestionAnswer(info).then(dispatch(questionAnswer(info)))
    }
}
