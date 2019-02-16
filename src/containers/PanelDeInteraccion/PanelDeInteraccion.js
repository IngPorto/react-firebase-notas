import React, { Component } from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import './PanelDeInteraccion.css';

class PanelDeInteraccion extends Component {
    

    render() {
        const inputProps = {
            onKeyUp: this.props.handleKeyUpNickname
        };
      return (
        <div className="PanelDeInteraccion">
            <div style={{position: 'fixed', bottom: '0', left: '0', width: '100%'}}>
                <Toolbar style={{background: '#1976d2'}}>
                    <Grid container md='12' spacing={0} justify="center" alignItems="center">
                        <Grid item sm='9'>
                            {
                                !this.props.IsNickname ?
                            
                                <Grid container justify="center" alignItems="center">
                                    <Grid item tyle={{background:'#2e7031'}}>
                                        <Grid container>
                                            <Grid item style={{width:'140px', height: 'fit-content', margin: 'auto'}}>
                                                <Typography variant="h6" color="inherit" style={{color:'white', fontWeight: 'normal'}}>
                                                    ¿Quién eres?: 
                                                </Typography>
                                            </Grid>
                                            <Grid item style={{width:'335px', margin: 'auto'}}>
                                                <Grid container>
                                                    <Grid item sm='8' id="campoQuienEres" style={{marginRight: '3px'}}>
                                                        <TextField
                                                            label="Escribe tu Nickname"
                                                            style={{width: '100%', marginBottom: '8px'}}
                                                            inputProps={inputProps}
                                                            margin="normal"
                                                            helperText="*O usa un seudónimo"
                                                            inputRef={ input => {this.props.capturarRefDelTexrField(input)}}
                                                        />
                                                    </Grid>
                                                    <Grid item sm='3' style={{height: 'fit-content', margin: 'auto'}}>
                                                        <Button 
                                                            variant="outlined" 
                                                            style={
                                                                {
                                                                    color:'white', 
                                                                    background:'#4caf50'
                                                                }
                                                            }
                                                            onClick={this.props.handleRegistrarNickname}
                                                        >
                                                            Acceder
                                                        </Button>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            :
                                <Grid container justify="center" alignItems="center">
                                    <Grid item style={{height: 'fit-content', margin: 'auto'}}>
                                        <Button 
                                            variant="outlined" 
                                            style={
                                                {
                                                    color:'white', 
                                                    background:'#4caf50'
                                                }
                                            }
                                            onClick={this.props.handleAbrirModal}
                                        >
                                            Crear nota
                                        </Button>
                                        <Typography variant="body2" style={{color:'white', fontWeight: 'normal', textAlign: 'center', fontWeight: '300', fontSize: 'smaller'}}>
                                            {this.props.nickname}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            }
                        </Grid>
                    </Grid>
                </Toolbar>
            </div>
        </div>
      );
    }
  }
  
  export default PanelDeInteraccion;