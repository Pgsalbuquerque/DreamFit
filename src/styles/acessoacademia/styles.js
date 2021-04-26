import styled from 'styled-components'

export const Main = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
`;

export const Titulo = styled.p`
    font-size: 50px;
    color: #fff;
    font-family: "Fredoka One",Arial, Helvetica, sans-serif;
    margin-top: 100px;
`;

export const RightDiv = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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

export const IconConfirm = styled.img`
    width: 50px;
    height: 50px;
    background: #202024;
    margin-top: 10px;
`;