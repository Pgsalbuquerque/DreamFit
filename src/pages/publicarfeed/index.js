import React, {useState, useEffect} from 'react';

import {useRouter} from 'next/router'

import api from '../../api/index'

import jwt from 'jsonwebtoken'

import { Main, DivPublicar, RightPublicar, Titulo,
    DivBackground, InputPublicar, DivImagem, Button, DivFooter, ButtonEnviar } from '../../styles/publicarfeed/styles';

import {FaFileImage} from 'react-icons/fa'

function publicarfeed() {
    const routes = useRouter()
    const [render, setRender] = useState(false)

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

    useEffect(async () => {
        const token = localStorage.getItem('tokendreamfit')
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