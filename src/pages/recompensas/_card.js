import {FaInfoCircle, FaShoppingBag, FaDollarSign} from 'react-icons/fa'

import {CardT, ImageCard, Hr, Invisible, TituloCard, Infos, TextInfos, IconDiv, ButtonCard} from './styles'

export default function Card (props) {

    return (
        <CardT>
            <ImageCard src="/bolsa.png"/>
            <Invisible>
                <Hr/>   
            </Invisible>
            <TituloCard>{props.titulo}</TituloCard>
            <Invisible>
                <Hr/>   
            </Invisible>
            <Infos><IconDiv><FaInfoCircle /></IconDiv><TextInfos>Essa bolsa é linda e perfeita e do neymar</TextInfos></Infos>
            <Infos><IconDiv><FaShoppingBag /></IconDiv><TextInfos>2 itens restantes</TextInfos> </Infos>
            <Infos><IconDiv><FaDollarSign /></IconDiv><TextInfos>250</TextInfos></Infos>
            <ButtonCard>RESGATAR</ButtonCard>
        </CardT>
    )
}
