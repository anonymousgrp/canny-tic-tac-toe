import React, { Component } from 'react'
import './Board.scss'

export default class Board extends Component {

    constructor(props) {
        super(props)
        this.state = {
            turn: -1,
            prevTurns: this.generateEmptyTurns(),
            winPlayer: 0,
            winModel: false
        }
        this.winningCombination = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]
    }

    componentDidUpdate() {
        if (this.props.reset) {            
            this.setState((prevState) => {
                return {
                    ...prevState,
                    prevTurns: this.generateEmptyTurns(),
                    winModel: false,
                    winningPlayer: 0,
                    turn: -1
                }
            }, () => {
                this.props.onResetDone()
            })           
        }
    }

    generateEmptyTurns = () => {
        const turns = []
        for (let i = 0; i < 9; i++) {
            turns.push(' ')
        }
        return turns
    }

    boxClickHandler = (index) => {
        if (this.state.prevTurns[index] === ' ' && this.state.winPlayer === 0) {
            this.setState((prevState) => {
                const prevTurns = prevState.prevTurns
                prevTurns[index] = this.getSymbol()
                return {
                    turn: -prevState.turn,
                    prevTurns: [...prevTurns]
                }
            }, () => {
                this.props.onTurnChange(this.state.turn)
                const winningPlayer = this.getWinningPlayer()
                if (winningPlayer !== ' ') {
                    this.setState({
                        winPlayer: winningPlayer,
                        winModel: true
                    })
                }
            })
        }
    }

    getWinningPlayer = () => {
        for (let chance of this.winningCombination) {
            if (
                this.state.prevTurns[chance[0]] !== ' '
                &&
                this.state.prevTurns[chance[0]] === this.state.prevTurns[chance[1]]
                &&
                this.state.prevTurns[chance[1]] === this.state.prevTurns[chance[2]]) {
                return this.getRespectPlayer(this.state.prevTurns[chance[0]])
            }
        }

        return ' '
    }

    getRespectPlayer = (symbol) => symbol === 'X' ? 1 : 2

    getSymbol = () => this.state.turn === -1 ? 'X' : 'O'

    render() {
        return (
            <div className='Board'>
                <div className="Grid">
                    {this.state.prevTurns.map((data, index) => <div className='Box' key={index} onClick={() => this.boxClickHandler(index)}>{data}</div>)}
                </div>
                {this.state.winModel && <div className='Model'>
                    Player {this.state.winPlayer} Won!
                    <a onClick={() => {
                        this.setState({
                            winModel: false
                        })
                    }} className='CloseBtn Btn'>Close</a>
                </div>}
            </div>
        )
    }
}
