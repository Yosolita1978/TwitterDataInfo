import './App.css';

import MyNavBar from './components/nav';
import MyWordCloud from './components/words';
import { Route, Routes } from 'react-router-dom';

function App() {

  
  return (
    <div className="App">
      <MyNavBar />     
      <Routes>
      <Route path="/" element={<MyWordCloud />} />
      </Routes>
      
    </div>
  );
}

export default App;
