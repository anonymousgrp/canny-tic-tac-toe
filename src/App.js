import React, { Component } from 'react'
import './App.scss'
import Board from './Components/Board/Board'
import PlayerStatus from './Components/PlayerStatus/PlayerStatus'

class App extends Component {
  state = {
    turn: -1,
    reset: false
  }

  onTurnChange = (turn) => {   
    this.setState({turn})
  }

  onResetDone = () => {
    this.setState({reset: false})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className='Logo'>Canny - Tic Tac Toe</h1>
        </header>
        <section className='GameBox'>
          <PlayerStatus turn={this.state.turn}/>
          <Board onTurnChange={this.onTurnChange} reset={this.state.reset} onResetDone={this.onResetDone}/>
          <a href='#' className='Btn' onClick={() => {
            console.log("Reset on root");
            
            this.setState({turn: -1, reset: true})
          }}>Restart Game</a>
        </section>
      </div>
    )
  }
}

export default App
