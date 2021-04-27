import React, {useState,useEffect} from 'react';

import { Main, Titulo, RightDiv, LoginDiv, DivInput, Input, ButtonEntrar, IconConfirm } from '../../styles/acessoacademia/styles';

import {FaUserAlt, FaLock} from 'react-icons/fa'

import api from '../../api/index'

import {useRouter} from 'next/router'

import jwt from 'jsonwebtoken'

function acessoacademia() {
    const routes = useRouter()
    const [render, setRender] = useState(false)

    useEffect(async () => {
        const token = localStorage.getItem('tokendreamfit')
        if (!token) {
            routes.push('login')
            return
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
          <Titulo>Acesso a academia</Titulo>
          <RightDiv>
                <LoginDiv>
                    <DivInput>
                        <FaUserAlt style={{color: "29292E", marginLeft: "10px"}}/>
                        <Input placeholder="Cpf"/>
                    </DivInput>
                    <DivInput>
                        <FaLock style={{color: "29292E", marginLeft: "10px"}}/>
                        <Input type="password" placeholder="Senha"/>
                    </DivInput>
                    <ButtonEntrar>ENTRAR</ButtonEntrar>
                    <IconConfirm></IconConfirm>
                </LoginDiv>
            </RightDiv>
        </Main>
  )
}

export default acessoacademia;