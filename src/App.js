import './App.css';
import HeaderComponent from './components/Header/HeaderComponent';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <HeaderComponent/>
    </BrowserRouter>
  );
}

export default App;
