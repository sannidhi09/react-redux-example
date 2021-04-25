import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        }
    }

    handleSubmit = () => {
        // this.props.login(username, password);
    }

    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        return(
            <div className="login_page">
                <h2>Login Page</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input name="username" type="text" value={this.state.username} onChange={this.handleInputChange}></input>
                    </label>
                    <br />
                    <label>
                        Password:
                        <input name="password" type="password" value={this.state.password} onChange={this.handleInputChange}></input>
                    </label>
                    <input type="submit" value="Login"/>
                    <Link to="/register" className="btn btn-link">Register</Link>
                </form>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {

    };
}

const mapDispatchToProps = {

};

const connectedApp = connect(mapStateToProps, mapDispatchToProps)(LoginPage);
export { connectedApp as LoginPage };