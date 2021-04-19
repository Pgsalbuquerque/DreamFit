import {Main, Logo, Link, LinkLogo, Links, DivTransparente} from './_headerstyles'

export default function HeaderInfos (props) {
    const telas = ["FEED", "HORARIOS", "RECOMPENSAS", "PERFIL", "TREINOS"]

    const handleClick = () => {
        console.log("clicked")
    }

    console.log(props.tela)

    return ( props.positionF 
        ? 
        <Main style={{position: "fixed"}}>
            <DivTransparente>
                <LinkLogo href="/">

                <Logo src="/logo.png"/>
                </LinkLogo>
                <Links>
                    {telas.map(e => e != props.tela ? <Link href={`/${e}`.toLowerCase()} >{e}</Link> : <div/> )}  
                </Links>
            </DivTransparente>
        </Main> 
        : 
        <Main>
            <DivTransparente>

                <Logo src="/logo.png"/>
                <Links>
                    {telas.map(e => e != props.tela ? <Link href={`/${e}`.toLowerCase()} >{e}</Link> : <div/> )}  
                </Links>
            </DivTransparente>
        </Main>
    )
        
}