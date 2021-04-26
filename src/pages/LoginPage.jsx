import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { login } from '../actions';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        }
    }

    isValid = () => {
        if(this.state.username.length !== 0 && this.state.password.length !==0){
            return true
        }else{
            return false
        }
    }

    handleSubmit = () => {
        if(this.isValid()) {
            this.props.login(this.state.username, this.state.password);
        }else{
            alert('Username and password are requried. Please do fill');
        }
    }

    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        return(
            <div className="login_page" style={{textAlign:'center',marginTop:'20%'}}>
                <h2>Login Page</h2>
                <label>
                    Name:
                    <input name="username" type="text" value={this.state.username} onChange={this.handleInputChange}></input>
                </label>
                <br />
                <label>
                    Password:
                    <input name="password" type="password" value={this.state.password} onChange={this.handleInputChange}></input>
                </label>
                <br />
                <Button 
                    variant="primary" 
                    disabled={this.props.isLoading} 
                    onClick={!this.props.isLoading ? this.handleSubmit : null} 
                > 
                    {this.props.isLoading ? 'Loading…' : 'Login'}
                </Button>
                <Link to="/register" className="btn btn-link">Register</Link>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        isLoading: state.login.logging
    };
}

const mapDispatchToProps = {
    login: login
};

const connectedApp = connect(mapStateToProps, mapDispatchToProps)(LoginPage);
export { connectedApp as LoginPage };