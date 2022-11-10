import React from "react";
import { Card, CardContent, Box, Typography, CardActions, Button, CardMedia, Stack } from '@mui/material'; 
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';


export default function Ex3_Card(){

    return(
        <Stack spacing={2} direction='row'>
        <Box width='300px'>
            <Card>
                <CardMedia component='img'
                    height='140px' image='https://source.unsplash.com/random'
                    alt='nusplash image'/>
                <CardContent>
                    <Typography variant='h5' component='div'>
                        Card 연습
                    </Typography>
                    <Typography variant='body1' color='primary'>
                    Although cards can support multiple actions, 
                    UI controls, 
                    and an overflow menu, 
                    use restraint and 
                    remember that cards are entry points to more complex and detailed information.
                    </Typography>
                    <CardActions>
                        <Button size="small">Share</Button>
                        <Button size="small">leanmore</Button>
                    </CardActions>
                </CardContent>
            </Card>
        </Box>
        <Box width='300px'>
            <Card>
                <CardMedia component='img'
                    height='140px' image='https://source.unsplash.com/random'
                    alt='nusplash image'/>
                <CardContent>
                <CardHeader
                        avatar={
                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                            R
                        </Avatar>
                        }
                        action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                        }
                        title="Shrimp and Chorizo Paella"
                        subheader="September 14, 2016"
                    />
                    <Typography variant='h5' component='div'>
                        Card 연습
                    </Typography>
                    <Typography variant='body1' color='primary'>
                    Although cards can support multiple actions, 
                    UI controls, 
                    and an overflow menu, 
                    use restraint and 
                    remember that cards are entry points to more complex and detailed information.
                    </Typography>
                    <CardActions>
                        <Button size="small">Share</Button>
                        <Button size="small">leanmore</Button>
                    </CardActions>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                    <ShareIcon />
                    </IconButton>
                </CardActions>
            </Card>
        </Box>
        </Stack>
    );

}
