import {Main, Logo, Button, TextButton} from './_headerstyles'

export default function HeaderInfos () {
    const handleClick = () => {
        console.log("clicked")
    }

    return (
        <Main>
            <Logo src="/logo.png"/>
            <Button onClick={handleClick}>
                <TextButton>ENTRAR</TextButton>
            </Button >
        </Main>
    )
        
}