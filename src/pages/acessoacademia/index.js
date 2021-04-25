import React from 'react';

import { Main, Titulo, RightDiv, LoginDiv, DivInput, Input, ButtonEntrar, IconConfirm } from '../../styles/acessoacademia/styles';

import {FaUserAlt, FaLock} from 'react-icons/fa'

function acessoacademia() {
  return (
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