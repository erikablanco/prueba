import './App.css';
import {GetMovieList} from './FetchApi'
import { Counter } from './Counter'

function App() {
   
  GetMovieList(2015);

  return (
    <div className="App">
      
    <Counter/>

    </div>
  );
}

export default App;
