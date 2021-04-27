import React, {useEffect, useState} from 'react';

import { Main, Titulo, Grid, Card, TituloCard, Image } from '../../styles/dashboard/styles';

import {useRouter} from 'next/router'

import jwt from 'jsonwebtoken'

import api from '../../api/index'

function dashboard() {
    const routes = useRouter()
    const [render, setRender] = useState(false)

    useEffect(async () => {
        const token = localStorage.getItem('tokendreamfit')
        if (!token) {
            routes.push('login')
        }
        const data = jwt.decode(token.substring(7))
        console.log(data)
        await api.get('/users/token',{headers: {"Authorization": token}})
            .then(r => {
                if(r.data.status == 202) {
                    if (data.role == 20){
                        setRender(true)
                    } else {
                        alert('Você não tem permissão para acessar essa rota')
                        routes.push('/login')
                    }
                    
                } else if (r.data.status == 200) {
                    localStorage.setItem('tokendreamfit', r.data.token)
                    if (data.role == 20){
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
      }, [])

    return (
        render == false 
        ? <div></div>
        :
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
                <Card href="/acessoacademia" >
                    <TituloCard >Acesso a academia</TituloCard>
                    <Image style={{width: "80%", marginLeft: "40px"}} src="postarfeed.svg"></Image>
                </Card>
                <Card href="/recompensaporpessoa" >
                    <TituloCard >Recompensa por pessoa</TituloCard>
                    <Image style={{width: "80%", marginLeft: "40px"}} src="postarfeed.svg"></Image>
                </Card>
            </Grid>
        </Main>
  )
}

export default dashboard;