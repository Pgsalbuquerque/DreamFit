import React, {useEffect, useState} from 'react';

import { Main, Input, Input2, Titulo, Invisible, TextInput, InputV, Button } from '../../styles/medidasinserir/styles';

import api from '../../api/index'

import {useRouter} from 'next/router'

import jwt from 'jsonwebtoken'


function recompensainserir() {
  const [render, setRender] = useState(false)
  const routes = useRouter()
  const [cpf, setCpf] = useState('')
  const [peso, setPeso] = useState('')
  const [braco, setBraco] = useState('')
  const [perna, setPerna] = useState('')
  const [cintura, setCintura] = useState('')
  const [quadril, setQuadril] = useState('')


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

  async function Click () {
    const token = localStorage.getItem('tokendreamfit')
    api.put('users/measures', {
      arm_measurement: braco,
      belly_measurement: cintura,
      cpf: cpf,
      hip_measurement: quadril,
      leg_measurement: perna,
      weight: peso

    }, {headers: {"Authorization": token}})
    .then(r => alert('medidas inseridas com sucesso'))
    .catch(e => alert(e.response.data.message))
  }

  return (
    render == false 
        ? <div></div>
        :
      <Main>
          <Titulo>Inserir Medidas</Titulo>
          <Input placeholder="Cpf" value={cpf} onChange={e => setCpf(e.target.value)}></Input>
          <Invisible>
              <Input2>
                <TextInput>Peso: </TextInput>
                <InputV placeholder="valor" value={peso} onChange={e => setPeso(e.target.value)}></InputV>
              </Input2>
              <Input2>
                <TextInput>Braço: </TextInput>
                <InputV placeholder="valor" value={braco} onChange={e => setBraco(e.target.value)}></InputV>
              </Input2>
          </Invisible>
          <Invisible>
              <Input2>
                <TextInput>Perna: </TextInput>
                <InputV placeholder="valor" value={perna} onChange={e => setPerna(e.target.value)}></InputV>
              </Input2>
              <Input2>
                <TextInput>Cintura: </TextInput>
                <InputV placeholder="valor" value={cintura} onChange={e => setCintura(e.target.value)}></InputV>
              </Input2>
          </Invisible>
          <Invisible style={{justifyContent: 'center'}}>
              <Input2>
                <TextInput>Quadril: </TextInput>
                <InputV placeholder="valor" value={quadril} onChange={e => setQuadril(e.target.value)}></InputV>
              </Input2>
          </Invisible>
          <Button onClick={Click}>Enviar</Button>
      </Main>
  )
}

export default recompensainserir;