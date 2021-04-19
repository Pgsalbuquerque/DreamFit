import React from 'react';

import Card from './card'

import {FaInfoCircle} from 'react-icons/fa'
import Header from '../_headergeral'
import { Main, LeftDiv, DivTransparente, Grid, Image, InfosDiv, InfosText,
TextHorarios } from './styles';

function horarios() {
  return (
  <>
    <Header tela="HORARIOS" positionF></Header>
    <Main>
      <LeftDiv>
        <DivTransparente>
          <Image src="horarios2.svg"></Image>
            <TextHorarios>MARQUE SEU HORÁRIO</TextHorarios>
          <InfosDiv>
            <FaInfoCircle/>
            <InfosText>Você pode marcar 2 treinos por dia</InfosText>
          </InfosDiv>
        </DivTransparente>
      </LeftDiv>
      <Grid>
        <Card marcar></Card>
        <Card marcar></Card>
        <Card></Card>
        <Card marcar></Card>
        <Card></Card>
        <Card marcar></Card>
        <Card marcar></Card>
        <Card marcar></Card>
        <Card marcar></Card>
        <Card marcar></Card>
        <Card marcar></Card>
      </Grid>
    </Main>
  </>
  )
}

export default horarios;