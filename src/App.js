
import './App.css';
import image from './shopping.png';
import imageTwo from './man.png';
import { GroceryList } from './GroseryList';

function App() {
  return (
    <div className='App'>
      <div className='container'>
      <img src={image} width="250px" alt="Shopping"/>
      </div>
      <div className='container'>
      <h1>Grocery List</h1>
      </div>
      <GroceryList />
      <div className='container'>
      <img src={imageTwo} width="250px" alt="Man"/>
      </div>
    </div>
  );
}

export default App;
