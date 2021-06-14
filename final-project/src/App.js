
import { Switch ,Route} from 'react-router-dom';
import './App.css';
import FormRegister from './components/form.component'
import Home from './components/Home.component';
import Message from './components/message.component';
import userList from './components/userList.component';

function App() {
  return (
    
    <div className="App">
      <Home/>
      <Switch>
        <Route exact component={FormRegister} path="/form"/>
        <Route exact component={Message} path="/message"/>
        <Route exact component={userList} path="/user-list"/>
      </Switch>
      {/* <FormRegister/> */}
    </div>
  );
}

export default App;
