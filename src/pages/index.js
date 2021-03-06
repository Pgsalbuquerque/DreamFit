import React, {useState, useEffect} from 'react';

import {FaArrowLeft, FaArrowRight} from 'react-icons/fa'

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import { Image, DivCarousel, Main, DivHorariosInvisible,DivHorarios, DivInfosInvisible,
DivInfos, DivCards, Footer,Textinho, DivLocal,Localizacao, Icon, DivMaior, DivMenor,
ImageHorarios,TituloHorario, DescHorarios, DivDesc, Div20, Div80, CardsPlanos,
 DescPlanos, TextPlanos, DivTextPlanos, TextPlanos2,DivEncapsulamento  } from '../styles/styles'

import { useRouter } from 'next/router'

import jwt from 'jsonwebtoken'
 
import api from '../api/index'

import Header from './_headerinfos'
import Card from './_CardInfos'
import CardPlano from './_CardPlanos'

export default function Index () {
    const [render, setRender] = useState(false)
    const routes = useRouter()

    useEffect(async () => {
        var token = localStorage.getItem('tokendreamfit')
        if (!token) {
            token = ''
        }
        const data = jwt.decode(token.substring(7))
        await api.get('/users/token',{headers: {"Authorization": token}})
        .then(r => {
            if(r.data.status == 202) {
                if (data.role == 20) {
                    routes.push('dashboard')
                } else if (data.role == 40) {
                    routes.push('perfil')
                } else {
                    routes.push('horarios')
                }
            } else if (r.data.status == 200) {
                localStorage.setItem('tokendreamfit', r.data.token)
                if (data.role == 20) {
                    routes.push('dashboard')
                } else if (data.role == 40) {
                    routes.push('perfil')
                }else {
                    routes.push('horarios')
                }
            }
        })
        .catch( e => {
            setRender(true)
        }
        )
      }, [])

    return (
        render == false 
        ? <div></div>
        :
        <Main>
            <Header/>
            <DivCarousel>
                <Carousel interval={3000} autoPlay infiniteLoop showStatus={false} >
                    <Image src="carousel1.png"></Image>
                    <Image src="carousel4.png"></Image>
                    <Image src="carousel6.jpg"></Image>
                </Carousel>
            </DivCarousel>
            <DivTextPlanos>
                <DivEncapsulamento>
                    <TextPlanos>Escolha</TextPlanos> <TextPlanos2>seu plano</TextPlanos2>
                </DivEncapsulamento>
                <DescPlanos>Temos muscula????o. aer??bica entre outros asdas das das da sd as da sdasdasdasda sdasdas</DescPlanos>
            </DivTextPlanos>
            <CardsPlanos>
                <CardPlano nome="DREAM" dream valor="R$ 99,90"></CardPlano>
                <CardPlano nome="PARADISE" valor="R$ 169,90"></CardPlano>
            </CardsPlanos>
            <DivInfosInvisible>
                <DivInfos>
                    <DivCards>
                        <Card imagePath="card1.svg" titulo="Desinfec????o" descricao="Desinfectamos toda a academia de 2 a 3 vezes por dia"></Card>
                        <Card imagePath="card2.svg" titulo="Agende seu hor??rio" descricao="Para evitar aglomera????es o agendamento de hor??rio ?? obrigat??rio"></Card>
                        <Card imagePath="card3.svg" titulo="Uso de m??scara" descricao="O uso da m??scara ?? obrigat??rio. Toda equipe e alunos usar?? m??scara"></Card>
                        <Card imagePath="card4.svg" titulo="Term??metro" descricao="Vamos medir sua temperatura na recep????o"></Card>
                        <Card imagePath="card5.svg" titulo="Higieniza????o" descricao="Alc??ol em gel gratuito por toda academia"></Card>
                    </DivCards>
                </DivInfos>
            </DivInfosInvisible>
            <Footer>
                <Textinho>Conhe??a a fam??lia DreamFit fa??a uma aula experimental</Textinho>
                <DivLocal>
                    <Icon src="alerticon.svg"></Icon>
                    <Localizacao href="https://www.google.com.br/maps/place/Rua+Gravat%C3%A1/@-8.2191053,-35.7515962,15z/data=!4m5!3m4!1s0x7aa25207efea7b7:0x911b6cde68677d48!8m2!3d-8.2159077!4d-35.7408589" target="_blank">Rua Tal bairro tal, n??mero 0</Localizacao>
                </DivLocal>
            </Footer>
            
        </Main>
    )
} 


