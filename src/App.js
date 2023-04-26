import './App.css';
import List from './components/List';

function App() {
  const users = [
    {
      id: 0,
      name: 'Jonas'
    },
    {
      id: 1,
      name: 'Maria'
    },
    {
      id: 2,
      name: 'Nana'
    }
  ];


  return (
    <div>
      <List items={users} />
    </div>
  );
}

export default App;