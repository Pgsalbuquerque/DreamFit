import React from 'react';

import { Main, DivCadastro, Nome, Email, Cpf, Password, DataGenero, Data, UsuarioPhone,
InputRadio, Phone, DivImagem, ButtonImage, Imagem, Medidas, Peso, Braco, Quadril, Barriga, Enviar,
CpfSenha, TextoRadio, Form, Titulo } from './styles';

import {FaFileImage} from 'react-icons/fa'

function cadastro() {
  return (
      <Main>
          <Titulo>Cadastro de usuário</Titulo>
          <DivCadastro>
              <Nome placeholder="Nome"></Nome>
              <Email type="email" placeholder="Email"></Email>
              <CpfSenha>
                <Cpf placeholder="Cpf"></Cpf>
                <Password type="password" placeholder="Senha"></Password>
              </CpfSenha>
              <DataGenero>
                  <Data type="date"></Data>
                  <Form>
                    <InputRadio type="radio" id="masculino" name="role" value="masculino"></InputRadio>
                    <TextoRadio for="masculino">Masculino</TextoRadio>
                    <InputRadio type="radio" id="feminino" name="role" value="feminino"></InputRadio>
                    <TextoRadio for="feminino">Feminino</TextoRadio>
                  </Form>
              </DataGenero>
              <UsuarioPhone>
                  <Form>
                    <InputRadio type="radio" id="aluno" name="role" value="aluno"></InputRadio>
                    <TextoRadio for="aluno">Aluno</TextoRadio>
                    <InputRadio type="radio" id="professor" name="role" value="professor"></InputRadio>
                    <TextoRadio for="professor">Professor</TextoRadio>
                  </Form>
                  <Phone placeholder="Telefone"></Phone>
              </UsuarioPhone>
              <DivImagem>
                  <ButtonImage><FaFileImage size={30} color="#fff"></FaFileImage></ButtonImage>
                  <Imagem></Imagem>
              </DivImagem>
              <Medidas>
                  <Peso placeholder="Peso"></Peso>
                  <Braco placeholder="Braço"></Braco>
                  <Quadril placeholder="Quadril"></Quadril>
                  <Barriga placeholder="Barriga"></Barriga>
              </Medidas>
              <Enviar>Enviar</Enviar>
          </DivCadastro>
      </Main>
  )
}

export default cadastro;