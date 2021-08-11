import './App.css';
import Customer from './components/Customer'

const customers = [
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
]

function App() {
  return (
    <div>
      {
        customers.map(c => {
          return(
            <Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
            />
          )
        })
      }
    </div>
    
  );
}

export default App;
