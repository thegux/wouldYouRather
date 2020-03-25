import {getInitialData} from '../utils/api'
import {receiveQuestions} from './questions'
import {receiveUsers} from './users'
import {setAutherUser} from './authedUser'

export function handleInitialData(user){
  return (dispatch) => {
    return getInitialData().then(({users, questions}) => {
        dispatch(receiveUsers(users))
        dispatch(receiveQuestions(questions))
        dispatch(setAutherUser(user))
    })
  }
}
