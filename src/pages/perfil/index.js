import React, {useEffect, useState} from 'react';

import { Main, Perfil, ImagemFundo, PerfilInfos, Bloco1, Bloco2, Bloco3, FotoDiv, Foto,
Icon, ImageButton, NomeIdade, Nome, Idade, Plano, PlanoText, NomePlanoText,TextMedidas,
Medidas, Medida, IconMedida, ValorMedida, SetaMedida, InfoDiv, IconInfo, TextInfo,
ButtonLogOut, DivPeso } from '../../styles/perfil/styles';

import {FaFileImage} from 'react-icons/fa'

import api from '../../api/index'

import {useRouter} from 'next/router'

import jwt from 'jsonwebtoken'

import Header from '../_headergeral'

function perfil() {
    const routes = useRouter()
    const [dados, setDados] = useState({})
    const [file, setFile] = useState()
    const [render, setRender] = useState(false)

    function Click(){
        localStorage.setItem('tokendreamfit', '')
        localStorage.setItem('dreamfituuid', '')
        routes.push('/login')

    }

    function Click2(){

    }

    async function AtualizarFoto(file){
        const uuid = localStorage.getItem('dreamfituuid')
        const token = localStorage.getItem('tokendreamfit')
        console.log(token)
        console.log(uuid)

        let formdata = new FormData()

        formdata.append('image', file)
        formdata.append('uuid', uuid)

        await api.post('files/users', formdata, {headers: {"Authorization": token}})
        .then(r => routes.reload())
        .catch(e => console.log(e))
    }

    useEffect(async () => {
        const uuid = localStorage.getItem('dreamfituuid')
        const token = localStorage.getItem('tokendreamfit')
        if (!token) {
            routes.push('login')
        }
        const data = jwt.decode(token.substring(7))
        await api.get('/users/token',{headers: {"Authorization": token}})
            .then(r => {
                if(r.data.status == 202) {
                  if (data.role != 20){
                    setRender(true)
                } else {
                    alert('Você não tem permissão para acessar essa rota')
                    routes.push('/login')
                }
                    
                } else if (r.data.status == 200) {
                    localStorage.setItem('tokendreamfit', r.data.token)
                    if (data.role != 20){
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

        await api.get(`/users/private_profile/${uuid}`, {headers: {"Authorization": token}})
        .then(r => {
            setDados(r.data)
        })
        .catch(e => alert(e.response))
    }, [])

    return (
        render == false 
        ? <div></div>
        :
        <>
            <Main>
                <Header tela="PERFIL"></Header>
                <Perfil>
                    <ImagemFundo></ImagemFundo>
                    <PerfilInfos>
                        <Bloco1>
                            <FotoDiv>
                                <Foto src={dados.profilePicture ? dados.profilePicture : '/iconperfil.png'} ></Foto>
                                <Icon>
                                    <input type="file" style={{position: 'absolute', opacity: 0}} onChange={e => AtualizarFoto(e.target.files[0])}></input>
                                    <img src="uploadimage.svg" style={{width: '100%', height: '100%', marginLeft: '50%'}}></img>
                                </Icon>
                                
                            </FotoDiv>
                            <NomeIdade>
                                <Nome>{dados.name}</Nome>
                                <Idade>{dados.birthDate}</Idade>
                                <a href="novasenha" style={{fontFamily: 'Fredoka One, arial, roboto',fontSize: '14px', color: '#5A189A' ,background: '#000', border: 'none', cursor: 'pointer'}}>Redefinir senha</a>
                            </NomeIdade>
                            <Plano>
                                <PlanoText>PLANO</PlanoText>
                                <NomePlanoText>{dados.plan}</NomePlanoText>
                            </Plano>
                        </Bloco1>
                        <Bloco2>
                            <TextMedidas>Medidas</TextMedidas>
                            <Medidas>
                                <Medida>
                                    <IconMedida src="perna.svg"></IconMedida>
                                    <ValorMedida>{dados.legMeasurement}</ValorMedida>
                                    <SetaMedida src={`${dados.legMeasurementChange}.svg`} ></SetaMedida>
                                </Medida>
                                <Medida>
                                    <IconMedida src={dados.gender == "Masculino" ? "bracomasculino.svg" : "bracofeminino.svg"}></IconMedida>
                                    <ValorMedida>{dados.armMeasurement}</ValorMedida>
                                    <SetaMedida src={`${dados.armMeasurementChange}.svg`}></SetaMedida>
                                </Medida>
                                <Medida>
                                    <IconMedida src={dados.gender == "Masculino" ? "barrigamasculino.svg" : "barrigafeminino.svg"}></IconMedida>
                                    <ValorMedida>{dados.bellyMeasurement}</ValorMedida>
                                    <SetaMedida src={`${dados.bellyMeasurementChange}.svg`}></SetaMedida>
                                </Medida>
                                <Medida>
                                    <IconMedida src={dados.gender == "Masculino" ? "quadrilmasculino.svg" : "quadrilfeminino.svg"}></IconMedida>
                                    <ValorMedida>{dados.hipMeasurement}</ValorMedida>
                                    <SetaMedida src={`${dados.hipMeasurementChange}.svg`}></SetaMedida>
                                </Medida>
                            </Medidas>
                            <DivPeso>
                                    <IconMedida src="peso.svg"></IconMedida>
                                    <ValorMedida>{dados.weight}</ValorMedida>
                                    <SetaMedida src={`${dados.weightChange}.svg`} style={{marginLeft: "10px"}}></SetaMedida>
                            </DivPeso>
                        </Bloco2>
                        <Bloco3>
                            <InfoDiv>
                                <IconInfo src="coin.svg"></IconInfo>
                                <TextInfo>{dados.fitcoins}</TextInfo>
                            </InfoDiv>
                            <InfoDiv>
                                <IconInfo src="time.svg"></IconInfo>
                                <div>
                                    <TextInfo>{`${dados.nextClass ? dados.nextClass.startDate.substring(0,5) : 'Agende um '}${dados.nextClass ? '-' : ''}${dados.nextClass ? dados.nextClass.endDate.substring(0,5) : 'Horário'}`}</TextInfo>
                                    <TextInfo style={{fontSize: '16px', color: '#c1c1c1'}}>{dados.nextClass ? dados.nextClass.type : ''}</TextInfo>
                                </div>
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