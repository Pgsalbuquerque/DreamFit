import React from 'react';

import { Main, Yellow, White, Telinha, Plano, PlanoNome, TextApartir, Valor, DescPlanos,
Linha, Diferencial, Items, Button } from './cardplanostyles';

export default function pages() {
  return (
      <Main>
          <Telinha>
              <TextApartir>A partir de</TextApartir>
              <Valor>R$ 169,00</Valor>
          </Telinha>
          <Yellow>
            <Plano>Plano</Plano>
            <PlanoNome>DREAM</PlanoNome>
          </Yellow>
          <White>
            <DescPlanos>Treine 1 vez ao dia na nossa academia e ganhe recompensas</DescPlanos>
            <Linha></Linha>
            <Diferencial>Diferencial</Diferencial>
            <Items>Aulas de ginástica</Items>
            <Items>Aulas de Aeróbico</Items>
            <Items>Aulas de Ginástica</Items>
            <Items>Aulas de Aeróbico</Items>
            <Items>Aulas de Ginástica</Items>
          </White>
          <Button href="https://facebook.com" target="_blank">Venha nos visitar!</Button>
      </Main>
  );
}

