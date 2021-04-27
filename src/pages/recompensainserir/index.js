import React, {useState,useEffect} from 'react';

import { Main, Input, Input2, Titulo, Invisible, TextInput, InputV, Button, 
ImageButton, ButtonImage, InputImage, DescImage } from '../../styles/recompensainserir/styles';

import jwt from 'jsonwebtoken'

import api from '../../api/index'

import { useRouter } from 'next/router'

function recompensainserir() {

  const routes = useRouter()
  const [render, setRender] = useState(false);
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [file, setFile] = useState('')
  const [quantidade, setQuantidade] = useState(0);
  const [valor, setValor] = useState(0);

  async function Click(){
    if (file == '') {
      alert('Você não inseriu uma imagem')
      return
    }
    const token = localStorage.getItem('tokendreamfit')
    await api.post('/rewards', {
      title: titulo,
      description: descricao,
      quantity: quantidade,
      price: valor,
      
    }, {headers: {"Authorization": token}}).then(async function (r) {
      const formdata = new FormData()

      formdata.append('image', file)
      formdata.append('id', r.data.id)
      
      await api.post('/files/rewards', formdata, {headers: {"Authorization": token}})
      .then(r => {
        alert('Recompensa inserida com sucesso')
        routes.push('/dashboard')
      })
      .catch(e => {
        alert(e.response.data.message)
      })
    }
    ).catch(e => {
      console.log(e.response.data)
      if (e.response.status == 400) {
        alert(e.response.data.title)
      } else {
        alert(e.response.data.message)
      }
    })
  }

  useEffect(async () => {
    const token = localStorage.getItem('tokendreamfit')
    if (!token) {
      routes.push('login')
    }
    const data = jwt.decode(token.substring(7))
    await api.get('/users/token',{headers: {"Authorization": token}})
        .then(r => {
            if(r.data.status == 202) {
              if (data.role == 20){
                setRender(true)
              } else {
                alert('Você não tem permissão para acessar essa rota')
                routes.push('/login')
              }
            } else if (r.data.status == 200) {
                localStorage.setItem('tokendreamfit', r.data.token)
                if (data.role == 20){
                  setRender(true)
                } else {
                    alert('Você não tem permissão para acessar essa rota')
                    routes.push('/login')
                }
            }
        })
        .catch( e => {
            console.log(e)
            routes.push('/login')
        }
        )
  }, [])

  return (
    render == false 
    ? <div></div>
    :
      <Main>
          <Titulo>Inserir Recompensa</Titulo>
          <InputImage>
            <DescImage>Imagem aqui</DescImage>
              <input type='file' style={{position: 'absolute', opacity: 0}} onChange={e => setFile(e.target.files[0])}></input>
          </InputImage>
          <Input placeholder="Titulo" value={titulo} onChange={e => setTitulo(e.target.value)}></Input>
          <Input placeholder="Descrição" value={descricao} onChange={e => setDescricao(e.target.value)}></Input>
          <Invisible>
              <Input2>
                <TextInput>Quantidade: </TextInput>
                <InputV placeholder="quant" value={quantidade} onChange={e => setQuantidade(e.target.value)}></InputV>
              </Input2>
              <Input2>
                <TextInput>valor: </TextInput>
                <InputV placeholder="uni" value={valor} onChange={e => setValor(e.target.value)}></InputV>
              </Input2>
          </Invisible>
          
          <Button onClick={Click}>Enviar</Button>
      </Main>
  )
}

export default recompensainserir;