import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class RegisterPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user : {
                username: '',
                password: ''
            }
        }
    }

    handleSubmit = () => {
        if(this.state.user.username.length != 0 && this.state.user.password.length != 0){

        }else{
            alert('Username or Password should be empty. Please do fill');
        }
    }

    handleInputChange = (event) => {
        this.setState({
            user: {
                ...user,
                [event.target.name]: event.target.name
            }
        });
    }

    render() {
        return (
            <div className="register_page">
                <h2>Register Page</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input name="username" type="text" value={this.state.user.username} onChange={this.handleInputChange}></input>
                    </label>
                    <br />
                    <label>
                        Password:
                        <input name="password" type="password" value={this.state.user.password} onChange={this.handleInputChange}></input>
                    </label>
                    <input type="submit" value="Register"/>
                    <Link to="/login" className="btn btn-link">Login</Link>
                </form>
            </div>
        );
    }
}