import React from 'react';

import { Main, Input, Input2, Titulo, Invisible, TextInput, InputV, Button } from './styles';

function recompensainserir() {
  return (
      <Main>
          <Titulo>Inserir Recompensa</Titulo>
          <Input placeholder="Titulo"></Input>
          <Input placeholder="Descrição"></Input>
          <Invisible>
              <Input2>
                <TextInput>Quantidade: </TextInput>
                <InputV placeholder="quant"></InputV>
              </Input2>
              <Input2>
                <TextInput>valor: </TextInput>
                <InputV placeholder="uni"></InputV>
              </Input2>
          </Invisible>
          <Button>Enviar</Button>
      </Main>
  )
}

export default recompensainserir;