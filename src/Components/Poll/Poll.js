import React, {Component} from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar'
import {StyledPoll, StyledPollContent,
        StyledPollResult, StyledChoice} from './StyledPoll'

class Poll extends Component {
    render(){
        return(
                <StyledPoll>

                    <img 
                            src="https://miro.medium.com/max/1200/1*XLPUfIkmIA01h1D0ti-wJw.png" 
                            alt="React + Redux Logo"/>

                        <StyledPollContent> 
                            <h4>Results</h4> 
                            
                            <StyledPollResult>
                                <h6>Would you rather do that?</h6>
                                <ProgressBar now={60} style={{marginLeft: '5%', marginRight: '5%'}}/>
                                <p>2 out of 3 votes</p>
                            </StyledPollResult>

                            <StyledPollResult>
                                
                                <h6>Would you rather do that?</h6>
                                <ProgressBar now={60} style={{marginLeft: '5%', marginRight: '5%'}}/>
                                <p>2 out of 3 votes</p>
                                <StyledChoice>Your choice</StyledChoice>
                            </StyledPollResult>
                        

                        </StyledPollContent>
                        
                </StyledPoll>
        )
    }
}

export default Poll