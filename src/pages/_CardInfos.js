import React from 'react';

import { Main, Titulo, Descricao, Icon } from './cardstyle';

function pages(props) {
  return (
      <Main>
          <Titulo>{props.titulo}</Titulo>
          <Icon src={props.imagePath}></Icon>
          <Descricao>{props.descricao}</Descricao>
      </Main>
  )
}

export default pages;