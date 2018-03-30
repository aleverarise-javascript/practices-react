import React, { Component } from 'react';
import '../styles/Login.css';
import { Redirect } from 'react-router-dom';

class Login extends Component {
    constructor() {
        super();
        
        this.state = {
            username: '',
            password: '',
            isLogged: false,
        }

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e){
        e.preventDefault();
        if(this.state.username === "admin" && this.state.password === "123456" ){
            this.setState({username: '', password: '', isLogged: true});
        }else{
            alert('Data Incorrecta');
            this.setState({username: '', password: '', isLogged: false});
        }
    }
    
    render() {
        return (
            <div  className="Login">
            {this.state.isLogged ? 
                <Redirect to="/home" />
                :
                <div className="Login-box">
                    <form onSubmit={this.onSubmit} >

                        <div className="Login-box-formbox" >
                            <label className="Login-box-username" >Username</label>
                            <input 
                                type="text"
                                value={this.state.username}
                                className="Login-username-input"
                                onChange={(e) => { this.setState({username: e.target.value}) }} />
                        </div>
                        <div className="Login-box-formbox" >
                            <label className="Login-box-password" >Password</label>
                            <input 
                                type="password" 
                                value={this.state.password}
                                className="Login-username-input"
                                onChange={(e) => { this.setState({password: e.target.value}) }} />
                        </div>
                        <button type="submit" className="Login-submit" > Iniciar Sesion </button>
                    </form>
                </div>
            }
            </div>
        );
    }
}

export default Login;