import React, {useState} from 'react';

import { Main ,Container, Inputt, Buttonn, DivInvisible, Grid } from '../../styles/recompensaporpessoa/styles';

import { FaUser } from 'react-icons/fa'

import Card from '../recompensas/_card'

import api from '../../api/index'

function recuperarsenha() {
  const [recompensas, setRecompensas] = useState([])
  const [cpf, setCpf] = useState('')

  async function Click2() {
    const token = localStorage.getItem('tokendreamfit')
    await api.get('/rewards/redeem',
     {headers: {"Authorization": token}, params: {cpf},})
    .then(r => setRecompensas(r.data))
    .catch(e => console.log(e.response))
  }

  return <Main>
      <Container>
          <DivInvisible>
            <FaUser size={18} color="#202024"></FaUser>
            <Inputt placeholder="Cpf" value={cpf} onChange={e => setCpf(e.target.value)}></Inputt>
          </DivInvisible>
        <Buttonn onClick={Click2}>ENVIAR</Buttonn>
      </Container>
      <Grid>
        {recompensas.map((elemento, index) => <Card list cpf={cpf} key={elemento.reward.id} titulo={elemento.reward.title} descricao={elemento.reward.description} quantidade={elemento.quantity} valor={elemento.reward.price} image={elemento.reward.picture}></Card>)}
      </Grid>
  </Main>;
}

export default recuperarsenha;