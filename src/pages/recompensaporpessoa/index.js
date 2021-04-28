import React, {useState, useEffect} from 'react';

import { Main ,Container, Inputt, Buttonn, DivInvisible, Grid } from '../../styles/recompensaporpessoa/styles';

import { FaUser } from 'react-icons/fa'

import Card from '../recompensas/_card'

import api from '../../api/index'

function recuperarsenha() {
  const [recompensas, setRecompensas] = useState([])
  const [cpf, setCpf] = useState('')
  const [render, setRender] = useState(false)

  async function Click2() {
    const token = localStorage.getItem('tokendreamfit')
    await api.get('/rewards/redeem',
     {headers: {"Authorization": token}, params: {cpf},})
    .then(r => setRecompensas(r.data))
    .catch(e => console.log(e.response))
  }

  useEffect(async () => {
    const token = localStorage.getItem('tokendreamfit')
    if (!token) {
        routes.push('login')
    }
    const data = jwt.decode(token.substring(7))
    console.log(data)
    await api.get('/users/token',{headers: {"Authorization": token}})
        .then(r => {
            if(r.data.status == 202) {
                if (data.role == 20){
                    setRender(true)
                } else {
                    alert('Você não tem permissão para acessar essa rota')
                    routes.push('/login')
                }
                
            } else if (r.data.status == 200) {
                localStorage.setItem('tokendreamfit', r.data.token)
                if (data.role == 20){
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
  }, [])

  return render == false 
  ? <div></div>
  :
  <Main>
      <Container>
          <DivInvisible>
            <FaUser size={18} color="#202024"></FaUser>
            <Inputt placeholder="Cpf" value={cpf} onChange={e => setCpf(e.target.value)}></Inputt>
          </DivInvisible>
        <Buttonn onClick={Click2}>ENVIAR</Buttonn>
      </Container>
      <Grid>
        {recompensas.map((elemento, index) => <Card key={index} list cpf={cpf} id={elemento.reward.id} titulo={elemento.reward.title} descricao={elemento.reward.description} quantidade={elemento.quantity} valor={elemento.reward.price} image={elemento.reward.picture}></Card>)}
      </Grid>
  </Main>;
}

export default recuperarsenha;