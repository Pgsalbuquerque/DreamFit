import React, {useEffect, useState} from 'react';

import { Main, Perfil, ImagemFundo, PerfilInfos, Bloco1, Bloco2, Bloco3, FotoDiv, Foto,
Icon, ImageButton, NomeIdade, Nome, Idade, Plano, PlanoText, NomePlanoText,TextMedidas,
Medidas, Medida, IconMedida, ValorMedida, SetaMedida, InfoDiv, IconInfo, TextInfo, ButtonLogOut } from './styles';

import {FaFileImage} from 'react-icons/fa'

import api from '../../api/index'

import {useRouter} from 'next/router'

import Header from '../_headergeral'

function perfil() {
    const routes = useRouter()


    function Click(){
        localStorage.setItem('tokendreamfit', '')
        localStorage.setItem('dreamfituuid', '')
        routes.push('/login')

    }

    return (
      <>
        
        <Main>
            <Header tela="PERFIL"></Header>
            <Perfil>
                <ImagemFundo></ImagemFundo>
                <PerfilInfos>
                    <Bloco1>
                        <FotoDiv>
                            <Foto src="pedro.png"></Foto>
                            <Icon>
                                <ImageButton>
                                    <img src="uploadimage.svg" style={{width: '100%', height: '100%'}}></img>
                                </ImageButton>
                            </Icon>
                            
                        </FotoDiv>
                        <NomeIdade>
                            <Nome>Pedro Gaybriel</Nome>
                            <Idade>19 anos</Idade>
                        </NomeIdade>
                        <Plano>
                            <PlanoText>PLANO</PlanoText>
                            <NomePlanoText>DREAM</NomePlanoText>
                        </Plano>
                    </Bloco1>
                    <Bloco2>
                        <TextMedidas>Medidas</TextMedidas>
                        <Medidas>
                            <Medida>
                                <IconMedida src="peso.svg"></IconMedida>
                                <ValorMedida>56</ValorMedida>
                                <SetaMedida src="setabaixo.svg"></SetaMedida>
                            </Medida>
                            <Medida>
                                <IconMedida src="braco.svg"></IconMedida>
                                <ValorMedida>56</ValorMedida>
                                <SetaMedida src="setacima.svg"></SetaMedida>
                            </Medida>
                            <Medida>
                                <IconMedida src="barriga.svg"></IconMedida>
                                <ValorMedida>56</ValorMedida>
                                <SetaMedida src="setabaixo.svg"></SetaMedida>
                            </Medida>
                            <Medida>
                                <IconMedida src="quadril.svg"></IconMedida>
                                <ValorMedida>56</ValorMedida>
                                <SetaMedida src="setacima.svg"></SetaMedida>
                            </Medida>
                        </Medidas>
                    </Bloco2>
                    <Bloco3>
                        <InfoDiv>
                            <IconInfo src="coin.svg"></IconInfo>
                            <TextInfo>250</TextInfo>
                        </InfoDiv>
                        <InfoDiv>
                            <IconInfo src="time.svg"></IconInfo>
                            <TextInfo>18:00-19:00</TextInfo>
                        </InfoDiv>
                    </Bloco3>
                    <ButtonLogOut onClick={Click}>SAIR</ButtonLogOut>
                </PerfilInfos>
            </Perfil>
        </Main>
      </>
  )
}

export default perfil;