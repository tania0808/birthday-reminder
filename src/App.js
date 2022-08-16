import './App.css';
import data from './data/data.json';
import { useState } from 'react'


function App() {

  const [people, setPeople] = useState(data);

  const removeItem = (id) => {
    const refreshedData = people.filter(item => item.id !== id);
    setPeople(refreshedData)
  }

  return (
    <div>
      {
        people.map((item, index) => {
          const {id, name} = item;
          return (
            <div key={id} className="item">
              <p>{name}</p>
              <button onClick={() => removeItem(id)}>remove</button>
            </div>
          )
        })
      }
    </div>
  )
}

export default App;
