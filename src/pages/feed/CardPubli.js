import React, {useState} from 'react';
import { FaGuitar } from 'react-icons/fa';

import { CardPubli, DivPerfil, Desc, ImagemPubli, DivIcons, IconPerfil, NomePerfil, IconPublicacoes,
DivIcon, TextIcon, ButtonLike } from '../../styles/feed/styles';

import api from '../../api/index'

function CardPublicacoes(props) {
    const [actionUser, setActionUser] = useState(props.action)
    const [likes, setLikes] = useState(props.likes)
    const [sad, setSad] = useState(props.emotes)
    const [arms, setArms] = useState(props.arms)
    

    async function Like(){
        const token = localStorage.getItem('tokendreamfit')
        if (actionUser == null) {
            await api.put(`posts/${props.id}`, {
                arm: false,
                emote: false,
                like: true,
                put: true
            }, {headers: {"Authorization": token} })
            .then(r => {
                console.log(r)
                setActionUser('Like')
                setLikes(likes+1)
            })
            .catch(e => console.log(e))
        } else if (actionUser == 'Like') {
            await api.put(`posts/${props.id}`, {
                arm: false,
                emote: false,
                like: true,
                put: false
            }, {headers: {"Authorization": token} })
            .then(r => {
                console.log(r)
                setActionUser(null)
                setLikes(likes-1)
            })
            .catch(e => console.log(e))
        } else {
            await api.put(`posts/${props.id}`, {
                arm: false,
                emote: false,
                like: true,
                put: true
            }, {headers: {"Authorization": token} })
            .then(r => {
                console.log(r)
                if (actionUser == 'Emote') {
                    setSad(sad-1)
                } else if (actionUser == 'Arm') {
                    setArms(arms-1)
                }
                setActionUser('Like')
                setLikes(likes+1)
            })
            .catch(e => console.log(e))
        }
    }

    async function Sad(){
        const token = localStorage.getItem('tokendreamfit')
        if (actionUser == null) {
            await api.put(`posts/${props.id}`, {
                arm: false,
                emote: true,
                like: false,
                put: true
            }, {headers: {"Authorization": token} })
            .then(r => {
                console.log(r)
                setActionUser('Emote')
                setSad(sad+1)
            })
            .catch(e => console.log(e))
        } else if (actionUser == 'Emote') {
            await api.put(`posts/${props.id}`, {
                arm: false,
                emote: true,
                like: false,
                put: false
            }, {headers: {"Authorization": token} })
            .then(r => {
                console.log(r)
                setActionUser(null)
                setSad(sad-1)
            })
            .catch(e => console.log(e))
        } else {
            await api.put(`posts/${props.id}`, {
                arm: false,
                emote: true,
                like: false,
                put: true
            }, {headers: {"Authorization": token} })
            .then(r => {
                console.log(r)
                if (actionUser == 'Like') {
                    setLikes(likes-1)
                } else if (actionUser == 'Arm') {
                    setArms(arms-1)
                }
                setSad(sad+1)
                setActionUser('Emote')
            })
            .catch(e => console.log(e))
    }
}

    async function Strong(){
        const token = localStorage.getItem('tokendreamfit')
        if (actionUser == null) {
            await api.put(`posts/${props.id}`, {
                arm: true,
                emote: false,
                like: false,
                put: true
            }, {headers: {"Authorization": token} })
            .then(r => {
                console.log(r)
                setActionUser('Arm')
                setArms(arms+1)
            })
            .catch(e => console.log(e))
        } else if (actionUser == 'Arm') {
            await api.put(`posts/${props.id}`, {
                arm: true,
                emote: false,
                like: false,
                put: false
            }, {headers: {"Authorization": token} })
            .then(r => {
                console.log(r)
                setActionUser(null)
                setArms(arms-1)
            })
            .catch(e => console.log(e))
        } else {
            await api.put(`posts/${props.id}`, {
                arm: true,
                emote: false,
                like: false,
                put: true
            }, {headers: {"Authorization": token} })
            .then(r => {
                console.log(r)
                if (actionUser == 'Like') {
                    setLikes(likes-1)
                } else if (actionUser == 'Emote') {
                    setSad(sad-1)
                }
                setArms(arms+1)
                setActionUser('Arm')
            })
            .catch(e => console.log(e))
    }
    }

    return (
        <CardPubli >
            <DivPerfil>
                <IconPerfil src={props.perfil}></IconPerfil>
                <NomePerfil>{props.nome}</NomePerfil>
            </DivPerfil>
            <Desc>{props.descricao}</Desc>
            <ImagemPubli src={props.image}></ImagemPubli>
            <DivIcons >
                <DivIcon>
                    <ButtonLike onClick={Like}>
                        <IconPublicacoes src={actionUser == 'Like' ? 'like_action.svg' : 'like.svg'}></IconPublicacoes>
                    </ButtonLike>
                    <TextIcon>{likes}</TextIcon>
                </DivIcon>
                <DivIcon>
                    <ButtonLike onClick={Sad}>
                        <IconPublicacoes src={actionUser == 'Emote' ? 'triste_action.svg' : 'triste.svg'}></IconPublicacoes>
                    </ButtonLike>
                    <TextIcon>{sad}</TextIcon>
                </DivIcon>
                <DivIcon>
                    <ButtonLike onClick={Strong}>
                        <IconPublicacoes src={actionUser == 'Arm' ? 'forte_action.svg' : 'forte.svg'}></IconPublicacoes>
                    </ButtonLike>
                    <TextIcon>{arms}</TextIcon>
                </DivIcon>
            </DivIcons>
        </CardPubli>
  )
}

export default CardPublicacoes;