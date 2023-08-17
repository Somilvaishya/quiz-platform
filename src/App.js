import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import CreateQuize from './Components/CreateQuize/CreateQuize';
import { MyQuizzes } from './Components/MyQuizzes/MyQuizzes';
import { StartQuize } from './Components/StartQuize/StartQuize';
import { Quize, ResultModel } from './Components/StartQuize/Quize';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/CreateQuize' element={<CreateQuize />} />
        <Route path='/MyQuizzes' element={<MyQuizzes />} />
        <Route path='StartQuize' element={<StartQuize />} />
        <Route path='Quize' element={<Quize />} />
      </Routes>
    </div>
  );
}

export default App;
