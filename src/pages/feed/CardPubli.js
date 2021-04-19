import React from 'react';
import { FaGuitar } from 'react-icons/fa';

import { CardPubli, DivPerfil, Desc, ImagemPubli, DivIcons, IconPerfil, NomePerfil, IconPublicacoes,
DivIcon, TextIcon, ButtonLike } from './styles';

function CardPublicacoes() {
  return (
        <CardPubli>
            <DivPerfil>
                <IconPerfil src="gui.png"></IconPerfil>
                <NomePerfil>Guilherme Santiago</NomePerfil>
            </DivPerfil>
            <Desc>Slv slv galera meu treininho de cardio de hoje gerando ans altura :) #focado Slv slv galera meu treininho de cardio de hoje gerando ans altura :) #focado </Desc>
            <ImagemPubli src="/carousel1.png" ></ImagemPubli>
            <DivIcons>
                <DivIcon>
                    <ButtonLike>
                        <IconPublicacoes src="like.svg"></IconPublicacoes>
                    </ButtonLike>
                    <TextIcon>15</TextIcon>
                </DivIcon>
                <DivIcon>
                    <ButtonLike>
                        <IconPublicacoes src="triste.svg"></IconPublicacoes>
                    </ButtonLike>
                    <TextIcon>15</TextIcon>
                </DivIcon>
                <DivIcon>
                    <ButtonLike>
                        <IconPublicacoes src="forte.svg"></IconPublicacoes>
                    </ButtonLike>
                    <TextIcon>15</TextIcon>
                </DivIcon>
            </DivIcons>
        </CardPubli>
  )
}

export default CardPublicacoes;