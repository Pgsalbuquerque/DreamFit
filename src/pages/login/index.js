import { Image, Screen, DivLogin, NomeAcademia, DivInfos, Login, Descricao, Cpf, Senha, Text,
     Local, Button, Invisible } from './styles'
import {FaUserAlt, FaLock} from 'react-icons/fa'

function ClickFunction() {
    //CONECTAR COM O BACKEND E FAZER LOGIN 
}

export default function Teste() {
    return (
    <Screen>
        <DivInfos>
            <NomeAcademia>Dream Fit</NomeAcademia>
            <Descricao>A academia dos sonhos</Descricao>
            <Text>Ainda não é um cliente nosso?</Text>
            <Local 
                href="https://www.google.com.br/maps/place/R.+Padre+Anchieta,+260+-+Cruzeiro,+Bezerros+-+PE,+55660-000/@-8.229289,-35.7521024,17z/data=!3m1!4b1!4m5!3m4!1s0x7aa2549c767a479:0xb8594fbf08d59eb2!8m2!3d-8.2292943!4d-35.7499137"
            >
            Venha nos conhecer</Local>
            <Image src="/animated2.png"/>
        </DivInfos>
        <DivLogin>
            <Login>LOGIN</Login>
            <Invisible>
                <FaUserAlt  size={20}/>
                <Cpf type="text" placeholder="CPF"></Cpf>
            </Invisible>
            <Invisible>
                <FaLock size={20}/>
                <Senha type="password" placeholder="SENHA"></Senha>
            </Invisible>
            <Button onClick={ClickFunction}> Entrar!</Button>
        </DivLogin>
    </Screen>
    )
}