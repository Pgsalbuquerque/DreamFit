import React, {useState, useEffect} from 'react';

import { Grid, BlocoTreinos, Main, Planos, ImageTreino, OpacityDiv, TextoFicha,InfosDiv,
IconInfos, TextoInfos } from '../../styles/treinos/styles';

import {FaInfoCircle} from 'react-icons/fa'

import {useRouter} from 'next/router'

import jwt from 'jsonwebtoken'

import api from '../../api/index'

import Header from '../_headergeral'
import Treino from './CardTreino'

function treinos() {
  const [treinos, setTreinos] = useState({back:[], chest: [], leg: []})
  const routes = useRouter()
  const [render, setRender] = useState(false);

  useEffect(async () => {
    const token = localStorage.getItem('tokendreamfit')
    const uuid = localStorage.getItem('dreamfituuid')
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
    await api.get(`/users/exercises/${uuid}`, {headers: {"Authorization": token}})
    .then(r => {
      console.log(r.data)
      setTreinos(r.data)
    })
    .catch(e => alert(e.response.data.message))
  }, [])

  return (
    render == false 
        ? <div></div>
        :
    <>
      <Header tela="TREINOS"></Header>
      <Main>
      <Planos>
        <ImageTreino style={{background: 'url("/ficha1.png")', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
          <OpacityDiv>
            <TextoFicha>FICHA A</TextoFicha>
          </OpacityDiv>
        </ImageTreino>
            <BlocoTreinos>
              {treinos.back.map(e => <Treino titulo={e.name} series={e.reps}></Treino>)}
              {/* <Treino titulo="LEG 60" series="2x20"></Treino>
              <Treino titulo="HALTER" series="4x30"></Treino>
              <Treino titulo="INCLINAD" series="3x15"></Treino>
              <Treino titulo="FLEXORA" series="5x20"></Treino>
              <Treino titulo="FLEXORA" series="5x20"></Treino> */}
            </BlocoTreinos>
      </Planos>
      <Planos>
        <ImageTreino style={{background: 'url("/ficha2.png")', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
          <OpacityDiv>
            <TextoFicha>FICHA B</TextoFicha>
          </OpacityDiv>
        </ImageTreino>
        <BlocoTreinos>
              {treinos.leg.map(e => <Treino titulo={e.name} series={e.reps}></Treino>)}
              {/* <Treino titulo="LEG 45" series="4x15"></Treino>
              <Treino titulo="LEG 60" series="2x20"></Treino>
              <Treino titulo="HALTER" series="4x30"></Treino>
              <Treino titulo="INCLINAD" series="3x15"></Treino>
              <Treino titulo="FLEXORA" series="5x20"></Treino>
              <Treino titulo="FLEXORA" series="5x20"></Treino> */}
        </BlocoTreinos>
      </Planos>
      <Planos>
        <ImageTreino style={{background: 'url("/ficha3.png")', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
          <OpacityDiv>
            <TextoFicha>FICHA C</TextoFicha>
          </OpacityDiv>
        </ImageTreino>
        <BlocoTreinos>
              {treinos.chest.map(e => <Treino titulo={e.name} series={e.reps}></Treino>)}
              {/* <Treino titulo="LEG 45" series="4x15"></Treino>
              <Treino titulo="LEG 60" series="2x20"></Treino>
              <Treino titulo="HALTER" series="4x30"></Treino>
              <Treino titulo="INCLINAD" series="3x15"></Treino>
              <Treino titulo="FLEXORA" series="5x20"></Treino>
              <Treino titulo="FLEXORA" series="5x20"></Treino> */}
            </BlocoTreinos>
      </Planos>
      </Main>
      <InfosDiv>
        <IconInfos>
          <FaInfoCircle size={25}></FaInfoCircle>
        </IconInfos>
        <TextoInfos>Essa é uma sugestão de treino baseado nas suas medidas, caso queira um treino mais específico procure um de nossos profissionais.</TextoInfos>
      </InfosDiv>
    </>
    )
}

export default treinos;