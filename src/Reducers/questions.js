import {RECEIVE_QUESTIONS,ADD_QUESTION, SAVE_QUESTION_ANSWER} from '../Actions/questions'

export default function questions(state={}, action){
    switch (action.type) {
      case RECEIVE_QUESTIONS:
          return {
            ...state,
            ...action.questions
          }
      case ADD_QUESTION:
          return {
            ...state, [action.question.id]: action.question
          }
      case SAVE_QUESTION_ANSWER:
          const answer = action.answer
          return {
            ...state, [action.qid]: {
              ...state[action.qid], answer: answer.concat([action.authedUser])
            }
          }
      default:
          return state

    }
}
