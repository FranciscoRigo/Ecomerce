
import './App.css';
import NavBar from '.components/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
      <div className="App">
        <NavBar />
        <ItemListContainer greeting={´Muy Bienvenidos } />
      </div>
  );
}

export default App;
