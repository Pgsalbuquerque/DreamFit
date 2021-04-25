
import styled from 'styled-components'

export const Main = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
`;

export const LeftDiv = styled.div`
    height: calc(100vh - 70px);
    width: 25%;
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

export const Image = styled.img`
    width: 80%;
    height: 120px;
    background: #fff;
`; 

export const FitCoin = styled.div`
    height: 100px;
    width: 60%;
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    margin-top: 35%;
`;

export const Coin = styled.img`
    height: 60%;
    width: 35%;
`;

export const QtCoins = styled.p`
    height: auto;
    font-size: 38px;
    color: #fff;
    font-family: "Fredoka One",Arial, Helvetica, sans-serif;
    
`;

export const TextFitCoins = styled.p`
    height: auto;
    font-size: 30px;
    color: #fff;
    font-family: "Fredoka One",Arial, Helvetica, sans-serif;
    
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

export const InfosText = styled.p`
    height: auto;
    font-size: 16px;
    color: #fff;
    font-family: "Fredoka One",Arial, Helvetica, sans-serif;
    display: flex;
    align-items: center;
    margin-left: 8px;
`;

export const Grid = styled.div`
    width: 75%;
    margin-top: 70px;
    display: grid;
    grid-template-columns: 200px 200px 200px 200px;
    grid-template-rows: 1fr;
    grid-row-gap: 50px;
    justify-content: space-evenly;
    align-content: space-evenly;
`;

export const CardT = styled.div`
    height: 410px;
    width: 200px;
    background: #29292E;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ImageCard = styled.img`
    margin-top: 10px;
    width: 180px;
    height: 35%;
    border-radius: 5px;
    margin-bottom: 20px;
`;

export const Invisible = styled.div`
    height: auto;
    width: 80%;
`;

export const Hr = styled.hr`
    color: #fff;
`;

export const TituloCard = styled.p`
    margin-top: 10px;
    margin-bottom: 10px;
    height: auto;
    font-size: 24px;
    color: #fff;
    font-family: "Fredoka One",Arial, Helvetica, sans-serif;
    display: flex;
    align-items: center;
    text-align: center;
`;

export const Infos = styled.div`
    margin-top: 10px;
    margin-left: 20px;
    height: auto;
    width: 90%;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 15px;
`;

export const IconDiv = styled.div`
    height: auto;
    width: 30px;
`;

export const TextInfos = styled.p`
    margin-left: 10px;
    height: auto;
    width: 60%;
    font-size: 12px;
    color: #fff;
    font-family: "Fredoka One",Arial, Helvetica, sans-serif;
    display: flex;
    align-items: center;
`;

export const ButtonCard = styled.button`
    margin-top: 10px;
    width: 50%;
    height: 30px;
    background-color: #5A189A;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    color: #fff;
    font-family: "Fredoka One",Arial, Helvetica, sans-serif;
    outline: none;
`;