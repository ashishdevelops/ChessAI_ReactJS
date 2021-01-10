import React from 'react'
import Piece from '../Piece/Piece.js'
import './Board.css'
import Chess from 'chess.js'

class Board extends React.Component {

    constructor(props){
      super(props);
      //this.state = {chosenPiece : '', prevSquare:'', prevRef:null};
      this.squares = ['A8','B8','C8','D8','E8','F8','G8','H8',
            'A7','B7','C7','D7','E7','F7','G7','H7',
            'A6','B6','C6','D6','E6','F6','G6','H6',
            'A5','B5','C5','D5','E5','F5','G5','H5',
            'A4','B4','C4','D4','E4','F4','G4','H4',
            'A3','B3','C3','D3','E3','F3','G3','H3',
            'A2','B2','C2','D2','E2','F2','G2','H2',
            'A1','B1','C1','D1','E1','F1','G1','H1']

      this.squares.forEach(thing => {
        this[`${thing}_ref`] = React.createRef()
       });
      console.log(this)
      
      this.chosenPiece = null;
      this.prevSquare = null;
      this.prevRef = null;
      this.referencesMap = new Map();
      this.game = new Chess();
    }

    renderSquare(loc) {
      let sqrRef = this[`${loc}_ref`];
      return( 
        <div id={loc} className='Square' onClick= {() => {

          console.log(`prev: ${this.prevSquare}, End: ${loc}`);
          console.log(`chosen piece: ${this.chosenPiece}`);

          if(this.chosenPiece != null && this.prevSquare != null && this.game.move({from:this.prevSquare.toLowerCase(), to:loc.toLowerCase()})){
            sqrRef.current.setState({piece:this.chosenPiece})
            this[`${this.prevSquare}_ref`].current.setState({piece:''});

            //castleing
            if(this.prevSquare == 'E1' && loc == 'G1'){
              //white king side
              this["F1_ref"].current.setState({piece:'R'});
              this["H1_ref"].current.setState({piece:''});
            }
            else if(this.prevSquare == 'E1' && loc == 'C1'){
              //white queen side
              this["D1_ref"].current.setState({piece:'R'});
              this["A1_ref"].current.setState({piece:''});
            }
            else if(this.prevSquare == 'E8' && loc == 'G8'){
              //black king side
              this["F8_ref"].current.setState({piece:'r'});
              this["H8_ref"].current.setState({piece:''});
            }
            else if(this.prevSquare == 'E8' && loc == 'C8'){
              //white queen side
              this["D8_ref"].current.setState({piece:'r'});
              this["A8_ref"].current.setState({piece:''});
            }
            

            document.getElementById(this.prevSquare).style.cssText = 'background: null;'

            this.chosenPiece = null;
            this.prevSquare = null;
          }else if(this.chosenPiece == null){
            this.chosenPiece = sqrRef.current.state.piece;
            this.prevSquare = loc;
            document.getElementById(loc).style.cssText = 'background: darkseagreen;'
          }else{
            console.log('invalid ');
            document.getElementById(this.prevSquare).style.cssText = 'background: null;'
            this.prevSquare = null;
            this.chosenPiece = null;
          }
          console.log(this.game.ascii())
          console.log(this.prevRef)
          
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