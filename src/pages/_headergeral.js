
import {Main, Logo, Link, Links} from './_headerstyles'

export default function HeaderInfos (props) {
    const telas = ["FEED", "HORÁRIOS", "LOGIN", "RECOMPENSAS", "PERFIL"]

    const handleClick = () => {
        console.log("clicked")
    }

    console.log(props.tela)

    return (
        <Main>
            <Logo src="/logo.png"/>
            <Links>
                {telas.map(e => e != props.tela ? <Link>{e}</Link> : <div/> )}  
            </Links>
        </Main>
    )
        
}