import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';

import React from 'react';
import ReactDOM from 'react-dom';

import MainLayout from '../../ui/containers/MainLayout.jsx';

import Header from '../../ui/components/Header/Header.jsx';
import SideNav from '../../ui/components/SideNav/SideNav.jsx';
import Footer from '../../ui/components/Footer/Footer.jsx';
import Home from '../../ui/pages/Home.jsx';
import Register from '../../ui/components/Login/Register.jsx';
import Login from '../../ui/components/Login/Login.jsx';
import NotFound from '../../ui/pages/NotFound.jsx';

class App extends React.Component {
    render() {
        return (
            <div className="application">
                <Header />
                <SideNav />
                <div>
                    {props.main}
                </div>
                <Footer />
            </div>
        );
    }
}

FlowRouter.route('/', {
    name: 'Home',
    action(params, queryParams) {
        mount(MainLayout, {
            main: <Home/>,
        });
    },
});

Meteor.startup(() => {
    /*ReactDOM.render(
        <MainLayout />,
        document.getElementById('app')
    );*/
});
