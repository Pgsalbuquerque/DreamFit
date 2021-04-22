import React from 'react';

import { Main, Titulo, Grid, Card, TituloCard, Image } from './styles';

function dashboard() {
  return (
      <Main>
        <Titulo>Dashboard</Titulo>
        <Grid>
            <Card href="/recompensainserir" >
                <TituloCard>Inserir recompensa</TituloCard>
                <Image src="recompensainserir.svg"></Image>
            </Card>
            <Card href="/cadastro" >
                <TituloCard>Cadastrar usuário </TituloCard>
                <Image src="cadastrarusuario.svg"></Image>
            </Card>
            <Card href="/medidasinserir" >
                <TituloCard>Atualizar medidas</TituloCard>
                <Image src="atualizarmedidas.svg"></Image>
            </Card>
            <Card href="/publicarfeed" >
                <TituloCard >Postar no feed</TituloCard>
                <Image style={{width: "80%", marginLeft: "40px"}} src="postarfeed.svg"></Image>
            </Card>
        </Grid>
      </Main>
  )
}

export default dashboard;