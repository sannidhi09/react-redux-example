
import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { history } from '../helpers';
import { HomePage, LoginPage, RegisterPage } from '../pages';
import { PrivateRouter } from '../components';
import { alertAction } from '../actions';
import { Alert } from 'reactstrap';

class App extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            alertMessage: '',
            alertshow: false
        }

        history.listen((location, action) => {
            console.log(location);
            this.props.clearAlerts();
        })
    }

    componentDidMount() {
        if(this.props.alertMessage){
            this.setState({
                alertMessage: this.props.alertMessage
            }, () => {
                if(this.state.alertMessage.length > 0){
                    this.setState({
                        alertshow: true
                    })
                }
            })
        }
    }

    componentWillReceiveProps(newProps) {
        if(newProps.alertMessage && newProps.alertMessage !== this.state.alertMessage){
            this.setState({
                alertMessage: newProps.alertMessage
            }, () => {
                if(this.state.alertMessage.length > 0){
                    this.setState({
                        alertshow: true
                    })
                }
            })
        }
    }

    onDismiss = () => {
        this.props.clearAlerts();
        this.setState({
            alertshow: false,
            alertMessage: ''
        })
    }

    render() {
        return (
            <div>
                <Alert 
                    color={this.props.alertType}
                    isOpen={this.state.alertshow} 
                    toggle={this.onDismiss} 
                    fade={false}
                > 
                    {this.props.alertMessage}
                </Alert>
                <Router history={history}>
                    <Switch>
                        <PrivateRouter exact path="/" component={HomePage} />
                        <Route path="/login" component={LoginPage} />
                        <Route path="/register" component={RegisterPage} />
                        <Redirect from="*" to ="/" />
                    </Switch>
                </Router>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        alertType: state.alert.type,
        alertMessage: state.alert.message
    };
}

const mapDispatchToProps = {
    clearAlerts: alertAction.clear
};

const connectedApp = connect(mapStateToProps, mapDispatchToProps)(App);
export { connectedApp as App };