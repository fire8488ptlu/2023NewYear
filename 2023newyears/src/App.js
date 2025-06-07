import logo from './logo.svg';
import './App.css';
import { BrowserRouter , Routes, Route} from 'react-router-dom';
import  Home  from './Screens/home/home'
import  Content from './Screens/Content/content'
function App() {
  return (
    <BrowserRouter>
      <Routes>

          <Route path='/' element={<Home/>}  />
          <Route path='/content/:id'  element={<Content/>} />
          <Route path='/content/:id/*'  element={<Content/>} />
          <Route path='*' element={<Home/>}  />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
