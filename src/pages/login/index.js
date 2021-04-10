import {Main, LeftDiv, RightDiv, Logo, TextInfos, Grid, Image, DivCard, TextCard, LoginDiv, Input,
DivInput, SenhaLink, ButtonEntrar, DivTextinhos, TextA, LinkA} from './styles'

import {FaLock, FaUserAlt} from 'react-icons/fa'

import Header from '../_headergeral'

function ClickFunction() {
   
}

export default function Teste() {
    return (
    <>
        <Header tela={"LOGIN"}></Header>
        <Main>
            <LeftDiv>
                <Logo src="logo.png"></Logo>
                <TextInfos>Faça seu login na plataforma</TextInfos>
                <Grid>
                    <DivCard>
                        <Image src="horarios.png"></Image>
                        <TextCard>HORÁRIOS</TextCard>
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
                        <Input placeholder="Cpf"/>
                    </DivInput>
                    <DivInput>
                        <FaLock style={{color: "29292E", marginLeft: "10px"}}/>
                        <Input type="password" placeholder="Senha"/>
                    </DivInput>
                    <SenhaLink href="/">Esqueci minha senha!</SenhaLink>
                    <ButtonEntrar>ENTRAR</ButtonEntrar>
                    <DivTextinhos>
                        <TextA>Não é nosso aluno?</TextA>
                        <LinkA href="/">Venha nos visitar</LinkA>
                    </DivTextinhos>
                </LoginDiv>
            </RightDiv>
        </Main>
    </>
    )

}