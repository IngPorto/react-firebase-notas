import React, { Component } from 'react';
import Header from './Header/Header'
import PanelDeNotas from './PanelDeNotas/PanelDeNotas'
import PanelDeInteraccion from './PanelDeInteraccion/PanelDeInteraccion'
import ModalCrearNota from './ModalCrearNota/ModalCrearNota'
// Firebase
import firebase from 'firebase'
import { DB_CONFIG } from '../config/config'
import 'firebase/database'
// Fecha
import date from 'date-and-time'

class Main extends Component {
  constructor(props){
    super(props)
    this.state = {
        IsModal: false,
        IsNickname: false,
        nickname: 'dafault',
        notas: [],
        notaTemporal:{
          id: 0,
          title: '',
          description: '',
          user: '',
          date: 'lunes 23 de marzo de 2019'
        }
    }

    // inicializo firebase creando una propiedad a Main llamada app
    // Aquí solo estoy realizando la conexión a Firebase
    this.app = firebase.initializeApp(DB_CONFIG)
    // Hago la referencia a una colección de datos y la guardo en db
    this.db = this.app.database().ref().child('notas')
  }

  componentDidMount(){

    // cuando agrege un nuevo elemento a la base de datos 
    // de firebase, se actualice mi estado con esos datos
    this.db.on('child_added', snap => {
      this.setState({
        notas: [...this.state.notas, {
          id: snap.key,
          title: snap.val().title,
          description: snap.val().description,
          user: snap.val().user,
          date: snap.val().date
        }]
      })
    })
    
    this.db.on('child_removed', snap =>{
      const nuevasNotas = this.state.notas.filter((nota, index) =>{
        return nota.id !== snap.key
      })
      this.setState({
        notas: nuevasNotas
      })
    })
  }

  handleRegistrarNickname = event =>{
      const nickname = this.textInput.value
      if(nickname && nickname.trim().length > 0){
          console.log('Solicitud de registro del nickname: '+this.textInput.value)
          this.setState({
              nickname : this.textInput.value,
              IsNickname: !this.state.IsNickname
          })
          // Limpio el imput text
          this.textInput.value = ''
          //this.textInput.focus()
      }else{
          console.log('Nickname no válido')
      }
  }

  handleSalirNickname = ()=>{
    this.setState({
      nickname : 'default',
      IsNickname: !this.state.IsNickname
    })
  }

  handleAbrirModal = event => {
    console.log('Solicitud de creación de nota.')
    this.setState({
      IsModal: !this.state.IsModal
    })
  }

  handleCerrarModal = event =>{
    this.setState({
      IsModal: !this.state.IsModal
    })
  }

  capturarRefTitulo = ref =>{
    //console.log('Título: '+ref.value)
    let nota = this.state.notaTemporal
    nota.title = ref
    this.setState({
      notaTemporal: nota
    })
  }

  capturarRefDescripcion = ref =>{
    //console.log('Descripción: '+ref.value)
    let nota = this.state.notaTemporal
    nota.description = ref
    this.setState({
      notaTemporal: nota
    })
  }

  handleEnviarNota = () =>{
    console.log(this.state.notaTemporal)
    // aquí sucede la magia
    this.db.push().set({
      title:  this.state.notaTemporal.title.value,
      description: this.state.notaTemporal.description.value,
      user: this.state.nickname,
      date: date.format(new Date(), 'YYYY/MM/DD HH:mm:ss')
    })
    this.handleCerrarModal()
  }

  capturarRefDelTexrField = ref =>{
    this.textInput = ref
  }

  handleRemoveNote = id =>{
    const confirmacion = window.confirm("¿Está seguro que desea eliminar este mensaje?")
    // Remuevo la nota del estado y de firebase
    if(confirmacion){
      console.log('Se va elimiar la nota: '+id)
      this.db.child(id).remove();
    }else{
      console.log('Operación eliminar cancelada')
    }
  }

  handleKeyUpNickname = (event) =>{
    console.log('KeyCode: '+event.keyCode)
    event.keyCode === 13 && 
    this.handleRegistrarNickname()
  }

  render() {
    return (
      <div className="Main">
        <Header 
          IsNickname={this.state.IsNickname}
          handleSalirNickname={this.handleSalirNickname}
        />
        <PanelDeNotas 
          notas={this.state.notas}
          handleRemoveNote={this.handleRemoveNote}
        />
        <PanelDeInteraccion 
          IsNickname={this.state.IsNickname}
          nickname={this.state.nickname}
          handleRegistrarNickname={this.handleRegistrarNickname}
          handleAbrirModal={this.handleAbrirModal}
          capturarRefDelTexrField={this.capturarRefDelTexrField}
          handleKeyUpNickname={this.handleKeyUpNickname}
        />
        <ModalCrearNota 
          IsModal={this.state.IsModal}
          capturarRefTitulo={this.capturarRefTitulo}
          capturarRefDescripcion={this.capturarRefDescripcion}
          handleCerrarModal={this.handleCerrarModal}
          handleEnviarNota={this.handleEnviarNota}
        />
      </div>
    );
  }
}

export default Main;
