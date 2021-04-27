import React, {useState, useEffect} from 'react';

import { Main, DivCadastro, Nome, Email, Cpf, Password, DataGenero, Data, UsuarioPhone,
InputRadio, Phone, DivImagem, ButtonImage, Imagem, Medidas, Peso, Braco, Quadril, Barriga, Enviar,
CpfSenha, TextoRadio, Form, Titulo,DivPlano, Invi, IconImage,Perna, InputI } from '../../styles/cadastro/styles';

import jwt, { JsonWebTokenError } from 'jsonwebtoken'

import {useRouter} from 'next/router'

import api from '../../api/index'

function cadastro() {

  const routes = useRouter()

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [cpf, setCpf] = useState('')
  const [senha, setSenha] = useState('')
  const [genero, setGenero] = useState('Feminino')
  const [data, setData] = useState('')
  const [hierarquia, setHierarquia] = useState('')
  const [telefone, setTelefone] = useState('')
  const [imagem, setImagem] = useState('')
  const [plano, setPlano] = useState('')
  const [peso, setPeso] = useState('')
  const [braco, setBraco] = useState('')
  const [quadril, setQuadril] = useState('')
  const [barriga, setBarriga] = useState('')
  const [perna, setPerna] = useState('')
  const [render, setRender] = useState(false)
  const [file, setFile] = useState()

  async function ClickEnviar() {
    const token = localStorage.getItem('tokendreamfit')
    await api.post('/users', {
      cpf: cpf,
      email: email,
      name: nome,
      birthDate: data,
      gender: genero,
      password: senha,
      role_user: hierarquia,
      phone: telefone,
      profilePicture: imagem,
      weight: peso,
      armMeasurement: braco,
      legMeasurement: perna,
      hipMeasurement: quadril,
      bellyMeasurement: barriga
    }, {headers: {"Authorization": token}}).then(() => {
      alert('Cadastro realizado com sucesso')
      routes.push('dashboard')
    }
    ).catch(e => {
      console.log(e.response.data)
      if (e.response.status == 400) {
        alert(e.response.data.title)
      } else {
        alert(e.response.data.message)
      }
    })
  }

  useEffect(async () => {
    const token = localStorage.getItem('tokendreamfit')
    if (!token) {
      routes.push('login')
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
          <Titulo>Cadastro de usuário</Titulo>
          <DivCadastro>
              <Nome placeholder="Nome" value={nome} onChange={e => setNome(e.target.value)}></Nome>
              <Email type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email"></Email>
              <CpfSenha>
                <Cpf placeholder="Cpf" value={cpf} onChange={e => setCpf(e.target.value)}></Cpf>
                <Password type="password" placeholder="Senha" value={senha} onChange={e => setSenha(e.target.value)}></Password>
              </CpfSenha>
              <DataGenero>
                  <Form>
                    <InputRadio type="radio" onClick={() => setGenero('Masculino')} id="masculino" name="role" value="masculino"></InputRadio>
                    <TextoRadio for="masculino">Masculino</TextoRadio>
                    <InputRadio type="radio" onClick={() => setGenero('Feminino')} id="feminino" name="role" value="feminino"></InputRadio>
                    <TextoRadio for="feminino">Feminino</TextoRadio>
                  </Form>
                  <Data type="date" value={data} onChange={e => setData(e.target.value)}></Data>
              </DataGenero>
              <UsuarioPhone>
                  <Form>
                    <InputRadio type="radio" onClick={() => setHierarquia('Aluno')} id="aluno" name="role" value="aluno"></InputRadio>
                    <TextoRadio for="aluno">Aluno</TextoRadio>
                    <InputRadio type="radio" onClick={() => setHierarquia('Professor')} id="professor" name="role" value="professor"></InputRadio>
                    <TextoRadio for="professor">Professor</TextoRadio>
                  </Form>
                  <Phone placeholder="Telefone" value={telefone} onChange={e => setTelefone(e.target.value)}></Phone>
              </UsuarioPhone>
              <Invi>
                <DivImagem>
                    <InputI type='file' onChange={e => setFile(e.target.files[0])}></InputI>
                </DivImagem>
                <DivPlano>
                  <Form style={{width: '80%'}}>
                      <InputRadio type="radio" onClick={() => setPlano('DREAM')} id="dream" name="role" value="dream"></InputRadio>
                      <TextoRadio for="dream">DREAM</TextoRadio>
                      <InputRadio type="radio" onClick={() => setPlano('PARADISE')} id="paradise" name="role" value="paradise"></InputRadio>
                      <TextoRadio for="paradise">PARADISE</TextoRadio>
                  </Form>
                </DivPlano>
              </Invi>
              <Medidas>
                  <Peso placeholder="Peso" value={peso} onChange={e => setPeso(e.target.value)}></Peso>
                  <Braco placeholder="Braço" value={braco} onChange={e => setBraco(e.target.value)}></Braco>
                  <Quadril placeholder="Quadril" value={quadril} onChange={e => setQuadril(e.target.value)}></Quadril>
                  <Barriga placeholder="Barriga" value={barriga} onChange={e => setBarriga(e.target.value)}></Barriga>
                  <Perna placeholder="Perna" value={perna} onChange={e => setPerna(e.target.value)}></Perna>
              </Medidas>
              <Enviar onClick={ClickEnviar}>Enviar</Enviar>
          </DivCadastro>
      </Main>
  )
}

export default cadastro;