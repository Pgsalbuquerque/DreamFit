import React, { useState } from 'react';

import { Container ,Input, Button } from './styles';

import api from '../../api/index'

function teste() {

    const [file, setFile] = useState()

    function handleClick(){
        console.log(file, '-----STATE----')

        let formdata = new FormData()

        formdata.append('image', file)
        // formdata.append('name', file.name)

        console.log('crieivu')

        //api.post('teste', formdata, {headers: {Authorization: 'meutokenaqui'}})
    
    }

    return <Container> 
        <Input type='file' onChange={e => setFile(e.target.files[0])}></Input>
        <Button onClick={handleClick}>Send</Button>
    </Container>
}

export default teste;