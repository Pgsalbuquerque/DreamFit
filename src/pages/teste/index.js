import React, { useState } from 'react';

import { Container ,Input, Button } from './styles';

import api from '../../api/index'

function teste() {

    const [file, setFile] = useState()

    async function handleClick(){
        console.log(file, '-----STATE----')
        const uuid = localStorage.getItem('dreamfituuid')
        const token = localStorage.getItem('tokendreamfit')
        console.log(token)
        console.log(uuid)


        let formdata = new FormData()

        formdata.append('image', file)
        formdata.append('uuid', uuid)

        console.log(formdata)

        await api.post('files', formdata, {headers: {"Authorization": token}})
        .then(r => console.log(r))
        .catch(e => console.log(e))
    
    }

    async function handleClick2(){
        await api.get(`files/${file.name}`)
        .then(r => console.log(r))
        .catch(e => console.log(e))
    
    }

    return <Container> 
        <Input type='file' onChange={e => setFile(e.target.files[0])}></Input>
        <Button onClick={handleClick}>Send</Button>
        <Button onClick={handleClick2}>Send</Button>
    </Container>
}

export default teste;