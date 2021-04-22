import React from 'react';

import { Main, DivPublicar, LeftPublicar, RightPublicar, Imagem, DivPublicacoes, IconPublicar,
DivBackground, InputPublicar, DivImagem, Button, DivFooter, ButtonEnviar } from './styles';


import Header from '../_headergeral'
import CardPubli from './CardPubli'
import {FaFileImage} from 'react-icons/fa'

function PressKey (){ 
    const textarea = document.querySelector('textarea')

    if (textarea.value.length > 150) {
        textarea.value = textarea.value.substring(0, textarea.value.length-1)
    }
    
}

function ClickButton() {
    const Div = document.querySelector("#divback");
    console.log(Div.style.height)
    Div.style.height = "400px"
    const InputBack = document.querySelector("#inputback");
    InputBack.style.height = "50%"
    const Imagem = document.querySelector("#imgback")
    Imagem.style.height = "300px"
    Imagem.style.width = "90%"
    Imagem.style.marginLeft = "5%"
    Imagem.style.marginBottom = "5%"
}

function feed() {
  return (
    <>
        <Header tela="FEED" positionF/>
        <Main>
            <Imagem></Imagem>
            <DivPublicar>
                <LeftPublicar>
                    <IconPublicar src="/gui.png"></IconPublicar>
                </LeftPublicar>
                <RightPublicar >
                    <DivBackground id="divback">
                        <InputPublicar id="inputback" onChange={PressKey} placeholder="Como foi seu treino hoje?"></InputPublicar>
                        <DivImagem id="imgback"></DivImagem>
                        <DivFooter>
                            <Button onClick={ClickButton}><img style={{width: "100%", height:"100%"}} src="uploadimage.svg"></img></Button>
                            <ButtonEnviar>Enviar</ButtonEnviar>
                        </DivFooter>
                    </DivBackground>
                </RightPublicar>
            </DivPublicar>
            <DivPublicacoes>
                <CardPubli/>
                <CardPubli/>
                <CardPubli/>
                <CardPubli/>
                <CardPubli/>
                <CardPubli/>
                <CardPubli/>
                <CardPubli/>
            </DivPublicacoes>
            

        </Main>
    </>
  )
}

export default feed;