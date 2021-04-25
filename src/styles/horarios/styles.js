import styled from 'styled-components'

export const Main = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
`;

export const LeftDiv = styled.div`
    height: calc(100vh - 70px);
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 10vh;
`;

export const DivTransparente = styled.div`
    height: auto;
    width: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: fixed;
`;

export const Grid = styled.div`
    width: 60%;
    margin-top: 80px;
    margin-bottom: 30px;
    display: grid;
    grid-template-columns: 300px;
    grid-template-rows: 100px;
    grid-row-gap: 20px;
    justify-content: space-evenly;
`;


export const Image = styled.img`
    width: 100%;
    height: 240px;
`; 

export const InfosDiv = styled.div`
    height: auto;
    width: 80%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
`;

export const TextHorarios = styled.p`
    height: auto;
    font-size: 28px;
    color: #fff;
    font-family: "Fredoka One",Arial, Helvetica, sans-serif;
    display: flex;
    align-items: center;
    margin-left: 8px;
`;

export const InfosText = styled.p`
    height: auto;
    font-size: 14px;
    color: #fff;
    font-family: "Fredoka One",Arial, Helvetica, sans-serif;
    display: flex;
    align-items: center;
    margin-left: 8px;
`;

export const Card = styled.div`
    width: 300px;
    height: 100px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`;

export const Card1 = styled.div`
    width: 100%;
    height: 38%;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const TextCard = styled.p`
    font-size: 20px;
    color: #fff;
    font-family: "Fredoka One",Arial, Helvetica, sans-serif;
`;

export const Card2 = styled.div`
    width: 100%;
    height: 26%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const TextHorarioCard = styled.p`
    font-size: 13px;
    color: #fff;
    font-family: "Fredoka One",Arial, Helvetica, sans-serif;
    margin-left: 10px;
`;

export const VagasDiv = styled.div`
    width: 20%;
    height: 100%;
    display: flex;
    align-items: center;
    margin-right: 40px;
`;

export const IconVagas = styled.div`
    width: 50%;
    height: 60%;
`;


export const Card3 = styled.div`
    width: 100%;
    height: 26%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
`

export const TipoTreino = styled.p`
    font-size: 16px;
    color: #8F8E8F;
    font-family: "Fredoka One",Arial, Helvetica, sans-serif;
    margin-left: 10px;
`;

export const Button = styled.button`
    height: 100%;
    width: 38%;
    border: none;
    border-radius: 5px;
    margin-right: 10px;
    outline: none;
    cursor: pointer;
`;

export const TextButton = styled.p`
    font-size: 10px;
    color: #fff;
    font-family: "Fredoka One",Arial, Helvetica, sans-serif;
`;