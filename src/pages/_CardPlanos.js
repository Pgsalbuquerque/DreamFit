import React from 'react';

import { Main, Yellow, White, Telinha, Plano, PlanoNome, TextApartir, Valor, DescPlanos,
Linha, Diferencial, Items, Button, DivBlack, DivInvisiblePlano } from '../styles/cardplanostyles';

export default function pages(props) {
  return (
      <Main>
          <Yellow>
            <DivInvisiblePlano>
              <Plano>Plano</Plano>
              <PlanoNome>{props.nome}</PlanoNome>
            </DivInvisiblePlano>
            <DivBlack></DivBlack>
          </Yellow>
          <White>
            <Telinha>
                <TextApartir>A partir de</TextApartir>
                <Valor>{props.valor}</Valor>
            </Telinha>
            <DescPlanos>Ganhe pontos a cada dia treinado e troque por recompensas</DescPlanos>
            <Linha></Linha>
            <Diferencial>Aulas</Diferencial>
            {props.dream 
            ? 
            <>
              <Items>Musculação</Items>
              <Items>Dança</Items>
              <Items>Pilates</Items>
              <Items>Boxe</Items>
            </>
            : 
            <>
                <Items>Musculação</Items>
                <Items>Dança</Items>
                <Items>Pilates</Items>
                <Items>Boxe</Items>
                <Items>Ginástica</Items>
                <Items>Hidro ginástica</Items>
            </>
          }
            
          </White>
      </Main>
  );
}

