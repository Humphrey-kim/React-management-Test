import react, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer'

const customers = [
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
]

class App extends Component{
  render(){
    return (
      <div>
        { //필수
        customers.map(c => {
          return (
            <Customer
            key={c.id} //필수
            id={c.id}
            img={c.img}
            name={c.name}
            birth={c.birth}
            gender={c.gender}
            job={c.job}
          />
          );
        })
      }
      </div>
    )
  }
}

export default App;
