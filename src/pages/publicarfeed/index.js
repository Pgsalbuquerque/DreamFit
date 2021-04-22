import React from 'react';

import { Main, DivPublicar, RightPublicar, Titulo,
    DivBackground, InputPublicar, DivImagem, Button, DivFooter, ButtonEnviar } from './styles';

import {FaFileImage} from 'react-icons/fa'

function publicarfeed() {

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

  return (
      <Main>
          <Titulo>Publicar no feed</Titulo>
          <DivPublicar>
            <RightPublicar>
                <DivBackground id="divback">
                    <InputPublicar id="inputback" onChange={PressKey} placeholder="Escreva aqui"></InputPublicar>
                    <DivImagem id="imgback"></DivImagem>
                    <DivFooter>
                        <Button onClick={ClickButton}><FaFileImage color="#fff" size={25}></FaFileImage></Button>
                        <ButtonEnviar>Enviar</ButtonEnviar>
                    </DivFooter>
                </DivBackground>
            </RightPublicar>
          </DivPublicar>
      </Main>
  )
}

export default publicarfeed;