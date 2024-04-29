import './App.css';
import Classes from './components/ClassComponent/Classes';
import Student from './components/StudentComponent/Student';
import Tech from './components/TeacherComponent/Tech';

import { Routes, Route } from "react-router-dom"



function App() {


  return (
    <div className="App">
    
      <Routes>
        <Route path='/' element={<Classes />} />
        <Route path='/student' element={<Student />} />
        <Route path='/teacher' element={<Tech />} />

      </Routes>

    </div>
  );
}

export default App; 
