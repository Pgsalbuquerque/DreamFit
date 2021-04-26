import React, {useState, useEffect} from 'react'

import api from '../api/index'

import jwt from 'jsonwebtoken'

import {Main, Logo, Link, LinkLogo, Links, DivTransparente} from '../styles/_headerstyles'

export default function HeaderGeral (props) {
    const telas = ["FEED", "HORARIOS", "RECOMPENSAS", "PERFIL", "TREINOS"]
    const [professor, setProfessor] = useState(false)


    const handleClick = () => {
        console.log("clicked")
    }

    useEffect(async () => {
        const token = localStorage.getItem('tokendreamfit')
        const data = jwt.decode(token.substring(7))
        console.log(data)
        await api.get('/users/token',{headers: {"Authorization": token}})
            .then(r => {
                if(r.data.status == 202) {
                  if (data.role == 40){
                    setProfessor(true)
                }   
                } else if (r.data.status == 200) {
                    localStorage.setItem('tokendreamfit', r.data.token)
                    if (data.role == 40){
                        setProfessor(true)
                  }
                  }
            })
            .catch()
      }, [])

    return ( props.positionF 
        ? 
        <Main style={{position: "fixed"}}>
            <DivTransparente>
                <LinkLogo href="/">

                <Logo src="/logo.png"/>
                </LinkLogo>
                <Links>
                    {telas.map((e, index) => e != props.tela ? <Link key={index} href={`/${e}`.toLowerCase()} >{e}</Link> : <div/> )}  
                    {professor ? <Link key={6} href='/busca' >{'INSERIR TREINO'}</Link> : <div></div>}
                </Links>
            </DivTransparente>
        </Main> 
        : 
        <Main>
            <DivTransparente>

                <Logo src="/logo.png"/>
                <Links>
                    {telas.map((e, index) => e != props.tela ? <Link key={index} href={`/${e}`.toLowerCase()} >{e}</Link> : <div/> )}  
                </Links>
            </DivTransparente>
        </Main>
    )
        
}