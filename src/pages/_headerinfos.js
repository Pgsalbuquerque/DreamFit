import {Main, Logo, Button, TextButton} from './_headerstyles'

export default function HeaderInfos () {

    return (
        <Main>
            <Logo src="/logo.png"/>
            <Button href="/login">
                <TextButton>ENTRAR</TextButton>
            </Button >
        </Main>
    )
        
}