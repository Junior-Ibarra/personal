import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { updateUser } from '../../reducers/user';
import './Auth.css';

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errorMsg: ''
    }
    this.login = this.login.bind(this);
    this.register = this.register.bind(this);
  }

  handleChange(prop, val) {
    this.setState({
      [prop]: val
    })
  }

  login() {
    axios.post('/api/auth/login', this.state)
      .then(res => {
        this.props.history.push('/main');
        this.props.updateUser(res.data);
      })
      .catch(err => {
        console.log(err)
        this.setState({errorMsg: 'Incorrect email or password!'})
      })
  }

  register() {
    axios.post('/api/auth/register', this.state)
      .then(res => {
        this.props.history.push('/main');
        this.props.updateUser(res.data);
      })
      .catch(err => {
        console.log(err)
        this.setState({errorMsg: 'Email taken!'})
      })
  }

  closeErrorMessage = () => {
    this.setState({
      errorMsg: false, 
      email: '', 
      password: ''
    })
  }

  render() {
    return (
      <div className='auth'>
        <div className='auth-container'>
         {this.state.errorMsg && <h3 className='auth-error-msg'>{this.state.errorMsg} <span onClick={this.closeErrorMessage}>X</span></h3>}
          <div className='auth-input-box'>
            <p>email:</p>
            <input value={this.state.email} onChange={e => this.handleChange('email', e.target.value)} />
          </div>
          <div className='auth-input-box'>
            <p>Password:</p>
            <input value={this.state.password} type='password' onChange={e => this.handleChange('password', e.target.value)} />
          </div>
          <div className='auth-button-container'>
            <button className='dark-button' onClick={this.login}> Entrance </button>
            <button className='dark-button' onClick={this.register}> Register </button>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { updateUser })(Auth);