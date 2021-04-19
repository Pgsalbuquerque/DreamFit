import React from 'react';

import {FaArrowLeft, FaArrowRight} from 'react-icons/fa'

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import { Image, DivCarousel, Main, DivHorariosInvisible,DivHorarios, DivInfosInvisible,
DivInfos, DivCards, Footer,Textinho, DivLocal,Localizacao, Icon, DivMaior, DivMenor,
ImageHorarios,TituloHorario, DescHorarios, DivDesc, Div20, Div80, CardsPlanos,
 DescPlanos, TextPlanos, DivTextPlanos, TextPlanos2,DivEncapsulamento  } from './styles'

import Header from './_headerinfos'
import Card from './_CardInfos'
import CardPlano from './_CardPlanos'

export default function Index () {
    return (
        <Main>
            <Header/>
            <DivCarousel>
                <Carousel interval={3000} autoPlay infiniteLoop showStatus={false} >
                    <Image src="carousel1.png"></Image>
                    <Image src="carousel2.png"></Image>
                    <Image src="carousel3.png"></Image>
                </Carousel>
            </DivCarousel>
            <DivTextPlanos>
                <DivEncapsulamento>
                    <TextPlanos>Escolha</TextPlanos> <TextPlanos2>seu plano</TextPlanos2>
                </DivEncapsulamento>
                <DescPlanos>Temos musculação. aeróbica entre outros asdas das das da sd as da sdasdasdasda sdasdas</DescPlanos>
            </DivTextPlanos>
            <CardsPlanos>
                <CardPlano></CardPlano>
                <CardPlano></CardPlano>
            </CardsPlanos>
            <DivInfosInvisible>
                <DivInfos>
                    <DivCards>
                        <Card imagePath="card1.svg" titulo="Desinfecção" descricao="Desinfectamos toda a academia de 2 a 3 vezes por dia"></Card>
                        <Card imagePath="card2.svg" titulo="Agende seu horário" descricao="Para evitar aglomerações o agendamento de horário é obrigatório"></Card>
                        <Card imagePath="card3.svg" titulo="Uso de máscara" descricao="O uso da máscara é obrigatório. Toda equipe e alunos usará máscara"></Card>
                        <Card imagePath="card4.svg" titulo="Termômetro" descricao="Vamos medir sua temperatura na recepção"></Card>
                        <Card imagePath="card5.svg" titulo="Higienização" descricao="Alcóol em gel gratuito por toda academia"></Card>
                    </DivCards>
                </DivInfos>
            </DivInfosInvisible>
            <Footer>
                <Textinho>Conheça a família DreamFit faça uma aula experimental</Textinho>
                <DivLocal>
                    <Icon src="alerticon.svg"></Icon>
                    <Localizacao href="https://facebook.com" target="_blank">Rua Tal bairro tal, número 0</Localizacao>
                </DivLocal>
            </Footer>
            
        </Main>
    )
} 


