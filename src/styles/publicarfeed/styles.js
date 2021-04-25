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
    margin-top: 20px;
`;

export const DivPublicar = styled.div`
    width: 50vw;
    height: auto;
    background: #000;
    margin-top: 90px;
    border-bottom-width: 3px;
    border-bottom-color: #29292E;
    border-bottom-style: solid;
    display: flex;
    justify-content: center;
`;


export const IconPublicar = styled.img`
    width: 40%;
    height: 20%;
    border-radius: 50%;
    margin-top: 30px;
`;

export const RightPublicar = styled.div`
    width: 38vw;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const DivBackground = styled.div`
    height: 75%;
    width: 90%;
    background: #232121;
    display: flex;
    flex-direction: column;
    align-items: left;
    border-radius: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
`;

export const InputPublicar = styled.textarea`
    width: 80%;
    height: 85%;
    border: none;
    background: #232121;
    border-radius: 10px;
    outline: none;
    text-indent: 10px;
    color: #fff;
    resize: none;
    margin-left: 10%;
    margin-right: 10%;
    padding: 20px 5px;
    font-size: 14px;
    ::placeholder {
        color: #CCC2C2;
        font-size: 16px;
    }
`;

export const DivImagem = styled.img`
    width: 0;
    height: 0;
    background: #fff;
`;

export const DivFooter = styled.div`
    height: 50px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
    margin-bottom: 10px;
`;

export const Button = styled.button`
    width: 10%;
    height: 80%;
    border: none;
    background: #232121;
    cursor: pointer;
    margin-left: 20px;
    outline: none;
`;

export const ButtonEnviar = styled.button`
    width: 25%;
    height: 80%;
    border: none;
    background: #7B2CBF;
    cursor: pointer;
    border-radius: 10px;
    border: none;
    font-size: 16px;
    font-family: "Fredoka One",Arial, Helvetica, sans-serif;
    color: #fff;
    margin-right: 20px;
    outline: none;

`;