import React from 'react';

import { Main, Titulo, Form, InputRadio,TextoRadio, Input, Button,Grid  } from './styles';

import CardAluno from './CardAluno'

function busca() {
  return <Main>
      <Titulo>Buscar Aluno</Titulo>
      <Form>
            <InputRadio type="radio" id="nome" name="role" value="nome"></InputRadio>
            <TextoRadio for="nome">Nome</TextoRadio>
            <InputRadio type="radio" id="cpf" name="role" value="cpf"></InputRadio>
            <TextoRadio for="cpf">Cpf</TextoRadio>
            <InputRadio type="radio" id="email" name="role" value="email"></InputRadio>
            <TextoRadio for="email">Email</TextoRadio>
      </Form>
      <Input placeholder="Digite sua busca"></Input>
      <Button>Enviar</Button>
      <Grid>
        <CardAluno></CardAluno>
        <CardAluno></CardAluno>
        <CardAluno></CardAluno>
        <CardAluno></CardAluno>
        <CardAluno></CardAluno>
        <CardAluno></CardAluno>
        <CardAluno></CardAluno>
        <CardAluno></CardAluno>
        <CardAluno></CardAluno>
        <CardAluno></CardAluno>
      </Grid>
  </Main>
}

export default busca;