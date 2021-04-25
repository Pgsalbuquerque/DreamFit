import styled from 'styled-components';

export const Main = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const LeftDiv = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const RightDiv = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Logo = styled.img`
    height: 80px;
    width: 350px;
    background: #fff;
`;

export const TextInfos = styled.p`
    height: auto;
    width: 450px;
    font-size: 50px;
    color: #fff;
    margin-left: 50px;
    margin-top: 35px;
    font-family: "Fredoka One",Arial, Helvetica, sans-serif;
`;

export const Grid = styled.div`
    margin-top: 35px;
    height: auto;
    width: 450px;
    display: grid;
    grid-template-columns: 170px 170px;
    grid-template-rows: 80px 80px;
    column-gap: 50px;
    row-gap: 50px;
    justify-content: center;
    margin-bottom: 8vh;
`;

export const DivCard = styled.div`
    height: 110px;
    width: 170px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const Image = styled.img`
    height: 80px;
    width: 170px;
    background: #fff;
`;

export const TextCard = styled.p`
    font-size: 12px;
    color: #fff;
    height: auto;
    width: auto;
    margin-top: 10px;
    font-family: "Fredoka One",Arial, Helvetica, sans-serif;
`;

export const LoginDiv = styled.div`
    height: 70%;
    width: 60%;
    background: #202024;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
`;

export const DivInput = styled.div`
    width: 80%;
    height: 36px;
    background: #121214;
    border-radius: 5px;
    margin-top: 15px;
    display: flex;
    align-items: center;
`;

export const Input = styled.input`
    height: 36px;
    width: 100%;
    border: none;
    background: #121214;
    text-indent: 12px;
    color: #fff;
    font-family: "Fredoka One",Arial, Helvetica, sans-serif;
    outline: none;
`;

export const SenhaLink = styled.a`
    font-size: 15px;
    color: #7B2CBF;
    height: auto;
    width: 80%;
    margin-top: 8px;
`;

export const ButtonEntrar = styled.button`
    height: 36px;
    width: 80%;
    border: none;
    border-radius: 7px;
    background: #7B2CBF;
    color: #fff;
    margin-top: 20px;
    font-family: "Fredoka One",Arial, Helvetica, sans-serif;
    outline: none;
    cursor: pointer;
`;

export const DivTextinhos = styled.div`
    width: 80%;
    height: auto;
    margin-top: 15px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const TextA = styled.p`
    font-size: 15px;
    color: #fff;
    height: auto;
    margin-top: 8px;
`

export const LinkA = styled.a`
    font-size: 15px;
    color: #7B2CBF;
    height: auto;
    margin-top: 8px;
    margin-left: 8px;
`