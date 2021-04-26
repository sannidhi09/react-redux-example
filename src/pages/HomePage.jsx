
import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { logout, getCurrentUserDetails } from '../actions';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {

        }
    }

    componentDidMount() {
        this.props.getCurrentUserDetails();
    }

    handleSubmit = () => {
        this.props.logout();
    }

    render() {
        return(
            <div className="home_page" style={{textAlign:'center',marginTop:'20%'}}>
                <p>Welcome {this.props.firstname} {this.props.lastname}. you have successfully loggedIn!!!!</p>
                <Button variant="primary"  onClick={this.handleSubmit} >Logout</Button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        username: state.user.username,
        firstname: state.user.firstname,
        lastname: state.user.lastname
    };
}

const mapDispatchToProps = {
    logout: logout,
    getCurrentUserDetails: getCurrentUserDetails
};

const connectedApp = connect(mapStateToProps, mapDispatchToProps)(HomePage);
export { connectedApp as HomePage };