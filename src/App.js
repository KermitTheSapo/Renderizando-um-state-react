// crie um component de class com um state com uma array de nomes e mostre na tela com um h1

import React, {Component} from "react";
import bobEsponja from './img/bob.jpg'

class App extends Component {
  state = {
    nome: "Robert",
    idade: 18,
    comidaFavorita: "Lasanha",
    musica: ["riptide", "The Nights", "home"]
  }

  render() {
    return(
      <div>
        <h1>{this.state.nome}</h1>
        <h2>{this.state.idade}</h2>
        <h3>{this.state.comidaFavorita}</h3>
        <ul>
          <li>{this.state.musica[0]}</li>
          <li>{this.state.musica[1]}</li>
          <li>{this.state.musica[2]}</li>
        </ul>
        <img src={bobEsponja} alt="" />
      </div>
    ) 
  }
}

export default App;