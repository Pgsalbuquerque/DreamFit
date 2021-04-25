import React from 'react';

import { Main, Yellow, White, Telinha, Plano, PlanoNome, TextApartir, Valor, DescPlanos,
Linha, Diferencial, Items, Button } from '../styles/cardplanostyles';

export default function pages(props) {
  return (
      <Main>
          <Telinha>
              <TextApartir>A partir de</TextApartir>
              <Valor>{props.valor}</Valor>
          </Telinha>
          <Yellow>
            <Plano>Plano</Plano>
            <PlanoNome>{props.nome}</PlanoNome>
          </Yellow>
          <White>
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

