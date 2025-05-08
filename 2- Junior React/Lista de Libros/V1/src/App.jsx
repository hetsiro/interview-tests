import { Filters } from './components/Filters';
import { Books } from './components/Books';
import './App.css';

function App() {
  return (
    
    <>
      <header>
        <Filters />
      </header>

      <main className='main-books'>
        <Books />
      </main>
      
    </>
  )
}

export default App
