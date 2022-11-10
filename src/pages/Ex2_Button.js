import React from 'react';
import { Stack, Button, IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

export default function Ex2_Button(){

    function clickHandle(){
        alert("Click!");
    }

    return(
        <Stack spacing={4}>
        <Stack spacing={2} direction='row'>
            <Button variant="text" href='https://google.com'>Text</Button>
            <Button variant="contained">Contained</Button>
            <Button variant="outlined">Outlined</Button>
        </Stack>
        <Stack spacing={2} direction='row'>
            <Button variant="contained" color='secondary'>secondary</Button>
            <Button variant="contained" color='primary'>primary</Button>
            <Button variant="contained" color='success'>success</Button>
            <Button variant="contained" color='error'>error</Button>
            <Button variant="contained" color='info'>info</Button>
            <Button variant="contained" color='warning'>warning</Button>
        </Stack>
        <Stack spacing={2} direction='row'>
            <Button variant="contained" size='small'>small</Button>
            <Button variant="contained" size='medium'>medium</Button>
            <Button variant="contained" size='large'>large</Button>
        </Stack>
        <Stack spacing={2} direction='row'>
            <Button variant="contained" endIcon={<SendIcon/>}>Send</Button>
            <IconButton color='warning' fontSize='large' disableRipple onClick={()=>alert("안녕~!")}><SendIcon/></IconButton>
        </Stack>
        </Stack>
    );

}