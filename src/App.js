import { Routes, Route } from 'react-router-dom';
import './App.css';
import Menu from './components/Menu/Menu';
import StudentManager from './components/StudentManager/StudentManager';
import SearchTab from './components/SearchTab/SearchTab';

function App() {
  return (
    <div className="container">
        <div className='row'>
            <div className='col-3'>
                <Menu/>
            </div>
            <div className='col-9 border border-info rounded'>
                <Routes>
                    <Route path='/student' element={<StudentManager/>} />
                    <Route path='/search' element={<SearchTab/>} />
                </Routes>
            </div>
        </div>
    </div>
  );
}

export default App;
