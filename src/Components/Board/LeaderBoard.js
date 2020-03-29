import React, {Component} from 'react';
import Board from './Board';
import {connect} from 'react-redux'


class LeaderBoard extends Component {
    render(){
        return(

            <div style={{marginTop:'5%'}}>
                {this.props.usersArray.map((user) => 
                    <Board userAvatar={user.avatarURL}
                           key={user.id} 
                           answered={Object.keys(user.answers).length}
                           created={user.questions.length}
                           name={user.name} />
                )}
            </div>

            
        )
    }
}

function mapStateToProps({users}){
    const usersArray = Object.keys(users).map((u) => users[u])
    let c = 0;
    while(c < usersArray.length){
        for(let i=1; i< usersArray.length; i++){
            const totalFirst = Object.keys(usersArray[i].answers).length + usersArray[i].questions.length
            const totalSecond = Object.keys(usersArray[i-1].answers).length + usersArray[i-1].questions.length
            if(totalFirst > totalSecond ){
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
