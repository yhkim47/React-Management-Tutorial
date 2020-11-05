import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Customer from './components/Customer';

const customer = {
  'name': '송예원',
  'birthday': '123456',
  'gender': '여자',
  'job': 'wife'
};

class App extends Component {
  render() {
    return (
      <Customer
        name={customer.name}
        birthday={customer.birthday}
        gender={customer.gender}
        job={customer.job}
      />
    )
  }  
}

export default App;
