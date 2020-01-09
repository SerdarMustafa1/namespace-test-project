import React, { Component } from 'react';
import { Redirect } from 'react-router';
import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';
import './SignInStyles.scss';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password: '', isLoggedIn: false };
  }

  handleSubmit = async e => {
    e.preventDefault();
    this.setState({ email: '', password: '' });
    fetch('https://gsmtasks.com/api/authenticate/', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      // body: JSON.stringify(this.state),
      body: JSON.stringify({
        username: this.state.email,
        password: this.state.password,
      }),
    })
      .then(response => response.json())
      .then(response => {
        console.log(response);
        this.setState({
          token: response.token,
          isLoggedIn: true,
          account: response.account,
        });
        console.log(this.state);
      })
      .catch(error => {
        console.log(error);
      });
  };

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    if (this.state.isLoggedIn === true) {
      return <Redirect to="/home" />;
    }
    return (
      <div className="sign-in">
        <h2>Already have an account?</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            handleChange={this.handleChange}
            value={this.state.email}
            label="Email"
            required
          />

          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="Password"
            required
          />
          <CustomButton type="submit">Sign In</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
