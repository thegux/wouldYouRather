import React, {Component} from 'react';
import {StyledBoard} from './StyledBoard'

export default class Board extends Component {

    render() {

        return(
            <StyledBoard>

                    <img
                            src={this.props.userAvatar}
                            alt={this.props.name + " avatar"}/>

                    <div>
                        <h3>{this.props.name}</h3>
                    </div>

                    <div>
                        Answered Questions: {this.props.answered} <br/>
                        Created Questions: {this.props.created}
                    </div>

                     <div>
                        <h4>Score: {this.props.answered + this.props.created}</h4>
                    </div>

            </StyledBoard>
        )
    }
}
