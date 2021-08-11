const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/api/customers', (req, res) => {
    res.send([
        {
          'id': 1,
          'image': 'http://placeimg.com/64/64/1',
          'name': '함동균',
          'birthday': '770301',
          'gender': '남자', 
          'job': '천재'
        },
        {
          'id': 2,
          'image': 'http://placeimg.com/64/64/2',
          'name': '홍길동',
          'birthday': '781224',
          'gender': '남자',
          'job': '황제'
        },
        {
          'id': 3,
          'image': 'http://placeimg.com/64/64/3',
          'name': '평산이',
          'birthday': '891211',
          'gender': '남자',
          'job': '개발자'
        }
      ]);
});

app.listen( port, () => console.log(`Listening on port ${port}`));