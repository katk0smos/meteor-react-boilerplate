import React from 'react';
let classNames = require('classnames');

function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

export default class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: {value: '', got: false, error: ''},
            last_name: {value: '', got: false, error: ''},
            email: {value: '', got: false, error: ''},
            phone_number: {value: '', got: false, error: ''},
            password: {value: '', got: false, error: ''},
            confirm_password: {value: '', got: false, error: ''}
        };

        this.validateInput = this.validateInput.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    validateInput(respectInputted) {
        let input_valid = true;

        let first_name = this.state.first_name;
        let last_name = this.state.last_name;
        let email = this.state.email;
        let phone_number = this.state.phone_number;
        let password = this.state.password;
        let confirm_password = this.state.confirm_password;
        first_name.error = '';
        last_name.error = '';
        email.error = '';
        phone_number.error = '';
        password.error = '';
        confirm_password.error = '';
        first_name = first_name.value;
        last_name = last_name.value;
        email = email.value;
        phone_number = phone_number.value;
        password = password.value;
        confirm_password = confirm_password.value;


        if (password === '') {
            input_valid = false;
            //Materialize.toast('You must enter a password.', 2000);
            this.state.password.error = 'You must enter a password.';
        }

        if (confirm_password === '') {
            input_valid = false;
            //Materialize.toast('You must confirm your password.', 2000);
            if (this.state.password.error === '') {
                this.state.password.error = 'You must confirm your password.';
            }
        }

        if (password !== confirm_password) {
            input_valid = false;
            //Materialize.toast('Passwords don\'t match.', 2000);
            if (this.state.password.error === '') {
                this.state.password.error = 'Passwords don\'t match.';
            }
        }

        if (first_name === '') {
            input_valid = false;
            //Materialize.toast('First name is required.', 2000);
            this.state.first_name.error = 'First name is required.';
        }

        if (last_name === '') {
            input_valid = false;
            //Materialize.toast('Last name is required.', 2000);
            this.state.last_name.error = 'Last name is required.';
        }

        if (email === '') {
            input_valid = false;
            //Materialize.toast('Email is required.', 2000);
            this.state.email.error = 'Email is required.';
        }

        if (phone_number === '') {
            input_valid = false;
            //Materialize.toast('Phone number is required.', 2000);
            this.state.phone_number.error = 'Phone number is required.';
        }

        if (/^[0-9]{5,}$/.test(phone_number) === false) {
            input_valid = false;
            this.state.phone_number.error = 'Must be a valid phone number.';
        }

        if (password === confirm_password && this.state.password.error === '') {
            if (!(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/.test(password))) {
                input_valid = false;
                this.state.password.error = "Password must contain at least eight (8) characters, with at least one (1) number and one (1) symbol."
            }
        }

        return input_valid;
    }

    onSubmit(e) {
        let ele = $(e.target);

        let input_valid = this.validateInput();
        if (!input_valid) {
            Materialize.updateTextFields();
        }

        if (input_valid) {
            Materialize.Toast.removeAll();
            let $toastContent = $('<div class="container" style="width: 200px"><div class="row">Creating account...</div><div class="row"><div class="progress"><div class="indeterminate"></div></div></div></div>');
            Materialize.toast($toastContent, 10000);
            let accountInfo = {
                first_name: this.state.first_name.value,
                last_name: this.state.last_name.value,
                email: this.state.email.value,
                password: this.state.password.value,
                phone_number: this.state.phone_number.value,

                //profile: 'default-group'
            };
            sleep(2000).then(() => {
                Accounts.createUser(accountInfo, function(err) {
                    if (err) {
                        console.log("Error creating user");
                        Materialize.Toast.removeAll();
                        Materialize.toast("There was an error creating your account. Please try again later. If this error persists, contact support.", 8000);
                    } else {
                        console.log("Created user");
                        Meteor.loginWithPassword(email, password, function(err) {
                            if (err) {
                                console.log("Error logging in");
                                Materialize.Toast.removeAll();
                                Materialize.toast("There was an error logging you in. Try logging in manually. If this error persists, contact support.", 8000);
                            } else {
                                console.log("Logged in!");
                                FlowRouter.go('/');
                            }
                        })
                    }
                });
            });
        }

        e.preventDefault();
    }

    onChange(e) {
        let valid = this.validateInput();
        this.setState({[e.target.id]: {value: e.target.value, got: true}});
    }

    render() {
        let firstNameClass = classNames(
            //"validate",
            {valid: !this.state.first_name.error && this.state.first_name.got,
            invalid: this.state.first_name.error && this.state.first_name.got,
            false: !this.state.first_name.got}
        );
        let lastNameClass = classNames(
            //"validate",
            {valid: !this.state.last_name.error && this.state.last_name.got,
            invalid: this.state.last_name.error && this.state.last_name.got,
            false: !this.state.last_name.got}
        );
        let emailClass = classNames(
            //"validate",
            {valid: !this.state.email.error && this.state.email.got,
            invalid: this.state.email.error && this.state.email.got,
            false: !this.state.email.got}
        );
        let phoneNumberClass = classNames(
            //"validate",
            {valid: !this.state.phone_number.error && this.state.phone_number.got,
            invalid: this.state.phone_number.error && this.state.phone_number.got,
            false: !this.state.phone_number.got}
        );
        let passwordClass = classNames(
            //"validate",
            {valid: !this.state.password.error && this.state.password.got,
            invalid: this.state.password.error && this.state.password.got,
            false: !this.state.password.got}
        );

        return (
            <div className="container">
                <h2 className="center-align">Register Account</h2>

                <div className="row">
                    <form onSubmit={this.onSubmit} className="col s12" id="register-form">
                        <div className="row">
                            <div className="input-field col s8 offset-s2">
                                <i className="material-icons prefix">account_circle</i>
                                <input id="first_name" type="text" name="first_name" pattern="[a-zA-Z]{1,}" title="Minimum one (1) letter" className={firstNameClass} value={this.state.first_name.value} onChange={this.onChange} />
                                <label htmlFor="first_name" data-error={this.state.first_name.error}>First Name</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s8 offset-s2">
                                <i className="material-icons prefix">account_circle</i>
                                <input id="last_name" type="text" name="last_name" pattern="[a-zA-Z]{1,}" title="Minimum one (1) letter" className={lastNameClass} value={this.state.last_name.value} onChange={this.onChange} />
                                <label htmlFor="last_name" data-error={this.state.last_name.error}>Last Name</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s8 offset-s2">
                                <i className="material-icons prefix">email</i>
                                <input id="email" type="email" name="email" pattern="[a-zA-Z0-9@.]{5,}" title="Minimum five (5) characters" className={emailClass} value={this.state.email.value} onChange={this.onChange} />
                                <label htmlFor="email" data-error={this.state.email.error}>Email</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className = "input-field col s8 offset-s2">
                                <i className="material-icons prefix">phone</i>
                                <input id="phone_number" type="tel" pattern="[0-9]{5,}" title="Minimum five (5) numbers" name="phone_number" className={phoneNumberClass} value={this.state.phone_number.value} onChange={this.onChange} />
                                <label htmlFor="phone_number" data-error={this.state.phone_number.error}>Phone Number</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s8 offset-s2">
                                <i className="material-icons prefix">lock</i>
                                <input id="password" type="password" pattern=".{8,}" title="Minimum eight (8) characters and at least: one (1) uppercase, one (1) lowercase, one (1) number, and one (1) symbol" name="password" className={passwordClass} value={this.state.password.value} onChange={this.onChange} />
                                <label htmlFor="password" data-error={this.state.password.error}>Password</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s8 offset-s2">
                                <i className="material-icons prefix">lock</i>
                                <input id="confirm_password" type="password" name="confirm_password" pattern=".{8,}" title="Must match your password." className={passwordClass} value={this.state.confirm_password.value} onChange={this.onChange} />
                                <label htmlFor="confirm_password">Confirm Password</label>
                            </div>
                        </div>
                        <div className="row">
                            <button type="submit" className="col s12 waves-effect waves-light btn">Create Account</button>
                        </div>
                    </form>
                </div>

            </div>
        );
    }
}
