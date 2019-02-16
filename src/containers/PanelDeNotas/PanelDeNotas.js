import React, { Component } from 'react';
import Clear from '@material-ui/icons/Clear';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';

class PanelDeNotas extends Component {
    render() {
      return (
        <div className="PanelDeNotas">
            <ul style={{listStyleType: 'none', margin: 0, padding: '16px'}}>
                { 
                    this.props.notas.map(nota =>{
                        return(
                            <li key={nota.id} style={{marginBottom: '16px'}}>
                            <Card style={{padding: '16px'}}>
                                <span 
                                    onClick={this.props.handleRemoveNote.bind(null, nota.id)}
                                    style={{cursor: 'pointer', float: 'right'}}
                                >
                                    <Clear />
                                </span>
                                <div className="Nota">
                                    <CardHeader
                                        title={nota.title}
                                        subheader={nota.user}
                                    />
                                    <CardContent className="descripcionNota">
                                        <Typography component="p">
                                            {nota.description}
                                        </Typography>
                                    </CardContent>
                                    <CardActions disableActionSpacing>
                                        <Typography component="p" style={{color: '#999'}}>
                                            {nota.date}
                                        </Typography>
                                    </CardActions>
                                </div>
                            </Card>
                            </li>
                        )
                    })
                }
            </ul>
            <div id="rellenador" style={{height: '120px'}}></div>
        </div>
      );
    }
  }
  
  export default PanelDeNotas;