
# Would You Rather App

This App allows users to choose between two different options. It was developed as an assessment of the Redux section of the React Nanodegree of Udacity.


## To launch the project, you'll need to:

  `npm install`
  `npm start`

## How this code works

The App component is responsible for taking care of the Routes and to fetch the questions and users from the store.

The Login component fetches users from the store using mapStateToProps and populate the Dropdown (select) in order to allow you to choose between a list of users, it is also responsible for setting up the logged user (authedUser) with the store.

The Question Container component fetches the authedStore from the store, and all the questions, filtering the questions the user has answered or the questions the user hasn't answered. It is also responsible for setting up a specific route (a question id) for each question.

The PollorAnswer component fetches questions, the authedUser, and the question's id from the route. It then checks if the question exists (in case someone tries to type in the address bar an id that doesn't exist), and if the question was answered or not. If the user has answered, the question's poll is rendered, if the user hasn't answered then the QuestionToAnswer component is rendered and the user has to answer the question.

The LeaderBoard component fetches the users and displays them by descending order of their score.

The NewQuestion component is responsible to add a new question to the store.

## Image References

React-Redux Logo: Noteworthy, The Journal Blog. Medium.
Users' avatars: Icon Pond, Freepik, Flaticon.
Error: Smashicons, Flaticon.
