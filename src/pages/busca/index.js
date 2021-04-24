import React, { useState } from 'react';

import { Main, Titulo, Form, InputRadio,TextoRadio, Input, Button,Grid  } from './styles';

import CardAluno from './CardAluno'

import {useRouter} from 'next/router'

import jwt from 'jsonwebtoken'

import api from '../../api/index'

function busca() {
  const [type, setType] = useState('Nome')
  const [search, setSearch] = useState('')
  const [data, setData] = useState([])

  async function Click(){
    const token = localStorage.getItem('tokendreamfit')
    await api.get('/users/students',
     {headers: {"Authorization": token}, params: {type: type, search: search},})
    .then(r => setData(r.data))
    .catch(e => console.log(e.response))
  }

  return <Main>
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