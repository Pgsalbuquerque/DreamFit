import styled from 'styled-components';

export const Screen = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`;

export const DivLogin = styled.div`
    background-color: #3a3a3a;
    width: 30%;
    height: 65%;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

export const DivInfos = styled.div`
    display: flex;
    width: 40%;
    height: 85%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-right: 15%;
    background: #d1cfd4;
`;

export const NomeAcademia = styled.p`
    margin-top: 30px;
    color: #5027b0;
    font-size: 60px;
    font-family: Fascinate, sans-serif;
    height: auto;
`;

export const Login = styled.p`
    color: #d1cfd4;
    font-size: 30px;
    font-family: Roboto, sans-serif;
    height: auto;
    margin-top: 100px;
    margin-bottom: 30px;
`;

export const Descricao = styled.p`
    color: #000;
    font-size: 20px;
    font-family: Fascinate, sans-serif;
    height: auto;
    text-align: center;
`;

export const Cpf = styled.input`
    margin-left: 10px;
    width: 75%;
    height: 100%;
    background-color: #d1cfd4;
    border-radius: 6px;
    border: none;
    text-indent: 10px;
`;

export const Senha = styled.input`
    margin-left: 10px;
    width: 75%;
    height: 100%;
    background-color: #d1cfd4;
    border-radius: 6px;
    border: none;
    text-indent: 10px;
`;

export const Invisible = styled.div`
    width: 100%;
    height: 8%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
`;

export const Button = styled.button`
    color: #fff;
    width: 30%;
    height: 8%;
    background-color: #474a51;
    border-radius: 6px;
    border: none;
    margin-top: 20px;

    &:hover {
        background-color: #64676f;
    }
`;

export const Text = styled.p`
    color: #474a51;
    font-size: 25px;
    font-family: Roboto, sans-serif;
    height: auto;
    text-align: center;
    margin-top: 55px;
`;

export const Local = styled.a`
    color: #474a51;
    font-size: 20px;
    font-family: Roboto, sans-serif;
    height: auto;
    text-align: center;
`;

export const Image = styled.img`
    width: 100%;
    height: auto;

`;