import { Route, Routes } from 'react-router-dom';
import './App.css';
import './components/css/main.css';
import './components/css/profile.css';
import Header from './components/page/Header';
import SignIn from './components/page/Login';
import MyAccount from './components/page/MyAccount';
import MyAppointment from './components/page/MyAppointment';
import Profile from './components/page/Profile';
import RecordDetails from './components/page/RecordDetailes';
import UserAppointDetails from './components/page/UserAppointDetails';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/login" element={<SignIn />} />
        <Route path="" element={<SignIn />} />
        <Route path="/profile_change" element={<Profile   />} />
        <Route path="/user_appoint" element={<UserAppointDetails   />} />
        <Route path="/record_details/:recordID" element={<RecordDetails   />} />
        <Route path="/my_account" element={<MyAccount   />} />
        <Route path="/my_appointment" element={<MyAppointment   />} />

         

         

         
      </Routes>
    </div>
  );
}

export default App;
