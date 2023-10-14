
import './App.css'
import { Card } from './components/card/card'; 
import { useUsersData } from './hooks/useUsersData'; 
import {usersData } from './interface/usersData'

function App() {
  const {data} = useUsersData();

  return (
    <>
      <div className='container'>
        <h1>Nossos Funcionários</h1>
        <div className='card-grid'>
          {data?.map(usersData => {
            return <Card
              key={usersData.id}
              id={usersData.id}
              name={usersData.name}
              email={usersData.email}
              img={usersData.img}   />;
          })}
        </div>
      </div>
    </>
  )
}

export default App
