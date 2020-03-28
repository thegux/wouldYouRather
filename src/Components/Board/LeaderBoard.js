import React, {Component} from 'react';
import Board from './Board';
import {connect} from 'react-redux'
import {StyledLeaderBoard} from './StyledLeaderBoard'

class LeaderBoard extends Component {
    render(){
        return(
            <StyledLeaderBoard>
                {this.props.usersArray.map((user) => 
                    <Board userAvatar={user.avatarURL} 
                           answered={Object.keys(user.answers).length}
                           created={user.questions.length}
                           name={user.name} />
                )}
            </StyledLeaderBoard>
            
        )
    }
}

function mapStateToProps({users}){
    const usersArray = Object.keys(users).map((u) => users[u])
    let c = 0;
    while(c < usersArray.length){
        for(let i=1; i< usersArray.length; i++){
            if(Object.keys(usersArray[i].answers).length > Object.keys(usersArray[i-1].answers).length){
                const aux = usersArray[i - 1]
                usersArray[i-1] = usersArray[i]
                usersArray[i] = aux
            }
        }
        c++
    } 

    console.log(usersArray)
    

    return {
        usersArray
    }
}

export default connect(mapStateToProps)(LeaderBoard)
