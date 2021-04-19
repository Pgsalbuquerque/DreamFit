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

export const Form = styled.form`
    margin-top: 50px;
    height: 40px;
    width: 300px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background: #524E52;
    border-radius: 10px;
`;

export const InputRadio = styled.input`
    width: 30px;
    height: 60%;
    background-color: #000;
    outline: none;
`;

export const TextoRadio = styled.p`
    font-size: 12px;
    color: #fff;
`;

export const Input = styled.input`
    margin-top: 10px;
    height: 40px;
    width: 300px;
    background: #524E52;
    border-radius: 10px;
    color: #fff;
    border: none;
    text-indent: 10px;
    outline: none;
    ::placeholder {
        color: #fff;
    }
`;

export const Button = styled.button`
    height: 40px;
    width: 5%;
    background: #8257E6;
    border: none;
    outline: none;
    cursor: pointer;
    color: #fff;
    margin-top: 10px;
    border-radius: 5px;
`;

export const Grid = styled.div`
    display: grid;
    height: 40vh;
    width: auto;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    grid-row-gap: 10px;
    margin-top: 10px;
    overflow-x: hidden;
`;

export const Card = styled.button`
    height: 50px;
    width: 200px;
    background: #524E52;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: none;
    cursor: pointer;
    outline: none;
`;

export const InfoText = styled.p`
    font-size: 14px;
    color: #fff;
    width: 90%;
    height: 30%;
`;