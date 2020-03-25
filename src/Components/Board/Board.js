import React, {Component} from 'react';
import {StyledBoard} from './StyledBoard'

export default class Board extends Component {
    render(){
        return(
            <StyledBoard>
                    <img 
                            src="https://miro.medium.com/max/1200/1*XLPUfIkmIA01h1D0ti-wJw.png" 
                            alt="React + Redux Logo"/>

                    <div>
                        <h3>Sarah Edo</h3>
                    </div>

                    <div>
                        Ansered Questions: 5 <br/>
                        Created Questions: 6
                    </div>

                     <div>
                            <h4>Score: 5</h4>
                    </div>                            
            </StyledBoard>
        )
    }
}