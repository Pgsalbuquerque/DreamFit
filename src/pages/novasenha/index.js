import React, {useState, useEffect} from 'react';

import { Main ,Container, Inputt, Buttonn, DivInvisible } from '../../styles/recupersenha/styles';

import { FaLock } from 'react-icons/fa'

import jwt from 'jsonwebtoken'

import api from '../../api/index'

function recuperarsenha() {
  const [atual, setAtual] = useState('')
  const [senha, setSenha] = useState('')
  const [confirmacao, setConfirmacao] = useState('')
  const [render, setRender] = useState(false)

  async function Click() {
    const token = localStorage.getItem('tokendreamfit')

    api.put(`/users/password`, {
      currentPassword: atual,
      confirmNewPassword: confirmacao,
      newPassword: senha
    }, {headers: {"Authorization": token}})
    .then(r => alert('Senha alterada com sucesso'))
    .catch(e => alert(e.response.data.message))
  }

  useEffect(async () => {
        const token = localStorage.getItem('tokendreamfit')
        if (!token) {
            routes.push('login')
        }
        const data = jwt.decode(token.substring(7))
        await api.get('/users/token',{headers: {"Authorization": token}})
            .then(r => {
                if(r.data.status == 202) {
                    if (data.role != 20){
                        setRender(true)
                    } else {
                        alert('Você não tem permissão para acessar essa rota')
                        routes.push('/login')
                    }
                    
                } else if (r.data.status == 200) {
                    localStorage.setItem('tokendreamfit', r.data.token)
                    if (data.role != 20){
                        setRender(true)
                    } else {
                        alert('Você não tem permissão para acessar essa rota')
                        routes.push('/login')
                    }
                }
            })
            .catch( e => {
                routes.push('/login')
            }
            )
  },[])

  return render == false 
  ? <div></div>
  :
  <Main>
      <Container>
          <DivInvisible>
            <FaLock size={18} color="#202024"></FaLock>
            <Inputt type="password" value={atual} onChange={e => setAtual(e.target.value)} placeholder="Senha atual"></Inputt>
          </DivInvisible>
          <DivInvisible style={{marginTop: '10px'}}>
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