import {RECEIVE_USERS,  SAVE_USER_ANSWER, ADD_USER_QUESTION} from '../Actions/users'

export default function users(state={}, action) {
    switch(action.type){
        case RECEIVE_USERS:
            return {
                ...state,
                ...action.users
            }
        case ADD_USER_QUESTION:
            return {
                ...state,
                [action.authedUser]: {
                  ...state[action.authedUser],
                  questions: state[action.authedUser].questions.concat([action.question.id])
                }
            }
        case SAVE_USER_ANSWER:
            console.log(state)
            console.log(action)
            return{
                ...state,
                [action.authedUser]: {
                ...state[action.authedUser],
                answers: {
                    ...state[action.authedUser].answers,
                    [action.qid]: action.answer
                }
                }
            }
        default:
            return state
    }
}
