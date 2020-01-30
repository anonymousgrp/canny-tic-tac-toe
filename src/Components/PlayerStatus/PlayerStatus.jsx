import React, { Component } from 'react'
import './PlayerStatus.scss'
import { connect } from 'react-redux'
import { toggleTurn } from '../../redux/actions'

const PlayerStatus = (props) => {   
    return (
        <div className='PlayerStatusBox'>
            <div className={'PlayerStatus ' + (props.turn === -1 ? 'Active' : '')}>
                Player 1 <span className='StatusMark'>X</span>
            </div>
            <div className={'PlayerStatus ' + (props.turn === 1 ? 'Active' : '')}>
                Player 2 <span className='StatusMark'>O</span>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return state
}

const mapDispatchToProps = dispatch => {
    return {
        toggleTurn: () => dispatch(toggleTurn())
    }
}

export default PlayerStatus
