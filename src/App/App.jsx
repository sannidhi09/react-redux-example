
import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { history } from '../helpers';
import { HomePage, LoginPage, RegisterPage } from '../pages';
import { PrivateRouter } from '../components';
import { alertAction } from '../actions';
class App extends React.Component {
    constructor(props) {
        super(props);

        history.listen((location, action) => {
            console.log(location);
            this.props.clearAlerts();
        })
    }

    render() {
        return (
            <div>
                {this.props.alertMessage &&<div className={`alert ${this.props.alertType}`}>{this.props.alertMessage}</div>}
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