// import '../css/app.css';
import React, { Component}  from 'react';
import PropTypes from "prop-types";
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import {TextField, Paper, Button} from "@material-ui/core";
import {withStyles} from "@material-ui/core/styles";
import axios from "axios";
// import CSRFToken from "./Components/token";
require('@fortawesome/fontawesome-free/css/all.min.css');
require('@fortawesome/fontawesome-free/js/all.js');

// loads the jquery package from node_modules


// import the function from greet.js (the .js extension is optional)
// ./ (or ../) means to look for a local file

// const styles = {
// root: {
// background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
// color: '#fff',
// }
// };


class Login extends Component{
    constructor(props) {
        super(props);
        this.state = {
            _username: '',
            _password: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        const {_username, _password} = this.state;
        const token = document.querySelector('meta[name="csrf-token"]');
        axios.post(
            "http://127.0.0.1:8000/login_check",
            {

                    _csrf_token: _token,
                    _username: _username,
                    _password: _password

            },
            {withCredentials: true},

        )
            .then(response => {
                console.log(response);

            })
            .catch(error => {
                console.log("Login error", error);
            })
        event.preventDefault();
    }

    render() {
const {classes} = this.props;
        return (
            <Paper>
                <form onSubmit={this.handleSubmit}>

                    <TextField
                        label="Username"
                        name="_username"
                        type="text"
                        value={this.state._username}
                        onChange={this.handleChange}
                        // required
                    />
                    <TextField
                        label="Password"
                        name="_password"
                        type="password"
                        value={this.state._password}
                        onChange={this.handleChange}
                        // required
                    />
                    <Button
                        variant="contained"
                        // className={classes.root}
                        type="submit">
                        Login
                    </Button>
                </form>
            </Paper>
        );
    }
}
export default Login;

ReactDom.render(<Login />, document.getElementById('login'));