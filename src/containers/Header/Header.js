import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import ExitToApp from '@material-ui/icons/ExitToApp';

class Header extends Component {
    render() {
      return (
        <div className="Header">
            <AppBar position="static" 
                style={{background: '#1976d2', borderRadius: '13px', overflow: 'hidden'}}>
                <Toolbar>
                    <Grid container md='12' spacing={16}>
                        <Grid item sm='6'>
                            <a href="https://github.com/ingporto" style={{textDecoration:'none', color:'white'}}>
                                <Grid 
                                    container 
                                    justify="flex-start" 
                                    alignItems="center"
                                    spacing={0}
                                >
                                    <Grid 
                                        item
                                    >
                                        <img src="./img/bgico.png"
                                            style={{
                                                position: 'absolute',
                                                bottom: '-18px',
                                                left: 0,
                                                blockSize: '90px'
                                            }}
                                        />
                                    </Grid>
                                    <Grid item 
                                        style={{
                                            marginLeft: '80px'
                                        }}
                                    >
                                        <Typography variant="h6" color="inherit">
                                        Notas para Porto
                                        </Typography>
                                        <Typography 
                                            variant="body2" 
                                            color="inherit"
                                            style={{fontWeight: 'normal', marginTop:'-5px'}}
                                        >
                                            @ingporto
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </a>
                        </Grid>
                        <Grid item sm='6'>
                            <Grid container justify="flex-end" alignItems="center">
                                <Grid item style={{marginTop:'10px'}}>
                                    { 
                                        this.props.IsNickname &&
                                        <Button 
                                            variant="contained" 
                                            color="secondary" 
                                            style={
                                                {
                                                    background:'#d32f2f'
                                                }
                                            }
                                            onClick={this.props.handleSalirNickname}
                                        >
                                            <ExitToApp /> Salir
                                        </Button>
                                    }
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
      );
    }
  }
  
  export default Header;