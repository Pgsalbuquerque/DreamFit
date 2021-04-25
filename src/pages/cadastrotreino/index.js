import React, { useState } from 'react';

import { Main, Titulo, Form,InputRadio, TextoRadio, Grid, Treino, InputNome, InputSec, Button } from '../../styles/cadastrotreino/styles';

import {useRouter} from 'next/router'

import api from '../../api/index'

function cadastrotreino() {
    const routes = useRouter()
    const [tipo, setTipo] = useState('Peito')
    const [exercicio, setExercicio] = useState()
    const [sec, setSec] = useState()
    const [exercicio2, setExercicio2] = useState()
    const [sec2, setSec2] = useState()
    const [exercicio3, setExercicio3] = useState()
    const [sec3, setSec3] = useState()
    const [exercicio4, setExercicio4] = useState()
    const [sec4, setSec4] = useState()
    const [exercicio5, setExercicio5] = useState()
    const [sec5, setSec5] = useState()
    const [exercicio6, setExercicio6] = useState()
    const [sec6, setSec6] = useState()


    async function Click() {
        const token = localStorage.getItem('tokendreamfit')
        await api.post(`/users/exercises/${routes.query.uuid}`,{
            type: tipo,
            exercises: [
                {
                    name: exercicio,
                    reps: sec
                },
                {
                    name: exercicio2,
                    reps: sec2
                },
                {
                    name: exercicio3,
                    reps: sec3
                },
                {
                    name: exercicio4,
                    reps: sec4
                },
                {
                    name: exercicio5,
                    reps: sec5
                },
                {
                    name: exercicio6,
                    reps: sec6
                },
            ]
          }, {headers: {"Authorization": token}}).then(r => {
            alert('Treino cadastrado com sucesso')
            routes.push('busca')
          }).catch(e => console.log(e))
  }

  return (
    

    <Main>
            <Titulo>Cadastrar treino</Titulo>
            <Form>
                <InputRadio type="radio" id="Peito" name="role" value="Peito" onClick={() => setTipo('Peito')} ></InputRadio>
                <TextoRadio for="Peito">Peito</TextoRadio>
                <InputRadio type="radio" id="Perna" name="role" value="Perna" onClick={() => setTipo('Perna')}></InputRadio>
                <TextoRadio for="Perna">Perna</TextoRadio>
                <InputRadio type="radio" id="Costas" name="role" value="Costas" onClick={() => setTipo('Costas')}></InputRadio>
                <TextoRadio for="Costas">Costa</TextoRadio>
            </Form>
            <Grid>
                <Treino>
                    <InputNome placeholder="Nome do treino" value={exercicio} onChange={e => setExercicio(e.target.value)}></InputNome>
                    <InputSec placeholder="Seções (2x10)" value={sec} onChange={e => setSec(e.target.value)}></InputSec>
                </Treino>
                <Treino>
                    <InputNome placeholder="Nome do treino" value={exercicio2} onChange={e => setExercicio2(e.target.value)}></InputNome>
                    <InputSec placeholder="Seções (2x10)" value={sec2} onChange={e => setSec2(e.target.value)}></InputSec>
                </Treino>
                <Treino>
                    <InputNome placeholder="Nome do treino" value={exercicio3} onChange={e => setExercicio3(e.target.value)}></InputNome>
                    <InputSec placeholder="Seções (2x10)" value={sec3} onChange={e => setSec3(e.target.value)}></InputSec>
                </Treino>
                <Treino>
                    <InputNome placeholder="Nome do treino" value={exercicio4} onChange={e => setExercicio4(e.target.value)}></InputNome>
                    <InputSec placeholder="Seções (2x10)" value={sec4} onChange={e => setSec4(e.target.value)}></InputSec>
                </Treino>
                <Treino>
                    <InputNome placeholder="Nome do treino" value={exercicio5} onChange={e => setExercicio5(e.target.value)}></InputNome>
                    <InputSec placeholder="Seções (2x10)" value={sec5} onChange={e => setSec5(e.target.value)}></InputSec>
                </Treino>
                <Treino>
                    <InputNome placeholder="Nome do treino" value={exercicio6} onChange={e => setExercicio6(e.target.value)}></InputNome>
                    <InputSec placeholder="Seções (2x10)" value={sec6} onChange={e => setSec6(e.target.value)}></InputSec>
                </Treino>
            </Grid>
            <Button onClick={Click}>Enviar</Button>
    </Main>
  )
}

export default cadastrotreino;