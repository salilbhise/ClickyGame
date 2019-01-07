import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Card from './Components/Card/Card';

const characters = [
  {
    id: 0,
    name: 'thanos',
    img: 'https://cdn.vox-cdn.com/thumbor/Gba6nO4uV6xw_iOP8tnQI-YxfyA=/0x0:2048x1080/1200x800/filters:focal(571x183:897x509)/cdn.vox-cdn.com/uploads/chorus_image/image/60706099/thanos.0.jpg'
  },
  {
    id: 1,
    name: 'spider man',
    img: 'https://insomniac.games/wp-content/uploads/2018/09/Spider-Man_PS4_Selfie_Photo_Mode_LEGAL.jpg'
  },
  {
    id: 2, 
    name: 'iron man',
    img: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e0/Iron_Man_bleeding_edge.jpg/250px-Iron_Man_bleeding_edge.jpg'
  }
]

class App extends Component {
  state = {
    characters: characters,
    clicked: [],
    score: 0
  }
  handleClick = (id) => {
    if(!this.state.clicked.includes(id)){
      const newArray = this.shuffle(this.state.characters);
        this.setState({
          clicked: [...this.state.clicked, id],
          score: this.state.score + 1,
          characters: newArray
        })
    }else {
      alert("you lose")
    }
  }
  shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }

  render() {
    return (
      <div className="App">
      <Header score={this.state.score}/>
      <div className="content">
       {
         this.state.characters.map( char => {
           return <Card handleClick={this.handleClick} id={char.id} image={char.img} name={char.name}/>
         })
       }
      </div>
  
      </div>
    );
  }
}

export default App;
