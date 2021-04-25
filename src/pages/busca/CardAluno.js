import React from 'react';

import { Card, InfoText } from '../../styles/busca/styles';

import { useRouter} from 'next/router'

function busca(props) {

  const routes = useRouter()

  function Click(){
    routes.push({
      pathname: '/cadastrotreino',
      query: { uuid: props.uuid },
    })
  }

  return <Card onClick={Click}>
      <InfoText>{props.nome}</InfoText>
      <InfoText>{props.email}</InfoText>
      <InfoText>{props.cpf}</InfoText>
  </Card>;
}

export default busca;