import './App.css';
import { Switch } from 'react-router';
import { BrowserRouter, Route } from 'react-router-dom'
import { Home } from './components/Home'
import { About } from './components/About'
import {Favourite} from './components/Favourite'
import  CardDetails  from './components/detailspage/CardDetails';
import {Login} from './components/login/Login';
import {ArtistLogin} from './components/login/ArtistLogin'
import {AddProfile} from './components/artistprofile/AddProfile'
import { ArtistProfileCard } from './components/artistprofile/ArtistProfileCard';





function App() {
  return (
    <>
    
      <BrowserRouter>
      
        <Switch>
          <Route exact path='/' component={Login} />
          <Route exact path='/home' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/favourite' component={Favourite} /> 
          <Route exact path='/carddetails' component={CardDetails}/> 
          <Route exact path='/login' component={Login} /> 
          <Route exact path='/loginartist' component={ArtistLogin}/>
          <Route exact path='/addartistdetails' component={AddProfile}/>
          <Route exact path='/artistprofilecard' component={ArtistProfileCard}/>


          
        
          <Home />
        </Switch>
      </BrowserRouter>
      
    </>
  );
}

export default App;
