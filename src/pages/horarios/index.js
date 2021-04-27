import React, {useState, useEffect} from 'react';

import Card from './card'

import {FaInfoCircle} from 'react-icons/fa'
import Header from '../_headergeral'
import { Main, LeftDiv, DivTransparente, Grid, Image, InfosDiv, InfosText,
TextHorarios } from '../../styles/horarios/styles';

import jwt from 'jsonwebtoken'

import {useRouter} from 'next/router'

import api from '../../api/index'

function horarios() {

  const [hor, setHor] = useState([])
  const routes = useRouter()
  const [render, setRender] = useState(false)

  useEffect(async () => {
    const token = localStorage.getItem('tokendreamfit')
    if (!token) {
      routes.push('login')
  }
    const data = jwt.decode(token.substring(7))
    await api.get('/users/token',{headers: {"Authorization": token}})
        .then(r => {
            if(r.data.status == 202) {
              if (data.role != 20){
                setRender(true)
            } else {
                alert('Você não tem permissão para acessar essa rota')
                routes.push('/login')
            }
                
            } else if (r.data.status == 200) {
                localStorage.setItem('tokendreamfit', r.data.token)
                if (data.role != 20){
                  setRender(true)
              } else {
                  alert('Você não tem permissão para acessar essa rota')
                  routes.push('/login')
              }
              }
        })
        .catch( e => {
            routes.push('/login')
        }
      )

    await api.get('/classes/schedule', {headers: {"Authorization": token}})
    .then(r => {
      const x = new Date(r.data.classes[0].startDate)
      console.log(x)
      console.log(x.getHours())
      setHor(r.data.classes)
    })
    .catch(e => console.log(e))
  }, [])


  return (render == false 
        ? <div></div>
        :
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
              {hor.map(e => <Card idAula={e.id} marcar={!e.scheduled} hourInit={`${new Date(e.startDate).getHours() < 10 ? `0${new Date(e.startDate).getHours()}` : new Date(e.startDate).getHours()}:${new Date(e.startDate).getMinutes() < 10 ? `0${new Date(e.startDate).getMinutes()}` : new Date(e.startDate).getMinutes()}`} hourFinish={`${new Date(e.endDate).getHours() < 10 ? `0${new Date(e.endDate).getHours()}` : new Date(e.endDate).getHours()}:${new Date(e.endDate).getMinutes() < 10 ? `0${new Date(e.endDate).getMinutes()}` : new Date(e.endDate).getMinutes()}`} treino={e.className} pessoas={e.filled_vacancies} total={e.total_vacancies} tipo={e.type}></Card>)}
            </Grid>
          </Main>
        </>
  )
}

export default horarios;