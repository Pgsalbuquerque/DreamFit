import React, {useState, useEffect} from 'react'

import {Main, LeftDiv, RightDiv, Logo, TextInfos, Grid, Image, DivCard, TextCard, LoginDiv, Input,
DivInput, SenhaLink, ButtonEntrar, DivTextinhos, TextA, LinkA} from '../../styles/login/styles'

import {FaLock, FaUserAlt} from 'react-icons/fa'

import { useRouter } from 'next/router'

import jwt from 'jsonwebtoken'

import api from '../../api/index'


export default function Login() {
    
    const [cpf, setCpf] = useState('')
    const [senha, setSenha] = useState('')
    const [render, setRender] = useState(false)
    const routes = useRouter()
    
    async function ClickFunction() {
        console.log(cpf, senha)
        const response = await api.post('users/login', {
           cpf: cpf,
           password: senha
       }).then( r => {
           localStorage.setItem('tokendreamfit', r.data.token)
           localStorage.setItem('dreamfituuid', r.data.uuid)
           const data = jwt.decode(r.data.token.substring(7))
           if (data.role == 20) {
              routes.push('/dashboard')
           } else if (data.role ==40){
               routes.push('perfil')
           } else {
               routes.push('/horarios')
           }
       }
       ).catch( e => alert(e.response.data.message))
    
    }

    useEffect(async () => {
        const token = localStorage.getItem('tokendreamfit')
        if(!token) {
            setRender(true)
            return
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
                } else {
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
    render == false ? <div></div>
    :
    <>
        <Main >
            <LeftDiv>
                <Logo src="logo.png"></Logo>
                <TextInfos>Fa??a seu login na plataforma</TextInfos>
                <Grid>
                    <DivCard>
                        <Image src="horarios.png"></Image>
                        <TextCard>HOR??RIOS</TextCard>
                    </DivCard>
                    <DivCard>
                        <Image src="feed.png"></Image>
                        <TextCard>FEED</TextCard>
                    </DivCard>
                    <DivCard>
                        <Image src="treinos.png"></Image>
                        <TextCard>TREINOS</TextCard>
                    </DivCard>
                    <DivCard>
                        <Image src="recompensas.png"></Image>
                        <TextCard>RECOMPENSAS</TextCard>
                    </DivCard>
                </Grid>
            </LeftDiv>
            <RightDiv>
                <LoginDiv>
                    <DivInput>
                        <FaUserAlt style={{color: "29292E", marginLeft: "10px"}}/>
                        <Input placeholder="Cpf" value={cpf} onChange={e => setCpf(e.target.value)}/>
                    </DivInput>
                    <DivInput>
                        <FaLock style={{color: "29292E", marginLeft: "10px"}}/>
                        <Input type="password" placeholder="Senha" value={senha} onChange={e => setSenha(e.target.value)}/>
                    </DivInput>
                    <SenhaLink href="/recuperarsenha">Esqueci minha senha!</SenhaLink>
                    <ButtonEntrar onClick={() => ClickFunction(cpf,senha,routes)} >ENTRAR</ButtonEntrar>
                    <DivTextinhos>
                        <TextA>N??o ?? nosso aluno?</TextA>
                        <LinkA href="/">Venha nos visitar</LinkA>
                    </DivTextinhos>
                </LoginDiv>
            </RightDiv>
        </Main>
    </>
    )

}