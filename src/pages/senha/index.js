import React, {useState} from 'react';

import { Main ,Container, Inputt, Buttonn, DivInvisible } from '../../styles/senha/styles';

import {useRouter} from 'next/router'

import { FaLock } from 'react-icons/fa'

import api from '../../api/index'

function recuperarsenha() {
    const routes = useRouter()
    const [senha, setSenha] = useState('')
    const [confirmacao, setConfirmacao] = useState('')

    async function Click() {
        const token = routes.query.token

        api.post(`/users/recovery-token/${token}`, {
            confirmNewPassword: confirmacao,
            newPassword: senha
        })
        .then(r => {
            alert(r.data)
            
        })
        .catch(e => {e.response.data.message})
    }

    return <Main>
      <Container>
          <DivInvisible>
            <FaLock size={18} color="#202024"></FaLock>
            <Inputt type="password" value={senha} onChange={e => setSenha(e.target.value)} placeholder="Nova senha"></Inputt>
          </DivInvisible>
          <DivInvisible style={{marginTop: '10px'}}>
            <FaLock size={18} color="#202024"></FaLock>
            <Inputt type="password" value={confirmacao} onChange={e => setConfirmacao(e.target.value)} placeholder="Confirme a nova senha"></Inputt>
          </DivInvisible>
        <Buttonn onClick={Click}>ENVIAR</Buttonn>
      </Container>
  </Main>;
}

export default recuperarsenha;