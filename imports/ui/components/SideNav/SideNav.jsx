import React from 'react';
//import { NavLink } from 'react-router-dom';
//import { findDOMNode } from 'react-dom';
import $ from 'jquery';

export default class SideNav extends React.Component {
    componentDidMount() {
        $(".button-collapse").sideNav();
    };

    render() {
        return (
            <div>
                <ul id="slide-out" className="side-nav">
                    <li><div className="container">
                        <h3>Some App</h3>
                    </div></li>
                    <li><a href="/" className="waves-effect"><i className="material-icons">home</i>Home</a></li>
                    <li><a href="/dashboard" className="waves-effect"><i className="material-icons">view_module</i>Dashboard</a></li>
                    <li><div className="divider"></div></li>
                    <li><a className="subheader">Login Pages</a></li>
                    <li><a className="waves-effect" href="/register">Register</a></li>
                </ul>
            </div>
        );
    }
}
