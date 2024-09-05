import { Route } from 'react-router-dom';
import './App.css';
import ChatPage from './Pages/ChatPage';
import Homepage from './Pages/Homepage'

function App() {
  return (
    <div className='App'>
      <Route  exact path="/" component={Homepage}/>
      <Route exact path="/chats" component={ChatPage}/>
      
    </div>
  );
}

export default App;
// ok