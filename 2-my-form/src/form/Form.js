import React, { Component } from 'react';
import FormRow from './FormRow';
import './Form.css';

// this.refs.nombreComponente.nombreMetodo

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            labelLegend: '',
        }

        this.onSubmit = this.onSubmit.bind(this);
    }
    
    // onRegister(e){
    //     console.log(this.refs.nombre.getValue());
    // }

    onSubmit(e){
        e.preventDefault();
        let nombre = this.refs.nombre.getValue();
        let apellido = this.refs.apellido.getValue();
        let correo = this.refs.correo.getValue();
        let password = this.refs.password.getValue();
        let confirm_password = this.refs.confirm_password.getValue();

        if(password === confirm_password){
            this.setState({labelLegend: 'Logueado Exitosamente'});
        }else{
            alert('las contraseñas no coinciden');
        }
    }
    
    render() {
        return (
            <div className="Form">
                <form onSubmit={this.onSubmit} className="Form-form">
                    <h2 className="Form-title">Registro</h2>
                    <FormRow inputType="text" labelText="Nombre" isRequired={true} ref="nombre" />
                    <FormRow inputType="text" labelText="Apellido" isRequired={true} ref="apellido" />
                    <FormRow inputType="email" labelText="Correo" isRequired={true} ref="correo" />
                    <FormRow inputType="password" labelText="Contraseña" isRequired={true} ref="password" />
                    <FormRow inputType="password" labelText="COnfirmar Contraseña" isRequired={true} ref="confirm_password" />
                    <button className="Form-button"> Registro </button>
                    <label className="Form-labelLegend">{this.state.labelLegend}</label>
                </form>
                
            </div>
        );
    }
}

export default Form;