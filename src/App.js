import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home';
import { Calendar } from './pages/Calendar';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/calendar' element={<Calendar/>}/>
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
