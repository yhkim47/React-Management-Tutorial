import './App.css';
import { Component } from 'react';
import Customer from './components/Customer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';

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
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>아이디</TableCell>
              <TableCell>사진</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
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
          </TableBody>
        </Table>
      </div>
    )
  }  
}

export default App;
