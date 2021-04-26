import React, { useState, useEffect } from 'react';

import { Main, Titulo, Form, InputRadio,TextoRadio, Input, Button,Grid  } from '../../styles/busca/styles';

import CardAluno from './CardAluno'

import {useRouter} from 'next/router'

import jwt from 'jsonwebtoken'

import api from '../../api/index'

function busca() {
  const [type, setType] = useState('Nome')
  const [search, setSearch] = useState('')
  const [data, setData] = useState([])
  const [render, setRender] = useState(false)
  const routes = useRouter()

  async function Click(){
    const token = localStorage.getItem('tokendreamfit')
    await api.get('/users/students',
     {headers: {"Authorization": token}, params: {type: type, search: search},})
    .then(r => setData(r.data))
    .catch(e => console.log(e.response))
  }

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

  return render == false 
        ? <div></div>
        :
        <Main>
            <Titulo>Buscar Aluno</Titulo>
            <Form>
                  <InputRadio type="radio" id="nome" name="role" onClick={() => setType('Nome')} value="nome"></InputRadio>
                  <TextoRadio for="nome" >Nome</TextoRadio>
                  <InputRadio type="radio" id="cpf" name="role" value="cpf" onClick={() => setType('Cpf')}></InputRadio>
                  <TextoRadio for="cpf">Cpf</TextoRadio>
                  <InputRadio type="radio" id="email" name="role" value="email" onClick={() => setType('Email')}></InputRadio>
                  <TextoRadio for="email">Email</TextoRadio>
            </Form>
            <Input placeholder="Digite sua busca" value={search} onChange={e => setSearch(e.target.value)}></Input>
            <Button onClick={Click}>Enviar</Button>
            <Grid>
              {data.map(user => <CardAluno key={user.uuid} nome={user.name} cpf = {user.cpf} email = {user.email} uuid = {user.uuid}></CardAluno>)}
            </Grid>
        </Main>
}

export default busca;