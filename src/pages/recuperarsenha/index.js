import React, {useState} from 'react';

import { Main ,Container, Inputt, Buttonn, DivInvisible } from '../../styles/novasenha/styles';

import { FaUser } from 'react-icons/fa'

import api from '../../api/index'

function recuperarsenha() {
  const [email, setEmail] = useState('')

  async function Click(){
    api.post('/users/recovery-password', {
      email,
    })
    .then(r => alert('Verifique seu email'))
    .catch(e => alert(e.response.data.message))
  }

  return <Main>
      <Container>
          <DivInvisible>
            <FaUser size={18} color="#202024"></FaUser>
            <Inputt type='email' placeholder="Seu email aqui" value={email} onChange={e => setEmail(e.target.value)}></Inputt>
          </DivInvisible>
        <Buttonn onClick={Click}>ENVIAR</Buttonn>
      </Container>
  </Main>;
}

export default recuperarsenha;