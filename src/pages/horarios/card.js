import React from 'react';

import { Card, Card1, Card2, Card3, TextCard, TextHorarioCard, VagasDiv, IconVagas,
TipoTreino, Button, TextButton } from './styles';

import {FaUserFriends} from 'react-icons/fa'

function card(props) {
  return (
      <Card style={props.marcar ? {background: '#282628'} : {background: '#40128B'}}>
        <Card1>
            <TextCard>Treino de musculação</TextCard>
        </Card1>
        <Card2>
            <TextHorarioCard>15:00-16:00</TextHorarioCard>
            <VagasDiv>
                <IconVagas>
                    <FaUserFriends />
                </IconVagas>
                <TextHorarioCard>24/30</TextHorarioCard>
            </VagasDiv>
        </Card2>
        <Card3>
            <TipoTreino>Musculação</TipoTreino>
            <Button style={props.marcar ? {background: '#5A189A'} : {background: '#8F8E8F'}}>
                <TextButton>{props.marcar ? "RESERVAR" : "CANCELAR"}</TextButton>
            </Button>
        </Card3>
      </Card>
  );
}

export default card;