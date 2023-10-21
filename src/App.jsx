import './App.css'
import RouterIndex from './routes/RouterIndex'
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <RouterIndex></RouterIndex>
      </BrowserRouter>
    </>
  )
};

export default App
