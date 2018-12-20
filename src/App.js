import React from 'react';
import Title from "./components/Title";
import Wrapper from "./components/Wrapper";
import Image from "./components/Images";
import Button from "./components/Button";
import Game from  "./components/Game";
import pixel from "./Pixel.json";

class App extends React.Component {

  state ={
    title: "Clicky Game",
    pixel,
    name: "",
    score: 0,
    record: 0
  }
//ask for help
  //this sets state of clicked to true to help evaluate not currently working 
  clickedFunction = () => {
    // this.setState({ score: this.state.score + 1 });

     if (this.state.score > this.state.record)
     {
       this.setState({ record: this.state.score})
     };

    //  if (this.state.clicked === true)
    //  {
    //   this.setState({ score: 0 })
    //  };

  }



  //this makes a random array
  shuffleFunction = () => {
    var input = pixel;
     
    for (var i = input.length-1; i >=0; i--) {
     
        var randomIndex = Math.floor(Math.random()*(i+1)); 
        var itemAtIndex = input[randomIndex]; 
         
        input[randomIndex] = input[i]; 
        input[i] = itemAtIndex;
    }
    console.log(input)
    this.setState({ pixel: input})
}       

componentDidMount() {
  this.shuffleFunction();
}

//where the magic happens
testClick = (id) => {
  this.setState({ score: this.state.score + 1, name: this.state.name});
  console.log(this.state.name);
  if (this.state.score > this.state.record)
  {
    this.setState({ record: this.state.score})
  };
  this.shuffleFunction();
}

  render() {
    return (
   <Wrapper>
     <Title
     title={this.state.title}
     score={this.state.score}
     record={this.state.record}
     />
     
      
     <Game>
     {this.state.pixel.map(char => (
       <Button testClick={this.testClick}>
       <Image
     key={char.id}
     name={char.name}
     src={char.src}
     clicked={char.clicked}
     id={char.id}
     />
     </Button>
     ))}
    </Game>
   </Wrapper>
    );
  }
}

export default App;
