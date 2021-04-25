import React from 'react';

import { Card, Card1, Card2, Card3, TextCard, TextHorarioCard, VagasDiv, IconVagas,
TipoTreino, Button, TextButton } from '../../styles/horarios/styles';

import {FaUserFriends} from 'react-icons/fa'

import jwt from 'jsonwebtoken'
import {useRouter} from 'next/router'

import api from '../../api/index'

function card(props) {
    const routes = useRouter() 
    async function Click() {
        const token = localStorage.getItem('tokendreamfit')
        console.log(token)
        console.log(jwt.decode(token))
        api.post(`/classes/schedule/${props.idAula}`, {},
         {headers: {"Authorization": token}})
         .then(r => {
            alert(r.data.message)
            routes.reload()

         })
         .catch(e => {
             alert(e.response.data.message)
             routes.reload()
            })
  }

  async function Desmarcar() {
    const token = localStorage.getItem('tokendreamfit')
    api.delete(`/classes/schedule/${props.idAula}`,
    {headers: {"Authorization": token}})
    .then(r => {
        alert(r.data.message)
        routes.reload()
    })
    .catch(e => {
        alert(e.response.data.message)
        routes.reload()
    })
}

    return (
      <Card style={props.marcar ? {background: '#282628'} : {background: '#40128B'}}>
        <Card1>
            <TextCard>{props.treino}</TextCard>
        </Card1> 
        <Card2>
            <TextHorarioCard>{`${props.hourInit}/${props.hourFinish}`}</TextHorarioCard>
            <VagasDiv>
                <IconVagas>
                    <FaUserFriends />
                </IconVagas>
                <TextHorarioCard>{`${props.pessoas}/${props.total}`}</TextHorarioCard>
            </VagasDiv>
        </Card2>
        <Card3>
            <TipoTreino>{props.tipo}</TipoTreino>
            <Button onClick={props.marcar ? Click : Desmarcar} style={props.marcar ? {background: '#5A189A'} : {background: '#8F8E8F'}}>
                <TextButton>{props.marcar ? "RESERVAR" : "CANCELAR"}</TextButton>
            </Button>
        </Card3>
      </Card>
  );
}

export default card;