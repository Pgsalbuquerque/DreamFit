import React from 'react';

import { Main ,Container, Inputt, Buttonn, DivInvisible } from '../../styles/recupersenha/styles';

import { FaLock } from 'react-icons/fa'

function recuperarsenha() {
  return <Main>
      <Container>
          <DivInvisible>
            <FaLock size={18} color="#202024"></FaLock>
            <Inputt type="password" placeholder="Nova senha"></Inputt>
          </DivInvisible>
          <DivInvisible style={{marginTop: '10px'}}>
            <FaLock size={18} color="#202024"></FaLock>
            <Inputt type="password" placeholder="Confirme a nova senha"></Inputt>
          </DivInvisible>
        <Buttonn>ENVIAR</Buttonn>
      </Container>
  </Main>;
}

export default recuperarsenha;