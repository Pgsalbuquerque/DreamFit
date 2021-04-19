import styled from 'styled-components'

export const Main = styled.div`
`;

export const DivCarousel = styled.div`
    margin-left: 40px;
    margin-right: 40px;
    width: calc(100% -80px);
    height: calc(100vh - 110px);
    margin-top: 5px;
`;

export const Image = styled.img`
    height: 80vh;
    width: 90%;
`;

export const DivHorariosInvisible = styled.div`
    height: 350px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const DivHorarios = styled.div`
    height: 300px;
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
    
`;

export const DivMaior = styled.div`
    height: 300px;
    width: 70%;
    background: #CF2323;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
`;

export const DivMenor = styled.div`
    height: 93%;
    width: 93%;
    background: #F62C2C;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
`;

export const ImageHorarios = styled.img`
    height: 200px;
    width: 200px;
    z-index: 10;
    position: absolute;
    left: 29%;
`;


export const DivDesc = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Div20 = styled.div`
    width: 20%;
    height: 100%;
`
export const Div80 = styled.div`
    height: 100%;
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const DescHorarios = styled.p`
    font-size: 24px;
    font-family: "Fredoka One",Arial, Helvetica, sans-serif;
    color: #fff;
    text-align: left;
    width: 100%;
`

export const TituloHorario = styled.p`
    font-size: 50px;
    color: #fff;
    font-family: "Fredoka One",Arial, Helvetica, sans-serif;
    width: 100%;
    text-align: center;
    margin-top: 60px;
`;

export const DivInfosInvisible = styled.div`
    height: 500px;
    width: 100%;
    margin-top: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 30px;
`;

export const DivInfos = styled.div`
    height: 500px;
    width: 95%;
    background: url('/alerta1.png');
    background-repeat: no-repeat;
    background-size: cover;

`;

export const DivCards = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin-top: 200px;
`; 

export const Footer = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin-top: 80px;
    margin-bottom: 100px;
`;

export const Textinho = styled.p`
    font-size: 20px;
    color: #fff;
    text-align: center;
    width: 300px;
    margin-left: 200px;
`;

export const DivLocal = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Localizacao = styled.a`
    font-size: 18px;
    color: #fff;
    margin-left: 10px;
    margin-right: 200px;
`;

export const Icon = styled.img`
    height: 50px;
    width: 40px;
    
`;

export const DivTextPlanos = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
`;

export const DivEncapsulamento = styled.div`
    display: flex;
`;

export const TextPlanos = styled.p`
    font-size: 50px;
    font-family: "Fredoka One",Arial, Helvetica, sans-serif;
`

export const TextPlanos2 = styled.p`
    font-size: 50px;
    margin-left: 12px;
    color: #7B2CBF;
    font-family: "Fredoka One",Arial, Helvetica, sans-serif;
`

export const DescPlanos = styled.p`
    font-size: 25px;
    margin-top: 10px;
`

export const CardsPlanos = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    margin-top: 20px;
`;