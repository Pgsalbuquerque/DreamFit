import styled from 'styled-components'

export const Main = styled.div`
    display:flex;
    justify-content: space-evenly;
`;

export const Planos = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
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
    width: 15vw;
    height: 300px;
    margin-top: 22vh;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`;

export const Treino = styled.div`
    height: 30px;
    width: 100%;
    border-radius: 5px;
    background: #282628;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const DivSec = styled.div`
    background: #3E393E;
    height: 100%;
    display: flex;
    border-radius: 0 4px 4px 0;
    align-items: center;
    justify-content: center;
    width: 25%;
`;

export const TituloTreino = styled.p`
    font-size: 14px;
    color: #fff;
    font-family: "Fredoka One",Arial, Helvetica, sans-serif;
    margin-left: 20px;
`
export const SeriesTreino = styled.p`
    font-size: 14px;
    width: 100%;
    color: #fff;
    font-family: "Fredoka One",Arial, Helvetica, sans-serif;
    text-align: center;
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