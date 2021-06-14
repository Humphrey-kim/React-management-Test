import react, {Component} from 'react';
import './App.css';
import Customer from './components/Customer';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import {withStyles} from '@material-ui/core/styles';

const styles = useTheme => ({
  root:{
    width:'100%',
    marginTop:useTheme.spacing.unit * 3,
    overflowX:"auto"
  },
  table:{
    minWidth:1080
  }
})
/*
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
]*/

class App extends Component{

  //빈값이었다가 데이터를 받으면 제구성 된다. 
  //react : state : 동적데이터, props: 정적데이터
  state = {
    customers:""
  }

  //생명주기 : mount가 완료 되었을때 실행
  componentDidMount(){
      this.callApi()
      .then(res => this.setState({customers:res})) //setstate 설정
      .catch(err => console.log(err));//오류 발견시
  }

   //주소를 접근하여 내용을 json형태로 body변수에 담아준다.
  callApi = async()=>{
    const response = await fetch('api/customers')
    const body = await response.json();
    return body;
  }

  render(){

    const{classes} = this.props;
    return (
      <Paper className={classes.root}>
      <Table className={classes.table}>
         <TableHead>
          <TableRow>
          <TableCell>번호</TableCell> 
          <TableCell>이미지</TableCell> 
          <TableCell>이름</TableCell> 
          <TableCell>생년월일</TableCell> 
          <TableCell>성별</TableCell> 
          <TableCell>직업</TableCell> 
          </TableRow>
         </TableHead>
        <TableBody>
        { //필수
        this.state.customers ?
          this.state.customers.map(c => {
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
        : "" 
      }
      </TableBody>
      </Table>
    </Paper>
    )
  }
}

export default withStyles(styles)(App);
