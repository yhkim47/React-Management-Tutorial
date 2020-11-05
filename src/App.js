import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Customer from './components/Customer';

const customer = {
  'id': 'yhkim47',
  'image': 'https://placeimg.com/64/64/any',
  'name': '송예원',
  'birthday': '123456',
  'gender': '여자',
  'job': 'wife'
};

class App extends Component {
  render() {
    return (
      <Customer
        id={customer.id}
        image={customer.image}
        name={customer.name}
        birthday={customer.birthday}
        gender={customer.gender}
        job={customer.job}
      />
    )
  }  
}

export default App;
