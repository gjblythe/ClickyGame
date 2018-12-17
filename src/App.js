import React, { Component } from 'react';
import Title from "./components/Title";
import Wrapper from "./components/Wrapper";
import Image from "./components/Images";
import pixel from "./Pixel.json";
import Field from "./components/Field";

class App extends Component {

  state ={
    pixel
  }

  render() {
    return (
   <Wrapper>
     <Title>Clicky Game!</Title>
     <Field>
     {this.state.pixel.map(char => (
     <Image
     id={char.id}
     name={char.name}
     src={char.src}
     />
     ))}
     </Field>
   </Wrapper>
    );
  }
}

export default App;
