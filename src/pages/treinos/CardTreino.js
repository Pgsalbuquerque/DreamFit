import React from 'react';

import { Treino, TituloTreinoImpar, SeriesTreinoImpar, TituloTreinoPar, SeriesTreinoPar } from './styles';

function Treinos(props) {
  return (
      props.impar ? 
        <Treino>
            <TituloTreinoImpar>{props.titulo}</TituloTreinoImpar>
            <SeriesTreinoImpar>{props.series}</SeriesTreinoImpar>
        </Treino>
        :
        <Treino>
            <TituloTreinoPar>{props.titulo}</TituloTreinoPar>
            <SeriesTreinoPar>{props.series}</SeriesTreinoPar>
        </Treino>
  )
}

export default Treinos;