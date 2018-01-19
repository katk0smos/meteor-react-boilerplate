import React from 'react';

export default class Header extends React.Component {
    /*
    { Meteor.user() &&
        <li><a href="/account"><i className="material-icons left">account_box</i>{Meteor.users.findOne(Meteor.userId()).first_name}</a></li>
    }
    */
  render() {
    return (
      <header className='Header'>
            <nav>
                <div className="nav-wrapper light-blue darken-1">
                    <a href="#" className="brand-logo center hide-on-med-and-down">App Name Here</a>
                    <ul className="left">
                        <li><a href="#" data-activates="slide-out" className="button-collapse show-on-large" id="sideNavBtn"><i className="material-icons">menu</i></a></li>
                    </ul>
                    <ul className="right">

                    </ul>
                </div>
            </nav>
      </header>
    );
  }
}
