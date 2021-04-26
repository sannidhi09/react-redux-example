import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { regActions } from '../actions';

class RegisterPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user : {
                firstname: '',
                lastname: '',
                username: '',
                password: ''
            }
        }
    }

    isValid = () => {
        if(this.state.user.firstname.length !== 0 && this.state.user.lastname.length !==0 && this.state.user.username.length !== 0 && this.state.user.password.length !== 0){
            return true
        }else{
            return false
        }
    }

    handleSubmit = () => {
        if(this.isValid()) {
            this.props.register(this.state.user);
        }else{
            alert('All fields are requried. Please do fill');
        }
    }

    handleInputChange = (event) => {
        this.setState({
            user: {
                ...this.state.user,
                [event.target.name]: event.target.value
            }
        });
    }

    render() {
        return (
            <div className="register_page" style={{textAlign:'center',marginTop:'20%'}}>
                <h2>Register Page</h2>
                <label>
                    First Name:
                    <input name="firstname" type="text" value={this.state.user.firstname} onChange={this.handleInputChange}></input>
                </label>
                <br />
                <label>
                    Last Name:
                    <input name="lastname" type="text" value={this.state.user.lastname} onChange={this.handleInputChange}></input>
                </label>
                <br />
                <label>
                    Username:
                    <input name="username" type="text" value={this.state.user.username} onChange={this.handleInputChange}></input>
                </label>
                <br />
                <label>
                    Password:
                    <input name="password" type="password" value={this.state.user.password} onChange={this.handleInputChange}></input>
                </label>
                <br />
                <Button 
                    variant="primary" 
                    disabled={this.props.isLoading} 
                    onClick={!this.props.isLoading ? this.handleSubmit : null} 
                > 
                    {this.props.isLoading ? 'Loading…' : 'Register'}
                </Button>
                <Link to="/login" className="btn btn-link">Login</Link>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        isLoading: state.register.registering,
        error: state.register.error
    };
}

const mapDispatchToProps = {
    register: regActions.register
};

const connectedApp = connect(mapStateToProps, mapDispatchToProps)(RegisterPage);
export { connectedApp as RegisterPage };