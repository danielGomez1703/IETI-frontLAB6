import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserList from "./Components/UserList"
class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            userList: []
        }
    }

    componentDidMount() {
        fetch("http://ietibackend.southcentralus.azurecontainer.io:8080/users")
            .then(response => response.json())
            .then(data => {
                    console.log(data)
                    let list = [];
                    data.forEach(function (user) {
                        list.push({
                            "id": user.id,
                            "nombre": user.nombre,
                            "correo": user.correo
                        })

                    });
                    this.setState({ userList: list });
                });
    }
    render() {
        return (
            <div className="App">
                <h1> Laboratorio 6 </h1>
                <UserList userList={this.state.userList} />
            </div>
        );
    }
}

export default App;
