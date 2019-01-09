import React, {
  Component
} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Card from './Components/Card/Card';


const characters = [{
    id: 0,
    name: 'Justice League',
    img: 'https://icdn2.digitaltrends.com/image/justice-league-batman.jpg'
  },
  {
    id: 1,
    name: 'Batman',
    img: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/09/27/14/batman-1989.jpg?w968h681'
  },
  {
    id: 2,
    name: 'Batman and Robin',
    img: 'http://assets1.ignimgs.com/2014/10/13/clooneybatmanjpg-80068a_1280w.jpg'
  },
  {
    id: 3,
    name: 'Batman Forever',
    img: 'https://vignette.wikia.nocookie.net/batman/images/b/b8/Batman-Forever-batman-forever-23673181-640-384.png/revision/latest?cb=20170605105614'
  },
  {
    id: 4,
    name: 'Batman Begins',
    img: 'https://pmcvariety.files.wordpress.com/2013/08/batman-begins-christian-bale.jpg?w=1000&h=563&crop=1'
  },

]

class App extends Component {
  state = {
    characters: characters,
    clicked: [],
    score: 0
  }
  handleClick = (id) => {
    if (!this.state.clicked.includes(id)) {
      const newArray = this.shuffle(this.state.characters);
      this.setState({
        clicked: [...this.state.clicked, id],
        score: this.state.score + 1,
        characters: newArray
      })
    } else {
      alert("you lose")
    }
  }
  shuffle(array) {
    var currentIndex = array.length,
      temporaryValue, randomIndex;

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
    return ( <
      div className = "App" >
      <
      Header score = {
        this.state.score
      }
      /> <
      div className = "content" > {
        this.state.characters.map(char => {
          return <Card handleClick = {
            this.handleClick
          }
          id = {
            char.id
          }
          image = {
            char.img
          }
          name = {
            char.name
          }
          />
        })
      } <
      /div>

      <
      /div>
    );
  }

}

export default App;