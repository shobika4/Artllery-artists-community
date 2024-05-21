
import './App.css';
import Home from './Home.js';
import About  from './About.js';
import Community from './Community.js';
import Artists from './Artists.js';
import Contact from './Contact.js';
import ArtistSignup from './ArtistSignup.js';
import UserLogin from './UserLogin.js';

import {BrowserRouter , Routes, Route} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/community' element={<Community/>}/>
      <Route path='/artists' element={<Artists/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/artistSignup' element={<ArtistSignup/>}/>
      <Route path='/Login' element={<UserLogin/>}/>

    </Routes>


    </BrowserRouter>
    
  );
}

export default App;
