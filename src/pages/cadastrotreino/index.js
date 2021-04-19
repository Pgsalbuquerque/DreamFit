import React from 'react';

import { Main, Titulo, Form,InputRadio, TextoRadio, Grid, Treino, InputNome, InputSec, Button } from './styles';

function cadastrotreino() {
  return (
    <Main>
            <Titulo>Cadastrar treino</Titulo>
            <Form>
                <InputRadio type="radio" id="peito" name="role" value="peito"></InputRadio>
                <TextoRadio for="peito">Peito</TextoRadio>
                <InputRadio type="radio" id="perna" name="role" value="perna"></InputRadio>
                <TextoRadio for="perna">Perna</TextoRadio>
                <InputRadio type="radio" id="costa" name="role" value="costa"></InputRadio>
                <TextoRadio for="costa">Costa</TextoRadio>
            </Form>
            <Grid>
                <Treino>
                    <InputNome placeholder="Nome do treino"></InputNome>
                    <InputSec placeholder="Seções (2x10)"></InputSec>
                </Treino>
                <Treino>
                    <InputNome placeholder="Nome do treino"></InputNome>
                    <InputSec placeholder="Seções (2x10)"></InputSec>
                </Treino>
                <Treino>
                    <InputNome placeholder="Nome do treino"></InputNome>
                    <InputSec placeholder="Seções (2x10)"></InputSec>
                </Treino>
                <Treino>
                    <InputNome placeholder="Nome do treino"></InputNome>
                    <InputSec placeholder="Seções (2x10)"></InputSec>
                </Treino>
                <Treino>
                    <InputNome placeholder="Nome do treino"></InputNome>
                    <InputSec placeholder="Seções (2x10)"></InputSec>
                </Treino>
                <Treino>
                    <InputNome placeholder="Nome do treino"></InputNome>
                    <InputSec placeholder="Seções (2x10)"></InputSec>
                </Treino>
            </Grid>
            <Button>Enviar</Button>
    </Main>
  )
}

export default cadastrotreino;