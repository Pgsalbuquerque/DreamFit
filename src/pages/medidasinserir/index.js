import React from 'react';

import { Main, Input, Input2, Titulo, Invisible, TextInput, InputV, Button } from '../../styles/medidasinserir/styles';

function recompensainserir() {
  return (
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