import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

// Components
import Image from "./components/Image";
import Input from "./components/Input";

// componentWillMount
// lo utilizamos para ejecutar acciones antes del rendereo

// componentDidMount
// lo utilizamos para ejecutar acciones despues del rendereeo

// componentWillUnmount
// lo utilizamos cuando un componente se va a desmontar

// componentWillReceiveProps
// se ejecuta cuando el padre le manda propiedades al hijo

// shouldComponentUpdate
// es ejecutado es para preguntar si el componente debe ser ejecutado

// componentWillUpdate
// es lo mismo que  componentShoulUpdate, la diferencia es que este es llamado cuando
// el componente componentShoulUpdate termina su tarea

class App extends Component {
    componentWillMount() {
        console.log("hola estoy ejecutando el metodo will mounts");
    }
    componentDidMount() {
        console.log("Hola, Estoy ejecutando el metodo did mounts");
    }
    // componentWillUnmount() {
    //     console.log("Hola, Estoy ejecutando el metodo will unmounts");
    // }
    // componentWillReceiveProps() {
    //     console.log("Hola, Estoy ejecutando el metodo receive props");
    // }
    // shouldComponentUpdate() {
    //     console.log("Hola, Estoy ejecutando el metodo should Update");
    // }

    // componentWillUpdate() {
    //     console.log("Hola, Estoy ejecutando el metodo will Update");
    // }

    constructor() {
        super();

        this.state = {
            inputType: "text",
            legend: "0",
            inputValue: '',
            selectValue: 'EEUU'
        };

        this.onClickChild = this.onClickChild.bind(this);
        this.onClickButton = this.onClickButton.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onChangeSelect = this.onChangeSelect.bind(this);
    }

    onClickChild(e) {
        this.setState({ inputType: "number" });
    }

    onClickButton(event) {
        // console.log(event.target.id);
        let legend = '';
        if(event.target.id === "button1"){
            legend = event.target.id;
            console.log('boton 1');
        }
        if(event.target.id === "button2"){
            legend = event.target.id;
            console.log('boton 2');
        }
        if(event.target.id === "button3"){
            legend = event.target.id;
            console.log('boton 3');
        }

        this.setState({legend: legend});
    }

    onChange(e){
        this.setState({inputValue: e.target.value});
    }

    onChangeSelect(e){
        this.setState({selectValue: e.target.value});
    }

    render() {
        return (
            <div className="App">

                <hr/>
                <h1> Eventos - Selects </h1>
                <select onChange={this.onChangeSelect} value={this.state.selectValue}>
                    <option value="EEUU">EEUU</option>
                    <option value="Chile">Chile</option>
                    <option value="Mexico">Mexico</option>
                    <option value="Venezuela">Venezuela</option>
                </select>
                <label className="App-legend">{this.state.selectValue}</label>

                <hr/>
                <h1> Eventos - Input </h1>
                <input id="input1" type="text" value={this.state.inputValue} onChange={this.onChange} />
                <label className="App-legend">{this.state.inputValue}</label>

                <hr/>
                <h1> Eventos - Botones </h1>
                {/* <button onClick={() => {alert(0);}}>Click</button> */}
                <button onClick={this.onClickButton} id="button1">Button 1</button>
                <button onClick={this.onClickButton} id="button2">Button 2</button>
                <button onClick={this.onClickButton} id="button3">Button 3</button>
                <label className="App-legend">{this.state.legend}</label>


                <hr/>
                <h1> Componentes </h1>
                <Image id={1} src={logo} onClickChild={this.onClickChild} />
                <Input id={2} type={this.state.inputType} />


                <hr/>
                <h1> Por Defecto </h1>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
            </div>
        );
    }
}

export default App;
