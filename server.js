const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/customers', (req, res) => {
    res.send([
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
      ]
    );
});

app.listen(port, () => console.log(`Listening on port ${port}`));