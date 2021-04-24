
import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { history } from '../helpers';
import { HomePage, LoginPage, RegisterPage } from '../pages';

class App extends React.Component {
    constructor(props) {
        super(props);

        history.listen((location, action) => {
            console.log(location);
        })
    }

    render() {
        return (
            <div>
                <Router history={history}>
                    <Switch>
                        {/* <PrivateRoute exact path="/" component={HomePage} /> */}
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

    };
}

const mapDispatchToProps = {

};

const connectedApp = connect(mapStateToProps, mapDispatchToProps)(App);
export { connectedApp as App };