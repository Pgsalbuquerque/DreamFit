import React from 'react';

import { Treino, TituloTreino, SeriesTreino, DivSec } from '../../styles/treinos/styles';

function Treinos(props) {
  return (
        <Treino>
            <TituloTreino>{props.titulo}</TituloTreino>
            <DivSec>
              <SeriesTreino>{props.series}</SeriesTreino>
            </DivSec>
        </Treino>
  )
}

export default Treinos;