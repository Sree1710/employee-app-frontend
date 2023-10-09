
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddEmployee from './Components/AddEmployee';
import ViewEmployee from './Components/ViewEmployee';
import SearchEmployee from './Components/SearchEmployee';
import DeleteEmployee from './Components/DeleteEmployee';
import Login from './Components/Login';


function App() {
  return (
    <div>
     <BrowserRouter>
     <Routes>
      <Route path="/" exact element={<Login/>} />
      <Route path="/adde" exact element={<AddEmployee/>} />
      <Route path="/viewe" exact element={<ViewEmployee/>} />
      <Route path="/searche" exact element={<SearchEmployee/>}/>
      <Route path="/deletee" exact element={<DeleteEmployee/>} />
     </Routes>
     </BrowserRouter> 
    </div>
  );
}

export default App;
