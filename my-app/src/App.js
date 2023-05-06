import './App.css';
import TodoList from './components/TodoList';
import Header from './components/Header';
import Product from './components/products/product';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app

function App() {
  return (
    <div className="App">
      <div>
        <Header />
      </div>
      <div>
        <TodoList />
      </div>
      <div>
        <Product />
      </div>
    </div>
  );
}

export default App;
