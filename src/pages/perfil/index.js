import React, {useEffect, useState} from 'react';

import { Main, Perfil, ImagemFundo, PerfilInfos, Bloco1, Bloco2, Bloco3, FotoDiv, Foto,
Icon, ImageButton, NomeIdade, Nome, Idade, Plano, PlanoText, NomePlanoText,TextMedidas,
Medidas, Medida, IconMedida, ValorMedida, SetaMedida, InfoDiv, IconInfo, TextInfo,
ButtonLogOut, DivPeso } from '../../styles/perfil/styles';

import {FaFileImage} from 'react-icons/fa'

import api from '../../api/index'

import {useRouter} from 'next/router'

import Header from '../_headergeral'

function perfil() {
    const routes = useRouter()
    const [dados, setDados] = useState({})
    const [file, setFile] = useState()

    function Click(){
        localStorage.setItem('tokendreamfit', '')
        localStorage.setItem('dreamfituuid', '')
        routes.push('/login')

    }

    async function AtualizarFoto(file){
        const uuid = localStorage.getItem('dreamfituuid')
        const token = localStorage.getItem('tokendreamfit')
        console.log(token)
        console.log(uuid)

        let formdata = new FormData()

        formdata.append('image', file)
        formdata.append('uuid', uuid)

        await api.post('files', formdata, {headers: {"Authorization": token}})
        .then(r => routes.reload())
        .catch(e => alert(e.response.message))
    }

    useEffect(async () => {
        const uuid = localStorage.getItem('dreamfituuid')
        const token = localStorage.getItem('tokendreamfit')
        await api.get(`/users/private_profile/${uuid}`, {headers: {"Authorization": token}})
        .then(r => {
            console.log(r.data)
            setDados(r.data)
        })
        .catch(e => alert(e.response.data))
    }, [])

    return (
      <>
        
        <Main>
            <Header tela="PERFIL"></Header>
            <Perfil>
                <ImagemFundo></ImagemFundo>
                <PerfilInfos>
                    <Bloco1>
                        <FotoDiv>
                            <Foto src={dados.profilePicture} ></Foto>
                            <Icon>
                                <input type="file" style={{position: 'absolute', opacity: 0}} onChange={e => AtualizarFoto(e.target.files[0])}></input>
                                <img src="uploadimage.svg" style={{width: '100%', height: '100%', marginLeft: '50%'}}></img>
                            </Icon>
                            
                        </FotoDiv>
                        <NomeIdade>
                            <Nome>{dados.name}</Nome>
                            <Idade>{dados.birthDate}</Idade>
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
                                <IconMedida src="perna.svg"></IconMedida>
                                <ValorMedida>{dados.legMeasurement}</ValorMedida>
                                <SetaMedida src={`${dados.legMeasurementChange}.svg`} ></SetaMedida>
                            </Medida>
                            <Medida>
                                <IconMedida src={dados.gender == 'Masculino' ? "bracomasculino.svg" : "bracofeminino.svg"}></IconMedida>
                                <ValorMedida>{dados.armMeasurement}</ValorMedida>
                                <SetaMedida src={`${dados.armMeasurementChange}.svg`}></SetaMedida>
                            </Medida>
                            <Medida>
                                <IconMedida src={dados.gender == 'Masculino' ? "barrigamasculino.svg" : "barrigafeminino.svg"}></IconMedida>
                                <ValorMedida>{dados.bellyMeasurement}</ValorMedida>
                                <SetaMedida src={`${dados.bellyMeasurementChange}.svg`}></SetaMedida>
                            </Medida>
                            <Medida>
                                <IconMedida src={dados.gender == 'Masculino' ? "quadrilmasculino.svg" : "quadrilfeminino.svg"}></IconMedida>
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