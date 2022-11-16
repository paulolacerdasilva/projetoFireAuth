import RoutesApp from './routes';
import {BrowserRouter} from 'react-router-dom';
import './app.css';
function App() {
  return (
    <BrowserRouter>
      <RoutesApp/>
    </BrowserRouter>    
  )
}//fim da função App
export default App;

