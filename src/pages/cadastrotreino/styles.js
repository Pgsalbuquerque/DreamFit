import styled from 'styled-components'

export const Main = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
`;

export const Titulo = styled.p`
    font-size: 50px;
    color: #fff;
    font-family: "Fredoka One",Arial, Helvetica, sans-serif;
    margin-top: 30px;
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

export const Grid = styled.div`
    width: 500px;
    height: 400px;
    display: grid;
    grid-template-columns: 240px 240px;
    grid-template-rows: 120px 120px 120px;
    grid-column-gap: 10px;
    grid-row-gap: 10px;
    margin-top: 10px;
`;

export const Treino = styled.div`
    width: 240px;
    height: 120px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    
`;

export const InputNome = styled.input`
    height: 30%;
    width: 90%;
    background: #524E52;
    border: none;
    outline: none;
    color: #fff;
    text-indent: 10px;
    ::placeholder {
        color: #241D24;
    }
`

export const InputSec = styled.input`
    height: 30%;
    width: 90%;
    background: #524E52;
    border: none;
    outline: none;
    color: #fff;
    text-indent: 10px;
    ::placeholder {
        color: #241D24;
    }
`

export const Button = styled.button`
    height: 40px;
    width: 100px;
    background: #8257E6;
    border: none;
    outline: none;
    cursor: pointer;
    color: #fff;
    margin-top: 10px;
    border-radius: 5px;
`;