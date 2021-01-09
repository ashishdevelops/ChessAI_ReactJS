import React from 'react'
import Piece from '../Piece/Piece.js'
import './Board.css'
import Chess from 'chess.js'

class Board extends React.Component {

    constructor(props){
      super(props);
      this.state = {chosenPiece : '', prevSquare:'', prevRef:null};
      this.referencesMap = new Map();
      this.game = new Chess();
    }

    renderSquare(loc) {
      let sqrRef = React.createRef();
      return( 
        <div className='Square' onClick= {() => {

          console.log(`prev: ${this.state.prevSquare.toLowerCase()}, End: ${loc.toLowerCase()}`);

          if(this.state.chosenPiece != '' && this.game.move({from:this.state.prevSquare.toLowerCase(), to:loc.toLowerCase()})){
            sqrRef.current.setState({piece:this.state.chosenPiece})
            this.setState({chosenPiece:''});
            this.setState({prevSquare: ''})
            
          }else if(this.state.chosenPiece == ''){
            this.setState({chosenPiece:sqrRef.current.state.piece});
            this.setState({prevSquare: loc})
            this.setState({piece:''})
          }else{
            console.log('invalid ')
            this.setState({chosenPiece:''})
            this.setState({prevSquare:''})
          }
          console.log(this.game.ascii())
          
        }}>
          <Piece value={loc} ref={sqrRef}/>
        </div>
        )
    }

    render() {
      return (
        <div className='Board'>
          <div className='board-row'>
            {this.renderSquare('A8')}
            {this.renderSquare('B8')}
            {this.renderSquare('C8')}
            {this.renderSquare('D8')}
            {this.renderSquare('E8')}
            {this.renderSquare('F8')}
            {this.renderSquare('G8')}
            {this.renderSquare('H8')}
          </div>

          <div className='board-row'>
            {this.renderSquare('A7')}
            {this.renderSquare('B7')}
            {this.renderSquare('C7')}
            {this.renderSquare('D7')}
            {this.renderSquare('E7')}
            {this.renderSquare('F7')}
            {this.renderSquare('G7')}
            {this.renderSquare('H7')}
          </div>

          <div className='board-row'>
            {this.renderSquare('A6')}
            {this.renderSquare('B6')}
            {this.renderSquare('C6')}
            {this.renderSquare('D6')}
            {this.renderSquare('E6')}
            {this.renderSquare('F6')}
            {this.renderSquare('G6')}
            {this.renderSquare('H6')}
          </div>

          <div className='board-row'>
            {this.renderSquare('A5')}
            {this.renderSquare('B5')}
            {this.renderSquare('C5')}
            {this.renderSquare('D5')}
            {this.renderSquare('E5')}
            {this.renderSquare('F5')}
            {this.renderSquare('G5')}
            {this.renderSquare('H5')}
          </div>

          <div className='board-row'>
            {this.renderSquare('A4')}
            {this.renderSquare('B4')}
            {this.renderSquare('C4')}
            {this.renderSquare('D4')}
            {this.renderSquare('E4')}
            {this.renderSquare('F4')}
            {this.renderSquare('G4')}
            {this.renderSquare('H4')}
          </div>

          <div className='board-row'>
            {this.renderSquare('A3')}
            {this.renderSquare('B3')}
            {this.renderSquare('C3')}
            {this.renderSquare('D3')}
            {this.renderSquare('E3')}
            {this.renderSquare('F3')}
            {this.renderSquare('G3')}
            {this.renderSquare('H3')}
          </div>

          <div className='board-row'>
            {this.renderSquare('A2')}
            {this.renderSquare('B2')}
            {this.renderSquare('C2')}
            {this.renderSquare('D2')}
            {this.renderSquare('E2')}
            {this.renderSquare('F2')}
            {this.renderSquare('G2')}
            {this.renderSquare('H2')}
          </div>

          <div className='board-row'>
            {this.renderSquare('A1')}
            {this.renderSquare('B1')}
            {this.renderSquare('C1')}
            {this.renderSquare('D1')}
            {this.renderSquare('E1')}
            {this.renderSquare('F1')}
            {this.renderSquare('G1')}
            {this.renderSquare('H1')}
          </div>
        </div>
      );
    }
  }

export default Board;