import styled from 'styled-components'

export const Main = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Imagem = styled.div`
    width: 100vw;
    height: calc(100vh - 70px);
    background: url('/fundo.png');
    opacity: 0.8;
    background-repeat: no-repeat;
    background-size: cover;
    position: fixed;
    z-index: -10;
    margin-top: 70px;
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
    
`;

export const LeftPublicar = styled.div`
    width: 10vw;
    min-height: 40vh;
    display: flex;
    justify-content: center;
    align-items: top;
`;

export const IconPublicar = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-top: 30px;
`;


export const RightPublicar = styled.div`
    width: 38vw;
    min-height: 100%;
    display: flex;
    align-items: center;
    justify-content: left;
`;

export const DivBackground = styled.div`
    height: auto;
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

export const DivPublicacoes = styled.div`
    width: 50vw;
    height: auto;
    background: #000;
`;

export const DivDaImagem = styled.div`
    background-repeat: no-repeat;
    background-size: cover;
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

export const CardPubli = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 74vh;
    background: #000;
    margin-top: 30px;
    border-bottom-width: 3px;
    border-bottom-color: #29292E;
    border-bottom-style: solid;
    margin-bottom: 30px;
`; 

export const DivPerfil = styled.div`
    width: 100%;
    height: 13%;
    display: flex;
    align-items: center;
`; 

export const IconPerfil = styled.img`
    height: 50px;
    width: 50px;
    border-radius: 50%;
    margin-left: 10%;
`

export const NomePerfil = styled.p`
    font-size: 18px;
    color: #C4C4C4;
    margin-left: 20px;
    font-weight: bold;
`

export const Desc = styled.p`
    font-size: 18px;
    color: #fff;
    margin-left: 10%;
    margin-right: 10%;
    width: 80%;
`; 

export const ImagemPubli = styled.img`
    width: 80%;
    height: 60%;
    background-repeat: no-repeat;
    background-size: cover;
    margin-top: 10px;
`;

export const DivIcons = styled.div`
    width: 100%;
    height: 13%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`;

export const DivIcon = styled.div`
    display: flex;
    width: auto;
    height: 100%;
    align-items: center;
`

export const ButtonLike = styled.button`
    border: none;
    background: #000;
    cursor: pointer;
    outline: none;
    height: 50%;
`;

export const IconPublicacoes = styled.img`
    height: 100%;
    width: 40px;
    background: #000;
`;

export const TextIcon = styled.p`
    font-size: 16px;
    color: #fff;
    margin-left: 10px;
    font-family: "Fredoka One",Arial, Helvetica, sans-serif;
`;

export const DivSetinhas = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
`;

export const SetaEsquerda = styled.button`
    width: 100px;
    height: 40px;
    background: #7B2CBF;
    border: none;
    cursor: pointer;
    outline: none;
    margin-left: 10px;
    color: #fff;
    font-family: "Fredoka One",Arial, Helvetica, sans-serif;
    font-size: 14px;
    margin-top: 10px;
`;

export const SetaDireita = styled.button`
    width: 100px;
    height: 40px;
    background: #7B2CBF;
    border: none;
    cursor: pointer;
    outline: none;
    margin-right: 10px;
    color: #fff;
    font-family: "Fredoka One",Arial, Helvetica, sans-serif;
    font-size: 14px;
    margin-top: 10px;
`;