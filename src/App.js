
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import ButtonAppBar from './Component/Layout/NavigationBar/ButtonAppBar';
import AboutUs from './Component/Routes/AboutUs';
import ContactUs from './Component/Routes/ContactUs';
import Home from './Component/Routes/Home';
import Services from './Component/Routes/Services';
import SignUp from './Component/Authentication/SignUp';
import SignIn from './Component/Authentication/SignIn';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <ButtonAppBar />
      <Switch>
        <Route exact path="/aboutUs" component={AboutUs}/>
        <Route exact path="/contactUs" component={ContactUs}/>
        <Route exact path="/signUp" component={SignUp} />
        <Route exact path="/signIn" component={SignIn} />

        <Route exact path="/services" component={Services} />
        <Route exact path="/" component={Home}/>
      </Switch>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
