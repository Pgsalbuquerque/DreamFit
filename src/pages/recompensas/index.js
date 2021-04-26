import React, {useEffect, useState} from 'react';

import HeaderGeral from '../_headergeral'
import {FaInfoCircle} from 'react-icons/fa'

import Card from './_card'

import jwt from 'jsonwebtoken'

import api from '../../api/index'

import { useRouter } from 'next/router'

import {Main, LeftDiv, Image, FitCoin, Coin, QtCoins, TextFitCoins, InfosDiv, InfosText,
Grid,DivTransparente} from '../../styles/recompensas/styles'

export default function Recompensas () {
    const routes = useRouter()
    const [render, setRender] = useState(false);
    
    useEffect(async () => {
        const uuid = localStorage.getItem('dreamfituuid')
        const token = localStorage.getItem('tokendreamfit')
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
          )}, [])

    return (
        render == false 
        ? <div></div>
        :
        <>
            <HeaderGeral tela="RECOMPENSAS" positionF={true}/>
            <Main>
                <LeftDiv>
                    <DivTransparente>
                        <Image src="/recompensas1.png"/>
                        <FitCoin>
                            <Coin src="/coin.png"/>
                            <QtCoins >250</QtCoins>
                        </FitCoin>
                        <TextFitCoins >Fitcoins</TextFitCoins>
                        <InfosDiv>
                            <FaInfoCircle/>
                        <InfosText>Ganhe 1 fitcoin a cada treino</InfosText>
                        </InfosDiv>
                    </DivTransparente>
                </LeftDiv>
                    <Grid>
                        <Card titulo="Bolsa Adidas"/>
                        <Card titulo="Bolsa Adidas"/>
                        <Card titulo="Bolsa Adidas"/>
                        <Card titulo="Bolsa Adidas"/>
                        <Card titulo="Bolsa Adidas"/>
                        <Card titulo="Bolsa Adidas"/>
                        <Card titulo="Bolsa Adidas"/>
                        <Card titulo="Bolsa Adidas"/>
                        <Card titulo="Bolsa Adidas"/>
                        <Card titulo="Bolsa Adidas"/>
                        <Card titulo="Bolsa Adidas"/>
                        <Card titulo="Bolsa Adidas"/>
                        <Card titulo="Bolsa Adidas"/>
                        <Card titulo="Bolsa Adidas"/>
                        <Card titulo="Bolsa Adidas"/>
                        <Card titulo="Bolsa Adidas"/>
                    </Grid>
            </Main>
        </>
    )
}
