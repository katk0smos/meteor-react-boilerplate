import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
        <footer className="page-footer">
            <div className="container">
                <div className="row">
                    <div className="col l6 s12">
                        <h5 className="white-text">App Name Here</h5>
                        <p className="grey-text text-lighten-4">Some template</p>
                    </div>
                    <div className="col l4 offset-l2 s12">
                        <h5 className="white-text">Links</h5>
                        <ul>
                            <li><a className="grey-text text-lighten-3" href="#!">Home</a></li>
                            <li><a className="grey-text text-lighten-3" href="#!">About</a></li>
                            <li><a className="grey-text text-lighten-3" href="#!">Contact</a></li>
                            <li><a className="grey-text text-lighten-3" href="#!">Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                <div className="container">
                    <i className="material-icons tiny">copyright</i> 2017 TheWaffleDimension
                    <a className="grey-text text-lighten-4 right" href="#!">Some More</a>
                </div>
            </div>
        </footer>
    );
  }
}
