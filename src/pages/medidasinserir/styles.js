import styled from'styled-components';

export const Main = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
`;

export const Input = styled.input`
    margin-top: 10px;
    height: 40px;
    width: 400px;
    background: #524E52;
    border-radius: 10px;
    color: #fff;
    border: none;
    text-indent: 20px;
    outline: none;
    ::placeholder {
        color: #241D24;
    }
`;

export const Invisible = styled.div`
    display: flex;
    justify-content: space-between;
    width: 400px;
`;

export const Input2 = styled.div`
    margin-top: 10px;
    height: 40px;
    width: 195px;
    background: #524E52;
    border-radius: 5px;
    color: #fff;
    border: none;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
`;

export const TextInput = styled.p`
    font-size: 16px;
    color: #241D24;
`;

export const InputV = styled.input`
    width: 60px;
    height: 20px;
    background: #383638;
    border: none;
    outline: none;
    border-radius: 5px;
    text-indent: 5px;
    color: #fff;
    ::placeholder {
        color: #241D24;
        text-align: center;
    }
`;

export const Titulo = styled.p`
    font-size: 50px;
    color: #fff;
    font-family: "Fredoka One",Arial, Helvetica, sans-serif;
    margin-top: 100px;
    margin-bottom: 50px;
`;

export const Button = styled.button`
    height: 40px;
    width: 150px;
    background: #8257E6;
    border: none;
    outline: none;
    cursor: pointer;
    color: #fff;
    margin-top: 40px;
    border-radius: 5px;
`;
