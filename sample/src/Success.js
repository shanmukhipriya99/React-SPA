import React, { Component } from 'react';
import axios from './axios';

class Success extends Component {
    state = {
        names: []
    }

    componentDidMount() {
        axios.get('/success')
        .then((response) => {
            console.log(response.data.name);
            this.setState({names: response.data.name});
        })
    }

    render() {
        let names = <p>No names yet</p>
        if(this.state.names !== null) {
            console.log(this.state.names);
            names = this.state.names.map((name) => {
                return (
                <p key={name.id} style={{textAlign: 'left'}}><span>{name.id}</span>.  {name.name}</p>
                );
            });
        }
        return (
            <div>
                <p>Welcome!</p>
                {names}
            </div>
        );
    }
}

export default Success;