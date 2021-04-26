import React, {useEffect, useState} from 'react';

import { Main, Input, Input2, Titulo, Invisible, TextInput, InputV, Button } from '../../styles/medidasinserir/styles';

import api from '../../api/index'

import {useRouter} from 'next/router'

import jwt from 'jsonwebtoken'


function recompensainserir() {
  const [render, setRender] = useState(false)
  const routes = useRouter()

  useEffect(async () => {
    const token = localStorage.getItem('tokendreamfit')
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

  return (
    render == false 
        ? <div></div>
        :
      <Main>
          <Titulo>Inserir Medidas</Titulo>
          <Input placeholder="Cpf"></Input>
          <Invisible>
              <Input2>
                <TextInput>Peso: </TextInput>
                <InputV placeholder="valor"></InputV>
              </Input2>
              <Input2>
                <TextInput>Braço: </TextInput>
                <InputV placeholder="valor"></InputV>
              </Input2>
          </Invisible>
          <Invisible>
              <Input2>
                <TextInput>Perna: </TextInput>
                <InputV placeholder="valor"></InputV>
              </Input2>
              <Input2>
                <TextInput>Cintura: </TextInput>
                <InputV placeholder="valor"></InputV>
              </Input2>
          </Invisible>
          <Invisible>
              <Input2>
                <TextInput>Quadril: </TextInput>
                <InputV placeholder="valor"></InputV>
              </Input2>
              <Input2>
                <TextInput>Peito: </TextInput>
                <InputV placeholder="valor"></InputV>
              </Input2>
          </Invisible>
          <Button>Enviar</Button>
      </Main>
  )
}

export default recompensainserir;