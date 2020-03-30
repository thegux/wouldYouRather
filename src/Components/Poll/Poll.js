import React, {Component} from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar'
import {StyledPoll, StyledPollContent,
        StyledPollResult, StyledChoice} from './StyledPoll'

class Poll extends Component {

    render() {
        return(

            <StyledPoll>
                  <img
                    src={this.props.userAvatar}
                    alt={this.props.userName + "'s avatar'"}/>

                    <StyledPollContent>
                        <h4>Results</h4>

                        <StyledPollResult>
                            <h6>Would you rather {this.props.optionOne}?</h6>
                            <ProgressBar now={(this.props.votesOne/this.props.total)*100} style={{marginLeft: '5%', marginRight: '5%'}}/>
                            <p>{this.props.votesOne} out of {this.props.total} votes</p>
                            {this.props.choice === 'optionOne' && <StyledChoice>Your choice</StyledChoice>}
                        </StyledPollResult>

                        <StyledPollResult>
                            <h6>Would you rather {this.props.optionTwo}?</h6>
                            <ProgressBar now={(this.props.votesTwo/this.props.total)*100} style={{marginLeft: '5%', marginRight: '5%'}}/>
                            <p>{this.props.votesTwo} out of {this.props.total} votes</p>
                            {this.props.choice === 'optionTwo' && <StyledChoice>Your choice</StyledChoice>}
                        </StyledPollResult>

                        </StyledPollContent>

                </StyledPoll>


        )
    }
}



export default Poll
