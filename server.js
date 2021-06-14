const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/api/customers', (req, res)=>{
    res.send([
        {
        'id' : '1',
        'img' : 'https://placeimg.com/64/64/1',
        'name' : '김지훈',
        'birth' : '931119',
        'gender' : '남자',
        'job' : '개발자'
      },
      {
        'id' : '2',
        'img' : 'https://placeimg.com/64/64/2',
        'name' : '김지민',
        'birth' : '970428',
        'gender' : '남자',
        'job' : '요리사'
      },
      {
        'id' : '3',
        'img' : 'https://placeimg.com/64/64/3',
        'name' : '김지수',
        'birth' : '880618',
        'gender' : '남자',
        'job' : '관리자'
      }
      ]);
});
app.listen(port, () => console.log(`Listening on port $(port)`));