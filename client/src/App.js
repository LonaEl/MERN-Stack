import React, {useState, useEffect} from "react";
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from "react-redux";

import { getPosts } from './actions/posts';
import  Posts from './components/Posts/Posts';
import Form from './components/Form/Form'
import memories from './images/memories.png';
import makeStyles from './styles';



const App = () => {
    const [currentId, setCurrentId] = useState(null);
    const classes = makeStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch]);


    return (
     <Container className={classes.appBar}  >
          <AppBar postion='static' color="inherit">
            <Typography className={classes.heading} variant="h2" align="center" >Memories</Typography>
            <img className={classes.image} src={memories} alt="memories" height="10" />
          </AppBar>
          <Grow in >
            <Container>

                <Grid container justifyContent='space-between' alignItems="stretch" spacing={3}>
                    <Grid item xs={12} sm={7} >
                       <Posts setCurrentId={setCurrentId} />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Form currentId={currentId} />
                    </Grid>
                </Grid>

            </Container>
          </Grow>
     </Container>
    )
}

export default App;