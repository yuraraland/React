import React from 'react';
import { Box, Stack, Divider, Grid, Paper } from '@mui/material';

export default function Ex1_Box(){

    return (
        <div style={{padding:'20px'}}>
            {/*<Stack sx={{
                border:'1px solid'
            }} direction='column-reverse'>*/}
            <Stack sx={{
                border:'1px solid'
            }} direction='row' spacing={2} divider={<Divider orientation='vertical' flexItem/>}>
            <Box sx={{
                backgroundColor: 'primary.main',
                color: 'white',
                height: '100px',
                width: '100px',
                padding: '15px',
                '&:hover':{
                    backgroundColor: 'primary.light',
                }
            }}>BOX 테스트</Box>
            <Box display='flex' height='100px' width='100px' bgcolor='success.light' p={1.9} sx={{
                '&:hover': {
                    backgroundColor: 'success.main',
                    opacity: [0.9, 0.8, 0.7],
                }
            }}></Box>
            <Box sx={{
                backgroundColor: 'primary.main',
                color: 'white',
                height: '100px',
                width: '100px',
                padding: '15px',
                '&:hover':{
                    backgroundColor: 'primary.light',
                }
            }}>BOX 테스트</Box>
            </Stack>
            <Grid container mt={5}>
                <Grid item xs={3}><Box bgcolor='primary.light' p={2}>Itme1</Box></Grid>
                <Grid item xs={9}><Box bgcolor='primary.light' p={2}>Itme2</Box></Grid>
                <Grid item xs={6}><Box bgcolor='primary.light' p={2}>Itme3</Box></Grid>
                <Grid item xs={3}><Box bgcolor='primary.light' p={2}>Itme4</Box></Grid>
                <Grid item xs={3}><Box bgcolor='primary.light' p={2}>Itme5</Box></Grid>
                <Grid item xs={12}><Box bgcolor='primary.light' p={2}>Itme6</Box></Grid>
            </Grid>
            <br/>
            {/*메뉴 같이 하나의 행으로 모두 있다가 화면이 좁아지면
               컬럼형으로 자리잡는 구조 [-,-,-,-,-,]
               [-
                -
                -]*/}
            <Grid container mt={5}>
                <Grid item xs={12} sm><Box bgcolor='primary.light' p={2}>Itme1</Box></Grid>
                <Grid item xs={12} sm><Box bgcolor='primary.light' p={2}>Itme2</Box></Grid>
                <Grid item xs={12} sm><Box bgcolor='primary.light' p={2}>Itme3</Box></Grid>
                <Grid item xs={12} sm><Box bgcolor='primary.light' p={2}>Itme4</Box></Grid>
                <Grid item xs={12} sm><Box bgcolor='primary.light' p={2}>Itme5</Box></Grid>
                <Grid item xs={12} sm><Box bgcolor='primary.light' p={2}>Itme6</Box></Grid>
            </Grid>

            {/*격자 구조*/}
            {/*행과 행 사이의 간격과 열과 열 상의 간격을 한 번에 주는 속성: spacing*/}
            {/*행과 행의 간격: rowSpacing, 열과 열 사이의 간격: columnSpacing*/}
            <Grid container mt={5} rowSpacing={1} columnSpacing={1}>
                <Grid item xs={6}><Box bgcolor='primary.light' p={2}>Itme1</Box></Grid>
                <Grid item xs={6}><Box bgcolor='primary.light' p={2}>Itme2</Box></Grid>
                <Grid item xs={6}><Box bgcolor='primary.light' p={2}>Itme3</Box></Grid>
                <Grid item xs={6}><Box bgcolor='primary.light' p={2}>Itme4</Box></Grid>
                <Grid item xs={6}><Box bgcolor='primary.light' p={2}>Itme5</Box></Grid>
                <Grid item xs={6}><Box bgcolor='primary.light' p={2}>Itme6</Box></Grid>
            </Grid>
            
            <br/>

            {/*Paper : 뒤에 종이 하나 깔았다!*/}
            <Paper sx={{padding:'30px'}}>
            <Grid container mt={5} rowSpacing={1} columnSpacing={1}>
                <Grid item xs={6}><Box bgcolor='primary.light' p={2}>Itme1</Box></Grid>
                <Grid item xs={6}><Box bgcolor='primary.light' p={2}>Itme2</Box></Grid>
                <Grid item xs={6}><Box bgcolor='primary.light' p={2}>Itme3</Box></Grid>
                <Grid item xs={6}><Box bgcolor='primary.light' p={2}>Itme4</Box></Grid>
                <Grid item xs={6}><Box bgcolor='primary.light' p={2}>Itme5</Box></Grid>
                <Grid item xs={6}><Box bgcolor='primary.light' p={2}>Itme6</Box></Grid>
            </Grid>
            </Paper>
        </div>
    );

}