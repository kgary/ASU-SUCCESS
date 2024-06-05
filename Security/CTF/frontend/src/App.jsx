import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import UserInputPage from './components/UserInputPage';
import ChallengePage from './components/ChallengePage';
import LeaderBoard from './components/LeaderBoard';
import WarningPage from './pages/Warning';
import Admin from './pages/Admin';


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path="/start" element={<UserInputPage />} />
      <Route path="/challenges" element={<ChallengePage />} />
      <Route path="/leaderboard" element={<LeaderBoard />} />
      <Route path="/warningpage" element={<WarningPage/>} />
      <Route path='/admin' element={<Admin/>}/>
    </Routes>
  )
}

export default App