import styled from 'styled-components'

export const Main = styled.div`
    display:flex;
    justify-content: space-evenly;
`;

export const Planos = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const OpacityDiv = styled.div`
    width: 100%;
    height: 20%;
    background-color: rgba(0,0,0,.7);
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ImageTreino = styled.div`
    width: 15vw;
    height: 18vh;
    background: url("/ficha2.png");
    background-repeat: no-repeat;
    background-size: cover;
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`;

export const TextoFicha = styled.p`
    font-size: 16px;
    color: #fff;
    font-family: "Fredoka One",Arial, Helvetica, sans-serif;
`;

export const Grid = styled.div`
    display: grid;
    width: 200px;
    grid-template-columns: 1fr;
    grid-row-gap: 10px;
    overflow-x: hidden;
    height: 55vh;
    margin-top: calc(20vh);
    background: #282628;
    ::-webkit-scrollbar {
    display: none;
}
`;

export const BlocoTreinos = styled.div`
    width: 150px;
    height: 160px;
    background: #524E52;
    margin-left: 25px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`;

export const Treino = styled.div`
    height: 14%;
    width: 80%;
    border-radius: 5px;
    background: #C4C4C4;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const TituloTreinoPar = styled.p`
    font-size: 14px;
    color: #5A189A;
    font-family: "Fredoka One",Arial, Helvetica, sans-serif;
    margin-left: 10px;
`

export const TituloTreinoImpar = styled.p`
    font-size: 14px;
    color: #8B1EA7;
    font-family: "Fredoka One",Arial, Helvetica, sans-serif;
    margin-left: 10px;
`

export const SeriesTreinoPar = styled.p`
    font-size: 14px;
    color: #000;
    font-family: "Fredoka One",Arial, Helvetica, sans-serif;
    margin-right: 10px;
`

export const SeriesTreinoImpar = styled.p`
    font-size: 14px;
    color: #554E55;
    font-family: "Fredoka One",Arial, Helvetica, sans-serif;
    margin-right: 10px;
`

export const InfosDiv = styled.div`
    height: 5vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
`;

export const IconInfos = styled.div`
    height: 100%;
    width: 30px;
`;

export const TextoInfos = styled.p`
    font-size: 14px;
    color: #fff;
    font-family: "Fredoka One",Arial, Helvetica, sans-serif;
    width: 60%;
    margin-left: 20px;
`;