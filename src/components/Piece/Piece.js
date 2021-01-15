import React from 'react'
import './Piece.css'

//IMAGES
import black_king from '../../images/black_king.svg'
import black_queen from '../../images/black_queen.svg'
import black_rook from '../../images/black_rook.svg'
import black_bishop from '../../images/black_bishop.svg'
import black_knight from '../../images/black_knight.svg'
import black_pawn from '../../images/black_pawn.svg'

import white_king from '../../images/white_king.svg'
import white_queen from '../../images/white_queen.svg'
import white_rook from '../../images/white_rook.svg'
import white_bishop from '../../images/white_bishop.svg'
import white_knight from '../../images/white_knight.svg'
import white_pawn from '../../images/white_pawn.svg'
import no_piece from '../../images/1x1.png'



class Piece extends React.Component{

    constructor(props){
        super(props)
        
        //pawns
        if(this.props.value.includes('2')){
            this.state = {piece: 'P'}; //white
        }
        else if(this.props.value.includes('7')){
            this.state = {piece: 'p'}; //black
        }

        //rooks
        else if(this.props.value.includes('1') && (this.props.value.includes('A') || this.props.value.includes('H'))){
            this.state = {piece: 'R'}; //white
        }
        else if(this.props.value.includes('8') && (this.props.value.includes('A') || this.props.value.includes('H'))){
            this.state = {piece: 'r'}; //black
        }

        //knight
        else if(this.props.value.includes('1') && (this.props.value.includes('B') || this.props.value.includes('G'))){
            this.state = {piece: 'N'}; //white
        }
        else if(this.props.value.includes('8') && (this.props.value.includes('B') || this.props.value.includes('G'))){
            this.state = {piece: 'n'}; //black
        }

        //knight
        else if(this.props.value.includes('1') && (this.props.value.includes('C') || this.props.value.includes('F'))){
            this.state = {piece: 'B'}; //white
        }
        else if(this.props.value.includes('8') && (this.props.value.includes('C') || this.props.value.includes('F'))){
            this.state = {piece: 'b'}; //black
        }

        //Queen
        else if(this.props.value === 'D1'){
            this.state = {piece: 'Q'}; //white
        }
        else if(this.props.value === 'D8'){
            this.state = {piece: 'q'}; //white
        }

        //King
        else if(this.props.value === 'E1'){
            this.state = {piece: 'K'}; //white
        }
        else if(this.props.value === 'E8'){
            this.state = {piece: 'k'}; //white
        }

        else{
            this.state = {piece: ''};
        }
        
    }

    render(){
      let img_src = no_piece;
      if(this.state.piece === 'P'){
        img_src = white_pawn;
      }
      else if(this.state.piece === 'p'){
        img_src = black_pawn;
      }
      else if(this.state.piece === 'B'){
        img_src = white_bishop;
      }
      else if(this.state.piece === 'b'){
        img_src = black_bishop;
      }
      else if(this.state.piece === 'N'){
        img_src = white_knight;
      }
      else if(this.state.piece === 'n'){
        img_src = black_knight;
      }
      else if(this.state.piece === 'R'){
        img_src = white_rook;
      }
      else if(this.state.piece === 'r'){
        img_src = black_rook;
      }
      else if(this.state.piece === 'K'){
        img_src = white_king;
      }
      else if(this.state.piece === 'k'){
        img_src = black_king;
      }
      else if(this.state.piece === 'Q'){
        img_src = white_queen;
      }
      else if(this.state.piece === 'q'){
        img_src = black_queen;
      }

      return(
          <img src={img_src} style={{ height: 65, width: 65 }} alt={this.state.piece}/>
      )
    }
}

export default Piece