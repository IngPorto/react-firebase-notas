import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Clear from '@material-ui/icons/Clear';
import Modal from '@material-ui/core/Modal';
import Paper from '@material-ui/core/Paper';

class ModalCrearNota extends Component{
    render(){
        return(
            <div className="ModalCrearNota">
                <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={this.props.IsModal}
                    onClose={this.props.handleCerrarModal}
                >
                    <div style={{margin: 'auto', width: 'fit-content', height: 'fit-content' }}>
                        <Paper 
                            elevation={1}
                            style={{ margin: 'auto', padding: '30px'}}
                        >
                            <Grid container justify="center" alignItems="center">
                                <Grid  item style={{width: 'fit-content', height: 'fit-content'}}>
                                    <Typography variant="h5" component="h3">
                                        Escribe un mensaje inspirador <span role="img">&#x1F601;</span>
                                    </Typography>
                                </Grid>
                                <Grid  item style={{width: '100%', height: 'fit-content'}}>
                                    <TextField
                                        label="Título"
                                        style={{width: '100%', marginBottom: '8px'}}
                                        margin="normal"
                                        autoFocus
                                        inputRef={ input => {this.props.capturarRefTitulo(input)}}
                                    />
                                </Grid>
                                <Grid item style={{width: '100%', height: 'fit-content'}}>
                                    <TextField
                                        label="Descripción"
                                        style={{width: '100%', marginBottom: '8px'}}
                                        margin="normal"
                                        inputRef={ input => {this.props.capturarRefDescripcion(input)}}
                                    />
                                </Grid>
                                <Grid item style={{height: 'fit-content', margin: 'auto'}}>
                                    <Button 
                                        variant="outlined" 
                                        style={
                                            {
                                                color:'white', 
                                                background:'#4caf50',
                                                margin: '20px auto 0 auto'
                                            }
                                        }
                                        onClick={this.props.handleEnviarNota}
                                    >
                                        Enviar
                                    </Button>
                                </Grid>
                                <Grid item style={
                                    {
                                        height: 'fit-content', 
                                        margin: 'auto',
                                        position: 'fixed',
                                        top: '0',
                                        right: '0'
                                    }
                                }>
                                    <span 
                                        onClick={this.props.handleCerrarModal}
                                        style={{cursor: 'pointer'}}
                                    >
                                        <Clear />
                                    </span>
                                </Grid>
                            </Grid>
                        </Paper>
                    </div>
                </Modal>
            </div>
        )
    }
}

export default ModalCrearNota;