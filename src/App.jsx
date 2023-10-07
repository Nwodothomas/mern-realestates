// eslint-disable-next-line no-unused-vars

import {BowserRouter, Routes, Route} from 'reat-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import Signup from './pages/Signup';
import About from './pages/About';
import Profile from './pages/Profile';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/SignIn' element={<SignIn />} />
        <Route path='/Signup' element={<Signup />} />
        <Route path='/About' element={<About />} />
        <Route path='/Profile' element={<Profile />} />
      </Routes>
    </BrowserRouter>
  )
}
