import {FaInfoCircle, FaShoppingBag, FaDollarSign} from 'react-icons/fa'

import {CardT, ImageCard, Hr, Invisible, TituloCard, Infos, TextInfos, IconDiv, ButtonCard} from '../../styles/recompensas/styles'

import api from '../../api/index'

import { useRouter } from 'next/router'

export default function Card (props) {
    const routes = useRouter()

    async function Click () {
        const token = localStorage.getItem('tokendreamfit')
        api.post(`rewards/redeem/${props.id}`, {},{headers: {"Authorization": token}})
        .then(r => {
            alert(r.data.message)
            routes.reload()
        })
        .catch(e => {
            alert(e.response.data.message)
        })
    }
    
    return (
        <CardT>
            <ImageCard src={props.image}/>
            <Invisible>
                <Hr/>   
            </Invisible>
            <TituloCard>{props.titulo}</TituloCard>
            <Invisible>
                <Hr/>   
            </Invisible>
            <Infos><IconDiv><FaInfoCircle /></IconDiv><TextInfos>{props.descricao}</TextInfos></Infos>
            <Infos><IconDiv><FaShoppingBag /></IconDiv><TextInfos>{`${props.quantidade} itens restantes`}</TextInfos> </Infos>
            <Infos><IconDiv><FaDollarSign /></IconDiv><TextInfos>{props.valor}</TextInfos></Infos>
            <ButtonCard onClick={Click} style={props.quantidade == 0 ? {backgroundColor: '#c4c4c4', cursor: 'default'} : {}}>RESGATAR</ButtonCard>
        </CardT>
    )
}
