
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class HomePage extends React.Component {

    render() {
        return(
            <div className="home_page">
                <p>You're logged in with React!!</p>
            </div>
        );
    }
}