import HeaderGeral from '../_headergeral'
import {FaInfoCircle} from 'react-icons/fa'

import Card from './_card'

import {Main, LeftDiv, Image, FitCoin, Coin, QtCoins, TextFitCoins, InfosDiv, InfosText,
Grid,DivTransparente} from './styles'

export default function Recompensas () {

    return (
        <>
            <HeaderGeral tela="RECOMPENSAS" positionF={true}/>
            <Main>
                <LeftDiv>
                    <DivTransparente>
                        <Image src="/recompensas1.png"/>
                        <FitCoin>
                            <Coin src="/coin.png"/>
                            <QtCoins >250</QtCoins>
                        </FitCoin>
                        <TextFitCoins >Fitcoins</TextFitCoins>
                        <InfosDiv>
                            <FaInfoCircle/>
                        <InfosText>Ganhe 1 fitcoin a cada treino</InfosText>
                        </InfosDiv>
                    </DivTransparente>
                </LeftDiv>
                    <Grid>
                        <Card titulo="Bolsa Adidas"/>
                        <Card titulo="Bolsa Adidas"/>
                        <Card titulo="Bolsa Adidas"/>
                        <Card titulo="Bolsa Adidas"/>
                        <Card titulo="Bolsa Adidas"/>
                        <Card titulo="Bolsa Adidas"/>
                        <Card titulo="Bolsa Adidas"/>
                        <Card titulo="Bolsa Adidas"/>
                        <Card titulo="Bolsa Adidas"/>
                        <Card titulo="Bolsa Adidas"/>
                        <Card titulo="Bolsa Adidas"/>
                        <Card titulo="Bolsa Adidas"/>
                        <Card titulo="Bolsa Adidas"/>
                        <Card titulo="Bolsa Adidas"/>
                        <Card titulo="Bolsa Adidas"/>
                        <Card titulo="Bolsa Adidas"/>
                    </Grid>
            </Main>
        </>
    )
}
