import styled from 'styled-components'

export const Main = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`; 

export const Perfil = styled.div`
    width: 100%;
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
`;

export const ImagemFundo = styled.div`
    width: 100%;
    height: 100%;
    background: url('/perfil.png');
    opacity: 0.7;
    background-repeat: no-repeat;
    background-size: cover;
    position: fixed;
    z-index: -10;
`;

export const PerfilInfos = styled.div`
    width: 40%;
    height: 80%;
    background: #000;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    margin-top: 5%;
`;

export const Bloco1 = styled.div`
    height: 18%;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
`;

export const FotoDiv = styled.div`
    height: 80%;
    width: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
`;

export const Foto = styled.img`
    width: 75%;
    height: 75%;
    border-radius: 50%;
`;

export const Icon = styled.div`
    width: 100%;
    height: 25%;
    display: flex;
    justify-content: flex-end;
`;

export const ImageButton = styled.button`
    width: 20%;
    height: 100%;
    border: none;
    outline: none;
    cursor: pointer;
    background: #000;
`;

export const NomeIdade = styled.div`
    height: 100%;
    width: 200px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`;

export const Nome = styled.p`
    font-size: 20px;
    color: #fff;
    font-family: "Fredoka One",Arial, Helvetica, sans-serif;
`;

export const Idade = styled.p`
    font-size: 16px;
    color: #fff;
    font-family: "Fredoka One",Arial, Helvetica, sans-serif;
    margin-left: 10px;
`;

export const Plano = styled.div`
    height: 60%;
    width: 100px;
    background: #8257E6;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const PlanoText = styled.div`
    font-size: 13px;
    color: #fff;
    font-family: "Fredoka One",Arial, Helvetica, sans-serif;
`

export const NomePlanoText = styled.div`
    font-size: 17px;
    color: #000;
    font-family: "Fredoka One",Arial, Helvetica, sans-serif;
`


export const Bloco2 = styled.div`
    height: 56%;
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background: #29292E;
    border-radius: 10px;
`;

export const TextMedidas = styled.p`
    height: 20%;
    font-size: 24px;
    color: #fff;
    font-family: "Fredoka One",Arial, Helvetica, sans-serif;
    margin-top: 10px;
`;

export const Medidas = styled.div`
    height: 68%;
    width: 100%;
    display: grid;      
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-column-gap: 10px;
    grid-row-gap: 10px;
`

export const DivPeso = styled.div`
    height: 32%;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const Medida = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`

export const IconMedida = styled.img`
    height: 60%;
    width: 20%;
`;

export const ValorMedida = styled.p`
    font-size: 24px;
    color: #fff;
    font-family: "Fredoka One",Arial, Helvetica, sans-serif;
`;

export const SetaMedida = styled.img`
    height: 35%;
    width: 15%;
`;

export const Bloco3 = styled.div`
    height: 14%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`;

export const InfoDiv = styled.div`
    width: 30%;
    height: 100%;
    background: #29292E;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
`;

export const IconInfo = styled.img`
    height: 50%;
    width: 25%;
`;

export const TextInfo = styled.p`
    font-size: 18px;
    color: #fff;
    font-family: "Fredoka One",Arial, Helvetica, sans-serif;
    text-align: center;
    text-indent: center;
    margin-left: 10px;
`;

export const ButtonLogOut = styled.button`
    height: 40px;
    width: 80px;
    background-color: #5A189A;
    color: #fff;
    border: none;
    outline: none;
    cursor: pointer;
    font-family: "Fredoka One",Arial, Helvetica, sans-serif;
    border-radius: 10px;
`;