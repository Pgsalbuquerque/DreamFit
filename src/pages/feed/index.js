import React, {useState, useEffect} from 'react';

import { Main, DivPublicar, LeftPublicar, RightPublicar, Imagem, DivPublicacoes, IconPublicar,
DivBackground, InputPublicar, DivImagem, Button, DivFooter, ButtonEnviar, DivDaImagem, DivSetinhas,
SetaEsquerda, SetaDireita } from '../../styles/feed/styles';

import {useRouter} from 'next/router'

import jwt from 'jsonwebtoken'

import api from '../../api/index'

import Header from '../_headergeral'
import CardPubli from './CardPubli'
import {FaFileImage} from 'react-icons/fa'

function PressKey (){ 
    const textarea = document.querySelector('textarea')

    if (textarea.value.length > 150) {
        textarea.value = textarea.value.substring(0, textarea.value.length-1)
    }
    
}



function ClickButton() {
    const Div = document.querySelector("#divback");
    console.log(Div.style.height)
    Div.style.height = "400px"
    const InputBack = document.querySelector("#inputback");
    InputBack.style.height = "50%"
    const Imagem = document.querySelector("#imgback")
    Imagem.style.height = "300px"
    Imagem.style.width = "90%"
    Imagem.style.marginLeft = "5%"
    Imagem.style.marginBottom = "5%"
}

function feed() {
    const routes = useRouter()
    const [render, setRender] = useState(false)
    const [file, setFile] = useState(null)
    const [posts, setPosts] = useState(null)
    const [description, setDescription] = useState('')
    const [page, setPage] = useState(1)

    useEffect(async () => {
        const token = localStorage.getItem('tokendreamfit')
        if (!token) {
            routes.push('login')
        }
        const data = jwt.decode(token.substring(7))
        await api.get('/users/token',{headers: {"Authorization": token}})
            .then(r => {
                if(r.data.status == 202) {
                    if (data.role != 20){
                        setRender(true)
                    } else {
                        alert('Você não tem permissão para acessar essa rota')
                        routes.push('/login')
                    }
                    
                } else if (r.data.status == 200) {
                    localStorage.setItem('tokendreamfit', r.data.token)
                    if (data.role != 20){
                        setRender(true)
                    } else {
                        alert('Você não tem permissão para acessar essa rota')
                        routes.push('/login')
                    }
                }
            })
            .catch( e => {
                routes.push('/login')
            }
            )
        
        api.get('/posts', { params: { page: page }, headers: {"Authorization": token} })
        .then(r => setPosts(r.data))
        .catch(e => console.log(e.response.data))
      }, [])

      async function InputClick(fi) {
          
          var reader = new FileReader();
            console.log(document.querySelector('#imgfile'))
          reader.onload = function(f) {
            document.querySelector('#imgfile').src = f.target.result
          }

          reader.readAsDataURL(fi)
          setFile(fi)

      }

      async function Click() {
          
          const token = localStorage.getItem('tokendreamfit')
          var formdata = new FormData()

          formdata.append('image', file)
          formdata.append('description', description)

          api.post('/posts', formdata, {headers: {"Authorization": token} })
          .then(r => {
              alert('Publicação feita com sucesso')
              routes.reload()
          })
          .catch(e => console.log(e))
      }

    async function Left() {
        const token = localStorage.getItem('tokendreamfit')
        const nextPage = page -1 
        setPage(nextPage)
        console.log(nextPage)
        await api.get('/posts', { params: { page: nextPage }, headers: {"Authorization": token} })
        .then(r => setPosts(r.data))
        .catch(e => console.log(e.response.data))
      }
      
    async function Right() {
        const token = localStorage.getItem('tokendreamfit')
        const nextPage = page +1
        setPage(nextPage)
        console.log(nextPage)
        await api.get('/posts', { params: { page: nextPage }, headers: {"Authorization": token} })
        .then(r => setPosts(r.data))
        .catch(e => console.log(e.response.data))
      }

      return (
        render == false 
        ? <div></div>
        :
        <>
            <Header tela="FEED" positionF/>
            <Main>
                <Imagem></Imagem>
                <DivPublicar>
                    <LeftPublicar>
                        <IconPublicar src={posts ? posts.profile_picture : ''}></IconPublicar>
                    </LeftPublicar>
                    <RightPublicar >
                        <DivBackground id="divback">
                            <InputPublicar id="inputback" style={file ? {height: '50%'} : {}} onChange={e => setDescription(e.target.value)} placeholder="Como foi seu treino hoje?"></InputPublicar>
                            <DivDaImagem style={file ? {height: 'auto', width: '60%', marginLeft: '20%', marginBottom: '5%'} : {}}>
                                <DivImagem id="imgfile" style={file ? {height: '100%', width: '100%'} : {}}></DivImagem>
                            </DivDaImagem>
                            <DivFooter>
                                <div>
                                    <input  type="file" onChange={e => InputClick(e.target.files[0])} style={{position: 'absolute', opacity: 0}}></input>
                                    <img style={{width: "25px", height:"25px", marginLeft: '20px'}} src="uploadimage.svg"></img>
                                </div>
                                <ButtonEnviar onClick={Click}>Enviar</ButtonEnviar>
                            </DivFooter>
                        </DivBackground>
                    </RightPublicar>
                </DivPublicar>
                <DivPublicacoes>
                    {posts ? posts.posts.map((elemento, index) => <CardPubli 
                        descricao={elemento.description}
                        image={elemento.picture}
                        nome={elemento.user.name}
                        perfil={elemento.user.profile_picture}
                        id={elemento.id}
                        key={index}
                        likes={elemento.likes}
                        emotes={elemento.emotes}
                        arms={elemento.arms}
                        action={elemento.userAction}
                    />) : <div></div>}
                    <DivSetinhas>
                        <SetaEsquerda onClick={Left} style={page == 1 ? {width: 0, height: 0, fontSize: 0} : {}}>
                            Voltar
                        </SetaEsquerda>
                        <SetaDireita onClick={Right} style={posts ? posts.posts.length == 0 ? {width: 0, height: 0, fontSize: 0} : {} : {}}>
                            Avançar
                        </SetaDireita>
                    </DivSetinhas>
                </DivPublicacoes>
            </Main>
        </>
    )
}

export default feed;