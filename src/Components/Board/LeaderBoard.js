import React, {Component} from 'react';
import Board from './Board'
import {StyledLeaderBoard} from './StyledLeaderBoard'

export default class LeaderBoard extends Component {
    render(){
        return(
            <StyledLeaderBoard>
                <Board/>
            </StyledLeaderBoard>
            
        )
    }
}