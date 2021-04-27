import React from 'react';

import { Main ,Container, Inputt, Buttonn, DivInvisible } from '../../styles/novasenha/styles';

import { FaUser } from 'react-icons/fa'

function recuperarsenha() {
  return <Main>
      <Container>
          <DivInvisible>
            <FaUser size={18} color="#202024"></FaUser>
            <Inputt placeholder="Seu email aqui"></Inputt>
          </DivInvisible>
        <Buttonn>ENVIAR</Buttonn>
      </Container>
  </Main>;
}

export default recuperarsenha;