import {Main, Logo, Link, LinkLogo, Links, DivTransparente} from './_headerstyles'

export default function HeaderGeral (props) {
    const telas = ["FEED", "HORARIOS", "RECOMPENSAS", "PERFIL", "TREINOS"]

    const handleClick = () => {
        console.log("clicked")
    }

    return ( props.positionF 
        ? 
        <Main style={{position: "fixed"}}>
            <DivTransparente>
                <LinkLogo href="/">

                <Logo src="/logo.png"/>
                </LinkLogo>
                <Links>
                    {telas.map((e, index) => e != props.tela ? <Link key={index} href={`/${e}`.toLowerCase()} >{e}</Link> : <div/> )}  
                </Links>
            </DivTransparente>
        </Main> 
        : 
        <Main>
            <DivTransparente>

                <Logo src="/logo.png"/>
                <Links>
                    {telas.map((e, index) => e != props.tela ? <Link key={index} href={`/${e}`.toLowerCase()} >{e}</Link> : <div/> )}  
                </Links>
            </DivTransparente>
        </Main>
    )
        
}