import './App.css';
import data from './data/data';
import { useState } from 'react'
import Item from './components/Item';
import Button from './components/Button';


function App() {

  const [birthdays, setBirthdays] = useState(data);

  const handleClick = () => {
    setBirthdays([]);
  }

  return(
    <div className='container'>
      <h1>{birthdays.length} birthdays today</h1>
      {
        birthdays.map((item) => {
          return <Item key={item.id} {...item} />
        })
      }
      <Button handleClick={handleClick}/>
    </div>
  )
}

export default App;
