import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Customer from './components/Customer';

const customers = [
  {
    'id': 'yhkim47',
    'image': 'https://placeimg.com/64/64/1',
    'name': '김영환',
    'birthday': '123456',
    'gender': '남자',
    'job': 'developer'
  },
  {
      'id': 'songkn89',
      'image': 'https://placeimg.com/64/64/2',
      'name': '송금년',
      'birthday': '123456',
      'gender': '여자',
      'job': 'wife'
  },
  {
    'id': 'songyw89',
    'image': 'https://placeimg.com/64/64/3',
    'name': '송예원',
    'birthday': '123456',
    'gender': '여자',
    'job': 'wife'
  }              
];

class App extends Component {
  render() {
    return (
      <div>
        {
          customers.map(customer => {
            return (
              <Customer
                key={customer.id}
                id={customer.id}
                image={customer.image}
                name={customer.name}
                birthday={customer.birthday}
                gender={customer.gender}
                job={customer.job}
              />
            )
          })
        }
      </div>
    )
  }  
}

export default App;
